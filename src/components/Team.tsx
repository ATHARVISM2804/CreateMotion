import { motion } from 'framer-motion';
import { User } from 'lucide-react';

const team = [
	{
		name: 'Raman Saklani',
		role: 'Founder & CEO',
		color: 'from-cyan-500 to-blue-600',
		image: 'https://res.cloudinary.com/dmhabztbf/image/upload/v1760523461/PHOTO-2025-10-13-19-03-29_e0tvab.jpg',
	},
	{
		name: 'Krishan',
		role: 'Co-Founder & CTO',
		color: 'from-magenta-500 to-purple-600',
		image: 'https://res.cloudinary.com/dmhabztbf/image/upload/v1760523859/IMG_1053_t3vwpw.jpg'
	},
	{
		name: 'Shivam',
		role: 'Co-Founder & CTO',
		color: 'from-emerald-500 to-teal-600',
		image: 'https://res.cloudinary.com/dmhabztbf/image/upload/v1760523461/WhatsApp_Image_2025-10-14_at_16.49.47_d06d6ed3_x6jfnb.jpg'
	},
];

export default function Team() {
	return (
		<section id="team" className="relative py-24 px-4 overflow-hidden">
			<div className="relative z-10 max-w-6xl mx-auto">
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.7 }}
					viewport={{ once: true }}
					className="text-center mb-12"
				>
					<h2 className="text-4xl md:text-6xl font-bold text-white mb-4">
						Our Team
					</h2>
					<p className="text-lg text-gray-400">
						A small group of passionate builders and creators
					</p>
				</motion.div>

				<div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
					{team.map((member, index) => (
						<motion.div
							key={member.name}
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.7, delay: index * 0.15 }}
							viewport={{ once: true }}
							whileHover={{ y: -8 }}
							className="relative group"
						>
							<div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-magenta-500 rounded-3xl blur-lg opacity-20 group-hover:opacity-40 transition duration-500"></div>
							<div className="relative glass-panel overflow-hidden rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 flex flex-col">
								{/* Image section - larger at the top with better face visibility */}
								{member.image ? (
									<div className="w-full h-72 relative">
										<img
											src={member.image}
											alt={member.name}
											className="w-full h-full object-cover object-top"
											style={{ objectPosition: "center 30%" }}
										/>
										<div
											className={`absolute inset-0 bg-gradient-to-b ${member.color} opacity-10`}
										></div>
										<div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-black/80 to-transparent"></div>
									</div>
								) : (
									<div
										className={`w-full h-48 bg-gradient-to-br ${member.color} flex items-center justify-center`}
									>
										<User className="w-20 h-20 text-white/80" />
									</div>
								)}

								{/* Text section - at the bottom with improved contrast for readability */}
								<div className="p-6 bg-black/30">
									<h3 className="text-2xl font-bold text-white mb-1">
										{member.name}
									</h3>
									<p className="text-cyan-400 font-medium">
										{member.role}
									</p>
								</div>
							</div>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
}
