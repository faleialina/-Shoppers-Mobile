import FontAwesome from '@expo/vector-icons/FontAwesome'
import { Tabs } from 'expo-router'
import 'react-native-reanimated'

export default function TabLayout() {
	return (
		<Tabs screenOptions={{ headerShown: false }}>
			<Tabs.Screen
				name='products'
				options={{
					title: '',
					tabBarIcon: ({ focused }) => (
						<FontAwesome
							name='home'
							size={30}
							color={focused ? 'yellow' : 'black'}
						/>
					),
				}}
			/>
			<Tabs.Screen
				name='user'
				options={{
					title: '',
					tabBarIcon: ({ focused }) => (
						<FontAwesome
							name='user'
							size={30}
							color={focused ? 'yellow' : 'black'}
						/>
					),
				}}
			/>
			<Tabs.Screen
				name='cart'
				options={{
					title: '',
					tabBarIcon: ({ focused }) => (
						<FontAwesome
							name='shopping-basket'
							size={30}
							color={focused ? 'yellow' : 'black'}
						/>
					),
				}}
			/>
		</Tabs>
	)
}
