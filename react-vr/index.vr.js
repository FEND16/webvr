import React from "react";
import {
  AmbientLight,
  AppRegistry,
  asset,
  DirectionalLight,
  PointLight,
  Pano,
  Plane,
  Sphere,
  StyleSheet,
  Text,
  View,
  VrButton,
  Box,
  Image
} from "react-vr";

import MovieBox from "./components/MovieBox";
import Ground from "./components/Ground";
import Light from "./components/Light";

export default class App extends React.Component {
  
  state = {
    data: []
  }
  
  componentDidMount() {
    fetch("https://fend-api.herokuapp.com/movies?_limit=10")
      .then(res => res.json())
      .then(data => {
        this.setState({ data });
      });
  }

  onClick = () => {
  }

  render() {
    return (
      <View>
        <Pano source={asset("heaven.png")} />
        <Light />
        <Ground />
        <MovieBox
          translate={[0, 0, -80]}
          rotate="30deg"
          data={this.state.data[0]}
          onClick={this.onClick}
        />
        <MovieBox
          translate={[70, 0, -50]}
          rotate="160deg"
          data={this.state.data[1]}
          onClick={this.onClick}
        />
        <MovieBox
          translate={[80, 0, 30]}
          rotate="120deg"
          data={this.state.data[2]}
          onClick={this.onClick}
        />
        <MovieBox
          translate={[20, 0, 80]}
          rotate="150deg"
          data={this.state.data[3]}
          onClick={this.onClick}
        />
        <MovieBox
          translate={[-60, 0, 60]}
          rotate="20deg"
          data={this.state.data[4]}
          onClick={this.onClick}
        />
        <MovieBox
          translate={[-80, 0, -30]}
          rotate="40deg"
          data={this.state.data[5]}
          onClick={this.onClick}
        />
      </View>
    );
  }
}

AppRegistry.registerComponent("App", () => App);
