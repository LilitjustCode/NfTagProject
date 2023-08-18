import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgComponent(props) {
  return (
    <Svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        d="M15.016 7.39v-.934a3.685 3.685 0 00-3.685-3.685H6.456a3.685 3.685 0 00-3.684 3.685v11.13a3.685 3.685 0 003.684 3.686h4.885a3.675 3.675 0 003.675-3.674v-.944M21.81 12.021H9.769M18.881 9.106l2.928 2.915-2.928 2.916"
        stroke="#F0A989"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

export default SvgComponent;
