function PlanetCard({ planet }) {
  const handleImageError = (event) => {
    event.currentTarget.src = planet.fallbackImage
  }

  return (
    <figure className="planet-card">

      <img
        src={planet.image}
        alt={planet.planet}
        loading="lazy"
        onError={handleImageError}
      />

      <figcaption className="planet-info">

        <h3>{planet.planet}</h3>

        <p>
          {planet.distanceFromSun} million km
        </p>

      </figcaption>

    </figure>
  )
}

export default PlanetCard
