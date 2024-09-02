'use client'


import Reviews from "./components/Reviews";
import styles from "./page.module.scss";

export default function Home() {


  return (
    <>

      <main >

        <div className='container'>
          <section className={styles.mainTitle}>
            <h1 className={styles.title + ' ' + styles.mainTitle__title}>Акватерапия RitmStyle</h1>
            <p className={styles.subtitle + ' ' + styles.mainTitle__subtitle}>Укрепление здоровья</p>
          </section>
          <section className={styles.sessions}>

            <h2 className={styles.title + ' ' + styles.sectionTitle}>Сеансы RitmStyle</h2>
            <ul className={styles.sessionsList}>
              <li className={styles.infoBlock}><a className={styles.infoBlock__link} href="#"><p className={styles.infoBlock__label}>Стандартный RitmStyle</p></a></li>
              <li className={styles.infoBlock}><a className={styles.infoBlock__link} href="#"><p className={styles.infoBlock__label}>RitmStyle для пар</p></a></li>
              <li className={styles.infoBlock}><a className={styles.infoBlock__link} href="#"><p className={styles.infoBlock__label}>RitmStyle для беременных</p></a></li>
              <li className={styles.infoBlock}><a className={styles.infoBlock__link} href="#"><p className={styles.infoBlock__label}>RitmStyle с полным погружением под воду</p></a></li>
              <li className={styles.infoBlock}><a className={styles.infoBlock__link} href="#"><p className={styles.infoBlock__label}>RitmStyle + красочная подводная фотосессия</p></a></li>
            </ul>
          </section>
        </div>
        <div className='container container__subcontainer'>

          <Reviews />
          
        </div>
        <div className='container container__aboutContainer'>
          <section className={styles.aboutRithm}>
            <h2 className={styles.title + ' ' + styles.sectionTitle}>Об RitmStyle</h2>
            <ul className={styles.aboutList}>
              <li className={styles.description + ' ' + styles.aboutList__description}>
                <p className={styles.description__title}>
                  RitmStyle массаж
                </p>
                <p className={styles.description__text}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec in purus, sed tellus eget mattis nibh quam. Eu ornare nunc, id est. Erat consectetur etiam a sit diam in imperdiet amet. Diam nisl, ipsum suscipit amet. Eleifend amet habitasse proin quis adipiscing.
                </p>
                <p className={styles.description__text}>
                  Nisl convallis mauris in consequat. Sit ac vitae posuere maecenas dictumst quam. Felis amet diam, non augue massa. Egestas molestie lobortis rhoncus, elit nulla nisl. Habitant tortor at tempor.
                </p>
              </li>
              <li className={styles.pic + ' ' + styles.aboutList__pic}>

                <picture>
                  <source srcSet="img/procedureImage.webp" type="image/webp" />
                  <img src="img/procedureImage.jpg" alt="изображение процедуры" />
                </picture>

              </li>
              <li className={styles.pic + ' ' + styles.aboutList__pic}>
                <picture>
                  <source srcSet="img/procedureImage2.webp" type="image/webp" />
                  <img src="img/procedureImage2.jpg" alt="изображение процедуры" />
                </picture>

              </li>
              <li className={styles.description + ' ' + styles.aboutList__description}>
                <p className={styles.description__title}>
                  RitmStyle гидротерапия
                </p>
                <p className={styles.description__text}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Arcu cras quis ac a non ut viverra turpis eget. Hendrerit quis pulvinar massa ipsum sem. Donec posuere nulla enim non neque etiam. Eros arcu, pulvinar penatibus luctus ridiculus sagittis vel nunc hac. Nisi, diam tincidunt dui viverra. Eget quis ultricies sem nunc risus senectus luctus ultricies. Enim feugiat pharetra pharetra et.
                </p>
                <p className={styles.description__text}>
                  Pulvinar arcu at morbi posuere cursus. Fermentum est sit enim velit ornare molestie. Ipsum nisi id sed tempor elementum. Mi nunc eget pellentesque ipsum. Suspendisse risus a id vel massa tincidunt. Hendrerit blandit in augue vel mi quam magna egestas. Fringilla ac lacus viverra ullamcorper leo, enim vitae id aliquam. Magna sed tristique tellus enim, netus tempor at elit dui. Ullamcorper hendrerit feugiat libero tellus diam egestas dui tellus odio.
                </p>
              </li>
            </ul>
          </section>
          <section className={styles.price}>
            <h2 className={styles.title + ' ' + styles.sectionTitle}>Стоимость сеансов</h2>
            <div className={styles.priceList}>
              <table className={styles.sessionsPrice}>
                <tbody>
                  <tr className={styles.sessionsPrice}>
                    <td className={styles.sessionsPrice__title}>
                      RitmStyle с погружением
                    </td>
                    <td className={styles.sessionsPrice__price}>
                      1000р.
                    </td>
                  </tr>
                  <tr className={styles.sessionsPrice}>
                    <td className={styles.sessionsPrice__title}>
                      Абонемент на RitmStyle
                    </td>
                    <td className={styles.sessionsPrice__price}>
                      5500р.
                    </td>
                  </tr>
                  <tr className={styles.sessionsPrice}>
                    <td className={styles.sessionsPrice__title}>
                      RitmStyle для пар
                    </td>
                    <td className={styles.sessionsPrice__price}>
                      6000р.
                    </td>
                  </tr>
                  <tr className={styles.sessionsPrice}>
                    <td className={styles.sessionsPrice__title}>
                      RitmStyle для беременных
                    </td>
                    <td className={styles.sessionsPrice__price}>
                      13500р.
                    </td>
                  </tr>
                  <tr className={styles.sessionsPrice}>
                    <td className={styles.sessionsPrice__title}>
                      RitmStyle +  фотосессия
                    </td>
                    <td className={styles.sessionsPrice__price}>
                      11500р.
                    </td>
                  </tr>
                </tbody>
              </table>
              <div className={styles.giftCertificate}>
                <picture>
                  <source srcSet="img/giftImage.webp" type="image/webp" />
                  <img className={styles.giftCertImage} src="img/giftImage.jpg" alt="изображение сертификата" />
                </picture>
                <p className={styles.certDescription}>
                  Подарочный сертификат
                </p>
              </div>
            </div>
          </section>
        </div>
        <div className='container'>
          <section className={styles.contacts}>

            <section className={styles.contactInformation}>

              <img className={styles.contactsMap} src="img/maps.jpg" alt="изображение карты" />
              <ul className={styles.adressLists}>
                <li className={styles.adressLists__adressDescription}>
                  <p className={styles.adressDescriptionTitle}>Бассейн WorkClass</p>
                  <ul className={styles.adressDescriptionList}>
                    <li className={styles.adressDescriptionList__adress}>
                      <svg width="20" height="18" viewBox="0 0 14 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.00001 0.25C5.1773 0.25215 3.42987 0.977169 2.14102 2.26602C0.852176 3.55486 0.127158 5.3023 0.125007 7.125C0.122824 8.61452 0.60937 10.0636 1.51001 11.25C1.51001 11.25 1.69751 11.4969 1.72813 11.5325L7.00001 17.75L12.2744 11.5294C12.3019 11.4963 12.49 11.25 12.49 11.25L12.4906 11.2481C13.3908 10.0623 13.8771 8.61383 13.875 7.125C13.8729 5.3023 13.1478 3.55486 11.859 2.26602C10.5701 0.977169 8.82271 0.25215 7.00001 0.25ZM7.00001 9.625C6.50555 9.625 6.02221 9.47838 5.61108 9.20367C5.19996 8.92897 4.87953 8.53852 4.69031 8.08171C4.50109 7.62489 4.45158 7.12223 4.54804 6.63727C4.64451 6.15232 4.88261 5.70686 5.23224 5.35723C5.58187 5.0076 6.02733 4.7695 6.51228 4.67304C6.99723 4.57657 7.4999 4.62608 7.95672 4.8153C8.41353 5.00452 8.80398 5.32495 9.07868 5.73607C9.35338 6.1472 9.50001 6.63055 9.50001 7.125C9.49918 7.78779 9.23552 8.42319 8.76686 8.89185C8.2982 9.36052 7.6628 9.62417 7.00001 9.625Z" fill="white" /></svg>
                      <p>Невский 140</p>
                    </li>
                    <li className={styles.adressDescriptionList__adress}>
                      <svg width="20" height="16" viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6.02683 3.36707C5.72703 2.3514 4.91324 2.46272 4.35683 2.93577C2.9862 4.20185 1.20154 6.85927 2.34374 10.6858C3.30031 13.9275 7.28064 16.0006 7.28064 16.0006H2.64064C2.64064 16.0006 0.244811 13.3154 0.0306387 10.1571C-0.240621 6.16409 1.35857 3.64578 3.21463 2.00409C4.95645 0.459726 6.61263 0.000610352 6.61263 0.000610352L10.0005 11.1006L13.3883 0.000610352C13.3883 0.000610352 15.0445 0.459727 16.7863 2.00409C18.6424 3.64578 20.2415 6.16409 19.9703 10.1571C19.7561 13.3154 17.3603 16.0006 17.3603 16.0006H12.7203C12.7203 16.0006 16.7003 13.9275 17.6572 10.6858C18.7994 6.85971 17.0147 4.20228 15.6441 2.93577C15.0873 2.46272 14.2735 2.3514 13.9741 3.36707C12.9461 6.60882 10.0009 15.8971 10.0009 15.8971C10.0009 15.8971 7.05564 6.60571 6.02767 3.36707H6.02683Z" fill="white" /></svg>
                      <p>м. Спасская</p>
                    </li>
                    <li className={styles.adressDescriptionList__adress}>
                      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5 0.625C5 0.45924 4.93415 0.300269 4.81694 0.183058C4.69973 0.065848 4.54076 0 4.375 0C4.20924 0 4.05027 0.065848 3.93306 0.183058C3.81585 0.300269 3.75 0.45924 3.75 0.625V1.25H2.5C1.83696 1.25 1.20107 1.51339 0.732233 1.98223C0.263392 2.45107 0 3.08696 0 3.75L0 5H20V3.75C20 3.08696 19.7366 2.45107 19.2678 1.98223C18.7989 1.51339 18.163 1.25 17.5 1.25H16.25V0.625C16.25 0.45924 16.1842 0.300269 16.0669 0.183058C15.9497 0.065848 15.7908 0 15.625 0C15.4592 0 15.3003 0.065848 15.1831 0.183058C15.0658 0.300269 15 0.45924 15 0.625V1.25H5V0.625ZM20 17.5V6.25H0V17.5C0 18.163 0.263392 18.7989 0.732233 19.2678C1.20107 19.7366 1.83696 20 2.5 20H17.5C18.163 20 18.7989 19.7366 19.2678 19.2678C19.7366 18.7989 20 18.163 20 17.5ZM11.875 8.75H13.125C13.2908 8.75 13.4497 8.81585 13.5669 8.93306C13.6842 9.05027 13.75 9.20924 13.75 9.375V10.625C13.75 10.7908 13.6842 10.9497 13.5669 11.0669C13.4497 11.1842 13.2908 11.25 13.125 11.25H11.875C11.7092 11.25 11.5503 11.1842 11.4331 11.0669C11.3158 10.9497 11.25 10.7908 11.25 10.625V9.375C11.25 9.20924 11.3158 9.05027 11.4331 8.93306C11.5503 8.81585 11.7092 8.75 11.875 8.75ZM15.625 8.75H16.875C17.0408 8.75 17.1997 8.81585 17.3169 8.93306C17.4342 9.05027 17.5 9.20924 17.5 9.375V10.625C17.5 10.7908 17.4342 10.9497 17.3169 11.0669C17.1997 11.1842 17.0408 11.25 16.875 11.25H15.625C15.4592 11.25 15.3003 11.1842 15.1831 11.0669C15.0658 10.9497 15 10.7908 15 10.625V9.375C15 9.20924 15.0658 9.05027 15.1831 8.93306C15.3003 8.81585 15.4592 8.75 15.625 8.75ZM2.5 13.125C2.5 12.9592 2.56585 12.8003 2.68306 12.6831C2.80027 12.5658 2.95924 12.5 3.125 12.5H4.375C4.54076 12.5 4.69973 12.5658 4.81694 12.6831C4.93415 12.8003 5 12.9592 5 13.125V14.375C5 14.5408 4.93415 14.6997 4.81694 14.8169C4.69973 14.9342 4.54076 15 4.375 15H3.125C2.95924 15 2.80027 14.9342 2.68306 14.8169C2.56585 14.6997 2.5 14.5408 2.5 14.375V13.125ZM6.875 12.5H8.125C8.29076 12.5 8.44973 12.5658 8.56694 12.6831C8.68415 12.8003 8.75 12.9592 8.75 13.125V14.375C8.75 14.5408 8.68415 14.6997 8.56694 14.8169C8.44973 14.9342 8.29076 15 8.125 15H6.875C6.70924 15 6.55027 14.9342 6.43306 14.8169C6.31585 14.6997 6.25 14.5408 6.25 14.375V13.125C6.25 12.9592 6.31585 12.8003 6.43306 12.6831C6.55027 12.5658 6.70924 12.5 6.875 12.5Z" fill="white" /></svg>
                      <p>Запись по договоренности</p>
                    </li>
                  </ul>

                  <button className={styles.button + ' ' + styles.button_adressForm}>Записаться на сеанс</button>
                </li>
                <li className={styles.adressLists__adressDescription}>
                  <p className={styles.adressDescriptionTitle}>Бассейн "На Гороховой"</p>
                  <ul className={styles.adressDescriptionList}>
                    <li className={styles.adressDescriptionList__adress}>
                      <svg width="20" height="18" viewBox="0 0 14 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.00001 0.25C5.1773 0.25215 3.42987 0.977169 2.14102 2.26602C0.852176 3.55486 0.127158 5.3023 0.125007 7.125C0.122824 8.61452 0.60937 10.0636 1.51001 11.25C1.51001 11.25 1.69751 11.4969 1.72813 11.5325L7.00001 17.75L12.2744 11.5294C12.3019 11.4963 12.49 11.25 12.49 11.25L12.4906 11.2481C13.3908 10.0623 13.8771 8.61383 13.875 7.125C13.8729 5.3023 13.1478 3.55486 11.859 2.26602C10.5701 0.977169 8.82271 0.25215 7.00001 0.25ZM7.00001 9.625C6.50555 9.625 6.02221 9.47838 5.61108 9.20367C5.19996 8.92897 4.87953 8.53852 4.69031 8.08171C4.50109 7.62489 4.45158 7.12223 4.54804 6.63727C4.64451 6.15232 4.88261 5.70686 5.23224 5.35723C5.58187 5.0076 6.02733 4.7695 6.51228 4.67304C6.99723 4.57657 7.4999 4.62608 7.95672 4.8153C8.41353 5.00452 8.80398 5.32495 9.07868 5.73607C9.35338 6.1472 9.50001 6.63055 9.50001 7.125C9.49918 7.78779 9.23552 8.42319 8.76686 8.89185C8.2982 9.36052 7.6628 9.62417 7.00001 9.625Z" fill="white" /></svg>
                      <p>3-й проезд Иванова</p>
                    </li>
                    <li className={styles.adressDescriptionList__adress}>
                      <svg width="20" height="16" viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6.02683 3.36707C5.72703 2.3514 4.91324 2.46272 4.35683 2.93577C2.9862 4.20185 1.20154 6.85927 2.34374 10.6858C3.30031 13.9275 7.28064 16.0006 7.28064 16.0006H2.64064C2.64064 16.0006 0.244811 13.3154 0.0306387 10.1571C-0.240621 6.16409 1.35857 3.64578 3.21463 2.00409C4.95645 0.459726 6.61263 0.000610352 6.61263 0.000610352L10.0005 11.1006L13.3883 0.000610352C13.3883 0.000610352 15.0445 0.459727 16.7863 2.00409C18.6424 3.64578 20.2415 6.16409 19.9703 10.1571C19.7561 13.3154 17.3603 16.0006 17.3603 16.0006H12.7203C12.7203 16.0006 16.7003 13.9275 17.6572 10.6858C18.7994 6.85971 17.0147 4.20228 15.6441 2.93577C15.0873 2.46272 14.2735 2.3514 13.9741 3.36707C12.9461 6.60882 10.0009 15.8971 10.0009 15.8971C10.0009 15.8971 7.05564 6.60571 6.02767 3.36707H6.02683Z" fill="white" /></svg>
                      <p>м. Крестовский остров</p>
                    </li>
                    <li className={styles.adressDescriptionList__adress}>
                      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5 0.625C5 0.45924 4.93415 0.300269 4.81694 0.183058C4.69973 0.065848 4.54076 0 4.375 0C4.20924 0 4.05027 0.065848 3.93306 0.183058C3.81585 0.300269 3.75 0.45924 3.75 0.625V1.25H2.5C1.83696 1.25 1.20107 1.51339 0.732233 1.98223C0.263392 2.45107 0 3.08696 0 3.75L0 5H20V3.75C20 3.08696 19.7366 2.45107 19.2678 1.98223C18.7989 1.51339 18.163 1.25 17.5 1.25H16.25V0.625C16.25 0.45924 16.1842 0.300269 16.0669 0.183058C15.9497 0.065848 15.7908 0 15.625 0C15.4592 0 15.3003 0.065848 15.1831 0.183058C15.0658 0.300269 15 0.45924 15 0.625V1.25H5V0.625ZM20 17.5V6.25H0V17.5C0 18.163 0.263392 18.7989 0.732233 19.2678C1.20107 19.7366 1.83696 20 2.5 20H17.5C18.163 20 18.7989 19.7366 19.2678 19.2678C19.7366 18.7989 20 18.163 20 17.5ZM11.875 8.75H13.125C13.2908 8.75 13.4497 8.81585 13.5669 8.93306C13.6842 9.05027 13.75 9.20924 13.75 9.375V10.625C13.75 10.7908 13.6842 10.9497 13.5669 11.0669C13.4497 11.1842 13.2908 11.25 13.125 11.25H11.875C11.7092 11.25 11.5503 11.1842 11.4331 11.0669C11.3158 10.9497 11.25 10.7908 11.25 10.625V9.375C11.25 9.20924 11.3158 9.05027 11.4331 8.93306C11.5503 8.81585 11.7092 8.75 11.875 8.75ZM15.625 8.75H16.875C17.0408 8.75 17.1997 8.81585 17.3169 8.93306C17.4342 9.05027 17.5 9.20924 17.5 9.375V10.625C17.5 10.7908 17.4342 10.9497 17.3169 11.0669C17.1997 11.1842 17.0408 11.25 16.875 11.25H15.625C15.4592 11.25 15.3003 11.1842 15.1831 11.0669C15.0658 10.9497 15 10.7908 15 10.625V9.375C15 9.20924 15.0658 9.05027 15.1831 8.93306C15.3003 8.81585 15.4592 8.75 15.625 8.75ZM2.5 13.125C2.5 12.9592 2.56585 12.8003 2.68306 12.6831C2.80027 12.5658 2.95924 12.5 3.125 12.5H4.375C4.54076 12.5 4.69973 12.5658 4.81694 12.6831C4.93415 12.8003 5 12.9592 5 13.125V14.375C5 14.5408 4.93415 14.6997 4.81694 14.8169C4.69973 14.9342 4.54076 15 4.375 15H3.125C2.95924 15 2.80027 14.9342 2.68306 14.8169C2.56585 14.6997 2.5 14.5408 2.5 14.375V13.125ZM6.875 12.5H8.125C8.29076 12.5 8.44973 12.5658 8.56694 12.6831C8.68415 12.8003 8.75 12.9592 8.75 13.125V14.375C8.75 14.5408 8.68415 14.6997 8.56694 14.8169C8.44973 14.9342 8.29076 15 8.125 15H6.875C6.70924 15 6.55027 14.9342 6.43306 14.8169C6.31585 14.6997 6.25 14.5408 6.25 14.375V13.125C6.25 12.9592 6.31585 12.8003 6.43306 12.6831C6.55027 12.5658 6.70924 12.5 6.875 12.5Z" fill="white" /></svg>
                      <p>Запись по договоренности</p>
                    </li>
                  </ul>
                  <button className={styles.button + ' ' + styles.button_adressForm}>Записаться на сеанс</button>
                </li>
              </ul>
            </section>
          </section>
        </div>
      </main>

    </>
  );
}
