import { AuthConfig } from 'angular-oauth2-oidc';
import { environment } from 'src/environments/environment';

  export const authConfig: AuthConfig = {
    issuer: environment.authorityUrl,
    redirectUri: environment.clientUrl + '/' + environment.callback,
    postLogoutRedirectUri: environment.clientUrl + '/' + environment.logoutCallback,
    clientId: environment.clientId,
    responseType: environment.response_type,
    scope: environment.scope,
    showDebugInformation: false,
    strictDiscoveryDocumentValidation: false,
    oidc: false,
    
  };