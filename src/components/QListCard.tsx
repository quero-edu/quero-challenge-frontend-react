import { ReactNode, HTMLAttributes } from "react";

interface Card extends HTMLAttributes<HTMLElement> {
  id: string;
}

interface QListCardProps<T extends Card> {
  cards: T[];
  children: (card: T) => ReactNode;
}

const QListCard = <T extends Card>({
  cards,
  children,
  ...rest
}: QListCardProps<T>) => {
  return (
    <ul
      {...rest}
      className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4"
    >
      {cards.map((card) => (
        <li key={card.id}>{children(card)}</li>
      ))}
    </ul>
  );
};

export default QListCard;
