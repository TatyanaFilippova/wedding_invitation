import photo from "../../../public/photo.svg";
import style from "./styles.module.scss";

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
    </div>
  );
};

export default Banner;
