import React from "react";
import { FlatList, ScrollView, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const data = [
	{
		id: "1",
		title: "Category",
	},
	{
		id: "2",
		title: "Category",
	},
	{
		id: "3",
		title: "Category",
	},
	{
		id: "4",
		title: "Category",
	},
	{
		id: "5",
		title: "Category",
	},
	{
		id: "6",
		title: "Category",
	},
	{
		id: "7",
		title: "Category",
	},
	{
		id: "8",
		title: "Category",
	},
	{
		id: "9",
		title: "Category",
	},
	{
		id: "10",
		title: "Category",
	},
	{
		id: "11",
		title: "Category",
	},
	{
		id: "12",
		title: "Category",
	},
	{
		id: "13",
		title: "Category",
	},
	{
		id: "14",
		title: "Category",
	},
	{
		id: "15",
		title: "Category",
	},
	{
		id: "16",
		title: "Category",
	},
	{
		id: "17",
		title: "Category",
	},
	{
		id: "18",
		title: "Category",
	},
	{
		id: "19",
		title: "Category",
	},
	{
		id: "20",
		title: "Category",
	},
	{
		id: "21",
		title: "Category",
	},
	{
		id: "22",
		title: "Category",
	},
	{
		id: "23",
		title: "Category",
	},
	{
		id: "24",
		title: "Category",
	},
	{
		id: "25",
		title: "Category",
	},
	{
		id: "26",
		title: "Category",
	},
	{
		id: "27",
		title: "Category",
	},
	{
		id: "28",
		title: "Category",
	},
	{
		id: "29",
		title: "Category",
	},
	{
		id: "30",
		title: "Category",
	},
];
const Bookmark = () => {
	const RenderHorizontalList = ({ items }) => {
		return (
			<FlatList
				data={items}
				keyExtractor={(item, index) => item.id + index}
				horizontal
				renderItem={({ item, index }) => (
					<View style={styles.item}>
						<Text>{`${item.title} ${index + 1}`}</Text>
					</View>
				)}
				showsHorizontalScrollIndicator={false}
			/>
		);
	};

	return (
		<SafeAreaView style={styles.container}>
			<ScrollView style={styles.container}>
				{data.map((category, index) => (
					<RenderHorizontalList key={index} items={data} />
				))}
			</ScrollView>
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#000",
	},
	item: {
		width: 100,
		backgroundColor: "#f0f0f0",
		paddingVertical: 10,
		alignItems: "center",
		justifyContent: "center",
		borderRadius: 5,
		marginRight: 10,
		marginBottom: 10,
	},
});

export default Bookmark;
