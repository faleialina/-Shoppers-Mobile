import DeleteImg from '@/assets/images/DeleteImg'
import Product from '@/assets/images/Product'
import Header from '@/components/header'
import { iProducts } from '@/interfaces'
import AsyncStorage from '@react-native-async-storage/async-storage'
import React, { useEffect, useState } from 'react'
import {
	ScrollView,
	StyleSheet,
	Text,
	TouchableOpacity,
	View,
} from 'react-native'
import storage from '../../storage/index'

function Products() {
	const [cart, setCart] = useState<iProducts[]>([])

	const loadCart = async () => {
		const gettingItem = await AsyncStorage.getItem('prod')
		if (!gettingItem) return
		console.log(gettingItem)
		const parsedGwttingItem = JSON.parse(gettingItem)
		setCart(parsedGwttingItem)
		console.log('ok get', parsedGwttingItem)

		if (Array.isArray(parsedGwttingItem)) {
			const res =[]
			for (let i = 0; i < storage.length; i++) {
				for (let j = 0; j < parsedGwttingItem.length; j++) {
					if (storage[i].id==parsedGwttingItem[j].id) {
						res.push(storage[i])
					}
					
				}
				
			}
			setCart(res)
		}
	}

	const deleteFromBasket = async (index: number) => {
		try {
			const gettingData = await AsyncStorage.getItem('prod')
			if (!gettingData) return
			const parsedGettingData = JSON.parse(gettingData)
			if (Array.isArray(parsedGettingData)) {
				const newArray = [
					...parsedGettingData.slice(0, index),
					...parsedGettingData.slice(index + 1),
				]
				await AsyncStorage.setItem('prod', JSON.stringify(newArray))
				setCart(newArray)
			}
		} catch (error: any) {
			console.error(error.message)
		}
	}

	useEffect(() => {
		loadCart()
	}, [])
	return (
		<View style={{ flex: 1, alignItems: 'center', gap: 62 }}>
			<Header />

			<ScrollView style={{ width: '100%' }}>
				<View
					style={{
						gap: 40,
						flexWrap: 'wrap',
						justifyContent: 'center',
						width: '90%',
						marginLeft: '5%',
					}}
				>
					{cart.map((el, index) => (
						<View key={el.id} style={styles.item}>
							{el?.img}
							{/* <Product width={136} height={117} /> */}
							<View style={{ gap: 13 }}>
								<Text style={styles.text}>{el?.title}</Text>
								<Text style={styles.textSmall}>Qty: 1</Text>
								<Text style={styles.text}>Rs. {el?.price}</Text>
							</View>
							<TouchableOpacity
								onPress={() => deleteFromBasket(index)}
								style={{ position: 'absolute', top: 15, right: 15 }}
							>
								<DeleteImg />
							</TouchableOpacity>
						</View>
					))}
				</View>

				<View
					style={{
						gap: 29,
						marginVertical: 62,
						width: '90%',
						marginLeft: '5%',
					}}
				>
					<View style={styles.vector} />
					<View
						style={{ flexDirection: 'row', justifyContent: 'space-between' }}
					>
						<Text style={styles.textTotal}>Total :</Text>
						<Text style={styles.textTotal}>
							Rs. {cart.reduce((sum, el: any) => sum + el.price, 0)}
						</Text>
					</View>
				</View>

				<TouchableOpacity style={styles.btn}>
					{' '}
					<Text style={styles.titleSing}>CHECKOUT</Text>{' '}
				</TouchableOpacity>
			</ScrollView>
		</View>
	)
}

const styles = StyleSheet.create({
	btn: {
		marginTop: 40,
		borderRadius: 40,
		backgroundColor: '#F9EF05',
		alignContent: 'center',
		paddingHorizontal: 10,
		paddingVertical: 16,
		alignItems: 'center',
		width: '90%',
		marginLeft: '5%',
		marginBottom: 50,
	},
	titleSing: {
		fontFamily: 'Inter',
		fontSize: 14,
		fontWeight: 700,
		color: '#000000',
	},
	item: {
		flexDirection: 'row',
		gap: 40,
		alignItems: 'center',
		borderRadius: 30,
		shadowColor: '#000',
		shadowOffset: {
			width: 1,
			height: 4,
		},
		shadowOpacity: 0.25,
		shadowRadius: 10,
		elevation: 4,
	},
	text: {
		fontFamily: 'Inter',
		fontSize: 12,
		fontWeight: 600,
		color: 'black',
	},
	textSmall: {
		fontFamily: 'Inter',
		fontSize: 12,
		fontWeight: 600,
		color: '#827D7D',
	},
	vector: {
		width: '100%',
		height: 1,
		borderRadius: 1,
		borderStyle: 'solid',
		borderWidth: 1,
		borderColor: '#C6C4C4',
	},
	textTotal: {
		fontFamily: 'Inter',
		fontSize: 16,
		fontWeight: 700,
		color: 'black',
	},
})

export default Products
