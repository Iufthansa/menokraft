import { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { CheckCircle2, Loader2, Upload } from "lucide-react";
import { useToast } from "@/hooks/use-toast";


const schema = z.object({
  full_name: z.string().trim().min(2, "Name is required").max(100),
  email: z.string().trim().email("Valid email required").max(255),
  phone: z.string().trim().min(7, "Phone number is required").max(20),
  cover_letter: z.string().max(2000).optional(),
});

type FormData = z.infer<typeof schema>;

interface ApplicationFormProps {
  jobId: number;
  jobTitle: string;
}



const ApplicationForm = ({ jobId, jobTitle }: ApplicationFormProps) => {
  const [file, setFile] = useState<File | null>(null);
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const { toast } = useToast();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data: FormData) => {
  if (!file) {
    toast({
      title: "Resume required",
      description: "Please upload your resume",
      variant: "destructive",
    });
    return;
  }

  setSubmitting(true);

  try {
    const formData = new FormData();
    formData.append("job_id", jobId.toString());
    formData.append("fullname", data.full_name);
    formData.append("email", data.email);
    formData.append("phone", data.phone);
    formData.append("resume", file); // 🔥 important
    formData.append("cover_letter", data.cover_letter || "");

    for(let pair of formData.entries()) {
      console.log(pair[0], pair[1])
    };

    await axios.post("https://menokraft.onrender.com/applications", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });

    setSubmitted(true);

  } catch (err: any) {
  console.error(err.response?.data); // 🔥 IMPORTANT
  toast({
    title: "Submission failed",
    description: err.response?.data?.error || "Please try again.",
    variant: "destructive",
  });
  } finally {
    setSubmitting(false);
  }
};



  if (submitted) {
    return (
      <div className="bg-accent/5 border border-accent/20 rounded-lg p-8 text-center">
        <CheckCircle2 size={48} className="text-accent mx-auto mb-4" />
        <h3 className="text-xl font-bold text-foreground mb-2">Application Submitted!</h3>
        <p className="text-muted-foreground">
          Thank you for applying to <strong>{jobTitle}</strong>. We'll review your application and get back to you soon.
        </p>
      </div>
    );
  };


  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
      <h3 className="text-xl font-bold text-foreground">Apply Now</h3>

      <div>
        <Label htmlFor="full_name">Full Name *</Label>
        <Input id="full_name" {...register("full_name")} placeholder="John Doe" />
        {errors.full_name && <p className="text-destructive text-xs mt-1">{errors.full_name.message}</p>}
      </div>

      <div>
        <Label htmlFor="email">Email *</Label>
        <Input id="email" type="email" {...register("email")} placeholder="john@example.com" />
        {errors.email && <p className="text-destructive text-xs mt-1">{errors.email.message}</p>}
      </div>

      <div>
        <Label htmlFor="phone">Phone Number *</Label>
        <Input id="phone" {...register("phone")} placeholder="+234 803 123 4567" />
        {errors.phone && <p className="text-destructive text-xs mt-1">{errors.phone.message}</p>}
      </div>

      <div>
        <Label htmlFor="resume">Resume (PDF/DOCX)</Label>
        <div className="mt-1">
          <label
            htmlFor="resume"
            className="flex items-center gap-2 border border-dashed rounded-lg p-4 cursor-pointer hover:border-accent transition-colors text-sm text-muted-foreground"
          >
            <Upload size={18} />
            {file ? file.name : "Click to upload your resume"}
          </label>
          <input
            id="resume"
            type="file"
            accept=".pdf,.docx,.doc"
            className="hidden"
            onChange={(e) => setFile(e.target.files?.[0] || null)}
          />
        </div>
      </div>

      <div>
        <Label htmlFor="cover_letter">Cover Letter (optional)</Label>
        <Textarea
          id="cover_letter"
          {...register("cover_letter")}
          placeholder="Tell us why you're a great fit..."
          rows={4}
        />
      </div>

      <Button type="submit" disabled={submitting || !file} className="w-full">
        {submitting ? (
          <>
            <Loader2 size={16} className="animate-spin mr-2" />
            Submitting...
          </>
        ) : (
          "Submit Application"
        )}
      </Button>
    </form>
  );
};

export default ApplicationForm;
