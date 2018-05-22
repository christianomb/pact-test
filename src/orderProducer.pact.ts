// /*
// import {describe, it} from "mocha";
// //import {MessageProvider} from "@pact-foundation/pact";
// import * as path from "path";
// import {MessageProvider} from "@pact-foundation/pact";
//
// const dogApiClient = {
//     createDog: () => {
//         return new Promise((resolve, reject) => {
//             resolve({
//                 id: 1,
//                 name: "fido",
//                 type: "bulldog",
//             });
//         });
//     },
// };
//
// describe("order producer PACT", () => {
//
//     const p = new MessageProvider({
//         handlers: {
//             "a request for a dog": () => dogApiClient.createDog(),
//         },
//         consumer: "consumer",
//         provider: "MyJSMessageProvider",
//         providerVersion: "1.0.0",
//         pactUrls: [path.resolve(process.cwd(), "pacts", "pact-message.json")],
//     });
//
//    it("Order message is valid", () => {
//        //return p.verify();
//    });
// });
// */
