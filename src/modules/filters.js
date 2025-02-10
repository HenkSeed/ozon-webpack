// Поскольку здесь будет несколько функций, то будеь их экспортировать иначе:
export const searchFilter = (goods, value) => {
    return goods.filter((goodsItem) => {
        return goodsItem.title.toLowerCase().includes(value.toLowerCase())
    })
}

export const categoryFilter = (goods, value) => {
    return goods.filter((goodsItem) => {
        return goodsItem.category === value
    })
}

export const priceFilter = (goods, minValue = 0, maxValue = Infinity) => {
    return goods.filter((goodsItem) => {
        return goodsItem.price >= minValue && goodsItem.price <= maxValue
    })
}
