import fs from "fs";

export const getMarkdownContent = (filename: string) => {
    const folder = 'markdown';
    const file = `${folder}/${filename}.md`;
    const content = fs.readFileSync(file, "utf-8");
  
    return content;
  }
  