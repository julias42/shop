/**
 * 
 * @param {} entry 
 */
function onEntry(entry) {
    entry.forEach(change => {
        if (change.isIntersecting) {
            change.target.classList.add('element-show');
        }
    });
}
let options = { threshold: [0.1] };
let observer = new IntersectionObserver(onEntry, options);
let elements = document.querySelectorAll('.sale, .product_info');
for (let elm of elements) {
    observer.observe(elm);
}