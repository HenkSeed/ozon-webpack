// Координирует следующие функции:
// 1. Загрузка базы данных из источника (интернет)
// 2. Вывод данных на страницу
import getData from "./getData"
import deleteData from "./deleteData"
import renderGoods from "./renderGoods"

const load = () => {
    getData().then((data) => {
        renderGoods(data)
    })

    // catalogBtn.addEventListener("click", () => {
    //     deleteData().then((data) => {
    //         console.log(data)
    //         getData().then((data) => console.log(data))
    //     })
    // })
}

export default load
