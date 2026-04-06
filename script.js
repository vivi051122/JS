window.alert("ブラウザオブジェクトの取得に成功！")

function getElement(){
    Element = document.querySelector('#shopA');
    console.log('選ばれたのは'+Element.textContent+'でした');
}

function getElement(){
    elements = document.querySelectorAll('.shop li');
    let len = elements.length;
    for(let i=0; i<len; i++){
        console.log(elements.item(i).textContent);
    }
}

let lists = document.getElementsByClassName("pull-down-list");
console.log(lists)

window.addEventListener('load',function(){

    const pullDownButton = document.getElementById("lists")
console.log(pullDownButton)

    pullDownButton.addEventListener('mouseover',function(){
        this.setAttribute("style","background-color:blue;")
        console.log("乗ったら青色")
})
    pullDownButton.addEventListener('mouseout',function(){
        this.removeAttribute("style","background-color:red;")
    })

    pullDownButton.addEventListener('click',function(){
        this.setAttribute("style","background-color:green;")
    })
})

window.addEventListener('mouseover',function(){

    const pullDownButton = document.getElementById("lists")
    console.log("乗る")
})

window.addEventListener('mouseout',function(){

    const pullDownButton = document.getElementById("lists")
    console.log("外れる")
})

window.addEventListener('click',function(){

    const pullDownButton = document.getElementById("lists")
    console.log("クリック")
})

const pullDownButton = document.getElementById("lists")
const pullDownParents = document.getElementById("pull-down")

pullDownButton.addEventListener('click',function(){
    if(pullDownParents.getAttribute("style")=="display:block;"){
        pullDownParents.removeAttribute("style","display:block;")
        console.log("非表示")
    } else{
        pullDownParents.setAttribute("style","display:block;")
        console.log("表示")
    }
})