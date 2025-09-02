import "./Login.css"

function Login() {
    return (
        <div className='container'>

            <span className='header-1'>
                Login
            </span>
            {/* form container */}
            <div className="form-container">

                <div className="form-group">
                    <span className="label">
                        email id
                    </span>
                    <input type='text' />
                </div>

                <div className="form-group">
                    <span className="label">
                        password
                    </span>
                    <input type='password' />
                </div>

                <button className="secondary-btn">
                    continue
                </button>
            </div>

        </div>
    )
}

export default Login