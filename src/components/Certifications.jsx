import React from 'react';
import { FaCertificate } from 'react-icons/fa'; 
import CertificateCard from './helperComponents/CertificateCard';

const certificateData = [
  {
    id: 1,
    title: 'The Origins III: JavaScript',
    description: 'A full-stack web development course that covers HTML, CSS, JavaScript, Node.js, and MongoDB.',
    link: '',
    icon: <FaCertificate className="h-10 w-10 text-white" />
  },
  {
    id: 2,
    title: 'JavaScript Algorithms and Data Structures',
    description: 'Perfect for learning JavaScript algorithms and data structures through practical exercises.',
    link: 'https://www.freecodecamp.org/certification/username/javascript-algorithms-and-data-structures',
    icon: <FaCertificate className="h-10 w-10 text-white" />
  },
  {
    id: 1,
    title: 'The Origins III: JavaScript',
    description: 'A full-stack web development course that covers HTML, CSS, JavaScript, Node.js, and MongoDB.',
    link: '',
    icon: <FaCertificate className="h-10 w-10 text-white" />
  },
  {
    id: 2,
    title: 'JavaScript Algorithms and Data Structures',
    description: 'Perfect for learning JavaScript algorithms and data structures through practical exercises.',
    link: 'https://www.freecodecamp.org/certification/username/javascript-algorithms-and-data-structures',
    icon: <FaCertificate className="h-10 w-10 text-white" />
  },
  {
    id: 1,
    title: 'The Origins III: JavaScript',
    description: 'A full-stack web development course that covers HTML, CSS, JavaScript, Node.js, and MongoDB.',
    link: '',
    icon: <FaCertificate className="h-10 w-10 text-white" />
  },
  {
    id: 2,
    title: 'JavaScript Algorithms and Data Structures',
    description: 'Perfect for learning JavaScript algorithms and data structures through practical exercises.',
    link: 'https://www.freecodecamp.org/certification/username/javascript-algorithms-and-data-structures',
    icon: <FaCertificate className="h-10 w-10 text-white" />
  }
];

const Certificates = () => {
  return (
    <section className="certificates w-full h-full bg-custom-blue py-16" id="certificates">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Certificates</h1>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4 md:px-8">
        {certificateData.map(({ id, title, description, link, icon }) => (
          <CertificateCard
            key={id}
            title={title}
            description={description}
            link={link}
            icon={icon}
          />
        ))}
      </div>
    </section>
  );
};

export default Certificates;
