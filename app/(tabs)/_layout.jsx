import { Tabs } from "expo-router";
import React from "react";
import { Image, Text, View } from "react-native";
import { verticalScale as rh, scale as rw } from "react-native-size-matters";
import { colors, icons } from "../../constants";

const TabIcon = ({ name, icon, color, focused }) => {
	return (
		<View
			style={{
				width: rw(48),
				alignItems: "center",
				justifyContent: "center",
				gap: rh(2),
				position: "relative",
				top: rh(11),
			}}>
			<Image source={icon} resizeMode="contain" tintColor={color} style={{ width: rw(17), height: rw(17) }} />
			<Text style={{ color: color, fontSize: rh(8.5), fontWeight: focused ? "600" : "400", color: color }}>{name}</Text>
		</View>
	);
};

const TabsLayout = () => {
	return (
		<>
			<Tabs
				screenOptions={{
					tabBarShowLabel: false,
					tabBarActiveTintColor: colors.primary.shad1,
					tabBarInactiveTintColor: colors.gray.shad1,
					tabBarStyle: {
						backgroundColor: colors.secondary.shad1,
						height: rh(59.7),
						borderTopWidth: rh(0.7),
						borderTopColor: colors.secondary.shad2,
					},
				}}>
				<Tabs.Screen
					name="home"
					options={{
						title: "Home",
						headerShown: false,
						tabBarIcon: ({ color, focused }) => (
							<TabIcon name="Home" icon={icons.home} color={color} focused={focused} />
						),
					}}
				/>

				<Tabs.Screen
					name="create"
					options={{
						title: "Create",
						headerShown: false,
						tabBarIcon: ({ color, focused }) => (
							<TabIcon name="Create" icon={icons.plus} color={color} focused={focused} />
						),
					}}
				/>

				<Tabs.Screen
					name="bookmark"
					options={{
						title: "Bookmark",
						headerShown: false,
						tabBarIcon: ({ color, focused }) => (
							<TabIcon name="Bookmark" icon={icons.bookmark} color={color} focused={focused} />
						),
					}}
				/>

				<Tabs.Screen
					name="profile"
					options={{
						title: "Profile",
						headerShown: false,
						tabBarIcon: ({ color, focused }) => (
							<TabIcon name="Profile" icon={icons.profile} color={color} focused={focused} />
						),
					}}
				/>
			</Tabs>
		</>
	);
};

export default TabsLayout;
