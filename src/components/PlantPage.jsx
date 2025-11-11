import React, { useState, useEffect } from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {
  const [plants, setPlants] = useState([]);
  const [query, setQuery] = useState("");

  function fetchPlants() {
    fetch("http://localhost:6001/plants")
      .then(r => {
        if(r.ok) {
          return r.json()
        } else {
          console.log("fetch request failed")
        }
      })
      .then(data => setPlants(data))
      .catch(error => console.log(error));
  }

  const filteredPlants = plants.filter((plant) =>
    plant.name && plant.name.toLowerCase().includes(query.toLowerCase())
  );

  function handleAddPlant(newPlant) {
    setPlants([...plants, newPlant]);
  }

  useEffect(fetchPlants, []);

  return (
    <main>
      <NewPlantForm onAddPlant={handleAddPlant}/>
      <Search value={query} onQueryChange={setQuery}/>
      <PlantList plants={filteredPlants}/>
    </main>
  );
}

export default PlantPage;
