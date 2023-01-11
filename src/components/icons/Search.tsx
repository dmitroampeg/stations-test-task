import * as React from "react";
import Svg, { SvgProps, Circle, Path } from "react-native-svg";

const SearchIcon = (props: SvgProps) => (
  <Svg width={20} height={20} fill="none" {...props}>
    <Circle cx={8.933} cy={8.867} r={7.867} stroke="#ADB7C6" strokeWidth={2} />
    <Path
      d="m14.633 15.2 3.8 3.8"
      stroke="#ADB7C6"
      strokeWidth={2}
      strokeLinecap="round"
    />
  </Svg>
);

const SearchIconMemo = React.memo(SearchIcon);

export default SearchIconMemo;
