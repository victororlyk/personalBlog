import React from "react";
import { graphql } from "gatsby";

import Layout from "../components/Layout";

// variable slug will come as default
export const query = graphql`  
    query($slug: String){
        markdownRemark(fields:{slug:{eq:$slug}}){
            frontmatter {
                title
                date
            }
            html
        }
    }
`;
const Blog = ({ props: { data: { markdownRemark: { html, frontmatter: { title, date } } } } }) => (
	<Layout>
		<h1>{title}</h1>
		<p>{date}</p>
		<div dangerouslySetInnerHTML={ { __html: html } } />
	</Layout>
);

Blog.propTypes = {};

export default Blog;
