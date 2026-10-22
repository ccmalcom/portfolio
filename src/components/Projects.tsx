'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { ExternalLink, Github, ChevronRight } from 'lucide-react';
import { projects, Project } from '@/data/portfolio';
import Image from 'next/image';
import { SectionHeader } from './SectionHeader';

function HoverLinks({
	project,
	visible,
}: {
	project: Project;
	visible: boolean;
}) {
	// Decorative: the always-visible text links below are the real path.
	const linkClass =
		'p-3 rounded-full bg-media-overlay text-media-fg hover:text-spot-pink transition-colors';
	return (
		<motion.div
			initial={false}
			animate={{ opacity: visible ? 1 : 0 }}
			aria-hidden="true"
			className={`absolute inset-0 flex items-center justify-center gap-4 bg-media-scrim ${
				visible ? '' : 'pointer-events-none'
			}`}>
			{project.liveUrl && (
				<a
					href={project.liveUrl}
					target="_blank"
					rel="noopener noreferrer"
					tabIndex={-1}
					className={linkClass}>
					<ExternalLink size={20} />
				</a>
			)}
			{project.githubUrl && (
				<a
					href={project.githubUrl}
					target="_blank"
					rel="noopener noreferrer"
					tabIndex={-1}
					className={linkClass}>
					<Github size={20} />
				</a>
			)}
		</motion.div>
	);
}

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
	const titleUrl = project.liveUrl ?? project.githubUrl;

	// Determine which image is front/back based on swap state
	const frontImage = isSwapped ? project.backImage! : project.image;
	const backImage = isSwapped ? project.image : project.backImage!;
	const imageLabel = project.imageLabel ?? 'Front';
	const backImageLabel = project.backImageLabel ?? 'Back';
	const frontLabel = isSwapped ? backImageLabel : imageLabel;
	const backLabel = isSwapped ? imageLabel : backImageLabel;

	return (
		<motion.article
			initial={{ opacity: 0, y: 40 }}
			animate={isInView ? { opacity: 1, y: 0 } : {}}
			transition={{ duration: 0.6, delay: index * 0.15 }}
			id={`project-${project.id}`}
			className={`scroll-mt-24 grid lg:grid-cols-12 gap-6 lg:gap-8 items-center ${
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
								className="absolute inset-0 rounded-lg overflow-hidden border border-border bg-media-bg">
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
							<HoverLinks project={project} visible={isHovered} />
						</>
					)}

					{/* CASE 2: Project with back image (stacked card reveal) */}
					{!hasBgImage && hasBackImage && (
						<>
							{/* Back image */}
							<button
								onClick={() => setIsSwapped(!isSwapped)}
								className="absolute inset-0 rounded-lg overflow-hidden border border-border cursor-pointer bg-media-bg focus:outline-none focus-visible:ring-2 focus-visible:ring-spot-pink"
								aria-label={`Switch to ${backLabel} view`}>
								<Image
									src={backImage}
									alt={`${project.title} - ${backLabel}`}
									fill
									className="object-cover"
								/>
								{/* Label for back image */}
								<div
									className="absolute bottom-3 left-3 px-2 py-1 rounded text-xs font-medium bg-spot-pink text-on-spot">
									{backLabel}
								</div>
								{/* Click hint */}
								<div className="absolute bottom-3 right-3 px-2 py-1 rounded text-xs bg-media-overlay text-media-muted">
									<span className="[@media(hover:none)]:hidden">Click to swap</span>
									<span className="hidden [@media(hover:none)]:inline">Tap to swap</span>
								</div>
							</button>

							{/* Front image */}
							<motion.div
								className="absolute inset-0 rounded-lg overflow-hidden border border-border bg-media-bg cursor-pointer"
								onClick={() => setIsSwapped(!isSwapped)}
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
									className="absolute bottom-3 left-3 px-2 py-1 rounded text-xs font-medium bg-spot-pink text-on-spot">
									{frontLabel}
								</div>
							</motion.div>

							{/* Input-aware hint: pointer users peek, touch users tap */}
							{!isHovered && (
								<div className="pointer-events-none absolute bottom-3 right-3 px-2 py-1 rounded text-xs bg-media-overlay text-media-muted [@media(hover:none)]:hidden">
									Hover to peek behind
								</div>
							)}
							<div className="pointer-events-none absolute bottom-3 right-3 hidden px-2 py-1 rounded text-xs bg-media-overlay text-media-muted [@media(hover:none)]:block">
								Tap to swap view
							</div>
						</>
					)}

					{/* CASE 3: Simple single image */}
					{!hasBgImage && !hasBackImage && (
						<>
							<div
								className="absolute inset-0 rounded-lg overflow-hidden border border-border bg-media-bg">
								<Image
									src={project.image}
									alt={project.title}
									fill
									className="object-cover"
									unoptimized={project.image.endsWith('.gif')}
								/>
							</div>

							<HoverLinks project={project} visible={isHovered} />
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
					<h3 className="text-2xl md:text-3xl font-bold text-foreground">
						{titleUrl ? (
							<a
								href={titleUrl}
								target="_blank"
								rel="noopener noreferrer"
								className="hover:text-spot-pink-text transition-colors">
								{project.title}
							</a>
						) : (
							project.title
						)}
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
					{project.highlights.map((highlight) => (
						<li
							key={highlight}
							className={`flex items-center gap-2 text-sm text-foreground-muted ${
								!isEven ? 'lg:flex-row-reverse' : ''
							}`}>
							<ChevronRight
								size={14}
								className="text-spot-pink-text flex-shrink-0"
							/>
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

				{/* Always-visible links (the image overlay is decoration only) */}
				{(project.liveUrl || project.githubUrl) && (
					<div className={`flex flex-wrap gap-3 ${!isEven ? 'lg:justify-end' : ''}`}>
						{project.liveUrl && (
							<a
								href={project.liveUrl}
								target="_blank"
								rel="noopener noreferrer"
								className="inline-flex min-h-11 items-center gap-2 rounded-full border border-border px-5 text-sm font-medium text-foreground transition-colors hover:border-spot-pink hover:text-spot-pink-text">
								<ExternalLink size={16} aria-hidden="true" />
								Live site
								<span className="sr-only"> for {project.title} (opens in new tab)</span>
							</a>
						)}
						{project.githubUrl && (
							<a
								href={project.githubUrl}
								target="_blank"
								rel="noopener noreferrer"
								className="inline-flex min-h-11 items-center gap-2 rounded-full border border-border px-5 text-sm font-medium text-foreground transition-colors hover:border-spot-pink hover:text-spot-pink-text">
								<Github size={16} aria-hidden="true" />
								Source
								<span className="sr-only"> for {project.title} (opens in new tab)</span>
							</a>
						)}
					</div>
				)}
			</div>
		</motion.article>
	);
}

export function Projects() {
	const ref = useRef(null);
	const isInView = useInView(ref, { once: true, margin: '-100px' });
	const featuredProjects = projects.filter((p) => p.featured);

	return (
		<section id="projects" className="py-16 md:py-24" ref={ref}>
			<div className="max-w-6xl mx-auto px-6">
				{/* Section header */}
				<SectionHeader title="Featured Projects" spot="pink" isInView={isInView} />

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
