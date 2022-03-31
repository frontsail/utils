import _getBearerToken from './http/getBearerToken'
import _slugify from './string/slugify'
import _random from './string/random'

export namespace FrontSailUtils {
  export namespace Http {
    export const getBearerToken = _getBearerToken
  }

  export namespace String {
    export const slugify = _slugify
    export const random = _random
  }
}
