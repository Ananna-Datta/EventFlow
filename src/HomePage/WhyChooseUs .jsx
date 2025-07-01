import React from "react";

const WhyChooseUs = () => {
  const features = [
    {
      title: "Expert Team",
      description:
        "Our skilled professionals bring years of experience to deliver the best results across all services we offer.",
      icon: "👨‍💻",
    },
    {
      title: "Customer-Centric Approach",
      description:
        "We listen to your needs and tailor our solutions to ensure maximum satisfaction and long-term success.",
      icon: "🤝",
    },
    {
      title: "Cutting-Edge Technology",
      description:
        "We utilize the latest tools and innovations to provide modern, scalable, and efficient solutions.",
      icon: "🚀",
    },
    {
      title: "24/7 Support",
      description:
        "Our support team is always available to assist you anytime, ensuring smooth and uninterrupted service.",
      icon: "🕐",
    },
  ];

  return (
    <section className="bg-gradient-to-br  py-16 px-4 md:px-20 bg-[#004AAD]">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl text-white font-bold text-center mb-12 animate-fade-in">
          Why Choose Us?
        </h2>
        <div className="grid md:grid-cols-2  lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group bg-white text-[#004AAD] rounded-2xl shadow-md p-6 text-center transition duration-500 ease-in-out transform hover:scale-105 hover:shadow-xl hover:bg-indigo-600 hover:text-white"
            >
              <div className="text-5xl mb-4 transition-transform duration-500 group-hover:animate-bounce">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2 text-[#004AAD] transition-all duration-300 group-hover:text-yellow-300">
                {feature.title}
              </h3>
              <p className="text-sm text-[#004AAD] group-hover:text-white transition-all duration-300">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
