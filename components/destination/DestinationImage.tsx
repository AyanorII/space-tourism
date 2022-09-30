import Image from "next/image";
import { useMediaQuery } from "../../lib/hooks";

type Props = {
  src: string;
  alt: string;
};

const DestinationImage = ({ src, alt }: Props) => {
  const isMobile = useMediaQuery(768);
  const isTablet = useMediaQuery(1024);

  if (isMobile) {
    return (
      <Image src={src} width={170} height={170} alt={alt} priority={true} />
    );
  } else if (isTablet) {
    return (
      <Image src={src} width={300} height={300} alt={alt} priority={true} />
    );
  } else {
    return (
      <Image src={src} width={445} height={445} alt={alt} priority={true} />
    );
  }
};

export default DestinationImage;
