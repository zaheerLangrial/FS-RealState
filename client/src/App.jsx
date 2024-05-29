import "./App.css";
import {BrowserRouter , Route , Routes} from 'react-router-dom';
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import About from "./pages/About";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/profile" element={<Profile />}/>
        <Route path="/about" element={<About />}/>
        <Route path="/sign-in" element={<SignIn />}/>
        <Route path="/Sign-up" element={<SignUp />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
