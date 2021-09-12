import { StyleSheet } from 'react-native'
import { Colors } from '@/Theme'

export default StyleSheet.create({
    alertContainer: {
        position: 'absolute',
        top: 10,
        left: 10,
        padding: 10,
        opacity: 0.8,
        color: Colors.white,
        borderRadius: 10,
    },
    textAlert: {
        opacity: 1,
        fontSize: 14,
        color: 'white',
    },
})
