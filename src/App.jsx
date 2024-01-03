import "./App.css";

import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Sidebar from "./Components/Sidebar";
import { useState } from "react";
import PostListStore from "./Post/PostListStore";
import { Outlet } from "react-router-dom";
function App() {
  const [selectedTab, setSelectedTab] = useState("Home");
  return (
    <PostListStore>
      <div className="appContainer">
        <Sidebar selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
        <div className="content">
          <Header />
          <Outlet/>

          <Footer />
        </div>
      </div>
    </PostListStore>
  );
}

export default App;
