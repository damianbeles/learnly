import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
/* SVGR has dropped some elements not supported by react-native-svg: title */
export function TopRightCloudSvg(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={430}
      height={397}
      fill="none"
      {...props}>
      <Path
        fill="#00A3E8"
        d="M59.83 167C2.33 143-17.701 88.622 17.33 0h412.501v382.5c-135.171 75.953-142.5-186.5-191-197.5s-121.5 6-179-18Z"
      />
    </Svg>
  );
}
