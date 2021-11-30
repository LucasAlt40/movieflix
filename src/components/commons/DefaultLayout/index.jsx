import React from "react";

import "./style.scss";

import "antd/dist/antd.css";
import { Layout, PageHeader } from "antd";
import SiderDefault from "../SiderDefault";

const { Content, Footer } = Layout;

export default function DefaultLayout(props) {
  const { children } = props;

  return (
    <>
      <Layout>
        <SiderDefault />
        <Layout className="site-layout">
          <PageHeader
            className="site-page-header"
            title="MovieFlix"
            subTitle="Seu catálogo de filmes"
          />
          <Content
            className="content"
            style={{ margin: "24px 16px 0", overflow: "initial" }}
          >
            {children}
          </Content>
          <Footer style={{ textAlign: "center" }}>
            MovieFlix 2021, Created by{" "}
            <a
              href="http://github.com/LucasAlt40"
              target="_blank"
              rel="noopener noreferrer"
            >
              Lucas
            </a>
          </Footer>
        </Layout>
      </Layout>
    </>
  );
}
