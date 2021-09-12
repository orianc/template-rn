import React, { useEffect, useState } from 'react'
import { ScrollView, View, Text, TextInput, Image } from 'react-native'
// navigation setup
import { NativeStackScreenProps } from '@react-navigation/native-stack'
type RootStackParamList = {
    Home: undefined
    LoginScreen: String
    FeedScreen: String
}
type Props = NativeStackScreenProps<RootStackParamList, 'LoginScreen'>
// redux
import { useDispatch, useSelector } from 'react-redux'
import { login, register } from '@/ActionCreators/AuthActionCreator'
// services
// import {
//     RegisterService,
// } from '@/Services/Api/Authentification/index'
// theme & style
import { Common, Images } from '@/Theme'
import styles from './LoginScreenStyles'
// components
import { BasicButton } from '../../Components/index'
import AlertLogin from '@/Components/AlertLogin/AlertLogin'

const mapState = ({ auth }: any) => ({
    AuthState: auth,
})

interface initialState {
    email: String
    password: String
    uuid: String
}
const initialState = {
    email: '',
    password: '',
    uuid: '',
}
const RegisterInitialState = {
    email: '',
    password: '',
    firstName: '',
    lastName: '',
}

const LoginScreen = ({ navigation }: Props) => {
    const { AuthState } = useSelector(mapState)
    const dispatch = useDispatch()

    // console.log(AuthState)

    const [credential, setCredential] = useState(initialState)
    const [registerInfo, setRegisterInfo] = useState(RegisterInitialState)
    const [toggler, setToggler] = useState('login')
    const [displayAlert, setDisplayAlert] = useState('')

    const { email, password } = credential
    const { firstName, lastName } = registerInfo

    useEffect(() => {
        if (AuthState.token) {
            return navigation.push('Actualité')
        }
    }, [AuthState])

    const handleRegister = async () => {
        try {
            var uuid = Math.random().toString()
            await dispatch(register(email, password, firstName, lastName, uuid))
            if (AuthState.token) {
                setDisplayAlert('success')
                setCredential(initialState)
                return navigation.push('Actualité')
            }
            setDisplayAlert('error')
            return setTimeout(() => {
                setDisplayAlert('')
            }, 3000)
        } catch (e) {
            console.error(e)
        }
    }

    const handleLogin = async () => {
        try {
            var uuid = Math.random().toString()
            await dispatch(login(email, password, uuid))
            if (AuthState.token) {
                setDisplayAlert('success')
                setCredential(initialState)
                return navigation.push('Actualité')
            }
            setDisplayAlert('error')
            return setTimeout(() => {
                setDisplayAlert('')
            }, 3000)
        } catch (e) {
            console.log('error on handleLogin', e)
        }
    }

    return (
        <View style={[Common.basicPage]}>
            <Image
                source={Images.loginBackground}
                style={styles.backgroundImage}
            />
            {displayAlert === 'success' || 'error' ? (
                <AlertLogin type={displayAlert} />
            ) : null}
            <View style={styles.contentContainer}>
                <View style={styles.content}>
                    <View
                        style={[
                            styles.sectionTitle,
                            { display: 'flex', flexDirection: 'row' },
                        ]}
                    >
                        <Text
                            style={
                                toggler === 'login'
                                    ? [styles.title, { width: '50%' }]
                                    : [
                                          styles.title,
                                          { width: '50%', opacity: 0.4 },
                                      ]
                            }
                            onPress={() => setToggler('login')}
                        >
                            Connexion
                        </Text>
                        <Text
                            style={
                                toggler === 'register'
                                    ? [styles.title, { width: '50%' }]
                                    : [
                                          styles.title,
                                          { width: '50%', opacity: 0.4 },
                                      ]
                            }
                            onPress={() => setToggler('register')}
                        >
                            Inscription
                        </Text>
                    </View>
                    {toggler === 'login' && (
                        <>
                            <View style={styles.mailContainer}>
                                <Text style={styles.sectionTitle}>
                                    Adresse mail
                                </Text>
                                <TextInput
                                    style={[styles.input, Common.basicShadow]}
                                    placeholder="contact@mail.com"
                                    onChangeText={text =>
                                        setCredential({
                                            ...credential,
                                            email: text,
                                        })
                                    }
                                    textContentType="emailAddress"
                                />
                            </View>
                            <View style={styles.passwordContainer}>
                                <Text style={styles.sectionTitle}>
                                    Mot de passe
                                </Text>
                                <TextInput
                                    style={[styles.input, Common.basicShadow]}
                                    placeholder="password"
                                    secureTextEntry={true}
                                    textContentType="password"
                                    onChangeText={text =>
                                        setCredential({
                                            ...credential,
                                            password: text,
                                        })
                                    }
                                />
                            </View>
                            <BasicButton
                                style={styles.connectButton}
                                onPress={() => handleLogin()}
                                text="Se connecter"
                            />
                        </>
                    )}
                </View>
                <View style={styles.content}>
                    {toggler === 'register' && (
                        <ScrollView style={styles.scrollContent}>
                            <View style={styles.mailContainer}>
                                <Text style={styles.sectionTitle}>
                                    Adresse mail
                                </Text>
                                <TextInput
                                    style={[styles.input, Common.basicShadow]}
                                    placeholder="contact@mail.com"
                                    onChangeText={text =>
                                        setCredential({
                                            ...credential,
                                            email: text,
                                        })
                                    }
                                    textContentType="emailAddress"
                                />
                            </View>
                            <View style={styles.passwordContainer}>
                                <Text style={styles.sectionTitle}>
                                    Mot de passe
                                </Text>
                                <TextInput
                                    style={[styles.input, Common.basicShadow]}
                                    placeholder="password"
                                    secureTextEntry={true}
                                    textContentType="password"
                                    onChangeText={text =>
                                        setCredential({
                                            ...credential,
                                            password: text,
                                        })
                                    }
                                />
                            </View>
                            <View style={styles.passwordContainer}>
                                <Text style={styles.sectionTitle}>Prénom</Text>
                                <TextInput
                                    style={[styles.input, Common.basicShadow]}
                                    placeholder="prénom"
                                    textContentType="name"
                                    onChangeText={text =>
                                        setRegisterInfo({
                                            ...registerInfo,
                                            firstName: text,
                                        })
                                    }
                                />
                            </View>
                            <View style={styles.passwordContainer}>
                                <Text style={styles.sectionTitle}>Nom</Text>
                                <TextInput
                                    style={[styles.input, Common.basicShadow]}
                                    placeholder="Nom"
                                    textContentType="familyName"
                                    onChangeText={text =>
                                        setRegisterInfo({
                                            ...registerInfo,
                                            lastName: text,
                                        })
                                    }
                                />
                                {/* pourquoi ce button ne veut plus apparaitre omg ! */}
                            </View>
                            <BasicButton
                                text="S'inscrire"
                                style={styles.connectButton}
                                onPress={() => handleRegister()}
                            />
                        </ScrollView>
                    )}
                </View>
            </View>
        </View>
    )
}

export default LoginScreen
