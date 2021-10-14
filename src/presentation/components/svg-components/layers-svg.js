import * as React from "react";
import Svg, { Path } from "react-native-svg";

function LayersSvgComponent(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={30}
      height={30}
      viewBox="0 0 50 50"
      {...props}
    >
      <Path
        d="M23.125 0a.984.984 0 00-.469.188L.406 17.25a.993.993 0 00-.363.98.99.99 0 00.707.77l9.719 2.5L.406 29.25a.993.993 0 00-.363.98.99.99 0 00.707.77l9.75 2.531L.406 41.22A1 1 0 00.75 43l27 6.969a.998.998 0 00.938-.25l21-19.625a1 1 0 00-.532-1.719l-8.875-1.5 9.407-8.781a1 1 0 00-.532-1.719l-8.843-1.5 9.374-8.781a1 1 0 00-.53-1.719L23.436 0a1.048 1.048 0 00-.312 0zm.406 2.031l3.563.594A.949.949 0 0027 3c0 .55.45 1 1 1s1-.45 1-1v-.031l4.25.719c.184.199.457.312.75.312.152 0 .277-.063.406-.125l7.969 1.375A.967.967 0 0042 6c0 .55.45 1 1 1s1-.45 1-1a.957.957 0 00-.156-.5l3 .5-9.219 8.625a.954.954 0 00-.156.125.985.985 0 00-.157.156.466.466 0 00-.03.063l-9.563 8.937-1.938-.5A.976.976 0 0025 23a.949.949 0 00-.375.094l-7.656-1.969c.008-.043.031-.078.031-.125 0-.55-.45-1-1-1-.414 0-.754.266-.906.625l-1.875-.469a.466.466 0 00-.063-.031l-.344-.063a.88.88 0 00-.093-.03l-5-1.313c.18-.18.281-.442.281-.719 0-.55-.45-1-1-1s-1 .45-1 1c0 .113.027.21.063.313l-2.844-.75 12-9.188A1.002 1.002 0 0016 10c.55 0 1-.45 1-1s-.45-1-1-1a.949.949 0 00-.375.094l2.438-1.875c.105.437.464.781.937.781.55 0 1-.45 1-1 0-.375-.227-.672-.531-.844l1.843-1.437c.18.168.422.281.688.281.55 0 1-.45 1-1a.955.955 0 00-.125-.469zM25 5c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1zm6 0c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1zm6 0c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1zM22 8c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1zm6 0c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1zm6 0c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1zm6 0c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1zm-27 3c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1zm6 0c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1zm6 0c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1zm6 0c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1zm6 0c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1zm-27 3c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1zm6 0c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1zm6 0c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1zm6 0c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1zm6 0c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1zm4.469 2.594L46.844 18l-9.157 8.594a.472.472 0 00-.062.062h-.031a1.017 1.017 0 00-.407.407l-9.468 8.843-24.5-6.343 9.719-7.407L27.75 25.97a.998.998 0 00.938-.25zM13 17c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1zm6 0c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1zm6 0c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1zm6 0c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1zm-9 3c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1zm6 0c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1zm10.438 8.594L46.843 30 27.687 47.875 3.22 41.562l9.5-7.25a.906.906 0 00.187-.156L27.75 37.97a.998.998 0 00.938-.25z"
        fill="#fff"
        className="prefix__color000 prefix__svgShape"
      />
    </Svg>
  );
}

export default LayersSvgComponent;
