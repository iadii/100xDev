function ImageComp({ src, width, style }) {
  return (
    <img
      src={src}
      width={width}
      style={style}
      alt="gallery-image"
      loading="lazy"
    />
  );
}

export default  ImageComp;
