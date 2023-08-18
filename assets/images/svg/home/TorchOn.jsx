import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgComponent(props) {
  return (
    <Svg
      width={22}
      height={30}
      viewBox="0 0 22 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        d="M21.054 14.695L7.93 28.758a.902.902 0 01-.68.305.984.984 0 01-.433-.106.95.95 0 01-.48-1.02l1.71-8.59-6.75-2.53a.961.961 0 01-.586-.669.926.926 0 01.235-.855L14.07 1.231a.937.937 0 011.594.82l-1.711 8.601 6.75 2.532a.926.926 0 01.351 1.511z"
        fill="#fff"
      />
    </Svg>
  );
}

export default SvgComponent;
