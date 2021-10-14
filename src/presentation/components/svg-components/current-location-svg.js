import * as React from "react";
import Svg, { Path } from "react-native-svg";

function CurrentLocationSvgComponent(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={30}
      height={30}
      viewBox="0 0 50 50"
      {...props}
    >
      <Path
        d="M25 2C12.309 2 2 12.309 2 25s10.309 23 23 23 23-10.309 23-23S37.691 2 25 2zm0 2c11.61 0 21 9.39 21 21s-9.39 21-21 21S4 36.61 4 25 13.39 4 25 4zm11 10L10 26h14v14z"
        fill="#fff"
        className="prefix__color000 prefix__svgShape"
      />
    </Svg>
  );
}

export default CurrentLocationSvgComponent;
