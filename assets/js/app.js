const whoAmIsvg = document.querySelector('#logo')
const paths = whoAmIsvg.children
console.log(paths)
Array.from(paths).forEach((path, index) => {
    let letter = paths[index]
    let size = letter.getTotalLength()

    letter.style.strokeDasharray = size
    letter.style.strokeDashoffset = size
    letter.style.animation = 'line-anim 4s ease forwards ' + index / 2 + 's'
    
})

whoAmIsvg.style.animation = 'fill 1s ease forwards 1100ms'



const handleScrollingToSection = (e) => {
    e.preventDefault()
    //const href = e.target.getAttribute('href')
    //const targetEl = document.querySelector(href).getBoundingClientRect()
    if(window.scrollY <= 0)
        document.querySelector('nav').classList.remove('sticky')
    else
        document.querySelector('nav').classList.add('sticky')
        

}

document.addEventListener('scroll', handleScrollingToSection)


// Receql content progressivelly on intersection
const ratio = .2
const options = {
root: null,
rootMargin: '0px',
threshold: ratio
}

const handleIntersect = function(entries, observer) {
    entries.forEach(entry => {
        if(entry.intersectionRatio > ratio) {
            entry.target.classList.add('reveal-visible')
            observer.unobserve(entry.target)
        }
    })

}

/**
 * Creates a new Intersection Observer
 * to observer the element with the specified class.
 * In this example every element with the class : reveal-
 * The transition delay is handled with css.
 */
let observer = new IntersectionObserver(handleIntersect, options);
document.querySelectorAll('[class*="reveal-"]').forEach(element => {
    observer.observe(element)
})


/**
 * Returns a random number between min (inclusive) and max (exclusive)
 */
function between(min, max) {  
    return Math.random() * (max - min) + min
}

/**
 * Automatically generates the position X and Y of the skills li
 */ 
const parentdiv = document.getElementById('skills_list');
const children = parentdiv.querySelectorAll('li')
const div = 360 / children.length;
const radius = 150;
const offsetToParentCenter = parseInt(parentdiv.offsetWidth / 2); //assumes parent is square
const offsetToChildCenter = 20;
const totalOffset = offsetToParentCenter - offsetToChildCenter;

children.forEach((child, index) => {
    let y = Math.sin((div * index) * (Math.PI / 50)) * radius;
    let x = Math.cos((div * index) * (Math.PI / 35)) * radius;
    child.style.transform = `scale(${between(0.6, 1.4)})`
    child.style.top = (y + totalOffset).toString() + "px";
    child.style.left = (x - child.clientWidth / 2 + totalOffset).toString() + "px";
})


function clearFormInputs(form) {
    form.querySelectorAll('input').forEach(element => {
        element.value = ""
    });
    form.querySelector('textarea').value = ""
}

const contact = document.getElementById('contactForm');

contact.addEventListener('submit', e => {
    e.preventDefault()
    let formData = new FormData(contact)

    const email = "tiago.goncalves.faria@gmail.com"
    const subject = formData.get('subject')
    const message = formData.get('message')

    if(subject === "" || message === "")
        return alert("Please fill in all the fields!");

    let url = `mailto:${encodeURIComponent(email)}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(message)}`

    document.location.href = url

    clearFormInputs(contact)

})


