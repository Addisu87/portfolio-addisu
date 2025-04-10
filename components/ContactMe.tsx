import React from "react"
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from "@heroicons/react/24/outline"
import { useForm, SubmitHandler } from "react-hook-form"
import { motion } from "framer-motion"

type Inputs = {
	name: string
	email: string
	subject: string
	message: string
}

const ContactMe = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<Inputs>()

	const onSubmit: SubmitHandler<Inputs> = (formData) => {
		window.location.href = `mailto:addisuhaile87@gmail.com?subject=${formData.subject}&body=Hello, my name is ${formData.name}. ${formData.message} (${formData.email})`
	}

	return (
		<motion.div
			initial={{ opacity: 0 }}
			whileInView={{ opacity: 1 }}
			transition={{ duration: 1.5 }}
			className="h-screen relative flex flex-col text-center md:text-left md:flex-row max-w-7xl mx-auto items-center justify-center"
		>
			<h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
				Contact
			</h3>

			<h4 className="absolute top-36 uppercase tracking-[3px] text-gray-500 text-sm">
				Let&apos;s discuss your next project
			</h4>

			<div className="flex flex-col space-y-10 w-[90%] sm:w-[80%] md:max-w-2xl">
				<div className="space-y-4 sm:space-y-6">
					<motion.div
						initial={{ x: -200, opacity: 0 }}
						whileInView={{ x: 0, opacity: 1 }}
						transition={{ duration: 1.2 }}
						className="flex items-center space-x-5 justify-center"
					>
						<PhoneIcon className="text-[#F7AB0A] h-6 w-6 sm:h-7 sm:w-7 animate-pulse" />
						<p className="text-base sm:text-lg">+251-912912144</p>
					</motion.div>

					<motion.div
						initial={{ x: 200, opacity: 0 }}
						whileInView={{ x: 0, opacity: 1 }}
						transition={{ duration: 1.2 }}
						className="flex items-center space-x-5 justify-center"
					>
						<EnvelopeIcon className="text-[#F7AB0A] h-6 w-6 sm:h-7 sm:w-7 animate-pulse" />
						<p className="text-base sm:text-lg">addisuhaile87@gmail.com</p>
					</motion.div>

					<motion.div
						initial={{ x: -200, opacity: 0 }}
						whileInView={{ x: 0, opacity: 1 }}
						transition={{ duration: 1.2 }}
						className="flex items-center space-x-5 justify-center"
					>
						<MapPinIcon className="text-[#F7AB0A] h-6 w-6 sm:h-7 sm:w-7 animate-pulse" />
						<p className="text-base sm:text-lg">Addis Ababa, Ethiopia</p>
					</motion.div>
				</div>

				<form
					onSubmit={handleSubmit(onSubmit)}
					className="flex flex-col space-y-3 sm:space-y-4 w-full mt-4 sm:mt-6"
				>
					<div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
						<div className="flex-1">
							<input
								{...register("name", { required: true })}
								placeholder="Name"
								className="contactInput w-full"
								type="text"
							/>
							{errors.name && (
								<p className="text-red-500 text-xs sm:text-sm mt-1">Name is required</p>
							)}
						</div>
						<div className="flex-1">
							<input
								{...register("email", {
									required: true,
									pattern: /^\S+@\S+$/i,
								})}
								placeholder="Email"
								className="contactInput w-full"
								type="email"
							/>
							{errors.email && (
								<p className="text-red-500 text-xs sm:text-sm mt-1">
									Valid email is required
								</p>
							)}
						</div>
					</div>

					<div>
						<input
							{...register("subject", { required: true })}
							placeholder="Subject"
							className="contactInput w-full"
							type="text"
						/>
						{errors.subject && (
							<p className="text-red-500 text-xs sm:text-sm mt-1">
								Subject is required
							</p>
						)}
					</div>

					<div>
						<textarea
							{...register("message", { required: true })}
							placeholder="Message"
							className="contactInput w-full min-h-[100px] sm:min-h-[120px]"
						/>
						{errors.message && (
							<p className="text-red-500 text-xs sm:text-sm mt-1">
								Message is required
							</p>
						)}
					</div>

					<button
						type="submit"
						className="flex items-center justify-center space-x-2 bg-[#F7AB0A] text-black hover:bg-[#F7AB0A]/80 transition-colors duration-200 rounded-lg px-3 sm:px-4 py-2 w-full"
					>
						<span className="text-sm sm:text-base font-semibold">Submit</span>
					</button>
				</form>
			</div>
		</motion.div>
	)
}

export default ContactMe
