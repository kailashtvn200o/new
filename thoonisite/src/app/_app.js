import "../../src/app/Styles/Header.module.css"
import "../../src/app/Styles/SubHeader.module.css"

const inter = Inter({ subsets: ['latin'] })

export default function App({ Component, pageProps }) {
 
  return (
    <>
      <style jsx global>{`
        html {
          font-family: ${inter.style.fontFamily};
        }
      `}</style>
      <Component {...pageProps} />
      
    </>
  );
}
