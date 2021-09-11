import React, { useEffect, useState } from 'react'
import {
    View,
    Text,
    ScrollView,
    Image,
    Button,
    ImageBackground,
} from 'react-native'
import { Common } from '@/Theme'
import { useDispatch, useSelector } from 'react-redux'
import { getNews } from '@/ActionCreators/NewsActionCreators'
import styles from './FeedScreenStyles'

interface mapState {
    news: any
    token: string
}

const mapState = ({ news, auth }) => ({
    news: news,
    token: auth.token,
})

const FeedScreen = ({ navigation }: Props) => {
    const dispatch = useDispatch()
    const { news, token } = useSelector(mapState)
    // console.log('token :', token)
    const [reload, setReload] = useState(1)
    const allNews = news.news

    const fetchingNews = () => {
        if (!token) navigation.pop()
        dispatch(getNews(token))
    }

    useEffect(() => {
        console.log('news :', allNews)
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
                <ScrollView>
                    {allNews.length > 0 ? (
                        allNews.map(art => (
                            <View style={styles.articleCard} key={art.id}>
                                <ImageBackground
                                    style={styles.imageNews}
                                    source={{ uri: art.image }}
                                >
                                    {/* setup background blue with opacity, and w100 h100 */}
                                    <View>
                                        <Text>{art.date}</Text>

                                        <Text style={styles.newsTitle}>
                                            {art.title}
                                        </Text>
                                    </View>
                                </ImageBackground>
                            </View>
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
