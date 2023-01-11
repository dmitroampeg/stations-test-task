import { ITextProps, Text } from "native-base";
import React from "react";

export type MainTextFontWeight = "SemiBold" | "Bold" | "Medium" | "Regular";

export interface MainTextProps extends Omit<ITextProps, "fontWeight"> {
  fontWeight?: MainTextFontWeight;
}

export const MainText: React.FC<MainTextProps> = ({
  fontWeight = "Regular",
  ...props
}) => (
  <Text
    color="#000"
    {...props}
    style={[props.style, { fontFamily: `Poppins-${fontWeight}` }]}
  />
);
