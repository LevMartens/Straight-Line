import * as React from "react";
import Svg, { Path } from "react-native-svg";

function RainDropsSvgComponent(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={25}
      height={25}
      viewBox="0 0 48 48"
      {...props}
    >
      <Path
        fill="#2196f3"
        d="M17 16a5 5 0 01-10 0c0-2.761 5-10 5-10s5 7.239 5 10zm10 21a5 5 0 01-10 0c0-2.761 5-10 5-10s5 7.239 5 10zm14-15a5 5 0 11-10 0c0-2.761 5-10 5-10s5 7.239 5 10z"
        className="prefix__color2196F3 prefix__svgShape"
      />
    </Svg>
  );
}

export default RainDropsSvgComponent;
