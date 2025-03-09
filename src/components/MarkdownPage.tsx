import Markdown from "markdown-to-jsx";
import { getMarkdownContent } from "../helpers";

export const MarkdownPage = (props: { markdownFileName: string }) => {
  const mdContent = getMarkdownContent(props.markdownFileName);
  return (
    <div className="p-2 rounded-3xl border-solid border border-outline shadow-xl flex flex-col items-center">
      <div className="w-full md:px-[20px]">
        <Markdown>{mdContent}</Markdown>
      </div>
    </div>
  );
} 