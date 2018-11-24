import React from 'react';

class CustomFieldSetting extends React.Component {
  handleChange = event => {
    this.props.handleChange(event);
  };
  render() {
    return (
      <div className="form-control" key={this.props.name}>
        <label>{this.props.label}</label>
        <input
          name={this.props.name}
          type="checkbox"
          checked={this.props.checked}
          onChange={this.handleChange}
        />
      </div>
    );
  }
}

export default CustomFieldSetting;
