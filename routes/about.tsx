import { Head } from "$fresh/runtime.ts";
import { Container } from "../components/Container.tsx";

export default function AboutPage() {
  return (
    <>
      <Head>
        <title>Sean Collins</title>
      </Head>
      <main>
        <Container>
          <h1>About</h1>
        </Container>
      </main>
    </>
  );
}
