import express, { Response, Request } from "express";
import { TextTransformer } from "./application/services/textTransformer";
import { ITextTransformer } from "./application/services/textTransformer.interface";
import { UppercasedTextDto } from "./shared/dto/uppercasedTextDto";

class App {
   public static main(): void {
      const app = express();

      const port = process.env.APP_PORT;

      const textTransformer: ITextTransformer = new TextTransformer();

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

      app.listen(port, () => {
         console.log(`🚀 Express server is running on port ${port}`);
      });
   }
}

App.main();
