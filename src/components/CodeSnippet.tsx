'use client';

import { motion } from 'framer-motion';

export function CodeSnippet() {
	return (
		<motion.div
			initial={{ opacity: 0, y: 20 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.6, delay: 0.5 }}
			className="mt-16 max-w-md mx-auto">
			<div className="code-block text-left text-sm">
				<div className="flex items-center gap-2 mb-3 pb-3 border-b border-border">
					<div className="w-3 h-3 rounded-full bg-red-500/80" />
					<div className="w-3 h-3 rounded-full bg-yellow-500/80" />
					<div className="w-3 h-3 rounded-full bg-green-500/80" />
					<span className="text-foreground-muted text-xs ml-2">chase.tsx</span>
				</div>
				<code className="text-foreground-muted">
					<span className="text-purple-400">const</span>{' '}
					<span className="text-blue-400">chase</span>{' '}
					<span className="text-foreground-muted">=</span>{' '}
					<span className="text-yellow-400">{'{'}</span>
					<br />
					<span className="ml-4 text-foreground">role</span>
					<span className="text-foreground-muted">:</span>{' '}
					<span className="text-accent">{'"Salesforce Developer"'}</span>
					<span className="text-foreground-muted">,</span>
					<br />
					<span className="ml-4 text-foreground">company</span>
					<span className="text-foreground-muted">:</span>{' '}
					<span className="text-accent">{'"Cloud Masonry"'}</span>
					<span className="text-foreground-muted">,</span>
					<br />
					<span className="ml-4 text-foreground">passion</span>
					<span className="text-foreground-muted">:</span>{' '}
					<span className="text-accent">{'"Building things"'}</span>
					<span className="text-foreground-muted">,</span>
					<br />
					<span className="ml-4 text-foreground">coffee</span>
					<span className="text-foreground-muted">:</span>{' '}
					<span className="text-orange-400">true</span>
					<br />
					<span className="text-yellow-400">{'}'}</span>
					<span className="text-foreground-muted">;</span>
				</code>
			</div>
		</motion.div>
	);
}
