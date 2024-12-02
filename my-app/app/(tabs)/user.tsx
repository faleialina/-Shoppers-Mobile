import ImgBack from '@/assets/images/ImgBack'
import Header from '@/components/header'
import { useRouter } from 'expo-router'
import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'

function Products() {
	const router = useRouter()

	return (
		<View style={{ gap: '30%', flex: 1 }}>
			<Header />
			<View style={styles.wrapper}>
				<Text style={styles.text}>Hello SIlva</Text>
				<TouchableOpacity style={styles.btn}>
					{' '}
					<Text style={styles.titleSing}>SIGN OUT</Text>{' '}
				</TouchableOpacity>
			</View>
			<TouchableOpacity
				style={{ marginLeft: '10%' }}
				onPress={() => router.back()}
			>
				<ImgBack />
			</TouchableOpacity>
		</View>
	)
}

const styles = StyleSheet.create({
	wrapper: {
		width: '70%',
		alignItems: 'center',
		marginHorizontal: 'auto',
		gap: 86,
	},
	text: {
		fontFamily: 'Inter',
		fontWeight: 700,
		fontSize: 32,
		color: '#000',
	},
	btn: {
		borderRadius: 40,
		backgroundColor: '#F9EF05',
		alignContent: 'center',
		paddingHorizontal: 100,
		paddingVertical: 16,
		alignItems: 'center',
	},
	titleSing: {
		fontFamily: 'Inter',
		fontSize: 14,
		fontWeight: 700,
		color: '#000000',
	},
})

export default Products
