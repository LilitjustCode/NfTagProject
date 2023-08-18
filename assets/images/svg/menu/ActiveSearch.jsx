import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgComponent(props) {
  return (
    <Svg
      width={26}
      height={26}
      viewBox="0 0 26 26"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        d="M24.654 25.36a.5.5 0 00.692-.72l-7.348-7.064a10.328 10.328 0 002.59-6.852c0-2.709-1.056-5.308-2.939-7.226A9.955 9.955 0 0010.544.5a9.955 9.955 0 00-7.106 2.998A10.318 10.318 0 00.5 10.724c0 2.708 1.056 5.308 2.938 7.226a9.955 9.955 0 007.106 2.998 9.945 9.945 0 006.755-2.658l7.355 7.07z"
        stroke="#FFD0A1"
        strokeLinecap="round"
      />
    </Svg>
  );
}

export default SvgComponent;
