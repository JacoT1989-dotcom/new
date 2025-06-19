import type { Adapter, DatabaseSession, DatabaseUser } from "lucia";
import { PrismaClient } from "@prisma/client";

/**
 * Custom Prisma adapter for Lucia authentication
 */
export class CustomPrismaAdapter implements Adapter {
  private prisma: PrismaClient;

  constructor(prisma: PrismaClient) {
    this.prisma = prisma;
  }

  /**
   * Get user by ID
   */
  async getUser(userId: string): Promise<DatabaseUser | null> {
    const user = await this.prisma.user.findUnique({
      where: {
        id: userId
      }
    });
    if (!user) return null;
    
    // Include the required attributes property
    return {
      id: user.id,
      attributes: {
        email: user.email,
        firstName: user.firstName,
        lastName: user.lastName,
        role: user.role
      }
    };
  }

  /**
   * Get session by ID
   */
  async getSession(sessionId: string): Promise<DatabaseSession | null> {
    const session = await this.prisma.session.findUnique({
      where: {
        id: sessionId
      }
    });
    if (!session) return null;
    return {
      id: session.id,
      userId: session.userId,
      expiresAt: session.expiresAt,
      attributes: {} // Empty attributes as required by DatabaseSession
    };
  }

  /**
   * Get session and user in a single call (required by Adapter interface)
   */
  async getSessionAndUser(sessionId: string): Promise<[DatabaseSession | null, DatabaseUser | null]> {
    const session = await this.prisma.session.findUnique({
      where: {
        id: sessionId
      },
      include: {
        user: true
      }
    });
    
    if (!session) return [null, null];
    if (!session.user) return [
      {
        id: session.id,
        userId: session.userId,
        expiresAt: session.expiresAt,
        attributes: {}
      }, 
      null
    ];
    
    return [
      {
        id: session.id,
        userId: session.userId,
        expiresAt: session.expiresAt,
        attributes: {}
      },
      {
        id: session.user.id,
        attributes: {
          email: session.user.email,
          firstName: session.user.firstName,
          lastName: session.user.lastName,
          role: session.user.role
        }
      }
    ];
  }

  /**
   * Get sessions by user ID
   */
  async getUserSessions(userId: string): Promise<DatabaseSession[]> {
    const sessions = await this.prisma.session.findMany({
      where: {
        userId
      }
    });
    return sessions.map(session => ({
      id: session.id,
      userId: session.userId,
      expiresAt: session.expiresAt,
      attributes: {} // Empty attributes as required by DatabaseSession
    }));
  }

  /**
   * Update session expiration (required by Adapter interface)
   */
  async updateSessionExpiration(sessionId: string, expiresAt: Date): Promise<void> {
    await this.prisma.session.update({
      where: {
        id: sessionId
      },
      data: {
        expiresAt
      }
    });
  }

  /**
   * Set up a new session
   */
  async setSession(session: DatabaseSession): Promise<void> {
    await this.prisma.session.create({
      data: {
        id: session.id,
        userId: session.userId,
        expiresAt: session.expiresAt
      }
    });
  }

  /**
   * Delete a session
   */
  async deleteSession(sessionId: string): Promise<void> {
    await this.prisma.session.delete({
      where: {
        id: sessionId
      }
    });
  }

  /**
   * Delete all sessions for a user
   */
  async deleteUserSessions(userId: string): Promise<void> {
    await this.prisma.session.deleteMany({
      where: {
        userId
      }
    });
  }

  /**
   * Delete expired sessions
   */
  async deleteExpiredSessions(): Promise<void> {
    await this.prisma.session.deleteMany({
      where: {
        expiresAt: {
          lt: new Date()
        }
      }
    });
  }
}
