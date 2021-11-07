import * as React from "react";
import Svg, { Path } from "react-native-svg";

function UserSvgComponent(props) {
  //#c84b31
  //#90CAF9
  //#2196F3
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
      width={40}
      height={40}
    >
      <Path fill="#90CAF9" d="M24 39L5 43 24 5z" />
      <Path fill="#2196F3" d="M24 39l19 4L24 5z" />
    </Svg>
    // <Svg
    //   xmlns="http://www.w3.org/2000/svg"
    //   width={40}
    //   height={40}
    //   viewBox="0 0 48 48"
    //   {...props}
    // >
    //   <Path
    //     fill="#8bc34b" //"#ffab91"
    //     d="M24 39L5 43 24 5z"
    //     className="prefix__color90CAF9 prefix__svgShape"
    //   />
    //   <Path
    //     fill="#5b8d38" //"#ff5722"
    //     d="M24 39l19 4L24 5z"
    //     className="prefix__color2196F3 prefix__svgShape"
    //   />
    // </Svg>
  );
}

export default UserSvgComponent;
