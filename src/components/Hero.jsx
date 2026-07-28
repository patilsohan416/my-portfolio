import React, { useRef, useState, useEffect } from "react";

const Hero = () => {
  const videoRef = useRef(null);

  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [videoError, setVideoError] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Try to autoplay WITH sound first.
    video.muted = false;
    video.play().catch(() => {
      // Browser blocked unmuted autoplay — fall back to muted autoplay.
      video.muted = true;
      setIsMuted(true);
      video.play().catch((err) => {
        console.error("Autoplay was blocked entirely:", err);
      });
    });
  }, []);

  const toggleVideo = async () => {
    const video = videoRef.current;

    if (!video) return;

    try {
      if (video.paused) {
        await video.play();
      } else {
        video.pause();
      }
    } catch (error) {
      console.error("Unable to play the video:", error);
    }
  };

  const toggleMute = () => {
    const video = videoRef.current;

    if (!video) return;

    video.muted = !video.muted;
    setIsMuted(video.muted);
  };

  const scrollToProjects = () => {
    const projectsSection = document.getElementById("projects");

    if (projectsSection) {
      projectsSection.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  const scrollToContact = () => {
    const contactSection = document.getElementById("contact");

    if (contactSection) {
      contactSection.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  const handleVideoError = (event) => {
    console.error(
      "Video failed to load. Check the file path:",
      event.currentTarget.currentSrc
    );
    setVideoError(true);
  };

  return (
    <section
      id="home"
      className="relative flex min-h-screen w-full items-center overflow-hidden bg-black"
    >
      {/* Background Video */}
      {!videoError ? (
        <video
          ref={videoRef}
          loop
          playsInline
          preload="auto"
          onPlay={() => setIsPlaying(true)}
          onPause={() => setIsPlaying(false)}
          onError={handleVideoError}
          className="absolute inset-0 z-0 h-full w-full object-cover"
          aria-label="Portfolio introduction video"
        >
          <source src="/hero-video/hero-video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      ) : (
        // Fallback background if the video fails to load
        <div className="absolute inset-0 z-0 h-full w-full bg-gradient-to-br from-gray-900 via-black to-gray-800" />
      )}

      {/* Dark overlay */}
      <div className="absolute inset-0 z-10 bg-black/50" />

      {/* Hero content */}
      <div className="relative z-20 mx-auto flex min-h-screen w-full max-w-7xl flex-col justify-end px-6 pb-24 pt-28 md:flex-row md:items-end md:justify-between md:px-12 md:pb-20">
        {/* Left content */}
        <div className="max-w-2xl">
          <p className="mb-4 animate-pulse text-sm font-semibold uppercase tracking-[0.3em] text-red-400">
            Welcome to my portfolio
          </p>

          <h1 className="mb-5 text-4xl font-bold leading-tight text-white sm:text-5xl md:text-7xl">
            Hi, I&apos;m a
            <br />
            <span className="text-red-400">Full Stack Developer</span>
          </h1>

          <p className="mb-8 max-w-xl text-base font-medium leading-relaxed text-gray-200 md:text-xl">
            I build fast, scalable, and modern web applications using
            React, Node.js, Express.js, MongoDB, and Tailwind CSS.
          </p>

          {/* Hero buttons */}
          <div className="flex flex-wrap items-center gap-4">
            <button
              type="button"
              onClick={scrollToProjects}
              className="rounded-full bg-white px-6 py-3 text-sm font-bold text-black shadow-lg transition duration-300 hover:scale-105 hover:bg-gray-200 md:px-8 md:text-base"
            >
              View My Work
            </button>

            <button
              type="button"
              onClick={scrollToContact}
              className="rounded-full border border-white/70 bg-black/30 px-6 py-3 text-sm font-bold text-white backdrop-blur-md transition duration-300 hover:scale-105 hover:bg-white hover:text-black md:px-8 md:text-base"
            >
              Contact Me
            </button>
          </div>
        </div>

        {/* Play/Pause + Mute/Unmute buttons */}
        {!videoError && (
          <div className="mt-12 flex items-center gap-4 self-end md:mt-0">
            {/* Mute / Unmute */}
            <button
              type="button"
              onClick={toggleMute}
              className="group flex cursor-pointer flex-col items-center gap-3"
              aria-label={isMuted ? "Unmute video" : "Mute video"}
            >
              <div className="flex h-16 w-16 items-center justify-center rounded-full border border-white/40 bg-black/30 backdrop-blur-md transition duration-300 group-hover:scale-110 group-hover:bg-red-500 md:h-20 md:w-20">
                {isMuted ? (
                  <svg
                    className="h-7 w-7 text-white"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M16.5 12c0-1.77-1.02-3.29-2.5-4.03v2.21l2.45 2.45c.03-.2.05-.41.05-.63zm2.5 0c0 .94-.2 1.82-.54 2.64l1.51 1.51C20.63 14.91 21 13.5 21 12c0-4.28-2.99-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71zM4.27 3L3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25c-.67.52-1.42.93-2.25 1.18v2.06a8.94 8.94 0 0 0 3.69-1.81L19.73 21 21 19.73l-9-9L4.27 3zM12 4L9.91 6.09 12 8.18V4z" />
                  </svg>
                ) : (
                  <svg
                    className="h-7 w-7 text-white"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z" />
                  </svg>
                )}
              </div>

              <span className="text-xs font-bold uppercase tracking-[0.2em] text-white">
                {isMuted ? "Unmute" : "Mute"}
              </span>
            </button>

            {/* Play / Pause */}
            <button
              type="button"
              onClick={toggleVideo}
              className="group flex cursor-pointer flex-col items-center gap-3"
              aria-label={isPlaying ? "Pause video" : "Play video"}
            >
              <div className="flex h-16 w-16 items-center justify-center rounded-full border border-white/40 bg-black/30 backdrop-blur-md transition duration-300 group-hover:scale-110 group-hover:bg-red-500 md:h-20 md:w-20">
                {isPlaying ? (
                  <svg
                    className="h-7 w-7 text-white"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
                  </svg>
                ) : (
                  <svg
                    className="ml-1 h-7 w-7 text-white"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M8 5v14l11-7z" />
                  </svg>
                )}
              </div>

              <span className="text-xs font-bold uppercase tracking-[0.2em] text-white">
                {isPlaying ? "Pause" : "Play Reel"}
              </span>
            </button>
          </div>
        )}
      </div>

      {/* Scroll arrow */}
      <div className="pointer-events-none absolute bottom-6 left-1/2 z-20 hidden -translate-x-1/2 md:block">
        <div className="animate-bounce">
          <svg
            className="h-7 w-7 text-white"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2.5"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path d="M19 14l-7 7m0 0-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </section>
  );
};

export default Hero;
