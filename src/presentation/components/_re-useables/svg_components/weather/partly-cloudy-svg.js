import * as React from "react";
import Svg, { Path, G } from "react-native-svg";

function PartlyCloudySvgComponent(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={80}
      height={80}
      viewBox="0 0 48 48"
      {...props}
    >
      <Path
        fill="#ff9800"
        d="M8 10.001h17v17H8z"
        className="prefix__colorFF9800 prefix__svgShape"
      />
      <Path
        fill="#ff9800"
        d="M4 18.5L16.5 6 29 18.5 16.5 31z"
        className="prefix__colorFF9800 prefix__svgShape"
      />
      <Path
        fill="#ffeb3b"
        d="M10 18.5c0 3.591 2.909 6.5 6.5 6.5s6.5-2.909 6.5-6.5-2.909-6.5-6.5-6.5-6.5 2.909-6.5 6.5"
        className="prefix__colorFFEB3B prefix__svgShape"
      />
      <Path
        fill="#bbdefb"
        d="M29.5 17a8.5 8.5 0 100 17 8.5 8.5 0 100-17z"
        className="prefix__colorBBDEFB prefix__svgShape"
      />
      <Path
        fill="#bbdefb"
        d="M37 26.893a7 7 0 100 14 7 7 0 100-14zM11 27a7 7 0 100 14 7 7 0 100-14z"
        className="prefix__colorBBDEFB prefix__svgShape"
      />
      <Path
        fill="#bbdefb"
        d="M17.5 20a6.5 6.5 0 100 13 6.5 6.5 0 100-13z"
        className="prefix__colorBBDEFB prefix__svgShape"
      />
      <Path
        fill="#bbdefb"
        d="M25 24.893a7 7 0 100 14 7 7 0 100-14z"
        className="prefix__colorBBDEFB prefix__svgShape"
      />
      <Path
        fill="#bbdefb"
        d="M7 37a4 4 0 004 4h25a4 4 0 004-4v-1a4 4 0 00-4-4H11a4 4 0 00-4 4v1z"
        className="prefix__colorBBDEFB prefix__svgShape"
      />
    </Svg>
  );
}

export default PartlyCloudySvgComponent;
