import * as React from "react";
import { StyleSheet } from "react-native";
import { Button, Layout, Text } from "react-native-ui-kitten";

export const SplashScreen = () => <Layout style={styles.container} />;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: rgba(255, 255, 255, 1)
  },
  text: {
    marginVertical: 16
  }
});
