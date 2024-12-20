import { useVideoPlayer, VideoView } from "expo-video";
import React, { useState } from "react";
import { Alert, Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { verticalScale as rh } from "react-native-size-matters";
import { colors, icons } from "../constants";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import FontAwesome from "@expo/vector-icons/FontAwesome";

const VideoCard = ({ data }) => {
	const [threeDot, setThreeDot] = useState(false);
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

	const handelSave = () => {
		setThreeDot(!threeDot);
		Alert.alert("Saved");
	};

	const handelDelete = () => {
		setThreeDot(!threeDot);
		Alert.alert("Delete");
	};

	return (
		<View style={styles.MainContainer}>
			<View style={styles.TopContainer}>
				<Image source={{ uri: `https://picsum.photos/${data.id}00` }} resizeMode="contain" style={styles.img} />

				<View style={styles.TextWrapper}>
					<View style={styles.Wrapper}>
						<Text style={styles.heading} numberOfLines={1}>
							VideoCard wefw wfef wwef wefw efw dfvdfvdjvdfv dfvjdfvd fvjdfv df
						</Text>

						<TouchableOpacity style={styles.menuWrapper} onPress={() => setThreeDot(!threeDot)}>
							<Image source={icons.menu} resizeMode="contain" style={styles.menu} />
						</TouchableOpacity>

						<View style={[styles.threeDot, { display: threeDot ? "flex" : "none" }]}>
							<View style={styles.threeDotBtnWrap}>
								<TouchableOpacity style={[styles.threeDotBtn]} activeOpacity={0.7} onPress={handelSave}>
									<FontAwesome name="bookmark" size={rh(8.5)} color="#fff" />
									<Text style={styles.threeDotText}>Save</Text>
								</TouchableOpacity>

								<TouchableOpacity style={[styles.threeDotBtn]} activeOpacity={0.7} onPress={handelDelete}>
									<MaterialIcons name="delete" size={rh(8.5)} color="#fff" />
									<Text style={styles.threeDotText}>Delete</Text>
								</TouchableOpacity>
							</View>
						</View>
					</View>

					<Text style={styles.describe} numberOfLines={1}>
						VideoCard
					</Text>
				</View>
			</View>

			<View style={styles.BottomContainer}>
				{playState ? (
					<View style={styles.VideoWrapper}>
						<VideoView style={styles.Video} player={player} allowsFullscreen allowsPictureInPicture />
					</View>
				) : (
					<TouchableOpacity activeOpacity={0.8} style={styles.CoverWrapper} onPress={handlePlay}>
						<Image source={{ uri: `https://picsum.photos/100${data.id}` }} resizeMode="cover" style={styles.cover} />
						<Image source={icons.play} resizeMode="contain" style={styles.play} />
					</TouchableOpacity>
				)}
			</View>
		</View>
	);
};

export default VideoCard;

const styles = StyleSheet.create({
	MainContainer: {
		paddingHorizontal: rh(17),
		gap: rh(13.5),
		marginBottom: rh(21.3),
	},
	TopContainer: {
		gap: rh(6),
		flexDirection: "row",
		zIndex: 2,
	},
	img: {
		height: rh(32.7),
		width: rh(32.7),
		borderWidth: rh(2),
		borderRadius: rh(5.69),
		borderColor: colors.primary.shad3,
	},
	TextWrapper: { flex: 1, gap: rh(1.42) },
	Wrapper: {
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		gap: rh(26),
	},
	menuWrapper: { width: rh(14.9), height: rh(16.3) },
	menu: { width: "100%", height: "100%" },
	heading: {
		flex: 1,
		color: colors.white,
		fontSize: rh(9.9),
		fontWeight: "600",
	},
	describe: {
		color: colors.gray.shad1,
		fontSize: rh(8.5),
		fontWeight: "400",
	},
	BottomContainer: {
		width: "100%",
		height: rh(180),
		borderRadius: rh(7.1),
		zIndex: 1,
		flexShrink: 0,
		position: "relative",
		shadowColor: colors.black,
		shadowOffset: {
			width: 1,
			height: 1,
		},
		shadowOpacity: 0.5,
		shadowRadius: 3,
		elevation: 3,
		backgroundColor: colors.black,
	},
	CoverWrapper: {
		width: "100%",
		height: "100%",
		borderRadius: rh(7.1),
		overflow: "hidden",
	},
	VideoWrapper: {
		width: "100%",
		height: "100%",
		borderRadius: rh(7.1),
		overflow: "hidden",
	},
	Video: {
		width: "100%",
		height: "100%",
	},
	cover: {
		width: "100%",
		height: "100%",
	},
	play: {
		width: rh(30),
		height: rh(30),
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
	threeDot: {
		width: rh(79),
		height: rh(45.5),
		position: "absolute",
		top: rh(20),
		right: 0,
		shadowColor: colors.black,
		shadowOffset: {
			width: 1,
			height: 1,
		},
		shadowOpacity: 0.5,
		shadowRadius: 3,
		elevation: 3,
	},
	threeDotBtnWrap: {
		flex: 1,
		backgroundColor: colors.secondary.shad3,
		borderRadius: rh(4),
		overflow: "hidden",
	},
	threeDotBtn: {
		backgroundColor: colors.secondary.shad3,
		display: "flex",
		flex: 1,
		width: "100%",
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "center",
		gap: rh(3.5),
	},
	threeDotText: {
		color: colors.gray.shad1,
		fontSize: rh(8.5),
		fontWeight: "600",
	},
});
