import { CalendarCheck } from "lucide-react";
import styles from "./Hero.module.css";

const Hero = () => {
  return (
    <section id="home" className="bg-[#ffb0a7] py-10">
      <div className="container mx-auto px-4 flex flex-col-reverse lg:flex-row items-center justify-between gap-10">

        {/* Text Section (kept left) */}
        <div className={`max-w-xl text-left space-y-6 ${styles.textSection}`}>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-sky-900 leading-tight">
            Brighten Your Smile <br /> with Expert Dental Care
          </h1>
          <p className="text-gray-700 text-sm sm:text-base md:text-lg lg:text-xl">
            Text/description as per customer
          </p>
          <a href="#" className="inline-flex items-center bg-sky-600 text-white px-6 py-3 rounded-xl hover:bg-sky-700 transition text-base sm:text-lg md:text-xl">
            <CalendarCheck className="w-5 h-5 mr-2" />
            Book Appointment
          </a>
        </div>

        {/* Image Section */}
        <div className={`flex justify-center ${styles.imageSection}`}>
          <div className={styles.imageWrapper}>
            <img src="/smile.png" alt="Dental" />
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;
