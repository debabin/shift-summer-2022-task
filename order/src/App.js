import './styles.css';
import { DeliveryOrderForm } from './DeliveryOrderForm';
import AppHeader from './AppHeader';

export const App = () => {
  return (
    <div className="app">
      <header className="app-header">
        <AppHeader />
      </header>
      <div className="delivery-order-form">
        <DeliveryOrderForm />
      </div>
    </div>
  );
}
