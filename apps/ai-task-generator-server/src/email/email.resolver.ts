import * as graphql from "@nestjs/graphql";
import { EmailResolverBase } from "./base/email.resolver.base";
import { Email } from "./base/Email";
import { EmailService } from "./email.service";

@graphql.Resolver(() => Email)
export class EmailResolver extends EmailResolverBase {
  constructor(protected readonly service: EmailService) {
    super(service);
  }
}
