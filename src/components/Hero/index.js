function Hero() {
  return (
    <section className="hero h-screen mb-10">
      <div className="mx-auto h-screen grid content-center">
        <h1 className="text-white justify-self-center">
          The world's greatest fake site
        </h1>
        <p className="text-white justify-self-center max-w-lg text-center">
          Create the world's greatest fake site and enjoy the breeze of fresh
          air when you complete it
        </p>
        <button
          className="
        bg-reddish text-white hover:bg-red-800 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800 mt-6 max-w-lg justify-self-center"
        >
          Do something awesome
        </button>
      </div>
      <style jsx>{`
        .hero {
          background-image: url("/img/hero-image.png");
          background-repeat: no-repeat;
          background-size: cover;
        }
      `}</style>
    </section>
  );
}

export default Hero;
