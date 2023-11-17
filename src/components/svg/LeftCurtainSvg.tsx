import * as React from 'react';
import Svg, { Path, SvgProps } from 'react-native-svg';

export function LeftCurtainSvg(props: SvgProps) {
  return (
    <Svg width={581} height={404} viewBox="0 0 581 404" fill="none" {...props}>
      <Path
        fill="#00A3E8"
        d="M0 403.499V0h580.5S415.5 203.998 240 204C64.5 204 40.636 408.748 0 403.499Z"
      />
    </Svg>
  );
}
