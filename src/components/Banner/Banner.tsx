import photo from "../../../public/photo.svg";
import style from "./styles.module.scss";
import line from "../../../public/line.svg";

const Banner = () => {
  return (
    <div>
      <h1 className={style.title}>Приглашение на свадьбу</h1>
      <div className={style.shell}>
        <div className={style.gradient}></div>
        <div className={style.wrapper}>
          <img src={photo} className={style.img} />
        </div>
        <div className={style.date}>
          14 <div>08</div> 26
        </div>
      </div>
      <div className={style.wrapperText}>
        <img src={line} className={style.line} />
        <div className={style.titleText}>Дорогие друзья и родные!</div>
        <div className={style.text}>
          Один день в этом году будет для нас особенным и мы хотим провести его
          в кругу близких и друзей. С большим удовольствием приглашаем вас на
          нашу свадьбу!
        </div>
      </div>
    </div>
  );
};

export default Banner;
