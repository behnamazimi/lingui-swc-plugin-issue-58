import { t } from "@lingui/macro";

const EXAMPLE = t`Dummy`;

const HomaPage = () => {
  return (
    <div>
      <h1>Home Page</h1>
      <div>Translated: {EXAMPLE}</div>
    </div>
  );
}

export default HomaPage;