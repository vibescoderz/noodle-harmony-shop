import { describe, it, expect } from 'vitest';
import { orderSchema } from '@/schemas/order';

describe('Order Schema Validation', () => {
  it('should validate a correct order form', () => {
    const validData = {
      name: 'John Doe',
      email: 'john@example.com',
      phone: '+1 555 123 4567',
      address: '123 Main Street, Apt 4B, New York, NY 10001',
      notes: 'Please ring doorbell twice',
    };

    const result = orderSchema.safeParse(validData);
    expect(result.success).toBe(true);
  });

  it('should reject invalid email', () => {
    const invalidData = {
      name: 'John Doe',
      email: 'not-an-email',
      phone: '+1 555 123 4567',
      address: '123 Main Street, Apt 4B, New York, NY 10001',
    };

    const result = orderSchema.safeParse(invalidData);
    expect(result.success).toBe(false);
    if (!result.success) {
      expect(result.error.issues[0].path).toContain('email');
    }
  });

  it('should reject name too short', () => {
    const invalidData = {
      name: 'J',
      email: 'john@example.com',
      phone: '+1 555 123 4567',
      address: '123 Main Street, Apt 4B, New York, NY 10001',
    };

    const result = orderSchema.safeParse(invalidData);
    expect(result.success).toBe(false);
    if (!result.success) {
      expect(result.error.issues[0].path).toContain('name');
    }
  });

  it('should reject invalid phone number', () => {
    const invalidData = {
      name: 'John Doe',
      email: 'john@example.com',
      phone: '123',
      address: '123 Main Street, Apt 4B, New York, NY 10001',
    };

    const result = orderSchema.safeParse(invalidData);
    expect(result.success).toBe(false);
    if (!result.success) {
      expect(result.error.issues[0].path).toContain('phone');
    }
  });

  it('should reject address too short', () => {
    const invalidData = {
      name: 'John Doe',
      email: 'john@example.com',
      phone: '+1 555 123 4567',
      address: '123 Main',
    };

    const result = orderSchema.safeParse(invalidData);
    expect(result.success).toBe(false);
    if (!result.success) {
      expect(result.error.issues[0].path).toContain('address');
    }
  });

  it('should allow empty notes', () => {
    const validData = {
      name: 'John Doe',
      email: 'john@example.com',
      phone: '+1 555 123 4567',
      address: '123 Main Street, Apt 4B, New York, NY 10001',
    };

    const result = orderSchema.safeParse(validData);
    expect(result.success).toBe(true);
  });
});
