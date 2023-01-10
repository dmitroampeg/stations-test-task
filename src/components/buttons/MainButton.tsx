import { Button, IButtonProps } from "native-base";
import React from "react";

interface Props extends IButtonProps {
  text: string;
}

const MainButton: React.FC<Props> = ({ text, ...props }) => (
  <Button
    bgColor={"#DD1D21"}
    borderRadius={50}
    px={"29px"}
    py={"18px"}
    _text={{ fontWeight: "600", fontSize: 16 }}
    {...props}
  >
    {text}
  </Button>
);

export default MainButton;
