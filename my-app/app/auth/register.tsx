import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/core';
import { router } from 'expo-router';
import { API_KEY } from '@env';

type RootStackParamList = {
    "(tabs)/index": { string: string } | undefined;
};

const SignUpScreen = () => {
    const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [userName, setUserName] = useState('');

    async function handleSignUp() {
        const donnees = { "email": email, "password": password, "username": userName };
        try {
            const response = await fetch("https://snapchat.epidoc.eu/user", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "X-API-Key": API_KEY,
                },
                body: JSON.stringify(donnees),
            });
            if (response.status === 400) {
                Alert.alert("Erreur lors de l'inscription !")
            } else {
                router.replace('auth/login');
            }
            return response.json();
        } catch (error) {
            console.log("Erreur lors de l'inscription", error)
        }
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Sign Up</Text>
            <TextInput
                value={email}
                style={styles.input}
                placeholder="Email"
                onChangeText={setEmail}
            />
            <TextInput
                value={password}
                style={styles.input}
                placeholder="Password"
                secureTextEntry={true}
                onChangeText={setPassword}
            />
            <TextInput
                value={userName}
                style={styles.input}
                placeholder="Username"
                onChangeText={setUserName}
            />
            <Button title="Sign Up" onPress={handleSignUp} />
            <View style={styles.button1}>
                <Button
                    title="Home"
                    onPress={() => navigation.navigate('(tabs)/index')}
                />
            </View>
        </View>
    );
};


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontSize: 24,
        marginBottom: 20,
    },
    button1: {
        marginTop: 150,
    },
    input: {
        width: 200,
        height: 40,
        borderWidth: 1,
        borderRadius: 5,
        marginBottom: 15,
        paddingHorizontal: 10,
    },
});

export default SignUpScreen;
