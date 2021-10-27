import * as React from "react";
import Svg, { Path } from "react-native-svg";

function UndoSvgComponent(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={26}
      height={26}
      //marginLeft={15}
      //marginTop={5}
      viewBox="0 0 50 50"
      {...props}
    >
      <Path
        d="M16.813 3.094a.99.99 0 00-.563.312L5.344 14.281 4.656 15l.688.719L16.25 26.594c.242.297.629.433 1.004.347.371-.086.664-.378.75-.75a1.004 1.004 0 00-.348-1.003L8.47 16H24c6.008 0 10.242 1.52 12.969 3.969C39.695 22.418 41 25.836 41 30c0 8.348-3.844 14.469-3.844 14.469a.999.999 0 00-.093 1.039c.167.34.507.554.882.558.375.004.723-.203.899-.535 0 0 4.156-6.566 4.156-15.531 0-4.594-1.5-8.668-4.688-11.531C35.126 15.605 30.349 14 24 14H8.469l9.187-9.188c.324-.3.41-.777.215-1.171a.996.996 0 00-1.058-.547z"
        fill="#fff"
        className="prefix__color000 prefix__svgShape"
      />
    </Svg>
  );
}

export default UndoSvgComponent;
