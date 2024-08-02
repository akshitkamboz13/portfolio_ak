import React from 'react';

const CertificateCard = ({ title, description, link, icon }) => {
  return (
    <div>
      <div
        className="group relative cursor-pointer overflow-hidden bg-white px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl sm:mx-auto sm:max-w-sm sm:rounded-lg sm:px-10"
      >
        <span className="absolute top-10 z-0 h-20 w-20 rounded-full bg-sky-500 transition-all duration-300 group-hover:scale-[10]" />
        <div className="relative z-10 mx-auto max-w-md">
          <span className="grid h-20 w-20 place-items-center rounded-full bg-sky-500 transition-all duration-300 group-hover:bg-sky-400">
            {icon}
          </span>
          <div className="space-y-6 pt-5 text-base leading-7 text-gray-600 transition-all duration-300 group-hover:text-white/90">
            <p>{description}</p>
          </div>
          <div className="pt-5 text-base font-semibold leading-7">
            <p>
              <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sky-500 transition-all duration-300 group-hover:text-white"
              >
                Read the docs &rarr;
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CertificateCard;
