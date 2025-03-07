import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { HeroUIProvider } from "@heroui/react";
import AppRoutes from "./routes/AppRoutes";
import Layout from "./components/layout/Layout";
import { CookiesProvider } from "react-cookie";
function App() {
  return (
    <div className="bg-lighten min-h-screen py-4 w-[100%]">
      <div className=" !w-[90%] md:w-[80%] m-auto">
        <HeroUIProvider>
          <CookiesProvider>
            <Layout>
              <AppRoutes />
              <ToastContainer
                position="top-right"
                autoClose={2000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick={false}
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
              />
            </Layout>
          </CookiesProvider>
        </HeroUIProvider>
      </div>
    </div>
  );
}

export default App;
