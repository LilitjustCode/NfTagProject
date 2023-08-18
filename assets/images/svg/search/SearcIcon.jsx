import * as React from 'react';
import Svg, {G, Path, Defs, ClipPath} from 'react-native-svg';

function SvgComponent(props) {
  return (
    <Svg
      width={12}
      height={12}
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <G
        clipPath="url(#clip0_1296_795)"
        stroke="#F0A989"
        strokeLinecap="round"
        strokeLinejoin="round">
        <Path d="M5.25 9.75a4.5 4.5 0 100-9 4.5 4.5 0 000 9zM8.625 8.625l2.625 2.625" />
      </G>
      <Defs>
        <ClipPath id="clip0_1296_795">
          <Path fill="#fff" d="M0 0H12V12H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
}

export default SvgComponent;
