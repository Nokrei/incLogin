import Head from "next/head";
import { useRouter } from "next/router";
import styles from "./Layout.module.css";
import Header from "../Header/Header";

export default function Layout({ title, description, children }) {
  const router = useRouter();
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
      </Head>
      <Header />
      <div className={styles.container}>{children}</div>
    </div>
  );
}

Layout.defaultProps = {
  title: "Incard",
  description: "Most awesome company ever",
};
