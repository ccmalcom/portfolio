"use client";

import { useState } from "react";
import { Send, Github, Linkedin, Mail, Loader2, CheckCircle } from "lucide-react";
import { socialLinks } from "@/data/portfolio";
import { SectionHeader } from "./SectionHeader";

export function Contact() {

  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });
  const emailAddress = socialLinks.email.replace(/^mailto:/, "");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    // Simulate form submission - replace with actual Formspree or other service
    // For Formspree: https://formspree.io
    try {
      const response = await fetch('https://formspree.io/f/xwkalrjq', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
          'Accept': 'application/json',
				},
				body: JSON.stringify(formState),
			});

      if (response.ok) {
        setStatus("success");
        setFormState({ name: "", email: "", message: "" });
      } else {
        throw new Error("Form submission failed");
      }
    } catch (error) {
      console.error(error);
      setStatus("error");
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormState((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <section id="contact" className="py-16 md:py-24">
      <div className="max-w-4xl mx-auto px-6">
        {/* Section header */}
        <SectionHeader title="Get In Touch" spot="yellow" align="center">
          Whether you have a project in mind, a question about Salesforce, or
          just want to say hello—my inbox is always open.
        </SectionHeader>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact form */}
          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-foreground mb-2"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formState.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-background-secondary border border-border focus:border-spot-yellow-text focus-visible:ring-2 focus-visible:ring-spot-yellow-text text-foreground placeholder-foreground-muted transition-colors focus:outline-none"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-foreground mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formState.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-background-secondary border border-border focus:border-spot-yellow-text focus-visible:ring-2 focus-visible:ring-spot-yellow-text text-foreground placeholder-foreground-muted transition-colors focus:outline-none"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-foreground mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formState.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg bg-background-secondary border border-border focus:border-spot-yellow-text focus-visible:ring-2 focus-visible:ring-spot-yellow-text text-foreground placeholder-foreground-muted transition-colors resize-none focus:outline-none"
                  placeholder="What's on your mind?"
                />
              </div>

              <button
                type="submit"
                disabled={status === "loading" || status === "success"}
                className="w-full btn bg-spot-yellow text-black disabled:opacity-50 disabled:cursor-not-allowed focus-visible:outline-2 focus-visible:outline-offset-2"
              >
                {status === "loading" ? (
                  <>
                    <Loader2 size={18} className="animate-spin" />
                    Sending...
                  </>
                ) : status === "success" ? (
                  <>
                    <CheckCircle size={18} />
                    Message Sent!
                  </>
                ) : (
                  <>
                    <Send size={18} />
                    {status === "error" ? "Try again" : "Send Message"}
                  </>
                )}
              </button>

              {/* Status message: announced to assistive tech */}
              <div role="status" aria-live="polite" className="text-sm">
                {status === "error" && (
                  <p className="text-foreground">
                    That didn&apos;t go through, and your message is still here.
                    Try again, or email me directly at{" "}
                    <a
                      href={socialLinks.email}
                      className="font-medium text-spot-yellow-text underline underline-offset-2"
                    >
                      {emailAddress}
                    </a>
                    .
                  </p>
                )}
                {status === "success" && (
                  <p className="text-foreground">
                    Thanks, I&apos;ll get back to you soon.{" "}
                    <button
                      type="button"
                      onClick={() => setStatus("idle")}
                      className="inline-flex min-h-11 items-center font-medium text-spot-yellow-text underline underline-offset-2"
                    >
                      Send another message
                    </button>
                  </p>
                )}
              </div>
            </form>
          </div>

          {/* Contact info & social links */}
          <div className="space-y-8">
            <div>
              <h3 className="text-lg font-semibold text-foreground mb-4">
                Other ways to connect
              </h3>
              <p className="text-foreground-muted mb-6">
                Prefer to reach out directly? Email me, or connect on
                social media.
              </p>
            </div>

            {/* Social links */}
            <div className="space-y-4">
              <a
                href={socialLinks.email}
                className="flex items-center gap-4 p-4 rounded-lg bg-background-secondary border border-border hover:border-spot-yellow/30 transition-all group"
              >
                <div className="p-2 rounded-lg bg-spot-yellow-muted group-hover:bg-spot-yellow/20 transition-colors">
                  <Mail size={20} className="text-spot-yellow-text" />
                </div>
                <div className="min-w-0">
                  <p className="font-medium text-foreground">Email</p>
                  <p className="text-sm text-foreground-muted break-all">{emailAddress}</p>
                </div>
              </a>

              <a
                href={socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-lg bg-background-secondary border border-border hover:border-spot-yellow/30 transition-all group"
              >
                <div className="p-2 rounded-lg bg-spot-yellow-muted group-hover:bg-spot-yellow/20 transition-colors">
                  <Github size={20} className="text-spot-yellow-text" />
                </div>
                <div>
                  <p className="font-medium text-foreground">GitHub</p>
                  <p className="text-sm text-foreground-muted">@ccmalcom</p>
                </div>
              </a>

              <a
                href={socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-lg bg-background-secondary border border-border hover:border-spot-yellow/30 transition-all group"
              >
                <div className="p-2 rounded-lg bg-spot-yellow-muted group-hover:bg-spot-yellow/20 transition-colors">
                  <Linkedin size={20} className="text-spot-yellow-text" />
                </div>
                <div>
                  <p className="font-medium text-foreground">LinkedIn</p>
                  <p className="text-sm text-foreground-muted">chase-malcom</p>
                </div>
              </a>
            </div>

            
          </div>
        </div>
      </div>
    </section>
  );
}
