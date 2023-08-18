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
        clipRule="evenodd"
        d="M11.985 21.606s7.672-2.323 7.672-8.727c0-6.405.278-6.905-.337-7.521-.616-.616-6.33-2.608-7.335-2.608-1.006 0-6.72 1.992-7.334 2.608-.616.616-.338 1.116-.338 7.521 0 6.404 7.672 8.727 7.672 8.727z"
        stroke="#F0A989"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M9.386 11.875l1.892 1.895 3.898-3.9"
        stroke="#F0A989"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

export default SvgComponent;
