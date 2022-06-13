import React from 'react'

export function UserMessage(props) {
    return (
        <li className="d-flex gap-1 mb-3" key={props.index}>
            <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" fill="currentColor"
                 className="bi bi-person-check-fill col-1 col-lg-1 col-md-1 col-sm-1 col-xl-1 col-xxl-1 img-fluid img-thumbnail m-auto order-first p-2"
                 viewBox="0 0 16 16">
                <path fill-rule="evenodd"
                      d="M15.854 5.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 0 1 .708-.708L12.5 7.793l2.646-2.647a.5.5 0 0 1 .708 0z"/>
                <path d="M1 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
            </svg>
            <div className="card col-11 col-lg-11 col-md-11 col-sm-11 col-xl-11 col-xxl float-start">
                <div className="bg-white card-body m-0 p-auto rounded text-start">
                    <p className="m-auto p-auto">{props.value.message}</p>
                </div>
            </div>
        </li>
    );
}

export function OtherMessage(props) {
    return (
        <li className="d-flex gap-1 mb-3" key={props.index}>
            <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" fill="currentColor"
                 className="bg-info bi bi-person-check-fill col-1 col-lg-1 col-md-1 col-sm-1 col-xl-1 col-xxl-1 img-fluid img-thumbnail m-auto order-last p-2"
                 viewBox="0 0 16 16">
                <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
            </svg>
            <div className="card col-11 col-lg-11 col-md-11 col-sm-11 col-xl-11 col-xxl float-start">
                <div className="bg-white card-body m-0 p-auto rounded text-start">
                    <p className="m-auto p-auto">{props.message}</p>
                </div>
            </div>
        </li>
    );
}
