import React from "react";
import  img1 from '../Assets/Images/img1.jpg'
import  img2 from '../Assets/Images/img2.jpg'
import  img3 from '../Assets/Images/img3.jpg'

const Events = () => {
  // Example data
  const upcomingEvents = [
    {
      id: 1,
      title: "Web Development Workshop",
      date: "February 10, 2025",
      location: "Online (Zoom)",
      description: "Learn the basics of web development and get hands-on experience.",
      link: "https://youtube.com/event-link-1", // Example YouTube link
      flyer: img1, // Example flyer URL
    },
    {
      id: 2,
      title: "Career Fair 2025",
      date: "March 5, 2025",
      location: "Lagos, Nigeria",
      description: "Meet top employers and explore career opportunities.",
      link: "https://example.com/event-link-2", // Example external link
      flyer: img2, // Example flyer URL
    },
  ];

  const pastEvents = [
    {
      id: 1,
      title: "Startup Pitch Competition",
      date: "December 15, 2024",
      location: "Abuja, Nigeria",
      description: "Innovative startups pitched their ideas to a panel of experts.",
      link: "https://youtube.com/event-recap-1", // Example YouTube recap link
      flyer: img3, // Example flyer URL
    },
    {
      id: 2,
      title: "Philik Meetup 2024",
      date: "November 20, 2024",
      location: "Lagos, Nigeria",
      description: "Networking event for professionals and enthusiasts.",
      link: "https://example.com/event-recap-2", // Example external recap link
      flyer: img1, // Example flyer URL
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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {upcomingEvents.map((event) => (
              <div
                key={event.id}
                className="bg-white p-6 shadow-lg rounded-xl hover:shadow-2xl transition"
              >
                {/* Flyer */}
                <img
                  src={event.flyer}
                  alt={`${event.title} Flyer`}
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                <h4 className="text-xl font-semibold mb-2">{event.title}</h4>
                <p className="text-gray-500 text-sm mb-1">
                  📅 {event.date}
                </p>
                <p className="text-gray-500 text-sm mb-4">
                  📍 {event.location}
                </p>
                <p className="text-gray-700 mb-4">{event.description}</p>
                {/* Event Link */}
                <a
                  href={event.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 underline hover:text-blue-800"
                >
                  View Event Details
                </a>
                {/* Dynamic Button */}
                <div className="mt-4">
                  <button className="px-4 py-2 bg-[#F6A139] text-white rounded-lg hover:bg-[#000] transition">
                    Register Now
                  </button>
                </div>
              </div>
            ))}
          </div>
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
                {/* Flyer */}
                <img
                  src={event.flyer}
                  alt={`${event.title} Flyer`}
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                <h4 className="text-xl font-semibold mb-2">{event.title}</h4>
                <p className="text-gray-500 text-sm mb-1">
                  📅 {event.date}
                </p>
                <p className="text-gray-500 text-sm mb-4">
                  📍 {event.location}
                </p>
                <p className="text-gray-700 mb-4">{event.description}</p>
                {/* Event Link */}
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
