import { FaUserMd } from "react-icons/fa";

const About = () => {
  return (
    <section id="about" className="py-8 lg:py-30 scroll-mt-20 bg-green-100">
      <div className="max-w-6xl mx-auto px-4 flex flex-col lg:flex-row items-center lg:items-center gap-8 lg:gap-16">
        
        {/* Image on the left (circle) */}
        <div className="lg:w-1/2 flex justify-center lg:justify-start">
          <img
            src="/chair.jpg"
            alt="Dental chair"
            className="w-72 h-72 lg:w-96 lg:h-96 object-cover rounded-full shadow-lg"
          />
        </div>

        {/* Text content on the right */}
        <div className="lg:w-1/2 space-y-6">
          <div className="flex items-center space-x-3 mb-4">
            <FaUserMd className="text-sky-600 w-8 h-8" />
            <h2 className="text-3xl lg:text-4xl font-bold text-sky-900">
              About Our Clinic
            </h2>
          </div>
          <p className="text-gray-700 text-lg leading-relaxed">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta earum odio,
            a fugiat labore alias porro rem deserunt minima et. Distinctio sit modi quia
            dolor suscipit maiores, vitae quibusdam voluptates.
          </p>
          <p className="text-gray-700 text-lg leading-relaxed">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore omnis
            reprehenderit iure fugit est justo quod magni ipsam deleniti sit, voluptate
            eos obcaecati cumque similique. Illum rem a fugit, repudiandae?
          </p>
        </div>
      </div>
    </section>
    
  );
};

export default About;
