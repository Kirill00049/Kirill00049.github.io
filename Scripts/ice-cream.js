//-----добавление новых элементов продуктов
let count=0
setOnClick()
function setOnClick() {
    document.getElementById("btn-more-products").addEventListener("click", function (event) {
        showprods()
    })
}
let divBtn = document.getElementById('div-more-products')

function showprods() {
    // divBtn.style.display = "none"
    let products = document.getElementsByClassName("products")[0]
    for (let i = 0; i <= 7; i++) {
        let massLink = ["kivi", "klubnika", "vishnya_v_shokolade", "fistashka_mindal", "mango_guava", "malina_chia", "kokos", "markapone"]
        //create new div for product-item
        let divProduct = document.createElement('div')
        divProduct.className = "product"
        let divProdImg = document.createElement('div')
        divProdImg.className = "product-img"
        let imgProdImg = document.createElement('img')
        let stringSrc = "/Images/ice-cream/" + massLink[i] + ".jpg"
        imgProdImg.src = stringSrc
        divProdImg.append(imgProdImg)
        divProduct.append(divProdImg)
        let pProdTitle = document.createElement('p')
        pProdTitle.className = "product-title"
        let massName = ["Киви", "Клубника", "Вишня в шоколаде", "Фисташка-миндаль", "Манго-гуава", "Малина-чиа", "Кокос", "Маскарпоне-вишня"]
        pProdTitle.innerHTML = "Мороженное «" + massName[i] + "»<br> 200г"
        divProduct.append(pProdTitle)

        let pProdPrice = document.createElement('p')
        pProdPrice.className = "product-price"
        pProdPrice.innerHTML = "400 &#x20bd"
        divProduct.append(pProdPrice)

        let aProdBtn = document.createElement('a')
        aProdBtn.className = "product-btn"
        aProdBtn.innerHTML = "Купить"
        divProduct.append(aProdBtn)

        products.append(divProduct);
    }
    //------------------todo:--------------
    // setOnClick()
    setNotifications()
    setListennerToCloseBtn()

}
//-------уведомление о добавлении в корзину
setNotifications()
function setNotifications(){
    let arrOfBtn = document.getElementsByClassName('product-btn')
    for (; count < arrOfBtn.length; count++) {
        arrOfBtn[count].addEventListener('click', function (event) {
            addToBasket()
        })
    }
    
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