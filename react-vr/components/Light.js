import React from "react";
import { View, DirectionalLight, AmbientLight, PointLight } from "react-vr";

const Light = () => (
  <View>
    <DirectionalLight
      intensity={0.9}
      style={{
        color: "#ddddff",
        transform: [
          {
            translate: [0, 90, 30]
          },
          {
            rotateX: -90
          }
        ]
      }}
    />
    <AmbientLight intensity={0.2} />
    <PointLight
      intensity={0.6}
      style={{ color: "white", transform: [{ translate: [0, 600, 500] }] }}
    />
    <DirectionalLight
      intensity={0.1}
      style={{ transform: [{ translate: [0, -500, -300] }] }}
    />
  </View>
);

export default Light;
