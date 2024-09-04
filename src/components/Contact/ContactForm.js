"use client"

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

const InputField = ({ register, name, placeholder, type = "text", required = false }) => (
  <input
    type={type}
    placeholder={placeholder}
    {...register(name, { required })}
    className="outline-none border-0 p-0 mx-2 focus:ring-0 placeholder:text-center placeholder:text-lg border-b border-accent dark:border-gray focus:border-accent dark:focus:border-gray bg-transparent"
  />
);

const FormDisplay = ({ register, handleSubmit, onSubmit }) => (
  <>
    <h2 className="font-bold capitalize text-2xl xs:text-3xl sm:text-4xl">Let's Connect!</h2>
    <form onSubmit={handleSubmit(onSubmit)} className="mt-12 text-base xs:text-lg sm:text-xl font-medium leading-relaxed font-in">
      Hello! My name is <InputField register={register} name="name" placeholder="your name" required />
      and I want to discuss a potential project. You can email me at
      <InputField register={register} name="email" placeholder="your@email" type="email" />
      or reach out to me on
      <InputField register={register} name="phone_number" placeholder="your phone" type="tel" />
      Here are some details about my project: <br />
      <textarea
        {...register("project_details")}
        placeholder="My project is about..."
        rows={3}
        className="w-full outline-none border-0 p-0 mx-0 focus:ring-0 placeholder:text-lg border-b border-accent dark:border-gray focus:border-accent dark:focus:border-gray bg-transparent"
      />
      <input type="submit" value="Send Request" className="mt-8 font-medium inline-block capitalize text-lg sm:text-xl py-2 sm:py-3 px-6 sm:px-8 border-2 border-solid border-dark dark:border-light rounded cursor-pointer" />
    </form>
  </>
);

const ResultDisplay = ({ isSuccess, onReset }) => (
  <div className="w-full flex flex-col items-center justify-center text-center">
    <DotLottieReact src={isSuccess ? "/rocket_launch.lottie" : "/failed.lottie"} autoplay loop/>
    <h3 className="text-2xl text-dark dark:text-white font-bold mb-8">
      {isSuccess
        ? "We have received your connect request."
        : "Oops, something went wrong. Please try again."}
    </h3>
    <button
      className="font-medium inline-block capitalize text-lg sm:text-xl py-2 sm:py-3 px-6 sm:px-8 border-2 border-solid border-dark dark:border-light rounded cursor-pointer"
      onClick={onReset}
    >
      Go back
    </button>
  </div>
);

const ContactForm = () => {
  const [isSuccess, setIsSuccess] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const {
    register,
    handleSubmit,
    reset,
    formState: { isSubmitting },
  } = useForm({
    mode: "onTouched",
  });

  const onSubmit = async (data) => {
    const body = {
      access_key: process.env.NEXT_PUBLIC_WEB3FORMS_API_KEY,
      email: data.email,
      subject: `Connect Request From ${data.name}`,
      name: data.name,
      message: `Hello, my name is ${data.name} and I want to discuss a potential project. You can email me at ${data.email} or reach out to me on ${data.phone_number}. Here are some details about my project: \n${data.project_details}.`,
    };

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(body),
      });

      const json = await response.json();
      setIsSuccess(json.success);
      setIsSubmitted(true);
      if (json.success) reset();
    } catch (error) {
      console.error("Submission error:", error);
      setIsSuccess(false);
      setIsSubmitted(true);
    }
  };

  const handleReset = () => {
    setIsSubmitted(false);
    reset();
  };
  return (
    <>
      {!isSubmitted && <FormDisplay register={register} handleSubmit={handleSubmit} onSubmit={onSubmit} />}
      {isSubmitted && <ResultDisplay isSuccess={isSuccess} onReset={handleReset} />}
    </>
  );
};

export default ContactForm;