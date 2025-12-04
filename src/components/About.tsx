'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Music, Leaf, Code2, Briefcase } from 'lucide-react';
import { aboutContent } from '@/data/portfolio';
import Image from 'next/image';

export function About() {
	const ref = useRef(null);
	const isInView = useInView(ref, { once: true, margin: '-100px' });

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
		<section id="about" className="py-24 md:py-32" ref={ref}>
			<div className="max-w-6xl mx-auto px-6">
				{/* Section header */}
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={isInView ? { opacity: 1, y: 0 } : {}}
					transition={{ duration: 0.5 }}
					className="mb-16">
					<h2 className="text-3xl md:text-4xl font-bold mb-4">
						<span className="text-spot-blue">01.</span> About Me
					</h2>
					<div className="section-divider max-w-xs" />
				</motion.div>

				<div className="grid lg:grid-cols-5 gap-12 lg:gap-16 items-start">
					{/* Avatar and highlights column */}
					<motion.div
						initial={{ opacity: 0, x: -20 }}
						animate={isInView ? { opacity: 1, x: 0 } : {}}
						transition={{ duration: 0.6, delay: 0.2 }}
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
							{highlights.map((item, index) => (
								<motion.div
									key={item.label}
									initial={{ opacity: 0, y: 10 }}
									animate={isInView ? { opacity: 1, y: 0 } : {}}
									transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
									className="p-3 rounded-lg bg-background-secondary border border-border">
									<item.icon size={18} className="text-spot-blue mb-2" />
									<p className="text-sm font-medium text-foreground">
										{item.label}
									</p>
									<p className="text-xs text-foreground-muted">
										{item.description}
									</p>
								</motion.div>
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
					</motion.div>

					{/* Bio content column */}
					<motion.div
						initial={{ opacity: 0, x: 20 }}
						animate={isInView ? { opacity: 1, x: 0 } : {}}
						transition={{ duration: 0.6, delay: 0.3 }}
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

						<div className="pt-4 border-t border-border">
							<p className="text-foreground italic">
								&ldquo;{aboutContent.goal}&rdquo;
							</p>
						</div>

						{/* Location indicator */}
						<div className="flex items-center gap-2 text-sm text-foreground-muted pt-4">
							<span className="w-2 h-2 rounded-full bg-spot-blue animate-pulse" />
							<span>Based in Indiana, USA</span>
						</div>
					</motion.div>
				</div>
			</div>
		</section>
	);
}
