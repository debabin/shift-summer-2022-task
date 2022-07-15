
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import CharacterDetails from "./components/pages/CharacterDetails";
import Error from "./components/pages/Error";
import Home from "./components/pages/Home";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/error" element={<Error />}></Route>
        <Route path="/:id" element={<CharacterDetails />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
