import { ImageWrap } from "./ImageWrapper";
import { ImageComp } from "./ImageComponent";

export function Wrapper() {
  return (
    <>
      <ImageWrap>
        <ImageComp
          src="https://images.pexels.com/photos/3508236/pexels-photo-3508236.jpeg"
          width="300px"
        />
      </ImageWrap>
      <ImageWrap>
        <ImageComp
          src="https://images.pexels.com/photos/3508236/pexels-photo-3508236.jpeg"
          style={{ position: "relative", right: "0", width: "300px" }}
        />
      </ImageWrap>
    </>
  );
}
