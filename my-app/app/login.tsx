import { Link, useRouter } from 'expo-router'
import { useState } from 'react'
import {
	StyleSheet,
	Text,
	TextInput,
	TouchableOpacity,
	View,
} from 'react-native'

export default function Login() {
	const inputElems = [
		{ label: 'Username', value: 'email', isSecure: false },
		{ label: 'Password', value: 'password', isSecure: true },
	]

	const [user, setUser] = useState({ email: '', password: '' })

	const router = useRouter()
	const response = (value: any, tag: any) => {
		setUser({ ...user, [tag]: value })
	}

	const authentication = () => {
		try {
			if (!user.email || !user.password) throw new Error('пустое значение')
			if (user.password.length < 8) throw new Error('пароль менее 8 символов')
				console.log(user)
			router.push('/products')
		} catch (error: any) {
			console.error(error.message)
		}
	}

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
						marginLeft: 30,
						marginTop: 120,
					}}
				>
					<Text style={styles.titleBig}>Welcome Back !</Text>
					<Text style={styles.titleSmall}>Login with Username & password</Text>
				</View>
				<View style={styles.wrapperInp}>
					{inputElems.map((elem, index) => (
						<View key={index} style={{ gap: 12 }}>
							<Text style={styles.titleBtn}>{elem.label}</Text>
							<TextInput
								style={styles.inp}
								secureTextEntry={elem.isSecure}
								onChangeText={value => response(value, elem.value)}
							/>
						</View>
					))}
					<TouchableOpacity
						style={styles.btn}
						onPress={authentication}
					>
						<Text style={styles.titleSing} >
							SIGN IN
						</Text>
					</TouchableOpacity>
				</View>

				<View style={{ flexDirection: 'row', alignItems: 'center' }}>
					<Text
						style={{
							fontFamily: 'Inter',
							fontSize: 14,
							fontWeight: 300,
							color: '#000000',
						}}
					>
						Create a new account?{' '}
					</Text>
					<Link href={'/singup'}>
						<Text
							style={{
								fontFamily: 'Inter',
								fontSize: 14,
								fontWeight: 300,
								color: '#120EDB',
								textDecorationLine: 'none',
							}}
						>
							Sign Up
						</Text>
					</Link>
				</View>
			</View>
		</>
	)
}

const styles = StyleSheet.create({
	titleBig: {
		fontFamily: 'Inter',
		fontSize: 24,
		fontWeight: 400,
		color: '#000000',
	},
	titleSmall: {
		fontFamily: 'Inter',
		fontSize: 12,
		fontWeight: 400,
		color: '#606060',
	},
	wrapperInp: {
		width: '90%',
		alignContent: 'center',
		borderRadius: 20,
		borderColor: '#606060',
		borderWidth: 1,
		gap: 24,
		paddingVertical: 36,
		paddingHorizontal: 36,
	},
	titleBtn: {
		fontFamily: 'Inter',
		fontSize: 14,
		fontWeight: 700,
		color: '#606060',
	},
	inp: {
		borderRadius: 20,
		borderColor: '#606060',
		borderWidth: 2,
		paddingHorizontal: 10,
		paddingVertical: 10,
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
		color: '#D04444',
	},
})
