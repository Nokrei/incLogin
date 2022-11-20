import { useContext, useEffect } from "react";
import { useRouter } from "next/router";
import AuthContext from "../context/AuthContext";
import Layout from "../components/layout/Layout";

export default function HomePage() {
  const router = useRouter();
  const { user, loading } = useContext(AuthContext);

  useEffect(() => {
    if (!user && !loading) {
      router.push("/");
    }
  }, [user, router, loading]);

  return (
    <Layout>
      {user ? (
        <div>
          <h1>You are logged in.</h1>
        </div>
      ) : (
        <div>
          <h1>You need to be logged in to view this page.</h1>
        </div>
      )}
    </Layout>
  );
}
