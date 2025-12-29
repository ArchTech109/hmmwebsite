import { useQuery } from "@tanstack/react-query";
import { api } from "@shared/routes";

export function useLatestScript() {
  return useQuery({
    queryKey: [api.script.getLatest.path],
    queryFn: async () => {
      const res = await fetch(api.script.getLatest.path);
      
      if (!res.ok) {
        if (res.status === 404) {
          // Return a placeholder if no script exists yet (for fresh DBs)
          return {
            title: "Universal Script v1.0",
            content: `print("Hello World!")\n-- No script found in database yet.\n-- Please seed the database.`,
            description: "Default placeholder script",
            isLatest: true
          };
        }
        throw new Error("Failed to fetch script");
      }
      
      return api.script.getLatest.responses[200].parse(await res.json());
    },
  });
}
