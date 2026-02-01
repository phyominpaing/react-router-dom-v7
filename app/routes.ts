import {
  type RouteConfig,
  index,
  layout,
  route,
} from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("about", "routes/about.tsx"),
  route("contact", "routes/contact.tsx"),
  route("post/:id", "routes/post.tsx"),

    route("dashboard", "routes/dashboard.tsx" , [
      route("create-post", "routes/create-post.tsx"),
      route("profile", "routes/profile.tsx"),
    ]),

//   layout("routes/dashboard.tsx", [
//     route("create-post", "routes/create-post.tsx"),
//     route("profile", "routes/profile.tsx"),
//   ]),
] satisfies RouteConfig;
