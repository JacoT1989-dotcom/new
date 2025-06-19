import { PrismaClient } from '@prisma/client'

// PrismaClient is attached to the `global` object in development to prevent
// exhausting your database connection limit.
// Learn more: https://pris.ly/d/help/next-js-best-practices

// Define internal structure interface for patching
interface PrismaClientWithInternals extends PrismaClient {
  _engineConfig?: {
    enableTracing?: boolean;
    [key: string]: unknown;
  };
}

// Approach: Use PrismaClient normally, but patch its prototype after creation
// This bypasses TypeScript errors while fixing the runtime issue
const createPrismaClient = () => {
  const client = new PrismaClient({
    log: process.env.NODE_ENV === 'development' ? ['query', 'error', 'warn'] : ['error'],
  });

  // Monkey patch the client to add enableTracing at runtime
  // This avoids TypeScript errors while ensuring the field exists during runtime
  try {
    const clientWithInternals = client as PrismaClientWithInternals;
    
    // Apply the fix at multiple levels to ensure it works
    // 1. Try to add it to the instance's engine config
    if (!clientWithInternals._engineConfig) {
      clientWithInternals._engineConfig = {};
    }
    clientWithInternals._engineConfig.enableTracing = false;
    
    // 2. Also try to patch the prototype
    const proto = Object.getPrototypeOf(client) as PrismaClientWithInternals;
    if (proto && typeof proto === 'object') {
      if (!proto._engineConfig) {
        proto._engineConfig = {};
      }
      proto._engineConfig.enableTracing = false;
    }
  } catch {
    console.warn('Unable to patch Prisma client for enableTracing');
  }

  return client;
};

// Create the global instance
const globalForPrisma = global as unknown as { prisma: PrismaClient };
export const prisma = globalForPrisma.prisma || createPrismaClient();

// Save to global in development
if (process.env.NODE_ENV !== 'production') {
  globalForPrisma.prisma = prisma;
}
