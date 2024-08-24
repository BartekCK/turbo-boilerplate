import { TextTransformer } from "../textTransformer.js";
import { ITextTransformer } from "../textTransformer.interface.js";

describe("textTransformer.toUppercase", () => {
   const textTransformer: ITextTransformer = new TextTransformer();

   describe("Given string with letters A-Z && a-z", () => {
      const text = "abcdefghijklmnmopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";

      describe("when .toUppercase was called", () => {
         let result: string;

         beforeAll(() => {
            result = textTransformer.toUpperCase({ text });
         });

         it("should return string with letters A-Z", () => {
            expect(result).toEqual(text.toUpperCase());
         });
      });
   });

   describe.each([
      {
         text: "abcdef%*&123Af",
         reason: "contain numbers and special characters",
      },
      {
         text: "",
         reason: "it is an empty string",
      },
   ])("Given incorrect string because of $reason", (testData) => {
      describe("when .toUppercase was called", () => {
         it("then should throw an error", () => {
            expect(() =>
               textTransformer.toUpperCase({ text: testData.text }),
            ).toThrow(Error);
         });
      });
   });
});
