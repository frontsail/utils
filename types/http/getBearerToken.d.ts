import express from 'express';
/**
 * Get the bearer token string from an `express` request.
 *
 * @param request The request object
 * @returns The bearer token string or `null` if none available
 */
export default function getBearerToken(request: express.Request): string | null;
