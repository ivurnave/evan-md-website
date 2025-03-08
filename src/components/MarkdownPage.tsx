import Markdown from "markdown-to-jsx";
import { getMarkdownContent } from "../helpers";

export const MarkdownPage = (props: { markdownFileName: string }) => {
  const mdContent = getMarkdownContent(props.markdownFileName);
  return (
    <div className="shrink p-2 rounded-3xl border-solid border border-outline shadow-xl">
      <Markdown>{mdContent}</Markdown>
    </div>
  );
} 