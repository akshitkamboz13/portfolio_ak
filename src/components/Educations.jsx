import React from 'react';
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
    image: rbuIMG,
    location: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d50370.81755847352!2d76.60476664952671!3d30.79598956828193!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ffa9485c539a5%3A0x7e32a159650281bc!2sRayat-Bahra%20University!5e0!3m2!1sen!2sin!4v1724941051806!5m2!1sen!2sin'
  },
  {
    id: 2,
    title: 'Post Matriculation | Non-Medical',
    institution: 'Government Senior Secondary School | Garhi Birbal, Haryana',
    period: '2020-2021 | Completed',
    image: GSSSIMG,
    location: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1266.2649596374745!2d77.15596286466648!3d29.911006772930975!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390e5fce54e0fea7%3A0xa60a2ce296837dc2!2sW564%2B8RH%2C%20Garhi%20Birbal%20Rd%2C%20Kharak%2C%20Haryana%20132054!5e0!3m2!1sen!2sin!4v1724940988765!5m2!1sen!2sin'
  },
  {
    id: 3,
    title: 'Computer Application & Internet',
    institution: 'National Institute of Skill Development | Indri, Haryana',
    period: '2019-2020 | Completed',
    image: NISDIMG,
    location: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d432.4548871233336!2d77.06067535278925!3d29.87468042185499!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390e671f9e5bb163%3A0x5613d8c3cc3bd6eb!2sNational%20Paramedical%20Sciences%20Society(NPSS)!5e0!3m2!1sen!2sin!4v1724953272912!5m2!1sen!2sin'
  },
  {
    id: 4,
    title: 'Matriculation',
    institution: 'Aneja City Heart School | Indri, Haryana',
    period: '2018-2019 | Completed',
    image: ACHIMG,
    location: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3459.5089750087095!2d77.05054257996969!3d29.878431661996423!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390e6781867d20fd%3A0xa21d332eb8812bad!2sAneja%20City%20Heart%20School!5e0!3m2!1sen!2sin!4v1724940725517!5m2!1sen!2sin'
  }
];

const Education = () => {
  return (
    <section className="education w-full bg-custom-blue py-20" id="education">
      <div className="text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-8">Education</h1>
      </div>
      <div className="box-container flex flex-col items-center space-y-8 mx-4 md:mx-8">
        {educationData.map(({ id, title, institution, period, image, location }) => (
          <div key={id} className="box flex flex-col md:flex-row w-full h-50 md:h-48  md:w-4/5 bg-white rounded-lg shadow-md overflow-hidden transition-transform transform hover:scale-105">
            <div className="image flex-shrink-0 md:w-1/3 ">
              <img className="w-full h-24 md:h-48 object-cover" src={image} alt={title} />
            </div>
            <div className="content p-4 flex flex-col justify-center md:w-2/3 lg:w-1/3">
              <h3 className="text-lg md:text-xl font-semibold text-custom-blue mb-2">{title}</h3>
              <p className="text-sm md:text-md mb-2">{institution}</p>
              <h4 className="text-sm md:text-lg font-medium text-custom-blue">{period}</h4>
            </div>
            <div className="hidden lg:flex lg:w-1/3 lg:h-48">
              <iframe
                src={location}
                width={600}
                height={450}
                style={{ border: "0" }}
                loading="lazy"
                className='rounded-sm cursor-custom-grab decoration-none focus:outline-none border-none'  
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;
