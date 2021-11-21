import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider, // Connect clint to this react app, React의 Context.provider
} from "@apollo/client";
import reportWebVitals from "./reportWebVitals";

const client = new ApolloClient({
  uri: "https://71z1g.sse.codesandbox.io", // Graphql server URL 입력
  cache: new InMemoryCache(), // cache를 위한 인스턴스, 쿼리 실행 후 결과를 캐싱한다.
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
