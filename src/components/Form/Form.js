import React from "react";

/**
 * Render a form with simple browser validation
 * 
 * @param {string} id Modal's id
 * @example
 * <Form 
 *  submitHandler={this.handleSubmit} 
 *  title={`${this.state.selected.id === 0 ? "Insert a new" : "Update a"} User`} 
 *  id={this.state.selected.id} 
 * >
 *  <input id="firstName" placeholder="First Name" minLength="8" maxLength="8" type="text" required="sol" value={this.state.selected.firstName} />
 *  <input id="lastName" placeholder="Last Name" required type="text" value={this.state.selected.lastName} />
 *   <select required id="age" value={this.state.selected.age || ""}>
 *    <option key="default" value="" disabled hidden>Select an item</option>
 *    <option key="1" value="10">10</option>
 *    <option key="2" value="20">20</option>
 *    <option key="3" value="30">30</option>
 *    <option key="4" value="40">40</option>
 *  </select>
 * </Form>
 * 
 * @version 1.1.0
 * @author Paolla Agard
 * @see Tables - Bootstrap <https://getbootstrap.com/docs/4.3/content/tables/>
 * @see Pagination - Bootstrap <https://getbootstrap.com/docs/4.3/components/pagination/>
 */

class Form extends React.Component {
  static defaultProps = {
    // title: "Simple Form",
    buttonSubmit: "Descobrir",
    buttonClose: "Fechar"
  }

  constructor(props) {
    super(props);
    this.state = {
      id: -1,
      isEditing: false,
      values: {},
      errors: {},
    };
  }

  static getDerivedStateFromProps = (props, state) => {
    let tmpState = {}

    if (props.id === state.id && state.isEditing) {
      tmpState = {
        ...state,
      }
    } else {

      React.Children.forEach(props.children, child => {
        if (child.type.displayName === "FormRow") {
          React.Children.forEach(child.props.children, childX => {

            tmpState = {
              values: {
                ...tmpState.values,
                [childX.props.id]: childX.props.type === "checkbox" ?
                  childX.props.checked : childX.props.value
              }
            };


          })
        } else {
          tmpState = {
            values: {
              ...tmpState.values,
              [child.props.id]: child.props.type === "checkbox" ?
                child.props.checked : child.props.value
            }
          };
        }
      });
      tmpState["errors"] = {};
    }

    tmpState["id"] = props.id ? props.id : 0;
    tmpState["isEditing"] = false;
    return tmpState;
  }

  handleInputBlur = (event) => {
    event.preventDefault();
    const name = event.target.id;
    const validationMessage = event.target.validationMessage;

    this.setState({
      isEditing: true,
      errors: {
        ...this.state.errors,
        [name]: validationMessage,
      },
    });
  }

  handleInputChange = (event) => {
    console.log();
    event.preventDefault();

    const value = event.target.type === "checkbox" ? event.target.checked : event.target.value;
    const name = event.target.id;

    this.setState({
      isEditing: true,
      values: {
        ...this.state.values,
        [name]: value,
      }
    });
  }

  handleSubmit = (event) => {
    event.preventDefault();

    if (this.props.onClickModal) {
      this.props.onClickModal(event);
    }

    this.props.submitHandler(event, Object.preventExtensions(this.state.values));
  }

  renderInput = (child) => {
    return (
      child.props.type !== "hidden" && (
        <div className="form-group" key={`div_${child.props.id}`}>

          {/* INPUT LABEL */}
          <label className="text-capitalize" key={`label_${child.props.id}`} forhtml={child.props.id}>
            {`${child.props.required ? "*" : ""} ${child.props.placeholder ? child.props.placeholder : child.props.id}`}
          </label>

          {/* INPUT */}
          {React.cloneElement(child, {
            className: `form-control ${this.state.errors && this.state.errors[child.props.id] && this.state.errors[child.props.id] !== "" ? "is-invalid" : ""}`,
            onBlur: this.handleInputBlur,
            onChange: this.handleInputChange,
            key: child.props.id,
            name: child.props.id,
            placeholder: "",
            value: this.state.values[child.props.id] || "",
          })}

          {/* ERROR */}
          <div key={`divError_${child.props.id}`} className="invalid-feedback"  >
            {this.state.errors && this.state.errors[child.props.id] && this.state.errors[child.props.id] !== "" && this.state.errors[child.props.id]}
          </div>
        </div>
      )
    )
  }

  render = () => {
    const modalOrCard = `${this.props.onClickModal ? "card" : "modal"}`;

    return (
      <div className={`${!this.props.onClickModal ? "" : ""}`} >

        {this.props.title &&
          // <div className={`${modalOrCard}-header `}>
            <h3 className={`${modalOrCard}-title`}>{this.props.title}</h3>
          // </div>
        }

        <form className="form" onSubmit={this.handleSubmit} >
          {/* <div className={`${modalOrCard}-body`}> */}
            {React.Children.map(this.props.children, (child, index) => {
              if (child.type.displayName === "FormRow") {
                return FormRow(this, child);
              } else {
                return this.renderInput(child)
              }
            })}
          {/* </div> */}

          {/* <div className={`${modalOrCard}-footer`}> */}
            {this.props.onClickModal &&
              <button type="button" onClick={this.props.onClickModal} className="btn btn-outline-secondary">{this.props.buttonClose}</button>
            }
            <button type="submit" className="btn btn-primary">{this.props.buttonSubmit}</button>
          {/* </div> */}
        </form>
      </div >
    );
  }
}

const FormRow = (_this, item) => {
  return React.Children.map(item, child => {
    return (
      <div className="form-row">
        {React.Children.map(child.props.children, childX => {
          if (childX) {
            return (
              <div className={childX.props.className}>
                {_this.renderInput(childX)}
              </div>
            );
          }
        })}
      </div>
    )
  })
}
FormRow.displayName = "FormRow";
Form.Row = FormRow;

export default Form;