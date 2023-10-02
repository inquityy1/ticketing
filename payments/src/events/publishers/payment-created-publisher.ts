import {
  Subjects,
  Publisher,
  PaymentCreatedEvent,
} from "@myfirstnpmhere/common";

export class PaymentCreatedPublisher extends Publisher<PaymentCreatedEvent> {
  subject: Subjects.PaymentCreated = Subjects.PaymentCreated;
}
