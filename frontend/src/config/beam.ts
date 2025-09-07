export const BEAM_CONFIG = {
  WS_URL: import.meta.env.VITE_BEAM_WS_URL || 'ws://localhost:3001',
  TOKEN: import.meta.env.VITE_BEAM_TOKEN || 'default-token',
} as const;