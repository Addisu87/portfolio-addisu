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
		<div className="h-screen relative flex flex-col text-center md:text-left max-w-7xl px-4 md:px-10 mx-auto items-center justify-center">
			<h3 className="section-title">Contact</h3>

			<h4 className="absolute top-36 uppercase tracking-[3px] text-gray-500 text-sm">
				Let&apos;s discuss your next project
			</h4>

			<div className="flex flex-col space-y-6 w-full max-w-2xl mt-32">
				{/* Contact Info Section */}
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8 }}
					viewport={{ once: true }}
					className="space-y-4"
				>
					<div className="flex items-center justify-center space-x-5">
						<PhoneIcon className="text-[#F7AB0A] h-7 w-7 animate-pulse" />
						<p className="text-lg">+251-912912144</p>
					</div>

					<div className="flex items-center justify-center space-x-5">
						<EnvelopeIcon className="text-[#F7AB0A] h-7 w-7 animate-pulse" />
						<p className="text-lg">addisuhaile87@gmail.com</p>
					</div>

					<div className="flex items-center justify-center space-x-5">
						<MapPinIcon className="text-[#F7AB0A] h-7 w-7 animate-pulse" />
						<p className="text-lg">Addis Ababa, Ethiopia</p>
					</div>
				</motion.div>

				{/* Contact Form */}
				<motion.form
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8, delay: 0.2 }}
					viewport={{ once: true }}
					onSubmit={handleSubmit(onSubmit)}
					className="flex flex-col space-y-4 w-full"
				>
					<div className="flex flex-col md:flex-row gap-4">
						<div className="flex-1">
							<input
								{...register("name", { required: true })}
								placeholder="Name"
								className="contactInput w-full"
								type="text"
							/>
							{errors.name && (
								<p className="text-red-500 text-sm mt-1">Name is required</p>
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
								<p className="text-red-500 text-sm mt-1">Valid email is required</p>
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
							<p className="text-red-500 text-sm mt-1">Subject is required</p>
						)}
					</div>

					<div>
						<textarea
							{...register("message", { required: true })}
							placeholder="Message"
							className="contactInput w-full min-h-[120px]"
						/>
						{errors.message && (
							<p className="text-red-500 text-sm mt-1">Message is required</p>
						)}
					</div>

					<button
						type="submit"
						className="bg-[#F7AB0A] text-black font-bold text-lg py-3 px-10 rounded-md hover:bg-[#F7AB0A]/80 transition-colors duration-200"
					>
						Submit
					</button>
				</motion.form>
			</div>
		</div>
	)
}

export default ContactMe
