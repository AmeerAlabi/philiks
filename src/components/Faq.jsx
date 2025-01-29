import React, { useState } from "react";

const FAQReviewSection = () => {
  // State to track which FAQ is open
  const [openFAQ, setOpenFAQ] = useState(null);

  // FAQ Data
  const faqs = [
    {
      question: "What is Philik all about?",
      answer:
        "Philik is an initiative focused on equipping students and professionals with career growth opportunities, skill development programs, and mentorship to bridge the gap between education and the workforce.",
    },
    {
      question: "How can I participate in Philik programs?",
      answer:
        "You can join our programs by subscribing to our newsletter, attending our webinars, and participating in mentorship sessions. Follow our updates to stay informed!",
    },
    {
      question: "Is Philik only for students?",
      answer:
        "No, Philik serves high school students, undergraduates, and professionals by providing tailored solutions for each stage of career growth.",
    },
    {
      question: "How do I stay updated with Philik events?",
      answer:
        "You can follow us on social media and subscribe to our newsletter for the latest updates on programs, workshops, and career opportunities.",
    },
  ];

  // Review Data
  const reviews = [
    {
      name: "Sarah O.",
      text: "Philik completely transformed my career path. Their mentorship program gave me the guidance I needed!",
    },
    {
      name: "John A.",
      text: "The webinars are incredibly insightful! Every session is packed with valuable knowledge.",
    },
    {
      name: "Emeka K.",
      text: "Joining Philik's career development program was the best decision I made. The networking opportunities are amazing!",
    },
    {
      name: "Amina L.",
      text: "Philik helped me transition from university to the job market with confidence!",
    },
  ];

  return (
    <div className="py-16 bg-gray-100">
      <div className="container mx-auto px-6 md:px-12">
        {/* FAQ Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-6">Frequently Asked Questions</h2>
          <div className="max-w-3xl mx-auto">
            {faqs.map((faq, index) => (
              <div key={index} className="mb-4">
                <button
                  className="w-full text-left font-semibold bg-white p-4 rounded-lg shadow-md focus:outline-none hover:bg-gray-200 transition"
                  onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
                >
                  {faq.question}
                </button>
                {openFAQ === index && (
                  <div className="mt-2 bg-white p-4 rounded-lg shadow-md">
                    <p className="text-gray-700">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Reviews Section */}
        <div>
          <h2 className="text-3xl font-bold text-center mb-6">What People Are Saying</h2>
          <div className="overflow-hidden relative">
            <div className="review-marquee flex gap-8">
              {reviews.map((review, index) => (
                <div
                  key={index}
                  className="bg-white p-8 shadow-lg rounded-xl w-[350px] min-w-[350px] flex-shrink-0"
                >
                  <p className="text-gray-700 italic">"{review.text}"</p>
                  <p className="text-right font-semibold mt-4">— {review.name}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Review Scrolling Animation */}
      <style jsx>{`
        .review-marquee {
          display: flex;
          animation: scroll 10s linear infinite;
        }

        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-100%);
          }
        }
      `}</style>
    </div>
  );
};

export default FAQReviewSection;
