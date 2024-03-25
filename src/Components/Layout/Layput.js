import Header from "./Header";
import Footer from "./Footer";
import { Helmet } from "react-helmet";
import { Toaster } from "react-hot-toast";
import "react-toastify/dist/ReactToastify.css";
export default function Layput({
  children,
  title,
  description,
  keyword,
  author,
}) {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <meta charSet="UTF-8" />
        <meta name="description" content={description} />
        <meta name="keywords" content={keyword} />
        <meta name="author" content={author} />
        <title>{title}</title>
      </Helmet>

      <Header />
      <main style={{ minHeight: "69.5vh" }}>
        <Toaster />
        {children}
      </main>
      <Footer />
    </>
  );
}

Layput.defaultProps = {
  title: "Ecom-App",
  description: "mern stack",
  keyword: "mern,react,node,mongodb",
  author: "prince",
};
