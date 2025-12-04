'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { ExternalLink, Github, ChevronRight } from 'lucide-react';
import { projects, Project } from '@/data/portfolio';
import Image from 'next/image';

function ProjectCard({
	project,
	index,
	isInView,
}: {
	project: Project;
	index: number;
	isInView: boolean;
}) {
	const [isHovered, setIsHovered] = useState(false);
	const [isSwapped, setIsSwapped] = useState(false);
	const isEven = index % 2 === 0;
	const hasBackImage = !!project.backImage;
	const hasBgImage = !!project.bg;

	// Determine which image is front/back based on swap state
	const frontImage = isSwapped ? project.backImage! : project.image;
	const backImage = isSwapped ? project.image : project.backImage!;
	const frontLabel = isSwapped ? 'Salesforce Admin' : 'Public Site';
	const backLabel = isSwapped ? 'Public Site' : 'Salesforce Admin';

	return (
		<motion.article
			initial={{ opacity: 0, y: 40 }}
			animate={isInView ? { opacity: 1, y: 0 } : {}}
			transition={{ duration: 0.6, delay: index * 0.15 }}
			className={`grid lg:grid-cols-12 gap-6 lg:gap-8 items-center ${
				!isEven ? 'lg:text-right' : ''
			}`}
			onMouseEnter={() => setIsHovered(true)}
			onMouseLeave={() => setIsHovered(false)}>
			{/* Project image */}
			<div
				className={`lg:col-span-7 relative group ${
					!isEven ? 'lg:order-2' : ''
				}`}>
				<div
					className="relative aspect-video rounded-lg overflow-hidden"
					style={{ perspective: '1000px' }}>
					{/* CASE 1: Project with background image (for GIF presentation) */}
					{hasBgImage && (
						<>
							{/* Background image */}
							<div
								className="absolute inset-0 rounded-lg overflow-hidden border border-border"
								style={{ backgroundColor: '#121212' }}>
								<Image
									src={project.bg!}
									alt={`${project.title} background`}
									fill
									className="object-cover"
								/>
							</div>
							{/* Foreground GIF/image - scaled down and centered */}
							<div className="absolute inset-0 flex items-center justify-center p-8">
								<motion.div
									className="relative w-[70%] h-[70%] rounded-lg overflow-hidden shadow-2xl"
									animate={
										isHovered
											? {
													scale: 1.05,
													boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.6)',
											  }
											: {
													scale: 1,
													boxShadow: '0 10px 30px -10px rgba(0, 0, 0, 0.4)',
											  }
									}
									transition={{ duration: 0.3, ease: 'easeOut' }}>
									<Image
										src={project.image}
										alt={project.title}
										fill
										className="object-contain"
										unoptimized={project.image.endsWith('.gif')}
									/>
								</motion.div>
							</div>
							{/* Hover overlay with links */}
							<motion.div
								initial={false}
								animate={{ opacity: isHovered ? 1 : 0 }}
								className="absolute inset-0 flex items-center justify-center gap-4"
								style={{ backgroundColor: 'rgba(0, 0, 0, 0.3)' }}>
								{project.liveUrl && (
									<a
										href={project.liveUrl}
										target="_blank"
										rel="noopener noreferrer"
										className="p-3 rounded-full text-foreground hover:text-spot-pink transition-colors"
										style={{ backgroundColor: 'rgba(10, 10, 10, 0.9)' }}
										aria-label="View live site">
										<ExternalLink size={20} />
									</a>
								)}
								{project.githubUrl && (
									<a
										href={project.githubUrl}
										target="_blank"
										rel="noopener noreferrer"
										className="p-3 rounded-full text-foreground hover:text-spot-pink transition-colors"
										style={{ backgroundColor: 'rgba(10, 10, 10, 0.9)' }}
										aria-label="View source code">
										<Github size={20} />
									</a>
								)}
							</motion.div>
						</>
					)}

					{/* CASE 2: Project with back image (stacked card reveal) */}
					{!hasBgImage && hasBackImage && (
						<>
							{/* Back image */}
							<button
								onClick={() => setIsSwapped(!isSwapped)}
								className="absolute inset-0 rounded-lg overflow-hidden border border-border cursor-pointer focus:outline-none focus:ring-2 focus:ring-spot-pink"
								style={{ backgroundColor: '#121212' }}
								aria-label={`Switch to ${backLabel} view`}>
								<Image
									src={backImage}
									alt={`${project.title} - ${backLabel}`}
									fill
									className="object-cover"
								/>
								{/* Label for back image */}
								<div
									className="absolute top-3 left-3 px-2 py-1 rounded text-xs font-medium"
									style={{ backgroundColor: 'var(--color-spot-pink)', color: '#0a0a0a' }}>
									{backLabel}
								</div>
								{/* Click hint */}
								<div
									className="absolute bottom-3 right-3 px-2 py-1 rounded text-xs"
									style={{
										backgroundColor: 'rgba(10, 10, 10, 0.8)',
										color: '#a0a0a0',
									}}>
									Click to swap
								</div>
							</button>

							{/* Front image */}
							<motion.div
								className="absolute inset-0 rounded-lg overflow-hidden border border-border"
								style={{ backgroundColor: '#1a1a1a' }}
								animate={
									isHovered
										? {
												rotateX: 12,
												y: -20,
												scale: 0.95,
												boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)',
										  }
										: {
												rotateX: 0,
												y: 0,
												scale: 1,
												boxShadow: '0 0 0 0px rgba(0, 0, 0, 0)',
										  }
								}
								transition={{ duration: 0.4, ease: 'easeOut' }}>
								<Image
									src={frontImage}
									alt={`${project.title} - ${frontLabel}`}
									fill
									className="object-cover"
								/>

								{/* Label for front image */}
								<div
									className="absolute top-3 left-3 px-2 py-1 rounded text-xs font-medium"
									style={{ backgroundColor: 'var(--color-spot-pink)', color: '#0a0a0a' }}>
									{frontLabel}
								</div>
							</motion.div>

							{/* Hover hint */}
							{!isHovered && (
								<div
									className="absolute bottom-3 right-3 px-2 py-1 rounded text-xs text-foreground-muted"
									style={{ backgroundColor: 'rgba(26, 26, 26, 0.8)' }}>
									Hover to peek behind
								</div>
							)}
						</>
					)}

					{/* CASE 3: Simple single image */}
					{!hasBgImage && !hasBackImage && (
						<>
							<div
								className="absolute inset-0 rounded-lg overflow-hidden border border-border"
								style={{ backgroundColor: '#1a1a1a' }}>
								<Image
									src={project.image}
									alt={project.title}
									fill
									className="object-cover"
									unoptimized={project.image.endsWith('.gif')}
								/>
							</div>

							{/* Hover overlay with links */}
							<motion.div
								initial={false}
								animate={{ opacity: isHovered ? 1 : 0 }}
								className="absolute inset-0 flex items-center justify-center gap-4"
								style={{
									backgroundColor: 'rgba(29, 185, 84, 0.1)',
									backdropFilter: 'blur(1px)',
								}}>
								{project.liveUrl && (
									<a
										href={project.liveUrl}
										target="_blank"
										rel="noopener noreferrer"
										className="p-3 rounded-full text-foreground hover:text-spot-pink transition-colors"
										style={{ backgroundColor: 'rgba(10, 10, 10, 0.9)' }}
										aria-label="View live site">
										<ExternalLink size={20} />
									</a>
								)}
								{project.githubUrl && (
									<a
										href={project.githubUrl}
										target="_blank"
										rel="noopener noreferrer"
										className="p-3 rounded-full text-foreground hover:text-spot-pink transition-colors"
										style={{ backgroundColor: 'rgba(10, 10, 10, 0.9)' }}
										aria-label="View source code">
										<Github size={20} />
									</a>
								)}
							</motion.div>
						</>
					)}
				</div>

				{/* Decorative corner */}
				<div
					className={`absolute -bottom-2 border-spot-pink/50 ${
						isEven ? '-right-2' : '-left-2'
					} w-24 h-24 border-2 rounded-lg -z-10`}
				/>
			</div>

			{/* Project info */}
			<div className={`lg:col-span-5 space-y-4 ${!isEven ? 'lg:order-1' : ''}`}>
				<div className="space-y-2">
					<p className="text-spot-pink text-sm font-mono">Featured Project</p>
					<h3 className="text-2xl md:text-3xl font-bold text-foreground">
						{project.title}
					</h3>
				</div>

				<div
					className={`p-5 rounded-lg bg-background-secondary border border-border shadow-lg ${
						!isEven ? 'lg:-mr-12' : 'lg:-ml-12'
					} relative z-10`}>
					<p className="text-foreground-muted leading-relaxed">
						{project.description}
					</p>
				</div>

				{/* Highlights */}
				<ul className={`space-y-1 ${!isEven ? 'lg:pl-0' : ''}`}>
					{project.highlights.slice(0, 3).map((highlight) => (
						<li
							key={highlight}
							className={`flex items-center gap-2 text-sm text-foreground-muted ${
								!isEven ? 'lg:flex-row-reverse' : ''
							}`}>
							<ChevronRight size={14} className="text-spot-pink flex-shrink-0" />
							<span>{highlight}</span>
						</li>
					))}
				</ul>

				{/* Tech stack */}
				<div
					className={`flex flex-wrap gap-2 ${!isEven ? 'lg:justify-end' : ''}`}>
					{project.technologies.map((tech) => (
						<span key={tech} className="tech-pill">
							{tech}
						</span>
					))}
				</div>

				{/* Links for mobile */}
				<div className={`flex gap-4 lg:hidden ${!isEven ? 'justify-end' : ''}`}>
					{project.liveUrl && (
						<a
							href={project.liveUrl}
							target="_blank"
							rel="noopener noreferrer"
							className="text-foreground-muted hover:text-spot-pink transition-colors">
							<ExternalLink size={20} />
						</a>
					)}
					{project.githubUrl && (
						<a
							href={project.githubUrl}
							target="_blank"
							rel="noopener noreferrer"
							className="text-foreground-muted hover:text-spot-pink transition-colors">
							<Github size={20} />
						</a>
					)}
				</div>
			</div>
		</motion.article>
	);
}

export function Projects() {
	const ref = useRef(null);
	const isInView = useInView(ref, { once: true, margin: '-100px' });

	const featuredProjects = projects.filter((p) => p.featured);

	return (
		<section id="projects" className="py-24 md:py-32" ref={ref}>
			<div className="max-w-6xl mx-auto px-6">
				{/* Section header */}
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={isInView ? { opacity: 1, y: 0 } : {}}
					transition={{ duration: 0.5 }}
					className="mb-16">
					<h2 className="text-3xl md:text-4xl font-bold mb-4">
						<span className="text-spot-pink">02.</span> Featured Projects
					</h2>
					<div className="section-divider max-w-xs" />
				</motion.div>

				{/* Projects list */}
				<div className="space-y-24 md:space-y-32">
					{featuredProjects.map((project, index) => (
						<ProjectCard
							key={project.id}
							project={project}
							index={index}
							isInView={isInView}
						/>
					))}
				</div>
			</div>
		</section>
	);
}
