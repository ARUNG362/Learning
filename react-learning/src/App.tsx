import About from "./components/About";
import Alert from "./components/Alert";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// import ListGroup from "./components/ListGroup";
function App() {
  //   const cities: string[] = [
  //     "Chennai",
  //     "Trichy",
  //     "Tanjore"
  // ];
  // return <div><Message></Message></div>
  // return <div><ListGroup items={cities} title="Cities List" onSelectItem={(item) => console.log(item)} /></div>

  return (
    <Router>
      <Routes>
      <Route path="/" element={<Alert> Hello <h1>World</h1> </Alert>} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;
