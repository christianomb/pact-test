import {messageSender} from "./messageSender";
import {Order} from "./messages/order";

export class orderProducer {
    constructor(protected messageSender: messageSender) {
    }

    placeOrder(quantity: number) {

        const order: Order = {
            id: "order-1",
            productCode: "ABC",
            quantity: quantity,
            timestamp: new Date()
        };

        this.messageSender.send(order);
    }
}