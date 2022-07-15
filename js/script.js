/* ЭТО ЧЕРНОВИК, ВСЁ СЫРОЕ И НЕ РАБОТАЕТ*/
const requestURL = "https://shift-summer-2022-backend.herokuapp.com/api/create/order"
formElem.onsubmit = async (e) => {
    e.preventDefault();

    let response = await fetch(requestURL, {
        method: 'POST',
        body: new FormData(formElem)
    });

    let result = await response.json();

    alert(result.message);
};