import { useVideoPlayer, VideoView } from "expo-video";
import React, { useState } from "react";
import { FlatList, Image, RefreshControl, StyleSheet, TouchableOpacity } from "react-native";
import * as Animatable from "react-native-animatable";
import { verticalScale as rh } from "react-native-size-matters";
import { colors, icons } from "../constants";
import EmptyState from "./EmptyState";

const zoomIn = { 0: { scale: 0.85 }, 1: { scale: 1 } };
const zoomOut = { 0: { scale: 1 }, 1: { scale: 0.85 } };

const TendingItem = ({ item, index, activeItem }) => {
	const [playState, setPlayState] = useState(false);

	const player = useVideoPlayer(
		"https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
		(player) => {
			player.loop = true;
		}
	);

	const handlePlay = () => {
		player.play();
		setPlayState(true);
	};

	return (
		<Animatable.View style={styles.container} animation={activeItem === index ? zoomIn : zoomOut} duration={500}>
			{playState ? (
				<VideoView style={styles.Video} player={player} allowsFullscreen allowsPictureInPicture />
			) : (
				<TouchableOpacity activeOpacity={0.8} onPress={handlePlay} style={styles.touchOpacity}>
					<Image source={{ uri: `https://picsum.photos/1000` }} resizeMode="cover" style={styles.img} />
					<Image source={icons.play} resizeMode="contain" style={styles.PlayImg} />
				</TouchableOpacity>
			)}
		</Animatable.View>
	);
};

const TrendingList = ({ post }) => {
	const [activeItem, setActiveItem] = useState(post[0]);
	const [refreshing, setRefreshing] = useState(false);

	const onRefresh = async () => {
		setRefreshing(true);
		setTimeout(() => {
			setRefreshing(false);
		}, 3000);
	};

	const viewableItemsChanged = ({ viewableItems }) => {
		if (viewableItems.length > 0) setActiveItem(viewableItems[0].key);
	};

	return (
		<FlatList
			data={post}
			keyExtractor={(_, index) => index}
			horizontal
			showsHorizontalScrollIndicator={false}
			renderItem={({ item, index }) => <TendingItem item={item} index={index} activeItem={activeItem} />}
			onViewableItemsChanged={viewableItemsChanged}
			viewabilityConfig={{ itemVisiblePercentThreshold: 100 }}
			contentContainerStyle={{ paddingRight: rh(90) }}
			removeClippedSubviews={false}
			initialNumToRender={5}
			maxToRenderPerBatch={5}
			windowSize={5}
			ListEmptyComponent={<EmptyState title={"No Trending Videos Found"} />}
		/>
	);
};

const styles = StyleSheet.create({
	container: {
		width: rh(106.12),
		height: rh(168.69),
		flexShrink: 0,
		borderRadius: rh(10),
		background: colors.black,
		marginRight: rh(10),
		shadowColor: colors.black,
		shadowOffset: {
			width: 1,
			height: 1,
		},
		shadowOpacity: 0.5,
		shadowRadius: 3,
		elevation: 3,
	},
	touchOpacity: {
		width: "100%",
		height: "100%",
		position: "relative",
		overflow: "hidden",
		borderRadius: rh(10),
	},
	Video: {
		width: "100%",
		height: "100%",
		borderRadius: rh(10),
	},
	img: {
		width: "100%",
		height: "100%",
	},
	PlayImg: {
		width: rh(24),
		height: rh(24),
		position: "absolute",
		top: "50%",
		left: "50%",
		transform: [{ translateX: "-50%" }, { translateY: "-50%" }],
		shadowColor: colors.black,
		shadowOffset: {
			width: 2,
			height: 2,
		},
		shadowOpacity: 0.5,
		shadowRadius: 2,
		elevation: 5,
	},
});

export default TrendingList;
