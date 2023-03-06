
var url2="https://emojihub.yurace.pro/api/random"
fetch(url2)
.then(res=>res.json())
.then((response)=>{
    console.log(response)
    var htmlcode=response.htmlCode[0]
    console.log(htmlcode)
    var child=document.createElement('div')
   child.innerHTML+=`
   <h3>Category:${response.category}</h4>
   <h3>Name:${response.name}</h5>
   <h3>Emoji:${htmlcode}</h3>
   `
   document.body.appendChild(child)
})
