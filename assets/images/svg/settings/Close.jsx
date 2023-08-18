import * as React from 'react';
import Svg, {G, Path} from 'react-native-svg';

function SvgComponent(props) {
  return (
    <Svg
      width={14}
      height={14}
      viewBox="0 0 14 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <G opacity={0.3} fill="#FFD0A1">
        <Path d="M.778 2.333A1.1 1.1 0 112.333.778l10.89 10.889a1.1 1.1 0 11-1.556 1.555L.777 2.333z" />
        <Path d="M2.333 13.222a1.1 1.1 0 11-1.555-1.555L11.667.777a1.1 1.1 0 111.555 1.556L2.333 13.223z" />
      </G>
    </Svg>
  );
}

export default SvgComponent;
