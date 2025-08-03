import type { Metadata } from "next";
import "./globals.css";
import LenisScroll from "./components/LenisScroll";

export const metadata: Metadata = {
	title: "TideTech.ai - AI Agents & Automation",
	description:
		"Transform your business with custom AI agents and automation. Fast, intelligent, and seamlessly integrated.",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body>
				<LenisScroll />
				{children}
			</body>
		</html>
	);
}
