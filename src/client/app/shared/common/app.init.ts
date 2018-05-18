import { KeycloakService } from 'keycloak-angular';

export function initializer(keycloak: KeycloakService): () => Promise<any> {
  return (): Promise<any> => {
    return new Promise(async (resolve, reject) => {
      try {
        await keycloak.init({
            config: {
                url: 'http://localhost:8000/auth',
                realm: 'master',
                clientId: 'tungsten'
            },
            initOptions: {
                onLoad: 'login-required',
                checkLoginIframe: false
            },
            bearerExcludedUrls: [
                '/assets'
            ],
  });
        resolve();
      } catch (error) {
        reject(error);
      }
    });
  };
}
