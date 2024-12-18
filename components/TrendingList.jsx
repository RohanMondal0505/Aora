import React from "react";
import { FlatList, StyleSheet, Text } from "react-native";
import { colors } from "../constants";
import TendingItem from "./TendingItem";


const TrendingList = ({ post }) => {
	return (
		<FlatList
			data={post}
			keyExtractor={(item) => item.id}
			horizontal
			showsHorizontalScrollIndicator
			renderItem={({ item }) => <TendingItem data={item} />}
		/>
	);
};

export default TrendingList;

const styles = StyleSheet.create({});
