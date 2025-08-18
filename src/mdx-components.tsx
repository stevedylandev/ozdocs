import defaultMdxComponents from "fumadocs-ui/mdx";
import type { MDXComponents } from "mdx/types";
import OZWizard from "./components/oz-wizard";
import {
  FileTextIcon,
  UsersIcon,
  ShieldIcon,
  CodeIcon,
  MonitorIcon,
  PyramidIcon,
  StarIcon,
  LayersIcon,
  WrenchIcon,
  ServerIcon,
  AnchorIcon,
  ShieldCheckIcon,
  RefreshCwIcon,
  PlugIcon,
} from "lucide-react";

// use this function to get MDX components, you will need it for rendering MDX
export function getMDXComponents(components?: MDXComponents): MDXComponents {
  return {
    ...defaultMdxComponents,
    OZWizard,
    FileTextIcon,
    UsersIcon,
    ShieldIcon,
    CodeIcon,
    MonitorIcon,
    PyramidIcon,
    StarIcon,
    LayersIcon,
    WrenchIcon,
    ServerIcon,
    AnchorIcon,
    ShieldCheckIcon,
    RefreshCwIcon,
    PlugIcon,
    ...components,
  };
}
