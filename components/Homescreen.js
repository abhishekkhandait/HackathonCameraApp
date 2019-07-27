import * as React from "react";
import { StyleSheet, Image, View } from "react-native";
import {
  Avatar,
  AvatarProps,
  Button,
  Layout,
  Text
} from "react-native-ui-kitten";
import { Actions } from "react-native-router-flux";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "black"
  },
  text: {
    marginVertical: 50,
    color: "white",
    fontWeight: "400"
  },
  image: {
    flex: 1,
    height: 250,
    width: 250,
    resizeMode: "contain"
  },
  button: {
    marginBottom: 10,
    backgroundColor: "rgba(200, 85, 75, 1)",
    borderColor: "transparent"
  }
});

export default class HomeScreen extends React.Component {
  goToCamera = () => {
    Actions.camera();
  };
  render() {
    return (
      <Layout style={styles.container}>
        <Text style={styles.text} category="h4">
          Welcome to 3D Scanner
        </Text>
        <Image
          source={require("../assets/lens-512.png")}
          style={styles.image}
        />
        <Button style={styles.button} onPress={this.goToCamera}>
          START
        </Button>
      </Layout>
    );
  }
}
