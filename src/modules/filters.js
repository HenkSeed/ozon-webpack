// Поскольку здесь будет несколько функций, то будем их экспортировать иначе:
export const searchFilter = (goods, value) => {
    return goods.filter((goodsItem) => {
        return goodsItem.title.toLowerCase().includes(value.toLowerCase())
    })
}

/** Объединённый фильтр одновременно по минимуму и максимуму цены
 *
 * export const priceFilter = (goods, minValue = 0, maxValue =
 * Infinity) => {
 *      return goods.filter((goodsItem) => {
 *          return goodsItem.price >= minValue &&
 *          goodsItem.price <= maxValue
 *      })
 *  }
 */

// =================== ВАРИАНТ 3

// Фильтр по минимальной цене
export const minPriceFilter = (good, minValue = 0) => {
    return good.price >= minValue
}

// Фильтр по максимальной цене
export const maxPriceFilter = (good, maxValue = Infinity) => {
    return good.price <= maxValue
}

// Фильтр по категориям
export const categoryFilter = (good, categoryName = "") => {
    return good.category === categoryName || categoryName === ""
}

// Фильтр по распродаже
export const discountFilter = (good, checkmark) => {
    return good.sale === checkmark || good.sale === true
}

// =================== ВАРИАНТЫ 1 и 2

// export const minPriceFilter = (goods, minValue = 0) => {
//     return goods.filter((goodsItem) => {
//         return goodsItem.price >= minValue
//     })
// }

// export const maxPriceFilter = (goods, maxValue = Infinity) => {
//     return goods.filter((goodsItem) => {
//         return goodsItem.price <= maxValue
//     })
// }
