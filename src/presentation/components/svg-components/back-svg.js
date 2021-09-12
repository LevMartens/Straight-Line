import * as React from "react";
import Svg, { Path } from "react-native-svg";

function BackSvgComponent({ color }) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      viewBox="0 0 50 50"
    >
      <Path
        d="M34.98 3.992a.971.971 0 00-.687.301l-20 20a1 1 0 000 1.414l20 20c.25.262.625.367.973.273a.99.99 0 00.714-.714.992.992 0 00-.273-.973L16.414 25 35.707 5.707a.997.997 0 00.223-1.105.986.986 0 00-.95-.61z"
        fill={color} //"#fff" //"#fb8c04" //"#64834c"
        className="prefix__color000 prefix__svgShape"
      />
    </Svg>
  );
}

export default BackSvgComponent;
