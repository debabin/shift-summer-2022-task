import {
  QueryClient,
  QueryClientProvider,
} from "react-query";
import OrderForm from "./components/OrderForm";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <OrderForm />
    </QueryClientProvider>
  );
}

export default App;
