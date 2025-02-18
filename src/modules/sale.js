import { discountCheckbox, filterCheckmark } from "./getSale"

const sale = () => {
    discountCheckbox.addEventListener("change", () => {
        if (discountCheckbox.checked) {
            filterCheckmark.classList.add("checked")
        } else {
            filterCheckmark.classList.remove("checked")
        }
    })
}

export default sale
