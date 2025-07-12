import { View, Text, TextInput, TouchableOpacity, Image } from "react-native";
import React, { useState } from "react";
import { router, useLocalSearchParams } from "expo-router";
import { images } from "@/constants";
// import { useDebouncedCallback } from "use-debounce";

const SeacrhBar = () => {
  const params = useLocalSearchParams<{ query?: string }>();
  const [query, setQuery] = useState<string | undefined>(params.query);

  // const debouncedSearch = useDebouncedCallback(
  //   (text: string) => router.setParams({ query: text }),
  //   500
  // );

  const handleSeacrh = (text: string) => {
    setQuery(text);
    if (!text) router.setParams({ query: undefined });
    // debouncedSearch(text);
  };

  const handleSubmit = () => {
    if (query?.trim()) router.setParams({ query });
  };

  return (
    <View className="searchbar">
      <TextInput
        className="flex-1 p-5"
        placeholder="Search for burgers, pizzas..."
        value={query}
        onChangeText={(text) => handleSeacrh(text)}
        onSubmitEditing={handleSubmit}
        placeholderTextColor={"#A0A0A0"}
        returnKeyType="search"
      />
      <TouchableOpacity
        className="pr-5"
        onPress={() => router.setParams({ query })}
      >
        <Image
          source={images.search}
          className="size-6"
          resizeMode="contain"
          tintColor="#5D5F6D"
        />
      </TouchableOpacity>
    </View>
  );
};

export default SeacrhBar;
