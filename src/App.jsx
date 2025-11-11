import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import DownloadsPage from './components/DownloadsPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/downloads" element={<DownloadsPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

// import { BrowserRouter, Route, Routes } from "react-router-dom";
// import Home from "./pages/Home";
// import AboutUs from "./components/AboutUs";

// function App() {
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path="/" element={<Home />} />
//       </Routes>
//     </BrowserRouter>
//   );
// }

// export default App;
