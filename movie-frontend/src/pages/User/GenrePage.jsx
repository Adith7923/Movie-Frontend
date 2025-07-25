import React, { useEffect, useState } from "react";
import axios from "axios";
import GenreCard from "../../components/cards/GenreCard"; // Adjust path if needed

const GenrePage = () => {
  const [genres, setGenres] = useState([]);

  useEffect(() => {
    const fetchGenres = async () => {
      try {
        const res = await axios.get("http://localhost:3000/api/genres");
        setGenres(res.data);
      } catch (err) {
        console.error("Failed to fetch genres:", err);
      }
    };

    fetchGenres();
  }, []);

  return (
    <div style={{ padding: "3vw", maxWidth: "1400px", margin: "0 auto" }}>
      <h2 style={{ color: "yellow", fontSize: "28px", marginBottom: "24px" }}>
        Browse by Genre
      </h2>

      <div
        style={{
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, 400px)",
    justifyContent: "center",
    gap: "40px",
  }}
      >
        {genres.length === 0 ? (
          <p style={{ color: "white" }}>Loading genres...</p>
        ) : (
          genres.map((genreObj) => (
            <GenreCard
              key={genreObj._id}
              genre={genreObj.name}
              genreId={genreObj._id}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default GenrePage;
