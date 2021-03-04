import { Socket } from "phoenix";
import { v4 as uuidv4 } from "uuid";

export async function configureChannel() {
  const socket = new Socket("wss://react-phoenix-master.herokuapp.com/socket");
  socket.connect();
  socket.onOpen = function (event) {
    console.log("Socket is Open ");
  };
  const channel = socket.channel("room:webrtc");
  console.log("channel", channel);
  channel
    .join()
    .receive("ok", (resp) => {
      console.log("Joined successfully", resp);
    })
    .receive("error", (resp) => {
      console.log("Unable to join", resp);
    });
  return;
}
