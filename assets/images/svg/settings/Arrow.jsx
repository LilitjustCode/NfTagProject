import * as React from 'react';
import Svg, {G, Rect, Path, Defs} from 'react-native-svg';
/* SVGR has dropped some elements not supported by react-native-svg: filter */

function SvgComponent(props) {
  return (
    <Svg
      width={40}
      height={40}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <G filter="url(#filter0_bi_956_7557)">
        <Rect width={40} height={40} rx={20} fill="#D78870" fillOpacity={0.2} />
        <Path
          d="M17.995 25.5a.923.923 0 00.37-.076.85.85 0 00.3-.215l4.14-4.714a.747.747 0 00.195-.498.746.746 0 00-.195-.5l-4.287-4.713a.912.912 0 00-1.209-.102.769.769 0 00-.305.532c-.021.208.049.415.194.575L21.03 20l-3.703 4.212a.729.729 0 00-.115.84c.07.135.18.25.32.329.139.08.3.12.463.119z"
          fill="#FFD0A1"
        />
      </G>
      <Defs></Defs>
    </Svg>
  );
}

export default SvgComponent;
