import { put, takeLatest, all } from 'redux-saga/effects';
function* fetchNews() {
    const json = yield fetch('http://newsapi.org/v2/top-headlines?country=kr&apiKey=484073055b364b94b553a82ab633e949')
        .then(response => response.json(), );
    yield put({ type: "NEWS_RECEIVED", json: json.articles, });
}
function* actionWatcher() {
    yield takeLatest('GET_NEWS', fetchNews)
}
export default function* rootSaga() {
    yield all([
        actionWatcher(),
    ]);
}