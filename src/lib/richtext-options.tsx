import { Options } from "@contentful/rich-text-react-renderer";
import { BLOCKS } from "@contentful/rich-text-types";

export const RICHTEXT_OPTIONS: Options = {
  renderNode: {
    [BLOCKS.HEADING_3]: (_node, children) => {
      return <h3 className="my-4 text-lg font-bold md:text-2xl">{children}</h3>;
    },
    [BLOCKS.PARAGRAPH]: (_node, children) => {
      return (
        <p className="text-justify font-mono text-sm md:text-base">
          {children}
        </p>
      );
    },
    [BLOCKS.UL_LIST]: (_node, children) => {
      return <ul className="list-disc">{children}</ul>;
    },
    [BLOCKS.LIST_ITEM]: (_node, children) => {
      return <li className="my-2">{children}</li>;
    },
  },
};
