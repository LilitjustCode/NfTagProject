import * as React from 'react';
import Svg, {Rect} from 'react-native-svg';

function SvgComponent(props) {
  return (
    <Svg
      width={24}
      height={14}
      viewBox="0 0 24 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Rect width={24} height={2} rx={1} fill="#fff" />
      <Rect y={6} width={24} height={2} rx={1} fill="#fff" />
      <Rect y={12} width={24} height={2} rx={1} fill="#fff" />
    </Svg>
  );
}

export default SvgComponent;
