import { useLocalSearchParams } from "expo-router";
import React, { useState } from "react";
import { FlatList, Image, RefreshControl, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { verticalScale as rh } from "react-native-size-matters";
import { colors, images } from "../../constants";
import EmptyState from "../../components/EmptyState";
import SearchField from "../../components/SearchField";
import VideoCard from "../../components/VideoCard";

const Search = () => {
	const { query } = useLocalSearchParams();
	const [data, setData] = useState([
		{ id: 1 },
		{ id: 2 },
		{ id: 3 },
		{ id: 4 },
		{ id: 5 },
		{ id: 6 },
		{ id: 7 },
		{ id: 8 },
		{ id: 9 },
		{ id: 10 },
	]);
	const [refreshing, setRefreshing] = useState(false);

	const onRefresh = async () => {
		setRefreshing(true);
		setTimeout(() => {
			setRefreshing(false);
		}, 3000);
	};

	return (
		<SafeAreaView style={styles.SafeAreaView}>
			<FlatList
				data={data}
				keyExtractor={(item) => item.id}
				renderItem={({ item }) => <VideoCard data={item} />}
				ListHeaderComponent={() => (
					<View style={styles.ListHeaderComponent}>
						<View style={styles.TopComponent}>
							<View>
								<Text style={styles.welcome}>Search results</Text>
								<Text style={styles.name} numberOfLines={1}>{query}</Text>
							</View>
							<Image source={images.logoSmall} resizeMode="contain" style={styles.logo} />
						</View>

						<SearchField placeholder={"Search for a video topic"} value={query} />
					</View>
				)}
				ListEmptyComponent={
					<EmptyState
						title={"No Videos Found"}
						subTitle={"Be the first one to upload a video"}
						buttonText={"Create Video"}
					/>
				}
				refreshControl={
					<RefreshControl
						colors={[colors.primary.shad1, colors.secondary.shad2]}
						tintColor={colors.primary.shad1}
						refreshing={refreshing}
						title="Refreshing..."
						titleColor={colors.primary.shad1}
						onRefresh={onRefresh}
					/>
				}
				removeClippedSubviews={false}
				initialNumToRender={5}
				maxToRenderPerBatch={5}
				windowSize={5}
			/>
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({
	SafeAreaView: { flex: 1, backgroundColor: colors.secondary.shad1 },
	ListHeaderComponent: {
		paddingTop: rh(31.3),
		paddingHorizontal: rh(17),
		paddingBottom: rh(26),
	},
	TopComponent: {
		width: "100%",
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-between",
		marginBottom: rh(14.23),
	},
	welcome: {
		fontSize: rh(9.95),
		color: colors.gray.shad1,
		fontWeight: "500",
	},
	name: {
		fontSize: rh(17),
		color: colors.white,
		fontWeight: "600",
	},
	logo: {
		width: rh(21.3),
		height: rh(24.3),
	},
	tv: {
		fontSize: rh(9.95),
		fontWeight: "400",
		color: colors.gray.shad1,
		marginBottom: rh(4.98),
	},
});

export default Search;
