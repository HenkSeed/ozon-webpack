import getData from "./getData"
import renderGoods from "./renderGoods"
import {
    minPriceFilter,
    maxPriceFilter,
    categoryFilter,
    discountFilter,
} from "./filters"
import { maxPrice, minPrice } from "./getPrice"

import { btnCatalog, catalogModal, catalogModalItems } from "./getCatalog"
import { discountCheckbox, filterCheckmark } from "./getSale"

const renderGoodsFiltered = () => {
    let minValuePrice = 0
    let maxValuePrice = Infinity
    let categoryName = ""
    let checkmark = false

    const renderDataFiltered = () => {
        getData().then((data) => {
            renderGoods(
                data
                    .filter((good) => categoryFilter(good, categoryName))
                    .filter((good) => minPriceFilter(good, minValuePrice))
                    .filter((good) => maxPriceFilter(good, maxValuePrice))
                    .filter((good) => discountFilter(good, checkmark))
            )
        })
    }

    discountCheckbox.addEventListener("change", () => {
        if (discountCheckbox.checked) {
            checkmark = true
        } else {
            checkmark = false
        }

        renderDataFiltered()
    })

    // =========================== ВАРИАНТ 3

    // Если закрывается список категорий товаров, то отключаем фильтр категорий
    btnCatalog.addEventListener("click", () => {
        if (
            window
                .getComputedStyle(catalogModal)
                .getPropertyValue("display") === "none"
        ) {
            categoryName = ""

            renderDataFiltered()
        }
    })

    // Если осуществляется выбор категории товара
    catalogModalItems.forEach((item) => {
        item.addEventListener("click", () => {
            categoryName = item.textContent

            renderDataFiltered()
        })
    })

    // Если изменяется минимальная цена фильтра
    minPrice.addEventListener("input", () => {
        // minValuePrice = Number(event.target.value)
        minValuePrice = minPrice.value

        renderDataFiltered()
    })

    // Если изменяется максимальная цена фильтра
    maxPrice.addEventListener("input", () => {
        maxValuePrice =
            // event.target.value != "" ? Number(event.target.value) : Infinity
            maxPrice.value != "" ? maxPrice.value : Infinity

        renderDataFiltered()
    })

    // =========================== ВАРИАНТ 2

    // minPrice.addEventListener("input", (event) => {
    //     minValuePrice = event.target.value
    //     getData().then((data) => {
    //         renderGoods(
    //             minPriceFilter(maxPriceFilter(data, maxValuePrice), minValuePrice)
    //         )
    //     })
    // })

    // maxPrice.addEventListener("input", (event) => {
    //     maxValuePrice = event.target.value
    //     getData().then((data) => {
    //         renderGoods(
    //             maxPriceFilter(minPriceFilter(data, minValuePrice), maxValuePrice)
    //         )
    //     })
    // })

    // =========================== ВАРИАНТ 1

    // minPrice.addEventListener("input", (event) => {
    //     minValuePrice = event.target.value
    //     getData().then((data) => {
    //         renderGoods(priceFilter(data, minValuePrice, maxValuePrice))
    //     })
    // })

    // maxPrice.addEventListener("input", (event) => {
    //     maxValuePrice = event.target.value === "" ? Infinity : event.target.value
    //     getData().then((data) => {
    //         renderGoods(priceFilter(data, minValuePrice, maxValuePrice))
    //     })
    // })
}

export default renderGoodsFiltered
