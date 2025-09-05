import { jwtDecode } from "jwt-decode"

class Auth {

    constructor() {
    }

    redirectToAuthProvider() {
        // @ts-ignore
        let WAGURIBaseUri = import.meta.env.VITE_WAGURI_URI_BASE
        // @ts-ignore
        let ProjectId = import.meta.env.VITE_PROJECT_ID

        const uri = WAGURIBaseUri + "/Auth/Login/" + ProjectId

        // redirect to waguri login view
        window.location.href = uri
    }

    verifyJwtToken(token) {
        console.log(`verifying: ${token}`)

        if (token == null)
            return false

        return jwtDecode(token)
    }
}

export default Auth