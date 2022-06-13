function Terms() {

    return (
        <main>
            <section className="bg-primary pt-5 rounded-bottom text-white">
                <div className="container mb-4 py-5">
                    <h1 className="display-5 fw-bold">Terms of Service</h1>
                </div>
            </section>
            <section className="pb-5 pt-5">
                <div className="container pb-5 pt-5">
                    <div className="gy-5 row">
                        <div className="card">
                            <div className="card-body pe-5 ps-5">
                                <h4 className="card-title text-center">ChatX LLC.</h4>
                                <h6 className="card-subtitle mb-2 text-center text-muted">Terms of Service</h6>
                                <p className="card-text text-center">By signing up for Telegram, you accept our Privacy
                                    Policy and agree not to:</p>
                                <ul className="list-group">
                                    <li className="list-group-item">Use our service to send spam or scam users.<br/>
                                    </li>
                                    <li className="list-group-item">Promote violence on publicly viewable ChatX rooms,
                                        bots, etc.
                                    </li>
                                    <li className="list-group-item">Post illegal pornographic content on publicly
                                        viewable ChatX Rooms, bots, etc.
                                    </li>
                                    <figure className="mt-5 text-center">
                                        <blockquote className="blockquote">
                                            <p>Citizens of EU countries and the United Kingdom must be at least 16 years
                                                old to sign up.</p>
                                        </blockquote>
                                    </figure>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}

export default Terms;