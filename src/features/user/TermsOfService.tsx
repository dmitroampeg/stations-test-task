import React from "react";

import MainButton from "components/buttons/MainButton";
import PageTemplate from "components/PageTemplate";
import { MainText } from "components/StyledText";
import useUser from "features/user/providers/UserProvider";

const TermsOfService: React.FC = () => {
  const { updateUser, setUser, user } = useUser();

  if (!user) return null;

  const onAccept = async () => {
    try {
      const data = { hasAcceptedTerms: true };

      await updateUser(user.id, data);
      setUser({ ...user, ...data });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <PageTemplate hasLogoIcon={true} hasBackBtn={false}>
      <MainText fontWeight="Bold" fontSize={21} textAlign={"center"}>
        Disclaimer
      </MainText>
      <MainText mt={13} fontWeight="Regular" fontSize={14}>
        The information provided by the Zdaly Fuel Network Optimizer app is
        based on historical data. Data on Zdaly Light is updated once daily at
        8:00 a.m. eastern time. Any prospective information is based on that
        data and should not be relied on as a estimation of future performance.
        Any future product prices are the manufacturer's suggested retail price
        (MSRP) only. Sites are independent operators free to set their retail
        price
      </MainText>
      <MainButton
        mt={24}
        px={86}
        text="I Accept"
        maxW="100%"
        alignItems={"center"}
        onPress={onAccept}
        textStyle={{ fontWeight: "SemiBold" }}
      />
    </PageTemplate>
  );
};

export default TermsOfService;
