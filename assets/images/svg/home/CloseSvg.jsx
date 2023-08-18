import * as React from 'react';
import Svg, {G, Path, Defs} from 'react-native-svg';
/* SVGR has dropped some elements not supported by react-native-svg: filter */

function SvgComponent(props) {
  return (
    <Svg
      width={28}
      height={28}
      viewBox="0 0 28 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <G filter="url(#filter0_d_958_6541)" fill="#fff">
        <Path d="M5.111 7.333a1.571 1.571 0 112.222-2.222L22.89 20.667a1.571 1.571 0 01-2.222 2.222L5.11 7.333z" />
        <Path d="M7.333 22.889a1.571 1.571 0 01-2.222-2.222L20.667 5.11a1.571 1.571 0 112.222 2.222L7.333 22.89z" />
      </G>
      <Defs></Defs>
    </Svg>
  );
}

export default SvgComponent;
