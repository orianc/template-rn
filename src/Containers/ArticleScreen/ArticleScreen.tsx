import React, { useEffect, useState } from 'react'
import { View, Text } from 'react-native'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
type RootStackParamList = {
    Home: undefined
    LoginScreen: String
    FeedScreen: String
    ArticleScreen: String
}
type Props = NativeStackScreenProps<RootStackParamList, 'ArticleScreen'>

import { NewsCard } from '@/Components'

import './ArticleScreenStyles'

const ArticleScreen = ({ route }: Props) => {
    const [item, setItem] = useState({ id: 'test', title: 'test2' })
    useEffect(() => {
        route ? setItem(route) : null
        console.log('route:', route)
        console.log('item:', item)
    }, [item])

    return (
        <View>
            {item.title && item.body ? (
                // <Text>{item.title}</Text>
                <NewsCard art={item} />
            ) : (
                <Text>Oups ! Y a rien du tout là !</Text>
            )}
        </View>
    )
}

export default ArticleScreen
