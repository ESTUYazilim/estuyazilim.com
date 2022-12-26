import * as React from "react";

import Header from "./semantics/Header";
import Section from "./semantics/Section";
import Article from "./semantics/Article";
import Layout from "./components/Layout";

export default function App() {
  return (
    <Layout>
      <>
        <Header />
        <Section />
        <Article />
      </>
    </Layout>
  );
}
