"use client"
import { useEffect, useRef } from "react";

const HeroMobile = () => {
  const videoRef: any = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      // iOS specifically looks for defaultMuted on the DOM element
      videoRef.current.defaultMuted = true;
      videoRef.current.muted = true;

      // Manually trigger play to bypass iOS hydration quirks
      videoRef.current.play().catch((error: any) => {
        console.warn("Autoplay prevented by browser:", error);
      });
    }
  }, []);

  return (
    <div className="relative">
      {/* Added pointer-events-none so the overlay doesn't block interactions if needed later */}
      <div className="w-screen h-screen top-0 left-0 fixed bg-linear-to-b from-black/20 via-black/50 to-black/90 pointer-events-none"></div>

      <video
        ref={videoRef}
        className="object-cover w-full h-screen"
        autoPlay
        muted
        loop
        playsInline
        disablePictureInPicture // Prevents iOS from adding PiP controls
        controls={false}
      >
        <source src="/vid.mp4" type="video/mp4" />
      </video>
    </div>
  );
};

export default HeroMobile;
