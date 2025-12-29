import { db } from "./db";
import { scripts, type Script, type InsertScript } from "@shared/schema";
import { eq, desc } from "drizzle-orm";

export interface IStorage {
  getLatestScript(): Promise<Script | undefined>;
  createScript(script: InsertScript): Promise<Script>;
}

export class DatabaseStorage implements IStorage {
  async getLatestScript(): Promise<Script | undefined> {
    const [script] = await db.select().from(scripts).orderBy(desc(scripts.id)).limit(1);
    return script;
  }
  async createScript(insertScript: InsertScript): Promise<Script> {
    const [script] = await db.insert(scripts).values(insertScript).returning();
    return script;
  }
}

export const storage = new DatabaseStorage();
