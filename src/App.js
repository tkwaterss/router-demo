import "./App.css";
import { Routes, Route } from "react-router-dom";
import HomeScreen from "./screens/HomeScreen";
import ContactScreen from "./screens/ContactScreen";
import DetailScreen from "./screens/DetailScreen";
import Header from "./components/Header";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/contact" element={<ContactScreen />} />
        <Route path="/contact/:contactId" element={<DetailScreen />} />
      </Routes>
    </div>
  );
}

export default App;
