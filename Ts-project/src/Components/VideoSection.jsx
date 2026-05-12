function VideoSection() {
  return (
    <section className="video-section">

      <div className="video-container">

        <div className="video-box">
          <video
            autoPlay
            muted
            loop
            playsInline
            poster="https://commons.wikimedia.org/wiki/Special:FilePath/The%20Earth%20seen%20from%20Apollo%2017.jpg?width=900"
          >
            <source
              src="https://commons.wikimedia.org/wiki/Special:FilePath/Animation%20of%20Rotating%20Earth%20at%20Night.webm"
              type="video/webm"
            />
          </video>
        </div>

        <div className="video-text">

          <h2>
            How Planetary Data Helps Us
            Understand Space
          </h2>

          <p>
            This rotating planet video gives the data a visual anchor.
            Comparing mass, diameter, gravity, and density helps show
            how planets form, behave, and interact within the solar
            system.
          </p>

        </div>

      </div>

    </section>
  )
}

export default VideoSection

