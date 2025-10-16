import {
  LucideIcon,
  Truck,
  CreditCard,
  CircleDollarSign,
  Handshake,
} from "lucide-react";

function Trust() {
  type TrustComponentProps = {
    icon: LucideIcon;
    title: string;
    content: string;
  };
  const TrustComponent = ({
    icon: Icon,
    title,
    content,
  }: TrustComponentProps) => {
    return (
      <div className="flex items-center gap-4">
        <div className="text-5xl">
          <Icon size={35} />
        </div>
        <div>
          <h3 className="text-base font-semibold">{title}</h3>
          <p className="text-sm">{content}</p>
        </div>
      </div>
    );
  };
  return (
    <section className="bg-banner text-white py-10 lg:py-16">
      <div className="container mx-auto px-4 xl:px-0">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <TrustComponent
            icon={Truck}
            title="Livraison rapide et fiable"
            content="Nous vous offrons la livraison dans tout Conakry et les régions partenaires"
          />
          <TrustComponent
            icon={CreditCard}
            title="Paiement sécurisé"
            content="Nous proposons les paiements via Orange Money, carte bancaire ou à la livraison"
          />
          <TrustComponent
            icon={CircleDollarSign}
            title="Satisfaction garantie"
            content="Pour garantir votre satisfaction, nous proposons le retour ou échange sous 24h"
          />
          <TrustComponent
            icon={Handshake}
            title="Commerce équitable"
            content="En plus de bénéificier des meilleurs prix, chaque achat soutient un producteur local"
          />
        </div>
      </div>
    </section>
  );
}
export default Trust;
