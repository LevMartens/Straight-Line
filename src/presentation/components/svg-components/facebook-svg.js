import * as React from "react";
import Svg, { Path } from "react-native-svg";

function FacebookSvgComponent(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
      width={34}
      height={34}
      {...props}
    >
      <Path
        fill="#fff"
        d="M29 3c-5.523 0-10 4.477-10 10v5h-6v8h6v19h8V26h7l1-8h-8v-4a4 4 0 014-4h4V3.322A59.806 59.806 0 0029 3z"
      />
    </Svg>
  );
}

export default FacebookSvgComponent;
