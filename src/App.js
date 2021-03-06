import "./App.css";
import "./colours.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import PageTop from "./components/utility/PageTop/PageTop";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

//pages
import Home from "./pages/Home";
import Events from "./pages/Events";
import EventsOld from "./pages/EventsOld";
import Event from "./pages/Event";
import Venues from "./pages/Venues";
import VenuesAll from "./pages/VenuesAll";
import Venue from "./pages/Venue";
import News from "./pages/News";
import NewsItem from "./pages/NewsItem";
const queryClient = new QueryClient();
function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <PageTop />
        <Header />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/events" element={<Events />}></Route>
          <Route path="/events/old" element={<EventsOld />}></Route>
          <Route path="/events/:id" element={<Event />}></Route>
          <Route path="/news" element={<News />}></Route>
          <Route path="/news/:id" element={<NewsItem />}></Route>
          <Route path="/venues" element={<Venues />}></Route>
          <Route path="/venues/all" element={<VenuesAll />}></Route>
          <Route path="/venues/:id" element={<Venue />}></Route>
        </Routes>
        <Footer />
      </Router>
    </QueryClientProvider>
  );
}

export default App;
