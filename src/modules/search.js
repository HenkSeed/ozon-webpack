import getData from "./getData"
import renderGoods from "./renderGoods"
import { searchFilter } from "./filters"

const search = () => {
    const searchInput = document.querySelector(".search-wrapper_input")

    searchInput.addEventListener("input", (event) => {
        const value = event.target.value

        // Если делать фильтрацию на сервере, то следующую строчку следует разменять со следующей за ней
        // getData(value).then((data) => {
        getData().then((data) => {
            renderGoods(searchFilter(data, value))
        })
    })
}

export default search
