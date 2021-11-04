import * as React from "react";
import Svg, { Path } from "react-native-svg";

function NothingFoundSvgComponent(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={80}
      height={80}
      viewBox="0 0 48 48"
      {...props}
    >
      <Path
        fill="#616161"
        d="M29.148 31.968l2.828-2.828 12.023 12.023-2.828 2.828z"
        className="prefix__color616161 prefix__svgShape"
      />
      <Path
        fill="#616161"
        d="M19.969 3.98a16 16 0 100 32 16 16 0 100-32z"
        className="prefix__color616161 prefix__svgShape"
      />
      <Path
        fill="#36474f"
        d="M32.424 35.321l2.828-2.828 8.697 8.697-2.828 2.828z"
        className="prefix__color36474f prefix__svgShape"
      />
      <Path
        fill="#5fb3f9"
        d="M19.969 6.98a13 13 0 100 26 13 13 0 100-26z"
        className="prefix__color5fb3f9 prefix__svgShape"
      />
      <Path
        fill="#f5f5f5"
        d="M26.764 25.286C25.1 23.232 22.651 22 20.007 22s-5.092 1.232-6.757 3.286c-.394.413-.295 1.132.096 1.44.394.41 1.078.305 1.373-.104 1.369-1.646 3.208-2.61 5.267-2.61s3.938.964 5.308 2.61c.199.204.799.61 1.374.204.462-.324.391-1.126.096-1.54z"
        className="prefix__colorf5f5f5 prefix__svgShape"
      />
      <Path
        fill="#f5f5f5"
        fillRule="evenodd"
        d="M14.5 15a1.5 1.5 0 100 3 1.5 1.5 0 100-3zm11 0a1.5 1.5 0 100 3 1.5 1.5 0 100-3z"
        clipRule="evenodd"
        className="prefix__colorf5f5f5 prefix__svgShape"
      />
    </Svg>
  );
}

export default NothingFoundSvgComponent;
