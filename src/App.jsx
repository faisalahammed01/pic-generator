import { Route, Routes } from "react-router";
import Root from "./layouts/Root";
import Home from "./Pages/Home";
import Generate from "./Components/Generate";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Root />}>
        <Route index element={<Home />} />
        <Route path="/generate" element={<Generate></Generate>} />
      </Route>

      <Route path="*" element={<div>404 Not Found</div>} />
    </Routes>
  );
}

export default App;
