
import React from 'react';

const ContactSection = () => {
  return (
    
    <div className="max-w-7xl mx-auto p-6 bg-white">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
        
        {/* Left Side: Map Container */}
        <div className="w-full h-[400px] md:h-[500px] rounded-lg overflow-hidden shadow-md border border-gray-200">
          <iframe
            title="Google Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3323.0123456789!2d-7.5312345!3d33.6012345!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xda7d2f2cf113837f%3A0xbbf7c74fbc11b2d9!2sLionsGeek!5e0!3m2!1sen!2sma!4v1234567890"
            className="w-full h-full border-0"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

        {/* Right Side: Contact Form */}
        <div className="flex flex-col space-y-6">
          <h2 className="text-3xl font-light text-gray-800 tracking-wide">
            Send us your message
          </h2>
          
          <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
            <div>
              <input
                type="text"
                placeholder="Name"
                className="w-full p-4 border border-gray-200 rounded-sm focus:outline-none focus:border-gray-400 transition-colors"
              />
            </div>
            
            <div>
              <input
                type="email"
                placeholder="Email"
                className="w-full p-4 border border-gray-200 rounded-sm focus:outline-none focus:border-gray-400 transition-colors"
              />
            </div>
            
            <div>
              <input
                type="tel"
                placeholder="Phone"
                className="w-full p-4 border border-gray-200 rounded-sm focus:outline-none focus:border-gray-400 transition-colors"
              />
            </div>
            
            <div>
              <textarea
                placeholder="Message"
                rows="6"
                className="w-full p-4 border border-gray-200 rounded-sm focus:outline-none focus:border-gray-400 transition-colors resize-none"
              ></textarea>
            </div>

            <div className="flex justify-start">
              <button
                type="submit"
                className="bg-[#222] text-white px-12 py-3 rounded-full text-lg font-medium hover:bg-black transition-all uppercase tracking-widest shadow-lg"
              >
                Send
              </button>
            </div>
          </form>
        </div>

     </div>
    </div>
  );
};

export default ContactSection;