import Image from "next/image";
import styled from "styled-components";
import { useMediaQuery } from "../../lib/hooks";

type Props = {
  src: string;
  alt: string;
};

const CrewImage = ({ src, alt }: Props) => {
  const isMobile = useMediaQuery(768);
  const isTablet = useMediaQuery(900);

  if (isMobile) {
    return (
      <Image
        src={src}
        width="180px"
        height="240px"
        alt={alt}
        className="mobile"
      />
    );
  } else if (isTablet) {
    return (
      <Image
        src={src}
        width="456px"
        height="572px"
        alt={alt}
        className="tablet"
      />
    );
  } else {
    return (
      <Image
        src={src}
        width="568px"
        height="712px"
        alt={alt}
        className="desktop"
      />
    );
  }
};

export default CrewImage;
