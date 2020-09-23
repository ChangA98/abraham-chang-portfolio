import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout';
import { sectionsGenerator } from '../utils';

const IndexPage = ({ data }) => {
  const sectionsData = data?.allDatoCmsLandingPage?.edges[0]?.node?.sections;

  console.log('sectionsData', sectionsData)

  const sectionsComponents = sectionsGenerator(sectionsData);

  return (
    <Layout>
      {sectionsComponents}
    </Layout>
  )
}

export default IndexPage;

export const query = graphql`
  query IndexQuery {
    allDatoCmsLandingPage {
      edges {
        node {
          sections {
            ... on DatoCmsAbout {
              id
              name
              location
              phone
              email
              description
            }
            ... on DatoCmsExperience {
              id
              company
              title
              employmentType
              location
              startDate
              endDate
              description
            }
            ... on DatoCmsEducation {
              id
              school
              startDate
              endDate
              fieldOfStudy
              degree
              description
            }
            ... on DatoCmsProject {
              id
              title
              description
              images {
                url
                title
              }
            }
            ... on DatoCmsIntro {
              id
              title
              excerpt
              bgImage {
                url
                title
              }
            }
          }
        }
      }
    }
  }
`;
