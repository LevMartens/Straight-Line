import * as React from "react";
import Svg, { Path } from "react-native-svg";

function RingSvgComponent({ colorIn, colorOut }) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={75}
      height={75}
      viewBox="0 0 60 60"
      //style={{ paddingBottom: 20, marginBottom: 20 }}
    >
      <Path fill={colorOut} d="M24 4a20 20 0 100 40 20 20 0 100-40z" />
      <Path fill={colorIn} d="M24 8a16 16 0 100 32 16 16 0 100-32z" />
    </Svg>
  );
}

export default RingSvgComponent;

///"#00acc1" "#e0f7fa"
