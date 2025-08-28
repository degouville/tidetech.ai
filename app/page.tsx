import { BarChart3, Calendar, Package, Rocket, Target, Users, Zap } from 'lucide-react'
import GlassSurface from '../GlassSurface/GlassSurface'
import PrismaticBurst from '../PrismaticBurst/PrismaticBurst'
import RotatingText from '../RotatingText/RotatingText'
import RevealAnimation from './components/RevealAnimation'

export default function Home() {
  return (
    <div
      className='bg-[#FDFDFD] min-h-screen'
      style={{ fontFamily: 'Reddit Sans, sans-serif' }}
    >
      {/* Navigation */}
      <nav className='top-0 z-50 fixed w-full'>
        <div className='mx-auto px-6 py-4 max-w-3xl'>
          <GlassSurface
            width='100%'
            height={80}
            borderRadius={16}
            className='w-full'
          >
            <div className='flex justify-between items-center px-4 w-full'>
              <div className='flex items-center space-x-2'>
                <div className='bg-[#2c5688] rounded-lg w-8 h-8 animate-float'></div>
                <span className='font-extrabold text-[#2c5688] text-2xl'>TideTech.ai</span>
              </div>
              <div className='hidden md:flex items-center space-x-8'>
                <a
                  href='#work'
                  className='font-semibold text-[#30313D] hover:text-[#2c5688] text-lg transition-colors'
                >
                  Our Work
                </a>
                <a
                  href='#process'
                  className='font-semibold text-[#30313D] hover:text-[#2c5688] text-lg transition-colors'
                >
                  Process
                </a>
                <a
                  href='#pricing'
                  className='font-semibold text-[#30313D] hover:text-[#2c5688] text-lg transition-colors'
                >
                  Pricing
                </a>
                <button
                  type='button'
                  className='bg-[#2c5688] px-5 py-3 rounded-xl font-extrabold text-[17px] text-white hover:scale-95 transition-transform duration-200'
                >
                  Talk with us
                </button>
              </div>
            </div>
          </GlassSurface>
        </div>
      </nav>

      {/* Hero Section */}
      <section className='px-6 pt-40 pb-32'>
        <div className='mx-auto max-w-3xl text-center'>
          <RevealAnimation>
            <h1
              className='mb-6 font-extrabold text-[#30313D] leading-none'
              style={{ fontSize: '52px', letterSpacing: '-0.4px' }}
            >
              Build your{' '}
              <span className='inline-block top-13 relative'>
                <span className='relative p-4 text-[#2c5688]'>
                  <RotatingText
                    texts={['AI Agent', 'Automation', 'AI Assistant']}
                    rotationInterval={3000}
                    staggerDuration={0.02}
                  />
                </span>
              </span>
              <br />
              in weeks, <span className='text-[#67768c]'>not months</span>
            </h1>
          </RevealAnimation>

          <RevealAnimation delay={0.2}>
            <p
              className='mx-auto mb-8 max-w-2xl font-semibold text-[#67768c]'
              style={{ fontSize: '1.25rem', lineHeight: '1.4' }}
            >
              Transform your business with custom AI agents and automation. Fast, intelligent, and seamlessly
              integrated.
            </p>
          </RevealAnimation>

          <RevealAnimation delay={0.4}>
            <div className='flex sm:flex-row flex-col justify-center gap-4 mb-16'>
              <button
                type='button'
                className='bg-[#2c5688] px-5 py-3 rounded-xl font-extrabold text-white hover:scale-95 transition-transform duration-200'
                style={{ fontSize: '17px' }}
              >
                Start Your AI Journey
              </button>
              <button
                type='button'
                className='bg-[#E2E8F0] px-5 py-3 rounded-xl font-extrabold text-[#1A202C] hover:scale-95 transition-transform duration-200'
                style={{ fontSize: '17px' }}
              >
                See Our Work
              </button>
            </div>
          </RevealAnimation>

          {/* Trust Indicators */}

          <RevealAnimation delay={0.6}>
            <div
              className='mb-8 font-semibold text-[#67768c]'
              style={{ fontSize: '1.25rem' }}
            >
              <span className='text-[#67768c]'>Founders from</span> Google, Y Combinator, TikTok, Patreon, Bank of
              America, PwC, Web3 & AI startups <span className='text-[#67768c]'>trusted us to deliver</span>
            </div>
            <div className='flex flex-wrap justify-center items-center gap-8 opacity-60 hover:opacity-80 transition-opacity duration-500'>
              <div className='font-bold text-[#67768c] text-xl'>Google</div>
              <div className='font-bold text-[#67768c] text-xl'>Y Combinator</div>
              <div className='font-bold text-[#67768c] text-xl'>TikTok</div>
              <div className='font-bold text-[#67768c] text-xl'>Bank of America</div>
              <div className='font-bold text-[#67768c] text-xl'>PwC</div>
              <div className='font-bold text-[#67768c] text-xl'>Patreon</div>
            </div>
          </RevealAnimation>
        </div>
      </section>

      {/* Value Proposition */}
      <section
        id='work'
        className='bg-white px-6 py-20'
      >
        <div className='mx-auto max-w-3xl'>
          <RevealAnimation>
            <div className='mb-20 text-center'>
              <h2
                className='mb-6 font-bold text-[#30313D]'
                style={{ fontSize: '1.875rem' }}
              >
                Stuck with manual processes? Let's automate them
              </h2>
            </div>
          </RevealAnimation>
          <div className='gap-3 grid md:grid-cols-2'>
            <RevealAnimation delay={0.1}>
              <div className='bg-white p-6 border-[#E2E8F0] border-2 rounded-xl h-full hover:scale-105 transition-transform duration-200'>
                <div className='flex items-center mb-3'>
                  <Zap
                    className='mr-2 text-[#2c5688]'
                    size={24}
                  />
                  <h3 className='font-bold text-[#30313D] text-lg'>Rapid development:</h3>
                </div>
                <p className='font-semibold text-[#67768c] text-lg'>Your AI agent ready in 2-4 weeks.</p>
              </div>
            </RevealAnimation>
            <RevealAnimation delay={0.2}>
              <div className='bg-white p-6 border-[#E2E8F0] border-2 rounded-xl h-full hover:scale-105 transition-transform duration-200'>
                <div className='flex items-center mb-3'>
                  <Package
                    className='mr-2 text-[#2c5688]'
                    size={24}
                  />
                  <h3 className='font-bold text-[#30313D] text-lg'>Complete package:</h3>
                </div>
                <p className='font-semibold text-[#67768c] text-lg'>
                  AI agent and automation included. Everything you need to transform your operations.
                </p>
              </div>
            </RevealAnimation>
            <RevealAnimation delay={0.3}>
              <div className='bg-white p-6 border-[#E2E8F0] border-2 rounded-xl h-full hover:scale-105 transition-transform duration-200'>
                <div className='flex items-center mb-3'>
                  <Rocket
                    className='mr-2 text-[#2c5688]'
                    size={24}
                  />
                  <h3 className='font-bold text-[#30313D] text-lg'>Modern technology:</h3>
                </div>
                <p className='font-semibold text-[#67768c] text-lg'>
                  We use the latest technologies to ensure your product is fast, stable, and scalable.
                </p>
              </div>
            </RevealAnimation>
            <RevealAnimation delay={0.4}>
              <div className='bg-white p-6 border-[#E2E8F0] border-2 rounded-xl h-full hover:scale-105 transition-transform duration-200'>
                <div className='flex items-center mb-3'>
                  <Users
                    className='mr-2 text-[#2c5688]'
                    size={24}
                  />
                  <h3 className='font-bold text-[#30313D] text-lg'>Experienced team:</h3>
                </div>
                <p className='font-semibold text-[#67768c] text-lg'>
                  We know what we're doing thanks to having years of experience building successful startups.
                </p>
              </div>
            </RevealAnimation>
          </div>
        </div>
      </section>

      {/* Process */}
      <section
        id='process'
        className='px-6 py-20'
      >
        <div className='mx-auto max-w-3xl'>
          <RevealAnimation>
            <div className='mb-20 text-center'>
              <h2
                className='mb-6 font-bold text-[#30313D]'
                style={{ fontSize: '1.875rem' }}
              >
                Our process - it's simple!
              </h2>
            </div>
          </RevealAnimation>
          <div className='space-y-12 mt-8 max-w-4xl'>
            <div className='relative flex items-start'>
              <div
                className='top-20 left-8 absolute mt-0.5 -ml-0.5 border-gray-300 border-l-4 border-dotted w-px h-full'
                aria-hidden='true'
              ></div>
              <div className='relative flex flex-shrink-0 justify-center items-center bg-white shadow rounded-full w-16 h-16'>
                <svg
                  className='w-10 h-10 text-fuchsia-600'
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 512 512'
                  stroke='#2c5688'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='32'
                    d='M416 221.25V416a48 48 0 0 1-48 48H144a48 48 0 0 1-48-48V96a48 48 0 0 1 48-48h98.75a32 32 0 0 1 22.62 9.37l141.26 141.26a32 32 0 0 1 9.37 22.62z'
                  ></path>
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='32'
                    d='M256 56v120a32 32 0 0 0 32 32h120'
                  ></path>
                </svg>
              </div>
              <div className='flex-1 ml-6'>
                <div className='flex sm:flex-row flex-col justify-between items-start mb-4'>
                  <h3 className='font-bold text-[#30313D] text-xl'>Discovery & Specification</h3>
                  <span className='bg-[#2c5688] mt-2 sm:mt-0 px-3 py-1 rounded-full font-medium text-white text-sm'>
                    Week 1
                  </span>
                </div>
                <p className='mb-4 font-semibold text-[#67768c] text-lg'>
                  We dive deep into your business needs to create a comprehensive blueprint for your AI agent.
                </p>

                <div className='gap-6 grid md:grid-cols-2 mb-6'>
                  <div className='bg-gray-50 p-4 rounded-lg'>
                    <h4 className='mb-2 font-semibold text-[#30313D]'>What We Do:</h4>
                    <ul className='space-y-1 text-[#67768c]'>
                      <li>• Comprehensive business process analysis</li>
                      <li>• Technical requirements gathering</li>
                      <li>• Integration needs assessment</li>
                      <li>• Performance metrics definition</li>
                      <li>• User experience workflow mapping</li>
                    </ul>
                  </div>
                  <div className='bg-gray-50 p-4 rounded-lg'>
                    <h4 className='mb-2 font-semibold text-[#30313D]'>Your Involvement:</h4>
                    <ul className='space-y-1 text-[#67768c]'>
                      <li>• Initial strategy call (2 hours)</li>
                      <li>• Process documentation review</li>
                      <li>• Stakeholder interviews</li>
                      <li>• Feedback on proposed solution</li>
                      <li>• Final specification approval</li>
                    </ul>
                  </div>
                </div>

                <div className='bg-blue-50 p-4 rounded-lg'>
                  <h4 className='mb-2 font-semibold text-[#2c5688]'>Deliverables:</h4>
                  <p className='text-[#67768c]'>
                    Detailed technical specification document, system architecture diagram, integration roadmap,
                    timeline with milestones, and project kickoff presentation.
                  </p>
                </div>
              </div>
            </div>

            <div className='relative flex items-start'>
              <div
                className='top-20 left-8 absolute mt-0.5 -ml-0.5 border-gray-300 border-l-4 border-dotted w-px h-full'
                aria-hidden='true'
              ></div>
              <div className='relative flex flex-shrink-0 justify-center items-center bg-white shadow rounded-full w-16 h-16'>
                <svg
                  className='w-9 h-9 text-fuchsia-600'
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='#2c5688'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='1.7'
                    d='M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9'
                  ></path>
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='1.7'
                    d='M10.3 21a1.94 1.94 0 0 0 3.4 0'
                  ></path>
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='1.7'
                    d='M4 2C2.8 3.7 2 5.7 2 8'
                  ></path>
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='1.7'
                    d='M22 8c0-2.3-.8-4.3-2-6'
                  ></path>
                </svg>
              </div>
              <div className='flex-1 ml-6'>
                <div className='flex sm:flex-row flex-col justify-between items-start mb-4'>
                  <h3 className='font-bold text-[#30313D] text-xl'>Agile Development & Testing</h3>
                  <span className='bg-[#2c5688] mt-2 sm:mt-0 px-3 py-1 rounded-full font-medium text-white text-sm'>
                    Weeks 2-3
                  </span>
                </div>
                <p className='mb-4 font-semibold text-[#67768c] text-lg'>
                  Your AI agent comes to life through iterative development with continuous feedback and refinement.
                </p>

                <div className='gap-6 grid md:grid-cols-2 mb-6'>
                  <div className='bg-gray-50 p-4 rounded-lg'>
                    <h4 className='mb-2 font-semibold text-[#30313D]'>Development Phases:</h4>
                    <ul className='space-y-1 text-[#67768c]'>
                      <li>• Core AI agent development</li>
                      <li>• API integrations & data connectors</li>
                      <li>• Automation workflow implementation</li>
                      <li>• User interface & dashboard creation</li>
                      <li>• Performance optimization & testing</li>
                    </ul>
                  </div>
                  <div className='bg-gray-50 p-4 rounded-lg'>
                    <h4 className='mb-2 font-semibold text-[#30313D]'>Weekly Check-ins:</h4>
                    <ul className='space-y-1 text-[#67768c]'>
                      <li>• Live demo sessions every Friday</li>
                      <li>• Progress reports with screenshots</li>
                      <li>• Feedback collection & prioritization</li>
                      <li>• Real-time Slack/email updates</li>
                      <li>• Feature refinement discussions</li>
                    </ul>
                  </div>
                </div>

                <div className='gap-4 grid sm:grid-cols-2 mb-6'>
                  <div className='bg-green-50 p-3 rounded-lg'>
                    <h5 className='mb-1 font-medium text-[#22c55e]'>Quality Assurance:</h5>
                    <p className='text-[#67768c] text-sm'>
                      Automated testing, security audits, and performance benchmarking
                    </p>
                  </div>
                  <div className='bg-purple-50 p-3 rounded-lg'>
                    <h5 className='mb-1 font-medium text-[#8b5cf6]'>Version Control:</h5>
                    <p className='text-[#67768c] text-sm'>Access to development repository and change tracking</p>
                  </div>
                </div>

                <div className='bg-blue-50 p-4 rounded-lg'>
                  <h4 className='mb-2 font-semibold text-[#2c5688]'>Weekly Deliverables:</h4>
                  <p className='text-[#67768c]'>
                    Working prototypes, integration demos, progress documentation, test results, and refined feature
                    implementations based on your feedback.
                  </p>
                </div>
              </div>
            </div>

            <div className='relative flex items-start'>
              <div className='relative flex flex-shrink-0 justify-center items-center bg-white shadow rounded-full w-16 h-16'>
                <svg
                  className='w-9 h-9 text-fuchsia-600'
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='#2c5688'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='1.7'
                    d='M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z'
                  ></path>
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='1.7'
                    d='m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z'
                  ></path>
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='1.7'
                    d='M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0'
                  ></path>
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='1.7'
                    d='M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5'
                  ></path>
                </svg>
              </div>
              <div className='flex-1 ml-6'>
                <div className='flex sm:flex-row flex-col justify-between items-start mb-4'>
                  <h3 className='font-bold text-[#30313D] text-xl'>Deployment & Handover</h3>
                  <span className='bg-[#2c5688] mt-2 sm:mt-0 px-3 py-1 rounded-full font-medium text-white text-sm'>
                    Week 4
                  </span>
                </div>
                <p className='mb-4 font-semibold text-[#67768c] text-lg'>
                  Seamless production deployment with comprehensive training and ongoing support to ensure your success.
                </p>

                <div className='gap-6 grid md:grid-cols-2 mb-6'>
                  <div className='bg-gray-50 p-4 rounded-lg'>
                    <h4 className='mb-2 font-semibold text-[#30313D]'>Production Setup:</h4>
                    <ul className='space-y-1 text-[#67768c]'>
                      <li>• Cloud infrastructure deployment</li>
                      <li>• Security configuration & SSL setup</li>
                      <li>• Database migration & optimization</li>
                      <li>• Monitoring & alerting systems</li>
                      <li>• Backup & disaster recovery</li>
                    </ul>
                  </div>
                  <div className='bg-gray-50 p-4 rounded-lg'>
                    <h4 className='mb-2 font-semibold text-[#30313D]'>Knowledge Transfer:</h4>
                    <ul className='space-y-1 text-[#67768c]'>
                      <li>• Comprehensive user training sessions</li>
                      <li>• Admin panel walkthrough</li>
                      <li>• Troubleshooting guide & FAQ</li>
                      <li>• Best practices documentation</li>
                      <li>• Emergency contact procedures</li>
                    </ul>
                  </div>
                </div>

                <div className='gap-4 grid sm:grid-cols-3 mb-6'>
                  <div className='bg-orange-50 p-3 rounded-lg'>
                    <h5 className='mb-1 font-medium text-[#f97316]'>Training Materials:</h5>
                    <p className='text-[#67768c] text-sm'>Video tutorials, user manuals, and quick reference guides</p>
                  </div>
                  <div className='bg-indigo-50 p-3 rounded-lg'>
                    <h5 className='mb-1 font-medium text-[#6366f1]'>Support Package:</h5>
                    <p className='text-[#67768c] text-sm'>30-day priority support with unlimited questions</p>
                  </div>
                  <div className='bg-teal-50 p-3 rounded-lg'>
                    <h5 className='mb-1 font-medium text-[#14b8a6]'>Future Roadmap:</h5>
                    <p className='text-[#67768c] text-sm'>Enhancement recommendations and scaling strategies</p>
                  </div>
                </div>

                <div className='bg-blue-50 p-4 rounded-lg'>
                  <h4 className='mb-2 font-semibold text-[#2c5688]'>Launch Package Includes:</h4>
                  <p className='text-[#67768c]'>
                    Production-ready AI agent, complete source code, deployment documentation, user training materials,
                    system monitoring dashboard, and 30 days of post-launch support.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className='flex sm:flex-row flex-col justify-center gap-4 mt-16'>
            <button
              className='flex items-center gap-2 bg-[#2c5688] px-5 py-3 rounded-xl font-extrabold text-white hover:scale-95 transition-transform duration-200'
              style={{ fontSize: '17px' }}
            >
              <Calendar size={20} />
              Book a call
            </button>
            <button
              className='bg-[#E2E8F0] px-5 py-3 rounded-xl font-extrabold text-[#1A202C] hover:scale-95 transition-transform duration-200'
              style={{ fontSize: '17px' }}
            >
              See pricing
            </button>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section
        id='pricing'
        className='section-bg-light mx-auto px-6 section-padding'
      >
        <div className='mx-auto max-w-3xl container'>
          <RevealAnimation>
            <div className='mb-20 text-center'>
              <h2 className='mb-6 font-bold text-high-contrast text-4xl md:text-5xl'>Pricing</h2>
            </div>
          </RevealAnimation>
          <div className='mx-auto max-w-6xl'>
            <RevealAnimation>
              <div className='grid grid-cols-4 rounded-2xl'>
                {/* Table Header */}
                <div className='bg-gray-50 p-6 font-semibold text-[#30313D] text-lg'>Features</div>
                <div className='bg-blue-50 p-6 text-left'>
                  <div className='mb-1 font-semibold text-[#2c5688] text-lg'>Starter</div>
                  <div className='font-bold text-[#30313D] text-2xl'>$3,999</div>
                  <div className='text-[#67768c] text-sm'>/ AI Assistant</div>
                </div>
                <div className='relative bg-blue-300 p-6 text-left'>
                  <div className='-top-9 left-0 absolute bg-[#2c5688] px-3 py-1 rounded-full font-medium text-white text-xs -translate-x-0 transform'>
                    Most Popular
                  </div>
                  <div className='mb-1 font-semibold text-[#2c5688] text-lg'>Professional</div>
                  <div className='font-bold text-[#30313D] text-2xl'>$6,999</div>
                  <div className='text-[#67768c] text-sm'>/ AI Agent System</div>
                </div>
                <div className='bg-blue-200 p-6 text-left'>
                  <div className='mb-1 font-semibold text-[#2c5688] text-lg'>Enterprise</div>
                  <div className='font-bold text-[#30313D] text-2xl'>$12,999</div>
                  <div className='text-[#67768c] text-sm'>/ AI Agent System</div>
                </div>

                {/* Table Body */}
                {/* AI Development */}
                <div className='bg-gray-50 p-4 font-medium text-[#30313D] transition-colors'>AI Development</div>
                <div className='bg-blue-50 p-4 text-[#67768c] text-sm transition-colors'>Simple AI chatbot</div>
                <div className='bg-blue-300 p-4 text-[#67768c] text-sm transition-colors'>
                  Custom AI agent development
                </div>
                <div className='bg-blue-200 p-4 text-[#67768c] text-sm transition-colors'>
                  Advanced AI agent development
                </div>

                {/* Automation */}
                <div className='bg-gray-50 p-4 font-medium text-[#30313D] transition-colors'>Automation Workflows</div>
                <div className='bg-blue-50 p-4 text-[#67768c] text-sm transition-colors'>Basic automation workflow</div>
                <div className='bg-blue-300 p-4 text-[#67768c] text-sm transition-colors'>
                  Automation workflow design
                </div>
                <div className='bg-blue-200 p-4 text-[#67768c] text-sm transition-colors'>
                  Complex automation workflows
                </div>

                {/* Integrations */}
                <div className='bg-gray-50 p-4 font-medium text-[#30313D] transition-colors'>System Integrations</div>
                <div className='bg-blue-50 p-4 text-[#67768c] text-sm transition-colors'>2 integrations included</div>
                <div className='bg-blue-300 p-4 text-[#67768c] text-sm transition-colors'>
                  APIs, databases, analytics
                </div>
                <div className='bg-blue-200 p-4 text-[#67768c] text-sm transition-colors'>Full system integrations</div>

                {/* Setup & Deployment */}
                <div className='bg-gray-50 p-4 font-medium text-[#30313D] transition-colors'>Setup & Deployment</div>
                <div className='bg-blue-50 p-4 text-[#67768c] text-sm transition-colors'>Included</div>
                <div className='bg-blue-300 p-4 text-[#67768c] text-sm transition-colors'>Included</div>
                <div className='bg-blue-200 p-4 text-[#67768c] text-sm transition-colors'>Included</div>

                {/* Performance Monitoring */}
                <div className='bg-gray-50 p-4 font-medium text-[#30313D] transition-colors'>
                  Performance Monitoring
                </div>
                <div className='bg-blue-50 p-4 text-[#67768c] text-sm transition-colors'>—</div>
                <div className='bg-blue-300 p-4 text-[#67768c] text-sm transition-colors'>Included</div>
                <div className='bg-blue-200 p-4 text-[#67768c] text-sm transition-colors'>Included</div>

                {/* Training & Documentation */}
                <div className='bg-gray-50 p-4 font-medium text-[#30313D] transition-colors'>
                  Training & Documentation
                </div>
                <div className='bg-blue-50 p-4 text-[#67768c] text-sm transition-colors'>Basic setup guide</div>
                <div className='bg-blue-300 p-4 text-[#67768c] text-sm transition-colors'>User guides & tutorials</div>
                <div className='bg-blue-200 p-4 text-[#67768c] text-sm transition-colors'>
                  Comprehensive training & docs
                </div>

                {/* Support Duration */}
                <div className='bg-gray-50 p-4 font-medium text-[#30313D] transition-colors'>Post-Launch Support</div>
                <div className='bg-blue-50 p-4 text-[#67768c] text-sm transition-colors'>14 days</div>
                <div className='bg-blue-300 p-4 text-[#67768c] text-sm transition-colors'>21 days</div>
                <div className='bg-blue-200 p-4 text-[#67768c] text-sm transition-colors'>30 days</div>

                {/* Development Priority */}
                <div className='bg-gray-50 p-4 font-medium text-[#30313D] transition-colors'>Development Priority</div>
                <div className='bg-blue-50 p-4 text-[#67768c] text-sm transition-colors'>Standard</div>
                <div className='bg-blue-300 p-4 text-[#67768c] text-sm transition-colors'>Standard</div>
                <div className='bg-blue-200 p-4 text-[#67768c] text-sm transition-colors'>Priority</div>

                {/* Timeline */}
                <div className='bg-gray-50 p-4 font-medium text-[#30313D] transition-colors'>Development Timeline</div>
                <div className='bg-blue-50 p-4 text-[#67768c] text-sm transition-colors'>2-3 weeks</div>
                <div className='bg-blue-300 p-4 text-[#67768c] text-sm transition-colors'>3-4 weeks</div>
                <div className='bg-blue-200 p-4 text-[#67768c] text-sm transition-colors'>4-6 weeks</div>

                {/* Call to Action Footer */}
                <div></div>
                <div className='bg-blue-50 p-6 text-left'>
                  <button
                    type='button'
                    className='bg-[#E2E8F0] hover:bg-[#CBD5E0] px-4 py-2 rounded-lg w-full font-semibold text-[#30313D] transition-colors'
                  >
                    Get Started
                  </button>
                </div>
                <div className='bg-blue-300 p-6 text-left'>
                  <button
                    type='button'
                    className='bg-[#2c5688] hover:bg-[#1e3a5f] shadow-lg px-4 py-2 rounded-lg w-full font-semibold text-white transition-colors'
                  >
                    Get Started
                  </button>
                </div>
                <div className='bg-blue-200 p-6 text-left'>
                  <button
                    type='button'
                    className='bg-[#E2E8F0] hover:bg-[#CBD5E0] px-4 py-2 rounded-lg w-full font-semibold text-[#30313D] transition-colors'
                  >
                    Contact Us
                  </button>
                </div>
              </div>
            </RevealAnimation>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className='px-6 section-padding'>
        <div className='mx-auto container'>
          <RevealAnimation>
            <div className='mb-20 text-center'>
              <h2 className='mb-6 font-bold text-high-contrast text-4xl md:text-5xl'>Trusted by founders worldwide</h2>
            </div>
          </RevealAnimation>
          <div className='gap-8 grid md:grid-cols-3'>
            <RevealAnimation delay={0.2}>
              <div className='p-8 rounded-2xl glass dark:glass-dark card-hover'>
                <div className='flex items-center mb-4'>
                  <div className='bg-slate-300 dark:bg-slate-600 mr-4 rounded-full w-12 h-12'></div>
                  <div>
                    <div className='font-bold text-high-contrast'>Anthony Privitelli</div>
                    <div className='text-medium-contrast text-sm'>Founder of Creator Testing and BurnFM</div>
                  </div>
                </div>
                <p className='text-medium-contrast'>
                  "The AI agent they built automated our entire customer onboarding process. I'm super happy! I highly
                  recommend at least having an intro call with the team."
                </p>
              </div>
            </RevealAnimation>
            <RevealAnimation delay={0.4}>
              <div className='p-8 rounded-2xl glass dark:glass-dark card-hover'>
                <div className='flex items-center mb-4'>
                  <div className='bg-slate-300 dark:bg-slate-600 mr-4 rounded-full w-12 h-12'></div>
                  <div>
                    <div className='font-bold text-high-contrast'>Lucas Roussia</div>
                    <div className='text-medium-contrast text-sm'>Founder of Toolpad</div>
                  </div>
                </div>
                <p className='text-medium-contrast'>
                  "It was a pleasure working with TideTech, who delivered our AI automation in just 3 weeks.
                  Communication is smooth, they're very professional and a joy to work with."
                </p>
              </div>
            </RevealAnimation>
            <RevealAnimation delay={0.6}>
              <div className='p-8 rounded-2xl glass dark:glass-dark card-hover'>
                <div className='flex items-center mb-4'>
                  <div className='bg-slate-300 dark:bg-slate-600 mr-4 rounded-full w-12 h-12'></div>
                  <div>
                    <div className='font-bold text-high-contrast'>Luke Turvey</div>
                    <div className='text-medium-contrast text-sm'>Founder of Pentest List</div>
                  </div>
                </div>
                <p className='text-medium-contrast'>
                  "TideTech built an AI agent for me in just 2 weeks, delivering a flawless automated experience. Their
                  creativity and communication is outstanding. I'd use TideTech every time!"
                </p>
              </div>
            </RevealAnimation>
          </div>
        </div>
      </section>

      {/* Value of AI Section */}
      <section className='section-bg-light px-6 section-padding'>
        <div className='mx-auto container'>
          <RevealAnimation>
            <div className='mb-20 text-center'>
              <h2 className='mb-6 font-bold text-high-contrast text-4xl md:text-5xl'>The value of AI automation</h2>
            </div>
          </RevealAnimation>
          <div className='gap-12 grid md:grid-cols-3 mx-auto max-w-5xl'>
            <RevealAnimation delay={0.2}>
              <div className='text-center'>
                <div className='flex justify-center mb-6'>
                  <Zap
                    className='text-[#2c5688]'
                    size={64}
                  />
                </div>
                <h3 className='mb-3 font-bold text-high-contrast text-xl'>Implement quickly and cost-effectively</h3>
                <p className='text-medium-contrast'>
                  Get your AI solution running fast without massive infrastructure investments.
                </p>
              </div>
            </RevealAnimation>
            <RevealAnimation delay={0.4}>
              <div className='text-center'>
                <div className='flex justify-center mb-6'>
                  <BarChart3
                    className='text-[#2c5688]'
                    size={64}
                  />
                </div>
                <h3 className='mb-3 font-bold text-high-contrast text-xl'>Start learning from real data</h3>
                <p className='text-medium-contrast'>
                  Begin collecting insights from automated processes instead of manual work.
                </p>
              </div>
            </RevealAnimation>
            <RevealAnimation delay={0.6}>
              <div className='text-center'>
                <div className='flex justify-center mb-6'>
                  <Target
                    className='text-[#2c5688]'
                    size={64}
                  />
                </div>
                <h3 className='mb-3 font-bold text-high-contrast text-xl'>Focus on core business features</h3>
                <p className='text-medium-contrast'>
                  We'll help you identify the highest-impact automation opportunities.
                </p>
              </div>
            </RevealAnimation>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        id='contact'
        className='relative bg-slate-900 px-6 overflow-hidden section-padding'
      >
        <div className='absolute inset-0'>
          <PrismaticBurst
            intensity={1.5}
            speed={0.3}
            animationType='rotate3d'
            colors={['#2c5688', '#4f83c7', '#7bb3ff', '#a8d0ff']}
            distort={2}
            mixBlendMode='screen'
          />
        </div>
        <div className='z-10 relative mx-auto py-32 text-center container'>
          <RevealAnimation>
            <h2 className='mb-6 font-bold text-white text-4xl md:text-5xl'>Ready for AI transformation?</h2>
            <p className='mx-auto mb-8 max-w-2xl text-blue-100 text-xl'>
              You'll receive a response within 24 hours of booking. If your project is a good fit, we'll schedule a call
              to discuss the AI strategy and implementation process.
            </p>
            <a
              href='mailto:hello@tidetech.ai'
              className='inline-block bg-white/0 hover:bg-blue-50 shadow-lg backdrop-blur-md px-8 py-4 border border-white rounded-full font-medium text-blue-100 hover:text-blue-900 text-lg transition-colors'
            >
              Start Your AI Journey
            </a>
          </RevealAnimation>
        </div>
      </section>

      {/* Footer */}
      <footer className='bg-slate-900 px-6 py-16 text-white'>
        <div className='mx-auto max-w-6xl container'>
          <RevealAnimation>
            <div className='gap-8 grid md:grid-cols-4 mb-12'>
              {/* Company Info */}
              <div className='md:col-span-2'>
                <div className='flex items-center space-x-2 mb-4'>
                  <div className='bg-[#2c5688] rounded-lg w-8 h-8'></div>
                  <span className='font-bold text-2xl'>TideTech.ai</span>
                </div>
                <p className='mb-4 max-w-md text-slate-300'>
                  Transform your business with custom AI agents and automation. Fast, intelligent, and seamlessly
                  integrated.
                </p>
                <div className='flex space-x-4'>
                  <a
                    href='mailto:hello@tidetech.ai'
                    className='text-slate-300 hover:text-white transition-colors'
                  >
                    hello@tidetech.ai
                  </a>
                </div>
              </div>

              {/* Services */}
              <div>
                <h3 className='mb-4 font-semibold text-lg'>Services</h3>
                <ul className='space-y-2'>
                  <li>
                    <a
                      href='#'
                      className='text-slate-300 hover:text-white transition-colors'
                    >
                      AI Agent Development
                    </a>
                  </li>
                  <li>
                    <a
                      href='#'
                      className='text-slate-300 hover:text-white transition-colors'
                    >
                      Process Automation
                    </a>
                  </li>
                  <li>
                    <a
                      href='#'
                      className='text-slate-300 hover:text-white transition-colors'
                    >
                      System Integration
                    </a>
                  </li>
                  <li>
                    <a
                      href='#'
                      className='text-slate-300 hover:text-white transition-colors'
                    >
                      AI Consulting
                    </a>
                  </li>
                </ul>
              </div>

              {/* Company */}
              <div>
                <h3 className='mb-4 font-semibold text-lg'>Company</h3>
                <ul className='space-y-2'>
                  <li>
                    <a
                      href='#work'
                      className='text-slate-300 hover:text-white transition-colors'
                    >
                      Our Work
                    </a>
                  </li>
                  <li>
                    <a
                      href='#process'
                      className='text-slate-300 hover:text-white transition-colors'
                    >
                      Process
                    </a>
                  </li>
                  <li>
                    <a
                      href='#pricing'
                      className='text-slate-300 hover:text-white transition-colors'
                    >
                      Pricing
                    </a>
                  </li>
                  <li>
                    <a
                      href='#contact'
                      className='text-slate-300 hover:text-white transition-colors'
                    >
                      Contact
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            {/* Bottom Bar */}
            <div className='flex md:flex-row flex-col justify-between items-center pt-8 border-slate-700 border-t'>
              <p className='text-slate-400 text-sm'>© 2024 TideTech.ai. All rights reserved.</p>
              <div className='flex space-x-6 mt-4 md:mt-0'>
                <a
                  href='#'
                  className='text-slate-400 hover:text-white text-sm transition-colors'
                >
                  Privacy Policy
                </a>
                <a
                  href='#'
                  className='text-slate-400 hover:text-white text-sm transition-colors'
                >
                  Terms of Service
                </a>
              </div>
            </div>
          </RevealAnimation>
        </div>
      </footer>
    </div>
  )
}
