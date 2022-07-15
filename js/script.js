/* ЭТО ЧЕРНОВИК, ВСЁ СЫРОЕ И НЕ РАБОТАЕТ*/
const requestURL = "https://shift-summer-2022-backend.herokuapp.com/api/create/order"
const data = {

}

function sendRequest(method, url, body = null) {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest()
        xhr.open(method, url)
        xhr.reponseType = 'json'

        xhr.onload = () => {
            if (xhr.status >= 400) {
                reject(xhr.response)
            } else {
                resolve(xhr.response)
            }
        }
        xhr.onerror = () => {
            console.log(xhr.response)
        }
        xhr.send(body)
    })
}
document.querySelector("#submit").onclick = sendRequest('POST', requestURL, body)