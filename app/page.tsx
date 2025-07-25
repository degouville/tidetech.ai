import Image from "next/image";

export default function Home() {
	return (
		<div className="bg-gradient-to-br from-slate-50 dark:from-slate-900 to-blue-50 dark:to-slate-800 min-h-screen">
			{/* Navigation */}
			<nav className="top-0 z-50 fixed w-full glass dark:glass-dark">
				<div className="mx-auto px-6 py-4 container">
					<div className="flex justify-between items-center">
						<div className="flex items-center space-x-2">
							<div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg w-8 h-8 animate-float logo-glow"></div>
							<span className="font-bold text-2xl gradient-text">
								TideTech.ai
							</span>
						</div>
						<div className="hidden md:flex items-center space-x-8">
							<a
								href="#work"
								className="text-gray-600 hover:text-blue-600 dark:text-gray-300 transition-colors"
							>
								Our Work
							</a>
							<a
								href="#process"
								className="text-gray-600 hover:text-blue-600 dark:text-gray-300 transition-colors"
							>
								Process
							</a>
							<a
								href="#pricing"
								className="text-gray-600 hover:text-blue-600 dark:text-gray-300 transition-colors"
							>
								Pricing
							</a>
							<a
								href="#contact"
								className="px-6 py-2 rounded-full font-medium text-white btn-primary"
							>
								Talk with us
							</a>
						</div>
					</div>
				</div>
			</nav>

			{/* Hero Section */}
			<section className="px-6 pt-32 pb-20">
				<div className="mx-auto text-center container">
					<div className="animate-fade-in-up">
						<h1 className="mb-6 font-bold text-5xl md:text-7xl leading-tight">
							Build your <span className="gradient-text">AI Agent</span>
							<br />
							in weeks, not months
						</h1>
						<p className="mx-auto mb-8 max-w-3xl text-gray-600 dark:text-gray-300 text-xl md:text-2xl">
							Transform your business with custom AI agents and automation.
							Fast, intelligent, and seamlessly integrated.
						</p>
						<div className="flex sm:flex-row flex-col justify-center gap-4 mb-12">
							<a
								href="#contact"
								className="px-8 py-4 rounded-full font-medium text-white text-lg btn-primary"
							>
								Start Your AI Journey
							</a>
							<a
								href="#work"
								className="hover:bg-gray-50 dark:hover:bg-gray-800 px-8 py-4 border border-gray-300 dark:border-gray-600 rounded-full font-medium text-gray-700 dark:text-gray-300 text-lg transition-colors"
							>
								See Our Work
							</a>
						</div>
					</div>

					{/* Trust Indicators */}
					<div className="mb-8 text-gray-500 dark:text-gray-400 text-sm">
						Founders from Google, Y Combinator, TikTok, Patreon, Bank of
						America, PwC, Web3 & AI startups trusted us to deliver
					</div>
					<div className="flex flex-wrap justify-center items-center gap-8 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
						<div className="font-bold text-gray-400 text-2xl">Google</div>
						<div className="font-bold text-gray-400 text-2xl">Y Combinator</div>
						<div className="font-bold text-gray-400 text-2xl">TikTok</div>
						<div className="font-bold text-gray-400 text-2xl">
							Bank of America
						</div>
						<div className="font-bold text-gray-400 text-2xl">PwC</div>
						<div className="font-bold text-gray-400 text-2xl">Patreon</div>
					</div>
				</div>
			</section>

			{/* Value Proposition */}
			<section
				id="work"
				className="bg-white/50 dark:bg-slate-800/50 px-6 py-20"
			>
				<div className="mx-auto container">
					<div className="mb-16 text-center">
						<h2 className="mb-6 font-bold text-4xl md:text-5xl">
							Stuck with manual processes? Let's automate them
						</h2>
					</div>
					<div className="gap-8 grid md:grid-cols-2 lg:grid-cols-3">
						<div className="p-8 rounded-2xl hover:scale-105 transition-all duration-300 glass dark:glass-dark hover:transform">
							<div className="flex justify-center items-center bg-blue-100 dark:bg-blue-900 mb-4 rounded-lg w-12 h-12">
								<span className="text-2xl">🚀</span>
							</div>
							<h3 className="mb-3 font-bold text-xl">Rapid deployment</h3>
							<p className="text-gray-600 dark:text-gray-300">
								Your AI agent ready in 2-4 weeks. From concept to production
								deployment.
							</p>
						</div>
						<div className="p-8 rounded-2xl hover:scale-105 transition-all duration-300 glass dark:glass-dark hover:transform">
							<div className="flex justify-center items-center bg-purple-100 dark:bg-purple-900 mb-4 rounded-lg w-12 h-12">
								<span className="text-2xl">🤖</span>
							</div>
							<h3 className="mb-3 font-bold text-xl">Complete AI solution</h3>
							<p className="text-gray-600 dark:text-gray-300">
								Custom AI agents, automation workflows, and integrations.
								Everything you need to transform your operations.
							</p>
						</div>
						<div className="p-8 rounded-2xl hover:scale-105 transition-all duration-300 glass dark:glass-dark hover:transform">
							<div className="flex justify-center items-center bg-green-100 dark:bg-green-900 mb-4 rounded-lg w-12 h-12">
								<span className="text-2xl">⚡</span>
							</div>
							<h3 className="mb-3 font-bold text-xl">
								Cutting-edge technology
							</h3>
							<p className="text-gray-600 dark:text-gray-300">
								We use the latest AI models and frameworks to ensure your
								solution is intelligent, fast, and scalable.
							</p>
						</div>
						<div className="p-8 rounded-2xl hover:scale-105 transition-all duration-300 glass dark:glass-dark hover:transform">
							<div className="flex justify-center items-center bg-orange-100 dark:bg-orange-900 mb-4 rounded-lg w-12 h-12">
								<span className="text-2xl">👥</span>
							</div>
							<h3 className="mb-3 font-bold text-xl">Expert team</h3>
							<p className="text-gray-600 dark:text-gray-300">
								We know AI inside out thanks to years of experience building
								successful AI-powered products.
							</p>
						</div>
						<div className="p-8 rounded-2xl hover:scale-105 transition-all duration-300 glass dark:glass-dark hover:transform">
							<div className="flex justify-center items-center bg-red-100 dark:bg-red-900 mb-4 rounded-lg w-12 h-12">
								<span className="text-2xl">🔄</span>
							</div>
							<h3 className="mb-3 font-bold text-xl">Seamless integration</h3>
							<p className="text-gray-600 dark:text-gray-300">
								Built-in integrations with your existing tools, databases, and
								workflows.
							</p>
						</div>
						<div className="p-8 rounded-2xl hover:scale-105 transition-all duration-300 glass dark:glass-dark hover:transform">
							<div className="flex justify-center items-center bg-indigo-100 dark:bg-indigo-900 mb-4 rounded-lg w-12 h-12">
								<span className="text-2xl">📈</span>
							</div>
							<h3 className="mb-3 font-bold text-xl">Performance optimized</h3>
							<p className="text-gray-600 dark:text-gray-300">
								Built for scale with monitoring, analytics, and continuous
								improvement.
							</p>
						</div>
					</div>
				</div>
			</section>

			{/* Process */}
			<section id="process" className="px-6 py-20">
				<div className="mx-auto container">
					<div className="mb-16 text-center">
						<h2 className="mb-6 font-bold text-4xl md:text-5xl">
							Our process - it's simple!
						</h2>
					</div>
					<div className="gap-8 grid md:grid-cols-3 mx-auto max-w-4xl">
						<div className="text-center">
							<div className="flex justify-center items-center bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-4 rounded-full w-16 h-16 font-bold text-white text-2xl">
								1
							</div>
							<h3 className="mb-4 font-bold text-2xl">Discovery</h3>
							<p className="text-gray-600 dark:text-gray-300">
								We analyze your processes and create a detailed AI automation
								strategy.
							</p>
						</div>
						<div className="text-center">
							<div className="flex justify-center items-center bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-4 rounded-full w-16 h-16 font-bold text-white text-2xl">
								2
							</div>
							<h3 className="mb-4 font-bold text-2xl">Development</h3>
							<p className="text-gray-600 dark:text-gray-300">
								Watch your AI agent take shape with regular demos and updates.
							</p>
						</div>
						<div className="text-center">
							<div className="flex justify-center items-center bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-4 rounded-full w-16 h-16 font-bold text-white text-2xl">
								3
							</div>
							<h3 className="mb-4 font-bold text-2xl">Launch</h3>
							<p className="text-gray-600 dark:text-gray-300">
								We deploy your AI solution and provide training so you can run
								it confidently.
							</p>
						</div>
					</div>
				</div>
			</section>

			{/* Pricing */}
			<section
				id="pricing"
				className="bg-white/50 dark:bg-slate-800/50 px-6 py-20"
			>
				<div className="mx-auto container">
					<div className="mb-16 text-center">
						<h2 className="mb-6 font-bold text-4xl md:text-5xl">Pricing</h2>
					</div>
					<div className="flex md:flex-row flex-col gap-8 mx-auto max-w-4xl">
						<div className="flex-1 p-8 rounded-2xl glass dark:glass-dark">
							<div className="text-center">
								<div className="mb-2 font-bold text-4xl">$12,999</div>
								<div className="mb-6 text-gray-500 dark:text-gray-400">
									/ AI Agent System
								</div>
								<ul className="space-y-3 mb-8 text-left">
									<li className="flex items-center">
										<span className="mr-2 text-green-500">✓</span> Custom AI
										agent development
									</li>
									<li className="flex items-center">
										<span className="mr-2 text-green-500">✓</span> Automation
										workflow design
									</li>
									<li className="flex items-center">
										<span className="mr-2 text-green-500">✓</span> Integration
										with existing systems
									</li>
									<li className="flex items-center">
										<span className="mr-2 text-green-500">✓</span> Training and
										documentation
									</li>
									<li className="flex items-center">
										<span className="mr-2 text-green-500">✓</span> 30 days of
										support
									</li>
								</ul>
							</div>
						</div>
						<div className="relative flex-1 p-8 border-2 border-blue-500 rounded-2xl glass dark:glass-dark">
							<div className="-top-4 left-1/2 absolute bg-blue-500 px-4 py-1 rounded-full font-medium text-white text-sm -translate-x-1/2 transform">
								2 spots left
							</div>
							<div className="text-center">
								<div className="mb-2 font-bold text-4xl">$8,999</div>
								<div className="mb-6 text-gray-500 dark:text-gray-400">
									/ AI Agent System
								</div>
								<ul className="space-y-3 mb-8 text-left">
									<li className="flex items-center">
										<span className="mr-2 text-green-500">✓</span> Custom AI
										agent development
									</li>
									<li className="flex items-center">
										<span className="mr-2 text-green-500">✓</span> Automation
										workflow design
									</li>
									<li className="flex items-center">
										<span className="mr-2 text-green-500">✓</span> Essential
										integrations: APIs, databases, analytics
									</li>
									<li className="flex items-center">
										<span className="mr-2 text-green-500">✓</span> Setup and
										deployment
									</li>
									<li className="flex items-center">
										<span className="mr-2 text-green-500">✓</span> Performance
										monitoring
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Testimonials */}
			<section className="px-6 py-20">
				<div className="mx-auto container">
					<div className="mb-16 text-center">
						<h2 className="mb-6 font-bold text-4xl md:text-5xl">
							Trusted by founders worldwide
						</h2>
					</div>
					<div className="gap-8 grid md:grid-cols-3">
						<div className="p-8 rounded-2xl glass dark:glass-dark">
							<div className="flex items-center mb-4">
								<div className="bg-gray-300 mr-4 rounded-full w-12 h-12"></div>
								<div>
									<div className="font-bold">Anthony Privitelli</div>
									<div className="text-gray-500 text-sm">
										Founder of Creator Testing and BurnFM
									</div>
								</div>
							</div>
							<p className="text-gray-600 dark:text-gray-300">
								"The AI agent they built automated our entire customer
								onboarding process. I'm super happy! I highly recommend at least
								having an intro call with the team."
							</p>
						</div>
						<div className="p-8 rounded-2xl glass dark:glass-dark">
							<div className="flex items-center mb-4">
								<div className="bg-gray-300 mr-4 rounded-full w-12 h-12"></div>
								<div>
									<div className="font-bold">Lucas Roussia</div>
									<div className="text-gray-500 text-sm">
										Founder of Toolpad
									</div>
								</div>
							</div>
							<p className="text-gray-600 dark:text-gray-300">
								"It was a pleasure working with TideTech, who delivered our AI
								automation in just 3 weeks. Communication is smooth, they're
								very professional and a joy to work with."
							</p>
						</div>
						<div className="p-8 rounded-2xl glass dark:glass-dark">
							<div className="flex items-center mb-4">
								<div className="bg-gray-300 mr-4 rounded-full w-12 h-12"></div>
								<div>
									<div className="font-bold">Luke Turvey</div>
									<div className="text-gray-500 text-sm">
										Founder of Pentest List
									</div>
								</div>
							</div>
							<p className="text-gray-600 dark:text-gray-300">
								"TideTech built an AI agent for me in just 2 weeks, delivering a
								flawless automated experience. Their creativity and
								communication is outstanding. I'd use TideTech every time!"
							</p>
						</div>
					</div>
				</div>
			</section>

			{/* Value of AI Section */}
			<section className="bg-white/50 dark:bg-slate-800/50 px-6 py-20">
				<div className="mx-auto container">
					<div className="mb-16 text-center">
						<h2 className="mb-6 font-bold text-4xl md:text-5xl">
							The value of AI automation
						</h2>
					</div>
					<div className="gap-8 grid md:grid-cols-3 mx-auto max-w-4xl">
						<div className="text-center">
							<div className="mb-4 text-6xl">⚡</div>
							<h3 className="mb-3 font-bold text-xl">
								Implement quickly and cost-effectively
							</h3>
							<p className="text-gray-600 dark:text-gray-300">
								Get your AI solution running fast without massive infrastructure
								investments.
							</p>
						</div>
						<div className="text-center">
							<div className="mb-4 text-6xl">📊</div>
							<h3 className="mb-3 font-bold text-xl">
								Start learning from real data
							</h3>
							<p className="text-gray-600 dark:text-gray-300">
								Begin collecting insights from automated processes instead of
								manual work.
							</p>
						</div>
						<div className="text-center">
							<div className="mb-4 text-6xl">🎯</div>
							<h3 className="mb-3 font-bold text-xl">
								Focus on core business features
							</h3>
							<p className="text-gray-600 dark:text-gray-300">
								We'll help you identify the highest-impact automation
								opportunities.
							</p>
						</div>
					</div>
				</div>
			</section>

			{/* About */}
			<section className="px-6 py-20">
				<div className="mx-auto container">
					<div className="mx-auto max-w-4xl text-center">
						<h2 className="mb-6 font-bold text-4xl md:text-5xl">
							Meet the team
						</h2>
						<p className="mb-8 text-gray-600 dark:text-gray-300 text-xl">
							Hey, we're TideTech.ai. With years of experience leading AI and
							engineering teams in startups and corporations, we've seen
							first-hand what makes AI implementations succeed.
						</p>
						<p className="mb-8 text-gray-600 dark:text-gray-300 text-xl">
							We've built several successful AI agents ourselves, and now we
							want to help you transform your business.
						</p>
						<p className="text-gray-600 dark:text-gray-300 text-xl">
							Our goal with TideTech.ai is to help entrepreneurs like yourself
							bring AI automation to life quickly and efficiently. You have the
							vision; we have the AI expertise to make it happen.
						</p>
					</div>
				</div>
			</section>

			{/* CTA */}
			<section id="contact" className="px-6 py-20 gradient-bg">
				<div className="mx-auto text-center container">
					<h2 className="mb-6 font-bold text-white text-4xl md:text-5xl">
						Ready for AI transformation?
					</h2>
					<p className="mx-auto mb-8 max-w-2xl text-white/90 text-xl">
						You'll receive a response within 24 hours of booking. If your
						project is a good fit, we'll schedule a call to discuss the AI
						strategy and implementation process.
					</p>
					<a
						href="mailto:hello@tidetech.ai"
						className="inline-block bg-white hover:bg-gray-100 px-8 py-4 rounded-full font-medium text-blue-600 text-lg transition-colors"
					>
						Start Your AI Journey
					</a>
				</div>
			</section>

			{/* Footer */}
			<footer className="bg-slate-900 px-6 py-12 text-white">
				<div className="mx-auto text-center container">
					<div className="flex justify-center items-center space-x-2 mb-4">
						<div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg w-8 h-8"></div>
						<span className="font-bold text-2xl">TideTech.ai</span>
					</div>
					<p className="text-slate-400">
						Transform your business with custom AI agents and automation. Fast,
						intelligent, and seamlessly integrated.
					</p>
				</div>
			</footer>
		</div>
	);
}
