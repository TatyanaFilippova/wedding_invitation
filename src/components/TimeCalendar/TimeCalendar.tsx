import style from "./styles.module.scss";
import heart from "../../../public/heart.svg";
import lineVertical from "../../../public/lineVertical.svg";

const TimeCalendar = () => {
  return (
    <div className={style.wrapper}>
      <div className={style.title}>наш день</div>
      <div className={style.textDate}>август</div>
      <div className={style.textDate}>2026</div>

      <div className={style.shell}>
        <div className={style.sizeSmall}>12</div>
        <div className={style.sizeMiddle}>13</div>
        <img src={heart} className={style.heart} />
        <div className={style.center}>14</div>
        <div className={style.sizeMiddle}>15</div>
        <div className={style.sizeSmall}>16</div>
      </div>
      <div className={style.wrapperTime}>
        sdf
        <img src={lineVertical} className={style.lineVertical} />
      </div>
    </div>
  );
};

export default TimeCalendar;
