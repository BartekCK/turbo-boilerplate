import express, { Response, Request } from "express";
import { UuidService } from "@libs/uuid";
import { ITextTransformer } from "./application/services/textTransformer.interface.js";
import { TextTransformer } from "./application/services/textTransformer.js";
import { UppercasedTextDto, UuidDto } from "./shared/index.js";

class App {
   public static main(): void {
      const app = express();

      const port = process.env.APP_PORT;

      const textTransformer: ITextTransformer = new TextTransformer();

      const uuid = new UuidService();

      if (!port) {
         throw new Error("App port should be provided");
      }

      app.use(express.json());

      app.get("/", (req: Request, res: Response<UppercasedTextDto>) => {
         const { query } = req;

         const uppercasedText = textTransformer.toUpperCase({
            text: (query["text"] as string) || "",
         });

         res.send({ text: uppercasedText }).status(200);
      });

      app.get("/uuid", (req: Request, res: Response<UuidDto>) => {
         res.send({ value: uuid.generateV4() }).status(200);
      });

      app.get("/health", (req: Request, res: Response) => {
         res.send("OK").status(200);
      });

      app.listen(port, () => {
         console.log(`🚀 Express server is running on port ${port}`);
      });
   }
}

App.main();
