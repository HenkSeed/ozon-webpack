// Отправляем содержимое корзины на сервер JSONPlaceholder
const postData = (cart) => {
    return fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "POST",
        body: JSON.stringify(cart),
        headers: {
            "Content-type": "application/json; charset=UTF-8",
        },
    }).then((res) => res.json())
}

export default postData

/** Записываем еденицу товара в базу данных не сервере FIREBASE
 return fetch("https://o-zone-55ee5-default-rtdb.firebaseio.com/goods.json", {
    method: "POST",
    body: JSON.stringify({
        title: "Ведьмак 3",
        price: 3000,
        sale: true,
        img: "https://cdn1.ozone.ru/multimedia/c400/1023547851.jpg",
        category: "Игры и софт",
    }),
    headers: {
        "Content-type": "application/json; charset=UTF-8",
    },
}).then((res) => res.json())
 */
