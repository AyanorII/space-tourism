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
    return <Image src={src} width={170} height={170} alt={alt} />;
  } else if (isTablet) {
    return <Image src={src} width={300} height={300} alt={alt} />;
  } else {
    return <Image src={src} width={445} height={445} alt={alt} />;
  }
};

export default DestinationImage;
