import {describe, it} from "mocha";
import {MessageConsumer, synchronousBodyHandler} from "@pact-foundation/pact";
import * as path from "path";
import {like, term} from "@pact-foundation/pact/dsl/matchers";

describe("order consumer PACT", () => {
    const messagePact = new MessageConsumer({
        consumer: "orderConsumer",
        dir: path.resolve(process.cwd(), "pacts"),
        pactfileWriteMode: "update",
        provider: "orderProvider",
        logLevel: "info"
    });

    //cons

    describe("receive order event", () => {
        it("should accept a valid order", () => {
            return messagePact
                .given("some state")
                .expectsToReceive("a request for an order")
                .withContent({
                    id: like(1),
                    name: like("rover"),
                    type: term({ generate: "bulldog", matcher: "^(bulldog|sheepdog)$" }),
                })
                .withMetadata({
                    "content-type": "application/json",
                })
                .verify(synchronousBodyHandler(()=> {}));
        });
    });


});