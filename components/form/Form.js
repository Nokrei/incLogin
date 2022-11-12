import { useContext } from "react";
import { useForm } from "react-hook-form";
import AuthContext from "../../context/AuthContext";
import styles from "./Form.module.css";

export default function Form() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { login, error } = useContext(AuthContext);

  const submitForm = (user) => {
    login(user);
  };

  return (
    <form onSubmit={handleSubmit(submitForm)} className={styles.form}>
      <div className={styles.inputGroup}>
        <label htmlFor="username">Username</label>
        <input
          type="text"
          id="username"
          {...register("username", { required: true, maxLength: 20 })}
        />
        {errors.username && (
          <span className={styles.error}>Please input username</span>
        )}
      </div>
      <div className={styles.inputGroup}>
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          {...register("password", { required: true, maxLength: 16 })}
        />
        {errors.password && (
          <span className={styles.error}>Please input valid password</span>
        )}
      </div>
      <button type="submit" className="btn btn-primary">
        Log in
      </button>
    </form>
  );
}
