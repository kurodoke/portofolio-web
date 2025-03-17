/** @type {import('next').NextConfig} */
const nextConfig = {
    webpack: (config) => {
        config.module.rules.push({
            test: /\.svg$/,
            use: ["@svgr/webpack", "url-loader"],
        });

        return config;
    },
    reactStrictMode: true,

    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "samcnw0ebjxp2rx0.public.blob.vercel-storage.com",
                port: "",
                pathname: "/**",
            },
        ],
    },
};

export default nextConfig;
