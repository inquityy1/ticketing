import { Publisher, OrderCreatedEvent, Subjects } from "@myfirstnpmhere/common";

export class OrderCreatedPublisher extends Publisher<OrderCreatedEvent> {
  subject: Subjects.OrderCreated = Subjects.OrderCreated;
}
