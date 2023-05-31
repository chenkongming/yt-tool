let list = document.querySelectorAll(".Eie04v01 a")
let result = []
list.forEach(item=>{result.push({url:item.href,title:item.querySelector("p").innerHTML})})
let str = ''
result.forEach(item=>str+=item.url+'\n')
console.log(str)
