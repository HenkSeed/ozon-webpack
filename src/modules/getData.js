const getData = (str) => {
    // return fetch(
    //     // Следующая конструкция часто применяется на практике, но FireBase её не поддерживает,
    //     // однако, её прекрасно поддерживает json-server (на их странице есть примеры с фильтрами и т.д.)
    //     // здесь: https://github.com/typicode/json-server/tree/v0?tab=readme-ov-file
    //     `
    //     https://o-zone-55ee5-default-rtdb.firebaseio.com/goods.json?${
    //         str ? `search=${str}` : ""
    //     }
    //     `
    // ).then((response) => {
    //     return response.json()
    // })
    return fetch(
        // Поэтому, будем получать от сервера весь массив и отфильтровывать его на месте
        `
        https://o-zone-55ee5-default-rtdb.firebaseio.com/goods.json`
    ).then((response) => {
        return response.json()
    })
}

export default getData
