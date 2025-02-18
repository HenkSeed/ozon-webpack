import postData from "./postData"
import renderCart from "./renderCart"

// Открывает и закрывает модальное окно карзины

const cart = () => {
    const cartBtn = document.getElementById("cart")
    const cartModal = document.querySelector(".cart")
    const cartCloseBtn = cartModal.querySelector(".cart-close")
    const cartSendBtn = cartModal.querySelector(".cart-confirm")
    const cartTotal = cartModal.querySelector(".cart-total>span")
    const cartCounter = document.querySelector("#cart .counter")
    const cartContent = localStorage.getItem("cart")
        ? JSON.parse(localStorage.getItem("cart"))
        : []

    const goodsWrapper = document.querySelector(".goods")
    const cartWrapper = document.querySelector(".cart-wrapper")

    const openCart = () => {
        const cart = localStorage.getItem("cart")
            ? JSON.parse(localStorage.getItem("cart"))
            : []

        cartModal.style.display = "flex"
        renderCart(cart)

        cartTotal.textContent = cart.reduce((sum, goodsItem) => {
            return sum + goodsItem.price
        }, 0)
    }

    const closeCart = () => {
        cartModal.style.display = ""
    }

    const cartCounterChange = (cart) => {
        cartCounter.textContent = cart.length
    }

    // Обновляем счётчик товаров
    cartCounterChange(cartContent)

    cartBtn.addEventListener("click", openCart)
    cartCloseBtn.addEventListener("click", closeCart)

    goodsWrapper.addEventListener("click", (event) => {
        if (event.target.classList.contains("btn-primary")) {
            const card = event.target.closest(".card")
            const key = card.dataset.key
            const goods = JSON.parse(localStorage.getItem("goods"))

            const cart = localStorage.getItem("cart")
                ? JSON.parse(localStorage.getItem("cart"))
                : []

            const goodsItem = goods.find((item) => {
                return item.id === +key
            })

            cart.push(goodsItem)

            // ========================= Здесь обновить счётчик
            cartCounterChange(cart)

            localStorage.setItem("cart", JSON.stringify(cart))
        }
    })

    cartWrapper.addEventListener("click", (event) => {
        if (event.target.classList.contains("btn-primary")) {
            const cart = localStorage.getItem("cart")
                ? JSON.parse(localStorage.getItem("cart"))
                : []

            const card = event.target.closest(".card")
            const key = card.dataset.key

            const index = cart.findIndex((item) => {
                return item.id === +key
            })
            console.log("index: ", index)

            cart.splice(index, 1)

            renderCart(cart)

            cartTotal.textContent = cart.reduce((sum, goodsItem) => {
                return sum + goodsItem.price
            }, 0)

            // =============== Здесь обновить счётчик
            cartCounterChange(cart)

            localStorage.setItem("cart", JSON.stringify(cart))
        }
    })

    cartSendBtn.addEventListener("click", () => {
        const cart = localStorage.getItem("cart")
            ? JSON.parse(localStorage.getItem("cart"))
            : []
        postData(cart).then(localStorage.removeItem("cart"))
        renderCart([])
        cartTotal.textContent = 0
        // ========================= Здесь обновить счётчик
        cartCounterChange([])
    })
}

export default cart
