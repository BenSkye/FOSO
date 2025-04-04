/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['mockapi.io'],
  },
  transpilePackages: ['@ant-design/plots'],
  modularizeImports: {
    '@ant-design/icons': {
      transform: '@ant-design/icons/lib/icons/${member}',
    },
  },
}

export default nextConfig 