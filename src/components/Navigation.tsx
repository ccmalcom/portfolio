'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Github, Linkedin, Sun, Moon } from 'lucide-react';
import { useTheme } from 'next-themes';
import { navLinks, socialLinks, sectionColors } from '@/data/portfolio';

export function Navigation() {
	const [isScrolled, setIsScrolled] = useState(false);
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
	const [activeSection, setActiveSection] = useState('');
	const { theme, setTheme } = useTheme();

	useEffect(() => {
		const handleScroll = () => {
			setIsScrolled(window.scrollY > 50);

			// Track active section
			const sections = navLinks.map((link) => link.href.replace('#', ''));
			const scrollPosition = window.scrollY + 100;

			// Clear active section if at the top of the page
			if (window.scrollY < 100) {
				setActiveSection('');
				return;
			}

			for (const section of sections) {
				const element = document.getElementById(section);
				if (element) {
					const { offsetTop, offsetHeight } = element;
					if (
						scrollPosition >= offsetTop &&
						scrollPosition < offsetTop + offsetHeight
					) {
						setActiveSection(section);
						break;
					}
				}
			}
		};

		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

	const handleNavClick = (href: string) => {
		setIsMobileMenuOpen(false);
		const element = document.querySelector(href);
		if (element) {
			element.scrollIntoView({ behavior: 'smooth' });
		}
	};

	return (
		<>
			<motion.header
				initial={{ y: -100 }}
				animate={{ y: 0 }}
				transition={{ duration: 0.5, ease: 'easeOut' }}
				className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
					isScrolled
						? 'bg-background/80 backdrop-blur-lg border-b border-border'
						: 'bg-transparent'
				}`}>
				<nav className="max-w-6xl mx-auto px-6 py-4">
					<div className="flex items-center justify-between">
						{/* Logo */}
						<motion.a
							href="#"
							className="text-xl font-semibold tracking-tight"
							whileHover={{ scale: 1.02 }}
							whileTap={{ scale: 0.98 }}>
							<span style={{ color: 'var(--accent)' }}>c</span>
							<span style={{ color: '#e8e8e8' }}>m</span>
						</motion.a>

						{/* Desktop Navigation */}
						<div className="hidden md:flex items-center gap-8">
							{navLinks.map((link) => {
								const sectionId = link.href.replace(
									'#',
									''
								) as keyof typeof sectionColors;
								const isActive = activeSection === sectionId;
								const sectionColor = sectionColors[sectionId];

								return (
									<button
										key={link.name}
										onClick={() => handleNavClick(link.href)}
										className="text-sm font-medium transition-colors relative"
										style={{ color: isActive ? sectionColor : undefined }}>
										{link.name}
										{isActive && (
											<motion.div
												layoutId="activeSection"
												className="absolute -bottom-1 left-0 right-0 h-0.5"
												style={{ backgroundColor: sectionColor }}
												transition={{
													type: 'spring',
													stiffness: 380,
													damping: 30,
												}}
											/>
										)}
									</button>
								);
							})}
						</div>

						{/* Right side - social links and theme toggle */}
						<div className="hidden md:flex items-center gap-4">
							<a
								href={socialLinks.github}
								target="_blank"
								rel="noopener noreferrer"
								className="text-foreground-muted hover:text-foreground transition-colors p-2"
								aria-label="GitHub">
								<Github size={18} />
							</a>
							<a
								href={socialLinks.linkedin}
								target="_blank"
								rel="noopener noreferrer"
								className="text-foreground-muted hover:text-foreground transition-colors p-2"
								aria-label="LinkedIn">
								<Linkedin size={18} />
							</a>
							<button
								onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
								className="text-foreground-muted hover:text-foreground transition-colors p-2"
								aria-label="Toggle theme">
								{theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
							</button>
						</div>

						{/* Mobile menu button */}
						<button
							onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
							className="md:hidden text-foreground p-2"
							aria-label="Toggle menu">
							{isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
						</button>
					</div>
				</nav>
			</motion.header>

			{/* Mobile Menu */}
			<AnimatePresence>
				{isMobileMenuOpen && (
					<motion.div
						initial={{ opacity: 0, y: -20 }}
						animate={{ opacity: 1, y: 0 }}
						exit={{ opacity: 0, y: -20 }}
						transition={{ duration: 0.2 }}
						className="fixed inset-0 z-40 md:hidden">
						<div
							className="absolute inset-0 bg-background/95 backdrop-blur-lg"
							onClick={() => setIsMobileMenuOpen(false)}
						/>
						<nav className="relative flex flex-col items-center justify-center h-full gap-8">
							{navLinks.map((link, index) => (
								<motion.button
									key={link.name}
									initial={{ opacity: 0, y: 20 }}
									animate={{ opacity: 1, y: 0 }}
									transition={{ delay: index * 0.1 }}
									onClick={() => handleNavClick(link.href)}
									className="text-2xl font-medium text-foreground hover:text-accent transition-colors">
									{link.name}
								</motion.button>
							))}
							<motion.div
								initial={{ opacity: 0 }}
								animate={{ opacity: 1 }}
								transition={{ delay: 0.4 }}
								className="flex items-center gap-6 mt-8">
								<a
									href={socialLinks.github}
									target="_blank"
									rel="noopener noreferrer"
									className="text-foreground-muted hover:text-foreground transition-colors">
									<Github size={24} />
								</a>
								<a
									href={socialLinks.linkedin}
									target="_blank"
									rel="noopener noreferrer"
									className="text-foreground-muted hover:text-foreground transition-colors">
									<Linkedin size={24} />
								</a>
								<button
									onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
									className="text-foreground-muted hover:text-foreground transition-colors">
									{theme === 'dark' ? <Sun size={24} /> : <Moon size={24} />}
								</button>
							</motion.div>
						</nav>
					</motion.div>
				)}
			</AnimatePresence>
		</>
	);
}
