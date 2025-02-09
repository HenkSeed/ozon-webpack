const getData = () => {
    console.log("getData Started")
    return fetch(
        "https://o-zone-55ee5-default-rtdb.firebaseio.com/goods.json"
    ).then((response) => {
        return response.json()
    })
}

export default getData
