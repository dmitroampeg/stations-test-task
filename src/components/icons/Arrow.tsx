import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";

const ArrowIcon = ({ fill = "#fff", ...props }: SvgProps) => (
  <Svg width={17} height={10} fill="none" {...props}>
    <Path stroke={fill} strokeWidth={2} strokeLinecap="round" d="M1 5h14" />
    <Path
      d="m12 1 4 4-4 4"
      stroke={fill}
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

const ArrowIconMemo = React.memo(ArrowIcon);

export default ArrowIconMemo;
