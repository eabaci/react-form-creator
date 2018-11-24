import React from 'react';

class InputField extends React.Component {
  render() {
    return (
      <div className="input-field">
        <label>{this.props.label}</label>
        <input type={this.props.type} placeholder={this.props.placeholder} />
      </div>
    );
  }
}

export default InputField;
