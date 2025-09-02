import './SignUp.css'

function SignUp() {
    return (
        <div className='container'>
            <h1>
                Use waguri account
            </h1>
            <div className='form-group'>
                <span>
                    email
                </span>
                <input type='text' />
                <button>
                    continue
                </button>
            </div>
        </div>
    )
}

export default SignUp