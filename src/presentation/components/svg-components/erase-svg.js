import * as React from "react";
import Svg, { Path } from "react-native-svg";

function EraseSvgComponent(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
      width={24}
      height={24}
      {...props}
    >
      <Path fill="#B0BEC5" d="M42 42H17.017L17 40h25z" />
      <Path
        fill="#607D8B"
        d="M30.749 32.749l12.021-12.02a2 2 0 000-2.829L31.456 6.586a2 2 0 00-2.829 0l-12.021 12.02 14.143 14.143z"
      />
      <Path
        fill="#546E7A"
        d="M39.728 23.771l3.042-3.042a2 2 0 000-2.829L31.456 6.586a2 2 0 00-2.829 0l-3.043 3.042 14.144 14.143z"
      />
      <Path
        fill="#CFD8DC"
        d="M21.367 42l9.382-9.251-14.143-14.143-12.02 12.022a2 2 0 000 2.828L13 42h8.367z"
      />
    </Svg>
  );
}

export default EraseSvgComponent;
