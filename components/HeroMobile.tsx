const HeroMobile = () => {
  return (
    <div className="relative">
      <div className="w-screen h-screen top-0 left-0 fixed bg-linear-to-b from-black/20 via-black/50 to-black/90"></div>
      <video
        className="object-cover h-screen"
        autoPlay
        muted
        loop
        playsInline
        controls={false}
      >
        <source src="/vid.mp4" type="video/mp4" />
      </video>
    </div>
  );
};

export default HeroMobile;
