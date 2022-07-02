let json ={}

const button = document.querySelector("button");
button.addEventListener("click", ()=>{
    let textarea = document.getElementById("inputText").value;
    // console.log("hola")
   
// vamos a limpiar
let texareaLimpio = textarea.replace(/['"]+/g,'')
                            .replace(/,/g, '') //

texareaLimpio = texareaLimpio.split('\n') // quito saltos de linea
texareaLimpio.pop()
texareaLimpio.shift()

for (let i = 0; i < texareaLimpio.length; i++) { // quito espacios
texareaLimpio[i] = texareaLimpio[i].trim()
}
for (let i = 0; i < texareaLimpio.length; i++) { // quito
texareaLimpio[i] = texareaLimpio[i].split(' : ')
}


for (let i = 0; i < texareaLimpio.length; i++) {
json[texareaLimpio[i][0]] = texareaLimpio[i][1]
}

if (json.fifth_prop === "null") {
    json.fifth_prop = null
} 

if  (json.forth_prop === "true") {
    json.forth_prop = true
}

if(typeof json.second_prop === 'string') {
    json.second_prop = parseInt(json.second_prop)
    json.sub_prop_2 = parseInt(json.sub_prop_2)
}

for (let i = 0; i < texareaLimpio.length; i++) {
if  (texareaLimpio[i][1] === "[") {
    json.third_prop = []
    }
}

for (let i = 0; i < texareaLimpio.length; i++) {
    if (texareaLimpio[i][1] === "{"){

    }  
}
Object.prototype
console.log(json)
})


