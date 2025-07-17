import React from "react";

const VideoEmbed = () => {
  return (
    <div className=" relative py-16 bg-white ScrollEffect">
      {/* Shadow layer */}
      <div className="absolute inset-x-0 top-6 flex justify-center pointer-events-none z-0">
        <div className="w-full max-w-6xl h-full rounded-3xl bg-[#170033] shadow-inner" />
      </div>

      {/* Main CTA Box with responsive video */}
      <div className="relative z-10 mx-auto w-full max-w-4xl aspect-video bg-[#1233C1] text-white rounded-3xl border-[3px] border-black shadow-[10px_10px_0_0_#b3c0f8] overflow-hidden">
        <iframe
          className="w-full h-full"
          src="https://www.youtube-nocookie.com/embed/A3rCrTbOh2I?color=white&modestbranding=1&rel=0"
          title="Connected Workforce"
          frameBorder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>

     
    </div>
  );
}

export default VideoEmbed;