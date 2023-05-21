
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['api.lorem.space', 'cdn.pixabay.com', 'placeimg.com', 'www.libreriahuequito.com', 'thumbs.dreamstime.com', 'picsum.photos', 'images.pexels.com','th.bing.com', 'api.escuelajs.co'],
  },
};

const withPWA = require('next-pwa')({
  dest: 'public',
  mode: 'production',
  disable: process.env.NODE_ENV === 'development',
  register: true,
});

module.exports = withPWA(nextConfig);