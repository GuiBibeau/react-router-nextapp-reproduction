import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link,
  useParams,
} from "react-router-dom";

const Home = () => <h2>Home Page</h2>;

const DummyData = ({ params }) => {
  const dummyData = {
    1: "Data for item 1",
    2: "Data for item 2",
    3: "Data for item 3",
  };
  return <h2>{dummyData[params.id] || "No data found"}</h2>;
};

const App = () => {
  return (
    <Router>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/data/1">Data 1</Link>
          </li>
          <li>
            <Link to="/data/2">Data 2</Link>
          </li>
          <li>
            <Link to="/data/3">Data 3</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/data/:id"
          element={<DummyData params={{ id: useParams().id }} />}
        />
      </Routes>
    </Router>
  );
};

export default App;
