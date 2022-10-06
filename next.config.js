/** @type {import('next').NextConfig} */

const STUDIO_REWRITE = {
  source: "/nextytcourse/:path*",
  destination:
    process.env.NODE_ENV === "development"
      ? "http://localhost:3333/nextytcourse/:path*"
      : "/nextytcourse/index.html",
};

module.exports = {
  rewrites: () => [STUDIO_REWRITE],
  reactStrictMode: true,
};