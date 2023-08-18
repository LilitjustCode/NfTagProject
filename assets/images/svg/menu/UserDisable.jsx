import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgComponent(props) {
  return (
    <Svg
      width={22}
      height={26}
      viewBox="0 0 22 26"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        d="M11 13.024c3.57 0 6.5-2.785 6.5-6.262C17.5 3.285 14.57.5 11 .5S4.5 3.285 4.5 6.762c0 3.477 2.93 6.262 6.5 6.262zM14 14.896H8a7.65 7.65 0 00-5.296 2.109A7.09 7.09 0 00.5 22.119c0 .903.374 1.765 1.032 2.398A3.564 3.564 0 004 25.5h14c.922 0 1.81-.352 2.468-.983a3.324 3.324 0 001.032-2.398 7.09 7.09 0 00-2.204-5.114A7.65 7.65 0 0014 14.897z"
        stroke="#fff"
      />
    </Svg>
  );
}

export default SvgComponent;
