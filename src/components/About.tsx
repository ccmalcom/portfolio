'use client';

import { Music, Leaf, Code2, Briefcase } from 'lucide-react';
import { aboutContent } from '@/data/portfolio';
import Image from 'next/image';
import { SectionHeader } from './SectionHeader';

export function About() {
	const highlights = [
		{
			icon: Briefcase,
			label: '4+ Years Experience',
			description: 'Salesforce & Web Dev',
		},
		{
			icon: Code2,
			label: 'Full Stack',
			description: 'Frontend to Apex',
		},
		{
			icon: Music,
			label: 'Former Educator',
			description: 'Band Director',
		},
		{
			icon: Leaf,
			label: 'Nature Lover',
			description: 'Hiker & Gardener',
		},
	];

	return (
		<section id="about" className="py-16 md:py-24">
			<div className="max-w-6xl mx-auto px-6">
				{/* Section header */}
				<SectionHeader title="About Me" spot="blue" />

				<div className="grid lg:grid-cols-5 gap-12 lg:gap-16 items-start">
					{/* Avatar and highlights column */}
					<div
						className="lg:col-span-2 flex flex-col items-center lg:items-start">
						{/* Avatar container */}
						<div className="relative mb-8">
							<div className="w-48 h-48 md:w-56 md:h-56 rounded-2xl overflow-hidden bg-background-tertiary border-2 border-border relative">
								<div className="absolute inset-0 flex items-center justify-center text-foreground-muted">
									<Image
										src="/avatar.png"
										alt="Chase Malcom avatar"
										fill
										className="object-cover"
										priority
									/>
								</div>
							</div>
							{/* Decorative border */}
							<div className="absolute -bottom-3 -right-3 w-48 h-48 md:w-56 md:h-56 rounded-2xl border-2 border-spot-blue/20 -z-10" />
						</div>

						{/* Quick highlights */}
						<div className="grid grid-cols-2 gap-3 w-full max-w-sm">
							{highlights.map((item) => (
								<div
									key={item.label}
									className="p-3 rounded-lg bg-background-secondary border border-border">
									<item.icon size={18} className="text-spot-blue-text mb-2" />
									<p className="text-sm font-medium text-foreground">
										{item.label}
									</p>
									<p className="text-xs text-foreground-muted">
										{item.description}
									</p>
								</div>
							))}
						{/* Fun note */}
						<div className="p-4 rounded-lg border border-dashed col-span-2">
							<p className="text-sm text-foreground-muted italic">
								🌱 Fun fact: When I&apos;m not coding, I&apos;m probably hiking
								a trail or tending to my garden. Growing things—whether
								it&apos;s plants or software—brings me joy.
							</p>
						</div>
						</div>
					</div>

					{/* Bio content column */}
					<div
						className="lg:col-span-3 space-y-6">
						<p className="text-lg text-foreground leading-relaxed">
							{aboutContent.intro}
						</p>

						<p className="text-foreground-muted leading-relaxed">
							{aboutContent.background}
						</p>

						<p className="text-foreground-muted leading-relaxed">
							{aboutContent.current}
						</p>

						

						{/* Location indicator */}
						<div className="flex items-center gap-2 text-sm text-foreground-muted pt-4">
							<span className="w-2 h-2 rounded-full bg-spot-blue" />
							<span>Based in Indiana, USA</span>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
