import React from 'react';
import InputFieldGroup from './formComponents/InputFieldGroup';

class FormRenderer extends React.Component {
  handleOnClick = event => {
    event.preventDefault();
    this.props.showFormCreater();
  };
  renderInputFieldGroup = key => {
    if (this.props.formSettings[key].checked)
      return (
        <InputFieldGroup
          key={key}
          index={key}
          item={this.props.formSettings[key]}
        />
      );
  };
  render() {
    return (
      <div>
        {Object.keys(this.props.formSettings).map(this.renderInputFieldGroup)}
        <button onClick={this.handleOnClick}>Back</button>
      </div>
    );
  }
}

export default FormRenderer;
