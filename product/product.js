var product = document.getElementsByTagName('img');
console.log(product[0].attributes[0].value)

for(let i=0; i<product.length;i++) {
    
    product[i].addEventListener('click', function(){
        var img = product[i].src
        localStorage.setItem('product-image',JSON.stringify(img));
        window.location.href = 'cart.html';
        console.log('clicked')
    })
}


 