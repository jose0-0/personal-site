import WithBundleAnalyser from "@next/bundle-analyzer"

/** @type {import('next').NextConfig} */
const nextConfig = {};

const withBundleAnalyser = WithBundleAnalyser({
    enabled: process.env.ANALYZE === 'true',

})

export default withBundleAnalyser({
    ...nextConfig
});