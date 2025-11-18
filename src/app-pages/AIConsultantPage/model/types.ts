export interface IMessage {
  id: string | number;
  text: string;
  sender: "user" | "ai";
  timestamp: Date;
}
