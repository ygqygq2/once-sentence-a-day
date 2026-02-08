import fs from "fs";
import path from "path";

export interface Sentence {
  date: string;
  content: string;
}

export async function getAllSentences(): Promise<Sentence[]> {
  const dataDir = path.join(process.cwd(), "data");
  
  if (!fs.existsSync(dataDir)) {
    return [];
  }

  const folders = fs.readdirSync(dataDir);
  const sentences: Sentence[] = [];

  for (const folder of folders) {
    const folderPath = path.join(dataDir, folder);
    const stat = fs.statSync(folderPath);

    if (stat.isDirectory()) {
      const readmePath = path.join(folderPath, "README.md");
      
      if (fs.existsSync(readmePath)) {
        const content = fs.readFileSync(readmePath, "utf-8").trim();
        
        if (content) {
          sentences.push({
            date: folder,
            content,
          });
        }
      }
    }
  }

  // 按日期降序排序（最新的在前面）
  sentences.sort((a, b) => b.date.localeCompare(a.date));

  return sentences;
}
