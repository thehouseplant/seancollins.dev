import type { ComponentChildren } from "preact";

type Props = {
  children: ComponentChildren;
}

export function Container(props: Props) {
  return <div class="bg-white w-full py-2 px-10 flex flex-col dark:(bg-gray-900 text-gray-300)">{props.children}</div>;
}