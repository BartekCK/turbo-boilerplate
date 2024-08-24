import { Controller, Get, Query } from "@nestjs/common";
import { AppService } from "./app.service.js";

@Controller()
export class AppController {
   constructor(private readonly appService: AppService) {}

   @Get()
   async getHello(@Query("text") text: string): Promise<string> {
      return this.appService.getHello(text as string);
   }
}
