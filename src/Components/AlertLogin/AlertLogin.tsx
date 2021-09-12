import React from 'react'
import { View, Text } from 'react-native'
import { Colors } from '@/Theme'
import styles from './AlertLoginStyles'

interface Props {
    type: string
}

const AlertLogin = ({ type }: Props) => {
    return (
        <View>
            {type === 'error' && (
                <View
                    style={[
                        styles.alertContainer,
                        { backgroundColor: Colors.error },
                    ]}
                >
                    <Text style={[styles.textAlert]}>Erreur, réessayez...</Text>
                </View>
            )}
            {type === 'success' && (
                <View
                    style={[
                        styles.alertContainer,
                        { backgroundColor: Colors.success },
                    ]}
                >
                    <Text style={[styles.textAlert]}>Parfait !</Text>
                </View>
            )}
        </View>
    )
}

export default AlertLogin
