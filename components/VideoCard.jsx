import React, { useState } from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { verticalScale as rh } from "react-native-size-matters";
import { colors, icons } from "../constants";

const VideoCard = ({ data }) => {
	const [play, setPlay] = useState(false);

	return (
		<View style={styles.MainContainer}>
			<View style={styles.TopContainer}>
				<Image source={{ uri: `https://picsum.photos/${data.id}00` }} resizeMode="contain" style={styles.img} />

				<View style={styles.TextWrapper}>
					<View style={styles.Wrapper}>
						<Text style={styles.heading} numberOfLines={1}>
							VideoCard wefw wfef wwef wefw efw dfvdfvdjvdfv dfvjdfvd fvjdfv df
						</Text>

						<TouchableOpacity style={styles.menuWrapper}>
							<Image source={icons.menu} resizeMode="contain" style={styles.menu} />
						</TouchableOpacity>
					</View>

					<Text style={styles.describe} numberOfLines={1}>
						VideoCard
					</Text>
				</View>
			</View>

			<View style={styles.BottomContainer}>
				{play ? (
					""
				) : (
					<TouchableOpacity activeOpacity={0.8} style={styles.CoverWrapper} onPress={() => setPlay(!play)}>
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
		flexShrink: 0,
        position: "relative",
	},
	CoverWrapper: {
		width: "100%",
		height: "100%",
        borderRadius: rh(7.1),
        overflow: "hidden",
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
});
