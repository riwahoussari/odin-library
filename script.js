// DOM Elements variables
const createBtn = document.querySelector('button')
const form = document.querySelector('form')
const titleInput = document.getElementById('title')
const authorInput = document.getElementById('author')
const pagesInput = document.getElementById('pages')
const notread = document.getElementById('noRead')
const inputs = document.querySelectorAll('input')
const submitBtn = document.getElementById('submit')
// other variable
let title , author , pages , read
let library = []


// pop up a form to get the info of the book
// listener that pops up the form
createBtn.addEventListener('click' , ()=>{
    form.style.display = 'unset'
})
// listener that sumbits the form
form.addEventListener('submit' , (event)=>{
    title = titleInput.value
    author = authorInput.value
    pages = pagesInput.value
    notread.checked ? read = 'not read' : read = 'read'

    event.preventDefault()
    createBook(title , author, pages , read)
    inputs.forEach(input => input.value = "")
    form.style.display = "none"

    displayBook()
})


// create the book
function Book(title , author , pages , read){
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
}
function createBook(title , author , pages , read){
    library.push(new Book(title , author, pages , read))
}

// display the book in a card
//DOM Elements
const cardContainer = document.getElementById('cardContainer')
function displayBook(){
    let card = document.createElement('div')
    card.classList.add('card')
    cardContainer.appendChild(card)

    let book = library[library.length-1]
    for (prop in book){
        let h2 = document.createElement('h2')
        let p = document.createElement('p')
        h2.textContent = prop.toUpperCase()
        p.textContent = book[prop]
        card.appendChild(h2)
        card.appendChild(p)
    }
    let readBtn = card.lastChild
    readBtn.classList.add('readBtn')
    if (readBtn.textContent == 'read'){
        readBtn.classList.add('bookRead')
    }
    readBtn.addEventListener('click' , ()=>{
        changeRead(readBtn)
    })

    let rmvBtn = document.createElement('button')
    rmvBtn.textContent = "REMOVE"
    rmvBtn.setAttribute('id' , 'rmvBtn')
    card.appendChild(rmvBtn)
    rmvBtn.addEventListener('click' , ()=> {
        removeCard(card)
    })
}

function changeRead(readBtn){
    if(readBtn.textContent == "read"){
        readBtn.textContent = 'not read'
        readBtn.classList.remove('bookRead')
    }else{
        readBtn.textContent = 'read'
        readBtn.classList.add('bookRead')
    }
}

function removeCard(card){
    card.style.display = "none"
}
