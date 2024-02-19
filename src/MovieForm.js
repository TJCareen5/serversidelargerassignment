import React, { useState } from "react";

const MovieForm = ({ onAdd }) =>{
  const [formData, setFormData] = useState({
    name: "",
    rating: "",
    releaseDate: "",
    description: "",
    actors: "",
    poster: "",
  });

  const handleChange = (e) =>{
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) =>{
    e.preventDefault();
    onAdd(formData);
    setFormData({
      name: "",
      rating: "",
      releaseDate: "",
      description: "",
      actors: "",
      poster: "",
    });
  };
  return (
    <div>
      <h2>Add New Movie</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </label>
        <label>
          Rating:
          <input
            type="text"
            name="rating"
            value={formData.rating}
            onChange={handleChange}
          />
        </label>
        <label>
          Release Date:
          <input
            type="text"
            name="releaseDate"
            value={formData.releaseDate}
            onChange={handleChange}
          />
        </label>
        <label>
          Description:
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
          />
        </label>
        <label>
          Actors:
          <input
            type="text"
            name="actors"
            value={formData.actors}
            onChange={handleChange}
          />
        </label>
        <label>
          Image:
          <input
            type="text"
            name="poster"
            value={formData.poster}
            onChange={handleChange}
          />
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default MovieForm;
