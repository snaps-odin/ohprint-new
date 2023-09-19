import { useEffect, useRef, useState } from "react";
import { requestImage } from "utils/api";

function ImageLoader(props: any) {
  const [ready, setReady] = useState(false);
  const [rectangle, setRectangle] = useState(null);
  const [isValid, setIsValid] = useState(false);
  const [backgroundStyle, setBackgroundStyle] = useState({});

  const scope = useRef({ clientWidth: 0 });

  const { imageUrl, isEmpty, handleUpdateValid, isSizeFixed, backgroundColor, customStyle, style, className, showNotFound } = props;

  useEffect(() => {
    if (!isEmpty) {
      requestImage(imageUrl)
        .then((rectangle) => {
          updateState(true, rectangle);
        })
        .catch((error) => {
          updateState(false);
        })
        .finally(() => {});
    } else {
      updateState(true);
    }
  }, []);

  useEffect(() => {
    setBackgroundStyle(
      Object.assign(
        {},
        style || {},
        isValid && !isEmpty
          ? customStyle
            ? {
                background: `${backgroundColor || ""} url(${imageUrl}) center center / contain no-repeat`,
              }
            : {
                background: `${backgroundColor || ""} url(${imageUrl}) center center / contain no-repeat`,
                height: !isSizeFixed && rectangle ? `${scope.current.clientWidth * (rectangle["height"] / rectangle["width"])}px` : null,
              }
          : null,
      ),
    );
  }, [rectangle]);

  const updateState = (isValid: boolean, rectangle = null) => {
    Promise.all([handleUpdateValid && handleUpdateValid(isValid, rectangle)]).then(() => {
      setReady(true);
      setRectangle(rectangle);
      setIsValid(isValid);
    });
  };

  if (!ready) return null;

  return <div {...props} className={`image-loader-wrap ${className} ${!isValid && showNotFound ? "not-found" : ""} ${isEmpty ? "empty" : ""}`} style={backgroundStyle} ref={scope} />;
}

export default ImageLoader;
