// Filter sathi

const filterbtn=document.querySelectorAll(".filterBtns button");
const filterCard=document.querySelectorAll(".cardFil .card");

const filterCards=(e)=>{
    document.querySelector(".active").classList.remove("active");
    e.target.classList.add("active");

    filterCard.forEach(card =>{
        card.classList.add("hide");

        if (card.dataset.name === e.target.dataset.name || e.target.dataset.name === "all") {
            card.classList.remove("hide");
        }
    });
};


// Event Listner add karto

filterbtn.forEach(button=>button.addEventListener("click",filterCards));

