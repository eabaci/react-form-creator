import React from 'react';
import SettingField from './formComponents/SettingField';

class FormCreater extends React.Component {
  showFormRenderer = event => {
    event.preventDefault();
    this.props.showFormRenderer();
  };

  handleChange = event => {
    const name = event.currentTarget.name;
    const checked = event.currentTarget.checked;
    this.props.updateFormSettings(name, checked);
  };

  renderSettings = setting => {
    var formSetting = this.props.formSettings[setting];
    return (
      <SettingField
        key={setting}
        name={setting}
        label={formSetting.label}
        checked={formSetting.checked}
        handleChange={this.handleChange}
      />
    );
  };

  render() {
    return (
      <form onSubmit={this.showFormRenderer}>
        <h2>Create React Form</h2>
        {Object.keys(this.props.formSettings).map(this.renderSettings)}
        <button type="submit">Submit</button>
      </form>
    );
  }
}

export default FormCreater;
