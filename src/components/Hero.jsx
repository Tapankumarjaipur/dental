import { CalendarCheck } from "lucide-react"

const Hero = () => {
  return (
    <section id="home" className="scroll-m-20 bg-[#ffb0a7] py-10">
      <div className="container mx-auto px-4 flex flex-col-reverse lg:flex-row items-center justify-between gap-10">
        <div className="max-w-xl text-center lg:text-left space-y-6">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-sky-900 leading-tight">
            Brighten Your Smile <br /> with Expert Dental Care
          </h1>
          <p className="text-gray-700 text-md lg:text-lg">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Forno soluta excepturi in.
          </p>
          <a href="#"
            className="inline-flex items-center bg-sky-600 text-white px-6 py-3 rounded-xl hover:bg-sky-700 transition text-base font-medium">
            <CalendarCheck className="w-5 h-5 mr-2" />
            Book Appointment
          </a>
        </div>
        <div className="flex justify-center">
  <div className="w-80 h-80 lg:w-[509px] lg:h-[500px] rounded-full overflow-hidden">
    <img 
      src="/smile.png" 
      alt="Dental" 
      className="w-full h-full object-cover" 
    />
  </div>
</div>
      </div>
    </section>
  )
}

export default Hero