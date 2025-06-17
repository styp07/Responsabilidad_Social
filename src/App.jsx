import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import PlanIndex from "./pages/PlanIndex";
import PlanDetail from "./pages/PlanDetail";
import Blog from "./pages/Blog";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/plan" element={<PlanIndex />} />
      <Route path="/plan/:id" element={<PlanDetail />} />
      <Route path="/blog" element={<Blog />} />
    </Routes>
  );
};

export default App;
