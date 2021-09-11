import { put, call, takeEvery, all, fork } from 'redux-saga/effects'
import { fetchNews } from '@/Services/NewsServices'
import * as actionCreators from '@/ActionCreators/NewsActionCreators'
import * as actionTypes from '@/ActionTypes/NewsActionType'

function* onGetNews({ token }: actionTypes.GetNewsAction) {
    try {
        const { data } = yield call(fetchNews, token)

        yield put(actionCreators.getNewsSuccess(data))
    } catch (e) {
        yield put(actionCreators.getNewsFailure(e))
    }
}

function* watchOnNews() {
    yield takeEvery(actionTypes.GET_NEWS, onGetNews)
}

export default function* newsSagas() {
    yield all([fork(watchOnNews)])
}
