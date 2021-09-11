import React, { useEffect, useState } from 'react'
import { View, Text, TextInput, ScrollView, Image } from 'react-native'
import { Common, Images } from '@/Theme'
import { BasicButton } from '../../Components/index'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
type RootStackParamList = {
    Home: undefined
    FeedScreen: { sort: 'latest' | 'top' } | undefined
}
type Props = NativeStackScreenProps<RootStackParamList, 'LoginScreen'>

import styles from './LoginScreenStyles'

const initialState = {
    mail: {},
    password: {},
}

const LoginScreen = ({ navigation }: Props) => {
    const [userMail, setUserMail] = useState(initialState.mail)
    const [userPassword, setUserPassword] = useState(initialState.password)

    useEffect(() => {}, [])

    const pressHandler = () => {
        navigation.push('Actualité')
    }

    return (
        <View style={[Common.basicPage]}>
            <Image
                source={Images.loginBackground}
                style={styles.backgroundImage}
            />
            <ScrollView style={styles.contentContainer}>
                <View style={styles.content}>
                    <View style={styles.sectionTitle}>
                        <Text style={styles.title}>Connexion</Text>
                    </View>
                    <View style={styles.mailContainer}>
                        <Text style={styles.sectionTitle}>Adresse mail</Text>
                        <TextInput
                            style={[styles.input, Common.basicShadow]}
                            placeholder="contact@mail.com"
                            onChangeText={text => setUserMail(text)}
                            textContentType="emailAddress"
                        />
                    </View>
                    <View style={styles.passwordContainer}>
                        <Text style={styles.sectionTitle}>Mot de passe</Text>
                        <TextInput
                            style={[styles.input, Common.basicShadow]}
                            placeholder="password"
                            secureTextEntry={true}
                            textContentType="password"
                            onChangeText={text => setUserPassword(text)}
                        />
                    </View>
                    <View>
                        <BasicButton
                            style={styles.connectButton}
                            onPress={pressHandler}
                            text="Se connecter"
                        />
                    </View>
                </View>
            </ScrollView>
        </View>
    )
}

export default LoginScreen
