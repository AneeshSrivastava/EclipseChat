import { Document } from "mongoose";
export interface Message extends Document {
  content: string;
  createdAt: Date;
}
