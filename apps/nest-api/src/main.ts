import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";

async function bootstrap() {
   const app = await NestFactory.create(AppModule);

   const port = process.env.APP_PORT;

   if (!port) {
      throw new Error("APP_PORT is not defined");
   }

   await app.listen(port, () => {
      console.log(`🚀 Nest server is running on port ${port}`);
   });
}
bootstrap();
