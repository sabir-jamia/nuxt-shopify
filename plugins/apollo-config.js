export default (ctx) => {
  return {
    httpEndpoint: 'https://sabir-dev.myshopify.com/api/2020-07/graphql.json',
    httpLinkOptions: {
      headers: {
        'Content-Type': 'application/json',
        'X-Shopify-Storefront-Access-Token': '565f483ed905f72172cc3a0bd8c5bd35',
        Accept: 'application/json',
      },
    },
    persist: false,
  }
}
