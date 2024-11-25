import { Link } from "expo-router";
import { useState } from "react";
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";

export default function singup() {
    const [user, setUser] = useState({ name: '', email: '', password: '' })

    const changesUser = (value: any, tag: any) => {
        setUser({ ...user, [tag]: value });
    };

    return (
        <>
            <View style={{ alignItems: 'center', gap: 67, backgroundColor: 'white', flex: 1 }}>
                <View style={{ width: '90%', alignContent: 'center', marginTop: 120, gap: '' }}>
                    <Text style={styles.titleBig}>Welcome!</Text>
                    <Text style={styles.titleSmall}>Create a new account</Text>
                </View>

                <View style={styles.wrapperInp}>
                    <View style={{ gap: 12 }}>
                        <Text style={styles.titleBtn}>Name</Text>
                        <TextInput style={styles.inp} onChangeText={(value) => changesUser(value, 'name')} ></TextInput>
                    </View>
                    <View style={{ gap: 12 }}>
                        <Text style={styles.titleBtn}>Username</Text>
                        <TextInput style={styles.inp} onChangeText={(value) => changesUser(value, 'email')} ></TextInput>
                    </View>
                    <View style={{ gap: 12 }}>
                        <Text style={styles.titleBtn}>Password</Text>
                        <TextInput style={styles.inp} onChangeText={(value) => changesUser(value, 'password')} ></TextInput>
                    </View>
                    <TouchableOpacity onPress={() => console.log(user)} style={styles.btn}><Text style={styles.titleSing}>SIGN IN</Text></TouchableOpacity>
                </View>

                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Text style={[styles.textFooter, { color: '#000000' }]}>Already have an account? </Text>
                    <Link href={'/login'}><Text style={[styles.textFooter, { color: '#120EDB', textDecorationLine: 'underline', }]}>Sign In </Text></Link>
                </View>
            </View >
        </>
    )
}

const styles = StyleSheet.create({
    titleBig: {
        textAlign: 'center',
        fontFamily: 'Inter',
        fontSize: 36,
        fontWeight: 700,
        color: '#000000'
    },
    titleSmall: {
        textAlign: 'center',
        fontFamily: 'Inter',
        fontSize: 14,
        fontWeight: 700,
        color: '#606060'
    },
    wrapperInp: {
        width: '90%',
        alignContent: 'center',
        borderRadius: 20,
        borderColor: '#CECECE',
        borderWidth: 3,
        gap: 24,
        paddingVertical: 36,
        paddingHorizontal: 36
    },
    titleBtn: {
        fontFamily: 'Inter',
        fontSize: 14,
        fontWeight: 700,
        color: '#000000'
    },
    inp: {
        borderRadius: 20,
        borderColor: '#CECECE',
        borderWidth: 2,
        paddingHorizontal: 10,
        paddingVertical: 10
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
        color: '#D04444'
    },
    textFooter: {
        fontFamily: 'Inter',
        fontSize: 14,
        fontWeight: 300,
    }
})