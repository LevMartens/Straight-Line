import * as React from "react";
import Svg, { Path } from "react-native-svg";

function StarSvgComponent(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
      width={24}
      height={24}
      {...props}
    >
      <Path
        fill="#FFCA28"
        d="M24 4.051l6.49 13.135L45 19.29 34.5 29.512l2.477 14.437L24 37.137l-12.977 6.812L13.5 29.512 3 19.29l14.51-2.104z"
      />
    </Svg>
  );
}

export default StarSvgComponent;
