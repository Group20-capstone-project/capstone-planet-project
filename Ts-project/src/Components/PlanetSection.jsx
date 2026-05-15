import { useEffect, useState } from "react"
import { fetchPlanets } from "../services/api"
import PlanetCard from "./PlanetCard.jsx"

function PlanetSection() {
  const [planets, setPlanets] = useState([])

  useEffect(() => {
    fetchPlanets().then(setPlanets)
  }, [])

  return (
    <section id="planets" className="planet-section">
      <div className="planet-header">
        <span>Solar System Gallery</span>
        <h2>Visualizing the Differences Between Planets</h2>
        <p>
          Each card is loaded from fetched data and shows the planet name,
          distance from the sun, and a matching image.
        </p>
      </div>

      <div className="planet-grid">
        {planets.map((planet, index) => (
          <PlanetCard key={index} planet={planet} />
        ))}
      </div>
    </section>
  )
}

export default PlanetSection
