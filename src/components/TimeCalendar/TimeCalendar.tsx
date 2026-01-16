import style from "./styles.module.scss";
import heart from "../../../public/heart.svg";
import lineVertical from "../../../public/lineVertical.svg";
import heartSmall from "../../../public/heartSmall.svg";

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
        <div className={style.shellFirst}>
          <div className={style.wrapperTimeText}>
            <div className={style.textTime}>16:30</div>
            <div className={style.textTime}>сбор гостей</div>
          </div>
          <img src={heartSmall} className={style.heartSmall} />
        </div>
        <div className={style.shellFirst}>
          <div className={style.wrapperTimeText}>
            <div className={style.textTime}>17:00</div>
            <div className={style.textTime}>торжественная церемония</div>
          </div>
          <img src={heartSmall} className={style.heartSmall} />
        </div>
        <div className={style.shellFirst}>
          <div className={style.wrapperTimeText}>
            <div className={style.textTime}>18:00</div>
            <div className={style.textTime}>начало банкета</div>
          </div>
          <img src={heartSmall} className={style.heartSmall} />
        </div>
        <div className={style.shellFirst}>
          <div className={style.wrapperTimeText}>
            <div className={style.textTime}>21:00</div>
            <div className={style.textTime}>праздничный торт </div>
          </div>
          <img src={heartSmall} className={style.heartSmall} />
        </div>
        <img src={lineVertical} className={style.lineVertical} />
      </div>
    </div>
  );
};

export default TimeCalendar;
