import { Test, TestingModule } from "@nestjs/testing";
import { AppController } from "./app.controller.js";
import { AppService } from "./app.service.js";
import { describe, expect, it, beforeEach } from "vitest";

describe("AppController", () => {
   let appController: AppController;

   beforeEach(async () => {
      const app: TestingModule = await Test.createTestingModule({
         controllers: [AppController],
         providers: [AppService],
      }).compile();

      appController = app.get<AppController>(AppController);
   });

   describe("root", () => {
      it('should return "Hello World!"', async () => {
         const result = await appController.getHello("HelloWorld");

         expect(result).toBe("HELLOWORLD");
      });
   });
});
