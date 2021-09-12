import React, { useEffect, useState } from 'react'
import { View, Text, ScrollView, Button, ImageBackground } from 'react-native'
import { Common, FontsTypes } from '@/Theme'
import { useDispatch, useSelector } from 'react-redux'
import { getNews } from '@/ActionCreators/NewsActionCreators'
import styles from './FeedScreenStyles'
import { TouchableOpacity } from 'react-native-gesture-handler'
import NewsCard from '@/Components/NewsCard/NewsCard'

import { NativeStackScreenProps } from '@react-navigation/native-stack'
type RootStackParamList = {
    Home: undefined
    LoginScreen: String
    FeedScreen: String
    ArticleScreen: String
}
type Props = NativeStackScreenProps<RootStackParamList, 'FeedScreen'>

interface FeedProps {
    news: any
    auth: Object
    token: string
}

const mapState = ({ news, auth }: FeedProps) => ({
    news: news,
    token: auth.token,
})

const FeedScreen = ({ navigation }: Props) => {
    const dispatch = useDispatch()
    const { news, token } = useSelector(mapState)
    const [reload, setReload] = useState(1)
    const allNews = news.news

    // console.log('news :', allNews)
    // console.log('token :', token)

    const fetchingNews = () => {
        if (!token) navigation.goBack()
        dispatch(getNews(token))
    }

    useEffect(() => {
        fetchingNews()
    }, [reload])

    return (
        <ScrollView style={Common.basicPage}>
            <View>
                <View style={styles.reload}>
                    <Button
                        title="reload"
                        onPress={() => {
                            setReload(reload + 1)
                        }}
                    />
                </View>
                <ScrollView style={styles.feed}>
                    {allNews.length > 0 ? (
                        allNews.map(art => (
                            <NewsCard
                                art={art}
                                onPress={() =>
                                    navigation.navigate({
                                        name: 'Article',
                                        params: { data: 'test' },
                                    })
                                }
                            />
                        ))
                    ) : news.loading ? (
                        <View>
                            <Text>chargement...</Text>
                        </View>
                    ) : (
                        <View>
                            <Text>Grève des actus dans le monde !</Text>
                        </View>
                    )}
                </ScrollView>
            </View>
        </ScrollView>
    )
}

export default FeedScreen
