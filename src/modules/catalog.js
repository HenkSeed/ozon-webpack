import { btnCatalog, catalogModal } from "./getCatalog"

// Открывает и закрывает выпадающее меню кнопки "Каталог"
const catalog = () => {
    let isOpen = false

    btnCatalog.addEventListener("click", () => {
        isOpen = !isOpen

        if (isOpen) {
            catalogModal.style.display = "block"
        } else {
            catalogModal.style.display = ""
        }
    })
}

export default catalog
