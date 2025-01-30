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
      name: "Amzat Abdulrahman Olalekan",
      level: "100L",
      school: "Optometry, Unilorin",
      text: "Being part of Philik has been an eye-opener. The time management session by Dr. Ridwan came at the perfect time for me—I was struggling to balance my JAMB preparation, first-semester exams, and graphic design practice. Now, I have clear strategies to help me manage my time better. I’m grateful for this opportunity!",
    },
    {
      name: "Saka Habibat",
      level: "400L",
      school: "Medicine, Unilorin",
      text: "The Philik Team did an amazing job with its facilitator choices. I gained so much from the webinar, and I’m looking forward to implementing what I’ve learned. Thank you for creating this platform!",
    },
    {
      name: "Rodhiat Muhammad",
      level: "100L",
      school: "Medicine, Unilag",
      text: "This speaker is incredible! I have so much to learn, and I’m glad I joined early in my academic journey. Philik is truly shaping future leaders!",
    },
    {
      name: "Dr. Muhammad Awwal",
      level: "Medical Intern",
      school: "General Hospital, Ilorin",
      text: "Philik has introduced me to great minds and fresh perspectives. The sessions have been a wake-up call for me to set long-term goals and maximize my internship and NYSC years. I now have a clearer vision for my career path!",
    },
    {
      name: "Rumaysoh",
      level: "400L",
      school: "Biochemistry, Unilorin",
      text: "I’ve always struggled with discipline, and I was beginning to feel stuck. Philik has given me the push I need, and I’d love to learn more strategies to stay consistent. Thank you for fostering a growth-driven community!",
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
          <h2 className="text-3xl font-bold text-center mb-6">What People Are Saying About Philik</h2>
          <div className="overflow-hidden relative">
            <div className="review-marquee flex gap-8">
              {reviews.map((review, index) => (
                <div
                  key={index}
                  className="bg-white p-8 shadow-lg rounded-xl w-[350px] min-w-[350px] flex-shrink-0"
                >
                  <p className="text-gray-700 italic">"{review.text}"</p>
                  <p className="text-right font-semibold mt-4">— {review.name}, {review.level}, {review.school}</p>
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
          animation: scroll 35s linear infinite;
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
