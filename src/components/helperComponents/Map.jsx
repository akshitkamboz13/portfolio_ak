import React from 'react'

const Map = () => {
  return (
    <div className="hidden min-h-100 md:block px-8 pb-4 md:px-16 bg-custom-blue flex items-center justify-center">
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d4530.301691770135!2d77.09465393505694!3d29.877053367422715!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1722625374285!5m2!1sen!2sin"
      width="100%"
      height="400"
      style={{ border: 0 }}
      allowFullScreen="True"
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    ></iframe>
  
    </div>
  )
}

export default Map
