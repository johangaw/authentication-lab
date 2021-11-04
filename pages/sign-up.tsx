import type { NextPage } from "next";
import { useRouter } from "next/router";
import { FormEventHandler } from "react";
import { PageWrapper } from "../components/PageWrapper";
import { Secret } from "../types";

const SignUp: NextPage = () => {
  const router = useRouter();

  const onSignUp: FormEventHandler<HTMLFormElement> = (ev) => {
    ev.preventDefault();

    const form = ev.currentTarget;

    fetch("/api/auth/sign-up", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: form.email.value,
        password: form.password.value,
        passwordAgain: form.passwordAgain.value,
      }),
    }).then(() => {
      router.push("/");
    });
  };

  return (
    <PageWrapper style={{ backgroundColor: "lightgreen" }}>
      <h1>Sign up 😎</h1>

      <p>Create a user and get to know the good stuff 😉</p>

      <form onSubmit={onSignUp}>
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

        <div>
          <label>
            <p style={{ marginBottom: 0 }}>Password again:</p>
            <input type="password" name="passwordAgain" />
          </label>
        </div>

        <p>
          <button type="submit">Sign up</button>
        </p>
      </form>
    </PageWrapper>
  );
};

export default SignUp;
