import { Head } from "$fresh/runtime.ts";
import { Container } from "../components/Container.tsx";

export default function PortfolioPage() {
  return (
    <>
      <Head>
        <title>Sean Collins</title>
      </Head>
      <main>
        <Container>
          <h1>Porftolio</h1>
        </Container>
      </main>
    </>
  );
}
