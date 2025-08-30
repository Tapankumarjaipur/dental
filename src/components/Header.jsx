import React, { useState } from 'react';
import { Hospital, PhoneCall, X, Menu } from 'lucide-react';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const navList = [
        { href: '#home', label: 'Home' },
        { href: '#services', label: 'Services' },
        { href: '#about', label: 'About' },
        { href: '#tips', label: 'Tips' },
        { href: '#book', label: 'Book Appointment' },
        { href: '#testimonials', label: 'Testimonials' }
    ];

    return (
        <header className="bg-white shadow-md sticky top-0 z-50">
            <div className="w-full flex items-center justify-between py-4 px-4 lg:px-8">
                {/* Logo Section */}
                <div className="flex items-center space-x-2">
                    <Hospital className="w-8 h-8 text-sky-600" />
                    <span className="text-xl font-bold text-sky-600">Tarun Dental Clinic</span>
                </div>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center space-x-6 text-gray-700 font-medium">
                    {navList.map((link) => (
                        <a
                            href={link.href}
                            key={link.href}
                            className="hover:text-sky-600 transition"
                        >
                            {link.label}
                        </a>
                    ))}
                </nav>

                {/* Desktop CTA */}
                <div className="hidden md:flex items-center space-x-2">
                    <PhoneCall className="text-sky-600" />
                    <a
                        href="#"
                        className="bg-sky-600 text-white px-4 py-2 rounded-xl hover:bg-sky-700 transition text-sm"
                    >
                        Book Appointment
                    </a>
                </div>

                {/* Mobile Menu Button */}
                <div className="md:hidden">
                    <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
                        {isMenuOpen ? <X className="text-gray-600" /> : <Menu className="text-gray-700" />}
                    </button>
                </div>
            </div>

            {/* Mobile Nav */}
            {isMenuOpen && (
                <div className="md:hidden bg-white border-t border-gray-200 shadow-md px-4 py-4 space-y-3 text-gray-700 font-medium">
                    {navList.map((link) => (
                        <a
                            href={link.href}
                            key={link.href}
                            className="block hover:text-sky-600 transition"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            {link.label}
                        </a>
                    ))}
                </div>
            )}
        </header>
    );
};

export default Header;
