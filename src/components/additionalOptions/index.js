import styles from './style.module.scss'


export default function AdditionalOptions() {
    return (
        <div className={styles.AdditionalOptions}>
                <div className={styles.headtext}>Дополнительные опции (при покупке комплекта)</div>
                <div className={styles.optionContainer}>
                    <div className={styles.iconPlace}>
                        <div className={styles.electricPlugIcon}/>
                    </div>
                    <div className={styles.options}>
                        <Option name="Электроработы" pricing="от 2000 ₽"/>
                        <Option name="Защита электропитания" pricing="от 2300 ₽"/>
                        <Option name="Резервирование питания" pricing="от 2700 ₽"/>
                        <Option name="Автономное электропитание" pricing="от 29800 ₽"/>
                    </div>
                </div>

                <div className={styles.optionContainer}>
                    <div className={styles.iconPlace}>
                        <div className={styles.wifiIcon}/>
                    </div>
                    <div className={styles.options}>
                        <Option name="4G интернет-канал" pricing="от 2000 ₽"/>
                        <Option name="Wi-Fi связь (до 50 км)" pricing="от 2300 ₽"/>
                        <Option name="Усилитель Wi-Fi" pricing="от 2700 ₽"/>
                        <Option name="Усилитель сотового сигнала" pricing="от 29800 ₽"/>
                    </div>
                </div>

                <div className={styles.optionContainer}>
                    <div className={styles.iconPlace}>
                        <div className={styles.lockIcon}/>
                    </div>
                    <div className={styles.options}>
                        <Option name="Запирающийся ящик" pricing="от 2000 ₽"/>
                        <Option name="Wi-Fi связь (до 50 км)" pricing="от 2300 ₽"/>
                        <Option name="Мониторинг системы 24/7" pricing="от 2700 ₽"/>
                        <Option name="Сервисное обслуживание" pricing="от 29800 ₽"/>
                    </div>
                </div>

                <div className={styles.optionContainer}>
                    <div className={styles.iconPlace}>
                        <div className={styles.warrantyIcon}/>
                    </div>
                    <div className={styles.options}>
                        <Option name="Дополнительные гарантии" pricing="от 2000 ₽"/>
                        <Option name="Срочный аварийный выезд" pricing="от 2300 ₽"/>
                        <Option name="Мониторинг системы 24/7" pricing="от 2700 ₽"/>
                        <Option name="Сервисное обслуживание" pricing="от 29800 ₽"/>
                    </div>
                </div>

            </div>
    )
}


function Option(props) {
    return (
        <div className={styles.option}>
            <div className={styles.optionName}>
                {props.name}
            </div>
            <div className={styles.optionPricing}>
                {props.pricing}
            </div>
        </div>
    )
}
