import {all} from 'redux-saga/effects';
import groupSaga from "./group/groupSaga.js";
import boardSaga from "./board/boardSaga.js";
import authSaga from "./auth/authSaga.js";
import {listSaga} from "./list/listSaga.js";
import groupMemberSaga from "./member/groupMemberSaga.js";
import userSaga from "./user/userSaga.js";
import cardSaga from "./card/cardSaga.js";
import labelSaga from "./label/labelSaga.js";

export default function* rootSaga() {
    yield all([
        groupSaga(),
        boardSaga(),
        authSaga(),
        groupMemberSaga(),
        listSaga(),
        userSaga(),
        cardSaga(),
        labelSaga(),
    ])
}