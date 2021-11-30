import React from "react";

import "./style.scss";

import "antd/dist/antd.css";
import { Layout } from "antd";
import SiderDefault from "../SiderDefault";

const { Content, Footer } = Layout;

export default function DefaultLayout(props) {
  const { children } = props;

  return (
    <>
      <Layout>
        <SiderDefault />
        <Layout className="site-layout" style={{ marginLeft: 200 }}>
          <Content style={{ margin: "24px 16px 0", overflow: "initial" }}>
            {children}
          </Content>
          <Footer style={{ textAlign: "center" }}>
            Ant Design ©2018 Created by Ant UED
          </Footer>
        </Layout>
      </Layout>
    </>
  );
}
