import {all} from 'redux-saga/effects';
import groupSaga from "./group/groupSaga.js";
import boardSaga from "./board/boardSaga.js";
import authSaga from "./auth/authSaga.js";
import memberGroupSaga from "./member/memberGroupSaga.js";
import {listSaga} from "./list/listSaga.js";
import cardSaga from "./card/cardSaga.js";

export default function* rootSaga() {
    yield all([
        groupSaga(),
        boardSaga(),
        authSaga(),
        memberGroupSaga(),
        listSaga(),
        cardSaga(),
    ])
}