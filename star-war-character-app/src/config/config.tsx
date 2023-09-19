let config = {
  appName: "Star-war-character App",
  siteUrl: "https://swapi.dev/api/",
  apiUrl: "https://swapi.dev/api/",
  imageUrl: "https://picsum.photos/",
  environment: "development",
};
const isProd = false;
const deploymentType = isProd ? "production" : "development";

if (deploymentType === "production") {
  config = {
    ...config,
    siteUrl: "https://swapi.dev/api/",
    apiUrl: "https://swapi.dev/api/",
    imageUrl: "https://picsum.photos/",
    environment: "production",
  };
} else if (deploymentType === "development") {
  config = {
    ...config,
    environment: "development",
  };
}
export default config;
