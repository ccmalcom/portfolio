export interface Project {
	id: string;
	title: string;
	description: string;
	longDescription: string;
	image: string;
	backImage?: string; // Optional second image revealed on hover (e.g., admin/backend view)
	technologies: string[];
	highlights: string[];
	liveUrl?: string;
	githubUrl?: string;
	featured: boolean;
}

export interface Skill {
	name: string;
	category: 'salesforce' | 'frontend' | 'backend' | 'tools';
}

export const projects: Project[] = [
	{
		id: 'canine-castaways',
		title: 'Canine Castaways',
		description:
			'Salesforce NPSP org + Experience Cloud site for a no-kill animal rescue, replacing 6 legacy systems and saving $800/year.',
		longDescription:
			'Built a comprehensive Salesforce solution for a no-kill animal rescue organization. Consolidated six disparate legacy systems into a unified NPSP implementation with a custom Experience Cloud portal for volunteers and adopters. Created custom Lightning Web Components for the adoption workflow and wrote Apex classes to handle complex matching logic between animals and potential adopters.',
		image: '/projects/CCR-site.png',
		backImage: '/projects/CCR-internal.png', // Salesforce admin view
		technologies: [
			'Salesforce',
			'NPSP',
			'Experience Cloud',
			'Apex',
			'LWC',
			'Flows',
		],
		highlights: [
			'Replaced 6 legacy systems with unified Salesforce org',
			'Saved $800/year in software costs',
			'Custom LWC adoption workflow',
			'Automated foster-to-adoption pipeline',
		],
		featured: true,
	},
	{
		id: 'indiana-aid',
		title: 'Indiana Aid',
		description:
			'A bilingual Next.js + Supabase platform connecting immigrants with mutual aid resources and volunteer support.',
		longDescription:
			'Developed a full-stack web application for a local mutual aid group serving immigrant communities in Indiana. Features include bilingual support (English/Spanish), real-time resource availability updates, an admin portal for managing volunteers and resources, and integration with local service providers.',
		image: '/projects/indiana-aid.png',
		technologies: [
			'Next.js',
			'TypeScript',
			'Supabase',
			'Tailwind CSS',
			'Vercel',
		],
		highlights: [
			'Bilingual English/Spanish interface',
			'Real-time resource tracking',
			'Admin portal for volunteer coordination',
			'Mobile-first responsive design',
		],
		liveUrl: 'https://indiana-aid.org',
		githubUrl: 'https://github.com/ccmalcom/indiana-aid',
		featured: true,
	},
	{
		id: 'meeting-light',
		title: 'Meeting Light',
		description:
			'A macOS menubar app that syncs your Google Calendar with Govee LED lights for visual meeting notifications.',
		longDescription:
			'Built a Python-based macOS menubar application that provides visual meeting notifications through smart LED lights. The app monitors Google Calendar events and automatically changes Govee LED light colors based on meeting proximity—warm white when idle, blue when a meeting is approaching, red when imminent, and white during active meetings. Features intelligent state tracking that reduces API calls by 97%, robust error handling with exponential backoff, and automatic recovery from sleep/wake cycles.',
		image: '/projects/meeting-light.png',
		technologies: [
			'Python',
			'Google Calendar API',
			'Govee API',
			'rumps',
			'macOS',
		],
		highlights: [
			'97% reduction in API calls through intelligent state tracking',
			'Automatic sleep/wake cycle recovery',
			'Health monitoring with auto-recovery',
			'Smart filtering of declined/cancelled events',
		],
		githubUrl: 'https://github.com/ccmalcom/meeting-light',
		featured: true,
	},
];

export const skills: Skill[] = [
	// Salesforce
	{ name: 'Apex', category: 'salesforce' },
	{ name: 'Lightning Web Components', category: 'salesforce' },
	{ name: 'NPSP', category: 'salesforce' },
	{ name: 'Experience Cloud', category: 'salesforce' },
	{ name: 'Flows', category: 'salesforce' },
	{ name: 'SOQL', category: 'salesforce' },
	{ name: 'Integration', category: 'salesforce' },
	{ name: 'Data Migration', category: 'salesforce' },

	// Frontend
	{ name: 'React', category: 'frontend' },
	{ name: 'Next.js', category: 'frontend' },
	{ name: 'TypeScript', category: 'frontend' },
	{ name: 'JavaScript', category: 'frontend' },
	{ name: 'Tailwind CSS', category: 'frontend' },
	{ name: 'HTML/CSS', category: 'frontend' },
	{ name: 'Framer Motion', category: 'frontend' },

	// Backend
	{ name: 'Python', category: 'backend' },
	{ name: 'Node.js', category: 'backend' },
	{ name: 'Supabase', category: 'backend' },
	{ name: 'PostgreSQL', category: 'backend' },
	{ name: 'REST APIs', category: 'backend' },

	// Tools
	{ name: 'Git', category: 'tools' },
	{ name: 'VS Code', category: 'tools' },
	{ name: 'Vercel', category: 'tools' },
	{ name: 'Figma', category: 'tools' },
];

export const navLinks = [
	{ name: 'About', href: '#about' },
	{ name: 'Projects', href: '#projects' },
	{ name: 'Skills', href: '#skills' },
	{ name: 'Contact', href: '#contact' },
];

export const socialLinks = {
	github: 'https://github.com/ccmalcom',
	linkedin: 'https://www.linkedin.com/in/chase-malcom/',
	email: 'mailto:chase@chasemalcom.com',
};

export const aboutContent = {
	intro: `I'm a Salesforce Developer and Consultant at Cloud Masonry with a background in web development. I build solutions that actually work for people—whether that's a nonprofit CRM that replaces six clunky systems or a mutual aid platform that connects communities.`,
	background: `Before tech, I spent years as a band director. Teaching taught me how to break down complex ideas, lead diverse teams, and stay patient when things don't click on the first try. Those skills translate surprisingly well to consulting.`,
	current: `These days I split my time between Salesforce implementations and building side projects in React and Python. When I'm not coding, you'll find me on a hiking trail or tending to my garden—growing things is satisfying whether it's tomatoes or software.`,
	goal: `I'm working toward becoming a staff developer at a company where engineering excellence and positive impact go hand in hand.`,
};
