import { PortableText, type PortableTextComponents } from "@portabletext/react";
import type { PortableTextBlock } from "@portabletext/react";

const components: PortableTextComponents = {
  block: {
    normal: ({ children }) => (
      <p className="mb-6 leading-relaxed">{children}</p>
    ),
  },
  marks: {
    link: ({ children, value }) => (
      <a
        href={value?.href}
        className="text-accent underline"
        target="_blank"
        rel="noopener noreferrer"
      >
        {children}
      </a>
    ),
  },
};

export function PieceBody({ body }: { body: PortableTextBlock[] }) {
  return (
    <div className="font-body text-ink max-w-prose text-lg">
      <PortableText value={body} components={components} />
    </div>
  );
}
