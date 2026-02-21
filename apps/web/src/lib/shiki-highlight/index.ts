import { BundledTheme, codeToHtml, StringLiteralUnion } from "shiki";

export const highlight = async (
  code: string,
  theme?: StringLiteralUnion<BundledTheme, string>,
) => {
  return await codeToHtml(code, {
    lang: "js",
    theme: !theme ? "github-light" : theme,
    transformers: [
      {
        code(node) {
          this.addClassToHast(node, "language-js");
        },
        line(node, line) {
          node.properties["data-line"] = line;
          if ([1, 3, 4].includes(line)) this.addClassToHast(node, "highlight");
        },
        span(node, line, col) {
          node.properties["data-token"] = `token:${line}:${col}`;
        },
      },
    ],
  });
};
