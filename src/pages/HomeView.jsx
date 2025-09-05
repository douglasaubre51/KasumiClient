import Auth from "../services/auth.service.js"

function HomeView() {

    let auth = new Auth()

    return (
        <>
            <title>
                Home
            </title>
            <h1>
                Welcome to Kasumi!
            </h1>
            <span>
                create new events!
            </span>

            <button onClick={auth.redirectToAuthProvider}>
                get started
            </button>
        </>
    )
}

export default HomeView