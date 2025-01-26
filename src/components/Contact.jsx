import React from 'react';
import { useForm, ValidationError } from '@formspree/react';

const Contact = () => {
  const [state, handleSubmit] = useForm("xvgzzpqe"); // Replace "xvgzzpqe" with your Formspree form ID.

  if (state.succeeded) {
    return (
      <div className="text-center my-5">
        <p className="text-lg font-semibold text-green-600">
          Thank you! Your message has been sent successfully.
        </p>
      </div>
    );
  }

  return (
    <div className="my-12 mx-auto px-5 w-[85%] flex flex-col md:flex-row justify-center items-center md:items-start gap-10">
      {/* Heading */}
      <h1 className="text-[36px] md:text-[70px] font-semibold text-black text-center md:text-left">
        Do you have questions? <br />
        Ask us.
      </h1>

      {/* Form */}
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-5 w-full max-w-[500px]"
      >
        {/* Email Input */}
        <input
          id="email"
          type="email"
          name="email"
          placeholder="Your E-mail Address"
          className="w-full h-[50px] rounded-full bg-[#E2F4FF] p-5 text-black placeholder-gray-500"
          required
        />
        <ValidationError
          prefix="Email"
          field="email"
          errors={state.errors}
          className="text-red-500 text-sm"
        />

        {/* Message Input */}
        <textarea
          id="message"
          name="message"
          placeholder="Type your Message"
          className="w-full h-[230px] rounded-[40px] bg-[#E2F4FF] p-5 text-black placeholder-gray-500"
          required
        />
        <ValidationError
          prefix="Message"
          field="message"
          errors={state.errors}
          className="text-red-500 text-sm"
        />

        {/* Submit Button */}
        <button
          type="submit"
          disabled={state.submitting}
          className="w-full h-[50px] bg-[black] text-white font-semibold rounded-full hover:bg-[#0056b3] transition"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;
