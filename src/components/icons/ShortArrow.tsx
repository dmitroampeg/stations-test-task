import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";

const ShortArrow = (props: SvgProps) => (
  <Svg width={9} height={6} fill="none" {...props}>
    <Path
      d="M7.548 1.465 4.5 4.763 1.452 1.465"
      stroke="#000"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

const ShortArrowMemo = React.memo(ShortArrow);

export default ShortArrowMemo;
