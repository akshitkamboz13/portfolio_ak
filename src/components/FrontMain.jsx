
import ParticleBackground from "./ParticleBackground";

const FrontMain = () => {
  return (
    <>
      <div className="relative w-full h-screen bg-transparent">
        <ParticleBackground />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center">
          <h1 className="text-4xl md:text-6xl font-bold">Hello, I'm Akshit</h1>
          <p className="text-xl md:text-2xl">I'm a Full Stack Developer</p>
        </div>
      </div>
    </>
  );
};

export default FrontMain;