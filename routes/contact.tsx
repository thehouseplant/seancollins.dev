import { Head } from "$fresh/runtime.ts";
import { Container } from "../components/Container.tsx";

export default function ContactPage() {
  return (
    <>
      <Head>
        <title>Sean Collins</title>
      </Head>
      <main>
        <Container>
          <h1>Contact</h1>
        </Container>
      </main>
    </>
  );
}
