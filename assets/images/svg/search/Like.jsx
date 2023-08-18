import * as React from 'react';
import Svg, {Rect, Path} from 'react-native-svg';

function SvgComponent(props) {
  return (
    <Svg
      width={30}
      height={28}
      viewBox="0 0 30 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Rect width={30} height={28} rx={4} fill="#551F0E" fillOpacity={0.5} />
      <Path
        d="M22.056 7.886h0c1.926 1.865 1.924 4.757.003 6.609h0L15 21.305l-7.059-6.81h0C6.02 12.643 6.019 9.75 7.94 7.89h0v-.001c.451-.438.988-.787 1.581-1.026a5.032 5.032 0 011.873-.363c1.235 0 2.397.383 3.274 1.161l.332.294.332-.294c.877-.778 2.04-1.16 3.274-1.161.643 0 1.279.124 1.871.362a4.875 4.875 0 011.58 1.024z"
        stroke="#fff"
      />
    </Svg>
  );
}

export default SvgComponent;
