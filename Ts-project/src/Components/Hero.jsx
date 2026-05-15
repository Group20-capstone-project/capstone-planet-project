function Hero() {
  return (
    <section className="hero" id="hero">

      <div className="hero-content">

        <div className="hero-text">

          

          <h1>
            Explore Our Solar
            <br />
            System Through Data
          </h1>

          <p>
            Understand the planets not just by name, but by measurable
            facts. From size and mass to gravity and density, this page
            breaks down the solar system in a clear, data-driven way.
          </p>

          <div className="hero-buttons">
            <a href="#planets" className="btn primary-btn">
              Explore the Data
            </a>

            <a href="#contact" className="btn secondary-btn">
              Contact Us
            </a>
          </div>

        </div>

        <div className="hero-image">
          <img
            src="https://www.nasa.gov/wp-content/uploads/2023/03/earthsun20170412.png"
            alt="Earth from space"
          />
        </div>

      </div>

    </section>
  )
}

export default Hero
