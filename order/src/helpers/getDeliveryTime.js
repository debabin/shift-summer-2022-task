export const getDeliveryTime = () => {
    const deliveryTime = Math.ceil(Math.random() * (10));
    if (deliveryTime % 10 === 1) {
        return deliveryTime + " дня"
    }
    return deliveryTime + " дней"
}