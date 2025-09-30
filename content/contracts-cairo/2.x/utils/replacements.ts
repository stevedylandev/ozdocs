import { CLASS_HASHES, UMBRELLA_VERSION } from "./constants";

export const REPLACEMENTS = {
  include: ['**/content/contracts-cairo/2.x/**/*.mdx'],
  replacements: {
    umbrella_version: UMBRELLA_VERSION,
    ...CLASS_HASHES,
  }
}
