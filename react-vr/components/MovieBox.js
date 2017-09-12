import React, { Component } from "react";
import { VrButton, Box, View, Text } from "react-vr";

export default class MovieBox extends Component {
  render() {
    const styles = {
      color: "#fff",
      transform: [
          {
              translate: this.props.translate
          },
          {
              rotateY: this.props.rotate
          }
      ]
    };
    return (
      <VrButton onClick={() => this.props.onClick()}>
        <Box
          dimWidth={40}
          dimHeight={60}
          dimDepth={30}
          texture={this.props.data ? this.props.data.posterurl : ""}
          lit={true}
          style={styles}
        >
        </Box>
      </VrButton>
    );
  }
}
