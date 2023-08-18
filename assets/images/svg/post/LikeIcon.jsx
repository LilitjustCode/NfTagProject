import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgComponent(props) {
  return (
    <Svg
      width={22}
      height={20}
      viewBox="0 0 22 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        d="M19.698 2.264h0c2.403 2.381 2.4 6.084.003 8.448h0l-8.7 8.586-8.702-8.586h0C-.098 8.347-.1 4.645 2.298 2.268h0A6.06 6.06 0 014.266.96 6.13 6.13 0 016.593.5c1.528 0 2.975.485 4.071 1.479l.336.305.336-.305C12.432.985 13.879.5 15.408.5c.798 0 1.588.157 2.324.46a6.055 6.055 0 011.966 1.304z"
        fill="#F0A989"
        stroke="#F0A989"
      />
    </Svg>
  );
}

export default SvgComponent;
