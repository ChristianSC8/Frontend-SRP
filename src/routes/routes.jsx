import App from "../App"
import Accounts from "../Pages/accounts/Accounts"
import Home from "../Pages/home/Home"
import Package from "../Pages/package/Package"
import PaymentState from "../Pages/paymentState/paymentState"
import Dashboard from "../dashboard/dashboard"

const routes = [
    {
        path: "/",
        element: <App />
    },
    {
        path: "/dashboard",
        element: <Dashboard />,
        children: [
            {
                index: true,
                element: <Home />
            },
            {
                path: "start",
                element: <Home />
            },
            {
                path: "package",
                element: <Package />
            },
            {
                path: "paymentstate",
                element: <PaymentState />
            },
            {
                path: "accounts",
                element: <Accounts />
            }
        ]
    }
]

export default routes