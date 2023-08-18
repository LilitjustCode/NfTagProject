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
        d="M16.423 9.448V7.3a4.552 4.552 0 00-4.55-4.551 4.55 4.55 0 00-4.57 4.53v2.168"
        stroke="#F0A989"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        clipRule="evenodd"
        d="M15.683 21.25H8.042a3.792 3.792 0 01-3.792-3.793v-4.289a3.792 3.792 0 013.792-3.792h7.641a3.792 3.792 0 013.792 3.793v4.288a3.792 3.792 0 01-3.792 3.793z"
        stroke="#F0A989"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M11.863 14.203v2.22"
        stroke="#F0A989"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

export default SvgComponent;
