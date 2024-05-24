/** @type {import('next').NextConfig} */
import nextPWA from "@ducanh2912/next-pwa";

const withPWA = nextPWA({
  dest: "public",
  // disable: process.env.NODE_ENV === "development",
  // register: true,
  // scope: "/app",
  // sw: "service-worker.js",
  // ...
});

export default withPWA({
  // Your Next.js config
});