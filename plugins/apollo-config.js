export default (ctx) => {
  return {
    httpEndpoint: 'https://sabir-dev.myshopify.com/api/2020-07/graphql.json',
    httpLinkOptions: {
      headers: {
        'Content-Type': 'application/json',
        'X-Shopify-Storefront-Access-Token': process.env.SHOPIFY_STOREFRONT_KEY,
        Accept: 'application/json',
      },
    },
    persist: false,
  }
}
