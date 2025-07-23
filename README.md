# @intellileads/shared-types

Shared types and utilities for IntelliLeads CRM microservices.

## Installation

```bash
npm install @intellileads/shared-types
```

## Usage

```typescript
import { User, Client, Sale, UserRole, ClientStatus } from '@intellileads/shared-types';

// Create a user
const user: User = {
  id: 'user-123',
  email: 'john@example.com',
  name: 'John Doe',
  role: UserRole.SALES_REP,
  organizationId: 'org-456',
  industry: Industry.SAAS,
  isActive: true,
  createdAt: new Date(),
  updatedAt: new Date()
};

// Create a client
const client: Client = {
  id: 'client-789',
  name: 'Acme Corp',
  email: 'contact@acme.com',
  status: ClientStatus.PROSPECT,
  source: LeadSource.WEBSITE,
  tags: ['hot-lead', 'enterprise'],
  organizationId: 'org-456',
  createdAt: new Date(),
  updatedAt: new Date()
};
```

## Structure

- **types/**: TypeScript type definitions for CRM entities
- **constants/**: Shared constants (configurations, messages, etc.)
- **utils/**: Utilities and helpers
- **validators/**: Data validators

## Main Types

- `User` - User management
- `Client` - Client management
- `Sale` - Sales management
- `Task` - Task management
- `Organization` - Organization configuration
- `AIAnalysis` - AI analysis

## Available Scripts

- `npm run build` - Compile TypeScript
- `npm run dev` - Compile in watch mode
- `npm test` - Run tests
- `npm run lint` - Check code with ESLint

## License

MIT 