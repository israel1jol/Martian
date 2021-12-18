const Login = () => {
    return (
        <div className="container ">
            <div className="d-flex justify-content-center con align-items-center">
                <div>
                    <div className="display-6 text-center">Login</div>
                    <form className="p-3">
                        <div className="form-group">
                            <label>Email</label>
                            <input type="email" className="form-control" required/>
                        </div>
                        <div className="form-group">
                            <label>Password</label>
                            <input type="password" className="form-control" required/>
                        </div>
                        <input type="submit" className="btn btn-lg btn-outline-success mx-5 mt-4" value="Login"/>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login