import React, { useEffect, useState } from 'react'
import { View, Text, ScrollView, Image, Button } from 'react-native'
import { Common, Images, Fonts } from '@/Theme'
import { useDispatch, useSelector } from 'react-redux'
import { getNews } from '@/ActionCreators/NewsActionCreators'
import styles from './FeedScreenStyles'
import Buttons from '@/Theme/components/Buttons'

interface mapState {
    news: any
    token: string
}

const mapState = ({ news, auth }) => ({
    news: news,
    token: auth.token,
})

const FeedScreen = () => {
    const dispatch = useDispatch()
    const { news, token } = useSelector(mapState)
    console.log('news :', news)
    console.log('token :', token)
    const [reload, setReload] = useState(1)

    const fetchingNews = () => {
        dispatch(getNews(token))
    }

    useEffect(() => {
        fetchingNews()
    }, [reload])

    return (
        <ScrollView style={Common.basicPage}>
            <View>
                <Text>Feed screen</Text>
                <Button
                    title="reload"
                    onPress={() => {
                        setReload(reload + 1)
                    }}
                />
            </View>
        </ScrollView>
    )
}

export default FeedScreen
