import React, { useState, useEffect} from "react";

function NewPlantForm({ onAddPlant }) {
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [price, setPrice] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    const plantData = {
      name: name,
      image: image,
      price: price,
    };
    fetch("http://localhost:6001/plants", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(plantData),
    })
      .then(r => {
        if(r.ok) {
          return r.json()
        } else {
          console.log("Plant failed to create")
        }
      })
      .then(newPlant => onAddPlant(newPlant))
      .catch(error => console.log(error))
  }

  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" value={name} placeholder="Plant name" onChange={(e) => setName(e.target.value)}/>
        <input type="text" name="image" value={image} placeholder="Image URL" onChange={(e) => setImage(e.target.value)}/>
        <input type="number" name="price" step="0.01" value={price} placeholder="Price" onChange={(e) => setPrice(e.target.value)}/>
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;
