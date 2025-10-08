import "./App.css";
import { AppRouter } from "./routes/AppRouter";
import { TanStackProvider } from "./plugins/TanStackProvider";
import { HeroUIProvider } from "@heroui/system";
import { Provider } from "react-redux";
import { store, persistor } from "./redux/store";
import { PersistGate } from "redux-persist/integration/react";
import { SpinnerLogin } from "./shared/components/spinners/spinnerLogin/SpinnerLogin";
import { ToastProvider } from "@heroui/react";

function App() {
  return (
    <>
      <Provider store={store}>
        <PersistGate
          loading={
            <div className="w-full h-screen flex justify-center items-center">
              <SpinnerLogin />
            </div>
          }
          persistor={persistor}
        >
          <HeroUIProvider>
            <ToastProvider
              placement="top-right"
              toastProps={{ timeout: 4000 }}
            />
            <TanStackProvider>
              <AppRouter />
            </TanStackProvider>
          </HeroUIProvider>
        </PersistGate>
      </Provider>
    </>
  );
}

export default App;
