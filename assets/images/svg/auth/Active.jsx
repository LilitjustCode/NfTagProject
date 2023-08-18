import * as React from 'react';
import Svg, {G, Rect, Defs} from 'react-native-svg';
/* SVGR has dropped some elements not supported by react-native-svg: filter */

function SvgComponent(props) {
  return (
    <Svg
      width={96}
      height={46}
      viewBox="0 0 96 46"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <G filter="url(#filter0_d_1212_1440)">
        <Rect x={18} y={18} width={60} height={10} rx={4} fill="#FFD0A1" />
      </G>
      <Defs></Defs>
    </Svg>
  );
}

export default SvgComponent;
