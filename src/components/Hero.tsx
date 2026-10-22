"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowDown, ArrowRight } from "lucide-react";
import { projects } from "@/data/portfolio";

const featured = projects.find((p) => p.id === "canine-castaways");

export function Hero() {
  // MotionConfig skips transforms under reduced motion but still fades opacity; skip the fade too.
  const reduceMotion = useReducedMotion();
  const scrollToAbout = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-radial from-accent/5 via-transparent to-transparent" />

      <motion.div
        initial={reduceMotion ? false : { opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="relative z-10 max-w-4xl mx-auto px-6 text-center"
      >
       

        {/* Main headline */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1] mb-6">
          <span className="text-foreground">Salesforce Developer,</span>
          <br />
          <span className="text-foreground">Web Developer </span>
          <span className="text-foreground">&</span>
          <br />
          <span className="text-spot-blue-text">Problem Solver</span>
        </h1>

        {/* Tagline */}
        <p className="text-lg sm:text-xl text-foreground-muted max-w-2xl mx-auto mb-12">
          I build solutions that actually work for people, and I love what I do.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a href="#projects" className="btn bg-spot-blue text-on-spot">
            View My Work
          </a>
          <a href="#contact" className="btn btn-secondary">
            Get In Touch
          </a>
        </div>

        {featured && (
          <a
            href={`#project-${featured.id}`}
            className="group mt-10 mx-auto flex max-w-md items-center justify-between gap-4 rounded-lg border border-border bg-background-secondary px-5 py-4 text-left transition-colors hover:border-spot-pink"
          >
            <span className="min-w-0">
              <span className="block text-sm text-foreground-muted">
                Recent project
              </span>
              <span className="block font-semibold text-foreground">
                {featured.title}
              </span>
              <span className="block text-sm text-foreground-muted">
                {featured.highlights[0]}. {featured.highlights[1]}.
              </span>
            </span>
            <ArrowRight
              size={20}
              className="shrink-0 text-spot-pink-text transition-transform group-hover:translate-x-1"
              aria-hidden="true"
            />
          </a>
        )}
      </motion.div>

      {/* Scroll indicator (static) */}
      <button
        onClick={scrollToAbout}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-foreground-muted hover:text-foreground transition-colors"
        aria-label="Scroll to about section"
      >
        <ArrowDown size={24} />
      </button>
    </section>
  );
}
