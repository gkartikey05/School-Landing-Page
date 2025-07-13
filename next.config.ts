import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  devIndicators: false,
  images: {
    domains: [
      "img.freepik.com",
      "w7.pngwing.com",
      "encrypted-tbn0.gstatic.com",
      "static.vecteezy.com",
      "tisbadlapur.edu.in",
      "assets.zigchat.com",
      "images.pexels.com",
      "blog.globalindianschool.org",
      "www.adityabirlaworldacademy.com",
      "www.jaipuriaschools.ac.in",
      "encrypted-tbn0.gstatic.com",
      "cdn.shopify.com",
      "media.self.com",
      "static.pib.gov.in",
      "www.csmssengg.org",
      "wbuhs.ac.in",
      "cdn.sanity.io",
      "www.usatoday.com",
      "pwsbackend.eighteenpixels.in",
    ], // Add allowed image domains here
  },
};

export default nextConfig;
