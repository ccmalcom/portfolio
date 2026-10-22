"use client";

import { Cloud, Layout, Server, Wrench } from "lucide-react";
import { skills, Skill } from "@/data/portfolio";
import { SectionHeader } from "./SectionHeader";

const categories = [
  {
    id: "salesforce",
    name: "Salesforce",
    color: "var(--color-sf-blue-text)",
    icon: Cloud,
    description: "CRM & Platform Development",
  },
  {
    id: "frontend",
    name: "Frontend",
    color: "var(--color-spot-pink-text)",
    icon: Layout,
    description: "UI & Web Applications",
  },
  {
    id: "backend",
    name: "Backend",
    color: "var(--color-spot-green-text)",
    icon: Server,
    description: "APIs & Databases",
  },
  {
    id: "tools",
    name: "Tools",
    color: "var(--color-spot-yellow-text)",
    icon: Wrench,
    description: "Dev Environment",
  },
] as const;

function SkillCategory({
  category,
  categorySkills,
}: {
  category: (typeof categories)[number];
  categorySkills: Skill[];
}) {
  const Icon = category.icon;

  return (
		<div className="group">
			<div className="p-6 rounded-xl bg-background border border-border hover:border-foreground-muted transition-all duration-300 h-full">
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
		</div>
	);
}

export function Skills() {
  return (
    <section
      id="skills"
      className="py-16 md:py-24 bg-background-secondary"
    >
      <div className="max-w-6xl mx-auto px-6">
        {/* Section header */}
        <SectionHeader title="Skills & Technologies" spot="green">
          From Salesforce implementations to full-stack web apps, here&apos;s
          what I work with day to day.
        </SectionHeader>

        {/* Skills grid */}
        <div className="grid sm:grid-cols-2 gap-6">
          {categories.map((category) => {
            const categorySkills = skills.filter(
              (s) => s.category === category.id
            );
            return (
              <SkillCategory
                key={category.id}
                category={category}
                categorySkills={categorySkills}
              />
            );
          })}
        </div>

        {/* Currently learning */}
        <div className="mt-12 text-center">
          <p className="text-foreground-muted">
            <span className="text-accent-text">Currently exploring:</span>{" "}
            AI/ML integrations, advanced Python patterns, and system design
          </p>
        </div>
      </div>
    </section>
  );
}
