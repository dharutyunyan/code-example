import store from './store'
export default class Notification {
    constructor(store, router) {
        this._store = store
        this._router = router
    }

    install() {
        this._store.registerModule('Notification', store);
    }
}
