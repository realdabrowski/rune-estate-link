import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";

const formSchema = z.object({
  name: z.string().trim().min(1, { message: "Full name is required" }).max(100, { message: "Name must be less than 100 characters" }),
  email: z.string().trim().email({ message: "Invalid email address" }).max(255, { message: "Email must be less than 255 characters" }),
  idea: z.string().trim().min(1, { message: "Please tell us about your asset" }).max(1000, { message: "Description must be less than 1000 characters" }),
  message: z.string().trim().max(2000, { message: "Message must be less than 2000 characters" }).optional(),
});

type FormData = z.infer<typeof formSchema>;

interface BetaAccessFormProps {
  onSuccess: () => void;
}

export const BetaAccessForm = ({ onSuccess }: BetaAccessFormProps) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    
    try {
      const { error } = await supabase.functions.invoke("send-beta-request", {
        body: data,
      });

      if (error) throw error;

      toast({
        title: "Thanks! We'll review your tokenization idea and get back soon.",
        description: "Check your email for confirmation.",
      });
      
      reset();
      onSuccess();
    } catch (error: any) {
      console.error("Error submitting form:", error);
      toast({
        title: "Something went wrong",
        description: "Please try again or contact us directly at estaterune@proton.me",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div className="space-y-2">
        <Label htmlFor="name">Full Name *</Label>
        <Input
          id="name"
          placeholder="John Doe"
          {...register("name")}
          className="bg-cyber-darker/50 border-neon-purple/30 focus:border-neon-cyan"
        />
        {errors.name && (
          <p className="text-sm text-red-500">{errors.name.message}</p>
        )}
      </div>

      <div className="space-y-2">
        <Label htmlFor="email">Email Address *</Label>
        <Input
          id="email"
          type="email"
          placeholder="john@example.com"
          {...register("email")}
          className="bg-cyber-darker/50 border-neon-purple/30 focus:border-neon-cyan"
        />
        {errors.email && (
          <p className="text-sm text-red-500">{errors.email.message}</p>
        )}
      </div>

      <div className="space-y-2">
        <Label htmlFor="idea">Idea for Tokenization *</Label>
        <Textarea
          id="idea"
          placeholder="Tell us about the real-world asset you'd like to tokenize on Bitcoin (e.g., 'Apartment in Wrocław' or 'Art collection')"
          rows={4}
          {...register("idea")}
          className="bg-cyber-darker/50 border-neon-purple/30 focus:border-neon-cyan resize-none"
        />
        {errors.idea && (
          <p className="text-sm text-red-500">{errors.idea.message}</p>
        )}
      </div>

      <div className="space-y-2">
        <Label htmlFor="message">Additional Message (Optional)</Label>
        <Textarea
          id="message"
          placeholder="Any additional details you'd like to share..."
          rows={3}
          {...register("message")}
          className="bg-cyber-darker/50 border-neon-purple/30 focus:border-neon-cyan resize-none"
        />
        {errors.message && (
          <p className="text-sm text-red-500">{errors.message.message}</p>
        )}
      </div>

      <Button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-gradient-to-r from-neon-pink to-neon-purple text-white hover:opacity-90 transition-opacity"
        style={{ boxShadow: 'var(--shadow-neon-pink)' }}
      >
        {isSubmitting ? "Sending..." : "Submit Request"}
      </Button>
    </form>
  );
};
