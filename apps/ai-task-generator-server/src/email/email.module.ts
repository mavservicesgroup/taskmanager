import { Module } from "@nestjs/common";
import { EmailModuleBase } from "./base/email.module.base";
import { EmailService } from "./email.service";
import { EmailController } from "./email.controller";
import { EmailResolver } from "./email.resolver";

@Module({
  imports: [EmailModuleBase],
  controllers: [EmailController],
  providers: [EmailService, EmailResolver],
  exports: [EmailService],
})
export class EmailModule {}
