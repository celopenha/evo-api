export class Session {
  remoteJid?: string;
  sessionId?: string;
  status?: string;
  createdAt?: number;
  updateAt?: number;
}

export class TypebotDto {
  enabled?: boolean;
  url: string;
  typebot?: string;
  expire?: number;
  remarketing?: MessageRemarketing[];
  keyword_finish?: string;
  delay_message?: number;
  unknown_message?: string;
  listening_from_me?: boolean;
  sessions?: Session[];
}

export type MessageRemarketing = {
  timeout_minutes: number;
  type: string;
  content: string;
}
