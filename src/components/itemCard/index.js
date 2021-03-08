import styles from "./style.module.scss"


function ItemsBlock() {
    const list1 = ["Детектор движения", "Удаленный просмотр", "Запись звука", "Умная ИК-подсветка", "Ночная сьемка", "Уличное"]

    return (
        <div className={styles.itemsBlock}>
            <ItemBlock headtext="Комплект Стандарт на 18 камер" name="Стандарт" kitPrice="₽ 19 000" servicePrice="₽ 9 999" list={list1} />
            <ItemBlock headtext="Комплект Стандарт на 18 камер" name="Стандарт" kitPrice="₽ 19 000" servicePrice="₽ 9 999" list={list1} />
            <ItemBlock headtext="Комплект Стандарт на 18 камер" name="Стандарт" kitPrice="₽ 19 000" servicePrice="₽ 9 999" list={list1} />
        </div>
    )
}

function ItemBlock(props) {
    const headtext = props.headtext

    const name = props.names
    const kitPrice = props.kitPrice
    const servicePrice = props.servicePrice
    const list = props.list

    return (
        <div className={styles.ItemBlock}>
            <div className={styles.itemsblockheadtext}>{headtext}</div>
            <ItemCard name={name} kitPrice={kitPrice} servicePrice={servicePrice} list={list}  />
            <div className={styles.btnsblock}>
                <button className={styles.purchase}>Приобрести</button>
                <div className={styles.details}>Подробнее</div>
            </div>
        </div>
    )
}

function ItemCard(props) {
    const name = props.names
    const kitPrice = props.kitPrice
    const servicePrice = props.servicePrice
    const list = props.list

    return (
        <div className={styles.itemCard}>
            <div className={styles.head}>
                <div className={styles.block}>
                    <div className={styles.logo}></div>
                    <div className={styles.name}>{name}</div>
                </div>
            </div>
            <div className={styles.center}>
                <div className={styles.block2}>
                    <div className={styles.centerheadtext}>Состав системы</div>
                    <div className={styles.list}>
                        <SystemComposition list={list}/>
                    </div>
                </div>
            </div>
            <div className={styles.bottom}>
                <div className={styles.blue}>
                    <div className={styles.left}>Комплект</div>
                    <div className={styles.right}>{kitPrice}</div>
                </div>
                <div className={styles.orange}>
                    <div className={styles.left}>Сервис</div>
                    <div className={styles.right}>{servicePrice}</div>
                </div>
            </div>
        </div>
    )
}


function SystemComposition(props) {
    return (
        props.list.map(item => 
            <div className={styles.paragra}>
                <svg className={styles.point} width="7" height="6" viewBox="0 0 7 6" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="3.13477" cy="3" r="3" fill="#224156"/></svg>
                {item}
            </div>
        ))
}


export default ItemsBlock