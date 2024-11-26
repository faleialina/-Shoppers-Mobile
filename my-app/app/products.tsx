import { StyleSheet, Text, View } from 'react-native'

export default function Products() {
	return (
		<>
			<View
				style={{
					alignItems: 'center',
					gap: 67,
					backgroundColor: 'white',
					flex: 1,
				}}
			>
				<View
					style={{
						width: '90%',
						alignContent: 'center',
						marginTop: 120,
						gap: '',
					}}
				>
					<Text style={styles.titleBig}>Products</Text>
				</View>
			</View>
		</>
	)
}

const styles = StyleSheet.create({
	titleBig: {
		textAlign: 'center',
		fontFamily: 'Inter',
		fontSize: 36,
		fontWeight: 700,
		color: '#000000',
	},
})
