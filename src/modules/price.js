import getData from "./getData"
import renderGoods from "./renderGoods"
import { priceFilter } from "./filters"

const price = () => {
    const minPrice = document.getElementById("min")
    const maxPrice = document.getElementById("max")

    let minValue
    let maxValue

    // let minPriceValue

    minPrice.addEventListener("input", (event) => {
        const minPriceValue = event.target.value
        minValue = minPriceValue
        getData().then((data) => {
            renderGoods(priceFilter(data, minValue, maxValue))
        })
    })

    maxPrice.addEventListener("input", (event) => {
        const maxPriceValue = event.target.value
        maxValue = maxPriceValue === "" ? Infinity : maxPriceValue
        // console.log("typeof maxValue: ", typeof maxValue)
        getData().then((data) => {
            renderGoods(priceFilter(data, minValue, maxValue))
        })
    })
}

export default price
