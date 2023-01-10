import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";

const ArrowIcon = (props: SvgProps) => (
  <Svg width={17} height={10} fill="none" {...props}>
    <Path stroke="#fff" strokeWidth={2} strokeLinecap="round" d="M1 5h14" />
    <Path
      d="m12 1 4 4-4 4"
      stroke="#fff"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

const ArrowIconMemo = React.memo(ArrowIcon);

export default ArrowIconMemo;
