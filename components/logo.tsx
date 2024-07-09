import Image from "next/image";

interface LogoProps {
  height?: number;
  width?: number;
  className?: string;
}

export const Logo = ({ height = 50, width = 50, className }: LogoProps) => {
  return (
    <Image
      src={"/images/logo.svg"}
      width={width}
      height={height}
      alt="logo"
      className={className}
    />
  );
};
