// Shared Constants for IntelliLeads

// API Configuration
export const API_CONFIG = {
  VERSION: 'v1',
  BASE_URL: 'http://localhost:3000', // Will be overridden by environment
  TIMEOUT: 30000, // 30 seconds
  RETRY_ATTEMPTS: 3,
} as const;

// Pagination
export const PAGINATION = {
  DEFAULT_PAGE: 1,
  DEFAULT_LIMIT: 20,
  MAX_LIMIT: 100,
} as const;

// Validation
export const VALIDATION = {
  EMAIL_REGEX: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
  PASSWORD_MIN_LENGTH: 8,
  PASSWORD_MAX_LENGTH: 128,
  NAME_MIN_LENGTH: 2,
  NAME_MAX_LENGTH: 100,
  PHONE_REGEX: /^\+?[\d\s\-()]+$/,
} as const;

// File Upload
export const FILE_UPLOAD = {
  MAX_SIZE: 10 * 1024 * 1024, // 10MB
  ALLOWED_TYPES: ['image/jpeg', 'image/png', 'image/gif', 'application/pdf'],
  MAX_FILES: 5,
} as const;

// AI Configuration
export const AI_CONFIG = {
  MAX_TOKENS: 4000,
  TEMPERATURE: 0.7,
  MAX_REQUESTS_PER_MINUTE: 60,
  COST_PER_1K_TOKENS: 0.002, // OpenAI GPT-4 pricing
} as const;

// Cache Configuration
export const CACHE = {
  TTL: {
    USER: 3600, // 1 hour
    CLIENT: 1800, // 30 minutes
    SALE: 1800, // 30 minutes
    TASK: 1800, // 30 minutes
    AI_ANALYSIS: 7200, // 2 hours
  },
  PREFIX: {
    USER: 'user:',
    CLIENT: 'client:',
    SALE: 'sale:',
    TASK: 'task:',
    AI: 'ai:',
  },
} as const;

// Error Messages
export const ERROR_MESSAGES = {
  UNAUTHORIZED: 'Unauthorized access',
  FORBIDDEN: 'Access forbidden',
  NOT_FOUND: 'Resource not found',
  VALIDATION_ERROR: 'Validation failed',
  INTERNAL_ERROR: 'Internal server error',
  RATE_LIMIT_EXCEEDED: 'Rate limit exceeded',
  INVALID_CREDENTIALS: 'Invalid credentials',
  USER_NOT_FOUND: 'User not found',
  CLIENT_NOT_FOUND: 'Client not found',
  SALE_NOT_FOUND: 'Sale not found',
  TASK_NOT_FOUND: 'Task not found',
  INSUFFICIENT_CREDITS: 'Insufficient AI credits',
} as const;

// Success Messages
export const SUCCESS_MESSAGES = {
  USER_CREATED: 'User created successfully',
  USER_UPDATED: 'User updated successfully',
  USER_DELETED: 'User deleted successfully',
  CLIENT_CREATED: 'Client created successfully',
  CLIENT_UPDATED: 'Client updated successfully',
  CLIENT_DELETED: 'Client deleted successfully',
  SALE_CREATED: 'Sale created successfully',
  SALE_UPDATED: 'Sale updated successfully',
  SALE_DELETED: 'Sale deleted successfully',
  TASK_CREATED: 'Task created successfully',
  TASK_UPDATED: 'Task updated successfully',
  TASK_DELETED: 'Task deleted successfully',
  AI_ANALYSIS_COMPLETED: 'AI analysis completed successfully',
} as const;

// Industry-specific configurations
export const INDUSTRY_CONFIG = {
  SAAS: {
    defaultCurrency: 'USD',
    salesCycle: 90, // days
    averageDealSize: 5000,
    churnRate: 0.05, // 5%
  },
  CONSULTING: {
    defaultCurrency: 'USD',
    salesCycle: 30, // days
    averageDealSize: 10000,
    churnRate: 0.02, // 2%
  },
  RETAIL: {
    defaultCurrency: 'USD',
    salesCycle: 7, // days
    averageDealSize: 100,
    churnRate: 0.15, // 15%
  },
  HEALTHCARE: {
    defaultCurrency: 'USD',
    salesCycle: 180, // days
    averageDealSize: 50000,
    churnRate: 0.01, // 1%
  },
  REAL_ESTATE: {
    defaultCurrency: 'USD',
    salesCycle: 120, // days
    averageDealSize: 250000,
    churnRate: 0.03, // 3%
  },
} as const;

// Subscription Plans
export const SUBSCRIPTION_PLANS = {
  FREE: {
    name: 'Free',
    price: 0,
    aiCredits: 50,
    maxUsers: 1,
    maxClients: 50,
    features: ['Basic CRM', 'AI Suggestions', 'Email Support'],
  },
  PRO: {
    name: 'Pro',
    price: 29,
    aiCredits: 500,
    maxUsers: 5,
    maxClients: 500,
    features: ['Advanced CRM', 'AI Analytics', 'Priority Support', 'Mobile App'],
  },
  ENTERPRISE: {
    name: 'Enterprise',
    price: 99,
    aiCredits: -1, // Unlimited
    maxUsers: -1, // Unlimited
    maxClients: -1, // Unlimited
    features: ['Full CRM Suite', 'Custom AI Models', 'Dedicated Support', 'API Access'],
  },
} as const;

// Time zones
export const TIMEZONES = [
  'UTC',
  'America/New_York',
  'America/Chicago',
  'America/Denver',
  'America/Los_Angeles',
  'Europe/London',
  'Europe/Paris',
  'Asia/Tokyo',
  'Asia/Shanghai',
  'Australia/Sydney',
] as const;

// Currencies
export const CURRENCIES = [
  'USD',
  'EUR',
  'GBP',
  'JPY',
  'CAD',
  'AUD',
  'CHF',
  'CNY',
  'MXN',
  'BRL',
] as const;

// Languages
export const LANGUAGES = [
  'en',
  'es',
  'fr',
  'de',
  'it',
  'pt',
  'ja',
  'zh',
  'ko',
  'ru',
] as const; 