/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { AiAnalysisWhereInput } from "./AiAnalysisWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { AiAnalysisOrderByInput } from "./AiAnalysisOrderByInput";

@ArgsType()
class AiAnalysisFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => AiAnalysisWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => AiAnalysisWhereInput, { nullable: true })
  @Type(() => AiAnalysisWhereInput)
  where?: AiAnalysisWhereInput;

  @ApiProperty({
    required: false,
    type: [AiAnalysisOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [AiAnalysisOrderByInput], { nullable: true })
  @Type(() => AiAnalysisOrderByInput)
  orderBy?: Array<AiAnalysisOrderByInput>;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  skip?: number;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  take?: number;
}

export { AiAnalysisFindManyArgs as AiAnalysisFindManyArgs };
