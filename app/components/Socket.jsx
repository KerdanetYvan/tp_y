"use client"
import React from 'react'
import { useEffect, useState } from "react";
import { socket } from "../socket";

const Socket = (function_for_socket_js) => {
    
    const [isConnected, setIsConnected] = useState(false);
    const [transport, setTransport] = useState("N/A");

    useEffect(() => {
        if (socket.connected) {
        onConnect();
        }

        function onConnect() {
        setIsConnected(true);
        setTransport(socket.io.engine.transport.name);

        socket.io.engine.on("upgrade", (transport) => {
            setTransport(transport.name);
        });
        
        }

        function onDisconnect() {
        setIsConnected(false);
        setTransport("N/A");
        }

        socket.on("connect", onConnect);
        socket.on("disconnect", onDisconnect);

        function_for_socket_js.function_for_socket_js()
        // setupSocket();

        return () => {
        socket.off("connect", onConnect);
        socket.off("disconnect", onDisconnect);
        };
    }, []);


  return (
    <div>
    </div>
  )
}

export default Socket
