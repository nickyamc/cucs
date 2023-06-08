import { createBrowserRouter } from "react-router-dom";
import { Admin, Dashboard } from "./pages/Admin";
import { Error404 } from "./pages/Error";

const router = createBrowserRouter([
	{
		path: "/",
		element: <></>,
		errorElement: <Error404 />,
		children: [
			{
				index: true,
				element: <></>
			}
		]
	},
	{
		path: "/admin",
		element: <Admin />,
		children: [
			{
				index: true,
				element: <Dashboard />
			}
		]
	},
]);

export default router;
