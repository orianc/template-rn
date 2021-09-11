import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'
import { navigationRef } from '@/Navigators/Root'
import { Image, StatusBar, View } from 'react-native'
import { Colors, Fonts, Images } from '@/Theme'
import Layout from '@/Theme/Layout'
import StackNav from '@/Navigators/Main'
const { MainNavigator, FeedNavigator, ArticleNavigator } = StackNav
const Stack = createStackNavigator()

const ApplicationNavigator = () => {
    return (
        <View style={Layout.fill}>
            <NavigationContainer ref={navigationRef}>
                <StatusBar barStyle={'dark-content'} />
                <Stack.Navigator
                    screenOptions={{
                        headerStyle: {
                            backgroundColor: Colors.background,
                            height: 100,
                        },
                        headerTitleAlign: 'center',
                        headerTitleStyle: [Fonts.titleRegular],
                        headerBackImage: () => (
                            <Image source={Images.leftArrow} />
                        ),
                    }}
                >
                    <Stack.Screen
                        name="Main"
                        component={MainNavigator}
                        options={{
                            headerShown: false,
                            animationEnabled: false,
                        }}
                    />
                    <Stack.Screen
                        name="Actualité"
                        component={FeedNavigator}
                        options={{
                            animationEnabled: true,
                        }}
                    />
                    <Stack.Screen
                        name="Article"
                        component={ArticleNavigator}
                        options={{
                            animationEnabled: false,
                        }}
                    />
                </Stack.Navigator>
            </NavigationContainer>
        </View>
    )
}

export default ApplicationNavigator
