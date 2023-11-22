import App from "../App"
import Accounts from "../Pages/accounts/Accounts"
import Home from "../Pages/home/Home"
import NewBooking from "../Pages/newbooking/newbooking"
import Package from "../Pages/package/Package"
import PaymentState from "../Pages/paymentState/paymentState"
import Reservations from "../Pages/reservations/Reservations"
import ReservationsReports from "../Pages/reservationsReports/reservationsReports"
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
                path: "reservations",
                element: <Reservations />
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
            },
            {
                path: "resrvreports",
                element: <ReservationsReports />
            },
            {
                path: "newbooking",
                element: <NewBooking />
            }
        ]
    }
]

export default routes