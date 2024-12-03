import ImgBack from '@/assets/images/ImgBack'
import Product from '@/assets/images/Product'
import Share from '@/assets/images/Share'
import arrBascet from '@/storage/bascet'
import { useLocalSearchParams, useRouter } from 'expo-router/build/hooks'
import { useEffect, useState } from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import storage from '../../storage/index'

function Detail() {
	const router = useRouter()
	const params: any = useLocalSearchParams()
	const [product, setProduct] = useState<any>([])
	const [bascet, setBascet] = useState<any>([])

	useEffect(() => {
		const filterItem = storage.filter(el => el.id == params.id)
		setProduct(filterItem)
	}, [params.id])

	const addToBasket = () => {
		arrBascet.push(product[0])
		router.replace(`/(tabs)/cart`)
	}
	return (
		<View
			style={{
				gap: 30,
			}}
		>
			<View>
				<Product width={'100%'} height={390} />
				<View
					style={{
						position: 'absolute',
						flexDirection: 'row',
						justifyContent: 'space-between',
						width: '90%',
						marginLeft: 30,
						marginTop: 52,
					}}
				>
					<ImgBack onPress={() => router.replace('/(tabs)/products')} />
					<Share />
				</View>
				<View
					style={{
						gap: 14,
						marginBottom: 38,
						width: '90%',
						alignSelf: 'center',
					}}
				>
					<Text style={styles.text}>{product[0]?.title}</Text>
					<Text style={styles.text}>Rs. {product[0]?.price}</Text>
				</View>
				<TouchableOpacity style={styles.btn} onPress={addToBasket}>
					<Text style={styles.text}>Add to Cart</Text>
				</TouchableOpacity>
				<View
					style={{
						gap: 14,
						marginBottom: 38,
						width: '90%',
						alignSelf: 'center',
					}}
				>
					<Text style={{ ...styles.titleSing, color: '#000000' }}>
						More Details
					</Text>
					<Text style={styles.text}>
						Gear up with the latest collections from adidas Originals, Running,
						Football, Training. With over 20,000+ products, you will never run
						out of choice. Grab your favorites now. Secure Payments. 100%
						Original Products. Gear up with adidas.
					</Text>
				</View>
			</View>
		</View>
	)
}
const styles = StyleSheet.create({
	btn: {
		marginTop: 40,
		borderRadius: 40,
		backgroundColor: '#F9EF05',
		alignContent: 'center',
		paddingHorizontal: 100,
		paddingVertical: 16,
		alignItems: 'center',
	},
	text: {
		fontFamily: 'Inter',
		fontSize: 20,
		fontWeight: 600,
	},
	titleSing: {
		fontFamily: 'Inter',
		fontSize: 14,
		fontWeight: 700,
		color: '#000000',
	},
})
export default Detail
