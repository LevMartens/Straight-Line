import * as React from "react";
import Svg, { Path } from "react-native-svg";

function ExploreSvgComponent({ color }) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={40}
      height={40}
      viewBox="0 0 50 50"
    >
      <Path
        d="M3 4c-.55 0-1 .45-1 1v34c0 .367.2.703.523.875l10.997 6a1 1 0 00.96 0l10.54-5.746 11.53 5.766c.31.152.673.136.966-.036l10-6c.3-.183.484-.507.484-.859V5c0-.36-.195-.691-.508-.871a1.01 1.01 0 00-1.008.012l-9.527 5.718-11.508-5.754a1.003 1.003 0 00-.93.02L14 9.859 3.477 4.125A.965.965 0 003 4zm22.02 2.129l11.53 5.766c.31.152.673.136.966-.036L46 6.766v31.668l-9.043 5.425-11.508-5.754a1.003 1.003 0 00-.93.02L14 43.859 4 38.406V6.684l9.52 5.191a1 1 0 00.96 0zM17 15l-6 1H9l-2 2v1h2l1 4 3 3-1 2 2 2 1 5 2 1 1-5 1-1 1-2-2-2-4-1v-2l4-4-2-2 1-1zm2 0l-1 2 1 2 3-2v-2zm15 1l-7 1-3 2v3l3-2v1l-4 3-1 3 3 2 1 5 2 2 3-6v-2l-2-3-2-1h2l2 2 3-2 1 2 1-2 2 2 1-2 2-2-1-3 3-2zm7 13l-4 2v2h2l2 2 1-3z"
        fill={color}
        className="prefix__color000 prefix__svgShape"
      />
    </Svg>
  );
}

export default ExploreSvgComponent;
