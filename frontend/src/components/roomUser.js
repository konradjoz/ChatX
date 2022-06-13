import React from "react";

export function RoomUser(props) {

    const onlineClass = "align-items-center fw-bold link-success text-center text-decoration-none";
    const offlineClass = "align-items-center fw-bold link-danger text-center text-decoration-none";

    return (
        <div
            className="bg-light col-11 col-lg-2 col-md-11 col-sm-11 col-xl-2 col-xxl-2 float-start gap-3 m-3 p-3 rounded rounded-3">
            <div className="row">

            </div>
            <div className="row">
                <svg xmlns="http://www.w3.org/2000/svg" width="3em" height="3em" fill="currentColor"
                     className="align-items-center d-flex link-dark mb-3 mb-md-0 me-md-auto text-decoration-none text-primary"
                     viewBox="0 0 16 16" preserveAspectRatio="true">
                    <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
                    <path fillRule="evenodd"
                          d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"/>
                </svg>
            </div>
            <div className="row">
                <a className="align-items-center link-dark text-center text-decoration-none"> <span
                    className="fs-6"><b> {props.currentUser ? "You" : "Other User"} </b></span> </a>
            </div>
            <div className="row">
                <a className="align-items-center link-dark text-center text-decoration-none"> <span
                    className="fs-6"> Client ID </span> </a>
            </div>
            <div className="row"><a className="align-items-center link-dark text-center text-decoration-none">
                <span className="fs-6">{props.clientId}</span> </a>
            </div>
            <div className="row">
                <a
                    className={props.isOnline ? onlineClass : offlineClass}>
                    <span className="fs-6">{props.isOnline ? "Online" : "Offline"}</span> </a>
            </div>
        </div>
    );
}