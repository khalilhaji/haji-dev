import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';
import profileImageStyles from './image.module.css';

const ProfileImage = () => {
	const data = useStaticQuery(graphql`
		query Image {
			placeholderImage: file(relativePath: { eq: "image.jpeg" }) {
				childImageSharp {
					fluid(maxWidth: 300) {
						...GatsbyImageSharpFluid
					}
				}
			}
		}
	`);
	return (
            <Img fluid={data.placeholderImage.childImageSharp.fluid} />

        );
};

export default ProfileImage;
