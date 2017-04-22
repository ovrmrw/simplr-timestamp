export interface AppState {
  timestamp: TimestampState;
}

export interface TimestampState {
  local: number;
  server: number;
  timelag: number;
}
