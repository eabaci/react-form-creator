import React from 'react';
import InputField from './InputField';

class InputFieldGroup extends React.Component {
  renderItem = (index, item) => {
    if (item.property) {
      return this.renderItemsProperty(item);
    } else {
      return (
        <InputField
          key={index}
          label={item.label}
          placeholder={item.placeholder}
          type={item.type}
        />
      );
    }
  };
  renderItemsProperty = item => {
    return Object.keys(item.property).map(prop => {
      return (
        <InputField
          key={prop}
          label={item.property[prop].label}
          placeholder={item.property[prop].placeholder}
          type={item.property[prop].type}
        />
      );
    });
  };
  render() {
    return (
      <div className="input-field-group">
        {this.renderItem(this.props.index, this.props.item)}
      </div>
    );
  }
}

export default InputFieldGroup;
