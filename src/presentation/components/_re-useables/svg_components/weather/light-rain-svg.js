import * as React from "react";
import Svg, { Path } from "react-native-svg";

function LightRainSvgComponent(props) {
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
        d="M29.5 5a8.5 8.5 0 100 17 8.5 8.5 0 100-17z"
        className="prefix__colorBBDEFB prefix__svgShape"
      />
      <Path
        fill="#bbdefb"
        d="M37 14.893a7 7 0 100 14 7 7 0 100-14zM11 15a7 7 0 100 14 7 7 0 100-14z"
        className="prefix__colorBBDEFB prefix__svgShape"
      />
      <Path
        fill="#bbdefb"
        d="M17.5 8a6.5 6.5 0 100 13 6.5 6.5 0 100-13z"
        className="prefix__colorBBDEFB prefix__svgShape"
      />
      <Path
        fill="#bbdefb"
        d="M25 12.893a7 7 0 100 14 7 7 0 100-14z"
        className="prefix__colorBBDEFB prefix__svgShape"
      />
      <Path
        fill="#bbdefb"
        d="M7 25a4 4 0 004 4h25a4 4 0 004-4v-1a4 4 0 00-4-4H11a4 4 0 00-4 4v1z"
        className="prefix__colorBBDEFB prefix__svgShape"
      />
      <Path
        fill="#2196f3"
        d="M26 29a1 1 0 100 2 1 1 0 100-2zm-1 3a1 1 0 100 2 1 1 0 100-2zm-1 3a1 1 0 100 2 1 1 0 100-2zm-1 3a1 1 0 100 2 1 1 0 100-2zm-1 3a1 1 0 100 2 1 1 0 100-2zm-3-9a1 1 0 100 2 1 1 0 100-2zm-1 3a1 1 0 100 2 1 1 0 100-2zm-1 3a1 1 0 100 2 1 1 0 100-2zm3-9a1 1 0 100 2 1 1 0 100-2z"
        className="prefix__color2196F3 prefix__svgShape"
      />
    </Svg>
  );
}

export default LightRainSvgComponent;
