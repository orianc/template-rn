import * as actions from '@/ActionTypes/NewsActionType'
import { News } from '@/Models'

export interface NewsState {
    news?: News[]
    isLoading?: boolean
    error?: any
}

const initialState: NewsState = {
    news: [],
    isLoading: false,
    error: null,
}

export default function newsReducer(
    state: NewsState = initialState,
    action: actions.NewsActions,
): NewsState {
    switch (action.type) {
        case actions.GET_NEWS:
            return {
                ...state,
                isLoading: true,
                error: null,
                news: [],
            }
        case actions.GET_NEWS_SUCCESS:
            return {
                ...state,
                isLoading: false,
                error: null,
                news: action.news,
            }
        case actions.GET_NEWS_FAILURE:
            return {
                ...state,
                isLoading: false,
                error: action.error,
                news: [],
            }
        default:
            return state
    }
}
