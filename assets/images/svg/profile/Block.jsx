import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgComponent(props) {
  return (
    <Svg
      width={21}
      height={19}
      viewBox="0 0 21 19"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        clipRule="evenodd"
        d="M2.814 17.437h14.383c1.582 0 2.575-1.71 1.79-3.084L11.8 1.788C11.01.405 9.015.404 8.223 1.787L1.025 14.352c-.786 1.374.206 3.085 1.79 3.085z"
        stroke="#FF8A00"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M10.003 10.415v-3.1"
        stroke="#FF8A00"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M9.995 13.5h.01"
        stroke="#FF8A00"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

export default SvgComponent;
