import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

export function RightCurtainSvg(props: SvgProps) {
  return (
    <Svg width={577} height={404} viewBox="0 0 577 404" fill="none" {...props}>
      <Path
        fill="#00A3E8"
        d="M580.5 403.499V0H0S165 203.998 340.5 204c175.5.001 199.364 204.749 240 199.5Z"
      />
    </Svg>
  );
}
