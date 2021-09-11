import React from 'react'
import { View, Text, ScrollView, Image } from 'react-native'
import { Common, Images, Fonts } from '@/Theme'

import styles from './FeedScreenStyles'

const FeedScreen = () => {
    return (
        <ScrollView style={Common.basicPage}>
            <View>
                <Text>Feed screen</Text>
            </View>
        </ScrollView>
    )
}

export default FeedScreen
