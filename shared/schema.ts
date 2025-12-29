import { pgTable, text, serial, boolean, timestamp } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const scripts = pgTable("scripts", {
  id: serial("id").primaryKey(),
  title: text("title").notNull(),
  content: text("content").notNull(),
  description: text("description").notNull(),
  isLatest: boolean("is_latest").default(true),
  createdAt: timestamp("created_at").defaultNow(),
});

export const insertScriptSchema = createInsertSchema(scripts).omit({ id: true, createdAt: true });

export type Script = typeof scripts.$inferSelect;
export type InsertScript = z.infer<typeof insertScriptSchema>;

// Explicit API types
export type ScriptResponse = Script;
