import { Injectable } from "@nestjs/common";
import { UppercasedTextDto } from "@apps/express-api";

@Injectable()
export class AppService {
   async getHello(text: string): Promise<string> {
      const res = await fetch(`${process.env.EXPRESS_API_URL}?text=${text}`, {
         method: "GET",
      });

      const { text: uppercasedText }: UppercasedTextDto = await res.json();

      return uppercasedText;
   }
}
