import { Options } from "@contentful/rich-text-react-renderer";
import { BLOCKS } from "@contentful/rich-text-types";

export const RICHTEXT_OPTIONS: Options = {
  renderNode: {
    [BLOCKS.HEADING_2]: (_node, children) => {
      return <h2 className="my-2 text-xl font-bold md:text-2xl">{children}</h2>;
    },
    [BLOCKS.PARAGRAPH]: (_node, children) => {
      return <p className="font-mono text-sm md:text-base">{children}</p>;
    },
  },
};
