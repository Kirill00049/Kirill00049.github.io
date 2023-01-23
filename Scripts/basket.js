let price = 400
let btnsPlus=document.getElementsByClassName('more')
let btnsMinus=document.getElementsByClassName('less')
for(let i=0; i<btnsPlus.length; i++){
    btnsPlus[i].addEventListener('click', function(event){
        let divQuantity = btnsPlus[i].parentNode.parentNode.getElementsByClassName('quantity')[0]
        let q
        if (Math.floor(divQuantity.innerHTML % 7) == 5){
            q = parseInt(divQuantity.innerHTML) + 2
        }
        else{
            q = parseInt(divQuantity.innerHTML) + 1
        }
        
        divQuantity.innerHTML= q
        let newPrice=q*price-Math.floor(q / 7)*price
        btnsPlus[i].parentNode.getElementsByClassName('price')[0].innerHTML=newPrice + ' &#x20bd'
    })
    btnsMinus[i].addEventListener('click', function(event){
        
        let divQuantity = btnsPlus[i].parentNode.parentNode.getElementsByClassName('quantity')[0]
        let q=parseInt(divQuantity.innerHTML)-1
        if(q<0) return
        divQuantity.innerHTML=q
        let newPrice=q*price-Math.floor(q / 7)*price
        btnsPlus[i].parentNode.getElementsByClassName('price')[0].innerHTML=newPrice + ' &#x20bd'    })
}