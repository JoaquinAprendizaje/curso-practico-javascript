const precioOriginal = 120;
const descuento = 18;

function calcularPrecioConDescuento(precio, descuento) {
    const procentajePrecioConDescuento = 100 - descuento;
    const precioConDescuento = (precio * procentajePrecioConDescuento) / 100;

    return precioConDescuento;
}


function onClickButtonPriceDiscount() {
    const inputPrice = document.getElementById("InputPrice");
    const priceValue = inputPrice.value;
    const inputDiscount = document.getElementById("InputDiscount");
    const discountValue = inputDiscount.value;
    const precioConDescuento = calcularPrecioConDescuento(priceValue, discountValue);

    const resultP = document.getElementById("ResultP");
    if (precioConDescuento == priceValue) {
        resultP.innerText = "El precio no tiene descuento"
    }

    else {
        resultP.innerText = "El precio con descuento son: $" + precioConDescuento;
    }
    
}

function validateCoupon(whichCouponIs) {
    let valueOfCoupon;
    switch (whichCouponIs) {
        case 'NewYear':
            return valueOfCoupon = 10;
            break;
        case 'Christmas':
            return valueOfCoupon = 15;
            break;
        case 'EndOf2021':
            return valueOfCoupon = 20;
            break;
        case '25OFF':
            return valueOfCoupon = 25;
            break;
        default:
            return valueOfCoupon = 0;
    }
}

function onClickButtonPriceCoupon() {
    const inputPrice = document.getElementById("InputPriceCoupon");
    const priceValue = inputPrice.value;
    const inputDiscount = document.getElementById("InputDiscountCoupon");
    const discountValue = inputDiscount.value;
    const whichCouponIs = validateCoupon(discountValue);
    

    const precioConDescuento = calcularPrecioConDescuento(priceValue, whichCouponIs);
    const resultCoupon = document.getElementById("ResultCoupon");
    if (precioConDescuento == priceValue) {
        resultCoupon.innerText = "El precio no tiene descuento"
    }

    else {
        resultCoupon.innerText = "El precio con descuento son: $" + precioConDescuento;
    }
}

// console.log({
//     precioOriginal,
//     descuento,
//     procentajePrecioConDescuento,
//     precioConDescuento,
// })