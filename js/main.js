const routes = [];

const router = VueRouter.createRouter({
    history: VueRouter.createWebHistory(),
    routes, // short for `routes: routes`
});

var app = Vue.createApp({
    components: {
    },
    data() {
        return {
            message: "init"
        };
    },
    beforeCreate() {},
    created() {},
    methods: {},
    watch: {
        $route: {
            handler(newVal, oldVal) {
                this.getUrlParam();
            },
            deep: true,
        },
    },
    mounted() {},
    updated() {},
    computed: {},
}).use(router);

var vm = null;
window.addEventListener("DOMContentLoaded", function () {
    vm = app.mount("#wrap");
});