import { ITextTransformer } from "./textTransformer.interface.js";

export class TextTransformer implements ITextTransformer {
   private readonly isTextValidRegex = new RegExp("^[a-zA-Z]*$");

   public toUpperCase(dto: { text: string }): string {
      const { text } = dto;

      if (text.length < 1) {
         throw new Error("Text can not be an empty string");
      }

      if (!this.isTextValidRegex.test(text)) {
         throw new Error("Text can contain only letters");
      }

      return text.toUpperCase();
   }
}
