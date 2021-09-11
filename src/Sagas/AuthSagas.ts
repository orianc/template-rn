import { put, call, takeEvery, all, fork } from 'redux-saga/effects'
import { fetchLogin, fetchRegister } from '@/Services/AuthServices'
import * as actionCreators from '@/ActionCreators/AuthActionCreator'
import * as actionTypes from '@/ActionTypes/AuthActionTypes'

import api from '@/Services'

function* loginCall({ email, password }: actionTypes.LoginAction) {
    const params = {
        email: email,
        password: password,
    }
    // yield console.log('params in loginCall = ', params)
    try {
        const { data } = yield call(fetchLogin, params)

        api.defaults.headers = {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            Authorization: `Bearer ${data.token}`,
        }
        yield put(actionCreators.loginSuccess(data.token, data.refreshToken))
    } catch (error) {
        yield put(actionCreators.loginFailure(error))
    }
}

function* registerCall({
    email,
    password,
    firstname,
    lastname,
}: actionTypes.RegisterAction) {
    const params = {
        email: email,
        password: password,
        firstname: firstname,
        lastname: lastname,
    }
    try {
        const { data } = yield call(fetchRegister, params)
        const { user, token, refreshToken } = data
        api.defaults.headers = {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            Authorization: `Bearer ${data.token}`,
        }
        yield put(actionCreators.registerSuccess(token, refreshToken, user))
    } catch (error) {
        yield put(actionCreators.registerFailure(error))
    }
}

function* watchOnAuth() {
    yield takeEvery(actionTypes.LOGIN, loginCall)
    yield takeEvery(actionTypes.REGISTER, registerCall)
}

export default function* authSagas() {
    yield all([fork(watchOnAuth)])
}
