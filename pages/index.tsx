import type { NextPage } from "next";
import { useRouter } from "next/dist/client/router";
import { FormEventHandler } from "react";
import { PageWrapper } from "../components/PageWrapper";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  const router = useRouter();

  const onSignIn: FormEventHandler<HTMLFormElement> = (ev) => {
    ev.preventDefault();

    const form = ev.currentTarget;

    fetch("/api/auth/sign-in", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: form.email.value,
        password: form.password.value,
      }),
    }).then(() => {
      router.push("/secrets");
    });
  };

  return (
    <PageWrapper style={{ backgroundColor: "green" }}>
      <h1 className={styles.title}>Welcome to the public site</h1>

      <p>Please login to see the good stuff! ;)</p>

      <form onSubmit={onSignIn}>
        <div>
          <label>
            <p style={{ marginBottom: 0 }}>Email:</p>
            <input type="email" name="email" />
          </label>
        </div>

        <div>
          <label>
            <p style={{ marginBottom: 0 }}>Password:</p>
            <input type="password" name="password" />
          </label>
        </div>

        <p>
          <button type="submit">Sign in</button>
        </p>
      </form>
    </PageWrapper>
  );
};

export default Home;
