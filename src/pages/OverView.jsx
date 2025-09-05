import {
    useParams,
    useNavigate
} from "react-router"

import Auth from "../services/auth.service.js"

function Overview() {

    let navigate = useNavigate()

    try {
        // token verification
        const params = useParams()
        let auth = new Auth()
        let token = auth.verifyJwtToken(params.token)
        if (token == false)
            throw new Error("invalid jwt token!")

        return (
            <>
                <h1>
                    Overview
                </h1>
            </>
        )
    }
    catch (e) {
        console.log(e)

        return (
            <>
                {navigate("/error")}
            </>
        )
    }
}

export default Overview