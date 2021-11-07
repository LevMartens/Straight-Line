import * as React from "react";
import Svg, { G, Path } from "react-native-svg";

function WindSvgComponent(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={25}
      height={25}
      viewBox="0 0 42 36"
      {...props}
    >
      <G
        data-name="\u0421\u043B\u043E\u0439 2"
        className="prefix__color000 prefix__svgShape"
      >
        <Path
          fill="#2196f3"
          d="M7.5 15h16a7.5 7.5 0 10-7.086-9.94A1.492 1.492 0 0017.852 7h.016a1.455 1.455 0 001.393-.946A4.493 4.493 0 1123.505 12H7.5a1.5 1.5 0 000 3zm6.462 9.075a6.347 6.347 0 00-.973-.075H1.5a1.5 1.5 0 000 3h11.381a3.081 3.081 0 013.061 2.4 2.993 2.993 0 01-5.431 2.252A1.373 1.373 0 009.378 31h-.187a1.454 1.454 0 00-1.27 2.186 6 6 0 106.041-9.111z"
          className="prefix__color2196f3 prefix__svgShape"
        />
        <Path
          fill="#2196f3"
          d="M41.944 25.511a8.54 8.54 0 00-7.276-7.433A8.669 8.669 0 0033 18.032V18H4.5a1.5 1.5 0 000 3h29a5.5 5.5 0 11-4.95 7.884A1.524 1.524 0 0027.187 28h-.005a1.491 1.491 0 00-1.382 2.081 8.5 8.5 0 0016.147-4.57z"
          className="prefix__color2196f3 prefix__svgShape"
        />
      </G>
    </Svg>
  );
}

export default WindSvgComponent;
