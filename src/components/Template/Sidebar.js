import React, { Component } from "react";

import "./sidebar.css";

class Sidebar extends Component {

  renderMenu() {
    return (
      React.Children.map(this.props.children, child => {
        if (child.type.displayName === "SidebarMenuTop") {
          return SidebarMenuTop(child);
        } else if (child.type.displayName === "SidebarMenuBottom") {
          return SidebarMenuBottom(child);
        }
        return child;
      })
    )
  }

  render() {
    return (
      <div
        ref={node => { this.node = node; }}
        id="sidebar"
        className="sidebar-menu position-fixed float-left"
      >

        {this.renderMenu()}

      </div >
    )
  }
}

const SidebarMenuTop = (item) =>
  React.Children.map(item, child =>
    <ul>
      {React.Children.map(child.props.children, (childX, indexX) =>
        <li className={`${childX.props.to ? window.location.pathname === childX.props.to ? "active" : "" : ""}`}  >
          {React.cloneElement(childX, {
            key: `menu-top${indexX}`,
          })}
        </li>
      )}
    </ul>
  )
SidebarMenuTop.displayName = "SidebarMenuTop";


const SidebarMenuBottom = (item) =>
  React.Children.map(item, child =>
    <div className="position-absolute fixed-bottom">
      <ul className="border-top">
        {React.Children.map(child.props.children, (childX, indexX) =>
          <li className={`${childX.props.to ? window.location.pathname === childX.props.to ? "active" : "" : ""}`}  >
            {React.cloneElement(childX, {
              key: `menu-bottom${indexX}`,
            })}
          </li>
        )}
      </ul>
    </div>
  )
SidebarMenuBottom.displayName = "SidebarMenuBottom";

Sidebar.MenuTop = SidebarMenuTop;
Sidebar.MenuBottom = SidebarMenuBottom;

export default Sidebar;