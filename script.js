/* observer per interazioni con scroll*/
let elements_to_watch = document.querySelectorAll('.sezioneApertura');
let transizioneApertura = function (items) {
    items.forEach((item) => {
        if (item.isIntersecting) {
            item.target.classList.add("inFocus");
        } else {
            item.target.classList.remove("inFocus");
        }
    });
}
let observer = new IntersectionObserver(transizioneApertura, { threshold: 0.7 });
elements_to_watch.forEach((element) => {
    observer.observe(element);
});

let elements_to_watch1 = document.querySelectorAll('.schedaTecnica');
let transizioneSchedaTecnica = function (items) {
    items.forEach((item) => {
        if (item.isIntersecting) {
            item.target.classList.add("inFocus");
        } else {
            item.target.classList.remove("inFocus");
        }
    });
}
let observer1 = new IntersectionObserver(transizioneSchedaTecnica, { threshold: 0.7 });
elements_to_watch1.forEach((element) => {
    observer1.observe(element);
});

// faq
const acc_header = document.querySelectorAll('.accordion-header');
acc_header.forEach(item => {
    item.addEventListener('click', function(){
        item.classList.toggle('active');
        if(item.classList.contains('active')){
            item.nextElementSibling.style.height = item.nextElementSibling.scrollHeight + 'px';
        }else{
            item.nextElementSibling.style.height = '0px';
        }
    });
});

