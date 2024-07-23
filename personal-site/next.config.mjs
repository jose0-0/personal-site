import WithBundleAnalyser from "@next/bundle-analyzer"

/** @type {import('next').NextConfig} */
const nextConfig = {
    // distDir: 'dist',
    output: 'standalone'
};

const withBundleAnalyser = WithBundleAnalyser({
    enabled: process.env.ANALYZE === 'false',

})

export default nextConfig;

// export default withBundleAnalyser({
//     ...nextConfig
// });