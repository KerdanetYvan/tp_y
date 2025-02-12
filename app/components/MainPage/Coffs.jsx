"use client";

import { useEffect, useState } from "react";
import { socket } from "../../socket";
import { socket_js, setupSocket } from "../../src/js/socket";

export default function Home() {
  const [isConnected, setIsConnected] = useState(false);
  const [transport, setTransport] = useState("N/A");

  useEffect(() => {
    if (socket.connected) {
      onConnect();
    }

    function onConnect() {
      // setIsConnected(true);
      // setTransport(socket.io.engine.transport.name);

      // socket.io.engine.on("upgrade", (transport) => {
      //   setTransport(transport.name);
      // });
      
    }

    function onDisconnect() {
      setIsConnected(false);
      setTransport("N/A");
    }

    // socket.on("connect", onConnect);
    // socket.on("disconnect", onDisconnect);

    setupSocket();

    return () => {
      // socket.off("connect", onConnect);
      // socket.off("disconnect", onDisconnect);
    };
  }, []);

  return (
    <div>
      <Socket
        function_for_socket_js={setupSocket}
      />
      <ul id="messages"></ul>
      <form id="form" action="">
        <input id="input" /><button>Send</button>
      </form>
    </div>
  );
}