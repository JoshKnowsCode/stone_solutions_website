import { useState } from "react";
import { z } from "zod";
import { toast } from "sonner";

const schema = z.object({
  name: z.string().trim().min(2, "Please enter your name").max(100),
  email: z.string().trim().email("Enter a valid email").max(255),
  phone: z.string().trim().min(7, "Enter a valid phone").max(30),
  zip: z.string().trim().max(20).optional().or(z.literal("")),
  material: z.enum(["Quartz", "Granite", "Solid Surface", "Commercial", "Not sure"]),
  message: z.string().trim().max(1000).optional().or(z.literal("")),
});

interface Props { variant?: "dark" | "light"; compact?: boolean }

export function QuoteForm({ variant = "dark", compact = false }: Props) {
  const [submitting, setSubmitting] = useState(false);
  const dark = variant === "dark";
  const inputCls = `w-full bg-transparent border-b ${dark ? "border-white/20 focus:border-white" : "border-black/20 focus:border-black"} py-2 text-sm focus:outline-none transition-colors`;
  const labelCls = `text-[10px] uppercase tracking-[0.22em] ${dark ? "text-white/50" : "text-black/50"}`;

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitting(true);
    const fd = new FormData(e.currentTarget);
    const result = schema.safeParse({
      name: fd.get("name"),
      email: fd.get("email"),
      phone: fd.get("phone"),
      zip: fd.get("zip") ?? "",
      material: fd.get("material"),
      message: fd.get("message") ?? "",
    });
    if (!result.success) {
      toast.error(result.error.issues[0]?.message ?? "Please check the form");
      setSubmitting(false);
      return;
    }
    // Submit hookup — wire to email/CRM later.
    await new Promise((r) => setTimeout(r, 600));
    toast.success("Thanks — we'll be in touch within one business day.");
    (e.target as HTMLFormElement).reset();
    setSubmitting(false);
  }

  return (
    <form onSubmit={onSubmit} className={`space-y-5 ${compact ? "" : ""}`}>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <label className="space-y-2 block">
          <span className={labelCls}>Name</span>
          <input name="name" required className={inputCls} />
        </label>
        <label className="space-y-2 block">
          <span className={labelCls}>Phone</span>
          <input name="phone" type="tel" required className={inputCls} />
        </label>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <label className="space-y-2 block">
          <span className={labelCls}>Email</span>
          <input name="email" type="email" required className={inputCls} />
        </label>
        <label className="space-y-2 block">
          <span className={labelCls}>ZIP</span>
          <input name="zip" className={inputCls} />
        </label>
      </div>
      <label className="space-y-2 block">
        <span className={labelCls}>Material Interest</span>
        <select name="material" required defaultValue="Quartz" className={inputCls}>
          <option className="text-foreground bg-background">Quartz</option>
          <option className="text-foreground bg-background">Granite</option>
          <option className="text-foreground bg-background">Solid Surface</option>
          <option className="text-foreground bg-background">Commercial</option>
          <option className="text-foreground bg-background">Not sure</option>
        </select>
      </label>
      {!compact && (
        <label className="space-y-2 block">
          <span className={labelCls}>Project Details</span>
          <textarea name="message" rows={3} className={`${inputCls} resize-none`} />
        </label>
      )}
      <button
        type="submit"
        disabled={submitting}
        className={`w-full mt-2 py-4 text-[11px] uppercase tracking-[0.22em] font-medium transition-opacity ${dark ? "bg-primary text-primary-foreground" : "bg-foreground text-background"} hover:opacity-90 disabled:opacity-60`}
      >
        {submitting ? "Sending…" : "Request My Free Estimate"}
      </button>
      <p className={`text-[10px] uppercase tracking-[0.18em] ${dark ? "text-white/40" : "text-black/40"}`}>
        We respond within one business day.
      </p>
    </form>
  );
}
