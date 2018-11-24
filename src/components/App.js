import React from 'react';
import FormCreater from './FormCreater';
import FormRenderer from './FormRenderer';

class App extends React.Component {
  state = {
    formSettings: {
      name: {
        label: 'Name:',
        property: {
          firstName: {
            label: 'Vornahme:',
            type: 'text',
            placeholder: 'Vornahme'
          },
          lastName: {
            label: 'Nachname:',
            type: 'text',
            placeholder: 'Nachname'
          }
        },
        checked: false
      },
      eMail: {
        label: 'E-Mail:',
        type: 'email',
        placeholder: 'E-Mail',
        checked: false
      },
      bankData: {
        label: 'Bank Data:',
        property: {
          iban: {
            label: 'IBAN:',
            type: 'text',
            placeholder: 'IBAN'
          },
          bic: {
            label: 'BIC:',
            type: 'text',
            placeholder: 'BIC'
          }
        },
        checked: false
      },
      address: {
        label: 'Adresse:',
        property: {
          street: {
            label: 'Strasse:',
            type: 'text',
            placeholder: 'Strasse'
          },
          postCode: {
            label: 'PLZ:',
            type: 'text',
            placeholder: 'PLZ'
          },
          city: {
            label: 'Stadt:',
            type: 'text',
            placeholder: 'Stadt'
          }
        },
        checked: false
      },
      customField: {
        label: 'Custom Field Setting:',
        checked: false,
        property: {
          test1: {
            label: 'Test1:',
            type: 'radio',
            placeholder: 'Test1'
          },
          test2: {
            label: 'Test2:',
            type: 'radio',
            placeholder: 'Test2'
          },
          test3: {
            label: 'Test3:',
            type: 'radio',
            placeholder: 'Test3'
          }
        }
      },
      customField2: {
        label: 'Custom Field Setting2:',
        checked: false,
        property: {
          test1: {
            label: 'Test1:',
            type: 'radio',
            placeholder: 'Test1'
          },
          test2: {
            label: 'Test2:',
            type: 'radio',
            placeholder: 'Test2'
          },
          test3: {
            label: 'Test3:',
            type: 'radio',
            placeholder: 'Test3'
          }
        }
      },
      customField3: {
        label: 'Custom Field Setting3:',
        checked: false,
        property: {
          test1: {
            label: 'Test1:',
            type: 'checkbox',
            placeholder: 'Test1'
          },
          test2: {
            label: 'Test2:',
            type: 'checkbox',
            placeholder: 'Test2'
          },
          test3: {
            label: 'Test3:',
            type: 'checkbox',
            placeholder: 'Test3'
          }
        }
      },
      customField4: {
        label: 'Custom Field Setting4:',
        checked: false,
        property: {
          test1: {
            label: 'Test1:',
            type: 'select',
            placeholder: 'Test1'
          },
          test2: {
            label: 'Test2:',
            type: 'select',
            placeholder: 'Test2'
          },
          test3: {
            label: 'Test3:',
            type: 'select',
            placeholder: 'Test3'
          }
        }
      }
    },
    renderView: null
  };
  updateFormSettings = (name, checked) => {
    const formSettings = { ...this.state.formSettings };
    formSettings[name].checked = checked;
    this.setState({ formSettings: formSettings });
  };
  showFormRenderer = () => {
    this.setState({ renderView: true });
    this.props.history.push(`form/form123`);
  };

  showFormCreater = () => {
    this.setState({ renderView: false });
    this.props.history.push(`/`);
  };

  render() {
    if (!this.state.renderView) {
      return (
        <FormCreater
          formSettings={this.state.formSettings}
          updateFormSettings={this.updateFormSettings}
          showFormRenderer={this.showFormRenderer}
        />
      );
    } else {
      return (
        <FormRenderer
          formSettings={this.state.formSettings}
          showFormCreater={this.showFormCreater}
        />
      );
    }
  }
}

export default App;
