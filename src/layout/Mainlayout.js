import React from "react";
import "./Mainlayout.css";
import Sidebar from "../components/Sidebar";
import Importcourse from "../Importcourse";
import Content from "../components/Content";

function Mainlayout() {
  return (
    <section id="main-layout">
      <div className="side">
        <Sidebar></Sidebar>
      </div>
      <Importcourse></Importcourse>
      <div className="content">
        <Content></Content>
      </div>
    </section>
  );
}

export default Mainlayout;
