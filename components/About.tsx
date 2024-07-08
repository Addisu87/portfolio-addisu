import React from 'react';
import { motion } from 'framer-motion';
import { PageInfo } from '../typings';
import { urlFor } from '../sanity';

type Props = {
	pageInfo: PageInfo;
};

const About = ({ pageInfo }: Props) => {
	return (
		<motion.div
			initial={{ opacity: 0 }}
			whileInView={{ opacity: 1 }}
			transition={{ duration: 1.5 }}
			className='flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center overflow-hidden'
		>
			<h3 className='absolute top-24 uppercase tracking-[16px] text-gray-500 text-2xl'>
				About
			</h3>

			<motion.img
				initial={{ x: -200, opacity: 0 }}
				transition={{ duration: 1.2 }}
				whileInView={{ opacity: 1, x: 0 }}
				viewport={{ once: true }}
				src={urlFor(pageInfo?.profilePic).url()}
				alt=''
				className='w-44 h-44 rounded-full object-cover md:rounded-lg -mb-20 md:mb-0 flex-shrink-0 md:w-65 md:h-95 xl:w-[400px] xl:h-[500px] mt-[80px]'
			/>

			<div className='space-y-8 px-0 md:px-10'>
				<h4 className='text-3xl font-bold'>
					My {''}
					<span className='underline decoration-[#F7AB0A]/50'>
						background
					</span>{' '}
				</h4>
				<p className='text-xl font-light'>
					{pageInfo?.backgroundInformation}
				</p>
			</div>
		</motion.div>
	);
};

export default About;
