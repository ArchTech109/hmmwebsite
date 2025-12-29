import type { Express } from "express";
import type { Server } from "http";
import { storage } from "./storage";
import { api } from "@shared/routes";

export async function registerRoutes(httpServer: Server, app: Express): Promise<Server> {
  app.get(api.script.getLatest.path, async (req, res) => {
    const script = await storage.getLatestScript();
    if (!script) {
      return res.status(404).json({ message: "No script available" });
    }
    res.json(script);
  });

  // Seed data if empty
  const existing = await storage.getLatestScript();
  if (!existing) {
    await storage.createScript({
      title: "JulianGUI Hub",
      description: "The ultimate serversided require script hub. Access a diverse range of abilities with high performance and undetectable execution.",
      content: "-- JulianGUI Hub Loader\n-- This is a require script hub\n\nlocal HUB_ID = \"1234567890\"\nprint('Loading JulianGUI Hub...')\n\n-- Loading modular abilities\nlocal Abilities = {\n    [\"Kill All\"] = \"require(12345).Execute()\",\n    [\"God Mode\"] = \"require(67890).Execute()\",\n    [\"Instant TP\"] = \"require(11223).Execute()\"\n}\n\nlocal function LoadAbility(name)\n    print('Executing: ' .. name)\n    -- require execution logic here\nend\n\nprint('JulianGUI Hub Loaded! Type /hub to open.')",
      isLatest: true
    });
  }

  return httpServer;
}
