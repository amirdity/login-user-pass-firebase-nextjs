import Title from "./components/Title";
import Axios from "./components/Axios";
import Train from "./components/Train";
import AxiosRequest from "./components/AxiosRequest";
import Input from "./components/form/InputProp";
import RegisterForm from "./components/form/RegisterForm";
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 font-sans">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        {/* <Title/> */}
        {/* <Axios/> */}
        {/* <Train/> */}
        {/* <AxiosRequest /> */}
        <section>
          <RegisterForm />
        </section>
      </div>
    </main>
  );
}
