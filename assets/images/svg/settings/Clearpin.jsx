import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgComponent(props) {
  return (
    <Svg
      width={40}
      height={29}
      viewBox="0 0 40 29"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path stroke="#FFD0A1" d="M39.5 0L39.5 29" />
      <Path stroke="#FFD0A1" d="M39.3774 28.2959L15.056 28.2959" />
      <Path stroke="#FFD0A1" d="M39.3774 0.5L15.056 0.499998" />
      <Path stroke="#FFD0A1" d="M15.3953 0.367402L0.339169 14.2654" />
      <Path stroke="#FFD0A1" d="M0.353553 13.5444L15.4097 28.6005" />
      <Path
        stroke="#FFD0A1"
        strokeWidth={2}
        d="M20.3956 8.55803L32.6798 20.8422"
      />
      <Path
        stroke="#FFD0A1"
        strokeWidth={2}
        d="M33.1014 8.84687L20.2468 20.5328"
      />
    </Svg>
  );
}

export default SvgComponent;
