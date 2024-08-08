import type { GatsbyConfig } from "gatsby";

const config: GatsbyConfig = {
  siteMetadata: {
    title: `Mais Sabor - Alimentação`,
    description: "Transforme o dia a dia dos seus colaboradores com refeições saudáveis, saborosas e balanceadas.",
    image: `/icon.png`,
    siteUrl: `https://maissaborrefeicoes.com.br`
  },
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  plugins: ["gatsby-plugin-postcss",
    //  "gatsby-plugin-google-gtag"
  ]
};

export default config;
