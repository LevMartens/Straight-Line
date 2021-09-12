import * as React from "react";
import Svg, { Path } from "react-native-svg";

function ProfileSvgComponent({ color }) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={40}
      height={40}
      viewBox="0 0 50 50"
    >
      <Path
        d="M25 3c-5.535 0-10 4.465-10 10v6c0 3.238 1.586 6.145 4 7.969V31.5c0 .105-.02.195-.281.438-.262.242-.727.566-1.344.875-1.23.617-3.008 1.25-4.813 2.124-1.804.876-3.675 1.989-5.124 3.594C5.987 40.137 5 42.29 5 45v1h40v-1c0-2.734-.988-4.895-2.438-6.5-1.449-1.605-3.32-2.7-5.124-3.563-1.805-.863-3.586-1.515-4.813-2.124-.613-.305-1.086-.602-1.344-.844S31 31.625 31 31.5v-4.531c2.414-1.824 4-4.73 4-7.969v-6c0-5.535-4.465-10-10-10zm0 2c4.465 0 8 3.535 8 8v6c0 2.758-1.441 5.242-3.563 6.656L29 25.97V31.5c0 .773.398 1.457.906 1.938.508.48 1.145.84 1.844 1.187 1.398.695 3.117 1.313 4.813 2.125 1.695.813 3.324 1.793 4.5 3.094.976 1.078 1.542 2.46 1.75 4.156H7.187c.208-1.676.778-3.043 1.75-4.125 1.176-1.305 2.805-2.3 4.5-3.125 1.696-.824 3.418-1.46 4.813-2.156.695-.348 1.34-.715 1.844-1.188.504-.472.906-1.136.906-1.906v-5.531l-.438-.313C18.442 24.242 17 21.758 17 19v-6c0-4.465 3.535-8 8-8z"
        fill={color}
        className="prefix__color000 prefix__svgShape"
      />
    </Svg>
  );
}

export default ProfileSvgComponent;
