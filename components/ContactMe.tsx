import React from 'react';
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from '@heroicons/react/24/solid';
import { useForm, SubmitHandler } from 'react-hook-form';

type Inputs = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

type Props = {};

const ContactMe = ({}: Props) => {
  // react-hook-form
  const { register, handleSubmit } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (formData) => {
    window.location.href = `addisu.haile@yahoo.com?subject=${formData.subject}&body=Hi, my name is ${formData.name}. ${formData.message} (${formData.email})`;
  };
  return (
    <div className="flex relative flex-col text-center md:text-left xl:flex-row mx-w-[200px] xl:px-10 min-h-screen justify-center xl:space-y-10 mx-auto items-center overflow-hidden">
      <h3 className="absolute top-24 uppercase tracking-[16px] text-gray-500 text-2xl">
        Contact
      </h3>

      <div className="flex flex-col space-y-5 top-40">
        <h4 className="text-2xl font-light text-center">
          Let us {''}
          <span className="decoration-[#F7AB0A]/50 underline">Talk.</span>
        </h4>

        <div className="flex flex-col space-y-7 top-40">
          <div className="flex items-center space-x-5 justify-center">
            <PhoneIcon className="text-[#F7AB0A] h-7 w-7 animate-pulse" />
            <p className="text-xl">+251-912912144</p>
          </div>

          <div className="flex items-center space-x-5 justify-center">
            <EnvelopeIcon className="text-[#F7AB0A] h-7 w-7 animate-pulse" />
            <p className="text-xl">addisu.haile@yahoo.com</p>
          </div>

          <div className="flex items-center space-x-5 justify-center">
            <MapPinIcon className="text-[#F7AB0A] h-7 w-7 animate-pulse" />
            <p className="text-xl">Ethiopia</p>
          </div>
        </div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col space-y-4 mx-auto"
        >
          <div className="flex space-x-4">
            <input
              {...register('name')}
              placeholder="Name"
              className="contactInput"
              type="text"
              required
            />
            <input
              {...register('email')}
              placeholder="Email"
              className="contactInput"
              type="email"
              required
            />
          </div>

          <input
            {...register('subject')}
            placeholder="Subject"
            className="contactInput"
            type="text"
            required
          />
          <textarea
            {...register('message')}
            placeholder="Message"
            className="contactInput"
            required
          />
          <button
            type="submit"
            className="bg-[#F7AB0A] py-5 px-10 rounded-md text-black font-bold text-lg"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactMe;
