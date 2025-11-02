'use client'

import { useState } from 'react'

export default function Home() {
  const [email, setEmail] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    alert('Thanks for your interest! We\'ll be in touch soon.')
    setEmail('')
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Navigation */}
      <nav className="fixed w-full bg-slate-900/80 backdrop-blur-md z-50 border-b border-slate-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-reddit-orange to-red-600 rounded-lg"></div>
              <span className="text-2xl font-bold text-white">RedditGrow</span>
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#features" className="text-slate-300 hover:text-white transition">Features</a>
              <a href="#how-it-works" className="text-slate-300 hover:text-white transition">How It Works</a>
              <a href="#pricing" className="text-slate-300 hover:text-white transition">Pricing</a>
            </div>
            <button className="bg-reddit-orange hover:bg-red-600 text-white px-6 py-2 rounded-lg font-semibold transition">
              Get Started
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Grow Your Reddit
            <span className="bg-gradient-to-r from-reddit-orange to-red-500 bg-clip-text text-transparent"> Presence</span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-300 mb-8 max-w-3xl mx-auto">
            The ultimate platform to increase your Reddit karma, engagement, and community reach organically and authentically.
          </p>
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto mb-8">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
              className="flex-1 px-6 py-4 rounded-lg bg-slate-800 border border-slate-700 text-white placeholder-slate-400 focus:outline-none focus:border-reddit-orange transition"
            />
            <button
              type="submit"
              className="bg-reddit-orange hover:bg-red-600 text-white px-8 py-4 rounded-lg font-semibold transition whitespace-nowrap"
            >
              Start Growing
            </button>
          </form>
          <p className="text-slate-400 text-sm">No credit card required • 7-day free trial</p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-800/50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl md:text-5xl font-bold text-reddit-orange mb-2">50K+</div>
              <div className="text-slate-300 text-lg">Active Users</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-reddit-orange mb-2">2M+</div>
              <div className="text-slate-300 text-lg">Posts Optimized</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-reddit-orange mb-2">95%</div>
              <div className="text-slate-300 text-lg">Success Rate</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-16">
            Powerful Features to <span className="text-reddit-orange">Boost Your Growth</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: '📊',
                title: 'Analytics Dashboard',
                description: 'Track your karma, engagement rates, and growth metrics in real-time with detailed insights.'
              },
              {
                icon: '🎯',
                title: 'Smart Scheduling',
                description: 'Post at optimal times when your target subreddit audience is most active for maximum visibility.'
              },
              {
                icon: '💡',
                title: 'Content Suggestions',
                description: 'AI-powered recommendations for trending topics and content ideas in your niche.'
              },
              {
                icon: '🔍',
                title: 'Subreddit Discovery',
                description: 'Find relevant communities where your content will resonate and grow your presence.'
              },
              {
                icon: '⚡',
                title: 'Auto-Engagement',
                description: 'Intelligently engage with relevant posts and comments to build authentic connections.'
              },
              {
                icon: '📈',
                title: 'Growth Tracking',
                description: 'Monitor your follower growth, post performance, and community engagement over time.'
              }
            ].map((feature, index) => (
              <div key={index} className="bg-slate-800 border border-slate-700 rounded-xl p-6 hover:border-reddit-orange transition">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                <p className="text-slate-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-16">
            How It <span className="text-reddit-orange">Works</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                step: '1',
                title: 'Connect Your Account',
                description: 'Securely link your Reddit account to RedditGrow in seconds.'
              },
              {
                step: '2',
                title: 'Set Your Goals',
                description: 'Define your target subreddits, content strategy, and growth objectives.'
              },
              {
                step: '3',
                title: 'Watch Your Growth',
                description: 'Let RedditGrow optimize your content and engagement while you track results.'
              }
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-reddit-orange to-red-600 rounded-full flex items-center justify-center text-2xl font-bold text-white mx-auto mb-6">
                  {item.step}
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{item.title}</h3>
                <p className="text-slate-300 text-lg">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-4">
            Simple, <span className="text-reddit-orange">Transparent</span> Pricing
          </h2>
          <p className="text-slate-300 text-center mb-16 text-lg">Choose the plan that fits your growth goals</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: 'Starter',
                price: '29',
                features: ['1 Reddit Account', '100 Scheduled Posts/mo', 'Basic Analytics', 'Email Support']
              },
              {
                name: 'Pro',
                price: '79',
                popular: true,
                features: ['3 Reddit Accounts', 'Unlimited Posts', 'Advanced Analytics', 'AI Content Suggestions', 'Priority Support']
              },
              {
                name: 'Enterprise',
                price: '199',
                features: ['Unlimited Accounts', 'Unlimited Posts', 'White-label Options', 'Dedicated Manager', 'Custom Integration']
              }
            ].map((plan, index) => (
              <div key={index} className={`bg-slate-800 border ${plan.popular ? 'border-reddit-orange' : 'border-slate-700'} rounded-xl p-8 relative`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-reddit-orange text-white px-4 py-1 rounded-full text-sm font-semibold">
                    Most Popular
                  </div>
                )}
                <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                <div className="mb-6">
                  <span className="text-5xl font-bold text-white">${plan.price}</span>
                  <span className="text-slate-400">/month</span>
                </div>
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-slate-300">
                      <svg className="w-5 h-5 text-reddit-orange mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
                <button className={`w-full py-3 rounded-lg font-semibold transition ${plan.popular ? 'bg-reddit-orange hover:bg-red-600 text-white' : 'bg-slate-700 hover:bg-slate-600 text-white'}`}>
                  Get Started
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-reddit-orange to-red-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Grow Your Reddit Presence?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Join thousands of successful Redditors who are already growing their communities with RedditGrow.
          </p>
          <button className="bg-white text-reddit-orange hover:bg-slate-100 px-8 py-4 rounded-lg font-bold text-lg transition">
            Start Your Free Trial
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 py-12 px-4 sm:px-6 lg:px-8 border-t border-slate-800">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-br from-reddit-orange to-red-600 rounded-lg"></div>
                <span className="text-xl font-bold text-white">RedditGrow</span>
              </div>
              <p className="text-slate-400">Grow your Reddit presence organically.</p>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Product</h4>
              <ul className="space-y-2 text-slate-400">
                <li><a href="#" className="hover:text-white transition">Features</a></li>
                <li><a href="#" className="hover:text-white transition">Pricing</a></li>
                <li><a href="#" className="hover:text-white transition">FAQ</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-slate-400">
                <li><a href="#" className="hover:text-white transition">About</a></li>
                <li><a href="#" className="hover:text-white transition">Blog</a></li>
                <li><a href="#" className="hover:text-white transition">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-slate-400">
                <li><a href="#" className="hover:text-white transition">Privacy</a></li>
                <li><a href="#" className="hover:text-white transition">Terms</a></li>
                <li><a href="#" className="hover:text-white transition">Security</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-slate-800 pt-8 text-center text-slate-400">
            <p>&copy; 2025 RedditGrow. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  )
}
