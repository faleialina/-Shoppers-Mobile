import Product from '@/assets/images/Product'
import Header from '@/components/header'
import { iProducts } from '@/interfaces'
import { useRouter } from 'expo-router'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import storage from '../../storage'
function Products() {
	const router = useRouter()
	return (
		<View style={{ gap: 62, flex: 1 }}>
			<Header />

			<View
				style={{
					flexDirection: 'row',
					gap: 40,
					flexWrap: 'wrap',
					justifyContent: 'center',
				}}
			>
				{storage.map((el: iProducts) => (
					<TouchableOpacity
						style={styles.item}
						onPress={() => router.replace(`/detail/${el.id}`)}
					>
						<Product width={'100%'} height={112} />
						<Text>{el?.title}</Text>
						<Text>{el?.price}</Text>
					</TouchableOpacity>
				))}
			</View>
		</View>
	)
}
const styles = StyleSheet.create({
	item: {
		width: '35%',
		padding: 15,
		height: 169,
		borderRadius: 30,
		shadowColor: '#000',
		shadowOffset: {
			width: 0,
			height: 4,
		},
		shadowOpacity: 0.25,
		shadowRadius: 4,
		elevation: 4,
	},
})
export default Products
