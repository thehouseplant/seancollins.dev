import { Head } from "$fresh/runtime.ts";
import { Container } from "../components/Container.tsx";

export default function HomePage() {
  return (
    <>
      <Head>
        <title>Sean Collins</title>
      </Head>
      <main>
        <Container>
          <h1>Home</h1>
        </Container>
      </main>
    </>
  );
}
