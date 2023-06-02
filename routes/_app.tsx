import { AppProps } from "$fresh/server.ts";
import { Header } from "../components/Header.tsx";
import { Footer } from "../components/Footer.tsx";

export default function App({ Component }: AppProps) {
  return (
    <>
      <div>
        <Header />
        <Component />
        <Footer />
      </div>
    </>
  )
}