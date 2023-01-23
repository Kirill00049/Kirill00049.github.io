let arrOfBtn = document.getElementsByClassName('product-btn')
for (let i = 0; i < arrOfBtn.length; i++) {
    arrOfBtn[i].addEventListener('click', function (event) {
        addToBasket()
    })
}

function setListennerToCloseBtn() {
    let arrOfNotes = document.getElementsByClassName('notification')
    for (let i = 0; i < arrOfNotes.length; i++) {
        arrOfNotes[i].getElementsByClassName('close-notification')[0].addEventListener('click', function (event) {
            this.parentNode.remove()
        })
    }
}

function addToBasket() {
    let notes = document.getElementsByClassName('notifications')[0]

    let divNote = document.createElement('div')
    divNote.className = 'notification'

    let divMessage = document.createElement('div')
    divMessage.className = 'message-notification'
    divMessage.innerHTML = 'Добавлено в корзину'

    let divClose = document.createElement('div')
    divClose.className = 'close-notification'

    let imgClose = document.createElement('img')
    imgClose.src = '/Images/close-note.png'
    divClose.append(imgClose)

    divNote.append(divMessage)
    divNote.append(divClose)

    notes.append(divNote)
    setListennerToCloseBtn()

    setTimeout(function () {
        divNote.style.opacity = 0.1
    }, 2000)
    setTimeout(function () {
        divNote.remove()
    }, 6000)
}