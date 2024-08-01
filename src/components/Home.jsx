// src/components/Home.jsx
import ParticleBackground from './ParticleBackground';
import About from './About';

const Home = () => {
  return (
    <>
      <div className="relative w-full h-screen">
      <ParticleBackground />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center">
        <h1 className="text-4xl md:text-6xl font-bold">Hello, I'm Si4k</h1>
        <p className="text-xl md:text-2xl">I'm a Full Stack Developer</p>
        </div>
        
    </div>
    </>
    
  );
};

export default Home;
