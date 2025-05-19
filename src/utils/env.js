/**
 * Environment configuration utility
 * Provides type-safe access to environment variables
 */

export const env = {
  // API Configuration
  apiUrl: import.meta.env.VITE_API_URL,
  
  // Feature Flags
  enableAnalytics: import.meta.env.VITE_ENABLE_ANALYTICS === 'true',
  
  // App Configuration
  appName: import.meta.env.VITE_APP_NAME,
  appVersion: import.meta.env.VITE_APP_VERSION,
  
  // Debug Mode
  isDebug: import.meta.env.VITE_DEBUG === 'true',
  
  // Environment
  isDevelopment: import.meta.env.DEV,
  isProduction: import.meta.env.PROD,
};

// Validate required environment variables
const requiredEnvVars = ['VITE_API_URL', 'VITE_APP_NAME'];
requiredEnvVars.forEach(varName => {
  if (!import.meta.env[varName]) {
    console.error(`Missing required environment variable: ${varName}`);
  }
}); 