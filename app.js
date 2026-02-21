const brandInput = document.getElementById("inp");
const modelInput = document.getElementById("inp1");
const searchBtn = document.getElementById("btn");


const products = document.querySelectorAll("#Body div, #body1 div, #body2 div, #body3 div, #body4 div, #body5 div, #body6 div, #body7 div");



brandInput.addEventListener("input", function () {

    let brandValue = brandInput.value.toLowerCase();

    products.forEach(product => {

        let brandName = product.querySelectorAll("h1").innerText.toLowerCase();
        if (brandName.includes(brandValue)) {
            let model = product.querySelectorAll("span").innerText;
            modelInput.value = model;
        }

    });
});


function searchProduct() {

    let brandValue = brandInput.value.toLowerCase();
    let modelValue = modelInput.value.toLowerCase();

    products.forEach(product => {

        let brandName = product.querySelector("h1").innerText.toLowerCase();
        let modelName = product.querySelector("span").innerText.toLowerCase();

        if (brandName.includes(brandValue) && modelName.includes(modelValue)) {
            product.style.display = "block";
        } else {
            product.style.display = "none";
        }
    });


    brandInput.value = "";
    modelInput.value = "";
}


searchBtn.addEventListener("click", searchProduct);

brandInput.addEventListener("keydown", function(e){
    if(e.key === "Enter"){
        searchProduct();
    }
});

modelInput.addEventListener("keydown", function(e){
    if(e.key === "Enter"){
        searchProduct();
    }
});

let Button = document.querySelectorAll(".addtocart")

Button.forEach(button => {
    button.addEventListener("click",function(){
        alert("Your Item Is Added to Add To Cart 🧠")
    })
})
    

