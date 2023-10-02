import {
  Publisher,
  Subjects,
  TicketUpdatedEvent,
} from "@myfirstnpmhere/common";

export class TicketUpdatedPublisher extends Publisher<TicketUpdatedEvent> {
  subject: Subjects.TicketUpdated = Subjects.TicketUpdated;
}
