import * as React from "react";
import Svg, { Path } from "react-native-svg";

function CloudySvgComponent(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={80}
      height={80}
      viewBox="0 0 48 48"
      {...props}
    >
      <Path
        fill="#bbdefb"
        d="M29.5 12a8.5 8.5 0 100 17 8.5 8.5 0 100-17z"
        className="prefix__colorBBDEFB prefix__svgShape"
      />
      <Path
        fill="#bbdefb"
        d="M37 21.893a7 7 0 100 14 7 7 0 100-14zM11 22a7 7 0 100 14 7 7 0 100-14z"
        className="prefix__colorBBDEFB prefix__svgShape"
      />
      <Path
        fill="#bbdefb"
        d="M17.5 15a6.5 6.5 0 100 13 6.5 6.5 0 100-13z"
        className="prefix__colorBBDEFB prefix__svgShape"
      />
      <Path
        fill="#bbdefb"
        d="M25 19.893a7 7 0 100 14 7 7 0 100-14z"
        className="prefix__colorBBDEFB prefix__svgShape"
      />
      <Path
        fill="#bbdefb"
        d="M7 32a4 4 0 004 4h25a4 4 0 004-4v-1a4 4 0 00-4-4H11a4 4 0 00-4 4v1z"
        className="prefix__colorBBDEFB prefix__svgShape"
      />
    </Svg>
  );
}

export default CloudySvgComponent;
