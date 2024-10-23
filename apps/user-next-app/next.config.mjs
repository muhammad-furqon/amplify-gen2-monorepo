import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const nextConfig = {
  webpack: (config) => {
    config.resolve.alias['@'] = path.resolve(__dirname);
    config.resolve.alias['@/data-schema'] = path.resolve(__dirname, 'packages/my-shared-backend/amplify/data/resource');
    return config;
  },
};

export default nextConfig;