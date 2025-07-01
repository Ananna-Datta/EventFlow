import React from "react";

const testimonials = [
  {
    name: "Shahariar Hossain",
    title: "Software Engineer",
    quote:
      "This conference changed the way I approach my career. It was full of energy and inspiration.",
  },
  {
    name: "Farzana Sultana",
    title: "Cloud Analyst",
    quote:
      "Incredible experience! I met so many amazing people and learned from the best in the field.",
  },
  {
    name: "Mahfuz Rahman",
    title: "Machine Learning Engineer",
    quote:
      "A truly enriching environment. The shared knowledge, community, and vibes were unforgettable.",
  },
];

const Testimonial = () => {
  return (
    <section className="bg-gray-50 py-20 px-4 md:px-20">
      <h2 className="text-4xl font-bold text-center mb-16 text-gray-800">
        💬 Voices of Impact
      </h2>

      <div className="max-w-5xl mx-auto space-y-10">
        {testimonials.map((t, index) => (
          <div
            key={index}
            className="relative border border-indigo-200 hover:border-indigo-400 px-6 py-8 rounded-md text-center transition duration-300 hover:shadow-md hover:bg-white"
          >
            <p className="text-lg text-gray-700 font-medium italic mb-6 transition-all duration-300">
              “{t.quote}”
            </p>
            <p className="text-xl font-bold text-indigo-700 hover:text-indigo-500 transition duration-200 hover:scale-105 inline-block underline underline-offset-4">
              {t.name}
            </p>
            <div className="text-sm text-gray-500 mt-1">{t.title}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonial;
