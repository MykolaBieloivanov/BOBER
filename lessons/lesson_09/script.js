console.log('hello dom')
console.log(document)
console.dir(document)

let heading = document.getElementsByTagName('h2')[0]
console.log(heading)
heading.innerText = 'Lesson 666'


let ul = document.getElementsByClassName('method-list')[0]
ul.style.listStyleType = 'none'
console.log(ul[0])



let desc = document.getElementById('desc')
desc.style.color = 'darkred'
console.log(desc)


let descInfo = document.querySelector('.method-list')
descInfo.className = 'descInfo'
console.log(descInfo)