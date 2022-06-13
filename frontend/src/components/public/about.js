function About() {
    return (
        <main>
            <section className="bg-primary pt-5 rounded-bottom text-white">
                <div className="container mb-4 py-5">
                    <h1 className="display-5 fw-bold">About</h1>
                </div>
            </section>
            <section className="border-bottom pb-5 pt-5">
                <div className="container">
                    <div className="justify-content-center row">
                        <div className="col-6 col-lg-3 col-sm-6 pb-3 pt-3">
                            <div className="bg-primary col-12 col-lg-12 px-4 py-5 rounded text-dark">
                                <svg xmlns="http://www.w3.org/2000/svg" width="3rem" height="3rem" fill="currentColor"
                                     className="mb-3 text-white" viewBox="0 0 16 16">
                                    <path
                                        d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z"/>
                                </svg>
                                <h2 className="fw-bold h1 mb-1 text-white">120+</h2>
                                <p className="mb-0 text-white">Total Users</p>
                            </div>
                        </div>
                        <div className="col-6 col-lg-3 col-sm-6 pb-3 pt-3">
                            <div className="align-content-end bg-warning px-4 py-5 rounded text-dark">
                                <svg xmlns="http://www.w3.org/2000/svg" width="3rem" height="3rem" fill="currentColor"
                                     className="mb-3 text-white" viewBox="0 0 16 16">
                                    <path fill-rule="evenodd"
                                          d="M2 13.5V7h1v6.5a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5V7h1v6.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5zm11-11V6l-2-2V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5z"/>
                                    <path fill-rule="evenodd"
                                          d="M7.293 1.5a1 1 0 0 1 1.414 0l6.647 6.646a.5.5 0 0 1-.708.708L8 2.207 1.354 8.854a.5.5 0 1 1-.708-.708L7.293 1.5z"/>
                                </svg>
                                <h2 className="fw-bold h1 mb-1 text-white">1349+</h2>
                                <p className="mb-0 text-white">Rooms Created</p>
                            </div>
                        </div>
                        <div className="col-6 col-lg-3 col-sm-6 pb-3 pt-3">
                            <div className="align-content-end bg-info px-4 py-5 rounded text-dark">
                                <svg xmlns="http://www.w3.org/2000/svg" width="3rem" height="3rem" fill="currentColor"
                                     className="mb-3 text-white" viewBox="0 0 16 16">
                                    <path fill-rule="evenodd"
                                          d="M10.354 6.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7 8.793l2.646-2.647a.5.5 0 0 1 .708 0z"/>
                                    <path
                                        d="m10.273 2.513-.921-.944.715-.698.622.637.89-.011a2.89 2.89 0 0 1 2.924 2.924l-.01.89.636.622a2.89 2.89 0 0 1 0 4.134l-.637.622.011.89a2.89 2.89 0 0 1-2.924 2.924l-.89-.01-.622.636a2.89 2.89 0 0 1-4.134 0l-.622-.637-.89.011a2.89 2.89 0 0 1-2.924-2.924l.01-.89-.636-.622a2.89 2.89 0 0 1 0-4.134l.637-.622-.011-.89a2.89 2.89 0 0 1 2.924-2.924l.89.01.622-.636a2.89 2.89 0 0 1 4.134 0l-.715.698a1.89 1.89 0 0 0-2.704 0l-.92.944-1.32-.016a1.89 1.89 0 0 0-1.911 1.912l.016 1.318-.944.921a1.89 1.89 0 0 0 0 2.704l.944.92-.016 1.32a1.89 1.89 0 0 0 1.912 1.911l1.318-.016.921.944a1.89 1.89 0 0 0 2.704 0l.92-.944 1.32.016a1.89 1.89 0 0 0 1.911-1.912l-.016-1.318.944-.921a1.89 1.89 0 0 0 0-2.704l-.944-.92.016-1.32a1.89 1.89 0 0 0-1.912-1.911l-1.318.016z"/>
                                </svg>
                                <h2 className="fw-bold h1 mb-1 text-white">5+</h2>
                                <p className="mb-0 text-white">Partners</p>
                            </div>
                        </div>
                        <div className="col-6 col-lg-3 col-sm-6 pb-3 pt-3">
                            <div className="align-content-end bg-success px-4 py-5 rounded text-dark">
                                <svg xmlns="http://www.w3.org/2000/svg" width="3rem" height="3rem" fill="currentColor"
                                     className="mb-3 text-white" viewBox="0 0 16 16">
                                    <path
                                        d="M2.678 11.894a1 1 0 0 1 .287.801 10.97 10.97 0 0 1-.398 2c1.395-.323 2.247-.697 2.634-.893a1 1 0 0 1 .71-.074A8.06 8.06 0 0 0 8 14c3.996 0 7-2.807 7-6 0-3.192-3.004-6-7-6S1 4.808 1 8c0 1.468.617 2.83 1.678 3.894zm-.493 3.905a21.682 21.682 0 0 1-.713.129c-.2.032-.352-.176-.273-.362a9.68 9.68 0 0 0 .244-.637l.003-.01c.248-.72.45-1.548.524-2.319C.743 11.37 0 9.76 0 8c0-3.866 3.582-7 8-7s8 3.134 8 7-3.582 7-8 7a9.06 9.06 0 0 1-2.347-.306c-.52.263-1.639.742-3.468 1.105z"/>
                                    <path
                                        d="M4 5.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zM4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8zm0 2.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5z"/>
                                </svg>
                                <h2 className="fw-bold h1 mb-1 text-white">15+</h2>
                                <p className="mb-0 text-white">Messages Sent</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container pb-5 pt-5">
                    <div className="row">
                        <div className="col-lg-4">
                            <h2 className="h5 text-primary">About us</h2>
                            <h3 className="h1 mb-4 text-dark">We are one of the fastest and secured instant messaging
                                platforms.</h3>
                        </div>
                        <div className="col-lg-8 col-xl-7 offset-xl-1">
                            <h4 className="h3 mb-4 text-dark">Basis of ChatX</h4>
                            <p className="lead mb-4">ChatX is a cross-platform messaging service with enhanced
                                encryption and privacy. Messages feature client-to-server encryption, but Secret Chat
                                messages have end-to-end encryption. ChatX also supports group chats and
                                self-destructing messages as well.</p>
                            <div className="row">
                                <div className="col-md-5">
                                    <h4 className="mb-3 text-dark">Who is it for?</h4>
                                    <p>ChatX is for everyone who wants fast and reliable messaging and calls. Business
                                        users and small teams may like the large groups, usernames, desktop apps and
                                        powerful file sharing options.</p>
                                </div>
                                <div className="col-md-5 offset-md-1">
                                    <h4 className="mb-3 text-dark">How is ChatX different?</h4>
                                    <p>Unlike other chat applications, ChatX is a cloud-based messenger with seamless
                                        sync. As a result, you can access your messages from several devices at once,
                                        including tablets and computers, and share an unlimited number of photos, videos
                                        and files (doc, zip, mp3, etc.) of up to 2 GB each.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}

export default About;