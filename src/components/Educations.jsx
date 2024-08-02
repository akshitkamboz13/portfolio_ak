import React from 'react';
import { FaGraduationCap } from 'react-icons/fa';
import rbuIMG from '../assets/images/rbu.jpeg';
import GSSSIMG from '../assets/images/GSSS.jpg';
import NISDIMG from '../assets/images/NISD.png';
import ACHIMG from '../assets/images/ACHS.jpg';

const educationData = [
  {
    id: 1,
    title: 'Bachelor of Technology | Computer Engineering',
    institution: 'Rayat Bahra University | Kharar, Punjab',
    period: '2021-2025 | Pursuing',
    image: rbuIMG
  },
  {
    id: 2,
    title: 'Post Matriculation | Non-Medical',
    institution: 'Government Senior Secondary School | Garhi Birbal, Haryana',
    period: '2020-2021 | Completed',
    image: GSSSIMG
  },
  {
    id: 3,
    title: 'Computer Application & Internet',
    institution: 'National Institute of Skill Development | Indri, Haryana',
    period: '2019-2020 | Completed',
    image: NISDIMG
  },
  {
    id: 4,
    title: 'Matriculation',
    institution: 'Aneja City Heart School | Indri, Haryana',
    period: '2018-2019 | Completed',
    image: ACHIMG
  }
];

const Education = () => {
  return (
    <section className="education w-full bg-custom-blue py-20" id="education">
      <div className="text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-8">Education</h1>
      </div>
      <div className="box-container flex flex-col items-center space-y-8 mx-4 md:mx-8">
        {educationData.map(({ id, title, institution, period, image }) => (
          <div key={id} className="box flex flex-col md:flex-row w-full md:w-4/5 bg-white rounded-lg shadow-md overflow-hidden transition-transform transform hover:scale-105">
            <div className="image flex-shrink-0 md:w-1/3">
              <img className="w-full h-48 md:h-40 object-cover" src={image} alt={title} />
            </div>
            <div className="content p-4 flex flex-col justify-center md:w-2/3">
              <h3 className="text-lg md:text-xl font-semibold text-custom-blue mb-2">{title}</h3>
              <p className="text-sm md:text-md mb-2">{institution}</p>
              <h4 className="text-sm md:text-lg font-medium text-custom-blue">{period}</h4>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;
