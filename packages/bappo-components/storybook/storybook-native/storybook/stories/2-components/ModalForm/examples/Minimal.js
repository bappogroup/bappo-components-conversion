import React from 'react';
import {
  Alert,
  Button,
  Form,
  ModalForm,
  TextField,
  View,
} from 'bappo-components';

class ModalFormMinimalExample extends React.Component {
  state = {
    modalVisible: false,
  };

  render() {
    return (
      <View>
        <Button
          onPress={() => this.setState({ modalVisible: true })}
          text="Open form"
        />
        <ModalForm
          onRequestClose={() => this.setState({ modalVisible: false })}
          onSubmit={values =>
            Alert.alert({ message: JSON.stringify(values, null, 2) })
          }
          title="Modal Form Minimal Example"
          visible={this.state.modalVisible}
          testID="modalForm-minimal"
        >
          <Form.Field
            name="firstName"
            component={TextField}
            label="First Name"
          />
          <Form.Field name="lastName" component={TextField} label="Last Name" />
        </ModalForm>
      </View>
    );
  }
}

export default ModalFormMinimalExample;
