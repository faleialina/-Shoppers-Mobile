import ImgBack from '@/assets/images/ImgBack'
import Product from '@/assets/images/Product'
import Share from '@/assets/images/Share'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { useLocalSearchParams, useRouter } from 'expo-router/build/hooks'
import { useEffect, useState } from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import storage from '../../storage/index'

export default function Detail() {
	const params: any = useLocalSearchParams()
	const router = useRouter()
	const [product, setProduct] = useState<any>([])

	useEffect(() => {
		const filterStorage = storage.filter(el => el.id == params.id)
		setProduct(filterStorage)
	}, [params.id])

	const addBascet = async () => {
		try {
			const gettingData: any = await AsyncStorage.getItem('prod')
			const products = JSON.parse(gettingData) || []
			products.push(product[0])
			await AsyncStorage.setItem('prod', JSON.stringify(products))
			console.log('success')
			router.replace('/(tabs)/cart')
		} catch (error: any) {
			console.error(error.message)
		}
	}

	return (
		<>
			<View style={{ gap: 40, alignItems: 'center' }}>
				<View>
					<Product width={'100%'} height={390} />
					<View
						style={{
							position: 'absolute',
							flexDirection: 'row',
							justifyContent: 'space-between',
							width: '90%',
							marginTop: 52,
							marginLeft: 15,
						}}
					>
						<TouchableOpacity onPress={() => router.replace('/products')}>
							<ImgBack />
						</TouchableOpacity>
						<Share />
					</View>
				</View>

				<View
					style={{
						gap: 14,
						marginBottom: 30,
						width: '80%',
						alignSelf: 'center',
					}}
				>
					<Text style={styles.text}>{product[0]?.title}</Text>
					<Text style={styles.text}>Rs.{product[0]?.price}</Text>
				</View>

				<TouchableOpacity style={styles.btn} onPress={addBascet}>
					{' '}
					<Text style={styles.titleSing}>Add to Cart</Text>{' '}
				</TouchableOpacity>

				<View style={{ width: '90%', gap: 16 }}>
					<Text style={{ ...styles.titleSing, color: '#000000' }}>
						More Details
					</Text>
					<Text style={styles.textInfo}>
						Gear up with the latest collections from adidas Originals, Running,
						Football, Training. With over 20,000+ products, you will never run
						out of choice. Grab your favorites now. Secure Payments. 100%
						Original Products. Gear up with adidas.
					</Text>
				</View>
			</View>
		</>
	)
}

const styles = StyleSheet.create({
	text: {
		fontFamily: 'Inter',
		fontSize: 20,
		fontWeight: 600,
	},
	btn: {
		marginTop: 40,
		borderRadius: 40,
		backgroundColor: '#F9EF05',
		alignContent: 'center',
		paddingHorizontal: 100,
		paddingVertical: 16,
		alignItems: 'center',
		width: '70%',
	},
	titleSing: {
		fontFamily: 'Inter',
		fontSize: 14,
		fontWeight: 700,
		color: '#4D1717',
	},
	textInfo: {
		width: '90%',
		marginLeft: 20,
		fontFamily: 'Inter',
		fontSize: 14,
		fontWeight: 300,
		color: '#AAA8A8',
	},
})
