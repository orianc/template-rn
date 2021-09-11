import { News } from '@/Models'

export const GET_NEWS = 'NewsActionType/GET_NEWS'
export interface GetNewsAction {
    type: typeof GET_NEWS
    token: string
}

export const GET_NEWS_SUCCESS = 'NewsActionType/GET_NEWS_SUCCESS'
export interface GetNewsSuccessAction {
    type: typeof GET_NEWS_SUCCESS
    news: News[]
}

export const GET_NEWS_FAILURE = 'AuthActionTypes/GET_NEWS_FAILURE'
export interface GetNewsFailureAction {
    type: typeof GET_NEWS_FAILURE
    error: Error | string
}
export type NewsActions =
    | GetNewsAction
    | GetNewsSuccessAction
    | GetNewsFailureAction
