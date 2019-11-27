import React from "react";
import PropTypes from "prop-types";

import "./customModal.css";

/**
 * Render a modal
 * 
 * @param {string} id Modal's id
 * @param {any} children Children
 * @param {boolean} [noClick] Disable the mouse clicks outside window (modal will not close)
 * @param {boolean} [noEsc] Disable the keyboard ESC (modal will not close)
 * 
 * @example
 *  <button className="btn btn-default" onClick={CustomModal.open("custom-modal-1")}>Open Modal 2</button>
 * 
 *  <CustomModal id="custom-modal-1">
 *    <div className="box-header with-border">
 *      <h4 className="box-title">Default Modal</h4>
 *    </div>
 *    <div className="modal-body">
 *      <p>One fine body…</p>
 *    </div>
 *    <div className="modal-footer">
 *      <button type="button" onClick={CustomModal.close("custom-modal-1")} className="btn btn-default pull-left">Close</button>
 *      <button type="button" className="btn btn-primary">Save changes</button> 
 *    </div>
 *  </CustomModal> 
 * 
 * @version 1.0.0
 * @author Paolla Agard
 * @see Modal - Bootstrap <https://getbootstrap.com/docs/4.3/components/modal/>
 */

export default class CustomModal extends React.Component {
  static propTypes = {
    id: PropTypes.string.isRequired,
    children: PropTypes.any.isRequired,

    noClick: PropTypes.bool,
    noEsc: PropTypes.bool
  }

  static modals = [];

  constructor(props) {
    super(props);

    this.state = {
      isOpen: false,
    };

    this.handleClick = this.handleClick.bind(this);
  }

  // Open modal specified by id 
  static open = (id) => (event) => {
    event.preventDefault();

    let modal = CustomModal.modals.find(x => x.props.id === id);
    modal.setState({ isOpen: true });
    document.body.classList.add("modal-open");
  }

  // Close modal specified by id
  static close = (id) => (event) => {
    event.preventDefault();

    let modal = CustomModal.modals.find(x => x.props.id === id);

    modal.setState({ isOpen: false });
    document.body.classList.remove("modal-open");
  }

  escFunction(event) {
    if (event.keyCode === 27) {
      CustomModal.close(CustomModal.modals[CustomModal.modals.length - 1].props.id)(event);
    }
  }

  handleClick(event) {
    if (event.target.className === "custom-modal") {
      CustomModal.close(this.props.id)(event);
    }
  }

  componentDidMount() {
    // move element to bottom of page (just before </body>) so it can be displayed above everything else
    document.body.appendChild(this.element);

    // add this modal instance to the modal service so it's accessible from other components
    CustomModal.modals.push(this);

    document.addEventListener("keydown", this.escFunction, false);

    if (this.props.noEsc === true) {
      document.removeEventListener("keydown", this.escFunction, false);
    }
  }

  componentWillUnmount() {
    // remove this modal instance from modal service
    CustomModal.modals = CustomModal.modals.filter(x => x.props.id !== this.props.id);
    this.element.remove();

    document.removeEventListener("keydown", this.escFunction, false);
  }

  render() {
    return (
      <div style={{ display: + this.state.isOpen ? "" : "none" }} onClick={this.handleClick} ref={el => this.element = el}
        data-keyboard="false" data-backdrop="static">
        <div className="custom-modal" style={{ pointerEvents: this.props.noClick ? "none" : "" }}>
          <div className="modal-dialog modal-lg">
            <div className="modal-content ">
              {this.props.children}
            </div>
          </div>
        </div>
        <div className="modal-background"></div>
      </div>
    );
  }
}