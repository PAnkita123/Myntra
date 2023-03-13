window.onload = function () {
    // alert("working")
    var myntraproducts = JSON.parse(localStorage.getItem("myntraproducts"));

    var divFromHTML = document.getElementById("screen");

    var array2 = [];

    for (var i = 0; i < myntraproducts.length; i++) {
        array2 += `<div><img src="${myntraproducts[i].image}"><br/><h1>${myntraproducts[i].name}</h1><p>${myntraproducts[i].price}</p><button onclick='addtoCart (${JSON.stringify(myntraproducts[i])})'>Add to cart</button></div>`
    }
    divFromHTML.innerHTML = array2;

}

function addtoCart(pro){
    // The pro argument is stringified using the JSON.stringify() method and stored in the product variable.
    var product = JSON.stringify(pro);
    // The userData & currentuser key from the localStorage object is retrieved and parsed into an array using the JSON.parse() method and stored in the dataFromLS variable.
    var dataFromLS = JSON.parse(localStorage.getItem("userData2"));
    var currentUser = JSON.parse(localStorage.getItem("myntraUser"));

    if (currentUser) {
        var allUsers = [];
        for (var i = 0; i < dataFromLS.length; i++) {
            if (dataFromLS[i].email === currentUser["current-user-email"]) {
                var newObj = dataFromLS[i];
                newObj["cartProducts2"] = newObj["cartProducts2"] || [];
                newObj["cartProducts2"].push(JSON.parse(product));
                allUsers.push(newObj)
            } else {
                allUsers.push(dataFromLS[i])
            }

        }
        localStorage.setItem("userData2", JSON.stringify(allUsers));
        alert("Product added to cart!")
    } else {
        alert("login first to add product into cart!")
    }

}



