import styles from './style.module.scss'

function Banner() {
    return ( 
        <div className={styles.Banner}>
            <div className={styles.content}>
                <div className={styles.headtext}>Услуги систем Безопасности</div>
                <p className={styles.hz}>При помощи систем управления можно контролировать и регулировать каждый источник света в помещении.</p>
                <button className={styles.projectsButton}>Проекты</button>
            </div>
        </div>
    )
}

export default Banner