import * as React from "react";
import Svg, { Path, G } from "react-native-svg";

function SnowSvgComponent(props) {
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
        d="M23 34h2v9h-2z"
        className="prefix__color2196F3 prefix__svgShape"
      />
      <Path
        fill="#2196f3"
        d="M28.386 39.92l-1.015 1.723-7.757-4.564 1.015-1.724z"
        className="prefix__color2196F3 prefix__svgShape"
      />
      <Path
        fill="#2196f3"
        d="M27.434 35.425l.979 1.742-7.847 4.408-.979-1.742zM10 31h2v9h-2z"
        className="prefix__color2196F3 prefix__svgShape"
      />
      <Path
        fill="#2196f3"
        d="M15.387 36.919l-1.013 1.724-7.76-4.56 1.014-1.725z"
        className="prefix__color2196F3 prefix__svgShape"
      />
      <Path
        fill="#2196f3"
        d="M14.434 32.425l.979 1.742-7.847 4.408-.979-1.742zM36 31h2v9h-2z"
        className="prefix__color2196F3 prefix__svgShape"
      />
      <Path
        fill="#2196f3"
        d="M41.387 36.92l-1.014 1.724-7.758-4.562 1.014-1.724z"
        className="prefix__color2196F3 prefix__svgShape"
      />
      <Path
        fill="#2196f3"
        d="M40.433 32.425l.979 1.742-7.848 4.408-.979-1.742z"
        className="prefix__color2196F3 prefix__svgShape"
      />
    </Svg>
  );
}

export default SnowSvgComponent;
