export const OrderDetails = ({ data }) => {
    return (
        <div>
            <h3>Данные по заказу №{data.id}</h3>
            <p>Ф.И.О получателя: {data.sender.lastname}  {data.sender.firstname} {data.sender.middlename}</p>
            <p>Дата рождения получаетеля: {data.sender.birthDate}</p>
            {data.sender.registrationAdress && <p>Адрес проживания получаетеля: {data.sender.registrationAdress}</p>}
            <hr />
            <p>Ф.И.О отправителя: {data.receiver.lastname}  {data.receiver.firstname} {data.receiver.middlename}</p>
            <p>Дата рождения отправителя: {data.receiver.birthDate}</p>
            {data.receiver.registrationAdress && <p>Адрес проживания отправителя: {data.receiver.registrationAdress}</p>}
            <hr />
            <p>Адрес доставки: город {data.address.city}, улица {data.address.street} {data.address.house}-{data.address.apartment}</p>
            {data.address.comment && <p>Сообщение для курьера: {data.address.comment}</p>}
            <hr />
            <p>Тип посылки: {data.package.type}</p>
            <p>Вес посылки: {data.package.weight} кг</p>
            {data.package.comment && <p>Сообщение для курьера: {data.package.comment}</p>}
        </div>
    )
}