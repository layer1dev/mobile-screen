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
            message: "init",
            items: {},
            titles: []
        };
    },
    beforeCreate() {},
    created() {
        this.loadScreenDataSet();
    },
    methods: {
        // URL 파라미터 가져오기
        getUrlParam: async function () {
            if (url_query == "") {
                url_query = "?";
            }
    
            // 현재 페이지 파라미터
            if (
                typeof this.$route.query.page != "undefined" &&
                this.$route.query.page != ""
            ) {
                this.page = this.$route.query.page;
            } else {
                this.page = 1;
            }
    
            // 검색어 파라미터
            if (
                typeof this.$route.query.searchStr != "undefined" &&
                this.$route.query.searchStr != ""
            ) {
                this.searchStr = this.$route.query.searchStr;
            } else {
                this.searchStr = "";
            }

            // 신청 상세 상태값 검색
            if (
                typeof this.$route.query.reqStatus != "undefined" &&
                this.$route.query.reqStatus != ""
            ) {
                this.reqStatus = this.$route.query.reqStatus;
            } else {
                this.reqStatus = "0";
            }

            // 문자열 검색 조건
            if (
                typeof this.$route.query.searchType != "undefined" &&
                this.$route.query.searchType != ""
            ) {
                this.searchType = this.$route.query.searchType;
            } else {
                this.searchType = "1";
            }
        },
        loadScreenDataSet: async function() {
            await axios
            .get("/js/data.json")
            .then((response) => {
                if( typeof(response.data) != "object" ) {
                    console.log("Failer")
                }
                this.titles = Object.keys(response.data);
                this.items = response.data;
            });
        }

    },
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