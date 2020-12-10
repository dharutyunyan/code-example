import routes from './router'
import store from './store'
export default class Auth {
    constructor(store, router) {
        this._store = store
        this._router = router
    }

    install() {
        this._store.registerModule('Auth', store);
        this._router.addRoutes(routes);
    }
}
