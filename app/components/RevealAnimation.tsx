"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

type RevealAnimationProps = {
	children: ReactNode;
	delay?: number;
	duration?: number;
	direction?: "up" | "down" | "left" | "right";
	className?: string;
};

export default function RevealAnimation({
	children,
	delay = 0,
	duration = 0.6,
	direction = "up",
	className = "",
}: RevealAnimationProps) {
	const directionOffset = {
		up: { y: 30 },
		down: { y: -30 },
		left: { x: 30 },
		right: { x: -30 },
	};

	return (
		<motion.div
			className={className}
			initial={{
				opacity: 0,
				...directionOffset[direction],
			}}
			whileInView={{
				opacity: 1,
				x: 0,
				y: 0,
			}}
			viewport={{
				once: true,
				margin: "-100px",
			}}
			transition={{
				duration,
				delay,
				ease: [0.25, 0.25, 0, 1],
			}}
		>
			{children}
		</motion.div>
	);
}
