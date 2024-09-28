import React from 'react'

const Map = () => {
  return (
    <div className="hidden min-h-100 md:block px-8 pb-4 md:px-16 bg-custom-blue items-center justify-center">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d33078.599064170434!2d76.60497759248581!3d30.769965736559552!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ffa9485c539a5%3A0x7e32a159650281bc!2sRayat-Bahra%20University!5e0!3m2!1sen!2sin!4v1724953583242!5m2!1sen!2sin"
        width="100%"
        height="400"
        style={{ border: 0 }}
        className='rounded-sm cursor-custom-grab decoration-none focus:outline-none border-none'  
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};
export default Map
