import Image from "next/image";
import { useMediaQuery } from "../../lib/hooks";

type Props = {
  portraitSrc: string;
  landscapeSrc: string;
  alt: string;
};

const TechnologyImage = ({ portraitSrc, landscapeSrc, alt }: Props) => {
  const isMobile = useMediaQuery(768);
  const isTablet = useMediaQuery(1200);
  const isDesktop = useMediaQuery(1440);

  if (isMobile) {
    return (
      <Image
        src={landscapeSrc}
        alt={alt}
        width="375px"
        height="170px"
        priority={true}
        layout="responsive"
      />
    );
  } else if (isTablet) {
    return (
      <Image
        src={landscapeSrc}
        alt={alt}
        width="768px"
        height="310px"
        priority={true}
        layout="responsive"
      />
    );
  } else if (isDesktop) {
    return (
      <Image
        src={portraitSrc}
        alt={alt}
        width="515px"
        height="527px"
        priority={true}
        layout="responsive"
      />
    );
  } else {
    return (
      <Image
        src={portraitSrc}
        alt={alt}
        layout="fill"
        objectFit="contain"
        priority={true}
      />
    );
  }
};

export default TechnologyImage;
