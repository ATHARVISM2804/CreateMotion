import { motion } from 'framer-motion';
import { Check, Zap, Smartphone, Monitor, Video, Home } from 'lucide-react';
import { useState } from 'react';

// Define service categories and their plans
const serviceCategories = [
	{
		id: 'apple-animation',
		name: 'Apple Style Animation',
		icon: <Monitor className="w-5 h-5" />,
		description:
			'Premium text animations with the iconic Apple aesthetic',
		plans: [
			{
				name: 'Basic',
				price: '$60',
				period: 'per project',
				description: 'Perfect for short promotional content',
				color: 'from-cyan-500 to-blue-600',
				features: [
					'10-15 second animation',
					'Apple style text animation',
					'Customized to your product',
					'1 Day turnaround',
					'1 Revision round',
				],
			},
			{
				name: 'Pro',
				price: '$200',
				period: 'per project',
				description: 'Enhanced animations with UI elements',
				color: 'from-magenta-500 to-purple-600',
				popular: true,
				features: [
					'Up to 30 second animation',
					'Apple style animation',
					'UI and animated graphics',
					'Tailored to your product',
					'3 Days turnaround',
					'3 Revision rounds',
				],
			},
			{
				name: 'Premium',
				price: '$400',
				period: 'per project',
				description: 'Fully customized premium experience',
				color: 'from-orange-500 to-red-600',
				features: [
					'Up to 60 second animation',
					'Customizable UI elements',
					'Advanced animated graphics',
					'Tailored to your requirements',
					'Around 1 week turnaround*',
					'Unlimited revisions',
					'*Depends on customization',
				],
			},
		],
	},
	{
		id: 'long-form',
		name: 'Long-form Talking Head',
		icon: <Video className="w-5 h-5" />,
		description:
			'Professional talking head videos with motion graphics',
		plans: [
			{
				name: 'Pro',
				price: '$250',
				period: 'per project',
				description: 'Professional editing for longer content',
				color: 'from-magenta-500 to-purple-600',
				popular: true,
				features: [
					'Up to 5 minutes final edit',
					'Talking head with motion graphics',
					'Professional transitions',
					'Customized to your content',
					'3 Days turnaround',
					'3 Revision rounds',
				],
			},
			{
				name: 'Premium',
				price: '$500',
				period: 'per project',
				description: 'Extended premium editing experience',
				color: 'from-orange-500 to-red-600',
				features: [
					'Up to 10 minutes final edit',
					'Advanced motion graphics',
					'Professional color grading',
					'Enhanced visual effects',
					'6 Days turnaround',
					'Unlimited revisions',
					'$50 per extra minute',
				],
			},
		],
	},
	{
		id: 'short-form',
		name: 'Short-form Talking Head',
		icon: <Smartphone className="w-5 h-5" />,
		description:
			'Concise, engaging talking head videos for social platforms',
		plans: [
			{
				name: 'Pro',
				price: '$50',
				period: 'per project',
				description: 'Quick turnaround for social media',
				color: 'from-magenta-500 to-purple-600',
				popular: true,
				features: [
					'Up to 30 seconds final edit',
					'Talking head with motion graphics',
					'Optimized for social media',
					'Clean, professional style',
					'2 Days turnaround',
					'3 Revision rounds',
				],
			},
			{
				name: 'Premium',
				price: '$100',
				period: 'per project',
				description: 'Enhanced short-form content',
				color: 'from-orange-500 to-red-600',
				features: [
					'Up to 1 minute final edit',
					'Custom motion graphics',
					'Captions in any style',
					'Social media optimization',
					'4 Days turnaround',
					'Unlimited revisions',
				],
			},
		],
	},
	{
		id: 'real-estate',
		name: 'Real Estate Videos',
		icon: <Home className="w-5 h-5" />,
		description:
			'Stunning property videos that drive interest and sales',
		plans: [
			{
				name: 'Pro',
				price: '$60+',
				period: 'per project',
				description: 'Showcase properties professionally',
				color: 'from-magenta-500 to-purple-600',
				popular: true,
				features: [
					'Professional editing',
					'Voiceover integration',
					'Cinematic B-roll integration',
					'Custom captions',
					'Color grading included',
					'2 Days turnaround',
					'3 Revision rounds',
					'Special effects (additional fee)',
				],
			},
			{
				name: 'Premium',
				price: '$100',
				period: 'per project',
				description: 'Premium montage-style property showcases',
				color: 'from-orange-500 to-red-600',
				features: [
					'Up to 1 minute montage style',
					'Advanced color grading',
					'Premium transitions',
					'Music selection',
					'Property highlights focus',
					'3 Days turnaround',
					'Unlimited revisions',
				],
			},
		],
	},
];

