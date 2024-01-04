/** @type {import('next').NextConfig} */

// My nextjs component is rendering twice..In short, this issue is due to React 18 Strict Mode.

const nextConfig = {
  reactStrictMode: false
}

module.exports = nextConfig
