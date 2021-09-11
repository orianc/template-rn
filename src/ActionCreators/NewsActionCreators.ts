import * as actions from '@/ActionTypes/NewsActionType'
import { News } from '@/Models'

export function getNews(token: string): actions.GetNewsAction {
    return {
        type: actions.GET_NEWS,
        token,
    }
}

export function getNewsSuccess(news: News[]): actions.GetNewsSuccessAction {
    return {
        type: actions.GET_NEWS_SUCCESS,
        news,
    }
}

export function getNewsFailure(
    error: Error | string,
): actions.GetNewsFailureAction {
    return {
        type: actions.GET_NEWS_FAILURE,
        error,
    }
}
