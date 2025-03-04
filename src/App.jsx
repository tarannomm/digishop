
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {HeroUIProvider} from "@heroui/react";
import AppRoutes from "./routes/AppRoutes";
import Layout from "./components/layout/Layout";
import { CookiesProvider } from "react-cookie";
function App() {
  return (
    <div className="bg-lighten min-h-screen py-4 px-12">
      <HeroUIProvider>
        <CookiesProvider>
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
        </CookiesProvider>
        
        </HeroUIProvider>
    </div>
  );
}

export default App;
