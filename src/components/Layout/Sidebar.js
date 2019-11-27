
import React, { Component } from "react";
import FontAwesome from "../Icon/FontAwesome";


import "./sidebar.scss";

class Sidebar extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isMenuOpen: false,
    }

    this.handleClickOutside = this.handleClickOutside.bind(this);
  }

  handleClick = () => {
    this.setState({ isMenuOpen: !this.state.isMenuOpen });
  }

  componentDidMount() {
    document.addEventListener("touchstart", this.handleClickOutside);
  }

  componentWillUnmount() {
    document.removeEventListener("touchstart", this.handleClickOutside);
  }

  handleClickOutside(event) {
    if (this.node.contains(event.target)) {
      return;
    }
    this.setState({ isMenuOpen: false });
  }

  render() {
    return (
      <div
        ref={node => { this.node = node; }}
        id="sidebar"
        className={`sidebar-menu float-left ${this.state.isMenuOpen ? "sidebar-open" : ""}`} >

        <div id="toggler" className="pl-1 pt-3">
          <button className="btn" onTouchStart={this.handleClick}>
            <FontAwesome icon="bars"  style={{ width: "40px", height: "40px" }} />
          </button>
        </div>

        <div id="application-name" className="pl-1 pt-3">
          <div className="row">
            <div className="col-10" >
              <strong>{this.props.applicationName}</strong>
            </div>
            <div className="col-2 text-right" >
              <button className="btn" onTouchStart={this.handleClick}>
                <FontAwesome icon="times" style={{ marginTop: "8px", width: "20px", height: "20px" }} />
              </button>
            </div>
          </div>

        </div>

        {React.Children.map(this.props.children, child => {
          if (child.type.displayName === "SidebarMenuTop") {
            return SidebarMenuTop(child);
          } else if (child.type.displayName === "SidebarMenuBottom") {
            return SidebarMenuBottom(child);
          }
          return child;
        })}

      </div >
    )
  }
}

const SidebarMenuTop = (item) =>
  React.Children.map(item, child =>
    <ul id="menu-top">
      {React.Children.map(child.props.children, (childX, indexX) => {
        return childX && (
          <li className={`${childX.props.to ? window.location.pathname === childX.props.to ? "active" : "" : ""}`}  >
            {React.cloneElement(childX, {
              key: `menu-top${indexX}`,
            })}
          </li>
        )
      })}
    </ul>
  )
SidebarMenuTop.displayName = "SidebarMenuTop";


const SidebarMenuBottom = (item) =>
  React.Children.map(item, child =>
    <div id="menu-bottom" className="position-absolute fixed-bottom">
      <ul>
        {React.Children.map(child.props.children, (childX, indexX) => {
          return childX && (
            <li className={`${childX.props.to ? window.location.pathname === childX.props.to ? "active" : "" : ""}`}  >
              {React.cloneElement(childX, {
                key: `menu-bottom${indexX}`,
              })}
            </li>
          );
        })}
      </ul>
    </div>
  )
SidebarMenuBottom.displayName = "SidebarMenuBottom";

Sidebar.MenuTop = SidebarMenuTop;
Sidebar.MenuBottom = SidebarMenuBottom;

export default Sidebar;