import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SunnySvgComponent(props) {
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
        d="M11 11h26v26H11z"
        className="prefix__colorFF9800 prefix__svgShape"
      />
      <Path
        fill="#ff9800"
        d="M6 24L24 6l18 18-18 18z"
        className="prefix__colorFF9800 prefix__svgShape"
      />
      <Path
        fill="#ffeb3b"
        d="M13 24c0 6.077 4.923 11 11 11 6.076 0 11-4.923 11-11s-4.924-11-11-11c-6.077 0-11 4.923-11 11"
        className="prefix__colorFFEB3B prefix__svgShape"
      />
    </Svg>
  );
}

export default SunnySvgComponent;
