import { Outlet } from "react-router"

const dashboard = () => {
  return (
    <div>
        <h1>dashboard - shortcut</h1>
        <Outlet/>
        <h2>Footer</h2>
    </div>
  )
}

export default dashboard