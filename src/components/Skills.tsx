"use client";

import { color, motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Cloud, Layout, Server, Wrench } from "lucide-react";
import { skills, Skill } from "@/data/portfolio";

const categories = [
  {
    id: "salesforce",
    name: "Salesforce",
    color: "var(--color-sf-blue)",
    icon: Cloud,
    description: "CRM & Platform Development",
  },
  {
    id: "frontend",
    name: "Frontend",
    color: "var(--color-spot-pink)",
    icon: Layout,
    description: "UI & Web Applications",
  },
  {
    id: "backend",
    name: "Backend",
    color: "var(--color-spot-green)",
    icon: Server,
    description: "APIs & Databases",
  },
  {
    id: "tools",
    name: "Tools",
    color: "var(--color-spot-yellow)",
    icon: Wrench,
    description: "Dev Environment",
  },
] as const;

function SkillCategory({
  category,
  categorySkills,
  index,
  isInView,
}: {
  category: (typeof categories)[number];
  categorySkills: Skill[];
  index: number;
  isInView: boolean;
}) {
  const Icon = category.icon;

  return (
		<motion.div
			initial={{ opacity: 0, y: 20 }}
			animate={isInView ? { opacity: 1, y: 0 } : {}}
			transition={{ duration: 0.5, delay: index * 0.1 }}
			className="group">
			<div className="p-6 rounded-xl bg-background-secondary border border-border hover:border-gray-400 transition-all duration-300 h-full">
				{/* Category header */}
				<div className="flex items-center gap-3 mb-4">
					<div className="p-2 rounded-lg bg-foreground/10">
						<Icon size={20} style={{color: category.color}} />
					</div>
					<div>
						<h3
							className={`font-semibold text-foreground`}
							style={{ color: category.color }}>
							{category.name}
						</h3>
						<p className="text-xs text-foreground-muted">
							{category.description}
						</p>
					</div>
				</div>

				{/* Skills list */}
				<div className="flex flex-wrap gap-2">
					{categorySkills.map((skill) => (
						<span
							key={skill.name}
							style={
								{ '--category-color': category.color } as React.CSSProperties
							}
							className="px-3 py-1.5 text-sm rounded-md bg-background-tertiary text-foreground-muted border border-border hover:border-[var(--category-color)] hover:text-[var(--category-color)] transition-all cursor-default">
							{skill.name}
						</span>
					))}
				</div>
			</div>
		</motion.div>
	);
}

export function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="skills"
      className="py-24 md:py-32 bg-background-secondary/30"
      ref={ref}
    >
      <div className="max-w-6xl mx-auto px-6">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-accent">03.</span> Skills & Technologies
          </h2>
          <div className="section-divider max-w-xs" />
          <p className="mt-4 text-foreground-muted max-w-2xl">
            From Salesforce implementations to full-stack web apps, here&apos;s
            what I work with day to day.
          </p>
        </motion.div>

        {/* Skills grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category, index) => {
            const categorySkills = skills.filter(
              (s) => s.category === category.id
            );
            return (
              <SkillCategory
                key={category.id}
                category={category}
                categorySkills={categorySkills}
                index={index}
                isInView={isInView}
              />
            );
          })}
        </div>

        {/* Currently learning */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-12 text-center"
        >
          <p className="text-foreground-muted">
            <span className="text-accent">Currently exploring:</span>{" "}
            AI/ML integrations, advanced Python patterns, and system design
          </p>
        </motion.div>
      </div>
    </section>
  );
}
