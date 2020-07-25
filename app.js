var list = document.getElementById("list")

function addtodo(){
    var to = document.getElementById("to")
    var li = document.createElement("li")
    var litext = document.createTextNode(to.value)
    li.appendChild(document.createTextNode ("  "))
    li.appendChild(litext)

    var delbutton = document.createElement("button")
    var delText = document.createTextNode("Delete")
    delbutton.appendChild(delText)
    delbutton.setAttribute("onclick","deleteitem(this)")
    delbutton.setAttribute("class","btn btn-light")
    li.appendChild(document.createTextNode ("  "))
    li.appendChild(delbutton) 

    var ebutton = document.createElement("button")
    var eText = document.createTextNode("Edit")
    ebutton.appendChild(eText)
    ebutton.setAttribute("onclick","eitem(this)")
    ebutton.setAttribute("class","btn btn-light")
    li.appendChild(document.createTextNode ("  "))
    li.appendChild(ebutton)

    list.appendChild(li)
    to.value=""
    console.log()
}


function deleteitem(e){
    e.parentNode.remove()
}
function delall(){
    list.innerHTML =""
}
function eitem(e){
    
    var ev = prompt("enter the edit value",e.parentNode.firstChild.nodeValue)
    e.parentNode.firstChild.nodeValue = ev
    
}
