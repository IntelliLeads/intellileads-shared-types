// Core Types for IntelliLeads CRM

// User Management
export interface User {
  id: string;
  email: string;
  name: string;
  role: UserRole;
  organizationId: string;
  industry: Industry;
  isActive: boolean;
  lastLoginAt?: Date;
  createdAt: Date;
  updatedAt: Date;
}

export enum UserRole {
  SUPER_ADMIN = 'SUPER_ADMIN',
  ADMIN = 'ADMIN',
  MANAGER = 'MANAGER',
  SALES_REP = 'SALES_REP',
  VIEWER = 'VIEWER',
}

export enum Industry {
  SAAS = 'SAAS',
  CONSULTING = 'CONSULTING',
  RETAIL = 'RETAIL',
  HEALTHCARE = 'HEALTHCARE',
  REAL_ESTATE = 'REAL_ESTATE',
  MANUFACTURING = 'MANUFACTURING',
  EDUCATION = 'EDUCATION',
  FINANCIAL = 'FINANCIAL',
  MARKETING = 'MARKETING',
  LEGAL = 'LEGAL',
  OTHER = 'OTHER',
}

// Organization
export interface Organization {
  id: string;
  name: string;
  domain?: string;
  industry: Industry;
  plan: SubscriptionPlan;
  isActive: boolean;
  settings: OrganizationSettings;
  createdAt: Date;
  updatedAt: Date;
}

export enum SubscriptionPlan {
  FREE = 'FREE',
  PRO = 'PRO',
  ENTERPRISE = 'ENTERPRISE',
}

export interface OrganizationSettings {
  timezone: string;
  currency: string;
  language: string;
  aiCredits: number;
  maxUsers: number;
  maxClients: number;
}

// Client Management
export interface Client {
  id: string;
  name: string;
  email: string;
  phone?: string;
  company?: string;
  industry: Industry;
  status: ClientStatus;
  source: LeadSource;
  assignedTo?: string;
  tags: string[];
  notes?: string;
  organizationId: string;
  createdAt: Date;
  updatedAt: Date;
}

export enum ClientStatus {
  LEAD = 'LEAD',
  PROSPECT = 'PROSPECT',
  CUSTOMER = 'CUSTOMER',
  INACTIVE = 'INACTIVE',
  LOST = 'LOST',
}

export enum LeadSource {
  WEBSITE = 'WEBSITE',
  REFERRAL = 'REFERRAL',
  SOCIAL_MEDIA = 'SOCIAL_MEDIA',
  EMAIL_CAMPAIGN = 'EMAIL_CAMPAIGN',
  COLD_CALL = 'COLD_CALL',
  EVENT = 'EVENT',
  OTHER = 'OTHER',
}

// Sales Management
export interface Sale {
  id: string;
  clientId: string;
  assignedTo: string;
  title: string;
  description?: string;
  value: number;
  currency: string;
  status: SaleStatus;
  probability: number; // 0-100
  expectedCloseDate?: Date;
  actualCloseDate?: Date;
  organizationId: string;
  createdAt: Date;
  updatedAt: Date;
}

export enum SaleStatus {
  PROSPECTING = 'PROSPECTING',
  QUALIFICATION = 'QUALIFICATION',
  PROPOSAL = 'PROPOSAL',
  NEGOTIATION = 'NEGOTIATION',
  CLOSED_WON = 'CLOSED_WON',
  CLOSED_LOST = 'CLOSED_LOST',
}

// Task Management
export interface Task {
  id: string;
  title: string;
  description?: string;
  assignedTo: string;
  clientId?: string;
  saleId?: string;
  priority: TaskPriority;
  status: TaskStatus;
  dueDate?: Date;
  completedAt?: Date;
  organizationId: string;
  createdAt: Date;
  updatedAt: Date;
}

export enum TaskPriority {
  LOW = 'LOW',
  MEDIUM = 'MEDIUM',
  HIGH = 'HIGH',
  URGENT = 'URGENT',
}

export enum TaskStatus {
  TODO = 'TODO',
  IN_PROGRESS = 'IN_PROGRESS',
  REVIEW = 'REVIEW',
  COMPLETED = 'COMPLETED',
  CANCELLED = 'CANCELLED',
}

// AI Integration
export interface AIAnalysis {
  id: string;
  type: AIAnalysisType;
  input: Record<string, unknown>;
  output: Record<string, unknown>;
  confidence: number; // 0-100
  tokensUsed: number;
  cost: number;
  organizationId: string;
  createdAt: Date;
}

export enum AIAnalysisType {
  ONBOARDING_RECOMMENDATION = 'ONBOARDING_RECOMMENDATION',
  SALES_PREDICTION = 'SALES_PREDICTION',
  CLIENT_SEGMENTATION = 'CLIENT_SEGMENTATION',
  MESSAGE_GENERATION = 'MESSAGE_GENERATION',
  TASK_PRIORITIZATION = 'TASK_PRIORITIZATION',
  CHURN_PREDICTION = 'CHURN_PREDICTION',
}

// Common Types
export interface PaginationParams {
  page: number;
  limit: number;
  sortBy?: string;
  sortOrder?: 'asc' | 'desc';
}

export interface PaginatedResponse<T> {
  data: T[];
  pagination: {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
  };
}

export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
}

// Event Types
export interface BaseEvent {
  id: string;
  type: string;
  organizationId: string;
  userId?: string;
  timestamp: Date;
  metadata?: Record<string, unknown>;
}

export interface ClientEvent extends BaseEvent {
  type: 'client.created' | 'client.updated' | 'client.deleted';
  clientId: string;
}

export interface SaleEvent extends BaseEvent {
  type: 'sale.created' | 'sale.updated' | 'sale.closed';
  saleId: string;
}

export interface TaskEvent extends BaseEvent {
  type: 'task.created' | 'task.updated' | 'task.completed';
  taskId: string;
}

export type Event = ClientEvent | SaleEvent | TaskEvent; 