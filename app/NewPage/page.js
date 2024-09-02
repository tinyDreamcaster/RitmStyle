'use client'

import styles from "../page.module.scss";

export default function NewPage() {


    return (
        <>
            <main>
                <div className="container">
                    <section className={styles.new}>
                        <h2 className={styles.title + ' ' + styles.sectionTitle} >Новый формат сеансов</h2>
                        <div className={styles.NewPageContentWrapper}>
                            <div className={styles.NewPageContentWrapper__textWrapper}>
                                <time className={styles.newsList__datetime + ' ' + styles.newsList__datetime_newPage} dateTime="2022-02-13">13.02.2022</time>
                                <p className={styles.infoBlock__label + ' ' + styles.infoBlock__label_newPage}>
                                    Новый формат сеансов
                                </p>
                                <p className={styles.description__text + ' ' + styles.description__text_newPage}>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget massa vitae tempus at pretium lacus viverra. Vitae libero vivamus quis enim quam vitae dictumst nulla duis. Sed nisl nibh et morbi tristique suspendisse morbi. Consequat facilisi tortor consectetur magnis odio. Risus, aenean tortor cras consectetur lacus, ut erat ac et. Fermentum aliquam ac egestas eget risus a. Maecenas sed pellentesque bibendum vitae at praesent sed. Amet pretium arcu gravida arcu ut dui sem quis id. Tristique in leo donec proin odio eget. Neque ut in egestas lacus sit nunc, nec. Proin mattis augue sit leo sagittis nam id accumsan. Pulvinar nunc fermentum vulputate ultrices pulvinar sed ultrices quis.
                                </p>
                                <p className={styles.description__text + ' ' + styles.description__text_newPage}>
                                    Tempor facilisis tellus ac, odio. A amet congue tristique nibh malesuada lectus. Purus quam dapibus rhoncus iaculis amet tristique. Mattis fusce lorem fames mauris orci rhoncus, amet fringilla. Quis integer vitae at vitae urna etiam sed eu sit.
                                </p >
                                <p className={styles.description__text + ' ' + styles.description__text_newPage}>
                                    Vitae turpis ullamcorper habitant fermentum aliquet volutpat.
                                </p >

                            </div >
                            <picture>
                                <source srcSet="img/newsImage.webp" type="image/webp" />
                                <img className={styles.newImage} src="img/newsImage.jpg" alt="новостное изображение" />
                            </picture>
                        </div >
                    </section >
                </div >
            </main >
        </>
    );
}
