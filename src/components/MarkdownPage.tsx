import Markdown from "markdown-to-jsx";
import { getMarkdownContent } from "../helpers";

export const MarkdownPage = (props: { markdownFileName: string }) => {
  const mdContent = getMarkdownContent(props.markdownFileName);
  return (
    <div className="mx-5 shrink">
      <Markdown>{mdContent}</Markdown>
    </div>
  );
} 