"use client";
import { socket_js, setupSocket } from "../../src/js/socket";
import Socket from "../Socket";

export default function Home() {
  return (
    <div>
      <Socket
        function_for_socket_js={setupSocket}
      />
      <ul id="messages"></ul>
    </div>
  );
}