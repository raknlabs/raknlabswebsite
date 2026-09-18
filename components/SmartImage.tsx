import Image, { type ImageProps } from "next/image";
import { MediaPlaceholder } from "@/components/MediaPlaceholder";
import { cn } from "@/lib/utils";

type SmartImageProps = Omit<ImageProps, "src" | "alt"> & {
  src: string;
  alt: string;
  available: boolean;
  placeholderLabel?: string;
  placeholderCaption?: string;
  frameClassName?: string;
};

export function SmartImage({
  src,
  alt,
  available,
  placeholderLabel,
  placeholderCaption,
  frameClassName,
  className,
  fill,
  ...imageProps
}: SmartImageProps) {
  if (!available) {
    return (
      <div className={cn("h-full w-full", fill && "absolute inset-0", frameClassName)}>
        <MediaPlaceholder
          label={placeholderLabel}
          caption={placeholderCaption}
          className="h-full w-full"
        />
      </div>
    );
  }

  return (
    <Image
      src={src}
      alt={alt}
      fill={fill}
      className={cn("object-cover", className)}
      {...imageProps}
    />
  );
}
