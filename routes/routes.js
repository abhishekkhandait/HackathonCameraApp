import React from "react";
import { Router, Scene } from "react-native-router-flux";
import HomeScreen from "../components/Homescreen";
import CameraScreen from "../components/Camera";

const Routes = () => (
  <Router>
    <Scene key="root">
      <Scene key="home" component={HomeScreen} title="Home" initial={true} />
      <Scene key="camera" component={CameraScreen} title="Camera" />
    </Scene>
  </Router>
);
export default Routes;
