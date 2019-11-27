import React from "react";
import { Link } from "react-router-dom";
import Sidebar from "./Sidebar";
import FontAwesome from "../Icon/FontAwesome";



import "./layout.css"

export default function Layout(props) {


  const height = document.documentElement.clientHeight;

  return (
    <div style={{ height: height }}  >

      <Sidebar applicationName="Renew or Cancel">

        <Sidebar.MenuTop>
          <Link to="/">
            <FontAwesome icon="home" size="lg" />
            <span>Home</span>
          </Link>
          <Link to="/introduction">
            <FontAwesome icon="play" size="lg"  />
            <span style={{ paddingLeft: "20px"}}>Introdução</span>
          </Link>
          <Link to="/motivation">
            <FontAwesome icon="shapes" size="lg" />
            <span>Motivação</span>
          </Link>
          <Link to="/results">
            <FontAwesome icon="check-circle" size="lg" />
            <span>Results</span>
          </Link>
          <Link to="/Conclusion">
            <FontAwesome icon="award" size="lg" />
            <span style={{ paddingLeft: "23px"}}>Conclusion</span>
          </Link>
        </Sidebar.MenuTop>
      </Sidebar>

      <div id="page-area">
        <div id="header" className="position-relative" >
          <div id="breadcrumb" className="float-left pl-4 mt-2 pt-1" > </div>

        </div>

        <div className="container-fluid" >
          {props.children}
        </div>
      </div>
    </div >
  );
}