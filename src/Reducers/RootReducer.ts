import { combineReducers } from 'redux'
import lyricsReducer from './LyricsReducer'
import authReducer from './AuthReducer'
import notificationsReducer from './NotificationsReducer'
import newsReducer from './NewsReducer'

const RootReducer = combineReducers({
    lyrics: lyricsReducer,
    auth: authReducer,
    notifications: notificationsReducer,
    news: newsReducer,
})

export type AppState = ReturnType<typeof RootReducer>

export default RootReducer
