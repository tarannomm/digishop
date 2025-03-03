
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {HeroUIProvider} from "@heroui/react";
import AppRoutes from "./routes/AppRoutes";
import Layout from "./components/layout/Layout";
function App() {
  return (
    <div className="bg-lighten h-screen">
      <HeroUIProvider>
        <Layout>
        <AppRoutes/>
        <ToastContainer
          position="bottom-right"
          autoClose={5000}
          hideProgressBar={true}
          newestOnTop={false}
          closeOnClick={false}
          theme="colored"
        />
        </Layout>
        </HeroUIProvider>
    </div>
  );
}

export default App;
