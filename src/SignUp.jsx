
import React, { useState } from "react";

function SignUp() {
    const [validated, setValidated] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;

        if (form.checkValidity() === false) {
            event.stopPropagation();
        }

        setValidated(true);
    };

    return (
        <div className="container d-flex justify-content-center align-items-center mt-5 mb-3" style={{ minHeight: "60vh" }}>
            <div className="bg-light-subtle border border-primary rounded p-4 shadow-sm w-100" style={{ maxWidth: "600px" }}>
                <h2 className="text-center">Sign Up Page</h2>
                <form noValidate className={`needs-validation ${validated ? "was-validated" : ""}`} onSubmit={handleSubmit}>
                    <div className="mb-3 mt-4">
                        <label htmlFor="username" className="form-label">Username:</label>
                        <input type="text" id="username" name="username" placeholder="Enter the user name" className="form-control" required />
                        <div className="valid-feedback">Looks good.</div>
                        <div className="invalid-feedback">Please enter the username</div>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="gmail" className="form-label">Gmail:</label>
                        <input type="email" id="gmail" name="gmail" placeholder="Enter Gmail" className="form-control" required />
                        <div className="invalid-feedback">Enter Gmail</div>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="password" className="form-label">Password:</label>
                        <input type="password" id="password" name="password" placeholder="Enter the password" className="form-control" required />
                        <div className="invalid-feedback">Enter password</div>
                    </div>
                    <button className="btn btn-outline-primary w-100" type="submit">Sign Up</button>
                    <p className="mt-3 text-center">Already have an account? <a className="login_link" href="/login">Login</a></p>
                </form>
            </div>
        </div>
    );
}

export default SignUp;
