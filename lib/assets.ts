import { existsSync } from "node:fs";
import { join } from "node:path";

export function assetExists(publicPath: string): boolean {
  if (!publicPath) return false;
  const relative = publicPath.replace(/^\//, "");
  return existsSync(join(process.cwd(), "public", relative));
}
