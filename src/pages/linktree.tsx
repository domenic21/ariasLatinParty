import React from 'react';

export default function Linktree() {
    const links = [
        { label: 'Instagram', url: 'https://www.instagram.com/edisonarias9/', bgColor: 'bg-black', textColor: 'text-white' },
        { label: 'YouTube', url: 'https://www.youtube.com/@DJEdisonArias', bgColor: 'bg-red-600', textColor: 'text-white' },
        { label: 'Contactame en Whatsapp!', url: 'https://wa.me/12018987592', bgColor: 'bg-green-500', textColor: 'text-white' },
    ];

    return (
        <div className="flex items-center justify-center min-h-screen bg-black">
            <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-md">
                <div className="text-center">
                    <img
                        src="/dj.jpg"
                        alt="Profile Picture"
                        className="w-36 h-36 rounded-full mx-auto mb-4"
                    />
                    <h1 className="text-3xl font-bold mb-2 text-gray-800">Arias Latin Party - DJ Edison Arias</h1>
                    <p className="text-lg text-gray-600 mb-6">Welcome to my Linktree! Check out my links below:</p>
                    <div className="flex flex-col gap-4">
                        {links.map((link, index) => (
                            <a
                                key={index}
                                href={link.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`px-6 py-3 rounded-lg text-center text-lg font-medium transition-all duration-300 ${link.bgColor} ${link.textColor} hover:opacity-80`}
                            >
                                {link.label}
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};