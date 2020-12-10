import routes from './router'
import store from './store'
export default class Category {
    constructor(store, router) {
        this._store = store
        this._router = router
    }

    install() {
        this._store.registerModule('Category', store);
        this._router.addRoutes(routes);
    }
}
