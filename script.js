// const scroll = new LocomotiveScroll({
//     el: document.querySelector('#main'),
//     smooth: true
// });


function loaderAnimation() {
    var loader = document.querySelector("#loader")
    setTimeout(function () {
        loader.style.top = "-100%"
      
    }, 4200)

}function loaderAnimation1() {
    var loader2 = document.querySelector("#loader1")
    setTimeout(function () {
        loader2.style.top = "-100%"
      
    }, 4500)

}
loaderAnimation()
loaderAnimation1()