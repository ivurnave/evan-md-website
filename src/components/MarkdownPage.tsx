import Markdown from "markdown-to-jsx";
import { getMarkdownContent } from "../helpers";

export const MarkdownPage = (props: { markdownFileName: string }) => {
  const mdContent = getMarkdownContent(props.markdownFileName);
  return (
    <div className="shrink p-2 rounded-[2vw] border-solid border border-slate-50 shadow-xl">
      <Markdown>{mdContent}</Markdown>
    </div>
  );
} 