const SignUp = () => {
    return (
        <div className="container ">
            <div className="d-flex justify-content-center con align-items-center">
                <div>
                    <div className="display-6 text-center">Sign Up</div>
                    <form className="p-3">
                        <div className="form-group">
                            <label>FirstName</label>
                            <input type="text" className="form-control " required/>
                        </div>
                        <div className="form-group">
                            <label>LastName</label>
                            <input type="text" className="form-control" required/>
                        </div>
                        <div className="form-group">
                            <label>UserName</label>
                            <input type="text" className="form-control" required/>
                        </div>
                        <div className="form-group">
                            <label>Email</label>
                            <input type="email" className="form-control" required/>
                        </div>
                        <div className="form-group">
                            <label>Password</label>
                            <input type="password" className="form-control" required/>
                        </div>
                        <input type="submit" className="btn btn-lg btn-outline-success mx-5 mt-4" value="Sign Up"/>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default SignUp