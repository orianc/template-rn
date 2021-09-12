import { StyleSheet } from 'react-native'
import { Colors } from '@/Theme'

export default StyleSheet.create({
    sizingCard: {
        borderStartColor: 'black',
        paddingTop: 10,
        paddingBottom: 10,
    },
    articleCard: {
        padding: 9,
        height: 176,
        borderRadius: 10,
        marginTop: 10,
    },
    imageNews: {
        width: '100%',
        height: '100%',
        zIndex: -1,
        opacity: 1,
        resizeMode: 'cover',
    },
    newsTitle: {
        color: Colors.white,
        padding: 10,
        fontWeight: 'bold',
        alignSelf: 'stretch',
        paddingTop: '25%',
    },
    upSetBlue: {
        height: 176,
        backgroundColor: Colors.backgroundNews,
        borderRadius: 10,
    },
})
