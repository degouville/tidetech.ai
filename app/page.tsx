import Image from "next/image";
import RevealAnimation from "./components/RevealAnimation";
import { Zap, Package, Rocket, Users, Calendar, ArrowRight, Check, BarChart3, Target } from "lucide-react";

export default function Home() {
	return (
		<div className="bg-[#FDFDFD] min-h-screen font-['Nunito_Sans']" style={{fontFamily: 'Nunito Sans, sans-serif'}}>
			{/* Navigation */}
			<nav className="top-0 z-50 fixed w-full nav-glass">
				<div className="mx-auto px-6 py-4 max-w-3xl">
					<div className="flex justify-between items-center">
						<div className="flex items-center space-x-2">
							<div className="bg-[#2c5688] rounded-lg w-8 h-8 animate-float"></div>
							<span className="font-extrabold text-[#2c5688] text-2xl">
								TideTech.ai
							</span>
						</div>
						<div className="hidden md:flex items-center space-x-8">
							<a
								href="#work"
								className="font-semibold text-[#30313D] hover:text-[#2c5688] transition-colors text-lg"
							>
								Our Work
							</a>
							<a
								href="#process"
								className="font-semibold text-[#30313D] hover:text-[#2c5688] transition-colors text-lg"
							>
								Process
							</a>
							<a
								href="#pricing"
								className="font-semibold text-[#30313D] hover:text-[#2c5688] transition-colors text-lg"
							>
								Pricing
							</a>
							<button className="bg-[#2c5688] text-white px-5 py-3 rounded-xl font-extrabold text-[17px] hover:scale-95 transition-transform duration-200">
								Talk with us
							</button>
						</div>
					</div>
				</div>
			</nav>

			{/* Hero Section */}
			<section className="px-6 pt-40 pb-32">
				<div className="mx-auto text-center max-w-3xl">
					<RevealAnimation>
						<h1 className="mb-6 font-extrabold text-[#30313D] leading-none" style={{fontSize: '52px', letterSpacing: '-0.4px'}}>
							Build your{' '}
							<span className="relative inline-block">
								<span className="absolute inset-0 bg-[#2c5688] transform -rotate-1 rounded-lg"></span>
								<span className="relative text-white px-3 py-1">AI Agent</span>
							</span>
							<br />
							in weeks,{' '}
							<span className="text-[#67768c]">not months</span>
						</h1>
					</RevealAnimation>
					<RevealAnimation delay={0.2}>
						<p className="mx-auto mb-8 max-w-2xl text-[#67768c] font-semibold" style={{fontSize: '1.25rem', lineHeight: '1.4'}}>
							Transform your business with custom AI agents and automation. Fast, intelligent, and seamlessly integrated.
						</p>
					</RevealAnimation>
					<RevealAnimation delay={0.4}>
						<div className="flex sm:flex-row flex-col justify-center gap-4 mb-16">
							<button className="bg-[#2c5688] text-white px-5 py-3 rounded-xl font-extrabold hover:scale-95 transition-transform duration-200" style={{fontSize: '17px'}}>
								Start Your AI Journey
							</button>
							<button className="bg-[#E2E8F0] text-[#1A202C] px-5 py-3 rounded-xl font-extrabold hover:scale-95 transition-transform duration-200" style={{fontSize: '17px'}}>
								See Our Work
							</button>
						</div>
					</RevealAnimation>

					{/* Trust Indicators */}
					<RevealAnimation delay={0.6}>
						<div className="mb-8 font-semibold text-[#67768c]" style={{fontSize: '1.25rem'}}>
							<span className="text-[#67768c]">Founders from</span> Google, Y Combinator, TikTok, Patreon, Bank of America, PwC, Web3 & AI startups <span className="text-[#67768c]">trusted us to deliver</span>
						</div>
						<div className="flex flex-wrap justify-center items-center gap-8 opacity-60 hover:opacity-80 transition-opacity duration-500">
							<div className="font-bold text-[#67768c] text-xl">Google</div>
							<div className="font-bold text-[#67768c] text-xl">
								Y Combinator
							</div>
							<div className="font-bold text-[#67768c] text-xl">TikTok</div>
							<div className="font-bold text-[#67768c] text-xl">
								Bank of America
							</div>
							<div className="font-bold text-[#67768c] text-xl">PwC</div>
							<div className="font-bold text-[#67768c] text-xl">Patreon</div>
						</div>
					</RevealAnimation>
				</div>
			</section>

			{/* Value Proposition */}
			<section id="work" className="bg-white px-6 py-20">
				<div className="mx-auto max-w-3xl">
					<RevealAnimation>
						<div className="mb-20 text-center">
							<h2 className="mb-6 font-bold text-[#30313D]" style={{fontSize: '1.875rem'}}>
								Stuck with manual processes? Let's automate them
							</h2>
						</div>
					</RevealAnimation>
					<div className="gap-3 grid md:grid-cols-2">
						<RevealAnimation delay={0.1}>
							<div className="p-6 rounded-xl bg-white border-2 border-[#E2E8F0] hover:scale-105 transition-transform duration-200">
								<div className="flex items-center mb-3">
									<Zap className="text-[#2c5688] mr-2" size={24} />
									<h3 className="font-bold text-[#30313D] text-lg">
										Rapid development:
									</h3>
								</div>
								<p className="text-[#67768c] font-semibold text-lg">
									Your AI agent ready in 2-4 weeks.
								</p>
							</div>
						</RevealAnimation>
						<RevealAnimation delay={0.2}>
							<div className="p-6 rounded-xl bg-white border-2 border-[#E2E8F0] hover:scale-105 transition-transform duration-200">
								<div className="flex items-center mb-3">
									<Package className="text-[#2c5688] mr-2" size={24} />
									<h3 className="font-bold text-[#30313D] text-lg">
										Complete package:
									</h3>
								</div>
								<p className="text-[#67768c] font-semibold text-lg">
									AI agent and automation included. Everything you need to transform your operations.
								</p>
							</div>
						</RevealAnimation>
						<RevealAnimation delay={0.3}>
							<div className="p-6 rounded-xl bg-white border-2 border-[#E2E8F0] hover:scale-105 transition-transform duration-200">
								<div className="flex items-center mb-3">
									<Rocket className="text-[#2c5688] mr-2" size={24} />
									<h3 className="font-bold text-[#30313D] text-lg">
										Modern technology:
									</h3>
								</div>
								<p className="text-[#67768c] font-semibold text-lg">
									We use the latest technologies to ensure your product is fast, stable, and scalable.
								</p>
							</div>
						</RevealAnimation>
						<RevealAnimation delay={0.4}>
							<div className="p-6 rounded-xl bg-white border-2 border-[#E2E8F0] hover:scale-105 transition-transform duration-200">
								<div className="flex items-center mb-3">
									<Users className="text-[#2c5688] mr-2" size={24} />
									<h3 className="font-bold text-[#30313D] text-lg">
										Experienced team:
									</h3>
								</div>
								<p className="text-[#67768c] font-semibold text-lg">
									We know what we're doing thanks to having years of experience building successful startups.
								</p>
							</div>
						</RevealAnimation>
					</div>
				</div>
			</section>

			{/* Process */}
			<section id="process" className="px-6 py-20">
				<div className="mx-auto max-w-3xl">
					<RevealAnimation>
						<div className="mb-20 text-center">
							<h2 className="mb-6 font-bold text-[#30313D]" style={{fontSize: '1.875rem'}}>
								Our process - it's simple!
							</h2>
						</div>
					</RevealAnimation>
					<ul className="max-w-xl mt-8 space-y-8">
						<li className="relative flex items-start">
							<div className="-ml-0.5 absolute mt-0.5 top-14 left-8 w-px border-l-4 border-dotted border-gray-300 h-full" aria-hidden="true"></div>
							<div className="relative flex items-center justify-center flex-shrink-0 w-16 h-16 bg-white rounded-full shadow">
								<svg className="w-10 h-10 text-fuchsia-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 512 512" stroke="#2c5688">
									<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="32" d="M416 221.25V416a48 48 0 0 1-48 48H144a48 48 0 0 1-48-48V96a48 48 0 0 1 48-48h98.75a32 32 0 0 1 22.62 9.37l141.26 141.26a32 32 0 0 1 9.37 22.62z"></path>
									<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="32" d="M256 56v120a32 32 0 0 0 32 32h120"></path>
								</svg>
							</div>
							<div className="ml-6">
								<h3 className="text-lg font-bold text-[#30313D]">Specification</h3>
								<p className="text-lg mt-1 font-semibold text-[#67768c]">We discuss your idea and create a detailed specification.</p>
							</div>
						</li>
						<li className="relative flex items-start">
							<div className="-ml-0.5 absolute mt-0.5 top-14 left-8 w-px border-l-4 border-dotted border-gray-300 h-full" aria-hidden="true"></div>
							<div className="relative flex items-center justify-center flex-shrink-0 w-16 h-16 bg-white rounded-full shadow">
								<svg className="w-9 h-9 text-fuchsia-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="#2c5688">
									<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.7" d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"></path>
									<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.7" d="M10.3 21a1.94 1.94 0 0 0 3.4 0"></path>
									<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.7" d="M4 2C2.8 3.7 2 5.7 2 8"></path>
									<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.7" d="M22 8c0-2.3-.8-4.3-2-6"></path>
								</svg>
							</div>
							<div className="ml-6">
								<h3 className="text-lg font-bold text-[#30313D]">Development</h3>
								<p className="text-lg mt-1 font-semibold text-[#67768c]">Watch your AI agent take shape with regular updates.</p>
							</div>
						</li>
						<li className="relative flex items-start">
							<div className="relative flex items-center justify-center flex-shrink-0 w-16 h-16 bg-white rounded-full shadow">
								<svg className="w-9 h-9 text-fuchsia-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="#2c5688">
									<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.7" d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"></path>
									<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.7" d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"></path>
									<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.7" d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"></path>
									<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.7" d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"></path>
								</svg>
							</div>
							<div className="ml-6">
								<h3 className="text-lg font-bold text-[#30313D]">Launch</h3>
								<p className="text-lg mt-1 font-semibold text-[#67768c]">We deploy your product and provide training so that you have full confidence in running it on your own.</p>
							</div>
						</li>
					</ul>
					<div className="flex sm:flex-row flex-col justify-center gap-4 mt-16">
						<button className="bg-[#2c5688] text-white px-5 py-3 rounded-xl font-extrabold hover:scale-95 transition-transform duration-200 flex items-center gap-2" style={{fontSize: '17px'}}>
							<Calendar size={20} />
							Book a call
						</button>
						<button className="bg-[#E2E8F0] text-[#1A202C] px-5 py-3 rounded-xl font-extrabold hover:scale-95 transition-transform duration-200" style={{fontSize: '17px'}}>
							See pricing
						</button>
					</div>
				</div>
			</section>

			{/* Pricing */}
			<section id="pricing" className="section-bg-light px-6 section-padding">
				<div className="mx-auto container">
					<RevealAnimation>
						<div className="mb-20 text-center">
							<h2 className="mb-6 font-bold text-high-contrast text-4xl md:text-5xl">
								Pricing
							</h2>
						</div>
					</RevealAnimation>
					<div className="gap-8 grid md:grid-cols-3 mx-auto max-w-7xl">
						<RevealAnimation delay={0.1} direction="left">
							<div className="p-8 rounded-2xl glass dark:glass-dark card-hover">
								<div className="text-center">
									<div className="mb-2 font-semibold text-blue-600 text-lg">
										Starter
									</div>
									<div className="mb-2 font-bold text-high-contrast text-3xl">
										$3,999
									</div>
									<div className="mb-6 text-medium-contrast">
										/ AI Assistant
									</div>
									<ul className="space-y-3 mb-8 text-left">
										<li className="flex items-center text-medium-contrast">
											<Check className="mr-3 text-green-500" size={18} />
											Simple AI chatbot
										</li>
										<li className="flex items-center text-medium-contrast">
											<Check className="mr-3 text-green-500" size={18} />
											Basic automation workflow
										</li>
										<li className="flex items-center text-medium-contrast">
											<Check className="mr-3 text-green-500" size={18} />2
											integrations included
										</li>
										<li className="flex items-center text-medium-contrast">
											<Check className="mr-3 text-green-500" size={18} />
											Setup and deployment
										</li>
										<li className="flex items-center text-medium-contrast">
											<Check className="mr-3 text-green-500" size={18} />
											14 days of support
										</li>
									</ul>
								</div>
							</div>
						</RevealAnimation>
						<RevealAnimation delay={0.3}>
							<div className="relative p-8 border-2 border-blue-500 rounded-2xl glass dark:glass-dark card-hover">
								<div className="-top-4 left-1/2 absolute bg-blue-500 shadow-lg px-4 py-1 rounded-full font-medium text-white text-sm -translate-x-1/2 transform">
									Most Popular
								</div>
								<div className="text-center">
									<div className="mb-2 font-semibold text-blue-600 text-lg">
										Professional
									</div>
									<div className="mb-2 font-bold text-high-contrast text-3xl">
										$6,999
									</div>
									<div className="mb-6 text-medium-contrast">
										/ AI Agent System
									</div>
									<ul className="space-y-3 mb-8 text-left">
										<li className="flex items-center text-medium-contrast">
											<Check className="mr-3 text-green-500" size={18} />
											Custom AI agent development
										</li>
										<li className="flex items-center text-medium-contrast">
											<Check className="mr-3 text-green-500" size={18} />
											Automation workflow design
										</li>
										<li className="flex items-center text-medium-contrast">
											<Check className="mr-3 text-green-500" size={18} />
											Essential integrations: APIs, databases, analytics
										</li>
										<li className="flex items-center text-medium-contrast">
											<Check className="mr-3 text-green-500" size={18} />
											Setup and deployment
										</li>
										<li className="flex items-center text-medium-contrast">
											<Check className="mr-3 text-green-500" size={18} />
											Performance monitoring
										</li>
									</ul>
								</div>
							</div>
						</RevealAnimation>
						<RevealAnimation delay={0.5} direction="right">
							<div className="p-8 rounded-2xl glass dark:glass-dark card-hover">
								<div className="text-center">
									<div className="mb-2 font-semibold text-blue-600 text-lg">
										Enterprise
									</div>
									<div className="mb-2 font-bold text-high-contrast text-3xl">
										$12,999
									</div>
									<div className="mb-6 text-medium-contrast">
										/ AI Agent System
									</div>
									<ul className="space-y-3 mb-8 text-left">
										<li className="flex items-center text-medium-contrast">
											<Check className="mr-3 text-green-500" size={18} />
											Advanced AI agent development
										</li>
										<li className="flex items-center text-medium-contrast">
											<Check className="mr-3 text-green-500" size={18} />
											Complex automation workflows
										</li>
										<li className="flex items-center text-medium-contrast">
											<Check className="mr-3 text-green-500" size={18} />
											Full system integrations
										</li>
										<li className="flex items-center text-medium-contrast">
											<Check className="mr-3 text-green-500" size={18} />
											Training and documentation
										</li>
										<li className="flex items-center text-medium-contrast">
											<Check className="mr-3 text-green-500" size={18} />
											30 days of support
										</li>
										<li className="flex items-center text-medium-contrast">
											<Check className="mr-3 text-green-500" size={18} />
											Priority development
										</li>
									</ul>
								</div>
							</div>
						</RevealAnimation>
					</div>
				</div>
			</section>

			{/* Testimonials */}
			<section className="px-6 section-padding">
				<div className="mx-auto container">
					<RevealAnimation>
						<div className="mb-20 text-center">
							<h2 className="mb-6 font-bold text-high-contrast text-4xl md:text-5xl">
								Trusted by founders worldwide
							</h2>
						</div>
					</RevealAnimation>
					<div className="gap-8 grid md:grid-cols-3">
						<RevealAnimation delay={0.2}>
							<div className="p-8 rounded-2xl glass dark:glass-dark card-hover">
								<div className="flex items-center mb-4">
									<div className="bg-slate-300 dark:bg-slate-600 mr-4 rounded-full w-12 h-12"></div>
									<div>
										<div className="font-bold text-high-contrast">
											Anthony Privitelli
										</div>
										<div className="text-medium-contrast text-sm">
											Founder of Creator Testing and BurnFM
										</div>
									</div>
								</div>
								<p className="text-medium-contrast">
									"The AI agent they built automated our entire customer
									onboarding process. I'm super happy! I highly recommend at
									least having an intro call with the team."
								</p>
							</div>
						</RevealAnimation>
						<RevealAnimation delay={0.4}>
							<div className="p-8 rounded-2xl glass dark:glass-dark card-hover">
								<div className="flex items-center mb-4">
									<div className="bg-slate-300 dark:bg-slate-600 mr-4 rounded-full w-12 h-12"></div>
									<div>
										<div className="font-bold text-high-contrast">
											Lucas Roussia
										</div>
										<div className="text-medium-contrast text-sm">
											Founder of Toolpad
										</div>
									</div>
								</div>
								<p className="text-medium-contrast">
									"It was a pleasure working with TideTech, who delivered our AI
									automation in just 3 weeks. Communication is smooth, they're
									very professional and a joy to work with."
								</p>
							</div>
						</RevealAnimation>
						<RevealAnimation delay={0.6}>
							<div className="p-8 rounded-2xl glass dark:glass-dark card-hover">
								<div className="flex items-center mb-4">
									<div className="bg-slate-300 dark:bg-slate-600 mr-4 rounded-full w-12 h-12"></div>
									<div>
										<div className="font-bold text-high-contrast">
											Luke Turvey
										</div>
										<div className="text-medium-contrast text-sm">
											Founder of Pentest List
										</div>
									</div>
								</div>
								<p className="text-medium-contrast">
									"TideTech built an AI agent for me in just 2 weeks, delivering
									a flawless automated experience. Their creativity and
									communication is outstanding. I'd use TideTech every time!"
								</p>
							</div>
						</RevealAnimation>
					</div>
				</div>
			</section>

			{/* Value of AI Section */}
			<section className="section-bg-light px-6 section-padding">
				<div className="mx-auto container">
					<RevealAnimation>
						<div className="mb-20 text-center">
							<h2 className="mb-6 font-bold text-high-contrast text-4xl md:text-5xl">
								The value of AI automation
							</h2>
						</div>
					</RevealAnimation>
					<div className="gap-12 grid md:grid-cols-3 mx-auto max-w-5xl">
						<RevealAnimation delay={0.2}>
							<div className="text-center">
								<div className="mb-6 flex justify-center">
									<Zap className="text-[#2c5688]" size={64} />
								</div>
								<h3 className="mb-3 font-bold text-high-contrast text-xl">
									Implement quickly and cost-effectively
								</h3>
								<p className="text-medium-contrast">
									Get your AI solution running fast without massive
									infrastructure investments.
								</p>
							</div>
						</RevealAnimation>
						<RevealAnimation delay={0.4}>
							<div className="text-center">
								<div className="mb-6 flex justify-center">
									<BarChart3 className="text-[#2c5688]" size={64} />
								</div>
								<h3 className="mb-3 font-bold text-high-contrast text-xl">
									Start learning from real data
								</h3>
								<p className="text-medium-contrast">
									Begin collecting insights from automated processes instead of
									manual work.
								</p>
							</div>
						</RevealAnimation>
						<RevealAnimation delay={0.6}>
							<div className="text-center">
								<div className="mb-6 flex justify-center">
									<Target className="text-[#2c5688]" size={64} />
								</div>
								<h3 className="mb-3 font-bold text-high-contrast text-xl">
									Focus on core business features
								</h3>
								<p className="text-medium-contrast">
									We'll help you identify the highest-impact automation
									opportunities.
								</p>
							</div>
						</RevealAnimation>
					</div>
				</div>
			</section>

			{/* About */}
			<section className="px-6 section-padding">
				<div className="mx-auto container">
					<RevealAnimation>
						<div className="mx-auto max-w-5xl text-center">
							<h2 className="mb-8 font-bold text-high-contrast text-4xl md:text-5xl">
								Meet the team
							</h2>
							<p className="mb-8 text-medium-contrast text-xl">
								Hey, we're TideTech.ai. With years of experience leading AI and
								engineering teams in startups and corporations, we've seen
								first-hand what makes AI implementations succeed.
							</p>
							<p className="mb-8 text-medium-contrast text-xl">
								We've built several successful AI agents ourselves, and now we
								want to help you transform your business.
							</p>
							<p className="text-medium-contrast text-xl">
								Our goal with TideTech.ai is to help entrepreneurs like yourself
								bring AI automation to life quickly and efficiently. You have
								the vision; we have the AI expertise to make it happen.
							</p>
						</div>
					</RevealAnimation>
				</div>
			</section>

			{/* CTA */}
			<section id="contact" className="px-6 section-padding gradient-bg">
				<div className="mx-auto text-center container">
					<RevealAnimation>
						<h2 className="mb-6 font-bold text-white text-4xl md:text-5xl">
							Ready for AI transformation?
						</h2>
						<p className="mx-auto mb-8 max-w-2xl text-blue-100 text-xl">
							You'll receive a response within 24 hours of booking. If your
							project is a good fit, we'll schedule a call to discuss the AI
							strategy and implementation process.
						</p>
						<a
							href="mailto:hello@tidetech.ai"
							className="inline-block bg-white hover:bg-blue-50 shadow-lg px-8 py-4 rounded-full font-medium text-blue-600 text-lg transition-colors"
						>
							Start Your AI Journey
						</a>
					</RevealAnimation>
				</div>
			</section>

			{/* Footer */}
			<footer className="bg-slate-800 px-6 py-16 text-white">
				<div className="mx-auto text-center container">
					<RevealAnimation>
						<div className="flex justify-center items-center space-x-2 mb-4">
							<div className="bg-blue-500 rounded-lg w-8 h-8"></div>
							<span className="font-bold text-2xl">TideTech.ai</span>
						</div>
						<p className="text-slate-300">
							Transform your business with custom AI agents and automation.
							Fast, intelligent, and seamlessly integrated.
						</p>
					</RevealAnimation>
				</div>
			</footer>
		</div>
	);
}
