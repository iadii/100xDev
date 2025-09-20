export function ImageComp({ src, width, style }) {
  return (
    <img
      src={src}
      width={width}
      style={style}
      alt="gallery-image"
      className="rounded-2xl"
      loading="lazy"
    />
  );
}
