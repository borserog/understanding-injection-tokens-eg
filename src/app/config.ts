import { InjectionToken } from "@angular/core"

export interface EnvironmentConfig {
  apiUrl: string;
  maxCacheSize: 100;
}

export const APP_ENV_CONFIG: EnvironmentConfig = {
  apiUrl: getEnvironmentUrl('dev'),
  maxCacheSize: 100
}

// Non-tree-shakeable dependency
// export const ENV_CONFIG_TOKEN = new InjectionToken<EnvironmentConfig>('ENV_CONFIG');

// Tree-shakeable dependency
export const ENV_CONFIG_TOKEN = new InjectionToken<EnvironmentConfig>('ENV_CONFIG', {
  providedIn: 'root',
  factory: () => APP_ENV_CONFIG
});


function getEnvironmentUrl(type: 'dev' | 'prod'): string {
  return type === 'dev' ? 'http://prod-env/api' : 'http://dev-env/api'
}