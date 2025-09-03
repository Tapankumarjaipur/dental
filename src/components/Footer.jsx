import { FaInstagram, FaPhone, FaTelegram, FaWhatsapp, FaTooth, FaHome, FaMapMarkedAlt } from "react-icons/fa"
import { MdOutlineEmail, MdLock } from "react-icons/md"

const socialLinks = [
  {icon: <FaInstagram className="text-xl"/>, href: "#"},
  {icon: <FaWhatsapp className="text-xl"/>, href: "#"},
  {icon: <FaTelegram className="text-xl"/>, href: "#"},
]

const clinicHours = [
  {day: 'Sunday - Thursday', time: '9 AM - 8 PM'},
  {day: 'Friday', time: '4 AM - 9 PM'},
  {day: 'Saturday', time: 'closed'},
]

const contactInfo = [
  {
    icon: <FaPhone className="mr-4 text-white/70"/>,
    text: <a href="#" className="hover:text-sky-300 transition-colors">
      +91 XXXX-XXXX-XX Mobile No.
    </a>,
  },
  {
    icon: <MdOutlineEmail className="mr-4 text-white/70"/>,
    text: <a href="#" className="hover:text-sky-300 transition-colors">
      info@your email address
    </a>,
  },
  {
    icon: <FaMapMarkedAlt className="mr-4 text-white/70"/>,
    text: <span>XXXXXX Your address</span>,
  },
]

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-blue-950 to-blue-950 text-white pt-16 pb-12 relative overflow-hidden">
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-cover opacity-20"></div>
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center mb-14">
          <div className="flex items-center mb-6">
            <div className="bg-white/20 p-3 rounded-full mr-4">
              <FaTooth className="text-2xl text-sky-300"/>
            </div>
            <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-sky-300 to-blue-200">
              Your clinic Name
            </h2>
          </div>
          <div className="flex space-x-6 mb-8">
            {socialLinks.map((link, index) => (
              <a key={index}
                href={link.href}
                className="bg-white/10 hover:bg-white/20 p-3 rounded-full transition-all duration-300 hover:-translate-y-1">
                {link.icon}
              </a>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          <div className="bg-white/5 backdrop-blur-sm p-8 rounded-xl border border-white/10 hover:border-sky-300 transition-colors">
            <h3 className="text-xl font-semibold mb-5 flex items-center">
              <MdLock className="mr-3 text-sky-300"/>
              Client Hours
            </h3>

            <ul className="space-y-3">
              {clinicHours.map((item, index) => (
                <li key={index} className="flex justify-between">
                  <span className="text-white/70">{item.day}</span>
                  <span>{item.time}</span>
                </li>
              ))}
              <li className="pt-3 mt-3 border-t border-white/10 text-sky-300 font-medium">
                Emergency services available 24/7
              </li>
            </ul>
          </div>
          
          <div className="bg-white/5 backdrop-blur-sm p-8 rounded-xl border border-white/10 hover:border-sky-300 transition-colors">
            <h3 className="text-xl font-semibold mb-5 flex items-center">
              <FaHome className="mr-3 text-sky-300"/>
              Contact Us
            </h3>
            <ul className="space-y-4">
              {contactInfo.map((item, index) => (
                <li key={index} className="flex items-start">
                  {item.icon}
                  {item.text}
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white/5 backdrop-blur-sm p-8 rounded-xl border border-white/10 hover:border-sky-300 transition-colors">
            <h3 className="text-xl font-semibold mb-5">Dental Tips News letter</h3>
            <p className="text-white/70 mb-5">
              Subscribe to Receive Oral Health Tips and Special Offers
            </p>
            <div className="flex">
              <input
                type="email"
                placeholder="Your email address"
                className="bg-white/10 border border-white/20 text-white px-3 py-3 rounded-r-none rounded-l-lg focus:outline-none focus:ring-2 focus:ring-sky-300 w-full placeholder-white/30"
              />
              <button className="bg-sky-500 hover:bg-sky-400 text-blue-900 font-medium px-5 py-3 rounded-l-none rounded-r-lg transition-colors flex items-center">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        <div className="pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/50 text-sm mb-3 md:mb-0">
            &copy; {new Date().getFullYear()} Tarun Smile Dental Clinic. All rights reserved
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-white/50 hover:text-sky-300 text-sm transition-colors">
              Terms of Service
            </a>
            <a href="#" className="text-white/50 hover:text-sky-300 text-sm transition-colors">
              Privacy Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;