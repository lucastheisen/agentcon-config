import { defineFilter, credential, respond } from "bouncer";
export default defineFilter({
  name: "vault-echo",
  onRequest() {
    return respond(200, credential("smoke") + "\n", {
      "Content-Type": "text/plain; charset=utf-8",
    });
  },
});

