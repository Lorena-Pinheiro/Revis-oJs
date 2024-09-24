var itemCardSac = document.querySelectorAll(".card-sac");


itemCardSac.forEach(card =>{
    card.querySelector("button").addEventListener("click", function(){
        card.classList.toggle('ativo');
    });
})



/*var itemCardSac = document.querySelector(".card-sac");
var BtnCardSac = itemCardSac.querySelector("button");

BtnCardSac.addEventListener("click", function(){
    itemCardSac.classList.toggle('ativo');
});*/