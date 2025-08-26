import React, {useEffect, useState} from 'react';
import {View, Image, Text, FlatList, ActivityIndicator} from 'react-native';
import {images} from "@/app/constants/images";
import useFetch from "@/services/useFetch";
import {fetchMovies} from "@/services/api";
import MovieCard from "@/components/movieCard";
import {icons} from "@/app/constants/icons";
import SearchBar from "@/components/searchBar";

const Search = () => {
    const [searchQuery, setSearchQuery] = useState("");
    const {
        data: movies,
        loading: moviesLoading,
        fetchData: loadMovies,
        reset,
        error:moviesError} = useFetch(() => fetchMovies({
        query: searchQuery
    }), false);

    useEffect(() => {
        const timeoutId = setTimeout(async () => {
            if(searchQuery.trim()){
                await loadMovies();
            } else {
                reset();
            }
        }, 500)
        return () => clearTimeout(timeoutId);
    }, [searchQuery])
  return (
    <View className="flex-1 bg-primary">
      <Image source={images.bg} className="absolute w-full z-0 flex-1" resizeMode="cover"/>
        <FlatList
            data={movies}
            renderItem={({item}) => <MovieCard {...item}/> }
            keyExtractor={(item) => item.id.toString()}
            className="px-5"
            numColumns={3}
            columnWrapperStyle={{
                justifyContent: "center",
                gap: 16,
                marginVertical: 16
            }}
            contentContainerStyle={{paddingBottom: 100}}
            ListHeaderComponent={
                <>
                    <View className="mt-20 justify-center items-center w-full flex-row">
                        <Image source={icons.logo} className="w-12 h-10"/>
                    </View>
                    <View className="my-5">
                        <SearchBar
                            placeholder="Search for movies, TV shows"
                            value={searchQuery}
                            onChangeText={(text: string) => setSearchQuery(text)}
                        />
                    </View>

                    {moviesLoading && <ActivityIndicator size="large" color="#0000ff" className="my-3"/>}

                    {moviesError && <Text className="text-red-500 px-5 my-3">Error: {moviesError.message}</Text>}

                    {!moviesLoading && !moviesError && searchQuery.trim()  && movies?.length > 0 &&
                        <Text className="text-white text-xl font-bold">
                            Search results for {" "}
                            <Text className="text-accent">{searchQuery}</Text>
                        </Text>}
                </>
            }
            ListEmptyComponent={
                !moviesLoading && !moviesError ? (
                    <View className="mt-10 px-5">
                        <Text className="text-gray-500 text-center">
                            {searchQuery.trim() ? "No results found" : "Start searching for movies, TV shows, people, and more"}
                        </Text>
                    </View>
                ): null
            }
        />
    </View>
  );
};

export default Search;
