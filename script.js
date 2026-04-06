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
        pullDownButton.setAttribute("style","background-color:blue;")
})
    pullDownButton.addEventListener('mouseout',function(){
        pullDownButton.removeAttribute("style","background-color:red;")
    })

    pullDownButton.addEventListener('click',function(){
        pullDownButton.setAttribute("style","background-color:green;")
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