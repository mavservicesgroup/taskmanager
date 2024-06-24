import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { EmailService } from "./email.service";
import { EmailControllerBase } from "./base/email.controller.base";

@swagger.ApiTags("emails")
@common.Controller("emails")
export class EmailController extends EmailControllerBase {
  constructor(protected readonly service: EmailService) {
    super(service);
  }
}
