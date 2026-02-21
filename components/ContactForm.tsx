"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

type FieldType = {
  name: string;
  type: "text" | "email" | "tel" | "select" | "date" | "textarea";
  label: string;
  required?: boolean;
  options?: string[];
};

interface ContactFormProps {
  fields: FieldType[];
  submitLabel?: string;
}

export default function ContactForm({ fields, submitLabel = "Submit" }: ContactFormProps) {
  const initial = Object.fromEntries(fields.map(field => [field.name, ""]));
  const [values, setValues] = useState<{ [key: string]: string }>(initial);
  const [submitting, setSubmitting] = useState(false);
  const [sent, setSent] = useState(false);

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
    setValues(v => ({
      ...v,
      [e.target.name]: e.target.value
    }));
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      setSent(true);
      setSubmitting(false);
    }, 800); // simulate response
  }

  if (sent)
    return (
      <div className="rounded-lg border bg-background p-8 text-center shadow-sm">
        <h2 className="text-2xl font-bold mb-4">Thank you!</h2>
        <p className="text-muted-foreground">We received your request and will get back to you soon.</p>
      </div>
    );

  return (
    <form className="rounded-lg border bg-background p-8 shadow-sm space-y-6" onSubmit={handleSubmit} autoComplete="off">
      {fields.map(field => (
        <div key={field.name} className="space-y-2">
          <Label htmlFor={field.name}>{field.label}</Label>
          {field.type === "textarea" ? (
            <Textarea
              id={field.name}
              name={field.name}
              rows={5}
              placeholder={field.label}
              required={field.required}
              value={values[field.name] || ""}
              onChange={handleChange}
            />
          ) : field.type === "select" && field.options ? (
            <select
              id={field.name}
              name={field.name}
              className="w-full rounded-md border px-3 py-2 text-base"
              required={field.required}
              value={values[field.name] || ""}
              onChange={handleChange}
            >
              <option value="">Select...</option>
              {field.options.map(opt => (
                <option key={opt} value={opt}>{opt}</option>
              ))}
            </select>
          ) : (
            <Input
              id={field.name}
              name={field.name}
              type={field.type}
              required={field.required}
              value={values[field.name] || ""}
              onChange={handleChange}
              placeholder={field.label}
            />
          )}
        </div>
      ))}
      <Button className="w-full" type="submit" disabled={submitting}>
        {submitting ? "Submitting..." : submitLabel}
      </Button>
    </form>
  );
}
