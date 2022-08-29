export const storage = {
    set: function(k, v) {
        localStorage.setItem(k, JSON.stringify(v))
    },
    get: function(k) {
        return JSON.parse(localStorage.getItem(k))
    }
}