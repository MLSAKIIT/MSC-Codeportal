import RightContentBlock from "./RightContentBlock";
import { ContentBlockProps } from "./types";

const ContentBlock = (props: ContentBlockProps) => {
  if (props.type === "right") return <RightContentBlock {...props} />;
  return null;
};

export default ContentBlock;
