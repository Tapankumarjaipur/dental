import { useState } from 'react';
import { FaShieldAlt, FaSmile, FaTooth } from 'react-icons/fa';
import { GiToothbrush, GiWaterDrop } from 'react-icons/gi';

const Tips = () => {
    const [activeTip, setActiveTip] = useState(0);

    const tips = [
        {
            title: 'Proper Brushing Technique',
            content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque justo vitae quasi, quidem repellat.',
            icon: <GiToothbrush className="w-10 h-10 text-sky-500"/>
        },
        {
            title: 'Cavity Prevention',
            content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque justo vitae quasi, quidem repellat.',
            icon: <FaTooth className="w-10 h-10 text-blue-500"/>
        },
        {
            title: 'Gum Care',
            content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque justo vitae quasi, quidem repellat.',
            icon: <GiWaterDrop className="w-10 h-10 text-pink-500"/>
        },
        {
            title: 'Tooth Protection',
            content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque justo vitae quasi, quidem repellat.',
            icon: <FaShieldAlt className="w-10 h-10 text-amber-500"/>
        },
        {
            title: 'Regular Check-Ups',
            content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque justo vitae quasi, quidem repellat.',
            icon: <FaSmile className="w-10 h-10 text-emerald-500"/>
        },
    ];

    return (
        
        <section id='tips' className='scroll-mt-20 max-w-6xl mx-auto px-4 py-12 bg-gray-50'>
            <div className='text-center mb-12'>
                <h2 className='text-3xl md:text-4xl font-bold text-gray-800 mb-3'>Dental Care Tips</h2>
                <p className='text-lg text-gray-600 max-w-2xl mx-auto'>
                    Lorem ipsum dolor sit amet. Libero veritatis facilis esse molestias consectetur, maxime tempora
                </p>
            </div>
            
            {/* Carousel in one line with 5 items - LARGER SIZE */}
            <div className='flex flex-wrap justify-center gap-3 mb-8'>
                {tips.map((tip, index) => (
                    <button
                        key={index}
                        onClick={() => setActiveTip(index)}
                        className={`p-4 rounded-xl transition-all duration-200 flex flex-col items-center min-w-[180px] ${
                            activeTip === index 
                            ? 'bg-green-50 shadow-lg border-b-4 border-sky-400' 
                            : 'bg-green-100 border border-gray-200'
                        }`}
                    >
                        <div className='mb-2'>{tip.icon}</div>
                        <span className='font-medium text-gray-800 text-sm text-center'>{tip.title}</span>
                    </button>
                ))}
            </div>

            <div className="bg-gradient-to-b from-sky-50 to-blue-100 rounded-2xl p-8 shadow-md">
                <div className="flex flex-col md:flex-row items-center gap-6">
                    <div className="flex-shrink-0 bg-white p-6 rounded-xl shadow-md">
                        {tips[activeTip].icon}
                    </div>
                    <div>
                        <h3 className="text-2xl font-bold text-gray-800 mb-3">{tips[activeTip].title}</h3>
                        <p className="text-gray-800 text-lg leading-relaxed">{tips[activeTip].content}</p>
                    </div>
                </div>
            </div>

            <div className="mt-8 flex justify-center">
                <div className="flex space-x-2">
                    {tips.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setActiveTip(index)}
                            className={`w-3 h-3 rounded-full transition-all ${
                                activeTip === index
                                ? 'bg-sky-500 w-6'
                                : 'bg-gray-300'
                            }`}
                            aria-label={`Go to tip ${index + 1}`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Tips;