import Layout from "../components/layout/Layout";
import Form from "../components/form/Form";
import styles from "../styles/Login.module.css";

export default function Login() {
  return (
    <Layout>
      <div className={styles.home}>
        <h1>Welcome to Incard</h1>
        <Form />
      </div>
    </Layout>
  );
}
