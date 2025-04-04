import axiosInstance from "../../resources/axiosConfig.js";
import {call, put, takeLatest} from "redux-saga/effects";
import {
    GET_GROUP_LIST_SUCCESS,
    GET_GROUP_INFO_SUCCESS,
    ADD_GROUP_SUCCESS,
    GET_GROUP_LIST, GET_GROUP_INFO, ADD_GROUP, DELETE_GROUP, DELETE_GROUP_SUCCESS, EDIT_GROUP_SUCCESS, EDIT_GROUP
} from "../../redux/group/groupAction.js";
//
////// Các câu gọi API để hết trong saga
//
function* getGroupList() {
    try {
        const data = yield call (axiosInstance.get, "/api/group");
        yield put({type: GET_GROUP_LIST_SUCCESS, payload: data});
    } catch (err) {
        console.error(err);
    }
}

function* getGroupInfo(action) {
    try {
        const data = yield call (axiosInstance.get, "/api/group/" + action.payload);
        yield put({type: GET_GROUP_INFO_SUCCESS, payload: data});
    } catch (err) {
        console.error(err);
    }
}

function* addGroup(action) {
    try {
        const data = yield call (axiosInstance.post, "/api/group", action.payload);
        yield put({type: ADD_GROUP_SUCCESS, payload: data});
    } catch (err) {
        console.error(err);
    }
}

function* editGroup(action) {
    try {
        const data = yield call (axiosInstance.put, "/api/group/" + action.payload.id, action.payload);
        yield put({type: EDIT_GROUP_SUCCESS, payload: data});
    } catch (err) {
        console.error(err);
    }
}

function* deleteGroup(action) {
    try {
        const data = yield call (axiosInstance.delete, "/api/group/" + action.payload);
        yield put({type: DELETE_GROUP_SUCCESS, payload: data});
    } catch (err) {
        console.error(err);
    }
}

export default function* groupSaga() {
    yield takeLatest(GET_GROUP_LIST, getGroupList);
    yield takeLatest(GET_GROUP_INFO, getGroupInfo);
    yield takeLatest(ADD_GROUP, addGroup);
    yield takeLatest(EDIT_GROUP, editGroup);
    yield takeLatest(DELETE_GROUP, deleteGroup)
}