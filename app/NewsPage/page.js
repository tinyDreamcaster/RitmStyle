'use client'


import Link from 'next/link'
import styles from "../page.module.scss";

export default function NewsPage() {


    return (
        <>
            <main>
                <div className="container">
                    <section className={styles.news}>
                        <h2 className={styles.title + ' ' + styles.sectionTitle}>Новости</h2>
                        <ul className={styles.sessionsList + ' ' + styles.sessionsList_newsList}>

                            <li className={styles.infoBlock + ' ' + styles.infoBlock_news}>
                                <time className={styles.newsList__datetime} dateTime="2022-02-13">13.02.2022"</time>
                                <Link className={styles.infoBlock__link} href="/BlogPage">
                                
                                <span className={styles.infoBlock__label}>Новый формат сеансов</span>
                                </Link>
                            </li>
                            <li className={styles.infoBlock + ' ' + styles.infoBlock_news}>
                                <time className={styles.newsList__datetime} dateTime="2022-02-13">13.02.2022"</time>
                                <Link className={styles.infoBlock__link} href="/BlogPage">
                                
                                <span className={styles.infoBlock__label}>Новый формат сеансов</span>
                                </Link>
                            </li>
                            <li className={styles.infoBlock + ' ' + styles.infoBlock_news}>
                                <time className={styles.newsList__datetime} dateTime="2022-02-13">13.02.2022"</time>
                                <Link className={styles.infoBlock__link} href="/BlogPage">
                                
                                <span className={styles.infoBlock__label}>Новый формат сеансов</span>
                                </Link>
                            </li>
                            <li className={styles.infoBlock + ' ' + styles.infoBlock_news}>
                                <time className={styles.newsList__datetime} dateTime="2022-02-13">13.02.2022"</time>
                                <Link className={styles.infoBlock__link} href="/BlogPage">
                                
                                <span className={styles.infoBlock__label}>Новый формат сеансов</span>
                                </Link>
                            </li>
                            <li className={styles.infoBlock + ' ' + styles.infoBlock_news}>
                                <time className={styles.newsList__datetime} dateTime="2022-02-13">13.02.2022"</time>
                                <Link className={styles.infoBlock__link} href="/BlogPage">
                                
                                <span className={styles.infoBlock__label}>Новый формат сеансов</span>
                                </Link>
                            </li>
                            <li className={styles.infoBlock + ' ' + styles.infoBlock_news}>
                                <time className={styles.newsList__datetime} dateTime="2022-02-13">13.02.2022"</time>
                                <Link className={styles.infoBlock__link} href="/BlogPage">
                                
                                <span className={styles.infoBlock__label}>Новый формат сеансов</span>
                                </Link>
                            </li>

                        </ul>
                    </section>
                </div>
            </main>
        </>
    );
}
