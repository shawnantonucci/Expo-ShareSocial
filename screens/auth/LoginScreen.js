import React from "react";
import { StyleSheet, View, Text, TextInput, Button, Alert } from "react-native";
import * as firebase from "firebase";

export default class LoginScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
  }

  onLoginPress = () => {
    firebase
      .auth()
      .signInWithEmailAndPassword(this.state.email, this.state.password)
      .then(() => {})
      .catch(error => {
        Alert.alert(error.message);
      });
  };

  onCreateAccountPress = () => {
    // const navActions = NavigationActions.reset({
    //   index: 0,
    //   actions: [NavigationActions.navigate({ routeName: "Signup" })]
    // });

    // this.props.navigation.dispatch(navActions);
    this.props.navigation.navigate("Signup");
  };

  onForgotPasswordPress = () => {
    // const navActions = NavigationActions.reset({
    //   index: 0,
    //   actions: [NavigationActions.navigate({ routeName: "ForgotPassword" })]
    // });

    // this.props.navigation.dispatch(navActions);
    this.props.navigation.navigate("ForgotPassword");
  };

  render() {
    return (
      <View style={{ paddingTop: 50, alignItems: "center" }}>
        <Text>Login</Text>

        <TextInput
          style={{ width: 200, height: 40, borderWidth: 1 }}
          value={this.state.email}
          onChangeText={text => {
            this.setState({ email: text });
          }}
          placeholder="Email"
          keyboardType="email-address"
          autoCapitalize="none"
          autoCorrect={false}
        />

        <View style={{ paddingTop: 10 }} />

        <TextInput
          style={{ width: 200, height: 40, borderWidth: 1 }}
          value={this.state.password}
          onChangeText={text => {
            this.setState({ password: text });
          }}
          placeholder="Password"
          secureTextEntry={true}
        />
        <View style={{ paddingTop: 10 }} />

        <Button title="Login" onPress={this.onLoginPress} />

        <View style={{ paddingTop: 10 }} />

        <Button title="Create Account" onPress={this.onCreateAccountPress} />

        <View style={{ paddingTop: 10 }} />

        <Button title="Forgot Password?" onPress={this.onForgotPasswordPress} />
      </View>
    );
  }
}

const styles = StyleSheet.create({});
