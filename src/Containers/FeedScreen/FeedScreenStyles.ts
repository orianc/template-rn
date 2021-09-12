import { StyleSheet } from 'react-native'
import { Colors, FontsTypes, Metrics } from '@/Theme'

export default StyleSheet.create({
    feed: {
        // minHeight: Metrics.heightPercentageToDP('120%'),
        paddingBottom: 50,
    },

    reload: {
        backgroundColor: 'red',
    },
    articleCard: {
        padding: 9,
        height: 176,
        borderRadius: 10,
        marginTop: 10,
    },
    imageNews: {
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
        backgroundColor: Colors.backgroundNews,
        borderRadius: 10,
    },
})
