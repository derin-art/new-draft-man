const HeroMobile = () => {
  return (
    <div>
      <video className="object-cover h-screen" autoPlay muted loop>
        <source src="/vid.mp4" type="video/mp4" />
      </video>
    </div>
  );
};

export default HeroMobile;
