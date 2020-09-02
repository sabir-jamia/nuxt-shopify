<template>
  <div v-if="products">
    <p>Description: {{ products.edges[0].node.description }}</p>
    <p>Product Type: {{ products.edges[0].node.productType }}</p>
    <img
      :src="products.edges[0].node.images.edges[0].node.originalSrc"
      alt="image"
    />
  </div>
</template>
<script>
import gql from 'graphql-tag'

export default {
  apollo: {
    products: gql`
      query {
        products(first: 1) {
          edges {
            node {
              id
              description
              productType
              images(first: 1) {
                edges {
                  node {
                    id
                    originalSrc
                  }
                }
              }
            }
          }
        }
      }
    `,
  },
}
</script>
