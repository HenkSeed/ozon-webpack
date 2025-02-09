const deleteData = () => {
    return fetch(
        "https://o-zone-55ee5-default-rtdb.firebaseio.com/goods.json/25",
        {
            method: "DELETE",
        }
    ).then((res) => res.json())
}

export default deleteData
