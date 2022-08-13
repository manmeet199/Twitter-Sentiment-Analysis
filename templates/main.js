const usernameInput = document.getElementById('exampleFormControlInput1');
let btn = document.getElementById("submit-btn")

const subbtn = (event) => {
    event.preventDefault()
    let formdata = new FormData()

    formdata.append("username", usernameInput.value)
    fetch("http://127.0.0.1:8080/", {
        method : 'post',
        body: formdata
    })
}