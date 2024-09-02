'use client'

import React, { useState, useEffect } from "react";

import styles from "../page.module.scss";

export default function Reviews(params) {


    const [slideWidth, setSlideWidth] = useState(1);
    const [slideChecked, setSlideChecked] = useState(1);
    const [sliderMove, setsliderMove] = useState(34.375);

    useEffect(() => {

        function ClientSizeCheck() {
            if (document.documentElement.clientWidth <= 1746) {
                setSlideWidth(34.364);
                setsliderMove(0);
            }
            else {
                setSlideWidth(34.375);
                setsliderMove(34.375);
            }
        }


        ClientSizeCheck();

        window.addEventListener('resize', function (event) {
            ClientSizeCheck();
        }, true);


    }, []);


    return (
        <section className={styles.reviews}>
            <h2 className={styles.title +' '+ styles.sectionTitle}>Отзывы</h2>


            <ul className={styles.reviewsSlider} style={{ left: sliderMove + 'rem' }}>
                <li className={slideChecked == 1 ? styles.slide + ' ' + styles.slide_action : styles.slide}>
                    <p className={styles.slide__reiewerName}>
                        Александра Дмитриева
                    </p>
                    <p className={styles.slide__review}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consectetur nulla viverra egestas tellus. Cursus scelerisque phasellus netus proin. Etiam mauris maecenas facilisis faucibus mauris eleifend purus. Purus dictum vulputate elementum mauris amet.
                    </p>
                    <p className={styles.slide__review}>
                        Hendrerit sit cras ullamcorper morbi quam vitae ante nibh. Ornare ipsum mi nisl augue placerat lacus. Dolor ipsum fermentum viverra bibendum faucibus urna. Arcu, ut sed tellus lacus quisque diam. Semper sed aenean in etiam mus praesent diam semper in. Pretium id a amet, massa ligula nibh faucibus ornare. Ut aenean rhoncus sed nam ut diam dapibus. Risus nibh faucibus eu vestibulum tempor, quis ultrices mauris. Porta enim, donec odio sagittis, eget velit at.
                    </p>
                </li>
                <li className={slideChecked == 2 ? styles.slide + ' ' + styles.slide_action : styles.slide}>
                    <p className={styles.slide__reiewerName}>
                        Кира Иванова
                    </p>
                    <p className={styles.slide__review}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Netus diam risus morbi nulla dictum. Urna mi orci gravida placerat amet, eu, aliquet facilisis aliquet. Dolor praesent nam ornare fringilla enim nibh donec sit imperdiet. Amet, diam duis eu sit et. Volutpat vestibulum a lectus sed blandit.
                    </p>
                    <p className={styles.slide__review}>
                        Venenatis urna mattis eu enim molestie iaculis et aliquet. Velit in pellentesque vestibulum phasellus orci. Fermentum sed phasellus aliquam nulla non aenean. Quisque id nunc, mauris potenti a massa. Fermentum at elit, convallis leo dolor aliquet id elementum. Ullamcorper sociis et cum bibendum in egestas. Diam, urna, sed tempus mollis aliquam elit. Facilisi nam nulla pulvinar mauris vel lacinia venenatis.
                    </p>
                </li>
                <li className={slideChecked == 3 ? styles.slide + ' ' + styles.slide_action : styles.slide}>
                    <p className={styles.slide__reiewerName}>
                        Яна Жернова
                    </p>
                    <p className={styles.slide__review}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lacinia eget mattis orci aliquam enim tincidunt gravida aliquet ut. Ipsum vulputate morbi felis, lobortis tincidunt. Pretium dictum odio feugiat auctor diam sit viverra gravida. Lobortis arcu rhoncus, mi mi vitae feugiat amet, vitae ac. Cursus diam turpis iaculis nisi sit. Vel blandit et sit elit vestibulum feugiat proin tempor, justo. Diam commodo, pellentesque at porttitor tristique faucibus faucibus morbi. Bibendum pretium lacus, tempus viverra vitae odio nunc eget.
                    </p>
                    <p className={styles.slide__review}>
                        Tortor fermentum orci neque sed. Mauris faucibus diam lorem erat ullamcorper donec egestas neque. Maecenas malesuada mauris magnis sed id. Luctus vitae justo, in consectetur arcu. Nulla feugiat at eu in aliquet. Diam nunc, libero mauris tellus suspendisse morbi sagittis semper.
                    </p>
                </li>
                <li className={slideChecked == 4 ? styles.slide + ' ' + styles.slide_action : styles.slide}>
                    <p className={styles.slide__reiewerName}>
                        Кира Жернова
                    </p>
                    <p className={styles.slide__review}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Netus diam risus morbi nulla dictum. Urna mi orci gravida placerat amet, eu, aliquet facilisis aliquet. Dolor praesent nam ornare fringilla enim nibh donec sit imperdiet. Amet, diam duis eu sit et. Volutpat vestibulum a lectus sed blandit.
                    </p>
                    <p className={styles.slide__review}>
                        Venenatis urna mattis eu enim molestie iaculis et aliquet. Velit in pellentesque vestibulum phasellus orci. Fermentum sed phasellus aliquam nulla non aenean. Quisque id nunc, mauris potenti a massa. Fermentum at elit, convallis leo dolor aliquet id elementum. Ullamcorper sociis et cum bibendum in egestas. Diam, urna, sed tempus mollis aliquam elit. Facilisi nam nulla pulvinar mauris vel lacinia venenatis.
                    </p>
                </li>
            </ul>
            <form className={styles.reviewsForm}>
                <input type="radio" className={styles.sliderRadio} name="reviewGroup" id="sliderRadio1" onChange={() => { slideWidth == 34.375 ? setsliderMove(slideWidth * (1)) : setsliderMove(slideWidth * (0)); setSlideChecked(1) }} defaultChecked />
                <label htmlFor="sliderRadio1" className={styles.sliderRadioLabel}></label>

                <input type="radio" className={styles.sliderRadio} name="reviewGroup" id="sliderRadio2" onChange={() => { slideWidth == 34.375 ? setsliderMove(slideWidth * (0)) : setsliderMove(slideWidth * (-1)); setSlideChecked(2) }} />
                <label htmlFor="sliderRadio2" className={styles.sliderRadioLabel} ></label>

                <input type="radio" className={styles.sliderRadio} name="reviewGroup" id="sliderRadio3" onChange={() => { slideWidth == 34.375 ? setsliderMove(slideWidth * (-1)) : setsliderMove(slideWidth * (-2)); setSlideChecked(3) }} />
                <label htmlFor="sliderRadio3" className={styles.sliderRadioLabel}></label>

                <input type="radio" className={styles.sliderRadio} name="reviewGroup" id="sliderRadio4" onChange={() => { slideWidth == 34.375 ? setsliderMove(slideWidth * (-2)) : setsliderMove(slideWidth * (-3)); setSlideChecked(4) }} />
                <label htmlFor="sliderRadio4" className={styles.sliderRadioLabel}></label>

            </form>
        </section >
    )

} 