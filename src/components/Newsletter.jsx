import React, { useState } from 'react';

const Newsletter = () => {
  const [email, setEmail] = useState('');

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      window.open(`https://philikopportunities.substack.com/?email=${encodeURIComponent(email)}`, '_blank');
    } else {
      window.open('https://philikopportunities.substack.com/', '_blank');
    }
  };

  return (
    <div className="bg-[#E2F4FF] mb-[40px] my-[60px] md:mx-auto md:w-[850px] text-black py-10 px-6 md:px-12 text-center rounded-lg shadow-lg">
      <h2 className="text-[24px] md:text-[32px] font-bold mb-4">📩 Join the Philik Newsletter</h2>
      <p className="text-[16px] md:text-[18px] mb-6 text-gray-700">
        Stay updated with exclusive opportunities, events, and insights. Subscribe now!
      </p>

      <form onSubmit={handleSubscribe} className="flex flex-col md:flex-row justify-center items-center gap-4">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          className="px-4 py-3 w-full md:w-[350px] border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F6A139]"
        />
        <button
          type="submit"
          className="px-6 py-3 bg-[#F6A139] text-white rounded-lg hover:bg-[#000] transition duration-300"
        >
          Subscribe
        </button>
      </form>

      <p className="mt-4 text-gray-600">
        Or visit our <a href="https://philikopportunities.substack.com/" target="_blank" rel="noopener noreferrer" className="text-[#F6A139] font-bold hover:underline">Substack page</a> directly.
      </p>
    </div>
  );
};

export default Newsletter;
