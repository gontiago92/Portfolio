const imageName = document.querySelectorAll('.card_container .project_card span ')

Array.from(imageName).forEach(element => {
    let imageEl = element.parentNode.parentNode
    let imagePath = element.innerText.toLowerCase() + '.jpg'

    imageEl.style.background = 'url(./assets/images/' + imagePath +')'
    imageEl.style.backgroundSize = 'cover'
})
