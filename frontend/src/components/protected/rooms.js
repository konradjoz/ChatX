import React from 'react';
import {RoomUser} from "../roomUser";
import {useEffect, useState} from "react";
import {UserMessage, OtherMessage} from "./message";


function Rooms() {
    const [clientId, setClienId] = useState(localStorage.getItem("clientId"));

    const [chatHistory, setChatHistory] = useState([]);
    const [isOnline, setIsOnline] = useState(true);
    const [textValue, setTextValue] = useState("");
    const [websckt, setWebsckt] = useState();
    const [webscktConnection, setWebscktConnection] = useState(false);

    const [message, setMessage] = useState([]);
    const [messages, setMessages] = useState([]);

    useEffect(() => {
        const url = "ws://localhost:8000/ws/" + clientId;
        const ws = new WebSocket(url);
        setWebscktConnection(true);

        ws.onopen = (event) => {
            ws.send("User: " + clientId + " has connected.");
            setIsOnline(true);
            fetch("http://localhost:8000/users/update/" + clientId + "/" + isOnline);
        };

        // recieve message every start page
        ws.onmessage = (e) => {
            const message = JSON.parse(e.data);
            if (webscktConnection === false) {

            } else {
                setMessages([...messages, message])
            }
            ;
        };

        setWebsckt(ws);
        //clean up function when we close page
        return () => {
            setIsOnline(false);
            try {
                ws.close();
                setWebscktConnection(false);
            } catch (e) {
                console.log(e);
            }
        };
    }, []);

    const handleEnterKey = (e) => {
        if (e.keyCode === 13) sendMessage()
    };

    const sendMessage = (event) => {

        if (webscktConnection === false) {

        } else {
            websckt.send(message);
            websckt.onmessage = (e) => {
                const message = JSON.parse(e.data);
                setMessages([...messages, message]);
            };
            setMessage([]);
        }

    };

    return (
        <main>
            <section className="border-bottom pb-5 pt-5">
                <div className="container flex-wrap pb-5 pt-5">
                    <RoomUser currentUser={true} clientId={clientId} isOnline={isOnline}/>
                    <div
                        className="bg-light col-11 col-lg-9 col-md-11 col-sm-11 col-xl-9 col-xxl-9 d-flex flex-column-reverse gap-3 m-3 p-3 rounded rounded-3">
                        <div className="justify-content-center pe-3 ps-3 row">
                            <div
                                className="bg-light btn-group btn-group-sm col-lg-4 col-xl-4 col-xxl-4 p-2 rounded rounded-3"
                                role="group" aria-label="Basic example"><a className="btn btn-outline-success"
                                                                           href="#">CSV</a>
                                <button type="button" className="btn btn-outline-warning">JSON</button>
                                <button type="button" className="btn btn-outline-info">TXT</button>
                            </div>
                        </div>
                        <div className="d-flex justify-content-center  p-3 row">
                            <div
                                className="bg-light col-12 col-lg-12 col-md-12 col-sm-12 col-xl-12 col-xxl-12 d-inline-flex flex-column mb-3 me-auto ms-auto mt-3 pe-3 ps-3 rounded rounded-3">
                                <a href="#"
                                   className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none">
                                    <span className="fs-4 mt-3">ChatX Room</span> </a>
                                <hr/>
                                <div className="card-body flex-wrap gap-3 p-auto">
                                    <div
                                        className="align-items-center d-flex flex-row justify-content-start mb-auto row">
                                        {messages.map((value, index) => {
                                            if (value.clientId !== clientId) {
                                                return (<UserMessage value={value} index={index}/>);
                                            } else {
                                                return (<OtherMessage value={value} index={index}/>);
                                            }
                                        })}
                                    </div>
                                </div>
                                <hr/>
                                <div className="input-group mb-3">
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Write a message..."
                                        aria-label="Recipient's username"
                                        aria-describedby="button-addon2"
                                        onKeyDown={handleEnterKey}
                                        onChange={(e) => setMessage(e.target.value)}
                                        value={message}
                                    />
                                    <button
                                        className="btn btn-outline-primary text-secondary"
                                        type="button"
                                        id="button-addon2"
                                        onClick={sendMessage}
                                    >
                                        Send
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}

export default Rooms;
