//defining the input in html
let addButtonNode = document.querySelector('#addButton')
//defining the input in html
let inputNode = document.querySelector('#input')

addButtonNode.addEventListener('click',takeInput)

function takeInput(){
    let text = inputNode.value
    inputNode.value = ""
    console.log(text);
}