const buttons = document.querySelectorAll('.buttons')
const body = document.querySelector("body")
buttons.forEach((button) => {
    button.addEventListener('click', (e) => {
        if (e.target.id === "Black"){
            body.style.backgroundColor = e.target.id;
            body.style.color= "white";
        }
        if (e.target.id === "Red"){
            body.style.backgroundColor = e.target.id;
            body.style.color= "white";
        }
        if (e.target.id === "Blue"){
            body.style.backgroundColor = e.target.id;
            body.style.color= "white";
        }
        if (e.target.id === "Green"){
            body.style.backgroundColor = e.target.id;
            body.style.color= "white";
        }
        if (e.target.id === "Brown"){
            body.style.backgroundColor = e.target.id;
            body.style.color= "white";
        }
        if (e.target.id === "Grey"){
            body.style.backgroundColor = e.target.id;
            body.style.color= "white";
        }
    })
})
