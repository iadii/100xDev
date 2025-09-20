import { ImageWrap } from "./ImageWrapper";
import { ImageComp } from "./ImageComponent";

export function Wrapper() {
  return (
    <div className="min-h-screen p-4">
      <div className="grid grid-cols-2 grid-rows-2 h-screen gap-4">
        <ImageWrap className="w-full h-full rounded-lg overflow-hidden shadow-lg">
          <ImageComp
            src="https://images.pexels.com/photos/1796705/pexels-photo-1796705.jpeg"
            className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
          />
        </ImageWrap>
        <ImageWrap className="w-full h-full rounded-lg overflow-hidden shadow-lg">
          <ImageComp
            src="https://images.pexels.com/photos/1187911/pexels-photo-1187911.jpeg"
            className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
          />
        </ImageWrap>
        <ImageWrap className="w-full h-full rounded-lg overflow-hidden shadow-lg">
          <ImageComp
            src="https://images.pexels.com/photos/2856012/pexels-photo-2856012.jpeg"
            className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
          />
        </ImageWrap>
        <ImageWrap className="w-full h-full rounded-lg overflow-hidden shadow-lg">
          <ImageComp
            src="https://images.pexels.com/photos/29686519/pexels-photo-29686519.jpeg"
            className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
          />
        </ImageWrap>
      </div>
    </div>
  );
}
