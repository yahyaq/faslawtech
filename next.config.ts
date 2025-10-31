import createNextIntlPlugin from 'next-intl/plugin';
import type { NextConfig } from 'next';

// 👇 Pass both routing and request file paths
const withNextIntl = createNextIntlPlugin({});

const nextConfig: NextConfig = {
  
};

export default withNextIntl(nextConfig);
