import { useNavigate } from "react-router"


const ErrorView = () => {

    let navigate = useNavigate()

    return (
        <>
            <h1>
                Something went wrong!
            </h1>
            <a onClick={() => navigate("/error")}>
                go home
            </a>
        </>
    )
}

export default ErrorView