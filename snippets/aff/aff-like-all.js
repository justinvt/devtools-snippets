const runevery_seconds = 30

console.clear();

(function () {
    var origOpen = XMLHttpRequest.prototype.open;
    XMLHttpRequest.prototype.open = function () {
        console.log('request started!');
        this.addEventListener('load', function () {
            console.log('request completed!');
            console.log("Server status code: ", this.status);
            console.log("Ready state: ", this.readyState);
            console.log("Server response:", this.responseText);
        });
        origOpen.apply(this, arguments);
    };
})();



var home
window.likeall = function () {
    console.log("rekkiaded")
    if (window.home && window.home.constructor.name == 'Window' && !window.home.closed)
        window.home.close()
    window.home = open(
        "https://adultfriendfinder.com/go/page/home_delta.html?#main?{}", "home",
        "width=300px, height=300px")
    window.home.onload = function () {
        console.log("loaded")
        window.home.document.querySelector("#activity_new").click()
        Array.from(window.home.document.querySelectorAll(".activity_like,.activity_fav")).map(x => x.click())
        window.home.close()
        setTimeout(function () { window.likeall() }, runevery_seconds * 1000)

    }

}

window.likeall()