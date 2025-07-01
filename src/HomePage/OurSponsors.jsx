import S1 from "../assets/Home/S1.png";
import S2 from "../assets/Home/S2.png";
import S3 from "../assets/Home/S3.png";
import S4 from "../assets/Home/S4.png";

const sponsors = [
  {
    name: "NexaTech",
    logo: S1, // sample transparent logo URL
  },
  {
    name: "CyberHive",
    logo: S2,
  },
  {
    name: "DataWave",
    logo: S3,
  },
  {
    name: "CloudNest",
    logo: S4,
  },
];

const OurSponsors = () => {
  return (
    <section className="py-16 px-6 bg-gradient-to-r bg-[#CFDDFF] text-gray-900">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-extrabold mb-12 tracking-wide">🤝 Our Sponsors</h2>
        <div className="flex flex-wrap justify-center items-center gap-16">
          {sponsors.map(({ name, logo }, i) => (
            <a
              key={i}
              href="#"
              className="group relative flex flex-col items-center cursor-pointer transition-transform duration-300 hover:scale-110"
              aria-label={`Sponsor: ${name}`}
            >
              <div className="relative w-32 h-20 overflow-visible">
                <img
                  src={logo}
                  alt={name}
                  className="w-full h-full object-contain filter grayscale group-hover:grayscale-0 transition duration-500"
                />
              </div>
              <span className="mt-3 text-lg font-semibold border-b-2 border-transparent group-hover:border-indigo-500 transition-colors">
                {name}
              </span>
              {/* Subtle glow on hover */}
              <span className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-30 bg-indigo-200 blur-xl transition-opacity"></span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurSponsors;
