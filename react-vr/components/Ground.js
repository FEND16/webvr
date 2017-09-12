import React from "react";
import { Plane, Sphere, View } from "react-vr";

const Ground = () => (
  <View>
    <Plane
      width={500}
      height={500}
      lit={true}
      style={{
        color: "#fff",
        transform: [
          {
            translateY: -1
          },
          {
            rotateX: -90
          },
          {
            scale: 1
          }
        ]
      }}
    />
    <Sphere
      widthSegments={20}
      heightSegments={20}
      radius={2.5}
      lit={true}
      style={{
        color: "#90EE90",
        transform: [
          {
            translateY: -3
          }
        ]
      }}
    />
  </View>
);

export default Ground;
