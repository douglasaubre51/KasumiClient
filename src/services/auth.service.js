import { jwtDecode } from "jwt-decode"

class Auth {

    // @ts-ignore
    WAGURIBaseUri = import.meta.env.VITE_WAGURI_URI_BASE
    // @ts-ignore
    KASUMIBaseUri = import.meta.env.VITE_KASUMI_URI_BASE
    // @ts-ignore
    ProjectId = import.meta.env.VITE_PROJECT_ID

    redirectToAuthProvider() {

        const uri = this.WAGURIBaseUri + "/Auth/Login/" + this.ProjectId

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