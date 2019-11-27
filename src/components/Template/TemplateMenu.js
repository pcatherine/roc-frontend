import React from "react";
import { Link } from "react-router-dom";
// import Dropdown from "../Dropdown/Dropdown";
import FontAwesome from "../Icon/FontAwesome";
import Sidebar from "./Sidebar"

import "./templateMenu.css";
import "../mymm/mymm.css";

export default class Base extends React.Component {

  render() {
    const height = document.documentElement.clientHeight;
    // const width = document.documentElement.clientWidth;

    return (
      <div style={{ height: height }}  >
        <div id="header">
          <div id="header-brown"  >
            <Link to="/" >
              <img
                className="m-2 ml-4 float-left"
                id="brand"
                alt="My Model Brand"
                style={{ height: "40px" }}
                src={require("../../assets/logo-neg.png")}
              />
            </Link>

            <div className="float-right p-2">
              <div className="d-inline-block" >
                <form className="form-inline">
                  <div className="form-group">
                    <input className="form-control rounded-pill" type="text" placeholder="Pesquisar" />
                  </div>
                  <button className="btn">
                    <FontAwesome icon="search" color="#fff" size="lg" />
                  </button>
                </form>
              </div>

              <button className="btn " type="button" id="dropdownSettings" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <FontAwesome icon="cog" color="#fff" size="lg" />
              </button>
              <div className="dropdown-menu" aria-labelledby="dropdownSettings">
                <Link className="dropdown-item" to="/usuarios">
                  Usuários
                </Link>
                <Link className="dropdown-item" to="/empresa">
                  Empresa
                </Link>
                <div className="dropdown-divider"></div>
                <Link className="dropdown-item" to="/">
                  Sistema
                </Link>
              </div>

              <button className="btn p-1 d-inline-block">
                <FontAwesome icon="comment" color="#fff" size="lg" />
              </button>
              <button className="btn p-1 d-inline-block">
                <FontAwesome icon="sign-out-alt" color="#fff" size="lg" />
              </button>
            </div>
          </div>
          <div id="header-green"  >
            <div className="float-left">
              <img
                className="rounded-circle border border-white m-2"
                id="user"
                alt="User"
                style={{ height: "60px" }}
                src={require("../../assets/portrait.jpg")}
              />
            </div>

            <div className="float-left m-3 ">
              <Link to="/usuarios/new" >
                Roberto Faria
                <span className="pl-1">
                  <FontAwesome icon="pencil-alt" size="xs" />
                </span>
              </Link>
              <small className="text-white d-block">booker</small>
            </div>

            <div id="tools" className="float-right mt-3 mr-3">
              <ul className="d-flex list-inline">
                <li>
                  <p>Trabalhos</p>
                  <b>12</b>
                </li>
                <li>
                  <p>Agenda</p>
                  <b>3</b>
                </li>
                <li>
                  <p>Modelos</p>
                  <b>2</b>
                </li>
              </ul>
            </div>

          </div>
        </div>
        <Sidebar title="License Plate Recognition" >
          <Sidebar.MenuTop>
            <Link to="/" >
              <FontAwesome icon="server" size="lg" />
              <span>Home</span>
            </Link>

            <Link to="/trabalhos">
              <FontAwesome icon="camera" size="lg" />
              <span>Trabalhos</span>
            </Link>

            <Link to="/casting">
              <FontAwesome icon="inbox" size="lg" />
              <span>Casting</span>
            </Link>

            <Link to="/modelos">
              <FontAwesome icon="restroom" size="lg" />
              <span>Modelos</span>
            </Link>

            <Link to="/clientes">
              <FontAwesome icon="users" size="lg" />
              <span>Clientes</span>
            </Link>
          </Sidebar.MenuTop>
        </Sidebar>

        <div id="page-area" >
          <div className="container-fluid p-3" >
            {this.props.children}
          </div>
        </div>
      </div >
    )
  }
}