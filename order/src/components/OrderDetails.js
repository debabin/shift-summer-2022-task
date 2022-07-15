import { Button } from "./Button";
import { getDeliveryTime } from "../helpers/getDeliveryTime";

export const OrderDetails = ({ data, setState }) => {
    const onButtonClick = () => {
        setState({ showForm: true, data: "" })
    }
    return (
        <div className="order-details-wrapper">
            <h2>Данные по заказу <br /><span className="order-id">№{data.id}</span></h2>
            <div className="order-details">
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
            <br />
            <p>Посылка будет доставлена в течение {getDeliveryTime()}.</p>
            <Button onClick={onButtonClick}>Сделать новый заказ</Button>
        </div>
    )
}