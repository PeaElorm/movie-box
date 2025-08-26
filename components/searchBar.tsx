import React from 'react';
import {View, Image, TextInput} from 'react-native';
import {icons} from "@/app/constants/icons";

interface Props {
    placeholder: string;
    onPress?: () => void;
    value?: string;
    onChangeText?: (text: string) => void;
}

const SearchBar = ({onPress, placeholder, value, onChangeText}:Props) => {
  return (
    <View className="flex-row items-center bg-dark-200 rounded-full px-5 py-4">
      <Image source={icons.search} className="size-5" resizeMode="contain" tintColor="#ab8bff" />
        <TextInput
            className="flex-1 ml-2 font-semibold text-white"
            placeholder={placeholder}
            onPress={onPress}
            value={value}
            onChangeText={onChangeText}
            placeholderTextColor="#A8B5DB"
        />
    </View>
  );
};

export default SearchBar;
