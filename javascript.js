let flag = false;

function batdau() {
    document.getElementById("phan2").removeAttribute("hidden")
    document.getElementById("phan1").setAttribute("hidden",true)
    document.getElementById("audio").play();
}

function startFunction() {
    document.getElementById("content").removeAttribute("hidden")
    document.getElementById("firstPage").setAttribute("hidden",true)
}

function answer1(i) {
    if (!flag) {
        document.getElementById("alert2").removeAttribute("hidden")
        flag = true;
    } else {
    document.getElementById("alert2").setAttribute("hidden", true)
    if(i == 1 ) {
        document.getElementById("alert").removeAttribute("hidden")
        setTimeout(() => {
            document.getElementById("alert").setAttribute("hidden", true)
        }, 2000);
    } else {
        document.getElementById("question1").setAttribute("hidden", true)
        document.getElementById("question2").removeAttribute("hidden")

    }
    }
}

function answer2(i) {
    if(i == 1 ) {
        document.getElementById("alert").removeAttribute("hidden")
        setTimeout(() => {
            document.getElementById("alert").setAttribute("hidden", true)
        }, 2000);
    } else {
        alert("Vậy thì từ nay lo gọi bằng anh đi nhé :v")
        document.getElementById("question2").setAttribute("hidden", true)
        document.getElementById("question3").removeAttribute("hidden")

    }
}

function answer3(i) {
    if (i == 2){
        document.getElementById("alert").removeAttribute("hidden")
        setTimeout(() => {
            document.getElementById("alert").setAttribute("hidden", true)
        }, 2000);
    } else {
    document.getElementById("content").setAttribute("hidden",true)
    document.getElementById("done").removeAttribute("hidden")
    }
}
