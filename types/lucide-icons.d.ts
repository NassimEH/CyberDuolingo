declare module "lucide-react-native/dist/esm/icons/*.mjs" {
  import type { ComponentType } from "react";

  const Icon: ComponentType<{
    size?: number | string;
    color?: string;
    strokeWidth?: number | string;
    absoluteStrokeWidth?: boolean;
  }>;

  export default Icon;
}
