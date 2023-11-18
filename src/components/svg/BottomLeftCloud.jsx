import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
export function BottomLeftCloud(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={581}
      height={404}
      fill="none"
      {...props}>
      <Path
        fill="#00A3E8"
        d="M0 .1v403.498h580.5S415.5 199.601 240 199.6C64.5 199.599 40.636-5.15 0 .1Z"
      />
    </Svg>
  );
}
