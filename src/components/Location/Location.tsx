import style from "./styles.module.scss";
import location from "../../../public/location.svg";

const Location = () => {
  return (
    <div className={style.wrapper}>
      <div className={style.title}>Ждем вас</div>
      <div className={style.text}>
        Гостевой комплекс “Рассвет” Тентюковская улица, 277/3
      </div>
      <img src={location} className={style.location} />
      <div className={style.map}>
        <iframe
          src="https://yandex.ru/map-widget/v1/?um=constructor%3A8760fc50c8bb9ea88120a795ac7426fc81bbae60adda187e2193816ba158c512&amp;source=constructor"
          width="100%"
          height="240"
          frameBorder="0"
        ></iframe>
      </div>
    </div>
  );
};

export default Location;
