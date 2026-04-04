const HeroMobile = () => {
  return (
    <div className="relative">
      <div className="w-screen h-screen top-0 left-0 fixed bg-black/40"></div>
      <video className="object-cover h-screen" autoPlay muted loop>
        <source src="/vid.mp4" type="video/mp4" />
      </video>
    </div>
  );
};

export default HeroMobile;
