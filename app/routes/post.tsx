import type { Route } from "./+types/post";

export async function loader({ params }: Route.LoaderArgs) {
  const id = params.id;
  return { id };
}

const post = ({ loaderData }: Route.ComponentProps) => {
  return <div>Post Page - {loaderData.id}</div>;
};

export default post;
