import * as React from 'react';
import Svg, {G, Rect, Path, Defs} from 'react-native-svg';
/* SVGR has dropped some elements not supported by react-native-svg: filter */

function SvgComponent(props) {
  return (
    <Svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <G filter="url(#filter0_b_1_106)">
        <Rect width={24} height={24} rx={2} fill="#D9D9D9" />
        <Rect width={24} height={24} rx={2} fill="#FFD0A1" />
        <Rect
          x={0.5}
          y={0.5}
          width={23}
          height={23}
          rx={1.5}
          stroke="#FFD0A1"
        />
      </G>
      <Path
        d="M3.82 7.952c.05.199.28.422.393.593.271.41.558.814.84 1.216.385.548.792 1.085 1.19 1.622.424.572.81 1.162 1.225 1.739.305.424.551.857.804 1.313.328.591.696 1.154 1.007 1.754.193.372.436.724.69 1.057.061.08.148.15.2.229M10.377 17.92c.484-.47.997-.937 1.388-1.49.43-.608.837-1.247 1.236-1.876.883-1.395 1.928-2.682 2.896-4.021 1.194-1.652 2.398-3.304 3.452-5.05.298-.492.617-.97.909-1.462.12-.204.256-.528.443-.667"
        stroke="#FFFBFB"
        strokeWidth={3}
        strokeLinecap="round"
      />
      <Defs></Defs>
    </Svg>
  );
}

export default SvgComponent;
