'use client'

import styles from "../page.module.scss";
import Link from 'next/link'

export default function BlogPage() {


    return (
        <>
            <main>
                <div className="container">
                    <section className={styles.blog}>
                        <h2 className={styles.title + ' ' + styles.sectionTitle}>Блог</h2>
                        <ul className={styles.blogPage}>
                            <li className={styles.blogItem}>
                                <div className={styles.NewPageContentWrapper + ' ' + styles.NewPageContentWrapper_blog}>
                                    <div className={styles.NewPageContentWrapper__textWrapper_blog}>
                                        <time className={styles.newsList__datetime + ' ' + styles.newsList__datetime_newPage + ' ' + styles.newsList__datetime_blog} dateTime="2022-02-13">13.02.2022</time>
                                        <p className={styles.infoBlock__label + ' ' + styles.infoBlock__label_newPage + ' ' + styles.infoBlock__label_blog}>
                                            Новый формат сеансов"
                                        </p>
                                        <p className={styles.description__text + ' ' + styles.description__text_newPage + ' ' + styles.description__text_blog}>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget massa vitae tempus at pretium lacus viverra. Vitae libero vivamus quis enim quam vitae dictumst nulla duis. Sed nisl nibh et morbi tristique suspendisse morbi. Consequat facilisi tortor consectetur magnis odio. Risus, aenean tortor cras consectetur lacus, ut erat ac et. Fermentum aliquam ac egestas eget risus a. Maecenas sed pellentesque bibendum vitae at praesent sed. Amet pretium arcu gravida arcu ut dui sem quis id. Tristique in leo donec proin odio eget. Neque ut in egestas lacus sit nunc, nec. Proin mattis augue sit leo sagittis nam id accumsan. Pulvinar nunc fermentum vulputate ultrices pulvinar sed ultrices quis.
                                        </p>
                                        <Link className={styles.button + ' ' + styles.button_blog} href="/NewPage">Читать статью</Link>
                                    </div>
                                    <picture>
                                        <source srcSet="img/blogImage.webp" type="image/webp" />
                                        <img className={styles.newImage + ' ' + styles.newImage_blog} src="img/blogImage.jpg" alt="Изображение статьи блога" />
                                    </picture>
                                </div>
                            </li>
                            <li className={styles.blogItem}>
                                <div className={styles.NewPageContentWrapper + ' ' + styles.NewPageContentWrapper_blog}>
                                    <div className={styles.NewPageContentWrapper__textWrapper_blog}>
                                        <time className={styles.newsList__datetime + ' ' + styles.newsList__datetime_newPage + ' ' + styles.newsList__datetime_blog} dateTime="2022-02-13">13.02.2022</time>
                                        <p className={styles.infoBlock__label + ' ' + styles.infoBlock__label_newPage + ' ' + styles.infoBlock__label_blog}>
                                            Новый формат сеансов"
                                        </p>
                                        <p className={styles.description__text + ' ' + styles.description__text_newPage + ' ' + styles.description__text_blog}>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget massa vitae tempus at pretium lacus viverra. Vitae libero vivamus quis enim quam vitae dictumst nulla duis. Sed nisl nibh et morbi tristique suspendisse morbi. Consequat facilisi tortor consectetur magnis odio. Risus, aenean tortor cras consectetur lacus, ut erat ac et. Fermentum aliquam ac egestas eget risus a. Maecenas sed pellentesque bibendum vitae at praesent sed. Amet pretium arcu gravida arcu ut dui sem quis id. Tristique in leo donec proin odio eget. Neque ut in egestas lacus sit nunc, nec. Proin mattis augue sit leo sagittis nam id accumsan. Pulvinar nunc fermentum vulputate ultrices pulvinar sed ultrices quis.
                                        </p>
                                        <Link className={styles.button + ' ' + styles.button_blog} href="/NewPage">Читать статью</Link>
                                    </div>
                                    <picture>
                                        <source srcSet="img/blogImage.webp" type="image/webp" />
                                        <img className={styles.newImage + ' ' + styles.newImage_blog} src="img/blogImage.jpg" alt="Изображение статьи блога" />
                                    </picture>
                                </div>
                            </li>
                        </ul >
                    </section >
                </div >
            </main >
        </>
    );
}
