import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout.js";
import blogPostStyles from "./blog.module.css";
export default function Template({
    data,
}) {
    const { markdownRemark } = data;
    const { frontmatter, html } = markdownRemark;
    return (
        <Layout>
          <div className={blogPostStyles.blogPostContainer}>
            <div className={blogPostStyles.blogPost}>
              <h1>{frontmatter.title}</h1>
              <h4>{frontmatter.date}</h4>
              <div className={blogPostStyles.blogPostContent} dangerouslySetInnerHTML={{__html: html}} />
            </div>
          </div>
        </Layout>
    );
}

export const pageQuery = graphql`
query($path: String!) {
markdownRemark(frontmatter: {path: {eq: $path}}) {
html
frontmatter {
date(formatString: "MMMM DD, YYYY")
path
title
}
}
}
`;
