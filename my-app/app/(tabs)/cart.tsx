import DeleteImg from '@/assets/images/DeleteImg'
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

function Cart() {
	const [cart, setCart] = useState<iProducts[]>([])

	const loadCart = async () => {
		const exitingProducts = await AsyncStorage.getItem('prod')
		const parsed = (exitingProducts && JSON.parse(exitingProducts)) || []
		const result: iProducts[] = []

		parsed.forEach((parsedItem: iProducts) => {
			const existingProduct = result.find(item => item.id === parsedItem.id)
			if (existingProduct) {
				existingProduct.Qty += parsedItem.Qty
			} else {
				const productToAdd = storage.find(item => item.id === parsedItem.id)
				if (productToAdd) {
					result.push({ ...productToAdd, Qty: parsedItem.Qty })
				}
			}
		})

		setCart(result)
		console.log(result)
	}

	const deleteFromCart = async (index: number) => {
		const updatedCart = cart.filter((_, i) => i !== index)

		setCart(updatedCart)

		const simplifiedCart = updatedCart.map(({ id, Qty, title, price }) => ({
			id,
			Qty,
			title,
			price,
		}))

		try {
			await AsyncStorage.setItem('prod', JSON.stringify(simplifiedCart))
		} catch (error) {
			console.error('Ошибка при сохранении в AsyncStorage:', error)
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
							{el?.img
								? React.cloneElement(el.img, {
										width: 136,
										height: 117,
										style: { borderRadius: 25 },
								  })
								: null}

							<View style={{ gap: 13 }}>
								<Text style={styles.text}>{el?.title}</Text>
								<Text style={styles.textSmall}>Qty: {el?.Qty}</Text>
								<Text style={styles.text}>Rs. {el?.price}</Text>
							</View>
							<View>
								<TouchableOpacity onPress={() => deleteFromCart(index)}>
									<DeleteImg />
								</TouchableOpacity>
							</View>
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
							Rs. {cart.reduce((sum, el: any) => sum + el.price * el.Qty, 0)}
						</Text>
					</View>
				</View>

				<TouchableOpacity style={styles.btn}>
					<Text style={styles.titleSing}>CHECKOUT</Text>
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
		gap: 50,
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

export default Cart
