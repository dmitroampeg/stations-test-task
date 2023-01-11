import { Button, IButtonProps } from "native-base";
import React from "react";

import { MainText, MainTextProps } from "components/StyledText";

interface Props extends IButtonProps {
  text: string;
  textStyle?: MainTextProps;
}

const MainButton: React.FC<Props> = ({ text, textStyle, ...props }) => (
  <Button
    bgColor={"#DD1D21"}
    borderRadius={50}
    px={"29px"}
    py={"18px"}
    {...props}
  >
    <MainText
      style={[
        { fontSize: 16, color: "#fff", textAlign: "center" },
        textStyle?.style,
      ]}
      fontWeight={textStyle?.fontWeight}
    >
      {text}
    </MainText>
  </Button>
);

export default MainButton;
