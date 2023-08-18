import * as React from 'react';
import Svg, {Circle, Path} from 'react-native-svg';

function SvgComponent(props) {
  return (
    <Svg
      width={111}
      height={111}
      viewBox="0 0 111 111"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Circle
        opacity={0.270023}
        cx={56}
        cy={56}
        r={46}
        stroke="#FFD0A1"
        strokeWidth={0.4}
      />
      <Circle
        opacity={0.201102}
        cx={55.5}
        cy={55.5}
        r={54.5}
        stroke="#FFD0A1"
        strokeWidth={0.2}
      />
      <Circle cx={55.5} cy={55.5} r={30.5} fill="#FFD0A1" />
      <Path
        d="M45 55.706l6.709 6.705L65.12 49"
        stroke="#551F0E"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

export default SvgComponent;
