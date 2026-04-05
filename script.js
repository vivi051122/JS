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