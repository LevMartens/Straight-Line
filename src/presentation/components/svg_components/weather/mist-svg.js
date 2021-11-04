import * as React from "react";
import Svg, { Path } from "react-native-svg";

function MistSvgComponent(props) {
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
        d="M24 6L6 24l1 1h1a2 2 0 012 2c0 .293-.066.569-.18.82L23 41h2l17-17L24 6z"
        className="prefix__colorFF9800 prefix__svgShape"
      />
      <Path
        fill="#ff9800"
        d="M11 11h26v26H11z"
        className="prefix__colorFF9800 prefix__svgShape"
      />
      <Path
        fill="#ffeb3b"
        d="M13 24c0 6.077 4.923 11 11 11 6.076 0 11-4.923 11-11s-4.924-11-11-11c-6.077 0-11 4.923-11 11"
        className="prefix__colorFFEB3B prefix__svgShape"
      />
      <Path
        fill="#64b5f6"
        d="M40 37h-9a2 2 0 010-4h3a2 2 0 000-4H19a2 2 0 01-.01-3.999H21a2 2 0 002-2V23a2 2 0 00-2-2H7v.001a2 2 0 000 4h1A1.998 1.998 0 017.99 29H8a2 2 0 000 4h1a2 2 0 010 4 2 2 0 000 4h31c.8 0 1.485-.473 1.805-1.152h.001l.001-.002c.057-.123.104-.25.135-.385l.008-.023A2 2 0 0040 37z"
        className="prefix__color64B5F6 prefix__svgShape"
      />
      <Path
        fill="#bbdefb"
        d="M24 35c4.273 0 7.969-2.44 9.79-6H19a2 2 0 01-.01-3.999H21a2 2 0 002-2V23a2 2 0 00-2-2h-7.576c-.27.955-.424 1.959-.424 3 0 6.077 4.923 11 11 11z"
        className="prefix__colorBBDEFB prefix__svgShape"
      />
    </Svg>
  );
}

export default MistSvgComponent;
