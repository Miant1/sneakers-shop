import style from './infoPages.module.scss'
import {Link} from "react-router-dom";

const InfoPages = ({imgUrl, title, info}) => {

    const onBackToHome = () => {

    }

    return(
        <div className={style.wrapper}>
            <img src={imgUrl} alt="emotion"/>
            <h3>{title}</h3>
            <p>{info}</p>
            <Link to='/' className={style.comeBack} onClick={onBackToHome} >
                <i className="fas fa-arrow-left"></i>
                <span>Вернуться назад</span>
            </Link>
        </div>
    )
}

export default InfoPages;
