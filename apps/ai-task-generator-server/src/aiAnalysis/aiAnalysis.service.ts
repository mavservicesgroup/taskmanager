import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { AiAnalysisServiceBase } from "./base/aiAnalysis.service.base";

@Injectable()
export class AiAnalysisService extends AiAnalysisServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
