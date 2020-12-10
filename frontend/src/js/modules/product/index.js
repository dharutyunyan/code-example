import routes from './router'
import store from './store'
export default class Product {
    constructor(store, router) {
        this._store = store
        this._router = router
    }

    install() {
        this._store.registerModule('Product', store);
        this._router.addRoutes(routes);
    }
}
