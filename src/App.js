import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

// Interne (components)
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

// Pages
import Home from "./pages/Home/Home";
import Rules from "./pages/Rules/Rules";
import About from "./pages/About/About";
import Boutique from "./pages/Boutique/Boutique";
import TopServer from "./pages/TopServer/TopServer";
import NotFound from "./pages/NotFound/NotFound";
import Gallery from "./pages/Gallery/Gallery";
import Login from './pages/Login/Login';
import Dashboard from './pages/Admin/Dashboard/Dashboard';
import DashImages from "./pages/Admin/Images/DashImages";
import DashUsers from "./pages/Admin/Users/DashUsers";

function App() {
  return (
    <Router>
        <Navbar/>
        <header className="minHeight">
          <Routes>
            <Route exact path="*" element={<NotFound/>} />
            <Route exact path="/" element={<Home/>}/>
            <Route exact path="/rules" element={<Rules/>}/>
            <Route exact path="/shop" element={<Boutique/>}/>
            <Route exact path="/top-server" element={<TopServer/>}/>
            <Route exact path="/gallery" element={<Gallery/>}/>
            <Route exact path="/about" element={<About/>}/>
            <Route exact path="/login" element={<Login/>}/>
            <Route exact path="/dashboard" element={<Dashboard/>}/>
            <Route exact path="/dashboard/images" element={<DashImages/>}/>
            <Route exact path="/dashboard/users" element={<DashUsers/>}/>
          </Routes>
        </header>
        <Footer/>
      </Router>
  );
}

export default App;
