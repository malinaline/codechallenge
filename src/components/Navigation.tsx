
import { Link } from "react-router-dom";
function Navigation() {
  // const [category, setCategory] = useState("displaymovies"); // Initial category state

  // Filter data by category
  // const filteredData = developersData.filter((developer) => {
  //    if (category === "all") {
  //      return true; // Return all data when category is 'all'
  //   } else {
  //     return developer.category === category; // Filter data by category
  //   }
  // });

  // använd navlinks istället för links

  return (
    <nav className="nav">
      <Link
        className="link"
        to="/"
        // onClick={() => setCategory("displaymovies")}
      >
        home|
      </Link>
      <Link
        className="link"
        to="/search"
        // onClick={() => setCategory("displaymovies")}
      >
        search
      </Link>
    </nav>
  );
}

export default Navigation;
