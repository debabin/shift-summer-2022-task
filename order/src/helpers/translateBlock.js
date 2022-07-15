export const translateBlock = (block) => {
    const blockTranslations = {
        sender: "Отправитель",
        receiver: "Получатель",
        address: "Адрес доставки",
        package: "Посылка"
    }
    return blockTranslations[block]
}