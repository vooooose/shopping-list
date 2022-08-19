/* Новые элементы должны добавляться в список по нажатию на Enter */

/* Пустые элементы не должны добавляться */

/* Если кликнуть на элемент списка, он зачеркивается */

/* Если кликнуть повторно уже на зачеркнутый, он снова становится обычным */

/* Очищать input после добавления нового элемента в список */

const sendInput = document.querySelector('#input');
const shoppingContainer = document.querySelector('#items');

function addProduct() {
    const product = sendInput.value;

    const newProduct = document.createElement('p');
    newProduct.textContent = product;

    if (product != '') {
        shoppingContainer.append(newProduct);
    }

    sendInput.value = '';

    newProduct.addEventListener('click', function() {
        newProduct.classList.toggle('done');
    })
}

sendInput.addEventListener('keydown', function(event) {
    if (event.key == 'Enter') {
        addProduct();
    }
})