import * as React from "react";
import Svg, { Path } from "react-native-svg";

function NearbySvgComponent(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
      width={30}
      height={30}
      {...props}
    >
      <Path
        fill="#2196f3"
        d="M44 24c0 11.049-8.956 20-20 20S4 35.049 4 24C4 12.956 12.956 4 24 4s20 8.956 20 20z"
      />
      <Path
        fill="#e3f2fd"
        d="M32 17l-19.094 7.777 9.195 2.121 2.121 9.195L32 17z"
      />
    </Svg>
  );
}

export default NearbySvgComponent;
