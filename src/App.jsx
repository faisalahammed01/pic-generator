import { Route, Routes } from "react-router";
import Root from "./layouts/Root";
import Home from "./Pages/Home";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Root />}>
        <Route index element={<Home />} />
      </Route>

      <Route path="*" element={<div>404 Not Found</div>} />
    </Routes>
  );
}

export default App;
