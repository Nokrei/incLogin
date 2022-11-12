import { useContext } from "react";
import Image from "next/image";
import AuthContext from "../../context/AuthContext";
import styles from "./Header.module.css";

export default function Header() {
  const { user, logout } = useContext(AuthContext);
  return (
    <div className={styles.header}>
      <Image
        src="/60a7804841e66cc8d15484d3_logo.svg"
        width={80}
        height={20}
        alt="Incard logo"
      />
      {user && (
        <button onClick={() => logout()} className="btn btn-primary">
          Log out
        </button>
      )}
    </div>
  );
}
