import "./globals.scss";
import Header from "./Header";

export const metadata = {
  title: "Акватерапия RitmStyle",
  description: "Прототип сайта центра акватерапии",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className='pageBody'>

      <Header />

        {children}

        <footer className='FooterInnerPage'>
          <div className="container container_footer">
            <p>© 2018-2022 RitmStyle</p>
            <p>Сверстано TinyDreamcaster</p>
          </div>
        </footer>

      </body>
    </html>
  );
}
