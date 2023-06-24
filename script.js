const getCurrentTime = () => dateFns.format(new Date(), "h:mm:ss a");

new Vue({
    el: "#app",
    data: {
        currentTime: getCurrentTime()
    },
    methods: {
        updateCurrentTime() {
            this.currentTime = getCurrentTime();
        }
    },
    created() {
        setInterval(() => this.updateCurrentTime(), 1000);
    }
});
