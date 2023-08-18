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
        d="M19.325 9.468s-.543 6.735-.858 9.572c-.15 1.355-.987 2.149-2.358 2.174-2.61.047-5.221.05-7.83-.005-1.318-.027-2.141-.831-2.288-2.162-.317-2.862-.857-9.58-.857-9.58M20.708 6.24H3.75M17.44 6.24a1.648 1.648 0 01-1.614-1.325L15.583 3.7a1.28 1.28 0 00-1.237-.949h-4.233a1.28 1.28 0 00-1.237.95l-.243 1.215A1.648 1.648 0 017.018 6.24"
        stroke="#F0A989"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

export default SvgComponent;
