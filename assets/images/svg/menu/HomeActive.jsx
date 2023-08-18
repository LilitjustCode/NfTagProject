import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgComponent(props) {
  return (
    <Svg
      width={21}
      height={25}
      viewBox="0 0 21 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        d="M9.167 15.429a2 2 0 00-2 2V22a2 2 0 01-2 2H2.5a2 2 0 01-2-2V9.491a2 2 0 01.698-1.518l8-6.857a2 2 0 012.604 0l8 6.857A2 2 0 0120.5 9.49V22a2 2 0 01-2 2h-2.667a2 2 0 01-2-2v-4.571a2 2 0 00-2-2H9.167z"
        fill="#FFD0A1"
        stroke="#FFD0A1"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

export default SvgComponent;
