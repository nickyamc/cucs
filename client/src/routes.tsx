import { createBrowserRouter } from "react-router-dom";
import { Error404 } from "./pages/Error";
import { LogIn, Register } from "./pages";

const router = createBrowserRouter([
	{
		path: "/",
		element: <></>,
		errorElement: <Error404 />,
		children: [
			{
				index: true,
				element: <></>,
			},
		],
	},
	{
		path: "/login",
		element: <LogIn />,
	},
	{
		path: "/register",
		element: <Register />,
	},
]);

export default router;
