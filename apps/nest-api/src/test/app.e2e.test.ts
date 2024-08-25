import { Test, TestingModule } from "@nestjs/testing";
import { INestApplication } from "@nestjs/common";
import request from "supertest";
import { AppModule } from "../app.module.js";
import { describe, it, beforeEach } from "vitest";

describe("AppController (e2e)", () => {
   let app: INestApplication;

   beforeEach(async () => {
      const moduleFixture: TestingModule = await Test.createTestingModule({
         imports: [AppModule],
      }).compile();

      app = moduleFixture.createNestApplication();
      await app.init();
   });

   it("/ (GET)", () => {
      return request(app.getHttpServer())
         .get("/")
         .query({ text: "HelloWorld" })
         .expect(200)
         .expect("HELLOWORLD");
   });
});
