import React from 'react'
import { TouchableOpacity, View, ImageBackground, Text } from 'react-native'
import styles from './NewsCardStyles'
import { FontsTypes } from '@/Theme'

type Props = {
    onPress: () => void
    art: Object
}

const NewsCard = ({ art, onPress = () => {} }: Props) => {
    return (
        <TouchableOpacity style={styles.sizingCard} onPress={onPress}>
            <View style={styles.articleCard} key={art.id}>
                <ImageBackground
                    style={styles.imageNews}
                    source={{ uri: art.image }}
                >
                    <View style={styles.upSetBlue}>
                        <Text style={[styles.newsTitle, FontsTypes.style.h5]}>
                            {art.title}
                        </Text>
                    </View>
                </ImageBackground>
            </View>
        </TouchableOpacity>
    )
}

export default NewsCard
