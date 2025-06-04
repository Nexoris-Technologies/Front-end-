import { SvgIconProps } from "@/types/types";
import Image from "next/image";

export const SvgIcon = ({ src, width, height }: SvgIconProps) => (
  <Image src={`/${src}`} alt={src} width={width} height={height} />
);
