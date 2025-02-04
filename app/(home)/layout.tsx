import { DocsLayout } from "fumadocs-ui/layouts/docs";
import type { ReactNode } from "react";
import { source } from "@/lib/source";

import type { BaseLayoutProps } from "fumadocs-ui/layouts/shared";

const baseOptions: BaseLayoutProps = {
  githubUrl: "https://github.com/agus-darmawan",
  nav: {
    title: "Sarasvati Docs",
  },
};

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <DocsLayout tree={source.pageTree} {...baseOptions}>
      {children}
    </DocsLayout>
  );
}
