const gql = require('graphql-tag');

const item = require('../fragments/item');

module.exports = gql`
  query MENU_AND_TENANT($language: String!) {
    menu: catalogue(language: $language, path: "/") {
      subtree {
        edges {
          node {
            ...item
          }
        }
      }
    }

    tenant(language: $language) {
      name
      defaults {
        currency
        language
      }
    }
  }

  ${item}
`;
