import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgComponent(props) {
  return (
    <Svg
      width={23}
      height={26}
      viewBox="0 0 23 26"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        d="M11.5 13.024c3.57 0 6.5-2.785 6.5-6.262C18 3.285 15.07.5 11.5.5S5 3.285 5 6.762c0 3.477 2.93 6.262 6.5 6.262zM14.5 14.896h-6a7.65 7.65 0 00-5.296 2.109A7.09 7.09 0 001 22.119c0 .903.374 1.765 1.032 2.398A3.564 3.564 0 004.5 25.5h14c.922 0 1.81-.352 2.468-.983A3.324 3.324 0 0022 22.119a7.09 7.09 0 00-2.204-5.114 7.65 7.65 0 00-5.296-2.108z"
        fill="#FFD0A1"
        stroke="#FFD0A1"
      />
    </Svg>
  );
}

export default SvgComponent;
