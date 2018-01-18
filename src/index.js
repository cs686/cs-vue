import Alert from './components/alert'

const install = function(Vue, Opts = {}) {
    Vue.component(Alert.name, Alert)
}

if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue)
}
export default install