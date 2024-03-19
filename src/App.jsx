import { Route, Routes } from "react-router-dom";
import Navigation from "./assets/components/Navigation";
import HomePage from "./assets/views/HomePage";
import NotFound from "./assets/views/NotFound";

const App = () => {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

export default App;
