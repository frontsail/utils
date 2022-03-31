import _getBearerToken from './http/getBearerToken';
import _slugify from './string/slugify';
import _random from './string/random';
export declare namespace FrontSailUtils {
    namespace Http {
        const getBearerToken: typeof _getBearerToken;
    }
    namespace String {
        const slugify: typeof _slugify;
        const random: typeof _random;
    }
}
