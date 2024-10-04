let inp=document.querySelector("input");
let btn=document.querySelector("button");
let ul=document.querySelector("ul")
btn.addEventListener("click",function(){
        
        let item=document.createElement("li");
        item.innerText=inp.value;
        let btns=document.createElement("button");
        btns.innerText="delete";
        btns.classList.add("delete");
        item.appendChild(btns);
        ul.appendChild(item);
        inp.value="";
});
ul.addEventListener("click",function(event){
    if(event.target.nodeName=="BUTTON"){
        let listitem=event.target.parentElement;
        listitem.remove();
    }
       
})

// let delbtn=document.querySelectorAll(".delete");
// for(del of delbtn){
//     del.addEventListener("click",function(){
//         let parent=this.parentElement;
//         parent.remove();
//     })
// }
