function addProducts() {
    // alert("working")
    var image = document.getElementById("image").value;
    var name = document.getElementById("name").value;
    var price = document.getElementById("price").value;
    var myntraProduct = { image: image, name: name, price: price }

    var myntraproducts = JSON.parse(localStorage.getItem("myntraproducts")) || [];
    console.log(myntraproducts, "myntraproducts")

    myntraproducts.push(myntraProduct);

    localStorage.setItem("myntraproducts", JSON.stringify(myntraproducts));

    for (i = 0; i < myntraproducts.length; i++) {
        console.log(myntraproducts[i])
    }

    var showProducts = [];

    for (i = 0; i < myntraproducts.length; i++) {

        showProducts += `<div><img src="${myntraproducts[i].image}"/><p>${myntraproducts[i].name}</p><p>${myntraproducts[i].price}</p></div>`
    }
    var divFromHtml = document.getElementById("productList");
    divFromHtml.innerHtml = showProducts;


    document.getElementById("image").value = "";
    document.getElementById("price").value = "";
    document.getElementById("price").value = "";

}