export default function Pricing() {
	// State to track active service category
	const [activeCategory, setActiveCategory] = useState(
		serviceCategories[0].id
	);

	// Get the current category data
	const currentCategory =
		serviceCategories.find((cat) => cat.id === activeCategory) ||
		serviceCategories[0];
		
	// Handle the "Get Started" button click
	const handleGetStarted = (categoryId: string, planName: string) => {
		// Here you can implement your logic for what happens when a user clicks "Get Started"
		// For example, you could open a contact form modal, redirect to a checkout page, etc.
		console.log(`Selected plan: ${planName} from ${categoryId} category`);
		
		// You could redirect to a contact page with query parameters
		// window.location.href = `/contact?plan=${planName}&category=${categoryId}`;
		
		// Or scroll to contact section
		const contactSection = document.getElementById('contact');
		if (contactSection) {
			contactSection.scrollIntoView({ behavior: 'smooth' });
		}
	};

	return (
		<section className="relative py-32 px-4 overflow-hidden bg-black">
			<div className="absolute inset-0">
				<motion.div
					className="absolute inset-0"
					animate={{
						background: [
							'radial-gradient(circle at 30% 30%, rgba(6, 182, 212, 0.1) 0%, transparent 50%)',
							'radial-gradient(circle at 70% 70%, rgba(217, 70, 239, 0.1) 0%, transparent 50%)',
							'radial-gradient(circle at 30% 70%, rgba(6, 182, 212, 0.1) 0%, transparent 50%)',
							'radial-gradient(circle at 30% 30%, rgba(6, 182, 212, 0.1) 0%, transparent 50%)',
						],
					}}
					transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
				/>
			</div>

			<div className="relative z-10 max-w-7xl mx-auto">
				<motion.div
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8 }}
					viewport={{ once: true }}
					className="text-center mb-16"
				>
					<h2 className="text-5xl md:text-7xl font-bold text-white mb-6">
						Pricing
					</h2>
					<p className="text-xl text-gray-400">
						Choose the perfect plan for your project
					</p>
				</motion.div>

				{/* Category Selector Tabs */}
				<div className="flex flex-wrap justify-center gap-2 mb-16">
					{serviceCategories.map((category, index) => (
						<motion.button
							key={category.id}
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.5, delay: index * 0.1 }}
							viewport={{ once: true }}
							onClick={() => setActiveCategory(category.id)}
							className={`flex items-center gap-2 px-5 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
								activeCategory === category.id
									? 'bg-white/15 text-white shadow-lg'
									: 'bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white'
							}`}
						>
							{category.icon}
							{category.name}
						</motion.button>
					))}
				</div>

				{/* Category Description */}
				<motion.div
					key={currentCategory.id}
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					exit={{ opacity: 0 }}
					transition={{ duration: 0.3 }}
					className="text-center mb-12"
				>
					<p className="text-lg text-gray-300">
						{currentCategory.description}
					</p>
				</motion.div>

				{/* Plans Grid */}
				<motion.div
					key={`plans-${currentCategory.id}`}
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					exit={{ opacity: 0 }}
					transition={{ duration: 0.4 }}
					className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto"
				>
					{currentCategory.plans.map((plan, index) => (
						<motion.div
							key={`${currentCategory.id}-${plan.name}`}
							initial={{ opacity: 0, y: 50 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.6, delay: index * 0.15 }}
							className="relative group"
						>
							<motion.div
								animate={{ y: [0, -5, 0] }}
								transition={{
									duration: 4,
									repeat: Infinity,
									delay: index * 0.3,
								}}
								className="h-full"
							>
								{plan.popular && (
									<div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-20">
										<div className="px-4 py-2 rounded-full bg-gradient-to-r from-cyan-600/80 to-magenta-600/80 border border-white/10 flex items-center gap-2 backdrop-blur-md">
											<Zap className="w-4 h-4 text-white" />
											<span className="text-sm font-bold text-white">
												MOST POPULAR
											</span>
										</div>
									</div>
								)}

								<div
									className={`absolute -inset-0.5 bg-gradient-to-br ${plan.color} rounded-3xl opacity-0 group-hover:opacity-40 blur-md transition-all duration-700`}
								></div>

								<div
									className={`relative p-8 rounded-3xl h-full flex flex-col ${
										plan.popular
											? 'bg-white/8 border border-white/15'
											: 'bg-white/5 border border-white/8'
									} backdrop-blur-xl transition-all duration-500 group-hover:bg-white/10`}
								>
									<div className="mb-8">
										<h3 className="text-2xl font-bold text-white mb-2">
											{plan.name}
										</h3>
										<p className="text-gray-400 text-sm mb-6">
											{plan.description}
										</p>

										<div className="flex items-baseline gap-2">
											<span className="text-5xl font-bold text-white">
												{plan.price}
											</span>
											<span className="text-gray-400">
												{plan.period}
											</span>
										</div>
									</div>

									<ul className="space-y-4 mb-8 flex-grow">
										{plan.features.map((feature, i) => (
											<motion.li
												key={i}
												initial={{ opacity: 0, x: -20 }}
												whileInView={{ opacity: 1, x: 0 }}
												transition={{ delay: index * 0.05 + i * 0.05 }}
												viewport={{ once: true }}
												className="flex items-start gap-3"
											>
												<div
													className={`w-5 h-5 rounded-full bg-gradient-to-br ${plan.color} bg-opacity-80 flex items-center justify-center flex-shrink-0 mt-0.5`}
												>
													<Check className="w-3 h-3 text-white" />
												</div>
												<span className="text-gray-300">{feature}</span>
											</motion.li>
										))}
									</ul>

									<motion.button
										onClick={() => handleGetStarted(currentCategory.id, plan.name)}
										whileHover={{ scale: 1.02 }}
										whileTap={{ scale: 0.98 }}
										className="w-full py-4 rounded-xl font-bold text-white transition-all duration-500 bg-gradient-to-r from-cyan-600 to-magenta-600 hover:from-cyan-500 hover:to-magenta-500"
									>
										Get Started
									</motion.button>
								</div>
							</motion.div>
						</motion.div>
					))}
				</motion.div>

				<motion.p
					initial={{ opacity: 0 }}
					whileInView={{ opacity: 1 }}
					transition={{ delay: 0.8 }}
					viewport={{ once: true }}
					className="text-center text-gray-400 mt-12"
				>
					Need a custom package?{' '}
					<span className="text-cyan-400 font-semibold cursor-pointer hover:underline">
						Contact us
					</span>{' '}
					for enterprise solutions.
				</motion.p>
			</div>
		</section>
	);
}
