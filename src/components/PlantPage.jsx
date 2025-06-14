import React, { useState, useEffect } from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {
  const [plants, setPlants] = useState([]);
  const [search, setSearch] = useState("");


  //fetches plant data on mount
  useEffect(() => {
    fetch("http://localhost:6001/plants")
      .then(r => r.json())
      .then(data => setPlants(data))
  }, [])

  const displayedPlants = plants.filter(p =>
    p.name.toLowerCase().includes(search.toLowerCase())
  );

  function handleAddPlant(newPlant) {
    setPlants([...plants, newPlant]);
  }
  return (
    <main>
      <NewPlantForm onAddPlant={handleAddPlant} />
      <Search onSearch={setSearch} />
      <PlantList plants={displayedPlants} />
    </main>
  );
}

export default PlantPage;