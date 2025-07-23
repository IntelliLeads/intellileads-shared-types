// Validators for IntelliLeads

import { VALIDATION } from '../constants';

/**
 * Validates user input
 */
export const validateUser = (user: {
  email: string;
  name: string;
  password?: string;
}): { isValid: boolean; errors: string[] } => {
  const errors: string[] = [];

  if (!user.email || !VALIDATION.EMAIL_REGEX.test(user.email)) {
    errors.push('Invalid email format');
  }

  if (!user.name || user.name.length < VALIDATION.NAME_MIN_LENGTH) {
    errors.push(`Name must be at least ${VALIDATION.NAME_MIN_LENGTH} characters`);
  }

  if (user.name && user.name.length > VALIDATION.NAME_MAX_LENGTH) {
    errors.push(`Name must be less than ${VALIDATION.NAME_MAX_LENGTH} characters`);
  }

  if (user.password && !(user.password.length >= VALIDATION.PASSWORD_MIN_LENGTH && user.password.length <= VALIDATION.PASSWORD_MAX_LENGTH)) {
    errors.push(
      `Password must be between ${VALIDATION.PASSWORD_MIN_LENGTH} and ${VALIDATION.PASSWORD_MAX_LENGTH} characters`
    );
  }

  return {
    isValid: errors.length === 0,
    errors,
  };
};

/**
 * Validates client input
 */
export const validateClient = (client: {
  name: string;
  email: string;
  phone?: string;
}): { isValid: boolean; errors: string[] } => {
  const errors: string[] = [];

  if (!client.name || client.name.length < VALIDATION.NAME_MIN_LENGTH) {
    errors.push(`Name must be at least ${VALIDATION.NAME_MIN_LENGTH} characters`);
  }

  if (!client.email || !VALIDATION.EMAIL_REGEX.test(client.email)) {
    errors.push('Invalid email format');
  }

  if (client.phone && !VALIDATION.PHONE_REGEX.test(client.phone)) {
    errors.push('Invalid phone number format');
  }

  return {
    isValid: errors.length === 0,
    errors,
  };
};

/**
 * Validates sale input
 */
export const validateSale = (sale: {
  title: string;
  value: number;
  probability: number;
}): { isValid: boolean; errors: string[] } => {
  const errors: string[] = [];

  if (!sale.title || sale.title.length < 3) {
    errors.push('Sale title must be at least 3 characters');
  }

  if (sale.value < 0) {
    errors.push('Sale value cannot be negative');
  }

  if (sale.probability < 0 || sale.probability > 100) {
    errors.push('Probability must be between 0 and 100');
  }

  return {
    isValid: errors.length === 0,
    errors,
  };
};

/**
 * Validates task input
 */
export const validateTask = (task: {
  title: string;
  dueDate?: Date;
}): { isValid: boolean; errors: string[] } => {
  const errors: string[] = [];

  if (!task.title || task.title.length < 3) {
    errors.push('Task title must be at least 3 characters');
  }

  if (task.dueDate && task.dueDate < new Date()) {
    errors.push('Due date cannot be in the past');
  }

  return {
    isValid: errors.length === 0,
    errors,
  };
};

/**
 * Validates password strength (re-exported from utils)
 */
export { isValidPassword } from '../utils';

/**
 * Validates email format (re-exported from utils)
 */
export { isValidEmail } from '../utils';

/**
 * Validates phone number format (re-exported from utils)
 */
export { isValidPhone } from '../utils';

/**
 * Validates pagination parameters
 */
export const validatePagination = (params: {
  page?: number;
  limit?: number;
}): { isValid: boolean; errors: string[] } => {
  const errors: string[] = [];

  if (params.page !== undefined && params.page < 1) {
    errors.push('Page must be greater than 0');
  }

  if (params.limit !== undefined && params.limit < 1) {
    errors.push('Limit must be greater than 0');
  }

  if (params.limit !== undefined && params.limit > 100) {
    errors.push('Limit cannot exceed 100');
  }

  return {
    isValid: errors.length === 0,
    errors,
  };
}; 