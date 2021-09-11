import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { LoginScreen, FeedScreen, ArticleScreen } from '@/Containers'

const MainStack = createStackNavigator()
const FeedStack = createStackNavigator()
const ArticleStack = createStackNavigator()

const MainNavigator = () => {
    return (
        <MainStack.Navigator screenOptions={{ headerShown: false }}>
            <MainStack.Screen name="LoginScreen" component={LoginScreen} />
        </MainStack.Navigator>
    )
}
const FeedNavigator = () => {
    return (
        <FeedStack.Navigator screenOptions={{ headerShown: false }}>
            <FeedStack.Screen name="FeedScreen" component={FeedScreen} />
        </FeedStack.Navigator>
    )
}
const ArticleNavigator = () => {
    return (
        <ArticleStack.Navigator screenOptions={{ headerShown: false }}>
            <ArticleStack.Screen
                name="ArticleScreen"
                component={ArticleScreen}
            />
        </ArticleStack.Navigator>
    )
}

const StackNav = {
    MainNavigator,
    FeedNavigator,
    ArticleNavigator,
}
export default StackNav
