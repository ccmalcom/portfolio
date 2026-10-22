"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowDown, ArrowRight } from "lucide-react";
import { projects } from "@/data/portfolio";

const featured = projects.find((p) => p.id === "canine-castaways");

export function Hero() {
  // MotionConfig drops transforms under reduced motion but still loops opacity; hold the dots still.
  const reduceMotion = useReducedMotion();
  const scrollToAbout = () => {
    document.getElementById("about")?.scrollIntoView();
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Floating decorative elements */}
      <motion.div
        className="absolute top-1/4 left-[5%] sm:left-[15%] w-4 h-4 rounded-full bg-spot-blue"
        animate={reduceMotion ? undefined : { y: [0, -20, 0], opacity: [0.6, 1, 0.6] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute top-1/3 right-[20%] w-5 h-5 rounded-full bg-spot-pink"
        animate={reduceMotion ? undefined : { y: [0, 15, 0], opacity: [0.5, 0.9, 0.5] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      />
      <motion.div
        className="absolute bottom-1/3 left-[25%] w-3 h-3 rounded-full bg-spot-green"
        animate={reduceMotion ? undefined : { y: [0, -15, 0], opacity: [0.7, 1, 0.7] }}
        transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
      />
      <motion.div
        className="absolute top-1/2 right-[12%] w-2 h-2 rounded-full bg-spot-yellow"
        animate={reduceMotion ? undefined : { y: [0, 10, 0], opacity: [0.5, 0.8, 0.5] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      />

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
       

        {/* Main headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1] mb-6"
        >
          <span className="text-foreground">Salesforce Developer,</span>
          <br />
          <span className="text-foreground">Web Developer </span>
          <span className="text-foreground">&</span>
          <br />
          <span className="gradient-text">Problem Solver</span>
        </motion.h1>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg sm:text-xl text-foreground-muted max-w-2xl mx-auto mb-12"
        >
          I build solutions that actually work for people, and I love what I do.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a href="#projects" className="btn bg-spot-blue text-on-spot">
            View My Work
          </a>
          <a href="#contact" className="btn btn-secondary">
            Get In Touch
          </a>
        </motion.div>

        {featured && (
          <a
            href={`#project-${featured.id}`}
            className="group gradient-border mt-10 mx-auto flex max-w-md items-center justify-between gap-4 rounded-lg border border-border bg-background-secondary px-5 py-4 text-left transition-colors"
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
      </div>

      {/* Scroll indicator */}
      <motion.button
        onClick={scrollToAbout}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-foreground-muted hover:text-foreground transition-colors"
        aria-label="Scroll to about section"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDown size={24} />
        </motion.div>
      </motion.button>
    </section>
  );
}
