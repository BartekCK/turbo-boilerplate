import { randomUUID } from "node:crypto";

export interface IUuidService {
   generateV4(): string;
}

export class UuidService implements IUuidService {
   public generateV4(): string {
      return randomUUID();
   }
}
