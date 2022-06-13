import React from 'react';
import {NavLink} from 'react-router-dom';

function Home() {
    return (<main>
        <section className="bg-primary pb-5 pt-5 rounded-bottom text-white">
            <div className="container pb-5 pt-5">
                <div className="align-content-center align-items-center row">
                    <div className="col-lg-6 pb-3 pt-3">
                        <h1 className="display-4 fw-bold mb-3">ChatX</h1>
                        <p className="lead mb-4">Encrypted, instant, and fun messaging for the whole family.</p>
                        <NavLink to="/signup" className="btn btn-outline-light ps-4 pe-4 rounded-pill">Signup</NavLink>
                        <NavLink to="/contact" className="btn btn-light ms-2 ps-4 pe-4 rounded-pill">Contact</NavLink>
                    </div>
                    <div className="col-lg-6 col-xl-6 col-xxl-6 justify-content-center p-auto">
                        <svg xmlns="http://www.w3.org/2000/svg" width="75%" height="100%" viewBox="0 0 350 350"
                             fill="white" preserveAspectRatio
                             className="h-100 img-fluid m-auto mh-100 mw-100 w-100">
                            <path fill="currentColor" fillRule="evenodd"
                                  d="M350 175c0 96.65-78.35 175-175 175S0 271.65 0 175c0-29.761 7.429-57.787 20.534-82.324l60.75 60.749A181.053 181.053 0 0 0 80 175c0 82.843 55.964 150 125 150s125-67.157 125-150S274.036 25 205 25c-31.875 0-60.964 14.317-83.044 37.885L84.35 25.279C110.789 9.236 141.816 0 175 0c96.65 0 175 78.35 175 175ZM115.372 70.443 75.765 30.836a175.77 175.77 0 0 0-17.52 13.803l44.34 44.339a148.123 148.123 0 0 1 12.787-18.535Zm-20.033 32.503L47.511 55.118a175.84 175.84 0 0 0-16.236 20.015l54.535 54.535a166.28 166.28 0 0 1 9.53-26.722Z"
                                  clip-rule="evenodd"/>
                            <path fill="currentColor"
                                  d="M124.016 174.72c0-2.08.352-4.112 1.056-6.096a17.997 17.997 0 0 1 3.168-5.472c1.376-1.664 3.072-2.976 5.088-3.936 2.016-.992 4.304-1.488 6.864-1.488 3.04 0 5.632.704 7.776 2.112 2.176 1.376 3.776 3.152 4.8 5.328l-2.64 1.632c-.736-1.504-1.664-2.688-2.784-3.552-1.12-.896-2.32-1.536-3.6-1.92a12.672 12.672 0 0 0-3.744-.576c-2.048 0-3.856.416-5.424 1.248a11.934 11.934 0 0 0-3.984 3.264 14.46 14.46 0 0 0-2.4 4.56 16.276 16.276 0 0 0-.816 5.088c0 1.888.32 3.696.96 5.424a15.04 15.04 0 0 0 2.688 4.608 13.818 13.818 0 0 0 4.032 3.168c1.568.768 3.264 1.152 5.088 1.152 1.28 0 2.592-.224 3.936-.672a11.97 11.97 0 0 0 3.744-2.064c1.184-.928 2.128-2.128 2.832-3.6l2.784 1.44c-.704 1.696-1.792 3.136-3.264 4.32a15.784 15.784 0 0 1-4.944 2.688c-1.792.608-3.552.912-5.28.912-2.336 0-4.48-.496-6.432-1.488a17.294 17.294 0 0 1-5.088-4.032 19.229 19.229 0 0 1-3.264-5.664c-.768-2.112-1.152-4.24-1.152-6.384ZM179.53 192h-3.264v-13.968c0-2.816-.496-4.928-1.488-6.336-.992-1.44-2.416-2.16-4.272-2.16-1.216 0-2.432.32-3.648.96-1.184.608-2.24 1.456-3.168 2.544a9.52 9.52 0 0 0-1.92 3.648V192h-3.264v-35.04h3.264v15.696c.992-1.856 2.368-3.328 4.128-4.416 1.792-1.12 3.696-1.68 5.712-1.68 1.44 0 2.656.256 3.648.768a5.937 5.937 0 0 1 2.448 2.256c.64.96 1.104 2.096 1.392 3.408.288 1.28.432 2.736.432 4.368V192Zm4.945-7.2c0-1.568.448-2.912 1.344-4.032.896-1.152 2.128-2.032 3.696-2.64 1.6-.64 3.44-.96 5.52-.96 1.216 0 2.48.096 3.792.288 1.312.192 2.48.48 3.504.864v-2.112c0-2.112-.624-3.792-1.872-5.04-1.248-1.248-2.976-1.872-5.184-1.872-1.344 0-2.672.256-3.984.768-1.28.48-2.624 1.2-4.032 2.16l-1.248-2.304c1.632-1.12 3.232-1.952 4.8-2.496a13.82 13.82 0 0 1 4.8-.864c3.072 0 5.504.88 7.296 2.64 1.792 1.76 2.688 4.192 2.688 7.296v11.568c0 .448.096.784.288 1.008.192.192.496.304.912.336V192c-.352.032-.656.064-.912.096s-.448.032-.576 0c-.8-.032-1.408-.288-1.824-.768-.416-.48-.64-.992-.672-1.536l-.048-1.824c-1.12 1.44-2.576 2.56-4.368 3.36-1.792.768-3.616 1.152-5.472 1.152-1.6 0-3.056-.336-4.368-1.008-1.28-.704-2.288-1.632-3.024-2.784a7.469 7.469 0 0 1-1.056-3.888Zm16.752 1.92c.352-.448.624-.88.816-1.296.192-.416.288-.784.288-1.104v-3.648a19.858 19.858 0 0 0-3.408-.96 18.315 18.315 0 0 0-3.504-.336c-2.336 0-4.224.464-5.664 1.392-1.44.928-2.16 2.192-2.16 3.792 0 .928.24 1.808.72 2.64.48.8 1.184 1.472 2.112 2.016.928.512 2.016.768 3.264.768 1.568 0 3.024-.304 4.368-.912 1.376-.608 2.432-1.392 3.168-2.352Zm23.232 4.08c-.256.096-.656.272-1.2.528-.544.256-1.2.48-1.968.672-.768.192-1.6.288-2.496.288a6.706 6.706 0 0 1-2.64-.528c-.8-.352-1.44-.88-1.92-1.584-.48-.736-.72-1.632-.72-2.688v-17.904h-3.456v-2.592h3.456v-8.448h3.264v8.448h5.76v2.592h-5.76v16.992c.064.896.384 1.568.96 2.016a3.392 3.392 0 0 0 2.064.672c.896 0 1.712-.144 2.448-.432.736-.32 1.184-.544 1.344-.672l.864 2.64Zm14.749-50.96 16.896 25.152 16.8-25.152h14.4l-23.616 34.56 22.848 33.6h-14.4l-16.032-24.192L239.976 208H225.48l22.848-33.6-23.616-34.56h14.496Z"/>
                        </svg>
                    </div>
                </div>
            </div>
        </section>
        <section className="pb-5 pt-5">
            <div className="container pb-5 pt-5">
                <div className="align-items-center mb-3 row">
                    <div className="col-lg-7">
                        <h2 className="h5 mb-1 text-primary">Our Platform</h2>
                        <h3 className="h2 text-dark">Our platform introduces message encryption system</h3>
                    </div>
                    <div className="col-lg-auto ms-auto">
                    </div>
                </div>
                <div className="gap-3 gy-3 justify-content-center m-auto row">
                    <div className="bg-light col-lg-4 col-md-6 col-xl-3 pb-3 pt-3 rounded">
                        <div className="">
                            <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" fill="currentColor"
                                 className="bi bi-chat-text mb-3 text-primary" viewBox="0 0 16 16">
                                <path
                                    d="M2.678 11.894a1 1 0 0 1 .287.801 10.97 10.97 0 0 1-.398 2c1.395-.323 2.247-.697 2.634-.893a1 1 0 0 1 .71-.074A8.06 8.06 0 0 0 8 14c3.996 0 7-2.807 7-6 0-3.192-3.004-6-7-6S1 4.808 1 8c0 1.468.617 2.83 1.678 3.894zm-.493 3.905a21.682 21.682 0 0 1-.713.129c-.2.032-.352-.176-.273-.362a9.68 9.68 0 0 0 .244-.637l.003-.01c.248-.72.45-1.548.524-2.319C.743 11.37 0 9.76 0 8c0-3.866 3.582-7 8-7s8 3.134 8 7-3.582 7-8 7a9.06 9.06 0 0 1-2.347-.306c-.52.263-1.639.742-3.468 1.105z"/>
                            </svg>
                            <h4 className="h4 mb-3 text-dark">Instant Messaging</h4>
                            <p>Say &quot;hello&quot; to a different messaging experience. An unexpected focus on
                                privacy, combined with all of the features you expect.</p>
                        </div>
                    </div>
                    <div className="bg-light col-lg-4 col-md-6 col-xl-3 pb-3 pt-3 rounded">
                        <div className="">
                            <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" fill="currentColor"
                                 className="mb-3 text-primary" viewBox="0 0 16 16">
                                <path
                                    d="M5.338 1.59a61.44 61.44 0 0 0-2.837.856.481.481 0 0 0-.328.39c-.554 4.157.726 7.19 2.253 9.188a10.725 10.725 0 0 0 2.287 2.233c.346.244.652.42.893.533.12.057.218.095.293.118a.55.55 0 0 0 .101.025.615.615 0 0 0 .1-.025c.076-.023.174-.061.294-.118.24-.113.547-.29.893-.533a10.726 10.726 0 0 0 2.287-2.233c1.527-1.997 2.807-5.031 2.253-9.188a.48.48 0 0 0-.328-.39c-.651-.213-1.75-.56-2.837-.855C9.552 1.29 8.531 1.067 8 1.067c-.53 0-1.552.223-2.662.524zM5.072.56C6.157.265 7.31 0 8 0s1.843.265 2.928.56c1.11.3 2.229.655 2.887.87a1.54 1.54 0 0 1 1.044 1.262c.596 4.477-.787 7.795-2.465 9.99a11.775 11.775 0 0 1-2.517 2.453 7.159 7.159 0 0 1-1.048.625c-.28.132-.581.24-.829.24s-.548-.108-.829-.24a7.158 7.158 0 0 1-1.048-.625 11.777 11.777 0 0 1-2.517-2.453C1.928 10.487.545 7.169 1.141 2.692A1.54 1.54 0 0 1 2.185 1.43 62.456 62.456 0 0 1 5.072.56z"/>
                                <path
                                    d="M10.854 5.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7.5 7.793l2.646-2.647a.5.5 0 0 1 .708 0z"/>
                            </svg>
                            <h4 className="h4 mb-3 text-dark">256 SHA Encryption</h4>
                            <p>State-of-the-art end-to-end encryption keeps your conversations secure. We
                                can&apos;t
                                read your messages or listen to your calls, and no one else can either. Privacy
                                isn&rsquo;t an optional mode.</p>
                        </div>
                    </div>
                    <div className="bg-light col-lg-4 col-md-6 col-xl-3 pb-3 pt-3 rounded">
                        <div className="">
                            <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" fill="currentColor"
                                 className="mb-3 text-primary" viewBox="0 0 16 16">
                                <path
                                    d="M9.669.864 8 0 6.331.864l-1.858.282-.842 1.68-1.337 1.32L2.6 6l-.306 1.854 1.337 1.32.842 1.68 1.858.282L8 12l1.669-.864 1.858-.282.842-1.68 1.337-1.32L13.4 6l.306-1.854-1.337-1.32-.842-1.68L9.669.864zm1.196 1.193.684 1.365 1.086 1.072L12.387 6l.248 1.506-1.086 1.072-.684 1.365-1.51.229L8 10.874l-1.355-.702-1.51-.229-.684-1.365-1.086-1.072L3.614 6l-.25-1.506 1.087-1.072.684-1.365 1.51-.229L8 1.126l1.356.702 1.509.229z"/>
                                <path d="M4 11.794V16l4-1 4 1v-4.206l-2.018.306L8 13.126 6.018 12.1 4 11.794z"/>
                            </svg>
                            <h4 className="h4 mb-3 text-dark">Awards</h4>
                            <p>Our award winning platform allows users to scale there rooms with new users,
                                emotes, function, and
                                more!&nbsp;</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <svg viewBox="0 0 1440 134" preserveAspectRatio="none" fill="currentColor" version="1.1"
             xmlns="http://www.w3.org/2000/svg" className="bg-dark d-block text-white" width="100%" height="80"
             stroke="currentColor">
            <path d="M 0 0 H 1440 V 60 C 854 276 596 -66 0 60 V 0 Z"/>
        </svg>
        <svg viewBox="0 0 1440 134" preserveAspectRatio="none" fill="currentColor" version="1.1"
             xmlns="http://www.w3.org/2000/svg" className="bg-light d-block text-dark" width="100%" height="80">
            <path d="M 0 0 H 1440 V 60 C 854 276 596 -66 0 60 V 0 Z"/>
        </svg>
        <section className="bg-light border-bottom pb-5 pt-5">
            <div className="container pb-5 pt-5">
                <h2 className="h1 text-center text-primary">Partners</h2>
                <h3 className="h2 mb-4 text-center text-dark">Our partners.</h3>
                <div className="row">
                    <div className="col-md-6 pb-3 pt-3"><a href="/api/redirect/partner/telegram"
                                                           className="btn btn-dark btn-lg d-block pb-5 pt-3 px-0 text-start">
                        <div className="p-5">
                            <h4 className="mb-3">Telegram</h4>
                            <p className="mb-0">Telegram has partnered with ChatX to bring a public API to all
                                users for
                                FREE.</p>
                        </div>
                        <div className="align-self-center col-lg-12 col-md-12 col-xl-12 col-xxl-12 p-5">
                            <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg"
                                 viewBox="0 0 24 24" fill="currentColor" className="img-fluid p-3 text-info">
                                <title>Telegram Glyph</title>
                                <path
                                    d="M11.99432,2a10,10,0,1,0,10,10A9.99917,9.99917,0,0,0,11.99432,2Zm3.17951,15.15247a.70547.70547,0,0,1-1.002.3515l-2.71467-2.10938L9.71484,17.002a.29969.29969,0,0,1-.285.03894l.334-2.98846.01069.00848.00683-.059s4.885-4.44751,5.084-4.637c.20147-.189.135-.23.135-.23.01147-.23053-.36152,0-.36152,0L8.16632,13.299l-2.69549-.918s-.414-.1485-.453-.475c-.041-.324.46649-.5.46649-.5l10.717-4.25751s.881-.39252.881.25751Z"/>
                            </svg>
                        </div>
                    </a>
                    </div>
                    <div className="col-md-6 pb-3 pt-3"><a href="/api/redirect/partner/whatsapp"
                                                           className="btn btn-dark btn-lg d-block mt-md-5 pb-5 pt-3 px-0 text-start">
                        <div className="p-5">
                            <h4 className="mb-3">WhatsApp</h4>
                            <p className="mb-0">WhatsApp has partnered with ChatX to provide seemless data
                                integration.&nbsp;&nbsp;</p>
                        </div>
                        <div className="align-self-center col-lg-12 col-md-12 col-xl-12 col-xxl-12 p-5">
                            <svg xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" viewBox="0 0 24 24"
                                 fill="currentColor" className="img-fluid p-3 text-success">
                                <path
                                    d="M22,6.55a12.61,12.61,0,0,0-.1-1.29,4.29,4.29,0,0,0-.37-1.08,3.66,3.66,0,0,0-.71-1,3.91,3.91,0,0,0-1-.71,4.28,4.28,0,0,0-1.08-.36A10.21,10.21,0,0,0,17.46,2H6.55a12.61,12.61,0,0,0-1.29.1,4.29,4.29,0,0,0-1.08.37,3.66,3.66,0,0,0-1,.71,3.91,3.91,0,0,0-.71,1,4.28,4.28,0,0,0-.36,1.08A10.21,10.21,0,0,0,2,6.54C2,6.73,2,7,2,7.08v9.84c0,.11,0,.35,0,.53a12.61,12.61,0,0,0,.1,1.29,4.29,4.29,0,0,0,.37,1.08,3.66,3.66,0,0,0,.71,1,3.91,3.91,0,0,0,1,.71,4.28,4.28,0,0,0,1.08.36A10.21,10.21,0,0,0,6.54,22H17.45a12.61,12.61,0,0,0,1.29-.1,4.29,4.29,0,0,0,1.08-.37,3.66,3.66,0,0,0,1-.71,3.91,3.91,0,0,0,.71-1,4.28,4.28,0,0,0,.36-1.08A10.21,10.21,0,0,0,22,17.46c0-.19,0-.43,0-.54V7.08C22,7,22,6.73,22,6.55ZM12.23,19h0A7.12,7.12,0,0,1,8.8,18.1L5,19.1l1-3.72a7.11,7.11,0,0,1-1-3.58A7.18,7.18,0,1,1,12.23,19Zm0-13.13A6,6,0,0,0,7.18,15l.14.23-.6,2.19L9,16.8l.22.13a6,6,0,0,0,3,.83h0a6,6,0,0,0,6-6,6,6,0,0,0-6-6Zm3.5,8.52a1.82,1.82,0,0,1-1.21.85,2.33,2.33,0,0,1-1.12-.07,8.9,8.9,0,0,1-1-.38,8,8,0,0,1-3.06-2.7,3.48,3.48,0,0,1-.73-1.85,2,2,0,0,1,.63-1.5.65.65,0,0,1,.48-.22H10c.11,0,.26,0,.4.31s.51,1.24.56,1.33a.34.34,0,0,1,0,.31,1.14,1.14,0,0,1-.18.3c-.09.11-.19.24-.27.32s-.18.18-.08.36a5.56,5.56,0,0,0,1,1.24,5,5,0,0,0,1.44.89c.18.09.29.08.39,0s.45-.52.57-.7.24-.15.4-.09,1.05.49,1.23.58.29.13.34.21A1.56,1.56,0,0,1,15.73,14.36Z"/>
                            </svg>
                        </div>
                    </a>
                    </div>
                </div>
                <div className="pb-4 pt-4 text-center">
                    <a className="btn btn-primary pe-4 ps-4 rounded-pill text-light" href="src/components/public/home#">View
                        More</a>
                </div>
            </div>
        </section>
    </main>);
}

export default Home;