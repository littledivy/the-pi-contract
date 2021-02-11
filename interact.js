import Arweave from "arweave";
import { interactWrite } from "smartweave";
import { readFileSync } from "fs";

let keyfile = process.argv[2];
if(!keyfile) throw new Error("Keyfile not provided.")

let client = Arweave.init({
    host: 'arweave.net',
    port: 443,
    protocol: 'https',
    timeout: 20000,
    logging: false,
});

let jwk = JSON.parse(readFileSync(keyfile));

interactWrite(client, jwk, "Zwp7r7Z10O0TuF6lmFApB7m5lJIrE5RbLAVWg_WKNcU", { function: "contribute" }).then((v) => {
    console.log("Done.");
    console.log(v);
});
