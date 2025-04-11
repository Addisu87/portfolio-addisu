import React from "react"
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from "@heroicons/react/24/outline"
import { useForm, SubmitHandler } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { motion } from "framer-motion"

// Email regex pattern
const EMAIL_REGEX = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/

// Define the validation schema with Zod
const contactFormSchema = z.object({
	name: z
		.string()
		.min(2, "Name must be at least 2 characters")
		.max(50, "Name must be less than 50 characters")
		.regex(/^[a-zA-Z\s]*$/, "Name can only contain letters and spaces"),
	email: z
		.string()
		.email("Please enter a valid email address")
		.regex(EMAIL_REGEX, "Please enter a valid email address")
		.min(5, "Email is too short")
		.max(100, "Email is too long"),
	subject: z
		.string()
		.min(3, "Subject must be at least 3 characters")
		.max(100, "Subject must be less than 100 characters")
		.regex(
			/^[a-zA-Z0-9\s.,!?-]*$/,
			"Subject can only contain letters, numbers, and basic punctuation",
		),
	message: z
		.string()
		.min(10, "Message must be at least 10 characters")
		.max(1000, "Message must be less than 1000 characters")
		.trim(), // Remove leading/trailing whitespace
})

// Infer the TypeScript type from the schema
type ContactFormInputs = z.infer<typeof contactFormSchema>

const ContactMe = () => {
	const {
		register,
		handleSubmit,
		reset,
		formState: { errors, isSubmitting },
	} = useForm<ContactFormInputs>({
		resolver: zodResolver(contactFormSchema),
		defaultValues: {
			name: "",
			email: "",
			subject: "",
			message: "",
		},
	})

	const onSubmit: SubmitHandler<ContactFormInputs> = async (formData) => {
		try {
			// Sanitize and format the message
			const sanitizedMessage = formData.message.trim()
			const formattedBody = `
Hello,

My name is ${formData.name}.

${sanitizedMessage}

Best regards,
${formData.name}
(${formData.email})
			`.trim()

			// Encode the email components for proper URL formatting
			const encodedSubject = encodeURIComponent(formData.subject)
			const encodedBody = encodeURIComponent(formattedBody)

			// Open email client with formatted data
			window.location.href = `mailto:addisuhaile87@gmail.com?subject=${encodedSubject}&body=${encodedBody}`

			// Reset form after successful submission
			reset()
		} catch (error) {
			console.error("Error submitting form:", error)
		}
	}

	return (
		<div className="h-screen relative flex flex-col text-center md:text-left max-w-7xl px-4 md:px-10 mx-auto items-center justify-center">
			<h3 className="section-title">Contact</h3>

			<h4 className="absolute top-28 sm:top-32 md:top-36 uppercase tracking-[3px] text-gray-500 text-sm">
				Let&apos;s discuss your next project
			</h4>

			<div className="flex flex-col space-y-6 w-full max-w-2xl mt-20 sm:mt-24 md:mt-32">
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
								{...register("name")}
								placeholder="Name"
								className="contactInput w-full"
								type="text"
								disabled={isSubmitting}
							/>
							{errors.name && (
								<p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
							)}
						</div>
						<div className="flex-1">
							<input
								{...register("email")}
								placeholder="Email"
								className="contactInput w-full"
								type="email"
								disabled={isSubmitting}
							/>
							{errors.email && (
								<p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
							)}
						</div>
					</div>

					<div>
						<input
							{...register("subject")}
							placeholder="Subject"
							className="contactInput w-full"
							type="text"
							disabled={isSubmitting}
						/>
						{errors.subject && (
							<p className="text-red-500 text-sm mt-1">{errors.subject.message}</p>
						)}
					</div>

					<div>
						<textarea
							{...register("message")}
							placeholder="Message"
							className="contactInput w-full min-h-[120px]"
							disabled={isSubmitting}
						/>
						{errors.message && (
							<p className="text-red-500 text-sm mt-1">{errors.message.message}</p>
						)}
					</div>

					<button
						type="submit"
						disabled={isSubmitting}
						className="bg-[#F7AB0A] text-black font-bold text-lg py-3 px-10 rounded-md 
								 hover:bg-[#F7AB0A]/80 transition-colors duration-200
								 disabled:opacity-50 disabled:cursor-not-allowed"
					>
						{isSubmitting ? "Sending..." : "Submit"}
					</button>
				</motion.form>
			</div>
		</div>
	)
}

export default ContactMe
