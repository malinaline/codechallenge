import { useState } from "react";
import { Link } from "react-router-dom";
function Navigation() {
  const [category, setCategory] = useState("displaymovies"); // Initial category state

  // Filter data by category
  // const filteredData = developersData.filter((developer) => {
  //    if (category === "all") {
  //      return true; // Return all data when category is 'all'
  //   } else {
  //     return developer.category === category; // Filter data by category
  //   }
  // });

  return (
    <nav className="nav">
      <h1>
        FIND YOUR <b>MOVIES</b>
      </h1>{" "}
      <Link
        className="link"
        to="/filmlist"
        onClick={() => setCategory("displaymovies")}
      >
        ❤ All movies
      </Link>
    </nav>
  );
}

export default Navigation;
