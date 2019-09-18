window.onload = init; //event


function init() {
    let buttonSave = document.getElementById("btn-save");
    buttonSave.style.background ='red'
    buttonSave.onclick = btnClick
}

function btnClick(event) {
    if (event.target.innerText == "Xóa") {
        event.target.innerText = "Lưu"
    } else {
        event.target.innerText = "Xóa"
    }
}

//homework tìm hiểu HTML
//freecodecamp
//Mô hình MVC