import Link from "next/link";
import {
  Tractor,
  ArrowRight,
  UserRound,
  Store,
  LucideIcon,
} from "lucide-react";
import React from "react";

type CommunityCardProps = {
  icon: LucideIcon;
  title: React.ReactNode;
  content: string;
  detailsLink: string;
  className?: string;
};

function Community() {
  const CommunityCard = ({
    icon: Icon,
    title,
    content,
    detailsLink,
    className,
  }: CommunityCardProps) => {
    return (
      <div
        className={`flex flex-col gap-4 lg:gap-8 justify-between p-6 rounded-xl ${className}`}
      >
        <Icon size={40} />
        <h2 className="text-4xl font-medium">{title}</h2>
        <p>{content}</p>
        <Link
          href={detailsLink}
          className="border border-black px-6 py-3 w-fit rounded-full flex gap-2"
        >
          En savoir plus
          <ArrowRight />
        </Link>
      </div>
    );
  };

  const cards: CommunityCardProps[] = [
    {
      icon: Tractor,
      title: (
        <>
          Je suis <br /> agriculteur
        </>
      ),
      content:
        "Rejoignez Agriconnect pour faire parti des centaines d'agriculteur partenaire et vendez vos produits directement en ligne.",
      detailsLink: "join/persants",
      className: "bg-purple-100",
    },
    {
      icon: Store,
      title: (
        <>
          Je suis <br /> commerçant
        </>
      ),
      content:
        "Rejoignez Agriconnect et commandez facilement vos produits préférés à prix juste.",
      detailsLink: "join/sellers",
      className: "bg-purple-200",
    },
    {
      icon: UserRound,
      title: (
        <>
          Je suis <br /> consommateur
        </>
      ),
      content:
        "Rejoignez Agriconnect et commandez facilement vos produits préférés à prix juste.",
      detailsLink: "join/customers",
      className: "bg-purple-100",
    },
  ];
  return (
    <section className="py-16">
      <div className="container mx-auto px-4 xl:px-0">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {cards.map((card: CommunityCardProps, idx) => (
            <CommunityCard
              key={idx}
              icon={card.icon}
              title={card.title}
              content={card.content}
              detailsLink={card.detailsLink}
              className={card.className}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
export default Community;
