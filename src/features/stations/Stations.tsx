import { Input, Icon, FlatList, Box } from "native-base";
import React, { useState } from "react";
import { RefreshControl } from "react-native";

import SearchIcon from "components/icons/Search";
import PageTemplate from "components/PageTemplate";

import StationCard from "./components/StationCard";
import useStations from "./providers/StationsProvider";
import { Station } from "./types";

const Stations: React.FC = () => {
  const { stations, getStations, isLoading } = useStations();

  const [searchFilter, setSearchFilter] = useState("");

  const filteredStations = stations?.filter(
    (station) =>
      station.name.toLowerCase().includes(searchFilter) ||
      `${station.id}`.includes(searchFilter)
  );

  const onRefresh = async () => {
    await getStations();
  };

  const renderItem = ({ item }: { item: Station }) => (
    <StationCard name={item.name} id={item.id} />
  );

  return (
    <PageTemplate>
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
