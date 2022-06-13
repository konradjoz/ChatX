function Contact() {
    return (
        <main>
            <section className="bg-primary pt-5 rounded-bottom text-white">
                <div className="container mb-4 py-5">
                    <h1 className="display-5 fw-bold">Contact</h1>
                </div>
            </section>
            <section className="py-5">
                <div className="container py-5 rounded rounded-3">
                    <div className="row">
                        <div className="col-lg-6 col-xl-5">
                            <div className="bg-light p-5 rounded rounded-3">
                                <div>
                                    <h2 className="h5 text-primary">Support</h2>
                                    <h3 className="display-4 fw-bold mb-5 text-dark">Get in touch</h3>
                                    <h3 className="display-4 fw-bold mb-5 text-dark"></h3>
                                    <ul className="list-unstyled mb-0">
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-xl-7">
                            <div className="px-4 px-xl-5">
                                <h2 className="mb-4 text-dark">Contact Information</h2>
                                <form>
                                    <div className="gx-3 row">
                                        <div className="col-md-6 mb-3">
                                            <input type="text" className="form-control p-3" id="inputName"
                                                   placeholder="Name" required/>
                                        </div>
                                        <div className="col-md-6 mb-3">
                                            <input type="email" className="form-control p-3" id="inputEmail"
                                                   placeholder="Email" required/>
                                        </div>
                                    </div>
                                    <div className="mb-3">
                                        <input type="text" className="form-control p-3" id="inputSubject"
                                               placeholder="Subject" required/>
                                    </div>
                                    <div className="mb-3">
                                        <textarea className="form-control p-3" rows="6" id="inputTextarea"
                                                  placeholder="Message" required></textarea>
                                    </div>
                                    <div className="form-check mb-4">
                                        <input type="checkbox" className="form-check-input" id="aboutCheck" required/>
                                        <label className="form-check-label" htmlFor="exampleCheck1">I agree to the <a
                                            href="/terms" target="_blank">Terms &amp; Conditions</a>
                                        </label>
                                    </div>
                                    <div className="text-end">
                                        <button className="btn btn-primary pe-4 ps-4 rounded-pill text-white"
                                                type="submit">
                                            <span>Submit</span>
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}

export default Contact;