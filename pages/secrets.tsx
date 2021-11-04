import type { NextPage } from "next";
import { useEffect, useState } from "react";
import { PageWrapper } from "../components/PageWrapper";
import { Secret } from "../types";

const Secrets: NextPage = () => {
  const [secrets, setSecrets] = useState<Secret[]>([]);

  useEffect(() => {
    fetch("/api/secrets")
      .then((response) => response.json())
      .then(setSecrets);
  }, []);

  return (
    <PageWrapper style={{ backgroundColor: "red", color: "beige" }}>
      <h1>Secrets!!! 😱</h1>

      <p>This site should only be visible for signed in users.</p>
      <p>Have you signed in? 😡</p>

      <div style={{ padding: "16px" }}>
        {secrets.map((secret, index) => (
          <p style={{ paddingBottom: "16px" }} key={index}>
            {secret.message}
          </p>
        ))}
      </div>
    </PageWrapper>
  );
};

export default Secrets;
