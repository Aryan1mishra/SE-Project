import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Post from "./Pages/Post";
import Job from "./Pages/Job";
import Communities from "./Pages/Communities";
import Sidebar from "./Components/Sidebar";
import Login from "./Pages/Login";
import Sign from "./Pages/Sign";
import Main from "./Pages/Main";

function App() {
  return (
    <div className="flex">
      <Router>
        <Sidebar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/post" element={<Post type={"post"} />}></Route>
          <Route path="/job" element={<Job />}></Route>
          <Route path="/communities" element={<Communities />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/sign" element={<Sign />}></Route>
          <Route path="/home" element={<Main />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
