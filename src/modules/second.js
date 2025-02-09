import getData from "./getData"
import postData from "./postData"
import deleteData from "./deleteData"

const second = () => {
    const cartBtn = document.getElementById("cart")

    const catalogBtn = document.getElementById("catalog-button")

    // cartBtn.addEventListener("click", () => {
    //     postData().then((data) => {
    //         console.log(data)
    //         getData().then((data) => console.log(data))
    //     })
    // })

    console.log("second started")

    getData().then((data) => {
        console.log(data)
    })

    catalogBtn.addEventListener("click", () => {
        deleteData().then((data) => {
            console.log(data)
            getData().then((data) => console.log(data))
        })
    })
}

export default second
