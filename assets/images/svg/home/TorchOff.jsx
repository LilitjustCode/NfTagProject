import * as React from 'react';
import Svg, {G, Path, Defs} from 'react-native-svg';
/* SVGR has dropped some elements not supported by react-native-svg: filter */

function SvgComponent(props) {
  return (
    <Svg
      width={30}
      height={38}
      viewBox="0 0 30 38"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <G filter="url(#filter0_d_959_6570)">
        <Path
          d="M25.067 28.68a.925.925 0 01-.058 1.324.936.936 0 01-1.324-.059L19.184 25l-7.255 7.758a.902.902 0 01-.68.304.984.984 0 01-.433-.105.95.95 0 01-.48-1.02l1.71-8.59-6.75-2.53a.961.961 0 01-.585-.669.926.926 0 01.234-.855l4.582-4.91L4.934 9.32a.926.926 0 01.059-1.324.938.938 0 011.324.059l18.75 20.625zm-3.996-7.184a.937.937 0 00.68.305h.011a.903.903 0 00.68-.305l2.613-2.8a.927.927 0 00-.351-1.512l-6.75-2.532 1.71-8.601a.937.937 0 00-1.593-.82l-5.379 5.765a.926.926 0 00-.012 1.266l8.391 9.234z"
          fill="#fff"
        />
      </G>
      <Defs></Defs>
    </Svg>
  );
}

export default SvgComponent;
