import React from "react";
import img1 from "../Assets/Images/phl1.jpg";
import img2 from "../Assets/Images/phl2.jpg";
import img3 from "../Assets/Images/phl3.jpg";

const Events = () => {
  const upcomingEvents = []; // No upcoming events

  const pastEvents = [
    {
      id: 1,
      title: "Introduction to Philik",
      date: "January 27, 2024",
      location: "Remote(Zoom)",
      description: "Showcase how Philik connects students to opportunities that align with their goals.",
      link: "https://www.youtube.com/watch?v=HmF_WYl1pQ8&t=13s",
      flyer: img1,
    },
    {
      id: 2,
      title: "Understanding Balance",
      date: "January 28, 2024",
      location: "Remote(Zoom)",
      description: "Introduce the importance of balancing both aspects for holistic development.",
      link: "https://www.youtube.com/@Philikopportunnites",
      flyer: img2,
    },
    {
      id: 3,
      title: "Time Management Strategies",
      date: "January 29, 2024",
      location: "Remote(Zoom)",
      description: "Teach practical time-management techniques, including prioritization, planning, and goal-setting.",
      link: "https://www.youtube.com/@Philikopportunnites",
      flyer: img3,
    },
  ];

  return (
    <section id="events" className="bg-[#F9FAFB] py-16">
      <div className="container mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold mb-4">Events</h2>
          <p className="text-gray-600">
            Stay updated with our upcoming events and explore the highlights of past ones.
          </p>
        </div>

        {/* Upcoming Events */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold mb-6">Upcoming Events</h3>
          {upcomingEvents.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {upcomingEvents.map((event) => (
                <div
                  key={event.id}
                  className="bg-white p-6 shadow-lg rounded-xl hover:shadow-2xl transition"
                >
                  <img
                    src={event.flyer}
                    alt={`${event.title} Flyer`}
                    className="w-full h-48 object-cover rounded-lg mb-4"
                  />
                  <h4 className="text-xl font-semibold mb-2">{event.title}</h4>
                  <p className="text-gray-500 text-sm mb-1">📅 {event.date}</p>
                  <p className="text-gray-500 text-sm mb-4">📍 {event.location}</p>
                  <p className="text-gray-700 mb-4">{event.description}</p>
                  <a
                    href={event.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 underline hover:text-blue-800"
                  >
                    View Event Details
                  </a>
                  <div className="mt-4">
                    <button className="px-4 py-2 bg-[#F6A139] text-white rounded-lg hover:bg-[#000] transition">
                      Register Now
                    </button>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            // No Upcoming Events Message
            <div className="text-center md:mx-auto md:w-[800px] bg-white p-8 rounded-xl shadow-lg">
              <h4 className="text-xl font-semibold text-gray-800 mb-2">🎉 Stay Tuned!</h4>
              <p className="text-gray-600 mb-4">
                No upcoming events at the moment. Be the first to know when new events drop!
              </p>
              <a
                href="https://philikopportunities.substack.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-[#F6A139] text-white rounded-lg hover:bg-[#000] transition duration-300"
              >
                Join Our Newsletter
              </a>
            </div>
          )}
        </div>

        {/* Past Events */}
        <div>
          <h3 className="text-2xl font-bold mb-6">Past Events</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {pastEvents.map((event) => (
              <div
                key={event.id}
                className="bg-white p-6 shadow-lg rounded-xl hover:shadow-2xl transition"
              >
                <img
                  src={event.flyer}
                  alt={`${event.title} Flyer`}
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                <h4 className="text-xl font-semibold mb-2">{event.title}</h4>
                <p className="text-gray-500 text-sm mb-1">📅 {event.date}</p>
                <p className="text-gray-500 text-sm mb-4">📍 {event.location}</p>
                <p className="text-gray-700 mb-4">{event.description}</p>
                <a
                  href={event.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 underline hover:text-blue-800"
                >
                  Watch Recap
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Events;
