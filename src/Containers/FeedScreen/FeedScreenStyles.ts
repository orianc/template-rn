import { StyleSheet } from 'react-native'
import { Colors, Fonts } from '@/Theme'

export default StyleSheet.create({
    reload: {
        backgroundColor: 'red',
    },
    articleCard: {
        padding: 9,
        height: 176,
        borderRadius: 10,
        marginTop: 10,
        backgroundColor: Colors.backgroundNews,
    },
    imageNews: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
        zIndex: -1,
        opacity: 0.4,
    },
    newsTitle: {
        color: Colors.white,
        padding: 10,
    },
})
