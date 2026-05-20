import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import DownloadsPage from './components/DownloadsPage';
import TermsAndConditions from "./pages/TermsAndConditions";
import PrivacyPolicy from "./pages/PrivacyPolicy";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/downloads" element={<DownloadsPage />} />
        <Route path="/terms" element={<TermsAndConditions />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
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
