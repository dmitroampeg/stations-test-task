import { Input, Icon, FlatList, Box } from "native-base";
import React, { useMemo, useState } from "react";
import { Pressable, RefreshControl } from "react-native";

import { StackScreenProps } from "@react-navigation/stack";
import SearchIcon from "components/icons/Search";
import PageTemplate from "components/PageTemplate";
import { RootStackParamList, Routes } from "features/navigation/types";

import StationCard from "./components/StationCard";
import useStations from "./providers/StationsProvider";
import { Station } from "./types";

const Stations = ({
  navigation,
}: StackScreenProps<RootStackParamList, Routes.Stations>) => {
  const { stationsMap, getStations, isLoading } = useStations();

  const [searchFilter, setSearchFilter] = useState("");

  const filteredStations = useMemo(() => {
    if (!stationsMap) return [];

    return Object.values(stationsMap)?.filter(
      (station) =>
        station.name.toLowerCase().includes(searchFilter) ||
        `${station.id}`.includes(searchFilter)
    );
  }, [searchFilter, stationsMap]);

  const onRefresh = async () => {
    await getStations();
  };

  const renderItem = ({ item }: { item: Station }) => (
    <Pressable
      onPress={() => {
        navigation.navigate(Routes.StationDetails, { id: item.id });
      }}
    >
      <StationCard name={item.name} id={item.id} />
    </Pressable>
  );

  return (
    <PageTemplate title="Select Station" hasBackBtn={false}>
      <Input
        h={60}
        bg="#F0F4F5"
        borderColor="#F0F4F5"
        borderRadius={11}
        InputLeftElement={<Icon as={<SearchIcon />} ml={21} />}
        placeholder={"Search by ID, Name, City"}
        fontSize={15}
        placeholderTextColor="#ADB7C6"
        value={searchFilter}
        onChangeText={(text) => setSearchFilter(text)}
      />
      <FlatList
        w={"100%"}
        flex={1}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingVertical: 28 }}
        data={filteredStations}
        renderItem={renderItem}
        ItemSeparatorComponent={() => (
          <Box my={28} width={"100%"} height={"1px"} bgColor="#F0F4F5" />
        )}
        refreshing={isLoading}
        onRefresh={onRefresh}
        refreshControl={
          <RefreshControl
            refreshing={isLoading}
            onRefresh={onRefresh}
            tintColor={"#F0F4F5"}
          />
        }
      />
    </PageTemplate>
  );
};

export default Stations;
