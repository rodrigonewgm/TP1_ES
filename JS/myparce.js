const textarea = document.querySelector("textarea");

const button = document.querySelector("button");
button.addEventListener("click", ()=>{
    console.log(textarea.value())
})

function parseador() { btn.addEventListener("click", parseador);    } 


const jsonExample = {
    "first_prop" : "Una cadena de texto",
    "second_prop" : 125.30,
    "third_prop" : [
        {
            "sub_prop_1" : "Descripción - 1",
            "sub_prop_2" : 200
        },
        {
            "sub_prop_1" : "Descripción - 2",
            "sub_prop_2" : 100
        }
    ],
    "forth_prop" : true,
    "fifth_prop" : null
}

jsonExample.