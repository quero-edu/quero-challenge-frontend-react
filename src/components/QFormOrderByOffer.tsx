import { FC } from "react";
import QHeading from "./QHeading";
import QInputRadio from "./QInputRadio";

const QFormOrderByOffer: FC = () => {
  return (
    <form action="#">
      <QHeading tag="h2" size="sm" className="mb-2">
        Ordenar
      </QHeading>

      <QInputRadio
        label="Cursos de A-Z"
        name="order-by"
        value="course-name"
        checked
      />

      <QInputRadio label="Menor preço" name="order-by" value="price" />

      <QInputRadio label="Melhor avaliados" name="order-by" value="rating" />
    </form>
  );
};

export default QFormOrderByOffer;
