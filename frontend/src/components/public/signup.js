function Signup() {
    return (
        <main>
            <section className="border-bottom pb-auto pt-auto">
                <div className="container mb-auto mt-auto pb-5 pt-5">
                    <div className="col-lg-11 col-md-9 col-xl-9 me-auto ms-auto p-auto">
                        <div className="bg-dark overflow-hidden rounded-3">
                            <div className="align-items-center g-0 row">
                                <div className="col-lg-6 p-4 ps-sm-5 pe-sm-5 text-center text-white">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="75%" height="100%"
                                         viewBox="0 0 350 350" fill="white" preserveAspectRatio="true"
                                         className="h-100 img-fluid m-auto mh-100 mw-100 w-100">
                                        <path fill="currentColor" fillRule="evenodd"
                                              d="M350 175c0 96.65-78.35 175-175 175S0 271.65 0 175c0-29.761 7.429-57.787 20.534-82.324l60.75 60.749A181.053 181.053 0 0 0 80 175c0 82.843 55.964 150 125 150s125-67.157 125-150S274.036 25 205 25c-31.875 0-60.964 14.317-83.044 37.885L84.35 25.279C110.789 9.236 141.816 0 175 0c96.65 0 175 78.35 175 175ZM115.372 70.443 75.765 30.836a175.77 175.77 0 0 0-17.52 13.803l44.34 44.339a148.123 148.123 0 0 1 12.787-18.535Zm-20.033 32.503L47.511 55.118a175.84 175.84 0 0 0-16.236 20.015l54.535 54.535a166.28 166.28 0 0 1 9.53-26.722Z"
                                              clipRule="evenodd"/>
                                        <path fill="currentColor"
                                              d="M124.016 174.72c0-2.08.352-4.112 1.056-6.096a17.997 17.997 0 0 1 3.168-5.472c1.376-1.664 3.072-2.976 5.088-3.936 2.016-.992 4.304-1.488 6.864-1.488 3.04 0 5.632.704 7.776 2.112 2.176 1.376 3.776 3.152 4.8 5.328l-2.64 1.632c-.736-1.504-1.664-2.688-2.784-3.552-1.12-.896-2.32-1.536-3.6-1.92a12.672 12.672 0 0 0-3.744-.576c-2.048 0-3.856.416-5.424 1.248a11.934 11.934 0 0 0-3.984 3.264 14.46 14.46 0 0 0-2.4 4.56 16.276 16.276 0 0 0-.816 5.088c0 1.888.32 3.696.96 5.424a15.04 15.04 0 0 0 2.688 4.608 13.818 13.818 0 0 0 4.032 3.168c1.568.768 3.264 1.152 5.088 1.152 1.28 0 2.592-.224 3.936-.672a11.97 11.97 0 0 0 3.744-2.064c1.184-.928 2.128-2.128 2.832-3.6l2.784 1.44c-.704 1.696-1.792 3.136-3.264 4.32a15.784 15.784 0 0 1-4.944 2.688c-1.792.608-3.552.912-5.28.912-2.336 0-4.48-.496-6.432-1.488a17.294 17.294 0 0 1-5.088-4.032 19.229 19.229 0 0 1-3.264-5.664c-.768-2.112-1.152-4.24-1.152-6.384ZM179.53 192h-3.264v-13.968c0-2.816-.496-4.928-1.488-6.336-.992-1.44-2.416-2.16-4.272-2.16-1.216 0-2.432.32-3.648.96-1.184.608-2.24 1.456-3.168 2.544a9.52 9.52 0 0 0-1.92 3.648V192h-3.264v-35.04h3.264v15.696c.992-1.856 2.368-3.328 4.128-4.416 1.792-1.12 3.696-1.68 5.712-1.68 1.44 0 2.656.256 3.648.768a5.937 5.937 0 0 1 2.448 2.256c.64.96 1.104 2.096 1.392 3.408.288 1.28.432 2.736.432 4.368V192Zm4.945-7.2c0-1.568.448-2.912 1.344-4.032.896-1.152 2.128-2.032 3.696-2.64 1.6-.64 3.44-.96 5.52-.96 1.216 0 2.48.096 3.792.288 1.312.192 2.48.48 3.504.864v-2.112c0-2.112-.624-3.792-1.872-5.04-1.248-1.248-2.976-1.872-5.184-1.872-1.344 0-2.672.256-3.984.768-1.28.48-2.624 1.2-4.032 2.16l-1.248-2.304c1.632-1.12 3.232-1.952 4.8-2.496a13.82 13.82 0 0 1 4.8-.864c3.072 0 5.504.88 7.296 2.64 1.792 1.76 2.688 4.192 2.688 7.296v11.568c0 .448.096.784.288 1.008.192.192.496.304.912.336V192c-.352.032-.656.064-.912.096s-.448.032-.576 0c-.8-.032-1.408-.288-1.824-.768-.416-.48-.64-.992-.672-1.536l-.048-1.824c-1.12 1.44-2.576 2.56-4.368 3.36-1.792.768-3.616 1.152-5.472 1.152-1.6 0-3.056-.336-4.368-1.008-1.28-.704-2.288-1.632-3.024-2.784a7.469 7.469 0 0 1-1.056-3.888Zm16.752 1.92c.352-.448.624-.88.816-1.296.192-.416.288-.784.288-1.104v-3.648a19.858 19.858 0 0 0-3.408-.96 18.315 18.315 0 0 0-3.504-.336c-2.336 0-4.224.464-5.664 1.392-1.44.928-2.16 2.192-2.16 3.792 0 .928.24 1.808.72 2.64.48.8 1.184 1.472 2.112 2.016.928.512 2.016.768 3.264.768 1.568 0 3.024-.304 4.368-.912 1.376-.608 2.432-1.392 3.168-2.352Zm23.232 4.08c-.256.096-.656.272-1.2.528-.544.256-1.2.48-1.968.672-.768.192-1.6.288-2.496.288a6.706 6.706 0 0 1-2.64-.528c-.8-.352-1.44-.88-1.92-1.584-.48-.736-.72-1.632-.72-2.688v-17.904h-3.456v-2.592h3.456v-8.448h3.264v8.448h5.76v2.592h-5.76v16.992c.064.896.384 1.568.96 2.016a3.392 3.392 0 0 0 2.064.672c.896 0 1.712-.144 2.448-.432.736-.32 1.184-.544 1.344-.672l.864 2.64Zm14.749-50.96 16.896 25.152 16.8-25.152h14.4l-23.616 34.56 22.848 33.6h-14.4l-16.032-24.192L239.976 208H225.48l22.848-33.6-23.616-34.56h14.496Z"/>
                                    </svg>
                                </div>
                                <div className="bg-white col-lg-6 pb-5 ps-4 ps-sm-5 pe-4 pe-sm-5 pt-5">
                                    <div className="pb-lg-4 pt-lg-4">
                                        <h1 className="h2 mb-4 text-dark">Create an Account</h1>
                                        <form>
                                            <div className="mb-3">
                                                <div className="input-group"><span className="bg-light input-group-text"
                                                                                   id="user-name-input"><svg
                                                    xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                                                    fill="currentColor" width="1em" height="1em">
                                                <g>
                                                    <path fill="none" d="M0 0h24v24H0z"></path>
                                                    <path
                                                        d="M20 22h-2v-2a3 3 0 0 0-3-3H9a3 3 0 0 0-3 3v2H4v-2a5 5 0 0 1 5-5h6a5 5 0 0 1 5 5v2zm-8-9a6 6 0 1 1 0-12 6 6 0 0 1 0 12zm0-2a4 4 0 1 0 0-8 4 4 0 0 0 0 8z"></path>
                                                </g>
                                            </svg></span>
                                                    <input type="text" className="form-control" placeholder="Full Name"
                                                           aria-label="Full Name" aria-describedby="user-name-input"/>
                                                </div>
                                            </div>
                                            <div className="mb-3">
                                                <div className="input-group"><span className="bg-light input-group-text"
                                                                                   id="user-email-input"><svg
                                                    xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                                                    fill="currentColor" width="1em" height="1em">
                                                <g>
                                                    <path fill="none" d="M0 0h24v24H0z"></path>
                                                    <path
                                                        d="M3 3h18a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zm17 4.238l-7.928 7.1L4 7.216V19h16V7.238zM4.511 5l7.55 6.662L19.502 5H4.511z"></path>
                                                </g>
                                            </svg></span>
                                                    <input type="email" className="form-control" placeholder="Email"
                                                           aria-label="User Email" aria-describedby="user-email-input"/>
                                                </div>
                                            </div>
                                            <div className="mb-3">
                                                <div className="input-group"><span className="bg-light input-group-text"
                                                                                   id="user-password-input"><svg
                                                    xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                                                    fill="currentColor" width="1em" height="1em">
                                                <g>
                                                    <path fill="none" d="M0 0h24v24H0z"></path>
                                                    <path
                                                        d="M10.758 11.828l7.849-7.849 1.414 1.414-1.414 1.415 2.474 2.474-1.414 1.415-2.475-2.475-1.414 1.414 2.121 2.121-1.414 1.415-2.121-2.122-2.192 2.192a5.002 5.002 0 0 1-7.708 6.294 5 5 0 0 1 6.294-7.708zm-.637 6.293A3 3 0 1 0 5.88 13.88a3 3 0 0 0 4.242 4.242z"></path>
                                                </g>
                                            </svg></span>
                                                    <input type="password" className="form-control"
                                                           placeholder="Password" aria-label="Password"
                                                           aria-describedby="user-password-input"/>
                                                </div>
                                            </div>
                                            <div className="mb-3 form-check" required>
                                                <input type="checkbox" className="form-check-input" id="exampleCheck1"
                                                       required/>
                                                <label className="form-check-label" htmlFor="exampleCheck1">I accept
                                                    the <a href="/terms">Terms &amp; Condition</a>
                                                </label>
                                            </div>
                                            <button type="submit"
                                                    className="btn btn-primary d-block fw-bold pb-2 pe-3 ps-3 pt-2 text-white w-100">Signup
                                            </button>
                                        </form>
                                        <p className="mb-4 mt-4 text-center">Or sign up with</p>
                                        <div className="d-flex flex-wrap justify-content-center mb-4">
                                            <button type="button" className="btn btn-outline-dark m-1 ps-3">
                                                <svg width="20" height="20" viewBox="0 0 256 262"
                                                     xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid"
                                                     className="me-1">
                                                    <path
                                                        d="M255.878 133.451c0-10.734-.871-18.567-2.756-26.69H130.55v48.448h71.947c-1.45 12.04-9.283 30.172-26.69 42.356l-.244 1.622 38.755 30.023 2.685.268c24.659-22.774 38.875-56.282 38.875-96.027"
                                                        fill="#4285F4"/>
                                                    <path
                                                        d="M130.55 261.1c35.248 0 64.839-11.605 86.453-31.622l-41.196-31.913c-11.024 7.688-25.82 13.055-45.257 13.055-34.523 0-63.824-22.773-74.269-54.25l-1.531.13-40.298 31.187-.527 1.465C35.393 231.798 79.49 261.1 130.55 261.1"
                                                        fill="#34A853"/>
                                                    <path
                                                        d="M56.281 156.37c-2.756-8.123-4.351-16.827-4.351-25.82 0-8.994 1.595-17.697 4.206-25.82l-.073-1.73L15.26 71.312l-1.335.635C5.077 89.644 0 109.517 0 130.55s5.077 40.905 13.925 58.602l42.356-32.782"
                                                        fill="#FBBC05"/>
                                                    <path
                                                        d="M130.55 50.479c24.514 0 41.05 10.589 50.479 19.438l36.844-35.974C195.245 12.91 165.798 0 130.55 0 79.49 0 35.393 29.301 13.925 71.947l42.211 32.783c10.59-31.477 39.891-54.251 74.414-54.251"
                                                        fill="#EB4335"/>
                                                </svg>
                                                <span className="align-middle">Google</span>
                                            </button>
                                            <button type="button" className="btn btn-outline-dark m-1 ps-3">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"
                                                     viewBox="88.428 12.828 107.543 207.085" className="me-1">
                                                    <path
                                                        d="M158.232 219.912v-94.461h31.707l4.747-36.813h-36.454V65.134c0-10.658 2.96-17.922 18.245-17.922l19.494-.009V14.278c-3.373-.447-14.944-1.449-28.406-1.449-28.106 0-47.348 17.155-47.348 48.661v27.149H88.428v36.813h31.788v94.461l38.016-.001z"
                                                        fill="#3c5a9a"></path>
                                                </svg>
                                                <span className="align-middle">Facebook</span>
                                            </button>
                                        </div>
                                        <p className="mb-0 small text-center">Already have an account? <a
                                            href="/login">Login</a></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>

    );
}

export default Signup;