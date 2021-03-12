import "@babel/polyfill";
import React from "react";
import { ApolloProvider } from "@apollo/react-hooks";
import { render } from "react-dom";
import { createGlobalStyle, ThemeProvider } from "styled-components";

import graphqlClient from "#root/api/graphqlClient"
import Root from "#root/components/Root";

import * as theme from "./theme";
import { graphql } from "graphql";

const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');

    html, body #app {
        height: 100%;
        margin: 0;
        padding: 0;
        width: 100%;
    }

    body {
        font-family: Roboto, san-serif;
    }
`;

render(
    <ApolloProvider client={graphqlClient}>
        <ThemeProvider theme={theme}>
            <GlobalStyle />
            <Root />
        </ThemeProvider>
    </ApolloProvider>, 
    document.getElementById("app")
);