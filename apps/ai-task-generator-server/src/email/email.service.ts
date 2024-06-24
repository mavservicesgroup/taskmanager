import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { EmailServiceBase } from "./base/email.service.base";

@Injectable()
export class EmailService extends EmailServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
