import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
//pages
import Home from "./pages/Home";
import Events from "./pages/Events";
import Event from "./pages/Event";
import Venues from "./pages/Venues";
import Venue from "./pages/Venue";
import News from "./pages/News";
import NewsItem from "./pages/NewsItem";

function App() {
  <Router>
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/events" element={<Events />}></Route>
      <Route path="/events/:id" element={<Event />}></Route>
      <Route path="/news" element={<News />}></Route>
      <Route path="/news/:id" element={<NewsItem />}></Route>
      <Route path="/venues" element={<Venues />}></Route>
      <Route path="/venues/:id" element={<Venue />}></Route>
    </Routes>
  </Router>;
}

export default App;
