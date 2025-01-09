import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Hero from "./components/Hero/Hero";
import NotFound from "./components/NotFound/notFound";

function App() {
  return (
    <Router>
      <Routes>
        {/* Route for Hero */}
        <Route path="/" element={<Hero />} />

        {/* Fallback Route for 404 */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
