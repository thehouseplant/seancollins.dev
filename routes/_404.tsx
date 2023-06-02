export function ServerCodePage(props: { serverCode: number, codeDescription: string }) {
  return (
    <>
      <div class="bg-white w-full py-2 px-10 flex flex-col dark:(bg-gray-900 text-gray-300)">
        <h1>{props.serverCode}</h1>
        <p>
          {props.codeDescription}
        </p>
        <p>
          <a href="/">Return Home</a>
        </p>
      </div>
    </>
  )
}

export default function PageNotFound() {
  return (
    <ServerCodePage
      serverCode={404}
      codeDescription={"We couldn't find the page you're looking for."}
    />
  );
}