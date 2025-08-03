import Image from "next/image";
import RevealAnimation from "./components/RevealAnimation";

export default function Home() {
	return (
		<div className="bg-slate-50 dark:bg-slate-900 min-h-screen">
			{/* Navigation */}
			<nav className="top-0 z-50 fixed w-full nav-glass">
				<div className="mx-auto px-6 py-4 container">
					<div className="flex justify-between items-center">
						<div className="flex items-center space-x-2">
							<div className="bg-blue-500 rounded-lg w-8 h-8 animate-float logo-glow"></div>
							<span className="font-bold text-blue-600 text-2xl">
								TideTech.ai
							</span>
						</div>
						<div className="hidden md:flex items-center space-x-8">
							<a
								href="#work"
								className="font-medium text-slate-600 hover:text-blue-600 dark:text-slate-300 transition-colors"
							>
								Our Work
							</a>
							<a
								href="#process"
								className="font-medium text-slate-600 hover:text-blue-600 dark:text-slate-300 transition-colors"
							>
								Process
							</a>
							<a
								href="#pricing"
								className="font-medium text-slate-600 hover:text-blue-600 dark:text-slate-300 transition-colors"
							>
								Pricing
							</a>
							<a
								href="#contact"
								className="px-6 py-2 rounded-full font-medium btn-primary"
							>
								Talk with us
							</a>
						</div>
					</div>
				</div>
			</nav>

			{/* Hero Section */}
			<section className="px-6 pt-40 pb-32">
				<div className="mx-auto text-center container">
					<RevealAnimation>
						<h1 className="mb-6 font-bold text-high-contrast text-5xl md:text-7xl leading-tight">
							Build your <span className="text-blue-600">AI Agent</span>
							<br />
							in weeks, not months
						</h1>
					</RevealAnimation>
					<RevealAnimation delay={0.2}>
						<p className="mx-auto mb-8 max-w-3xl text-medium-contrast text-xl md:text-2xl">
							Transform your business with custom AI agents and automation.
							Fast, intelligent, and seamlessly integrated.
						</p>
					</RevealAnimation>
					<RevealAnimation delay={0.4}>
						<div className="flex sm:flex-row flex-col justify-center gap-4 mb-16">
							<a
								href="#contact"
								className="px-8 py-4 rounded-full font-medium text-lg btn-primary"
							>
								Start Your AI Journey
							</a>
							<a
								href="#work"
								className="px-8 py-4 rounded-full font-medium text-lg btn-secondary"
							>
								See Our Work
							</a>
						</div>
					</RevealAnimation>

					{/* Trust Indicators */}
					<RevealAnimation delay={0.6}>
						<div className="mb-8 font-medium text-slate-500 dark:text-slate-400 text-sm">
							Founders from Google, Y Combinator, TikTok, Patreon, Bank of
							America, PwC, Web3 & AI startups trusted us to deliver
						</div>
						<div className="flex flex-wrap justify-center items-center gap-8 opacity-60 hover:opacity-80 transition-opacity duration-500">
							<div className="font-bold text-slate-400 text-xl">Google</div>
							<div className="font-bold text-slate-400 text-xl">
								Y Combinator
							</div>
							<div className="font-bold text-slate-400 text-xl">TikTok</div>
							<div className="font-bold text-slate-400 text-xl">
								Bank of America
							</div>
							<div className="font-bold text-slate-400 text-xl">PwC</div>
							<div className="font-bold text-slate-400 text-xl">Patreon</div>
						</div>
					</RevealAnimation>
				</div>
			</section>

			{/* Value Proposition */}
			<section id="work" className="section-bg-light px-6 section-padding">
				<div className="mx-auto container">
					<RevealAnimation>
						<div className="mb-20 text-center">
							<h2 className="mb-6 font-bold text-high-contrast text-4xl md:text-5xl">
								Stuck with manual processes? Let's automate them
							</h2>
						</div>
					</RevealAnimation>
					<div className="gap-8 grid md:grid-cols-2 lg:grid-cols-3">
						<RevealAnimation delay={0.1}>
							<div className="p-8 rounded-2xl glass dark:glass-dark card-hover">
								<div className="flex justify-center items-center bg-blue-100 dark:bg-blue-900 mb-4 rounded-lg w-12 h-12">
									<span className="text-2xl">🚀</span>
								</div>
								<h3 className="mb-3 font-bold text-high-contrast text-xl">
									Rapid deployment
								</h3>
								<p className="text-medium-contrast">
									Your AI agent ready in 2-4 weeks. From concept to production
									deployment.
								</p>
							</div>
						</RevealAnimation>
						<RevealAnimation delay={0.2}>
							<div className="p-8 rounded-2xl glass dark:glass-dark card-hover">
								<div className="flex justify-center items-center bg-blue-100 dark:bg-blue-900 mb-4 rounded-lg w-12 h-12">
									<span className="text-2xl">🤖</span>
								</div>
								<h3 className="mb-3 font-bold text-high-contrast text-xl">
									Complete AI solution
								</h3>
								<p className="text-medium-contrast">
									Custom AI agents, automation workflows, and integrations.
									Everything you need to transform your operations.
								</p>
							</div>
						</RevealAnimation>
						<RevealAnimation delay={0.3}>
							<div className="p-8 rounded-2xl glass dark:glass-dark card-hover">
								<div className="flex justify-center items-center bg-blue-100 dark:bg-blue-900 mb-4 rounded-lg w-12 h-12">
									<span className="text-2xl">⚡</span>
								</div>
								<h3 className="mb-3 font-bold text-high-contrast text-xl">
									Cutting-edge technology
								</h3>
								<p className="text-medium-contrast">
									We use the latest AI models and frameworks to ensure your
									solution is intelligent, fast, and scalable.
								</p>
							</div>
						</RevealAnimation>
						<RevealAnimation delay={0.4}>
							<div className="p-8 rounded-2xl glass dark:glass-dark card-hover">
								<div className="flex justify-center items-center bg-blue-100 dark:bg-blue-900 mb-4 rounded-lg w-12 h-12">
									<span className="text-2xl">👥</span>
								</div>
								<h3 className="mb-3 font-bold text-high-contrast text-xl">
									Expert team
								</h3>
								<p className="text-medium-contrast">
									We know AI inside out thanks to years of experience building
									successful AI-powered products.
								</p>
							</div>
						</RevealAnimation>
						<RevealAnimation delay={0.5}>
							<div className="p-8 rounded-2xl glass dark:glass-dark card-hover">
								<div className="flex justify-center items-center bg-blue-100 dark:bg-blue-900 mb-4 rounded-lg w-12 h-12">
									<span className="text-2xl">🔄</span>
								</div>
								<h3 className="mb-3 font-bold text-high-contrast text-xl">
									Seamless integration
								</h3>
								<p className="text-medium-contrast">
									Built-in integrations with your existing tools, databases, and
									workflows.
								</p>
							</div>
						</RevealAnimation>
						<RevealAnimation delay={0.6}>
							<div className="p-8 rounded-2xl glass dark:glass-dark card-hover">
								<div className="flex justify-center items-center bg-blue-100 dark:bg-blue-900 mb-4 rounded-lg w-12 h-12">
									<span className="text-2xl">📈</span>
								</div>
								<h3 className="mb-3 font-bold text-high-contrast text-xl">
									Performance optimized
								</h3>
								<p className="text-medium-contrast">
									Built for scale with monitoring, analytics, and continuous
									improvement.
								</p>
							</div>
						</RevealAnimation>
					</div>
				</div>
			</section>

			{/* Process */}
			<section id="process" className="px-6 section-padding">
				<div className="mx-auto container">
					<RevealAnimation>
						<div className="mb-20 text-center">
							<h2 className="mb-6 font-bold text-high-contrast text-4xl md:text-5xl">
								Our process - it's simple!
							</h2>
						</div>
					</RevealAnimation>
					<div className="gap-12 grid md:grid-cols-3 mx-auto max-w-5xl">
						<RevealAnimation delay={0.2} direction="left">
							<div className="text-center">
								<div className="flex justify-center items-center bg-blue-500 shadow-lg mx-auto mb-6 rounded-full w-16 h-16 font-bold text-white text-2xl">
									1
								</div>
								<h3 className="mb-4 font-bold text-high-contrast text-2xl">
									Discovery
								</h3>
								<p className="text-medium-contrast">
									We analyze your processes and create a detailed AI automation
									strategy.
								</p>
							</div>
						</RevealAnimation>
						<RevealAnimation delay={0.4}>
							<div className="text-center">
								<div className="flex justify-center items-center bg-blue-500 shadow-lg mx-auto mb-6 rounded-full w-16 h-16 font-bold text-white text-2xl">
									2
								</div>
								<h3 className="mb-4 font-bold text-high-contrast text-2xl">
									Development
								</h3>
								<p className="text-medium-contrast">
									Watch your AI agent take shape with regular demos and updates.
								</p>
							</div>
						</RevealAnimation>
						<RevealAnimation delay={0.6} direction="right">
							<div className="text-center">
								<div className="flex justify-center items-center bg-blue-500 shadow-lg mx-auto mb-6 rounded-full w-16 h-16 font-bold text-white text-2xl">
									3
								</div>
								<h3 className="mb-4 font-bold text-high-contrast text-2xl">
									Launch
								</h3>
								<p className="text-medium-contrast">
									We deploy your AI solution and provide training so you can run
									it confidently.
								</p>
							</div>
						</RevealAnimation>
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
											<span className="mr-3 text-green-500 text-lg">✓</span>
											Simple AI chatbot
										</li>
										<li className="flex items-center text-medium-contrast">
											<span className="mr-3 text-green-500 text-lg">✓</span>
											Basic automation workflow
										</li>
										<li className="flex items-center text-medium-contrast">
											<span className="mr-3 text-green-500 text-lg">✓</span>2
											integrations included
										</li>
										<li className="flex items-center text-medium-contrast">
											<span className="mr-3 text-green-500 text-lg">✓</span>
											Setup and deployment
										</li>
										<li className="flex items-center text-medium-contrast">
											<span className="mr-3 text-green-500 text-lg">✓</span>
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
											<span className="mr-3 text-green-500 text-lg">✓</span>
											Custom AI agent development
										</li>
										<li className="flex items-center text-medium-contrast">
											<span className="mr-3 text-green-500 text-lg">✓</span>
											Automation workflow design
										</li>
										<li className="flex items-center text-medium-contrast">
											<span className="mr-3 text-green-500 text-lg">✓</span>
											Essential integrations: APIs, databases, analytics
										</li>
										<li className="flex items-center text-medium-contrast">
											<span className="mr-3 text-green-500 text-lg">✓</span>
											Setup and deployment
										</li>
										<li className="flex items-center text-medium-contrast">
											<span className="mr-3 text-green-500 text-lg">✓</span>
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
											<span className="mr-3 text-green-500 text-lg">✓</span>
											Advanced AI agent development
										</li>
										<li className="flex items-center text-medium-contrast">
											<span className="mr-3 text-green-500 text-lg">✓</span>
											Complex automation workflows
										</li>
										<li className="flex items-center text-medium-contrast">
											<span className="mr-3 text-green-500 text-lg">✓</span>
											Full system integrations
										</li>
										<li className="flex items-center text-medium-contrast">
											<span className="mr-3 text-green-500 text-lg">✓</span>
											Training and documentation
										</li>
										<li className="flex items-center text-medium-contrast">
											<span className="mr-3 text-green-500 text-lg">✓</span>
											30 days of support
										</li>
										<li className="flex items-center text-medium-contrast">
											<span className="mr-3 text-green-500 text-lg">✓</span>
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
								<div className="mb-6 text-6xl">⚡</div>
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
								<div className="mb-6 text-6xl">📊</div>
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
								<div className="mb-6 text-6xl">🎯</div>
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
