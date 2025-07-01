
import w1 from "../assets/Home/w1.png";
import w2 from "../assets/Home/w2.png";
import w3 from "../assets/Home/w3.png";
import w4 from "../assets/Home/w4.png";


const OurSpeakers = () => {
  const speakers = [
    { name: "Ananna Datta", title: "AI Researcher", image: w2 },
    { name: "Rahim Uddin", title: "Cybersecurity Specialist", image: w1 },
    { name: "Taslima Akter", title: "Data Scientist", image: w4 },
    { name: "Hasibul Haque", title: "Cloud Architect", image: w3 },
  ];

  return (
    <section className="py-16 px-4 md:px-20 bg-gradient-to-br bg-[#004AAD] text-white">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-12">🎤 Our Speakers</h2>
        <div className="flex justify-center flex-wrap gap-10">
          {speakers.map((speaker, i) => (
            <div
              key={i}
              className="relative flex flex-col items-center space-y-4 cursor-pointer group"
            >
              <div className="w-40 h-40 rounded-full overflow-hidden shadow-2xl border-4 border-indigo-400 group-hover:scale-105 transform transition duration-500">
                <img
                  src={speaker.image}
                  alt={speaker.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="text-center">
                <h3 className="text-2xl font-semibold group-hover:text-yellow-300 transition">
                  {speaker.name}
                </h3>
                <p className="text-indigo-200">{speaker.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurSpeakers;
