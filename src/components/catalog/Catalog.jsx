import styles from './Catalog.module.css'

export default function Catalog() {

    return (
        <section className={styles.dashboard}>
            <div className={styles.booksList}>
                <div className={styles.bookLi}>
                    <h3>"Charlie and the Chocolate Factory" </h3>
                    <p>Type: "Fiction"</p>
                    <p className={styles.img}><img src="https://m.media-amazon.com/images/I/51hxjozCakL._SY445_SX342_.jpg" alt='' /></p>
                    <a className={styles.button} href="/details">Details</a>
                </div>

                <div className={styles.bookLi}>
                    <h3>"The Power Of Positive Thinking"</h3>
                    <p>Type: "Motivational"</p>
                    <p className={styles.img}><img src="https://m.media-amazon.com/images/I/81CRko3o+mL._SY425_.jpg" alt='' /></p>
                    <a className={styles.button} href="/details">Details</a>
                </div>

                <div className={styles.bookLi}>
                    <h3>"Be Useful: Seven tools for life"</h3>
                    <p>Type: "Motivational"</p>
                    <p className={styles.img}><img src="https://m.media-amazon.com/images/I/81hHLRxL4uL._SY425_.jpg" alt='' /></p>
                    <a className={styles.button} href="/details">Details</a>
                </div>
            </div>
            {/* <!-- Display paragraph: If there are no books in the database --> */}
            <p className={styles.noBooks}>No books available!</p>
        </section>
    );
}