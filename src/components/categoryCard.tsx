import Image, { StaticImageData } from "next/image";
type CardProps = {
  image: StaticImageData;
  alt: string;
  name: string;
  className?: string;
};

function CategoryCard({ image, alt, name, ...props }: CardProps) {
  return (
    <div
      className={`flex flex-col gap-6 py-4 justify-center items-center rounded-xl ${props.className}`}
    >
      <Image src={image} alt={alt} className="w-44" />
      <p className="font-semibold text-lg">{name}</p>
    </div>
  );
}
export default CategoryCard;
