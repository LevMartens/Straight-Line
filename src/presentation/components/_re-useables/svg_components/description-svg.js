import * as React from "react";
import Svg, { Path } from "react-native-svg";

const DescriptionSvgComponent = (props) => (
  <Svg xmlns="http://www.w3.org/2000/svg" width={48} height={48} {...props}>
    <Path fill="#90CAF9" d="M40 45H8V3h22l10 10z" />
    <Path fill="#E1F5FE" d="M38.5 14H29V4.5z" />
    <Path
      fill="#1976D2"
      d="M16 21h17v2H16zm0 4h13v2H16zm0 4h17v2H16zm0 4h13v2H16z"
    />
  </Svg>
);

export default DescriptionSvgComponent;
