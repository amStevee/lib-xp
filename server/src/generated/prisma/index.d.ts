
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Session
 * 
 */
export type Session = $Result.DefaultSelection<Prisma.$SessionPayload>
/**
 * Model Librarian
 * 
 */
export type Librarian = $Result.DefaultSelection<Prisma.$LibrarianPayload>
/**
 * Model Book
 * 
 */
export type Book = $Result.DefaultSelection<Prisma.$BookPayload>
/**
 * Model EmailVerificationToken
 * 
 */
export type EmailVerificationToken = $Result.DefaultSelection<Prisma.$EmailVerificationTokenPayload>
/**
 * Model Patron
 * 
 */
export type Patron = $Result.DefaultSelection<Prisma.$PatronPayload>
/**
 * Model Book_likes
 * 
 */
export type Book_likes = $Result.DefaultSelection<Prisma.$Book_likesPayload>
/**
 * Model Book_consulted
 * 
 */
export type Book_consulted = $Result.DefaultSelection<Prisma.$Book_consultedPayload>
/**
 * Model Circulation
 * 
 */
export type Circulation = $Result.DefaultSelection<Prisma.$CirculationPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const GMD: {
  Monograph: 'Monograph',
  Serial: 'Serial',
  Palmphlet: 'Palmphlet',
  Dictionary: 'Dictionary'
};

export type GMD = (typeof GMD)[keyof typeof GMD]

}

export type GMD = $Enums.GMD

export const GMD: typeof $Enums.GMD

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Sessions
 * const sessions = await prisma.session.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Sessions
   * const sessions = await prisma.session.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.session`: Exposes CRUD operations for the **Session** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Sessions
    * const sessions = await prisma.session.findMany()
    * ```
    */
  get session(): Prisma.SessionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.librarian`: Exposes CRUD operations for the **Librarian** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Librarians
    * const librarians = await prisma.librarian.findMany()
    * ```
    */
  get librarian(): Prisma.LibrarianDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.book`: Exposes CRUD operations for the **Book** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Books
    * const books = await prisma.book.findMany()
    * ```
    */
  get book(): Prisma.BookDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.emailVerificationToken`: Exposes CRUD operations for the **EmailVerificationToken** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more EmailVerificationTokens
    * const emailVerificationTokens = await prisma.emailVerificationToken.findMany()
    * ```
    */
  get emailVerificationToken(): Prisma.EmailVerificationTokenDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.patron`: Exposes CRUD operations for the **Patron** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Patrons
    * const patrons = await prisma.patron.findMany()
    * ```
    */
  get patron(): Prisma.PatronDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.book_likes`: Exposes CRUD operations for the **Book_likes** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Book_likes
    * const book_likes = await prisma.book_likes.findMany()
    * ```
    */
  get book_likes(): Prisma.Book_likesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.book_consulted`: Exposes CRUD operations for the **Book_consulted** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Book_consulteds
    * const book_consulteds = await prisma.book_consulted.findMany()
    * ```
    */
  get book_consulted(): Prisma.Book_consultedDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.circulation`: Exposes CRUD operations for the **Circulation** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Circulations
    * const circulations = await prisma.circulation.findMany()
    * ```
    */
  get circulation(): Prisma.CirculationDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.7.0
   * Query Engine version: 3cff47a7f5d65c3ea74883f1d736e41d68ce91ed
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Session: 'Session',
    Librarian: 'Librarian',
    Book: 'Book',
    EmailVerificationToken: 'EmailVerificationToken',
    Patron: 'Patron',
    Book_likes: 'Book_likes',
    Book_consulted: 'Book_consulted',
    Circulation: 'Circulation'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "session" | "librarian" | "book" | "emailVerificationToken" | "patron" | "book_likes" | "book_consulted" | "circulation"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Session: {
        payload: Prisma.$SessionPayload<ExtArgs>
        fields: Prisma.SessionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SessionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SessionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          findFirst: {
            args: Prisma.SessionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SessionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          findMany: {
            args: Prisma.SessionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>[]
          }
          create: {
            args: Prisma.SessionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          createMany: {
            args: Prisma.SessionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SessionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>[]
          }
          delete: {
            args: Prisma.SessionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          update: {
            args: Prisma.SessionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          deleteMany: {
            args: Prisma.SessionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SessionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SessionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>[]
          }
          upsert: {
            args: Prisma.SessionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          aggregate: {
            args: Prisma.SessionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSession>
          }
          groupBy: {
            args: Prisma.SessionGroupByArgs<ExtArgs>
            result: $Utils.Optional<SessionGroupByOutputType>[]
          }
          count: {
            args: Prisma.SessionCountArgs<ExtArgs>
            result: $Utils.Optional<SessionCountAggregateOutputType> | number
          }
        }
      }
      Librarian: {
        payload: Prisma.$LibrarianPayload<ExtArgs>
        fields: Prisma.LibrarianFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LibrarianFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LibrarianPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LibrarianFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LibrarianPayload>
          }
          findFirst: {
            args: Prisma.LibrarianFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LibrarianPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LibrarianFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LibrarianPayload>
          }
          findMany: {
            args: Prisma.LibrarianFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LibrarianPayload>[]
          }
          create: {
            args: Prisma.LibrarianCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LibrarianPayload>
          }
          createMany: {
            args: Prisma.LibrarianCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.LibrarianCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LibrarianPayload>[]
          }
          delete: {
            args: Prisma.LibrarianDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LibrarianPayload>
          }
          update: {
            args: Prisma.LibrarianUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LibrarianPayload>
          }
          deleteMany: {
            args: Prisma.LibrarianDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.LibrarianUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.LibrarianUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LibrarianPayload>[]
          }
          upsert: {
            args: Prisma.LibrarianUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LibrarianPayload>
          }
          aggregate: {
            args: Prisma.LibrarianAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLibrarian>
          }
          groupBy: {
            args: Prisma.LibrarianGroupByArgs<ExtArgs>
            result: $Utils.Optional<LibrarianGroupByOutputType>[]
          }
          count: {
            args: Prisma.LibrarianCountArgs<ExtArgs>
            result: $Utils.Optional<LibrarianCountAggregateOutputType> | number
          }
        }
      }
      Book: {
        payload: Prisma.$BookPayload<ExtArgs>
        fields: Prisma.BookFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BookFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BookFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookPayload>
          }
          findFirst: {
            args: Prisma.BookFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BookFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookPayload>
          }
          findMany: {
            args: Prisma.BookFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookPayload>[]
          }
          create: {
            args: Prisma.BookCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookPayload>
          }
          createMany: {
            args: Prisma.BookCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.BookCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookPayload>[]
          }
          delete: {
            args: Prisma.BookDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookPayload>
          }
          update: {
            args: Prisma.BookUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookPayload>
          }
          deleteMany: {
            args: Prisma.BookDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BookUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.BookUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookPayload>[]
          }
          upsert: {
            args: Prisma.BookUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookPayload>
          }
          aggregate: {
            args: Prisma.BookAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBook>
          }
          groupBy: {
            args: Prisma.BookGroupByArgs<ExtArgs>
            result: $Utils.Optional<BookGroupByOutputType>[]
          }
          count: {
            args: Prisma.BookCountArgs<ExtArgs>
            result: $Utils.Optional<BookCountAggregateOutputType> | number
          }
        }
      }
      EmailVerificationToken: {
        payload: Prisma.$EmailVerificationTokenPayload<ExtArgs>
        fields: Prisma.EmailVerificationTokenFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EmailVerificationTokenFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmailVerificationTokenPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EmailVerificationTokenFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmailVerificationTokenPayload>
          }
          findFirst: {
            args: Prisma.EmailVerificationTokenFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmailVerificationTokenPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EmailVerificationTokenFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmailVerificationTokenPayload>
          }
          findMany: {
            args: Prisma.EmailVerificationTokenFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmailVerificationTokenPayload>[]
          }
          create: {
            args: Prisma.EmailVerificationTokenCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmailVerificationTokenPayload>
          }
          createMany: {
            args: Prisma.EmailVerificationTokenCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.EmailVerificationTokenCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmailVerificationTokenPayload>[]
          }
          delete: {
            args: Prisma.EmailVerificationTokenDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmailVerificationTokenPayload>
          }
          update: {
            args: Prisma.EmailVerificationTokenUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmailVerificationTokenPayload>
          }
          deleteMany: {
            args: Prisma.EmailVerificationTokenDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EmailVerificationTokenUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.EmailVerificationTokenUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmailVerificationTokenPayload>[]
          }
          upsert: {
            args: Prisma.EmailVerificationTokenUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmailVerificationTokenPayload>
          }
          aggregate: {
            args: Prisma.EmailVerificationTokenAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEmailVerificationToken>
          }
          groupBy: {
            args: Prisma.EmailVerificationTokenGroupByArgs<ExtArgs>
            result: $Utils.Optional<EmailVerificationTokenGroupByOutputType>[]
          }
          count: {
            args: Prisma.EmailVerificationTokenCountArgs<ExtArgs>
            result: $Utils.Optional<EmailVerificationTokenCountAggregateOutputType> | number
          }
        }
      }
      Patron: {
        payload: Prisma.$PatronPayload<ExtArgs>
        fields: Prisma.PatronFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PatronFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatronPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PatronFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatronPayload>
          }
          findFirst: {
            args: Prisma.PatronFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatronPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PatronFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatronPayload>
          }
          findMany: {
            args: Prisma.PatronFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatronPayload>[]
          }
          create: {
            args: Prisma.PatronCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatronPayload>
          }
          createMany: {
            args: Prisma.PatronCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PatronCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatronPayload>[]
          }
          delete: {
            args: Prisma.PatronDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatronPayload>
          }
          update: {
            args: Prisma.PatronUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatronPayload>
          }
          deleteMany: {
            args: Prisma.PatronDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PatronUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PatronUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatronPayload>[]
          }
          upsert: {
            args: Prisma.PatronUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatronPayload>
          }
          aggregate: {
            args: Prisma.PatronAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePatron>
          }
          groupBy: {
            args: Prisma.PatronGroupByArgs<ExtArgs>
            result: $Utils.Optional<PatronGroupByOutputType>[]
          }
          count: {
            args: Prisma.PatronCountArgs<ExtArgs>
            result: $Utils.Optional<PatronCountAggregateOutputType> | number
          }
        }
      }
      Book_likes: {
        payload: Prisma.$Book_likesPayload<ExtArgs>
        fields: Prisma.Book_likesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.Book_likesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Book_likesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.Book_likesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Book_likesPayload>
          }
          findFirst: {
            args: Prisma.Book_likesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Book_likesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.Book_likesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Book_likesPayload>
          }
          findMany: {
            args: Prisma.Book_likesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Book_likesPayload>[]
          }
          create: {
            args: Prisma.Book_likesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Book_likesPayload>
          }
          createMany: {
            args: Prisma.Book_likesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.Book_likesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Book_likesPayload>[]
          }
          delete: {
            args: Prisma.Book_likesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Book_likesPayload>
          }
          update: {
            args: Prisma.Book_likesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Book_likesPayload>
          }
          deleteMany: {
            args: Prisma.Book_likesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.Book_likesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.Book_likesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Book_likesPayload>[]
          }
          upsert: {
            args: Prisma.Book_likesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Book_likesPayload>
          }
          aggregate: {
            args: Prisma.Book_likesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBook_likes>
          }
          groupBy: {
            args: Prisma.Book_likesGroupByArgs<ExtArgs>
            result: $Utils.Optional<Book_likesGroupByOutputType>[]
          }
          count: {
            args: Prisma.Book_likesCountArgs<ExtArgs>
            result: $Utils.Optional<Book_likesCountAggregateOutputType> | number
          }
        }
      }
      Book_consulted: {
        payload: Prisma.$Book_consultedPayload<ExtArgs>
        fields: Prisma.Book_consultedFieldRefs
        operations: {
          findUnique: {
            args: Prisma.Book_consultedFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Book_consultedPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.Book_consultedFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Book_consultedPayload>
          }
          findFirst: {
            args: Prisma.Book_consultedFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Book_consultedPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.Book_consultedFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Book_consultedPayload>
          }
          findMany: {
            args: Prisma.Book_consultedFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Book_consultedPayload>[]
          }
          create: {
            args: Prisma.Book_consultedCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Book_consultedPayload>
          }
          createMany: {
            args: Prisma.Book_consultedCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.Book_consultedCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Book_consultedPayload>[]
          }
          delete: {
            args: Prisma.Book_consultedDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Book_consultedPayload>
          }
          update: {
            args: Prisma.Book_consultedUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Book_consultedPayload>
          }
          deleteMany: {
            args: Prisma.Book_consultedDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.Book_consultedUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.Book_consultedUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Book_consultedPayload>[]
          }
          upsert: {
            args: Prisma.Book_consultedUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Book_consultedPayload>
          }
          aggregate: {
            args: Prisma.Book_consultedAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBook_consulted>
          }
          groupBy: {
            args: Prisma.Book_consultedGroupByArgs<ExtArgs>
            result: $Utils.Optional<Book_consultedGroupByOutputType>[]
          }
          count: {
            args: Prisma.Book_consultedCountArgs<ExtArgs>
            result: $Utils.Optional<Book_consultedCountAggregateOutputType> | number
          }
        }
      }
      Circulation: {
        payload: Prisma.$CirculationPayload<ExtArgs>
        fields: Prisma.CirculationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CirculationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CirculationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CirculationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CirculationPayload>
          }
          findFirst: {
            args: Prisma.CirculationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CirculationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CirculationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CirculationPayload>
          }
          findMany: {
            args: Prisma.CirculationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CirculationPayload>[]
          }
          create: {
            args: Prisma.CirculationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CirculationPayload>
          }
          createMany: {
            args: Prisma.CirculationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CirculationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CirculationPayload>[]
          }
          delete: {
            args: Prisma.CirculationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CirculationPayload>
          }
          update: {
            args: Prisma.CirculationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CirculationPayload>
          }
          deleteMany: {
            args: Prisma.CirculationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CirculationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CirculationUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CirculationPayload>[]
          }
          upsert: {
            args: Prisma.CirculationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CirculationPayload>
          }
          aggregate: {
            args: Prisma.CirculationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCirculation>
          }
          groupBy: {
            args: Prisma.CirculationGroupByArgs<ExtArgs>
            result: $Utils.Optional<CirculationGroupByOutputType>[]
          }
          count: {
            args: Prisma.CirculationCountArgs<ExtArgs>
            result: $Utils.Optional<CirculationCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    session?: SessionOmit
    librarian?: LibrarianOmit
    book?: BookOmit
    emailVerificationToken?: EmailVerificationTokenOmit
    patron?: PatronOmit
    book_likes?: Book_likesOmit
    book_consulted?: Book_consultedOmit
    circulation?: CirculationOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type BookCountOutputType
   */

  export type BookCountOutputType = {
    book_likes: number
    book_consulted: number
    circulation: number
  }

  export type BookCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    book_likes?: boolean | BookCountOutputTypeCountBook_likesArgs
    book_consulted?: boolean | BookCountOutputTypeCountBook_consultedArgs
    circulation?: boolean | BookCountOutputTypeCountCirculationArgs
  }

  // Custom InputTypes
  /**
   * BookCountOutputType without action
   */
  export type BookCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookCountOutputType
     */
    select?: BookCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * BookCountOutputType without action
   */
  export type BookCountOutputTypeCountBook_likesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Book_likesWhereInput
  }

  /**
   * BookCountOutputType without action
   */
  export type BookCountOutputTypeCountBook_consultedArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Book_consultedWhereInput
  }

  /**
   * BookCountOutputType without action
   */
  export type BookCountOutputTypeCountCirculationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CirculationWhereInput
  }


  /**
   * Count Type PatronCountOutputType
   */

  export type PatronCountOutputType = {
    book_likes: number
    book_consulted: number
    circulation: number
  }

  export type PatronCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    book_likes?: boolean | PatronCountOutputTypeCountBook_likesArgs
    book_consulted?: boolean | PatronCountOutputTypeCountBook_consultedArgs
    circulation?: boolean | PatronCountOutputTypeCountCirculationArgs
  }

  // Custom InputTypes
  /**
   * PatronCountOutputType without action
   */
  export type PatronCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PatronCountOutputType
     */
    select?: PatronCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PatronCountOutputType without action
   */
  export type PatronCountOutputTypeCountBook_likesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Book_likesWhereInput
  }

  /**
   * PatronCountOutputType without action
   */
  export type PatronCountOutputTypeCountBook_consultedArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Book_consultedWhereInput
  }

  /**
   * PatronCountOutputType without action
   */
  export type PatronCountOutputTypeCountCirculationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CirculationWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Session
   */

  export type AggregateSession = {
    _count: SessionCountAggregateOutputType | null
    _min: SessionMinAggregateOutputType | null
    _max: SessionMaxAggregateOutputType | null
  }

  export type SessionMinAggregateOutputType = {
    id: string | null
    sid: string | null
    data: string | null
    expiresAt: Date | null
  }

  export type SessionMaxAggregateOutputType = {
    id: string | null
    sid: string | null
    data: string | null
    expiresAt: Date | null
  }

  export type SessionCountAggregateOutputType = {
    id: number
    sid: number
    data: number
    expiresAt: number
    _all: number
  }


  export type SessionMinAggregateInputType = {
    id?: true
    sid?: true
    data?: true
    expiresAt?: true
  }

  export type SessionMaxAggregateInputType = {
    id?: true
    sid?: true
    data?: true
    expiresAt?: true
  }

  export type SessionCountAggregateInputType = {
    id?: true
    sid?: true
    data?: true
    expiresAt?: true
    _all?: true
  }

  export type SessionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Session to aggregate.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Sessions
    **/
    _count?: true | SessionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SessionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SessionMaxAggregateInputType
  }

  export type GetSessionAggregateType<T extends SessionAggregateArgs> = {
        [P in keyof T & keyof AggregateSession]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSession[P]>
      : GetScalarType<T[P], AggregateSession[P]>
  }




  export type SessionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SessionWhereInput
    orderBy?: SessionOrderByWithAggregationInput | SessionOrderByWithAggregationInput[]
    by: SessionScalarFieldEnum[] | SessionScalarFieldEnum
    having?: SessionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SessionCountAggregateInputType | true
    _min?: SessionMinAggregateInputType
    _max?: SessionMaxAggregateInputType
  }

  export type SessionGroupByOutputType = {
    id: string
    sid: string
    data: string
    expiresAt: Date
    _count: SessionCountAggregateOutputType | null
    _min: SessionMinAggregateOutputType | null
    _max: SessionMaxAggregateOutputType | null
  }

  type GetSessionGroupByPayload<T extends SessionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SessionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SessionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SessionGroupByOutputType[P]>
            : GetScalarType<T[P], SessionGroupByOutputType[P]>
        }
      >
    >


  export type SessionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sid?: boolean
    data?: boolean
    expiresAt?: boolean
  }, ExtArgs["result"]["session"]>

  export type SessionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sid?: boolean
    data?: boolean
    expiresAt?: boolean
  }, ExtArgs["result"]["session"]>

  export type SessionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sid?: boolean
    data?: boolean
    expiresAt?: boolean
  }, ExtArgs["result"]["session"]>

  export type SessionSelectScalar = {
    id?: boolean
    sid?: boolean
    data?: boolean
    expiresAt?: boolean
  }

  export type SessionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "sid" | "data" | "expiresAt", ExtArgs["result"]["session"]>

  export type $SessionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Session"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      sid: string
      data: string
      expiresAt: Date
    }, ExtArgs["result"]["session"]>
    composites: {}
  }

  type SessionGetPayload<S extends boolean | null | undefined | SessionDefaultArgs> = $Result.GetResult<Prisma.$SessionPayload, S>

  type SessionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SessionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SessionCountAggregateInputType | true
    }

  export interface SessionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Session'], meta: { name: 'Session' } }
    /**
     * Find zero or one Session that matches the filter.
     * @param {SessionFindUniqueArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SessionFindUniqueArgs>(args: SelectSubset<T, SessionFindUniqueArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Session that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SessionFindUniqueOrThrowArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SessionFindUniqueOrThrowArgs>(args: SelectSubset<T, SessionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Session that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindFirstArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SessionFindFirstArgs>(args?: SelectSubset<T, SessionFindFirstArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Session that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindFirstOrThrowArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SessionFindFirstOrThrowArgs>(args?: SelectSubset<T, SessionFindFirstOrThrowArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Sessions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Sessions
     * const sessions = await prisma.session.findMany()
     * 
     * // Get first 10 Sessions
     * const sessions = await prisma.session.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const sessionWithIdOnly = await prisma.session.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SessionFindManyArgs>(args?: SelectSubset<T, SessionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Session.
     * @param {SessionCreateArgs} args - Arguments to create a Session.
     * @example
     * // Create one Session
     * const Session = await prisma.session.create({
     *   data: {
     *     // ... data to create a Session
     *   }
     * })
     * 
     */
    create<T extends SessionCreateArgs>(args: SelectSubset<T, SessionCreateArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Sessions.
     * @param {SessionCreateManyArgs} args - Arguments to create many Sessions.
     * @example
     * // Create many Sessions
     * const session = await prisma.session.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SessionCreateManyArgs>(args?: SelectSubset<T, SessionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Sessions and returns the data saved in the database.
     * @param {SessionCreateManyAndReturnArgs} args - Arguments to create many Sessions.
     * @example
     * // Create many Sessions
     * const session = await prisma.session.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Sessions and only return the `id`
     * const sessionWithIdOnly = await prisma.session.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SessionCreateManyAndReturnArgs>(args?: SelectSubset<T, SessionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Session.
     * @param {SessionDeleteArgs} args - Arguments to delete one Session.
     * @example
     * // Delete one Session
     * const Session = await prisma.session.delete({
     *   where: {
     *     // ... filter to delete one Session
     *   }
     * })
     * 
     */
    delete<T extends SessionDeleteArgs>(args: SelectSubset<T, SessionDeleteArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Session.
     * @param {SessionUpdateArgs} args - Arguments to update one Session.
     * @example
     * // Update one Session
     * const session = await prisma.session.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SessionUpdateArgs>(args: SelectSubset<T, SessionUpdateArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Sessions.
     * @param {SessionDeleteManyArgs} args - Arguments to filter Sessions to delete.
     * @example
     * // Delete a few Sessions
     * const { count } = await prisma.session.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SessionDeleteManyArgs>(args?: SelectSubset<T, SessionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Sessions
     * const session = await prisma.session.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SessionUpdateManyArgs>(args: SelectSubset<T, SessionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sessions and returns the data updated in the database.
     * @param {SessionUpdateManyAndReturnArgs} args - Arguments to update many Sessions.
     * @example
     * // Update many Sessions
     * const session = await prisma.session.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Sessions and only return the `id`
     * const sessionWithIdOnly = await prisma.session.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SessionUpdateManyAndReturnArgs>(args: SelectSubset<T, SessionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Session.
     * @param {SessionUpsertArgs} args - Arguments to update or create a Session.
     * @example
     * // Update or create a Session
     * const session = await prisma.session.upsert({
     *   create: {
     *     // ... data to create a Session
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Session we want to update
     *   }
     * })
     */
    upsert<T extends SessionUpsertArgs>(args: SelectSubset<T, SessionUpsertArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Sessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionCountArgs} args - Arguments to filter Sessions to count.
     * @example
     * // Count the number of Sessions
     * const count = await prisma.session.count({
     *   where: {
     *     // ... the filter for the Sessions we want to count
     *   }
     * })
    **/
    count<T extends SessionCountArgs>(
      args?: Subset<T, SessionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SessionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Session.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SessionAggregateArgs>(args: Subset<T, SessionAggregateArgs>): Prisma.PrismaPromise<GetSessionAggregateType<T>>

    /**
     * Group by Session.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SessionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SessionGroupByArgs['orderBy'] }
        : { orderBy?: SessionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SessionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSessionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Session model
   */
  readonly fields: SessionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Session.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SessionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Session model
   */
  interface SessionFieldRefs {
    readonly id: FieldRef<"Session", 'String'>
    readonly sid: FieldRef<"Session", 'String'>
    readonly data: FieldRef<"Session", 'String'>
    readonly expiresAt: FieldRef<"Session", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Session findUnique
   */
  export type SessionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session findUniqueOrThrow
   */
  export type SessionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session findFirst
   */
  export type SessionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sessions.
     */
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * Session findFirstOrThrow
   */
  export type SessionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sessions.
     */
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * Session findMany
   */
  export type SessionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Filter, which Sessions to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * Session create
   */
  export type SessionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * The data needed to create a Session.
     */
    data: XOR<SessionCreateInput, SessionUncheckedCreateInput>
  }

  /**
   * Session createMany
   */
  export type SessionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Sessions.
     */
    data: SessionCreateManyInput | SessionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Session createManyAndReturn
   */
  export type SessionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * The data used to create many Sessions.
     */
    data: SessionCreateManyInput | SessionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Session update
   */
  export type SessionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * The data needed to update a Session.
     */
    data: XOR<SessionUpdateInput, SessionUncheckedUpdateInput>
    /**
     * Choose, which Session to update.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session updateMany
   */
  export type SessionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Sessions.
     */
    data: XOR<SessionUpdateManyMutationInput, SessionUncheckedUpdateManyInput>
    /**
     * Filter which Sessions to update
     */
    where?: SessionWhereInput
    /**
     * Limit how many Sessions to update.
     */
    limit?: number
  }

  /**
   * Session updateManyAndReturn
   */
  export type SessionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * The data used to update Sessions.
     */
    data: XOR<SessionUpdateManyMutationInput, SessionUncheckedUpdateManyInput>
    /**
     * Filter which Sessions to update
     */
    where?: SessionWhereInput
    /**
     * Limit how many Sessions to update.
     */
    limit?: number
  }

  /**
   * Session upsert
   */
  export type SessionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * The filter to search for the Session to update in case it exists.
     */
    where: SessionWhereUniqueInput
    /**
     * In case the Session found by the `where` argument doesn't exist, create a new Session with this data.
     */
    create: XOR<SessionCreateInput, SessionUncheckedCreateInput>
    /**
     * In case the Session was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SessionUpdateInput, SessionUncheckedUpdateInput>
  }

  /**
   * Session delete
   */
  export type SessionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Filter which Session to delete.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session deleteMany
   */
  export type SessionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Sessions to delete
     */
    where?: SessionWhereInput
    /**
     * Limit how many Sessions to delete.
     */
    limit?: number
  }

  /**
   * Session without action
   */
  export type SessionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
  }


  /**
   * Model Librarian
   */

  export type AggregateLibrarian = {
    _count: LibrarianCountAggregateOutputType | null
    _avg: LibrarianAvgAggregateOutputType | null
    _sum: LibrarianSumAggregateOutputType | null
    _min: LibrarianMinAggregateOutputType | null
    _max: LibrarianMaxAggregateOutputType | null
  }

  export type LibrarianAvgAggregateOutputType = {
    rank: number | null
  }

  export type LibrarianSumAggregateOutputType = {
    rank: number | null
  }

  export type LibrarianMinAggregateOutputType = {
    id: string | null
    firstname: string | null
    lastname: string | null
    displayname: string | null
    email: string | null
    password: string | null
    profile_img: string | null
    address: string | null
    contact: string | null
    rank: number | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type LibrarianMaxAggregateOutputType = {
    id: string | null
    firstname: string | null
    lastname: string | null
    displayname: string | null
    email: string | null
    password: string | null
    profile_img: string | null
    address: string | null
    contact: string | null
    rank: number | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type LibrarianCountAggregateOutputType = {
    id: number
    firstname: number
    lastname: number
    displayname: number
    email: number
    password: number
    profile_img: number
    address: number
    contact: number
    rank: number
    books_entered: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type LibrarianAvgAggregateInputType = {
    rank?: true
  }

  export type LibrarianSumAggregateInputType = {
    rank?: true
  }

  export type LibrarianMinAggregateInputType = {
    id?: true
    firstname?: true
    lastname?: true
    displayname?: true
    email?: true
    password?: true
    profile_img?: true
    address?: true
    contact?: true
    rank?: true
    created_at?: true
    updated_at?: true
  }

  export type LibrarianMaxAggregateInputType = {
    id?: true
    firstname?: true
    lastname?: true
    displayname?: true
    email?: true
    password?: true
    profile_img?: true
    address?: true
    contact?: true
    rank?: true
    created_at?: true
    updated_at?: true
  }

  export type LibrarianCountAggregateInputType = {
    id?: true
    firstname?: true
    lastname?: true
    displayname?: true
    email?: true
    password?: true
    profile_img?: true
    address?: true
    contact?: true
    rank?: true
    books_entered?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type LibrarianAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Librarian to aggregate.
     */
    where?: LibrarianWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Librarians to fetch.
     */
    orderBy?: LibrarianOrderByWithRelationInput | LibrarianOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LibrarianWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Librarians from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Librarians.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Librarians
    **/
    _count?: true | LibrarianCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: LibrarianAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: LibrarianSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LibrarianMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LibrarianMaxAggregateInputType
  }

  export type GetLibrarianAggregateType<T extends LibrarianAggregateArgs> = {
        [P in keyof T & keyof AggregateLibrarian]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLibrarian[P]>
      : GetScalarType<T[P], AggregateLibrarian[P]>
  }




  export type LibrarianGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LibrarianWhereInput
    orderBy?: LibrarianOrderByWithAggregationInput | LibrarianOrderByWithAggregationInput[]
    by: LibrarianScalarFieldEnum[] | LibrarianScalarFieldEnum
    having?: LibrarianScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LibrarianCountAggregateInputType | true
    _avg?: LibrarianAvgAggregateInputType
    _sum?: LibrarianSumAggregateInputType
    _min?: LibrarianMinAggregateInputType
    _max?: LibrarianMaxAggregateInputType
  }

  export type LibrarianGroupByOutputType = {
    id: string
    firstname: string
    lastname: string
    displayname: string
    email: string
    password: string
    profile_img: string
    address: string
    contact: string
    rank: number
    books_entered: string[]
    created_at: Date
    updated_at: Date
    _count: LibrarianCountAggregateOutputType | null
    _avg: LibrarianAvgAggregateOutputType | null
    _sum: LibrarianSumAggregateOutputType | null
    _min: LibrarianMinAggregateOutputType | null
    _max: LibrarianMaxAggregateOutputType | null
  }

  type GetLibrarianGroupByPayload<T extends LibrarianGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LibrarianGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LibrarianGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LibrarianGroupByOutputType[P]>
            : GetScalarType<T[P], LibrarianGroupByOutputType[P]>
        }
      >
    >


  export type LibrarianSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    firstname?: boolean
    lastname?: boolean
    displayname?: boolean
    email?: boolean
    password?: boolean
    profile_img?: boolean
    address?: boolean
    contact?: boolean
    rank?: boolean
    books_entered?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["librarian"]>

  export type LibrarianSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    firstname?: boolean
    lastname?: boolean
    displayname?: boolean
    email?: boolean
    password?: boolean
    profile_img?: boolean
    address?: boolean
    contact?: boolean
    rank?: boolean
    books_entered?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["librarian"]>

  export type LibrarianSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    firstname?: boolean
    lastname?: boolean
    displayname?: boolean
    email?: boolean
    password?: boolean
    profile_img?: boolean
    address?: boolean
    contact?: boolean
    rank?: boolean
    books_entered?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["librarian"]>

  export type LibrarianSelectScalar = {
    id?: boolean
    firstname?: boolean
    lastname?: boolean
    displayname?: boolean
    email?: boolean
    password?: boolean
    profile_img?: boolean
    address?: boolean
    contact?: boolean
    rank?: boolean
    books_entered?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type LibrarianOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "firstname" | "lastname" | "displayname" | "email" | "password" | "profile_img" | "address" | "contact" | "rank" | "books_entered" | "created_at" | "updated_at", ExtArgs["result"]["librarian"]>

  export type $LibrarianPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Librarian"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      firstname: string
      lastname: string
      displayname: string
      email: string
      password: string
      profile_img: string
      address: string
      contact: string
      rank: number
      books_entered: string[]
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["librarian"]>
    composites: {}
  }

  type LibrarianGetPayload<S extends boolean | null | undefined | LibrarianDefaultArgs> = $Result.GetResult<Prisma.$LibrarianPayload, S>

  type LibrarianCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<LibrarianFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: LibrarianCountAggregateInputType | true
    }

  export interface LibrarianDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Librarian'], meta: { name: 'Librarian' } }
    /**
     * Find zero or one Librarian that matches the filter.
     * @param {LibrarianFindUniqueArgs} args - Arguments to find a Librarian
     * @example
     * // Get one Librarian
     * const librarian = await prisma.librarian.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LibrarianFindUniqueArgs>(args: SelectSubset<T, LibrarianFindUniqueArgs<ExtArgs>>): Prisma__LibrarianClient<$Result.GetResult<Prisma.$LibrarianPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Librarian that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {LibrarianFindUniqueOrThrowArgs} args - Arguments to find a Librarian
     * @example
     * // Get one Librarian
     * const librarian = await prisma.librarian.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LibrarianFindUniqueOrThrowArgs>(args: SelectSubset<T, LibrarianFindUniqueOrThrowArgs<ExtArgs>>): Prisma__LibrarianClient<$Result.GetResult<Prisma.$LibrarianPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Librarian that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LibrarianFindFirstArgs} args - Arguments to find a Librarian
     * @example
     * // Get one Librarian
     * const librarian = await prisma.librarian.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LibrarianFindFirstArgs>(args?: SelectSubset<T, LibrarianFindFirstArgs<ExtArgs>>): Prisma__LibrarianClient<$Result.GetResult<Prisma.$LibrarianPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Librarian that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LibrarianFindFirstOrThrowArgs} args - Arguments to find a Librarian
     * @example
     * // Get one Librarian
     * const librarian = await prisma.librarian.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LibrarianFindFirstOrThrowArgs>(args?: SelectSubset<T, LibrarianFindFirstOrThrowArgs<ExtArgs>>): Prisma__LibrarianClient<$Result.GetResult<Prisma.$LibrarianPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Librarians that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LibrarianFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Librarians
     * const librarians = await prisma.librarian.findMany()
     * 
     * // Get first 10 Librarians
     * const librarians = await prisma.librarian.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const librarianWithIdOnly = await prisma.librarian.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends LibrarianFindManyArgs>(args?: SelectSubset<T, LibrarianFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LibrarianPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Librarian.
     * @param {LibrarianCreateArgs} args - Arguments to create a Librarian.
     * @example
     * // Create one Librarian
     * const Librarian = await prisma.librarian.create({
     *   data: {
     *     // ... data to create a Librarian
     *   }
     * })
     * 
     */
    create<T extends LibrarianCreateArgs>(args: SelectSubset<T, LibrarianCreateArgs<ExtArgs>>): Prisma__LibrarianClient<$Result.GetResult<Prisma.$LibrarianPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Librarians.
     * @param {LibrarianCreateManyArgs} args - Arguments to create many Librarians.
     * @example
     * // Create many Librarians
     * const librarian = await prisma.librarian.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends LibrarianCreateManyArgs>(args?: SelectSubset<T, LibrarianCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Librarians and returns the data saved in the database.
     * @param {LibrarianCreateManyAndReturnArgs} args - Arguments to create many Librarians.
     * @example
     * // Create many Librarians
     * const librarian = await prisma.librarian.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Librarians and only return the `id`
     * const librarianWithIdOnly = await prisma.librarian.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends LibrarianCreateManyAndReturnArgs>(args?: SelectSubset<T, LibrarianCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LibrarianPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Librarian.
     * @param {LibrarianDeleteArgs} args - Arguments to delete one Librarian.
     * @example
     * // Delete one Librarian
     * const Librarian = await prisma.librarian.delete({
     *   where: {
     *     // ... filter to delete one Librarian
     *   }
     * })
     * 
     */
    delete<T extends LibrarianDeleteArgs>(args: SelectSubset<T, LibrarianDeleteArgs<ExtArgs>>): Prisma__LibrarianClient<$Result.GetResult<Prisma.$LibrarianPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Librarian.
     * @param {LibrarianUpdateArgs} args - Arguments to update one Librarian.
     * @example
     * // Update one Librarian
     * const librarian = await prisma.librarian.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends LibrarianUpdateArgs>(args: SelectSubset<T, LibrarianUpdateArgs<ExtArgs>>): Prisma__LibrarianClient<$Result.GetResult<Prisma.$LibrarianPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Librarians.
     * @param {LibrarianDeleteManyArgs} args - Arguments to filter Librarians to delete.
     * @example
     * // Delete a few Librarians
     * const { count } = await prisma.librarian.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends LibrarianDeleteManyArgs>(args?: SelectSubset<T, LibrarianDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Librarians.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LibrarianUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Librarians
     * const librarian = await prisma.librarian.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends LibrarianUpdateManyArgs>(args: SelectSubset<T, LibrarianUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Librarians and returns the data updated in the database.
     * @param {LibrarianUpdateManyAndReturnArgs} args - Arguments to update many Librarians.
     * @example
     * // Update many Librarians
     * const librarian = await prisma.librarian.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Librarians and only return the `id`
     * const librarianWithIdOnly = await prisma.librarian.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends LibrarianUpdateManyAndReturnArgs>(args: SelectSubset<T, LibrarianUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LibrarianPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Librarian.
     * @param {LibrarianUpsertArgs} args - Arguments to update or create a Librarian.
     * @example
     * // Update or create a Librarian
     * const librarian = await prisma.librarian.upsert({
     *   create: {
     *     // ... data to create a Librarian
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Librarian we want to update
     *   }
     * })
     */
    upsert<T extends LibrarianUpsertArgs>(args: SelectSubset<T, LibrarianUpsertArgs<ExtArgs>>): Prisma__LibrarianClient<$Result.GetResult<Prisma.$LibrarianPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Librarians.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LibrarianCountArgs} args - Arguments to filter Librarians to count.
     * @example
     * // Count the number of Librarians
     * const count = await prisma.librarian.count({
     *   where: {
     *     // ... the filter for the Librarians we want to count
     *   }
     * })
    **/
    count<T extends LibrarianCountArgs>(
      args?: Subset<T, LibrarianCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LibrarianCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Librarian.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LibrarianAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends LibrarianAggregateArgs>(args: Subset<T, LibrarianAggregateArgs>): Prisma.PrismaPromise<GetLibrarianAggregateType<T>>

    /**
     * Group by Librarian.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LibrarianGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends LibrarianGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LibrarianGroupByArgs['orderBy'] }
        : { orderBy?: LibrarianGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, LibrarianGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLibrarianGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Librarian model
   */
  readonly fields: LibrarianFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Librarian.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LibrarianClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Librarian model
   */
  interface LibrarianFieldRefs {
    readonly id: FieldRef<"Librarian", 'String'>
    readonly firstname: FieldRef<"Librarian", 'String'>
    readonly lastname: FieldRef<"Librarian", 'String'>
    readonly displayname: FieldRef<"Librarian", 'String'>
    readonly email: FieldRef<"Librarian", 'String'>
    readonly password: FieldRef<"Librarian", 'String'>
    readonly profile_img: FieldRef<"Librarian", 'String'>
    readonly address: FieldRef<"Librarian", 'String'>
    readonly contact: FieldRef<"Librarian", 'String'>
    readonly rank: FieldRef<"Librarian", 'Int'>
    readonly books_entered: FieldRef<"Librarian", 'String[]'>
    readonly created_at: FieldRef<"Librarian", 'DateTime'>
    readonly updated_at: FieldRef<"Librarian", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Librarian findUnique
   */
  export type LibrarianFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Librarian
     */
    select?: LibrarianSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Librarian
     */
    omit?: LibrarianOmit<ExtArgs> | null
    /**
     * Filter, which Librarian to fetch.
     */
    where: LibrarianWhereUniqueInput
  }

  /**
   * Librarian findUniqueOrThrow
   */
  export type LibrarianFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Librarian
     */
    select?: LibrarianSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Librarian
     */
    omit?: LibrarianOmit<ExtArgs> | null
    /**
     * Filter, which Librarian to fetch.
     */
    where: LibrarianWhereUniqueInput
  }

  /**
   * Librarian findFirst
   */
  export type LibrarianFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Librarian
     */
    select?: LibrarianSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Librarian
     */
    omit?: LibrarianOmit<ExtArgs> | null
    /**
     * Filter, which Librarian to fetch.
     */
    where?: LibrarianWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Librarians to fetch.
     */
    orderBy?: LibrarianOrderByWithRelationInput | LibrarianOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Librarians.
     */
    cursor?: LibrarianWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Librarians from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Librarians.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Librarians.
     */
    distinct?: LibrarianScalarFieldEnum | LibrarianScalarFieldEnum[]
  }

  /**
   * Librarian findFirstOrThrow
   */
  export type LibrarianFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Librarian
     */
    select?: LibrarianSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Librarian
     */
    omit?: LibrarianOmit<ExtArgs> | null
    /**
     * Filter, which Librarian to fetch.
     */
    where?: LibrarianWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Librarians to fetch.
     */
    orderBy?: LibrarianOrderByWithRelationInput | LibrarianOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Librarians.
     */
    cursor?: LibrarianWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Librarians from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Librarians.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Librarians.
     */
    distinct?: LibrarianScalarFieldEnum | LibrarianScalarFieldEnum[]
  }

  /**
   * Librarian findMany
   */
  export type LibrarianFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Librarian
     */
    select?: LibrarianSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Librarian
     */
    omit?: LibrarianOmit<ExtArgs> | null
    /**
     * Filter, which Librarians to fetch.
     */
    where?: LibrarianWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Librarians to fetch.
     */
    orderBy?: LibrarianOrderByWithRelationInput | LibrarianOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Librarians.
     */
    cursor?: LibrarianWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Librarians from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Librarians.
     */
    skip?: number
    distinct?: LibrarianScalarFieldEnum | LibrarianScalarFieldEnum[]
  }

  /**
   * Librarian create
   */
  export type LibrarianCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Librarian
     */
    select?: LibrarianSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Librarian
     */
    omit?: LibrarianOmit<ExtArgs> | null
    /**
     * The data needed to create a Librarian.
     */
    data: XOR<LibrarianCreateInput, LibrarianUncheckedCreateInput>
  }

  /**
   * Librarian createMany
   */
  export type LibrarianCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Librarians.
     */
    data: LibrarianCreateManyInput | LibrarianCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Librarian createManyAndReturn
   */
  export type LibrarianCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Librarian
     */
    select?: LibrarianSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Librarian
     */
    omit?: LibrarianOmit<ExtArgs> | null
    /**
     * The data used to create many Librarians.
     */
    data: LibrarianCreateManyInput | LibrarianCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Librarian update
   */
  export type LibrarianUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Librarian
     */
    select?: LibrarianSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Librarian
     */
    omit?: LibrarianOmit<ExtArgs> | null
    /**
     * The data needed to update a Librarian.
     */
    data: XOR<LibrarianUpdateInput, LibrarianUncheckedUpdateInput>
    /**
     * Choose, which Librarian to update.
     */
    where: LibrarianWhereUniqueInput
  }

  /**
   * Librarian updateMany
   */
  export type LibrarianUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Librarians.
     */
    data: XOR<LibrarianUpdateManyMutationInput, LibrarianUncheckedUpdateManyInput>
    /**
     * Filter which Librarians to update
     */
    where?: LibrarianWhereInput
    /**
     * Limit how many Librarians to update.
     */
    limit?: number
  }

  /**
   * Librarian updateManyAndReturn
   */
  export type LibrarianUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Librarian
     */
    select?: LibrarianSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Librarian
     */
    omit?: LibrarianOmit<ExtArgs> | null
    /**
     * The data used to update Librarians.
     */
    data: XOR<LibrarianUpdateManyMutationInput, LibrarianUncheckedUpdateManyInput>
    /**
     * Filter which Librarians to update
     */
    where?: LibrarianWhereInput
    /**
     * Limit how many Librarians to update.
     */
    limit?: number
  }

  /**
   * Librarian upsert
   */
  export type LibrarianUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Librarian
     */
    select?: LibrarianSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Librarian
     */
    omit?: LibrarianOmit<ExtArgs> | null
    /**
     * The filter to search for the Librarian to update in case it exists.
     */
    where: LibrarianWhereUniqueInput
    /**
     * In case the Librarian found by the `where` argument doesn't exist, create a new Librarian with this data.
     */
    create: XOR<LibrarianCreateInput, LibrarianUncheckedCreateInput>
    /**
     * In case the Librarian was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LibrarianUpdateInput, LibrarianUncheckedUpdateInput>
  }

  /**
   * Librarian delete
   */
  export type LibrarianDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Librarian
     */
    select?: LibrarianSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Librarian
     */
    omit?: LibrarianOmit<ExtArgs> | null
    /**
     * Filter which Librarian to delete.
     */
    where: LibrarianWhereUniqueInput
  }

  /**
   * Librarian deleteMany
   */
  export type LibrarianDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Librarians to delete
     */
    where?: LibrarianWhereInput
    /**
     * Limit how many Librarians to delete.
     */
    limit?: number
  }

  /**
   * Librarian without action
   */
  export type LibrarianDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Librarian
     */
    select?: LibrarianSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Librarian
     */
    omit?: LibrarianOmit<ExtArgs> | null
  }


  /**
   * Model Book
   */

  export type AggregateBook = {
    _count: BookCountAggregateOutputType | null
    _min: BookMinAggregateOutputType | null
    _max: BookMaxAggregateOutputType | null
  }

  export type BookMinAggregateOutputType = {
    id: string | null
    title: string | null
    author: string | null
    imprint: string | null
    collation: string | null
    G_M_D: $Enums.GMD | null
    book_cover: string | null
    material_number: string | null
    availability: boolean | null
    bibilography: string | null
    other_Title: string | null
    co_author: string | null
    editor: string | null
    edition: string | null
    series: string | null
    web_address: string | null
    entered_at: Date | null
  }

  export type BookMaxAggregateOutputType = {
    id: string | null
    title: string | null
    author: string | null
    imprint: string | null
    collation: string | null
    G_M_D: $Enums.GMD | null
    book_cover: string | null
    material_number: string | null
    availability: boolean | null
    bibilography: string | null
    other_Title: string | null
    co_author: string | null
    editor: string | null
    edition: string | null
    series: string | null
    web_address: string | null
    entered_at: Date | null
  }

  export type BookCountAggregateOutputType = {
    id: number
    title: number
    author: number
    subject: number
    imprint: number
    collation: number
    G_M_D: number
    book_cover: number
    material_number: number
    availability: number
    bibilography: number
    Keywords: number
    other_Title: number
    co_author: number
    editor: number
    edition: number
    series: number
    web_address: number
    entered_at: number
    _all: number
  }


  export type BookMinAggregateInputType = {
    id?: true
    title?: true
    author?: true
    imprint?: true
    collation?: true
    G_M_D?: true
    book_cover?: true
    material_number?: true
    availability?: true
    bibilography?: true
    other_Title?: true
    co_author?: true
    editor?: true
    edition?: true
    series?: true
    web_address?: true
    entered_at?: true
  }

  export type BookMaxAggregateInputType = {
    id?: true
    title?: true
    author?: true
    imprint?: true
    collation?: true
    G_M_D?: true
    book_cover?: true
    material_number?: true
    availability?: true
    bibilography?: true
    other_Title?: true
    co_author?: true
    editor?: true
    edition?: true
    series?: true
    web_address?: true
    entered_at?: true
  }

  export type BookCountAggregateInputType = {
    id?: true
    title?: true
    author?: true
    subject?: true
    imprint?: true
    collation?: true
    G_M_D?: true
    book_cover?: true
    material_number?: true
    availability?: true
    bibilography?: true
    Keywords?: true
    other_Title?: true
    co_author?: true
    editor?: true
    edition?: true
    series?: true
    web_address?: true
    entered_at?: true
    _all?: true
  }

  export type BookAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Book to aggregate.
     */
    where?: BookWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Books to fetch.
     */
    orderBy?: BookOrderByWithRelationInput | BookOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BookWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Books from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Books.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Books
    **/
    _count?: true | BookCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BookMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BookMaxAggregateInputType
  }

  export type GetBookAggregateType<T extends BookAggregateArgs> = {
        [P in keyof T & keyof AggregateBook]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBook[P]>
      : GetScalarType<T[P], AggregateBook[P]>
  }




  export type BookGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BookWhereInput
    orderBy?: BookOrderByWithAggregationInput | BookOrderByWithAggregationInput[]
    by: BookScalarFieldEnum[] | BookScalarFieldEnum
    having?: BookScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BookCountAggregateInputType | true
    _min?: BookMinAggregateInputType
    _max?: BookMaxAggregateInputType
  }

  export type BookGroupByOutputType = {
    id: string
    title: string
    author: string
    subject: string[]
    imprint: string
    collation: string
    G_M_D: $Enums.GMD
    book_cover: string
    material_number: string
    availability: boolean
    bibilography: string
    Keywords: string[]
    other_Title: string | null
    co_author: string | null
    editor: string | null
    edition: string | null
    series: string | null
    web_address: string | null
    entered_at: Date
    _count: BookCountAggregateOutputType | null
    _min: BookMinAggregateOutputType | null
    _max: BookMaxAggregateOutputType | null
  }

  type GetBookGroupByPayload<T extends BookGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BookGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BookGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BookGroupByOutputType[P]>
            : GetScalarType<T[P], BookGroupByOutputType[P]>
        }
      >
    >


  export type BookSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    author?: boolean
    subject?: boolean
    imprint?: boolean
    collation?: boolean
    G_M_D?: boolean
    book_cover?: boolean
    material_number?: boolean
    availability?: boolean
    bibilography?: boolean
    Keywords?: boolean
    other_Title?: boolean
    co_author?: boolean
    editor?: boolean
    edition?: boolean
    series?: boolean
    web_address?: boolean
    entered_at?: boolean
    book_likes?: boolean | Book$book_likesArgs<ExtArgs>
    book_consulted?: boolean | Book$book_consultedArgs<ExtArgs>
    circulation?: boolean | Book$circulationArgs<ExtArgs>
    _count?: boolean | BookCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["book"]>

  export type BookSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    author?: boolean
    subject?: boolean
    imprint?: boolean
    collation?: boolean
    G_M_D?: boolean
    book_cover?: boolean
    material_number?: boolean
    availability?: boolean
    bibilography?: boolean
    Keywords?: boolean
    other_Title?: boolean
    co_author?: boolean
    editor?: boolean
    edition?: boolean
    series?: boolean
    web_address?: boolean
    entered_at?: boolean
  }, ExtArgs["result"]["book"]>

  export type BookSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    author?: boolean
    subject?: boolean
    imprint?: boolean
    collation?: boolean
    G_M_D?: boolean
    book_cover?: boolean
    material_number?: boolean
    availability?: boolean
    bibilography?: boolean
    Keywords?: boolean
    other_Title?: boolean
    co_author?: boolean
    editor?: boolean
    edition?: boolean
    series?: boolean
    web_address?: boolean
    entered_at?: boolean
  }, ExtArgs["result"]["book"]>

  export type BookSelectScalar = {
    id?: boolean
    title?: boolean
    author?: boolean
    subject?: boolean
    imprint?: boolean
    collation?: boolean
    G_M_D?: boolean
    book_cover?: boolean
    material_number?: boolean
    availability?: boolean
    bibilography?: boolean
    Keywords?: boolean
    other_Title?: boolean
    co_author?: boolean
    editor?: boolean
    edition?: boolean
    series?: boolean
    web_address?: boolean
    entered_at?: boolean
  }

  export type BookOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "author" | "subject" | "imprint" | "collation" | "G_M_D" | "book_cover" | "material_number" | "availability" | "bibilography" | "Keywords" | "other_Title" | "co_author" | "editor" | "edition" | "series" | "web_address" | "entered_at", ExtArgs["result"]["book"]>
  export type BookInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    book_likes?: boolean | Book$book_likesArgs<ExtArgs>
    book_consulted?: boolean | Book$book_consultedArgs<ExtArgs>
    circulation?: boolean | Book$circulationArgs<ExtArgs>
    _count?: boolean | BookCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type BookIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type BookIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $BookPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Book"
    objects: {
      book_likes: Prisma.$Book_likesPayload<ExtArgs>[]
      book_consulted: Prisma.$Book_consultedPayload<ExtArgs>[]
      circulation: Prisma.$CirculationPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      author: string
      subject: string[]
      imprint: string
      collation: string
      G_M_D: $Enums.GMD
      book_cover: string
      material_number: string
      availability: boolean
      bibilography: string
      Keywords: string[]
      other_Title: string | null
      co_author: string | null
      editor: string | null
      edition: string | null
      series: string | null
      web_address: string | null
      entered_at: Date
    }, ExtArgs["result"]["book"]>
    composites: {}
  }

  type BookGetPayload<S extends boolean | null | undefined | BookDefaultArgs> = $Result.GetResult<Prisma.$BookPayload, S>

  type BookCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BookFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BookCountAggregateInputType | true
    }

  export interface BookDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Book'], meta: { name: 'Book' } }
    /**
     * Find zero or one Book that matches the filter.
     * @param {BookFindUniqueArgs} args - Arguments to find a Book
     * @example
     * // Get one Book
     * const book = await prisma.book.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BookFindUniqueArgs>(args: SelectSubset<T, BookFindUniqueArgs<ExtArgs>>): Prisma__BookClient<$Result.GetResult<Prisma.$BookPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Book that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BookFindUniqueOrThrowArgs} args - Arguments to find a Book
     * @example
     * // Get one Book
     * const book = await prisma.book.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BookFindUniqueOrThrowArgs>(args: SelectSubset<T, BookFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BookClient<$Result.GetResult<Prisma.$BookPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Book that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookFindFirstArgs} args - Arguments to find a Book
     * @example
     * // Get one Book
     * const book = await prisma.book.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BookFindFirstArgs>(args?: SelectSubset<T, BookFindFirstArgs<ExtArgs>>): Prisma__BookClient<$Result.GetResult<Prisma.$BookPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Book that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookFindFirstOrThrowArgs} args - Arguments to find a Book
     * @example
     * // Get one Book
     * const book = await prisma.book.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BookFindFirstOrThrowArgs>(args?: SelectSubset<T, BookFindFirstOrThrowArgs<ExtArgs>>): Prisma__BookClient<$Result.GetResult<Prisma.$BookPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Books that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Books
     * const books = await prisma.book.findMany()
     * 
     * // Get first 10 Books
     * const books = await prisma.book.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const bookWithIdOnly = await prisma.book.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BookFindManyArgs>(args?: SelectSubset<T, BookFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Book.
     * @param {BookCreateArgs} args - Arguments to create a Book.
     * @example
     * // Create one Book
     * const Book = await prisma.book.create({
     *   data: {
     *     // ... data to create a Book
     *   }
     * })
     * 
     */
    create<T extends BookCreateArgs>(args: SelectSubset<T, BookCreateArgs<ExtArgs>>): Prisma__BookClient<$Result.GetResult<Prisma.$BookPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Books.
     * @param {BookCreateManyArgs} args - Arguments to create many Books.
     * @example
     * // Create many Books
     * const book = await prisma.book.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BookCreateManyArgs>(args?: SelectSubset<T, BookCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Books and returns the data saved in the database.
     * @param {BookCreateManyAndReturnArgs} args - Arguments to create many Books.
     * @example
     * // Create many Books
     * const book = await prisma.book.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Books and only return the `id`
     * const bookWithIdOnly = await prisma.book.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends BookCreateManyAndReturnArgs>(args?: SelectSubset<T, BookCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Book.
     * @param {BookDeleteArgs} args - Arguments to delete one Book.
     * @example
     * // Delete one Book
     * const Book = await prisma.book.delete({
     *   where: {
     *     // ... filter to delete one Book
     *   }
     * })
     * 
     */
    delete<T extends BookDeleteArgs>(args: SelectSubset<T, BookDeleteArgs<ExtArgs>>): Prisma__BookClient<$Result.GetResult<Prisma.$BookPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Book.
     * @param {BookUpdateArgs} args - Arguments to update one Book.
     * @example
     * // Update one Book
     * const book = await prisma.book.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BookUpdateArgs>(args: SelectSubset<T, BookUpdateArgs<ExtArgs>>): Prisma__BookClient<$Result.GetResult<Prisma.$BookPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Books.
     * @param {BookDeleteManyArgs} args - Arguments to filter Books to delete.
     * @example
     * // Delete a few Books
     * const { count } = await prisma.book.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BookDeleteManyArgs>(args?: SelectSubset<T, BookDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Books.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Books
     * const book = await prisma.book.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BookUpdateManyArgs>(args: SelectSubset<T, BookUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Books and returns the data updated in the database.
     * @param {BookUpdateManyAndReturnArgs} args - Arguments to update many Books.
     * @example
     * // Update many Books
     * const book = await prisma.book.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Books and only return the `id`
     * const bookWithIdOnly = await prisma.book.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends BookUpdateManyAndReturnArgs>(args: SelectSubset<T, BookUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Book.
     * @param {BookUpsertArgs} args - Arguments to update or create a Book.
     * @example
     * // Update or create a Book
     * const book = await prisma.book.upsert({
     *   create: {
     *     // ... data to create a Book
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Book we want to update
     *   }
     * })
     */
    upsert<T extends BookUpsertArgs>(args: SelectSubset<T, BookUpsertArgs<ExtArgs>>): Prisma__BookClient<$Result.GetResult<Prisma.$BookPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Books.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookCountArgs} args - Arguments to filter Books to count.
     * @example
     * // Count the number of Books
     * const count = await prisma.book.count({
     *   where: {
     *     // ... the filter for the Books we want to count
     *   }
     * })
    **/
    count<T extends BookCountArgs>(
      args?: Subset<T, BookCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BookCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Book.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends BookAggregateArgs>(args: Subset<T, BookAggregateArgs>): Prisma.PrismaPromise<GetBookAggregateType<T>>

    /**
     * Group by Book.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends BookGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BookGroupByArgs['orderBy'] }
        : { orderBy?: BookGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, BookGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBookGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Book model
   */
  readonly fields: BookFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Book.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BookClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    book_likes<T extends Book$book_likesArgs<ExtArgs> = {}>(args?: Subset<T, Book$book_likesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Book_likesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    book_consulted<T extends Book$book_consultedArgs<ExtArgs> = {}>(args?: Subset<T, Book$book_consultedArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Book_consultedPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    circulation<T extends Book$circulationArgs<ExtArgs> = {}>(args?: Subset<T, Book$circulationArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CirculationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Book model
   */
  interface BookFieldRefs {
    readonly id: FieldRef<"Book", 'String'>
    readonly title: FieldRef<"Book", 'String'>
    readonly author: FieldRef<"Book", 'String'>
    readonly subject: FieldRef<"Book", 'String[]'>
    readonly imprint: FieldRef<"Book", 'String'>
    readonly collation: FieldRef<"Book", 'String'>
    readonly G_M_D: FieldRef<"Book", 'GMD'>
    readonly book_cover: FieldRef<"Book", 'String'>
    readonly material_number: FieldRef<"Book", 'String'>
    readonly availability: FieldRef<"Book", 'Boolean'>
    readonly bibilography: FieldRef<"Book", 'String'>
    readonly Keywords: FieldRef<"Book", 'String[]'>
    readonly other_Title: FieldRef<"Book", 'String'>
    readonly co_author: FieldRef<"Book", 'String'>
    readonly editor: FieldRef<"Book", 'String'>
    readonly edition: FieldRef<"Book", 'String'>
    readonly series: FieldRef<"Book", 'String'>
    readonly web_address: FieldRef<"Book", 'String'>
    readonly entered_at: FieldRef<"Book", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Book findUnique
   */
  export type BookFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Book
     */
    select?: BookSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Book
     */
    omit?: BookOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookInclude<ExtArgs> | null
    /**
     * Filter, which Book to fetch.
     */
    where: BookWhereUniqueInput
  }

  /**
   * Book findUniqueOrThrow
   */
  export type BookFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Book
     */
    select?: BookSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Book
     */
    omit?: BookOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookInclude<ExtArgs> | null
    /**
     * Filter, which Book to fetch.
     */
    where: BookWhereUniqueInput
  }

  /**
   * Book findFirst
   */
  export type BookFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Book
     */
    select?: BookSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Book
     */
    omit?: BookOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookInclude<ExtArgs> | null
    /**
     * Filter, which Book to fetch.
     */
    where?: BookWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Books to fetch.
     */
    orderBy?: BookOrderByWithRelationInput | BookOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Books.
     */
    cursor?: BookWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Books from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Books.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Books.
     */
    distinct?: BookScalarFieldEnum | BookScalarFieldEnum[]
  }

  /**
   * Book findFirstOrThrow
   */
  export type BookFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Book
     */
    select?: BookSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Book
     */
    omit?: BookOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookInclude<ExtArgs> | null
    /**
     * Filter, which Book to fetch.
     */
    where?: BookWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Books to fetch.
     */
    orderBy?: BookOrderByWithRelationInput | BookOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Books.
     */
    cursor?: BookWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Books from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Books.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Books.
     */
    distinct?: BookScalarFieldEnum | BookScalarFieldEnum[]
  }

  /**
   * Book findMany
   */
  export type BookFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Book
     */
    select?: BookSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Book
     */
    omit?: BookOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookInclude<ExtArgs> | null
    /**
     * Filter, which Books to fetch.
     */
    where?: BookWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Books to fetch.
     */
    orderBy?: BookOrderByWithRelationInput | BookOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Books.
     */
    cursor?: BookWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Books from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Books.
     */
    skip?: number
    distinct?: BookScalarFieldEnum | BookScalarFieldEnum[]
  }

  /**
   * Book create
   */
  export type BookCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Book
     */
    select?: BookSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Book
     */
    omit?: BookOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookInclude<ExtArgs> | null
    /**
     * The data needed to create a Book.
     */
    data: XOR<BookCreateInput, BookUncheckedCreateInput>
  }

  /**
   * Book createMany
   */
  export type BookCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Books.
     */
    data: BookCreateManyInput | BookCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Book createManyAndReturn
   */
  export type BookCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Book
     */
    select?: BookSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Book
     */
    omit?: BookOmit<ExtArgs> | null
    /**
     * The data used to create many Books.
     */
    data: BookCreateManyInput | BookCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Book update
   */
  export type BookUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Book
     */
    select?: BookSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Book
     */
    omit?: BookOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookInclude<ExtArgs> | null
    /**
     * The data needed to update a Book.
     */
    data: XOR<BookUpdateInput, BookUncheckedUpdateInput>
    /**
     * Choose, which Book to update.
     */
    where: BookWhereUniqueInput
  }

  /**
   * Book updateMany
   */
  export type BookUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Books.
     */
    data: XOR<BookUpdateManyMutationInput, BookUncheckedUpdateManyInput>
    /**
     * Filter which Books to update
     */
    where?: BookWhereInput
    /**
     * Limit how many Books to update.
     */
    limit?: number
  }

  /**
   * Book updateManyAndReturn
   */
  export type BookUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Book
     */
    select?: BookSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Book
     */
    omit?: BookOmit<ExtArgs> | null
    /**
     * The data used to update Books.
     */
    data: XOR<BookUpdateManyMutationInput, BookUncheckedUpdateManyInput>
    /**
     * Filter which Books to update
     */
    where?: BookWhereInput
    /**
     * Limit how many Books to update.
     */
    limit?: number
  }

  /**
   * Book upsert
   */
  export type BookUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Book
     */
    select?: BookSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Book
     */
    omit?: BookOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookInclude<ExtArgs> | null
    /**
     * The filter to search for the Book to update in case it exists.
     */
    where: BookWhereUniqueInput
    /**
     * In case the Book found by the `where` argument doesn't exist, create a new Book with this data.
     */
    create: XOR<BookCreateInput, BookUncheckedCreateInput>
    /**
     * In case the Book was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BookUpdateInput, BookUncheckedUpdateInput>
  }

  /**
   * Book delete
   */
  export type BookDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Book
     */
    select?: BookSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Book
     */
    omit?: BookOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookInclude<ExtArgs> | null
    /**
     * Filter which Book to delete.
     */
    where: BookWhereUniqueInput
  }

  /**
   * Book deleteMany
   */
  export type BookDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Books to delete
     */
    where?: BookWhereInput
    /**
     * Limit how many Books to delete.
     */
    limit?: number
  }

  /**
   * Book.book_likes
   */
  export type Book$book_likesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Book_likes
     */
    select?: Book_likesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Book_likes
     */
    omit?: Book_likesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Book_likesInclude<ExtArgs> | null
    where?: Book_likesWhereInput
    orderBy?: Book_likesOrderByWithRelationInput | Book_likesOrderByWithRelationInput[]
    cursor?: Book_likesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Book_likesScalarFieldEnum | Book_likesScalarFieldEnum[]
  }

  /**
   * Book.book_consulted
   */
  export type Book$book_consultedArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Book_consulted
     */
    select?: Book_consultedSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Book_consulted
     */
    omit?: Book_consultedOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Book_consultedInclude<ExtArgs> | null
    where?: Book_consultedWhereInput
    orderBy?: Book_consultedOrderByWithRelationInput | Book_consultedOrderByWithRelationInput[]
    cursor?: Book_consultedWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Book_consultedScalarFieldEnum | Book_consultedScalarFieldEnum[]
  }

  /**
   * Book.circulation
   */
  export type Book$circulationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Circulation
     */
    select?: CirculationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Circulation
     */
    omit?: CirculationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CirculationInclude<ExtArgs> | null
    where?: CirculationWhereInput
    orderBy?: CirculationOrderByWithRelationInput | CirculationOrderByWithRelationInput[]
    cursor?: CirculationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CirculationScalarFieldEnum | CirculationScalarFieldEnum[]
  }

  /**
   * Book without action
   */
  export type BookDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Book
     */
    select?: BookSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Book
     */
    omit?: BookOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookInclude<ExtArgs> | null
  }


  /**
   * Model EmailVerificationToken
   */

  export type AggregateEmailVerificationToken = {
    _count: EmailVerificationTokenCountAggregateOutputType | null
    _min: EmailVerificationTokenMinAggregateOutputType | null
    _max: EmailVerificationTokenMaxAggregateOutputType | null
  }

  export type EmailVerificationTokenMinAggregateOutputType = {
    id: string | null
    email: string | null
    token: string | null
    expiresAt: Date | null
    createdAt: Date | null
  }

  export type EmailVerificationTokenMaxAggregateOutputType = {
    id: string | null
    email: string | null
    token: string | null
    expiresAt: Date | null
    createdAt: Date | null
  }

  export type EmailVerificationTokenCountAggregateOutputType = {
    id: number
    email: number
    token: number
    expiresAt: number
    createdAt: number
    _all: number
  }


  export type EmailVerificationTokenMinAggregateInputType = {
    id?: true
    email?: true
    token?: true
    expiresAt?: true
    createdAt?: true
  }

  export type EmailVerificationTokenMaxAggregateInputType = {
    id?: true
    email?: true
    token?: true
    expiresAt?: true
    createdAt?: true
  }

  export type EmailVerificationTokenCountAggregateInputType = {
    id?: true
    email?: true
    token?: true
    expiresAt?: true
    createdAt?: true
    _all?: true
  }

  export type EmailVerificationTokenAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which EmailVerificationToken to aggregate.
     */
    where?: EmailVerificationTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EmailVerificationTokens to fetch.
     */
    orderBy?: EmailVerificationTokenOrderByWithRelationInput | EmailVerificationTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EmailVerificationTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EmailVerificationTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EmailVerificationTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned EmailVerificationTokens
    **/
    _count?: true | EmailVerificationTokenCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EmailVerificationTokenMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EmailVerificationTokenMaxAggregateInputType
  }

  export type GetEmailVerificationTokenAggregateType<T extends EmailVerificationTokenAggregateArgs> = {
        [P in keyof T & keyof AggregateEmailVerificationToken]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEmailVerificationToken[P]>
      : GetScalarType<T[P], AggregateEmailVerificationToken[P]>
  }




  export type EmailVerificationTokenGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EmailVerificationTokenWhereInput
    orderBy?: EmailVerificationTokenOrderByWithAggregationInput | EmailVerificationTokenOrderByWithAggregationInput[]
    by: EmailVerificationTokenScalarFieldEnum[] | EmailVerificationTokenScalarFieldEnum
    having?: EmailVerificationTokenScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EmailVerificationTokenCountAggregateInputType | true
    _min?: EmailVerificationTokenMinAggregateInputType
    _max?: EmailVerificationTokenMaxAggregateInputType
  }

  export type EmailVerificationTokenGroupByOutputType = {
    id: string
    email: string
    token: string
    expiresAt: Date
    createdAt: Date
    _count: EmailVerificationTokenCountAggregateOutputType | null
    _min: EmailVerificationTokenMinAggregateOutputType | null
    _max: EmailVerificationTokenMaxAggregateOutputType | null
  }

  type GetEmailVerificationTokenGroupByPayload<T extends EmailVerificationTokenGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EmailVerificationTokenGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EmailVerificationTokenGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EmailVerificationTokenGroupByOutputType[P]>
            : GetScalarType<T[P], EmailVerificationTokenGroupByOutputType[P]>
        }
      >
    >


  export type EmailVerificationTokenSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    token?: boolean
    expiresAt?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["emailVerificationToken"]>

  export type EmailVerificationTokenSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    token?: boolean
    expiresAt?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["emailVerificationToken"]>

  export type EmailVerificationTokenSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    token?: boolean
    expiresAt?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["emailVerificationToken"]>

  export type EmailVerificationTokenSelectScalar = {
    id?: boolean
    email?: boolean
    token?: boolean
    expiresAt?: boolean
    createdAt?: boolean
  }

  export type EmailVerificationTokenOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "token" | "expiresAt" | "createdAt", ExtArgs["result"]["emailVerificationToken"]>

  export type $EmailVerificationTokenPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "EmailVerificationToken"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      token: string
      expiresAt: Date
      createdAt: Date
    }, ExtArgs["result"]["emailVerificationToken"]>
    composites: {}
  }

  type EmailVerificationTokenGetPayload<S extends boolean | null | undefined | EmailVerificationTokenDefaultArgs> = $Result.GetResult<Prisma.$EmailVerificationTokenPayload, S>

  type EmailVerificationTokenCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<EmailVerificationTokenFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EmailVerificationTokenCountAggregateInputType | true
    }

  export interface EmailVerificationTokenDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['EmailVerificationToken'], meta: { name: 'EmailVerificationToken' } }
    /**
     * Find zero or one EmailVerificationToken that matches the filter.
     * @param {EmailVerificationTokenFindUniqueArgs} args - Arguments to find a EmailVerificationToken
     * @example
     * // Get one EmailVerificationToken
     * const emailVerificationToken = await prisma.emailVerificationToken.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EmailVerificationTokenFindUniqueArgs>(args: SelectSubset<T, EmailVerificationTokenFindUniqueArgs<ExtArgs>>): Prisma__EmailVerificationTokenClient<$Result.GetResult<Prisma.$EmailVerificationTokenPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one EmailVerificationToken that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EmailVerificationTokenFindUniqueOrThrowArgs} args - Arguments to find a EmailVerificationToken
     * @example
     * // Get one EmailVerificationToken
     * const emailVerificationToken = await prisma.emailVerificationToken.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EmailVerificationTokenFindUniqueOrThrowArgs>(args: SelectSubset<T, EmailVerificationTokenFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EmailVerificationTokenClient<$Result.GetResult<Prisma.$EmailVerificationTokenPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first EmailVerificationToken that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmailVerificationTokenFindFirstArgs} args - Arguments to find a EmailVerificationToken
     * @example
     * // Get one EmailVerificationToken
     * const emailVerificationToken = await prisma.emailVerificationToken.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EmailVerificationTokenFindFirstArgs>(args?: SelectSubset<T, EmailVerificationTokenFindFirstArgs<ExtArgs>>): Prisma__EmailVerificationTokenClient<$Result.GetResult<Prisma.$EmailVerificationTokenPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first EmailVerificationToken that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmailVerificationTokenFindFirstOrThrowArgs} args - Arguments to find a EmailVerificationToken
     * @example
     * // Get one EmailVerificationToken
     * const emailVerificationToken = await prisma.emailVerificationToken.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EmailVerificationTokenFindFirstOrThrowArgs>(args?: SelectSubset<T, EmailVerificationTokenFindFirstOrThrowArgs<ExtArgs>>): Prisma__EmailVerificationTokenClient<$Result.GetResult<Prisma.$EmailVerificationTokenPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more EmailVerificationTokens that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmailVerificationTokenFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all EmailVerificationTokens
     * const emailVerificationTokens = await prisma.emailVerificationToken.findMany()
     * 
     * // Get first 10 EmailVerificationTokens
     * const emailVerificationTokens = await prisma.emailVerificationToken.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const emailVerificationTokenWithIdOnly = await prisma.emailVerificationToken.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends EmailVerificationTokenFindManyArgs>(args?: SelectSubset<T, EmailVerificationTokenFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EmailVerificationTokenPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a EmailVerificationToken.
     * @param {EmailVerificationTokenCreateArgs} args - Arguments to create a EmailVerificationToken.
     * @example
     * // Create one EmailVerificationToken
     * const EmailVerificationToken = await prisma.emailVerificationToken.create({
     *   data: {
     *     // ... data to create a EmailVerificationToken
     *   }
     * })
     * 
     */
    create<T extends EmailVerificationTokenCreateArgs>(args: SelectSubset<T, EmailVerificationTokenCreateArgs<ExtArgs>>): Prisma__EmailVerificationTokenClient<$Result.GetResult<Prisma.$EmailVerificationTokenPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many EmailVerificationTokens.
     * @param {EmailVerificationTokenCreateManyArgs} args - Arguments to create many EmailVerificationTokens.
     * @example
     * // Create many EmailVerificationTokens
     * const emailVerificationToken = await prisma.emailVerificationToken.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EmailVerificationTokenCreateManyArgs>(args?: SelectSubset<T, EmailVerificationTokenCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many EmailVerificationTokens and returns the data saved in the database.
     * @param {EmailVerificationTokenCreateManyAndReturnArgs} args - Arguments to create many EmailVerificationTokens.
     * @example
     * // Create many EmailVerificationTokens
     * const emailVerificationToken = await prisma.emailVerificationToken.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many EmailVerificationTokens and only return the `id`
     * const emailVerificationTokenWithIdOnly = await prisma.emailVerificationToken.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends EmailVerificationTokenCreateManyAndReturnArgs>(args?: SelectSubset<T, EmailVerificationTokenCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EmailVerificationTokenPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a EmailVerificationToken.
     * @param {EmailVerificationTokenDeleteArgs} args - Arguments to delete one EmailVerificationToken.
     * @example
     * // Delete one EmailVerificationToken
     * const EmailVerificationToken = await prisma.emailVerificationToken.delete({
     *   where: {
     *     // ... filter to delete one EmailVerificationToken
     *   }
     * })
     * 
     */
    delete<T extends EmailVerificationTokenDeleteArgs>(args: SelectSubset<T, EmailVerificationTokenDeleteArgs<ExtArgs>>): Prisma__EmailVerificationTokenClient<$Result.GetResult<Prisma.$EmailVerificationTokenPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one EmailVerificationToken.
     * @param {EmailVerificationTokenUpdateArgs} args - Arguments to update one EmailVerificationToken.
     * @example
     * // Update one EmailVerificationToken
     * const emailVerificationToken = await prisma.emailVerificationToken.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EmailVerificationTokenUpdateArgs>(args: SelectSubset<T, EmailVerificationTokenUpdateArgs<ExtArgs>>): Prisma__EmailVerificationTokenClient<$Result.GetResult<Prisma.$EmailVerificationTokenPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more EmailVerificationTokens.
     * @param {EmailVerificationTokenDeleteManyArgs} args - Arguments to filter EmailVerificationTokens to delete.
     * @example
     * // Delete a few EmailVerificationTokens
     * const { count } = await prisma.emailVerificationToken.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EmailVerificationTokenDeleteManyArgs>(args?: SelectSubset<T, EmailVerificationTokenDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more EmailVerificationTokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmailVerificationTokenUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many EmailVerificationTokens
     * const emailVerificationToken = await prisma.emailVerificationToken.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EmailVerificationTokenUpdateManyArgs>(args: SelectSubset<T, EmailVerificationTokenUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more EmailVerificationTokens and returns the data updated in the database.
     * @param {EmailVerificationTokenUpdateManyAndReturnArgs} args - Arguments to update many EmailVerificationTokens.
     * @example
     * // Update many EmailVerificationTokens
     * const emailVerificationToken = await prisma.emailVerificationToken.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more EmailVerificationTokens and only return the `id`
     * const emailVerificationTokenWithIdOnly = await prisma.emailVerificationToken.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends EmailVerificationTokenUpdateManyAndReturnArgs>(args: SelectSubset<T, EmailVerificationTokenUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EmailVerificationTokenPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one EmailVerificationToken.
     * @param {EmailVerificationTokenUpsertArgs} args - Arguments to update or create a EmailVerificationToken.
     * @example
     * // Update or create a EmailVerificationToken
     * const emailVerificationToken = await prisma.emailVerificationToken.upsert({
     *   create: {
     *     // ... data to create a EmailVerificationToken
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the EmailVerificationToken we want to update
     *   }
     * })
     */
    upsert<T extends EmailVerificationTokenUpsertArgs>(args: SelectSubset<T, EmailVerificationTokenUpsertArgs<ExtArgs>>): Prisma__EmailVerificationTokenClient<$Result.GetResult<Prisma.$EmailVerificationTokenPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of EmailVerificationTokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmailVerificationTokenCountArgs} args - Arguments to filter EmailVerificationTokens to count.
     * @example
     * // Count the number of EmailVerificationTokens
     * const count = await prisma.emailVerificationToken.count({
     *   where: {
     *     // ... the filter for the EmailVerificationTokens we want to count
     *   }
     * })
    **/
    count<T extends EmailVerificationTokenCountArgs>(
      args?: Subset<T, EmailVerificationTokenCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EmailVerificationTokenCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a EmailVerificationToken.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmailVerificationTokenAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends EmailVerificationTokenAggregateArgs>(args: Subset<T, EmailVerificationTokenAggregateArgs>): Prisma.PrismaPromise<GetEmailVerificationTokenAggregateType<T>>

    /**
     * Group by EmailVerificationToken.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmailVerificationTokenGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends EmailVerificationTokenGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EmailVerificationTokenGroupByArgs['orderBy'] }
        : { orderBy?: EmailVerificationTokenGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, EmailVerificationTokenGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEmailVerificationTokenGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the EmailVerificationToken model
   */
  readonly fields: EmailVerificationTokenFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for EmailVerificationToken.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EmailVerificationTokenClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the EmailVerificationToken model
   */
  interface EmailVerificationTokenFieldRefs {
    readonly id: FieldRef<"EmailVerificationToken", 'String'>
    readonly email: FieldRef<"EmailVerificationToken", 'String'>
    readonly token: FieldRef<"EmailVerificationToken", 'String'>
    readonly expiresAt: FieldRef<"EmailVerificationToken", 'DateTime'>
    readonly createdAt: FieldRef<"EmailVerificationToken", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * EmailVerificationToken findUnique
   */
  export type EmailVerificationTokenFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmailVerificationToken
     */
    select?: EmailVerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmailVerificationToken
     */
    omit?: EmailVerificationTokenOmit<ExtArgs> | null
    /**
     * Filter, which EmailVerificationToken to fetch.
     */
    where: EmailVerificationTokenWhereUniqueInput
  }

  /**
   * EmailVerificationToken findUniqueOrThrow
   */
  export type EmailVerificationTokenFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmailVerificationToken
     */
    select?: EmailVerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmailVerificationToken
     */
    omit?: EmailVerificationTokenOmit<ExtArgs> | null
    /**
     * Filter, which EmailVerificationToken to fetch.
     */
    where: EmailVerificationTokenWhereUniqueInput
  }

  /**
   * EmailVerificationToken findFirst
   */
  export type EmailVerificationTokenFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmailVerificationToken
     */
    select?: EmailVerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmailVerificationToken
     */
    omit?: EmailVerificationTokenOmit<ExtArgs> | null
    /**
     * Filter, which EmailVerificationToken to fetch.
     */
    where?: EmailVerificationTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EmailVerificationTokens to fetch.
     */
    orderBy?: EmailVerificationTokenOrderByWithRelationInput | EmailVerificationTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for EmailVerificationTokens.
     */
    cursor?: EmailVerificationTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EmailVerificationTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EmailVerificationTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of EmailVerificationTokens.
     */
    distinct?: EmailVerificationTokenScalarFieldEnum | EmailVerificationTokenScalarFieldEnum[]
  }

  /**
   * EmailVerificationToken findFirstOrThrow
   */
  export type EmailVerificationTokenFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmailVerificationToken
     */
    select?: EmailVerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmailVerificationToken
     */
    omit?: EmailVerificationTokenOmit<ExtArgs> | null
    /**
     * Filter, which EmailVerificationToken to fetch.
     */
    where?: EmailVerificationTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EmailVerificationTokens to fetch.
     */
    orderBy?: EmailVerificationTokenOrderByWithRelationInput | EmailVerificationTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for EmailVerificationTokens.
     */
    cursor?: EmailVerificationTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EmailVerificationTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EmailVerificationTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of EmailVerificationTokens.
     */
    distinct?: EmailVerificationTokenScalarFieldEnum | EmailVerificationTokenScalarFieldEnum[]
  }

  /**
   * EmailVerificationToken findMany
   */
  export type EmailVerificationTokenFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmailVerificationToken
     */
    select?: EmailVerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmailVerificationToken
     */
    omit?: EmailVerificationTokenOmit<ExtArgs> | null
    /**
     * Filter, which EmailVerificationTokens to fetch.
     */
    where?: EmailVerificationTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EmailVerificationTokens to fetch.
     */
    orderBy?: EmailVerificationTokenOrderByWithRelationInput | EmailVerificationTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing EmailVerificationTokens.
     */
    cursor?: EmailVerificationTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EmailVerificationTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EmailVerificationTokens.
     */
    skip?: number
    distinct?: EmailVerificationTokenScalarFieldEnum | EmailVerificationTokenScalarFieldEnum[]
  }

  /**
   * EmailVerificationToken create
   */
  export type EmailVerificationTokenCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmailVerificationToken
     */
    select?: EmailVerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmailVerificationToken
     */
    omit?: EmailVerificationTokenOmit<ExtArgs> | null
    /**
     * The data needed to create a EmailVerificationToken.
     */
    data: XOR<EmailVerificationTokenCreateInput, EmailVerificationTokenUncheckedCreateInput>
  }

  /**
   * EmailVerificationToken createMany
   */
  export type EmailVerificationTokenCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many EmailVerificationTokens.
     */
    data: EmailVerificationTokenCreateManyInput | EmailVerificationTokenCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * EmailVerificationToken createManyAndReturn
   */
  export type EmailVerificationTokenCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmailVerificationToken
     */
    select?: EmailVerificationTokenSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the EmailVerificationToken
     */
    omit?: EmailVerificationTokenOmit<ExtArgs> | null
    /**
     * The data used to create many EmailVerificationTokens.
     */
    data: EmailVerificationTokenCreateManyInput | EmailVerificationTokenCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * EmailVerificationToken update
   */
  export type EmailVerificationTokenUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmailVerificationToken
     */
    select?: EmailVerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmailVerificationToken
     */
    omit?: EmailVerificationTokenOmit<ExtArgs> | null
    /**
     * The data needed to update a EmailVerificationToken.
     */
    data: XOR<EmailVerificationTokenUpdateInput, EmailVerificationTokenUncheckedUpdateInput>
    /**
     * Choose, which EmailVerificationToken to update.
     */
    where: EmailVerificationTokenWhereUniqueInput
  }

  /**
   * EmailVerificationToken updateMany
   */
  export type EmailVerificationTokenUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update EmailVerificationTokens.
     */
    data: XOR<EmailVerificationTokenUpdateManyMutationInput, EmailVerificationTokenUncheckedUpdateManyInput>
    /**
     * Filter which EmailVerificationTokens to update
     */
    where?: EmailVerificationTokenWhereInput
    /**
     * Limit how many EmailVerificationTokens to update.
     */
    limit?: number
  }

  /**
   * EmailVerificationToken updateManyAndReturn
   */
  export type EmailVerificationTokenUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmailVerificationToken
     */
    select?: EmailVerificationTokenSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the EmailVerificationToken
     */
    omit?: EmailVerificationTokenOmit<ExtArgs> | null
    /**
     * The data used to update EmailVerificationTokens.
     */
    data: XOR<EmailVerificationTokenUpdateManyMutationInput, EmailVerificationTokenUncheckedUpdateManyInput>
    /**
     * Filter which EmailVerificationTokens to update
     */
    where?: EmailVerificationTokenWhereInput
    /**
     * Limit how many EmailVerificationTokens to update.
     */
    limit?: number
  }

  /**
   * EmailVerificationToken upsert
   */
  export type EmailVerificationTokenUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmailVerificationToken
     */
    select?: EmailVerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmailVerificationToken
     */
    omit?: EmailVerificationTokenOmit<ExtArgs> | null
    /**
     * The filter to search for the EmailVerificationToken to update in case it exists.
     */
    where: EmailVerificationTokenWhereUniqueInput
    /**
     * In case the EmailVerificationToken found by the `where` argument doesn't exist, create a new EmailVerificationToken with this data.
     */
    create: XOR<EmailVerificationTokenCreateInput, EmailVerificationTokenUncheckedCreateInput>
    /**
     * In case the EmailVerificationToken was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EmailVerificationTokenUpdateInput, EmailVerificationTokenUncheckedUpdateInput>
  }

  /**
   * EmailVerificationToken delete
   */
  export type EmailVerificationTokenDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmailVerificationToken
     */
    select?: EmailVerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmailVerificationToken
     */
    omit?: EmailVerificationTokenOmit<ExtArgs> | null
    /**
     * Filter which EmailVerificationToken to delete.
     */
    where: EmailVerificationTokenWhereUniqueInput
  }

  /**
   * EmailVerificationToken deleteMany
   */
  export type EmailVerificationTokenDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which EmailVerificationTokens to delete
     */
    where?: EmailVerificationTokenWhereInput
    /**
     * Limit how many EmailVerificationTokens to delete.
     */
    limit?: number
  }

  /**
   * EmailVerificationToken without action
   */
  export type EmailVerificationTokenDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmailVerificationToken
     */
    select?: EmailVerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmailVerificationToken
     */
    omit?: EmailVerificationTokenOmit<ExtArgs> | null
  }


  /**
   * Model Patron
   */

  export type AggregatePatron = {
    _count: PatronCountAggregateOutputType | null
    _min: PatronMinAggregateOutputType | null
    _max: PatronMaxAggregateOutputType | null
  }

  export type PatronMinAggregateOutputType = {
    id: string | null
    google_Id: string | null
    firstname: string | null
    lastname: string | null
    displayname: string | null
    address: string | null
    email: string | null
    password: string | null
    profile_img: string | null
    isEmailVerified: boolean | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type PatronMaxAggregateOutputType = {
    id: string | null
    google_Id: string | null
    firstname: string | null
    lastname: string | null
    displayname: string | null
    address: string | null
    email: string | null
    password: string | null
    profile_img: string | null
    isEmailVerified: boolean | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type PatronCountAggregateOutputType = {
    id: number
    google_Id: number
    firstname: number
    lastname: number
    displayname: number
    address: number
    email: number
    password: number
    profile_img: number
    borrowed_books: number
    isEmailVerified: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type PatronMinAggregateInputType = {
    id?: true
    google_Id?: true
    firstname?: true
    lastname?: true
    displayname?: true
    address?: true
    email?: true
    password?: true
    profile_img?: true
    isEmailVerified?: true
    created_at?: true
    updated_at?: true
  }

  export type PatronMaxAggregateInputType = {
    id?: true
    google_Id?: true
    firstname?: true
    lastname?: true
    displayname?: true
    address?: true
    email?: true
    password?: true
    profile_img?: true
    isEmailVerified?: true
    created_at?: true
    updated_at?: true
  }

  export type PatronCountAggregateInputType = {
    id?: true
    google_Id?: true
    firstname?: true
    lastname?: true
    displayname?: true
    address?: true
    email?: true
    password?: true
    profile_img?: true
    borrowed_books?: true
    isEmailVerified?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type PatronAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Patron to aggregate.
     */
    where?: PatronWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Patrons to fetch.
     */
    orderBy?: PatronOrderByWithRelationInput | PatronOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PatronWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Patrons from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Patrons.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Patrons
    **/
    _count?: true | PatronCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PatronMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PatronMaxAggregateInputType
  }

  export type GetPatronAggregateType<T extends PatronAggregateArgs> = {
        [P in keyof T & keyof AggregatePatron]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePatron[P]>
      : GetScalarType<T[P], AggregatePatron[P]>
  }




  export type PatronGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PatronWhereInput
    orderBy?: PatronOrderByWithAggregationInput | PatronOrderByWithAggregationInput[]
    by: PatronScalarFieldEnum[] | PatronScalarFieldEnum
    having?: PatronScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PatronCountAggregateInputType | true
    _min?: PatronMinAggregateInputType
    _max?: PatronMaxAggregateInputType
  }

  export type PatronGroupByOutputType = {
    id: string
    google_Id: string | null
    firstname: string
    lastname: string
    displayname: string | null
    address: string | null
    email: string
    password: string | null
    profile_img: string | null
    borrowed_books: string[]
    isEmailVerified: boolean
    created_at: Date
    updated_at: Date
    _count: PatronCountAggregateOutputType | null
    _min: PatronMinAggregateOutputType | null
    _max: PatronMaxAggregateOutputType | null
  }

  type GetPatronGroupByPayload<T extends PatronGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PatronGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PatronGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PatronGroupByOutputType[P]>
            : GetScalarType<T[P], PatronGroupByOutputType[P]>
        }
      >
    >


  export type PatronSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    google_Id?: boolean
    firstname?: boolean
    lastname?: boolean
    displayname?: boolean
    address?: boolean
    email?: boolean
    password?: boolean
    profile_img?: boolean
    borrowed_books?: boolean
    isEmailVerified?: boolean
    created_at?: boolean
    updated_at?: boolean
    book_likes?: boolean | Patron$book_likesArgs<ExtArgs>
    book_consulted?: boolean | Patron$book_consultedArgs<ExtArgs>
    circulation?: boolean | Patron$circulationArgs<ExtArgs>
    _count?: boolean | PatronCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["patron"]>

  export type PatronSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    google_Id?: boolean
    firstname?: boolean
    lastname?: boolean
    displayname?: boolean
    address?: boolean
    email?: boolean
    password?: boolean
    profile_img?: boolean
    borrowed_books?: boolean
    isEmailVerified?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["patron"]>

  export type PatronSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    google_Id?: boolean
    firstname?: boolean
    lastname?: boolean
    displayname?: boolean
    address?: boolean
    email?: boolean
    password?: boolean
    profile_img?: boolean
    borrowed_books?: boolean
    isEmailVerified?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["patron"]>

  export type PatronSelectScalar = {
    id?: boolean
    google_Id?: boolean
    firstname?: boolean
    lastname?: boolean
    displayname?: boolean
    address?: boolean
    email?: boolean
    password?: boolean
    profile_img?: boolean
    borrowed_books?: boolean
    isEmailVerified?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type PatronOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "google_Id" | "firstname" | "lastname" | "displayname" | "address" | "email" | "password" | "profile_img" | "borrowed_books" | "isEmailVerified" | "created_at" | "updated_at", ExtArgs["result"]["patron"]>
  export type PatronInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    book_likes?: boolean | Patron$book_likesArgs<ExtArgs>
    book_consulted?: boolean | Patron$book_consultedArgs<ExtArgs>
    circulation?: boolean | Patron$circulationArgs<ExtArgs>
    _count?: boolean | PatronCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type PatronIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type PatronIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $PatronPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Patron"
    objects: {
      book_likes: Prisma.$Book_likesPayload<ExtArgs>[]
      book_consulted: Prisma.$Book_consultedPayload<ExtArgs>[]
      circulation: Prisma.$CirculationPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      google_Id: string | null
      firstname: string
      lastname: string
      displayname: string | null
      address: string | null
      email: string
      password: string | null
      profile_img: string | null
      borrowed_books: string[]
      isEmailVerified: boolean
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["patron"]>
    composites: {}
  }

  type PatronGetPayload<S extends boolean | null | undefined | PatronDefaultArgs> = $Result.GetResult<Prisma.$PatronPayload, S>

  type PatronCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PatronFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PatronCountAggregateInputType | true
    }

  export interface PatronDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Patron'], meta: { name: 'Patron' } }
    /**
     * Find zero or one Patron that matches the filter.
     * @param {PatronFindUniqueArgs} args - Arguments to find a Patron
     * @example
     * // Get one Patron
     * const patron = await prisma.patron.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PatronFindUniqueArgs>(args: SelectSubset<T, PatronFindUniqueArgs<ExtArgs>>): Prisma__PatronClient<$Result.GetResult<Prisma.$PatronPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Patron that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PatronFindUniqueOrThrowArgs} args - Arguments to find a Patron
     * @example
     * // Get one Patron
     * const patron = await prisma.patron.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PatronFindUniqueOrThrowArgs>(args: SelectSubset<T, PatronFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PatronClient<$Result.GetResult<Prisma.$PatronPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Patron that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PatronFindFirstArgs} args - Arguments to find a Patron
     * @example
     * // Get one Patron
     * const patron = await prisma.patron.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PatronFindFirstArgs>(args?: SelectSubset<T, PatronFindFirstArgs<ExtArgs>>): Prisma__PatronClient<$Result.GetResult<Prisma.$PatronPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Patron that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PatronFindFirstOrThrowArgs} args - Arguments to find a Patron
     * @example
     * // Get one Patron
     * const patron = await prisma.patron.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PatronFindFirstOrThrowArgs>(args?: SelectSubset<T, PatronFindFirstOrThrowArgs<ExtArgs>>): Prisma__PatronClient<$Result.GetResult<Prisma.$PatronPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Patrons that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PatronFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Patrons
     * const patrons = await prisma.patron.findMany()
     * 
     * // Get first 10 Patrons
     * const patrons = await prisma.patron.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const patronWithIdOnly = await prisma.patron.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PatronFindManyArgs>(args?: SelectSubset<T, PatronFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PatronPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Patron.
     * @param {PatronCreateArgs} args - Arguments to create a Patron.
     * @example
     * // Create one Patron
     * const Patron = await prisma.patron.create({
     *   data: {
     *     // ... data to create a Patron
     *   }
     * })
     * 
     */
    create<T extends PatronCreateArgs>(args: SelectSubset<T, PatronCreateArgs<ExtArgs>>): Prisma__PatronClient<$Result.GetResult<Prisma.$PatronPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Patrons.
     * @param {PatronCreateManyArgs} args - Arguments to create many Patrons.
     * @example
     * // Create many Patrons
     * const patron = await prisma.patron.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PatronCreateManyArgs>(args?: SelectSubset<T, PatronCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Patrons and returns the data saved in the database.
     * @param {PatronCreateManyAndReturnArgs} args - Arguments to create many Patrons.
     * @example
     * // Create many Patrons
     * const patron = await prisma.patron.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Patrons and only return the `id`
     * const patronWithIdOnly = await prisma.patron.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PatronCreateManyAndReturnArgs>(args?: SelectSubset<T, PatronCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PatronPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Patron.
     * @param {PatronDeleteArgs} args - Arguments to delete one Patron.
     * @example
     * // Delete one Patron
     * const Patron = await prisma.patron.delete({
     *   where: {
     *     // ... filter to delete one Patron
     *   }
     * })
     * 
     */
    delete<T extends PatronDeleteArgs>(args: SelectSubset<T, PatronDeleteArgs<ExtArgs>>): Prisma__PatronClient<$Result.GetResult<Prisma.$PatronPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Patron.
     * @param {PatronUpdateArgs} args - Arguments to update one Patron.
     * @example
     * // Update one Patron
     * const patron = await prisma.patron.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PatronUpdateArgs>(args: SelectSubset<T, PatronUpdateArgs<ExtArgs>>): Prisma__PatronClient<$Result.GetResult<Prisma.$PatronPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Patrons.
     * @param {PatronDeleteManyArgs} args - Arguments to filter Patrons to delete.
     * @example
     * // Delete a few Patrons
     * const { count } = await prisma.patron.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PatronDeleteManyArgs>(args?: SelectSubset<T, PatronDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Patrons.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PatronUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Patrons
     * const patron = await prisma.patron.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PatronUpdateManyArgs>(args: SelectSubset<T, PatronUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Patrons and returns the data updated in the database.
     * @param {PatronUpdateManyAndReturnArgs} args - Arguments to update many Patrons.
     * @example
     * // Update many Patrons
     * const patron = await prisma.patron.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Patrons and only return the `id`
     * const patronWithIdOnly = await prisma.patron.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PatronUpdateManyAndReturnArgs>(args: SelectSubset<T, PatronUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PatronPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Patron.
     * @param {PatronUpsertArgs} args - Arguments to update or create a Patron.
     * @example
     * // Update or create a Patron
     * const patron = await prisma.patron.upsert({
     *   create: {
     *     // ... data to create a Patron
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Patron we want to update
     *   }
     * })
     */
    upsert<T extends PatronUpsertArgs>(args: SelectSubset<T, PatronUpsertArgs<ExtArgs>>): Prisma__PatronClient<$Result.GetResult<Prisma.$PatronPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Patrons.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PatronCountArgs} args - Arguments to filter Patrons to count.
     * @example
     * // Count the number of Patrons
     * const count = await prisma.patron.count({
     *   where: {
     *     // ... the filter for the Patrons we want to count
     *   }
     * })
    **/
    count<T extends PatronCountArgs>(
      args?: Subset<T, PatronCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PatronCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Patron.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PatronAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PatronAggregateArgs>(args: Subset<T, PatronAggregateArgs>): Prisma.PrismaPromise<GetPatronAggregateType<T>>

    /**
     * Group by Patron.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PatronGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PatronGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PatronGroupByArgs['orderBy'] }
        : { orderBy?: PatronGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PatronGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPatronGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Patron model
   */
  readonly fields: PatronFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Patron.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PatronClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    book_likes<T extends Patron$book_likesArgs<ExtArgs> = {}>(args?: Subset<T, Patron$book_likesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Book_likesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    book_consulted<T extends Patron$book_consultedArgs<ExtArgs> = {}>(args?: Subset<T, Patron$book_consultedArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Book_consultedPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    circulation<T extends Patron$circulationArgs<ExtArgs> = {}>(args?: Subset<T, Patron$circulationArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CirculationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Patron model
   */
  interface PatronFieldRefs {
    readonly id: FieldRef<"Patron", 'String'>
    readonly google_Id: FieldRef<"Patron", 'String'>
    readonly firstname: FieldRef<"Patron", 'String'>
    readonly lastname: FieldRef<"Patron", 'String'>
    readonly displayname: FieldRef<"Patron", 'String'>
    readonly address: FieldRef<"Patron", 'String'>
    readonly email: FieldRef<"Patron", 'String'>
    readonly password: FieldRef<"Patron", 'String'>
    readonly profile_img: FieldRef<"Patron", 'String'>
    readonly borrowed_books: FieldRef<"Patron", 'String[]'>
    readonly isEmailVerified: FieldRef<"Patron", 'Boolean'>
    readonly created_at: FieldRef<"Patron", 'DateTime'>
    readonly updated_at: FieldRef<"Patron", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Patron findUnique
   */
  export type PatronFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Patron
     */
    select?: PatronSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Patron
     */
    omit?: PatronOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatronInclude<ExtArgs> | null
    /**
     * Filter, which Patron to fetch.
     */
    where: PatronWhereUniqueInput
  }

  /**
   * Patron findUniqueOrThrow
   */
  export type PatronFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Patron
     */
    select?: PatronSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Patron
     */
    omit?: PatronOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatronInclude<ExtArgs> | null
    /**
     * Filter, which Patron to fetch.
     */
    where: PatronWhereUniqueInput
  }

  /**
   * Patron findFirst
   */
  export type PatronFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Patron
     */
    select?: PatronSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Patron
     */
    omit?: PatronOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatronInclude<ExtArgs> | null
    /**
     * Filter, which Patron to fetch.
     */
    where?: PatronWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Patrons to fetch.
     */
    orderBy?: PatronOrderByWithRelationInput | PatronOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Patrons.
     */
    cursor?: PatronWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Patrons from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Patrons.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Patrons.
     */
    distinct?: PatronScalarFieldEnum | PatronScalarFieldEnum[]
  }

  /**
   * Patron findFirstOrThrow
   */
  export type PatronFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Patron
     */
    select?: PatronSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Patron
     */
    omit?: PatronOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatronInclude<ExtArgs> | null
    /**
     * Filter, which Patron to fetch.
     */
    where?: PatronWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Patrons to fetch.
     */
    orderBy?: PatronOrderByWithRelationInput | PatronOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Patrons.
     */
    cursor?: PatronWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Patrons from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Patrons.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Patrons.
     */
    distinct?: PatronScalarFieldEnum | PatronScalarFieldEnum[]
  }

  /**
   * Patron findMany
   */
  export type PatronFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Patron
     */
    select?: PatronSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Patron
     */
    omit?: PatronOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatronInclude<ExtArgs> | null
    /**
     * Filter, which Patrons to fetch.
     */
    where?: PatronWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Patrons to fetch.
     */
    orderBy?: PatronOrderByWithRelationInput | PatronOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Patrons.
     */
    cursor?: PatronWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Patrons from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Patrons.
     */
    skip?: number
    distinct?: PatronScalarFieldEnum | PatronScalarFieldEnum[]
  }

  /**
   * Patron create
   */
  export type PatronCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Patron
     */
    select?: PatronSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Patron
     */
    omit?: PatronOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatronInclude<ExtArgs> | null
    /**
     * The data needed to create a Patron.
     */
    data: XOR<PatronCreateInput, PatronUncheckedCreateInput>
  }

  /**
   * Patron createMany
   */
  export type PatronCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Patrons.
     */
    data: PatronCreateManyInput | PatronCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Patron createManyAndReturn
   */
  export type PatronCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Patron
     */
    select?: PatronSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Patron
     */
    omit?: PatronOmit<ExtArgs> | null
    /**
     * The data used to create many Patrons.
     */
    data: PatronCreateManyInput | PatronCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Patron update
   */
  export type PatronUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Patron
     */
    select?: PatronSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Patron
     */
    omit?: PatronOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatronInclude<ExtArgs> | null
    /**
     * The data needed to update a Patron.
     */
    data: XOR<PatronUpdateInput, PatronUncheckedUpdateInput>
    /**
     * Choose, which Patron to update.
     */
    where: PatronWhereUniqueInput
  }

  /**
   * Patron updateMany
   */
  export type PatronUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Patrons.
     */
    data: XOR<PatronUpdateManyMutationInput, PatronUncheckedUpdateManyInput>
    /**
     * Filter which Patrons to update
     */
    where?: PatronWhereInput
    /**
     * Limit how many Patrons to update.
     */
    limit?: number
  }

  /**
   * Patron updateManyAndReturn
   */
  export type PatronUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Patron
     */
    select?: PatronSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Patron
     */
    omit?: PatronOmit<ExtArgs> | null
    /**
     * The data used to update Patrons.
     */
    data: XOR<PatronUpdateManyMutationInput, PatronUncheckedUpdateManyInput>
    /**
     * Filter which Patrons to update
     */
    where?: PatronWhereInput
    /**
     * Limit how many Patrons to update.
     */
    limit?: number
  }

  /**
   * Patron upsert
   */
  export type PatronUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Patron
     */
    select?: PatronSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Patron
     */
    omit?: PatronOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatronInclude<ExtArgs> | null
    /**
     * The filter to search for the Patron to update in case it exists.
     */
    where: PatronWhereUniqueInput
    /**
     * In case the Patron found by the `where` argument doesn't exist, create a new Patron with this data.
     */
    create: XOR<PatronCreateInput, PatronUncheckedCreateInput>
    /**
     * In case the Patron was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PatronUpdateInput, PatronUncheckedUpdateInput>
  }

  /**
   * Patron delete
   */
  export type PatronDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Patron
     */
    select?: PatronSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Patron
     */
    omit?: PatronOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatronInclude<ExtArgs> | null
    /**
     * Filter which Patron to delete.
     */
    where: PatronWhereUniqueInput
  }

  /**
   * Patron deleteMany
   */
  export type PatronDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Patrons to delete
     */
    where?: PatronWhereInput
    /**
     * Limit how many Patrons to delete.
     */
    limit?: number
  }

  /**
   * Patron.book_likes
   */
  export type Patron$book_likesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Book_likes
     */
    select?: Book_likesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Book_likes
     */
    omit?: Book_likesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Book_likesInclude<ExtArgs> | null
    where?: Book_likesWhereInput
    orderBy?: Book_likesOrderByWithRelationInput | Book_likesOrderByWithRelationInput[]
    cursor?: Book_likesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Book_likesScalarFieldEnum | Book_likesScalarFieldEnum[]
  }

  /**
   * Patron.book_consulted
   */
  export type Patron$book_consultedArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Book_consulted
     */
    select?: Book_consultedSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Book_consulted
     */
    omit?: Book_consultedOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Book_consultedInclude<ExtArgs> | null
    where?: Book_consultedWhereInput
    orderBy?: Book_consultedOrderByWithRelationInput | Book_consultedOrderByWithRelationInput[]
    cursor?: Book_consultedWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Book_consultedScalarFieldEnum | Book_consultedScalarFieldEnum[]
  }

  /**
   * Patron.circulation
   */
  export type Patron$circulationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Circulation
     */
    select?: CirculationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Circulation
     */
    omit?: CirculationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CirculationInclude<ExtArgs> | null
    where?: CirculationWhereInput
    orderBy?: CirculationOrderByWithRelationInput | CirculationOrderByWithRelationInput[]
    cursor?: CirculationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CirculationScalarFieldEnum | CirculationScalarFieldEnum[]
  }

  /**
   * Patron without action
   */
  export type PatronDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Patron
     */
    select?: PatronSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Patron
     */
    omit?: PatronOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatronInclude<ExtArgs> | null
  }


  /**
   * Model Book_likes
   */

  export type AggregateBook_likes = {
    _count: Book_likesCountAggregateOutputType | null
    _min: Book_likesMinAggregateOutputType | null
    _max: Book_likesMaxAggregateOutputType | null
  }

  export type Book_likesMinAggregateOutputType = {
    book_id: string | null
    patron_id: string | null
    liked_at: Date | null
  }

  export type Book_likesMaxAggregateOutputType = {
    book_id: string | null
    patron_id: string | null
    liked_at: Date | null
  }

  export type Book_likesCountAggregateOutputType = {
    book_id: number
    patron_id: number
    liked_at: number
    _all: number
  }


  export type Book_likesMinAggregateInputType = {
    book_id?: true
    patron_id?: true
    liked_at?: true
  }

  export type Book_likesMaxAggregateInputType = {
    book_id?: true
    patron_id?: true
    liked_at?: true
  }

  export type Book_likesCountAggregateInputType = {
    book_id?: true
    patron_id?: true
    liked_at?: true
    _all?: true
  }

  export type Book_likesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Book_likes to aggregate.
     */
    where?: Book_likesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Book_likes to fetch.
     */
    orderBy?: Book_likesOrderByWithRelationInput | Book_likesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: Book_likesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Book_likes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Book_likes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Book_likes
    **/
    _count?: true | Book_likesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Book_likesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Book_likesMaxAggregateInputType
  }

  export type GetBook_likesAggregateType<T extends Book_likesAggregateArgs> = {
        [P in keyof T & keyof AggregateBook_likes]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBook_likes[P]>
      : GetScalarType<T[P], AggregateBook_likes[P]>
  }




  export type Book_likesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Book_likesWhereInput
    orderBy?: Book_likesOrderByWithAggregationInput | Book_likesOrderByWithAggregationInput[]
    by: Book_likesScalarFieldEnum[] | Book_likesScalarFieldEnum
    having?: Book_likesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Book_likesCountAggregateInputType | true
    _min?: Book_likesMinAggregateInputType
    _max?: Book_likesMaxAggregateInputType
  }

  export type Book_likesGroupByOutputType = {
    book_id: string
    patron_id: string
    liked_at: Date
    _count: Book_likesCountAggregateOutputType | null
    _min: Book_likesMinAggregateOutputType | null
    _max: Book_likesMaxAggregateOutputType | null
  }

  type GetBook_likesGroupByPayload<T extends Book_likesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Book_likesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Book_likesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Book_likesGroupByOutputType[P]>
            : GetScalarType<T[P], Book_likesGroupByOutputType[P]>
        }
      >
    >


  export type Book_likesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    book_id?: boolean
    patron_id?: boolean
    liked_at?: boolean
    book?: boolean | BookDefaultArgs<ExtArgs>
    patron?: boolean | PatronDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["book_likes"]>

  export type Book_likesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    book_id?: boolean
    patron_id?: boolean
    liked_at?: boolean
    book?: boolean | BookDefaultArgs<ExtArgs>
    patron?: boolean | PatronDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["book_likes"]>

  export type Book_likesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    book_id?: boolean
    patron_id?: boolean
    liked_at?: boolean
    book?: boolean | BookDefaultArgs<ExtArgs>
    patron?: boolean | PatronDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["book_likes"]>

  export type Book_likesSelectScalar = {
    book_id?: boolean
    patron_id?: boolean
    liked_at?: boolean
  }

  export type Book_likesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"book_id" | "patron_id" | "liked_at", ExtArgs["result"]["book_likes"]>
  export type Book_likesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    book?: boolean | BookDefaultArgs<ExtArgs>
    patron?: boolean | PatronDefaultArgs<ExtArgs>
  }
  export type Book_likesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    book?: boolean | BookDefaultArgs<ExtArgs>
    patron?: boolean | PatronDefaultArgs<ExtArgs>
  }
  export type Book_likesIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    book?: boolean | BookDefaultArgs<ExtArgs>
    patron?: boolean | PatronDefaultArgs<ExtArgs>
  }

  export type $Book_likesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Book_likes"
    objects: {
      book: Prisma.$BookPayload<ExtArgs>
      patron: Prisma.$PatronPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      book_id: string
      patron_id: string
      liked_at: Date
    }, ExtArgs["result"]["book_likes"]>
    composites: {}
  }

  type Book_likesGetPayload<S extends boolean | null | undefined | Book_likesDefaultArgs> = $Result.GetResult<Prisma.$Book_likesPayload, S>

  type Book_likesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<Book_likesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Book_likesCountAggregateInputType | true
    }

  export interface Book_likesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Book_likes'], meta: { name: 'Book_likes' } }
    /**
     * Find zero or one Book_likes that matches the filter.
     * @param {Book_likesFindUniqueArgs} args - Arguments to find a Book_likes
     * @example
     * // Get one Book_likes
     * const book_likes = await prisma.book_likes.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends Book_likesFindUniqueArgs>(args: SelectSubset<T, Book_likesFindUniqueArgs<ExtArgs>>): Prisma__Book_likesClient<$Result.GetResult<Prisma.$Book_likesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Book_likes that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {Book_likesFindUniqueOrThrowArgs} args - Arguments to find a Book_likes
     * @example
     * // Get one Book_likes
     * const book_likes = await prisma.book_likes.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends Book_likesFindUniqueOrThrowArgs>(args: SelectSubset<T, Book_likesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__Book_likesClient<$Result.GetResult<Prisma.$Book_likesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Book_likes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Book_likesFindFirstArgs} args - Arguments to find a Book_likes
     * @example
     * // Get one Book_likes
     * const book_likes = await prisma.book_likes.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends Book_likesFindFirstArgs>(args?: SelectSubset<T, Book_likesFindFirstArgs<ExtArgs>>): Prisma__Book_likesClient<$Result.GetResult<Prisma.$Book_likesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Book_likes that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Book_likesFindFirstOrThrowArgs} args - Arguments to find a Book_likes
     * @example
     * // Get one Book_likes
     * const book_likes = await prisma.book_likes.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends Book_likesFindFirstOrThrowArgs>(args?: SelectSubset<T, Book_likesFindFirstOrThrowArgs<ExtArgs>>): Prisma__Book_likesClient<$Result.GetResult<Prisma.$Book_likesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Book_likes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Book_likesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Book_likes
     * const book_likes = await prisma.book_likes.findMany()
     * 
     * // Get first 10 Book_likes
     * const book_likes = await prisma.book_likes.findMany({ take: 10 })
     * 
     * // Only select the `book_id`
     * const book_likesWithBook_idOnly = await prisma.book_likes.findMany({ select: { book_id: true } })
     * 
     */
    findMany<T extends Book_likesFindManyArgs>(args?: SelectSubset<T, Book_likesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Book_likesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Book_likes.
     * @param {Book_likesCreateArgs} args - Arguments to create a Book_likes.
     * @example
     * // Create one Book_likes
     * const Book_likes = await prisma.book_likes.create({
     *   data: {
     *     // ... data to create a Book_likes
     *   }
     * })
     * 
     */
    create<T extends Book_likesCreateArgs>(args: SelectSubset<T, Book_likesCreateArgs<ExtArgs>>): Prisma__Book_likesClient<$Result.GetResult<Prisma.$Book_likesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Book_likes.
     * @param {Book_likesCreateManyArgs} args - Arguments to create many Book_likes.
     * @example
     * // Create many Book_likes
     * const book_likes = await prisma.book_likes.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends Book_likesCreateManyArgs>(args?: SelectSubset<T, Book_likesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Book_likes and returns the data saved in the database.
     * @param {Book_likesCreateManyAndReturnArgs} args - Arguments to create many Book_likes.
     * @example
     * // Create many Book_likes
     * const book_likes = await prisma.book_likes.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Book_likes and only return the `book_id`
     * const book_likesWithBook_idOnly = await prisma.book_likes.createManyAndReturn({
     *   select: { book_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends Book_likesCreateManyAndReturnArgs>(args?: SelectSubset<T, Book_likesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Book_likesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Book_likes.
     * @param {Book_likesDeleteArgs} args - Arguments to delete one Book_likes.
     * @example
     * // Delete one Book_likes
     * const Book_likes = await prisma.book_likes.delete({
     *   where: {
     *     // ... filter to delete one Book_likes
     *   }
     * })
     * 
     */
    delete<T extends Book_likesDeleteArgs>(args: SelectSubset<T, Book_likesDeleteArgs<ExtArgs>>): Prisma__Book_likesClient<$Result.GetResult<Prisma.$Book_likesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Book_likes.
     * @param {Book_likesUpdateArgs} args - Arguments to update one Book_likes.
     * @example
     * // Update one Book_likes
     * const book_likes = await prisma.book_likes.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends Book_likesUpdateArgs>(args: SelectSubset<T, Book_likesUpdateArgs<ExtArgs>>): Prisma__Book_likesClient<$Result.GetResult<Prisma.$Book_likesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Book_likes.
     * @param {Book_likesDeleteManyArgs} args - Arguments to filter Book_likes to delete.
     * @example
     * // Delete a few Book_likes
     * const { count } = await prisma.book_likes.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends Book_likesDeleteManyArgs>(args?: SelectSubset<T, Book_likesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Book_likes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Book_likesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Book_likes
     * const book_likes = await prisma.book_likes.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends Book_likesUpdateManyArgs>(args: SelectSubset<T, Book_likesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Book_likes and returns the data updated in the database.
     * @param {Book_likesUpdateManyAndReturnArgs} args - Arguments to update many Book_likes.
     * @example
     * // Update many Book_likes
     * const book_likes = await prisma.book_likes.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Book_likes and only return the `book_id`
     * const book_likesWithBook_idOnly = await prisma.book_likes.updateManyAndReturn({
     *   select: { book_id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends Book_likesUpdateManyAndReturnArgs>(args: SelectSubset<T, Book_likesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Book_likesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Book_likes.
     * @param {Book_likesUpsertArgs} args - Arguments to update or create a Book_likes.
     * @example
     * // Update or create a Book_likes
     * const book_likes = await prisma.book_likes.upsert({
     *   create: {
     *     // ... data to create a Book_likes
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Book_likes we want to update
     *   }
     * })
     */
    upsert<T extends Book_likesUpsertArgs>(args: SelectSubset<T, Book_likesUpsertArgs<ExtArgs>>): Prisma__Book_likesClient<$Result.GetResult<Prisma.$Book_likesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Book_likes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Book_likesCountArgs} args - Arguments to filter Book_likes to count.
     * @example
     * // Count the number of Book_likes
     * const count = await prisma.book_likes.count({
     *   where: {
     *     // ... the filter for the Book_likes we want to count
     *   }
     * })
    **/
    count<T extends Book_likesCountArgs>(
      args?: Subset<T, Book_likesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Book_likesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Book_likes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Book_likesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Book_likesAggregateArgs>(args: Subset<T, Book_likesAggregateArgs>): Prisma.PrismaPromise<GetBook_likesAggregateType<T>>

    /**
     * Group by Book_likes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Book_likesGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends Book_likesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: Book_likesGroupByArgs['orderBy'] }
        : { orderBy?: Book_likesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, Book_likesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBook_likesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Book_likes model
   */
  readonly fields: Book_likesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Book_likes.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__Book_likesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    book<T extends BookDefaultArgs<ExtArgs> = {}>(args?: Subset<T, BookDefaultArgs<ExtArgs>>): Prisma__BookClient<$Result.GetResult<Prisma.$BookPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    patron<T extends PatronDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PatronDefaultArgs<ExtArgs>>): Prisma__PatronClient<$Result.GetResult<Prisma.$PatronPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Book_likes model
   */
  interface Book_likesFieldRefs {
    readonly book_id: FieldRef<"Book_likes", 'String'>
    readonly patron_id: FieldRef<"Book_likes", 'String'>
    readonly liked_at: FieldRef<"Book_likes", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Book_likes findUnique
   */
  export type Book_likesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Book_likes
     */
    select?: Book_likesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Book_likes
     */
    omit?: Book_likesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Book_likesInclude<ExtArgs> | null
    /**
     * Filter, which Book_likes to fetch.
     */
    where: Book_likesWhereUniqueInput
  }

  /**
   * Book_likes findUniqueOrThrow
   */
  export type Book_likesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Book_likes
     */
    select?: Book_likesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Book_likes
     */
    omit?: Book_likesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Book_likesInclude<ExtArgs> | null
    /**
     * Filter, which Book_likes to fetch.
     */
    where: Book_likesWhereUniqueInput
  }

  /**
   * Book_likes findFirst
   */
  export type Book_likesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Book_likes
     */
    select?: Book_likesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Book_likes
     */
    omit?: Book_likesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Book_likesInclude<ExtArgs> | null
    /**
     * Filter, which Book_likes to fetch.
     */
    where?: Book_likesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Book_likes to fetch.
     */
    orderBy?: Book_likesOrderByWithRelationInput | Book_likesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Book_likes.
     */
    cursor?: Book_likesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Book_likes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Book_likes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Book_likes.
     */
    distinct?: Book_likesScalarFieldEnum | Book_likesScalarFieldEnum[]
  }

  /**
   * Book_likes findFirstOrThrow
   */
  export type Book_likesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Book_likes
     */
    select?: Book_likesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Book_likes
     */
    omit?: Book_likesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Book_likesInclude<ExtArgs> | null
    /**
     * Filter, which Book_likes to fetch.
     */
    where?: Book_likesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Book_likes to fetch.
     */
    orderBy?: Book_likesOrderByWithRelationInput | Book_likesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Book_likes.
     */
    cursor?: Book_likesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Book_likes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Book_likes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Book_likes.
     */
    distinct?: Book_likesScalarFieldEnum | Book_likesScalarFieldEnum[]
  }

  /**
   * Book_likes findMany
   */
  export type Book_likesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Book_likes
     */
    select?: Book_likesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Book_likes
     */
    omit?: Book_likesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Book_likesInclude<ExtArgs> | null
    /**
     * Filter, which Book_likes to fetch.
     */
    where?: Book_likesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Book_likes to fetch.
     */
    orderBy?: Book_likesOrderByWithRelationInput | Book_likesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Book_likes.
     */
    cursor?: Book_likesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Book_likes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Book_likes.
     */
    skip?: number
    distinct?: Book_likesScalarFieldEnum | Book_likesScalarFieldEnum[]
  }

  /**
   * Book_likes create
   */
  export type Book_likesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Book_likes
     */
    select?: Book_likesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Book_likes
     */
    omit?: Book_likesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Book_likesInclude<ExtArgs> | null
    /**
     * The data needed to create a Book_likes.
     */
    data: XOR<Book_likesCreateInput, Book_likesUncheckedCreateInput>
  }

  /**
   * Book_likes createMany
   */
  export type Book_likesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Book_likes.
     */
    data: Book_likesCreateManyInput | Book_likesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Book_likes createManyAndReturn
   */
  export type Book_likesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Book_likes
     */
    select?: Book_likesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Book_likes
     */
    omit?: Book_likesOmit<ExtArgs> | null
    /**
     * The data used to create many Book_likes.
     */
    data: Book_likesCreateManyInput | Book_likesCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Book_likesIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Book_likes update
   */
  export type Book_likesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Book_likes
     */
    select?: Book_likesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Book_likes
     */
    omit?: Book_likesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Book_likesInclude<ExtArgs> | null
    /**
     * The data needed to update a Book_likes.
     */
    data: XOR<Book_likesUpdateInput, Book_likesUncheckedUpdateInput>
    /**
     * Choose, which Book_likes to update.
     */
    where: Book_likesWhereUniqueInput
  }

  /**
   * Book_likes updateMany
   */
  export type Book_likesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Book_likes.
     */
    data: XOR<Book_likesUpdateManyMutationInput, Book_likesUncheckedUpdateManyInput>
    /**
     * Filter which Book_likes to update
     */
    where?: Book_likesWhereInput
    /**
     * Limit how many Book_likes to update.
     */
    limit?: number
  }

  /**
   * Book_likes updateManyAndReturn
   */
  export type Book_likesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Book_likes
     */
    select?: Book_likesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Book_likes
     */
    omit?: Book_likesOmit<ExtArgs> | null
    /**
     * The data used to update Book_likes.
     */
    data: XOR<Book_likesUpdateManyMutationInput, Book_likesUncheckedUpdateManyInput>
    /**
     * Filter which Book_likes to update
     */
    where?: Book_likesWhereInput
    /**
     * Limit how many Book_likes to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Book_likesIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Book_likes upsert
   */
  export type Book_likesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Book_likes
     */
    select?: Book_likesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Book_likes
     */
    omit?: Book_likesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Book_likesInclude<ExtArgs> | null
    /**
     * The filter to search for the Book_likes to update in case it exists.
     */
    where: Book_likesWhereUniqueInput
    /**
     * In case the Book_likes found by the `where` argument doesn't exist, create a new Book_likes with this data.
     */
    create: XOR<Book_likesCreateInput, Book_likesUncheckedCreateInput>
    /**
     * In case the Book_likes was found with the provided `where` argument, update it with this data.
     */
    update: XOR<Book_likesUpdateInput, Book_likesUncheckedUpdateInput>
  }

  /**
   * Book_likes delete
   */
  export type Book_likesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Book_likes
     */
    select?: Book_likesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Book_likes
     */
    omit?: Book_likesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Book_likesInclude<ExtArgs> | null
    /**
     * Filter which Book_likes to delete.
     */
    where: Book_likesWhereUniqueInput
  }

  /**
   * Book_likes deleteMany
   */
  export type Book_likesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Book_likes to delete
     */
    where?: Book_likesWhereInput
    /**
     * Limit how many Book_likes to delete.
     */
    limit?: number
  }

  /**
   * Book_likes without action
   */
  export type Book_likesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Book_likes
     */
    select?: Book_likesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Book_likes
     */
    omit?: Book_likesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Book_likesInclude<ExtArgs> | null
  }


  /**
   * Model Book_consulted
   */

  export type AggregateBook_consulted = {
    _count: Book_consultedCountAggregateOutputType | null
    _min: Book_consultedMinAggregateOutputType | null
    _max: Book_consultedMaxAggregateOutputType | null
  }

  export type Book_consultedMinAggregateOutputType = {
    book_id: string | null
    patron_id: string | null
    consulted_at: Date | null
  }

  export type Book_consultedMaxAggregateOutputType = {
    book_id: string | null
    patron_id: string | null
    consulted_at: Date | null
  }

  export type Book_consultedCountAggregateOutputType = {
    book_id: number
    patron_id: number
    consulted_at: number
    _all: number
  }


  export type Book_consultedMinAggregateInputType = {
    book_id?: true
    patron_id?: true
    consulted_at?: true
  }

  export type Book_consultedMaxAggregateInputType = {
    book_id?: true
    patron_id?: true
    consulted_at?: true
  }

  export type Book_consultedCountAggregateInputType = {
    book_id?: true
    patron_id?: true
    consulted_at?: true
    _all?: true
  }

  export type Book_consultedAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Book_consulted to aggregate.
     */
    where?: Book_consultedWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Book_consulteds to fetch.
     */
    orderBy?: Book_consultedOrderByWithRelationInput | Book_consultedOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: Book_consultedWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Book_consulteds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Book_consulteds.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Book_consulteds
    **/
    _count?: true | Book_consultedCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Book_consultedMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Book_consultedMaxAggregateInputType
  }

  export type GetBook_consultedAggregateType<T extends Book_consultedAggregateArgs> = {
        [P in keyof T & keyof AggregateBook_consulted]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBook_consulted[P]>
      : GetScalarType<T[P], AggregateBook_consulted[P]>
  }




  export type Book_consultedGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Book_consultedWhereInput
    orderBy?: Book_consultedOrderByWithAggregationInput | Book_consultedOrderByWithAggregationInput[]
    by: Book_consultedScalarFieldEnum[] | Book_consultedScalarFieldEnum
    having?: Book_consultedScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Book_consultedCountAggregateInputType | true
    _min?: Book_consultedMinAggregateInputType
    _max?: Book_consultedMaxAggregateInputType
  }

  export type Book_consultedGroupByOutputType = {
    book_id: string
    patron_id: string
    consulted_at: Date
    _count: Book_consultedCountAggregateOutputType | null
    _min: Book_consultedMinAggregateOutputType | null
    _max: Book_consultedMaxAggregateOutputType | null
  }

  type GetBook_consultedGroupByPayload<T extends Book_consultedGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Book_consultedGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Book_consultedGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Book_consultedGroupByOutputType[P]>
            : GetScalarType<T[P], Book_consultedGroupByOutputType[P]>
        }
      >
    >


  export type Book_consultedSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    book_id?: boolean
    patron_id?: boolean
    consulted_at?: boolean
    book?: boolean | BookDefaultArgs<ExtArgs>
    patron?: boolean | PatronDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["book_consulted"]>

  export type Book_consultedSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    book_id?: boolean
    patron_id?: boolean
    consulted_at?: boolean
    book?: boolean | BookDefaultArgs<ExtArgs>
    patron?: boolean | PatronDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["book_consulted"]>

  export type Book_consultedSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    book_id?: boolean
    patron_id?: boolean
    consulted_at?: boolean
    book?: boolean | BookDefaultArgs<ExtArgs>
    patron?: boolean | PatronDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["book_consulted"]>

  export type Book_consultedSelectScalar = {
    book_id?: boolean
    patron_id?: boolean
    consulted_at?: boolean
  }

  export type Book_consultedOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"book_id" | "patron_id" | "consulted_at", ExtArgs["result"]["book_consulted"]>
  export type Book_consultedInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    book?: boolean | BookDefaultArgs<ExtArgs>
    patron?: boolean | PatronDefaultArgs<ExtArgs>
  }
  export type Book_consultedIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    book?: boolean | BookDefaultArgs<ExtArgs>
    patron?: boolean | PatronDefaultArgs<ExtArgs>
  }
  export type Book_consultedIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    book?: boolean | BookDefaultArgs<ExtArgs>
    patron?: boolean | PatronDefaultArgs<ExtArgs>
  }

  export type $Book_consultedPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Book_consulted"
    objects: {
      book: Prisma.$BookPayload<ExtArgs>
      patron: Prisma.$PatronPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      book_id: string
      patron_id: string
      consulted_at: Date
    }, ExtArgs["result"]["book_consulted"]>
    composites: {}
  }

  type Book_consultedGetPayload<S extends boolean | null | undefined | Book_consultedDefaultArgs> = $Result.GetResult<Prisma.$Book_consultedPayload, S>

  type Book_consultedCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<Book_consultedFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Book_consultedCountAggregateInputType | true
    }

  export interface Book_consultedDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Book_consulted'], meta: { name: 'Book_consulted' } }
    /**
     * Find zero or one Book_consulted that matches the filter.
     * @param {Book_consultedFindUniqueArgs} args - Arguments to find a Book_consulted
     * @example
     * // Get one Book_consulted
     * const book_consulted = await prisma.book_consulted.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends Book_consultedFindUniqueArgs>(args: SelectSubset<T, Book_consultedFindUniqueArgs<ExtArgs>>): Prisma__Book_consultedClient<$Result.GetResult<Prisma.$Book_consultedPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Book_consulted that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {Book_consultedFindUniqueOrThrowArgs} args - Arguments to find a Book_consulted
     * @example
     * // Get one Book_consulted
     * const book_consulted = await prisma.book_consulted.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends Book_consultedFindUniqueOrThrowArgs>(args: SelectSubset<T, Book_consultedFindUniqueOrThrowArgs<ExtArgs>>): Prisma__Book_consultedClient<$Result.GetResult<Prisma.$Book_consultedPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Book_consulted that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Book_consultedFindFirstArgs} args - Arguments to find a Book_consulted
     * @example
     * // Get one Book_consulted
     * const book_consulted = await prisma.book_consulted.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends Book_consultedFindFirstArgs>(args?: SelectSubset<T, Book_consultedFindFirstArgs<ExtArgs>>): Prisma__Book_consultedClient<$Result.GetResult<Prisma.$Book_consultedPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Book_consulted that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Book_consultedFindFirstOrThrowArgs} args - Arguments to find a Book_consulted
     * @example
     * // Get one Book_consulted
     * const book_consulted = await prisma.book_consulted.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends Book_consultedFindFirstOrThrowArgs>(args?: SelectSubset<T, Book_consultedFindFirstOrThrowArgs<ExtArgs>>): Prisma__Book_consultedClient<$Result.GetResult<Prisma.$Book_consultedPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Book_consulteds that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Book_consultedFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Book_consulteds
     * const book_consulteds = await prisma.book_consulted.findMany()
     * 
     * // Get first 10 Book_consulteds
     * const book_consulteds = await prisma.book_consulted.findMany({ take: 10 })
     * 
     * // Only select the `book_id`
     * const book_consultedWithBook_idOnly = await prisma.book_consulted.findMany({ select: { book_id: true } })
     * 
     */
    findMany<T extends Book_consultedFindManyArgs>(args?: SelectSubset<T, Book_consultedFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Book_consultedPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Book_consulted.
     * @param {Book_consultedCreateArgs} args - Arguments to create a Book_consulted.
     * @example
     * // Create one Book_consulted
     * const Book_consulted = await prisma.book_consulted.create({
     *   data: {
     *     // ... data to create a Book_consulted
     *   }
     * })
     * 
     */
    create<T extends Book_consultedCreateArgs>(args: SelectSubset<T, Book_consultedCreateArgs<ExtArgs>>): Prisma__Book_consultedClient<$Result.GetResult<Prisma.$Book_consultedPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Book_consulteds.
     * @param {Book_consultedCreateManyArgs} args - Arguments to create many Book_consulteds.
     * @example
     * // Create many Book_consulteds
     * const book_consulted = await prisma.book_consulted.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends Book_consultedCreateManyArgs>(args?: SelectSubset<T, Book_consultedCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Book_consulteds and returns the data saved in the database.
     * @param {Book_consultedCreateManyAndReturnArgs} args - Arguments to create many Book_consulteds.
     * @example
     * // Create many Book_consulteds
     * const book_consulted = await prisma.book_consulted.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Book_consulteds and only return the `book_id`
     * const book_consultedWithBook_idOnly = await prisma.book_consulted.createManyAndReturn({
     *   select: { book_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends Book_consultedCreateManyAndReturnArgs>(args?: SelectSubset<T, Book_consultedCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Book_consultedPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Book_consulted.
     * @param {Book_consultedDeleteArgs} args - Arguments to delete one Book_consulted.
     * @example
     * // Delete one Book_consulted
     * const Book_consulted = await prisma.book_consulted.delete({
     *   where: {
     *     // ... filter to delete one Book_consulted
     *   }
     * })
     * 
     */
    delete<T extends Book_consultedDeleteArgs>(args: SelectSubset<T, Book_consultedDeleteArgs<ExtArgs>>): Prisma__Book_consultedClient<$Result.GetResult<Prisma.$Book_consultedPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Book_consulted.
     * @param {Book_consultedUpdateArgs} args - Arguments to update one Book_consulted.
     * @example
     * // Update one Book_consulted
     * const book_consulted = await prisma.book_consulted.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends Book_consultedUpdateArgs>(args: SelectSubset<T, Book_consultedUpdateArgs<ExtArgs>>): Prisma__Book_consultedClient<$Result.GetResult<Prisma.$Book_consultedPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Book_consulteds.
     * @param {Book_consultedDeleteManyArgs} args - Arguments to filter Book_consulteds to delete.
     * @example
     * // Delete a few Book_consulteds
     * const { count } = await prisma.book_consulted.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends Book_consultedDeleteManyArgs>(args?: SelectSubset<T, Book_consultedDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Book_consulteds.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Book_consultedUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Book_consulteds
     * const book_consulted = await prisma.book_consulted.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends Book_consultedUpdateManyArgs>(args: SelectSubset<T, Book_consultedUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Book_consulteds and returns the data updated in the database.
     * @param {Book_consultedUpdateManyAndReturnArgs} args - Arguments to update many Book_consulteds.
     * @example
     * // Update many Book_consulteds
     * const book_consulted = await prisma.book_consulted.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Book_consulteds and only return the `book_id`
     * const book_consultedWithBook_idOnly = await prisma.book_consulted.updateManyAndReturn({
     *   select: { book_id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends Book_consultedUpdateManyAndReturnArgs>(args: SelectSubset<T, Book_consultedUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Book_consultedPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Book_consulted.
     * @param {Book_consultedUpsertArgs} args - Arguments to update or create a Book_consulted.
     * @example
     * // Update or create a Book_consulted
     * const book_consulted = await prisma.book_consulted.upsert({
     *   create: {
     *     // ... data to create a Book_consulted
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Book_consulted we want to update
     *   }
     * })
     */
    upsert<T extends Book_consultedUpsertArgs>(args: SelectSubset<T, Book_consultedUpsertArgs<ExtArgs>>): Prisma__Book_consultedClient<$Result.GetResult<Prisma.$Book_consultedPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Book_consulteds.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Book_consultedCountArgs} args - Arguments to filter Book_consulteds to count.
     * @example
     * // Count the number of Book_consulteds
     * const count = await prisma.book_consulted.count({
     *   where: {
     *     // ... the filter for the Book_consulteds we want to count
     *   }
     * })
    **/
    count<T extends Book_consultedCountArgs>(
      args?: Subset<T, Book_consultedCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Book_consultedCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Book_consulted.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Book_consultedAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Book_consultedAggregateArgs>(args: Subset<T, Book_consultedAggregateArgs>): Prisma.PrismaPromise<GetBook_consultedAggregateType<T>>

    /**
     * Group by Book_consulted.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Book_consultedGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends Book_consultedGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: Book_consultedGroupByArgs['orderBy'] }
        : { orderBy?: Book_consultedGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, Book_consultedGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBook_consultedGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Book_consulted model
   */
  readonly fields: Book_consultedFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Book_consulted.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__Book_consultedClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    book<T extends BookDefaultArgs<ExtArgs> = {}>(args?: Subset<T, BookDefaultArgs<ExtArgs>>): Prisma__BookClient<$Result.GetResult<Prisma.$BookPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    patron<T extends PatronDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PatronDefaultArgs<ExtArgs>>): Prisma__PatronClient<$Result.GetResult<Prisma.$PatronPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Book_consulted model
   */
  interface Book_consultedFieldRefs {
    readonly book_id: FieldRef<"Book_consulted", 'String'>
    readonly patron_id: FieldRef<"Book_consulted", 'String'>
    readonly consulted_at: FieldRef<"Book_consulted", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Book_consulted findUnique
   */
  export type Book_consultedFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Book_consulted
     */
    select?: Book_consultedSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Book_consulted
     */
    omit?: Book_consultedOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Book_consultedInclude<ExtArgs> | null
    /**
     * Filter, which Book_consulted to fetch.
     */
    where: Book_consultedWhereUniqueInput
  }

  /**
   * Book_consulted findUniqueOrThrow
   */
  export type Book_consultedFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Book_consulted
     */
    select?: Book_consultedSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Book_consulted
     */
    omit?: Book_consultedOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Book_consultedInclude<ExtArgs> | null
    /**
     * Filter, which Book_consulted to fetch.
     */
    where: Book_consultedWhereUniqueInput
  }

  /**
   * Book_consulted findFirst
   */
  export type Book_consultedFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Book_consulted
     */
    select?: Book_consultedSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Book_consulted
     */
    omit?: Book_consultedOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Book_consultedInclude<ExtArgs> | null
    /**
     * Filter, which Book_consulted to fetch.
     */
    where?: Book_consultedWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Book_consulteds to fetch.
     */
    orderBy?: Book_consultedOrderByWithRelationInput | Book_consultedOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Book_consulteds.
     */
    cursor?: Book_consultedWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Book_consulteds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Book_consulteds.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Book_consulteds.
     */
    distinct?: Book_consultedScalarFieldEnum | Book_consultedScalarFieldEnum[]
  }

  /**
   * Book_consulted findFirstOrThrow
   */
  export type Book_consultedFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Book_consulted
     */
    select?: Book_consultedSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Book_consulted
     */
    omit?: Book_consultedOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Book_consultedInclude<ExtArgs> | null
    /**
     * Filter, which Book_consulted to fetch.
     */
    where?: Book_consultedWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Book_consulteds to fetch.
     */
    orderBy?: Book_consultedOrderByWithRelationInput | Book_consultedOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Book_consulteds.
     */
    cursor?: Book_consultedWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Book_consulteds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Book_consulteds.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Book_consulteds.
     */
    distinct?: Book_consultedScalarFieldEnum | Book_consultedScalarFieldEnum[]
  }

  /**
   * Book_consulted findMany
   */
  export type Book_consultedFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Book_consulted
     */
    select?: Book_consultedSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Book_consulted
     */
    omit?: Book_consultedOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Book_consultedInclude<ExtArgs> | null
    /**
     * Filter, which Book_consulteds to fetch.
     */
    where?: Book_consultedWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Book_consulteds to fetch.
     */
    orderBy?: Book_consultedOrderByWithRelationInput | Book_consultedOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Book_consulteds.
     */
    cursor?: Book_consultedWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Book_consulteds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Book_consulteds.
     */
    skip?: number
    distinct?: Book_consultedScalarFieldEnum | Book_consultedScalarFieldEnum[]
  }

  /**
   * Book_consulted create
   */
  export type Book_consultedCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Book_consulted
     */
    select?: Book_consultedSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Book_consulted
     */
    omit?: Book_consultedOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Book_consultedInclude<ExtArgs> | null
    /**
     * The data needed to create a Book_consulted.
     */
    data: XOR<Book_consultedCreateInput, Book_consultedUncheckedCreateInput>
  }

  /**
   * Book_consulted createMany
   */
  export type Book_consultedCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Book_consulteds.
     */
    data: Book_consultedCreateManyInput | Book_consultedCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Book_consulted createManyAndReturn
   */
  export type Book_consultedCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Book_consulted
     */
    select?: Book_consultedSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Book_consulted
     */
    omit?: Book_consultedOmit<ExtArgs> | null
    /**
     * The data used to create many Book_consulteds.
     */
    data: Book_consultedCreateManyInput | Book_consultedCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Book_consultedIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Book_consulted update
   */
  export type Book_consultedUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Book_consulted
     */
    select?: Book_consultedSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Book_consulted
     */
    omit?: Book_consultedOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Book_consultedInclude<ExtArgs> | null
    /**
     * The data needed to update a Book_consulted.
     */
    data: XOR<Book_consultedUpdateInput, Book_consultedUncheckedUpdateInput>
    /**
     * Choose, which Book_consulted to update.
     */
    where: Book_consultedWhereUniqueInput
  }

  /**
   * Book_consulted updateMany
   */
  export type Book_consultedUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Book_consulteds.
     */
    data: XOR<Book_consultedUpdateManyMutationInput, Book_consultedUncheckedUpdateManyInput>
    /**
     * Filter which Book_consulteds to update
     */
    where?: Book_consultedWhereInput
    /**
     * Limit how many Book_consulteds to update.
     */
    limit?: number
  }

  /**
   * Book_consulted updateManyAndReturn
   */
  export type Book_consultedUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Book_consulted
     */
    select?: Book_consultedSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Book_consulted
     */
    omit?: Book_consultedOmit<ExtArgs> | null
    /**
     * The data used to update Book_consulteds.
     */
    data: XOR<Book_consultedUpdateManyMutationInput, Book_consultedUncheckedUpdateManyInput>
    /**
     * Filter which Book_consulteds to update
     */
    where?: Book_consultedWhereInput
    /**
     * Limit how many Book_consulteds to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Book_consultedIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Book_consulted upsert
   */
  export type Book_consultedUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Book_consulted
     */
    select?: Book_consultedSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Book_consulted
     */
    omit?: Book_consultedOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Book_consultedInclude<ExtArgs> | null
    /**
     * The filter to search for the Book_consulted to update in case it exists.
     */
    where: Book_consultedWhereUniqueInput
    /**
     * In case the Book_consulted found by the `where` argument doesn't exist, create a new Book_consulted with this data.
     */
    create: XOR<Book_consultedCreateInput, Book_consultedUncheckedCreateInput>
    /**
     * In case the Book_consulted was found with the provided `where` argument, update it with this data.
     */
    update: XOR<Book_consultedUpdateInput, Book_consultedUncheckedUpdateInput>
  }

  /**
   * Book_consulted delete
   */
  export type Book_consultedDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Book_consulted
     */
    select?: Book_consultedSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Book_consulted
     */
    omit?: Book_consultedOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Book_consultedInclude<ExtArgs> | null
    /**
     * Filter which Book_consulted to delete.
     */
    where: Book_consultedWhereUniqueInput
  }

  /**
   * Book_consulted deleteMany
   */
  export type Book_consultedDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Book_consulteds to delete
     */
    where?: Book_consultedWhereInput
    /**
     * Limit how many Book_consulteds to delete.
     */
    limit?: number
  }

  /**
   * Book_consulted without action
   */
  export type Book_consultedDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Book_consulted
     */
    select?: Book_consultedSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Book_consulted
     */
    omit?: Book_consultedOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Book_consultedInclude<ExtArgs> | null
  }


  /**
   * Model Circulation
   */

  export type AggregateCirculation = {
    _count: CirculationCountAggregateOutputType | null
    _min: CirculationMinAggregateOutputType | null
    _max: CirculationMaxAggregateOutputType | null
  }

  export type CirculationMinAggregateOutputType = {
    book_id: string | null
    patron_id: string | null
    checkout: Date | null
    date_due: Date | null
  }

  export type CirculationMaxAggregateOutputType = {
    book_id: string | null
    patron_id: string | null
    checkout: Date | null
    date_due: Date | null
  }

  export type CirculationCountAggregateOutputType = {
    book_id: number
    patron_id: number
    checkout: number
    date_due: number
    _all: number
  }


  export type CirculationMinAggregateInputType = {
    book_id?: true
    patron_id?: true
    checkout?: true
    date_due?: true
  }

  export type CirculationMaxAggregateInputType = {
    book_id?: true
    patron_id?: true
    checkout?: true
    date_due?: true
  }

  export type CirculationCountAggregateInputType = {
    book_id?: true
    patron_id?: true
    checkout?: true
    date_due?: true
    _all?: true
  }

  export type CirculationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Circulation to aggregate.
     */
    where?: CirculationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Circulations to fetch.
     */
    orderBy?: CirculationOrderByWithRelationInput | CirculationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CirculationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Circulations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Circulations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Circulations
    **/
    _count?: true | CirculationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CirculationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CirculationMaxAggregateInputType
  }

  export type GetCirculationAggregateType<T extends CirculationAggregateArgs> = {
        [P in keyof T & keyof AggregateCirculation]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCirculation[P]>
      : GetScalarType<T[P], AggregateCirculation[P]>
  }




  export type CirculationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CirculationWhereInput
    orderBy?: CirculationOrderByWithAggregationInput | CirculationOrderByWithAggregationInput[]
    by: CirculationScalarFieldEnum[] | CirculationScalarFieldEnum
    having?: CirculationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CirculationCountAggregateInputType | true
    _min?: CirculationMinAggregateInputType
    _max?: CirculationMaxAggregateInputType
  }

  export type CirculationGroupByOutputType = {
    book_id: string
    patron_id: string
    checkout: Date
    date_due: Date
    _count: CirculationCountAggregateOutputType | null
    _min: CirculationMinAggregateOutputType | null
    _max: CirculationMaxAggregateOutputType | null
  }

  type GetCirculationGroupByPayload<T extends CirculationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CirculationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CirculationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CirculationGroupByOutputType[P]>
            : GetScalarType<T[P], CirculationGroupByOutputType[P]>
        }
      >
    >


  export type CirculationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    book_id?: boolean
    patron_id?: boolean
    checkout?: boolean
    date_due?: boolean
    book?: boolean | BookDefaultArgs<ExtArgs>
    patron?: boolean | PatronDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["circulation"]>

  export type CirculationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    book_id?: boolean
    patron_id?: boolean
    checkout?: boolean
    date_due?: boolean
    book?: boolean | BookDefaultArgs<ExtArgs>
    patron?: boolean | PatronDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["circulation"]>

  export type CirculationSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    book_id?: boolean
    patron_id?: boolean
    checkout?: boolean
    date_due?: boolean
    book?: boolean | BookDefaultArgs<ExtArgs>
    patron?: boolean | PatronDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["circulation"]>

  export type CirculationSelectScalar = {
    book_id?: boolean
    patron_id?: boolean
    checkout?: boolean
    date_due?: boolean
  }

  export type CirculationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"book_id" | "patron_id" | "checkout" | "date_due", ExtArgs["result"]["circulation"]>
  export type CirculationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    book?: boolean | BookDefaultArgs<ExtArgs>
    patron?: boolean | PatronDefaultArgs<ExtArgs>
  }
  export type CirculationIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    book?: boolean | BookDefaultArgs<ExtArgs>
    patron?: boolean | PatronDefaultArgs<ExtArgs>
  }
  export type CirculationIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    book?: boolean | BookDefaultArgs<ExtArgs>
    patron?: boolean | PatronDefaultArgs<ExtArgs>
  }

  export type $CirculationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Circulation"
    objects: {
      book: Prisma.$BookPayload<ExtArgs>
      patron: Prisma.$PatronPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      book_id: string
      patron_id: string
      checkout: Date
      date_due: Date
    }, ExtArgs["result"]["circulation"]>
    composites: {}
  }

  type CirculationGetPayload<S extends boolean | null | undefined | CirculationDefaultArgs> = $Result.GetResult<Prisma.$CirculationPayload, S>

  type CirculationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CirculationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CirculationCountAggregateInputType | true
    }

  export interface CirculationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Circulation'], meta: { name: 'Circulation' } }
    /**
     * Find zero or one Circulation that matches the filter.
     * @param {CirculationFindUniqueArgs} args - Arguments to find a Circulation
     * @example
     * // Get one Circulation
     * const circulation = await prisma.circulation.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CirculationFindUniqueArgs>(args: SelectSubset<T, CirculationFindUniqueArgs<ExtArgs>>): Prisma__CirculationClient<$Result.GetResult<Prisma.$CirculationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Circulation that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CirculationFindUniqueOrThrowArgs} args - Arguments to find a Circulation
     * @example
     * // Get one Circulation
     * const circulation = await prisma.circulation.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CirculationFindUniqueOrThrowArgs>(args: SelectSubset<T, CirculationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CirculationClient<$Result.GetResult<Prisma.$CirculationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Circulation that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CirculationFindFirstArgs} args - Arguments to find a Circulation
     * @example
     * // Get one Circulation
     * const circulation = await prisma.circulation.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CirculationFindFirstArgs>(args?: SelectSubset<T, CirculationFindFirstArgs<ExtArgs>>): Prisma__CirculationClient<$Result.GetResult<Prisma.$CirculationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Circulation that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CirculationFindFirstOrThrowArgs} args - Arguments to find a Circulation
     * @example
     * // Get one Circulation
     * const circulation = await prisma.circulation.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CirculationFindFirstOrThrowArgs>(args?: SelectSubset<T, CirculationFindFirstOrThrowArgs<ExtArgs>>): Prisma__CirculationClient<$Result.GetResult<Prisma.$CirculationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Circulations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CirculationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Circulations
     * const circulations = await prisma.circulation.findMany()
     * 
     * // Get first 10 Circulations
     * const circulations = await prisma.circulation.findMany({ take: 10 })
     * 
     * // Only select the `book_id`
     * const circulationWithBook_idOnly = await prisma.circulation.findMany({ select: { book_id: true } })
     * 
     */
    findMany<T extends CirculationFindManyArgs>(args?: SelectSubset<T, CirculationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CirculationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Circulation.
     * @param {CirculationCreateArgs} args - Arguments to create a Circulation.
     * @example
     * // Create one Circulation
     * const Circulation = await prisma.circulation.create({
     *   data: {
     *     // ... data to create a Circulation
     *   }
     * })
     * 
     */
    create<T extends CirculationCreateArgs>(args: SelectSubset<T, CirculationCreateArgs<ExtArgs>>): Prisma__CirculationClient<$Result.GetResult<Prisma.$CirculationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Circulations.
     * @param {CirculationCreateManyArgs} args - Arguments to create many Circulations.
     * @example
     * // Create many Circulations
     * const circulation = await prisma.circulation.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CirculationCreateManyArgs>(args?: SelectSubset<T, CirculationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Circulations and returns the data saved in the database.
     * @param {CirculationCreateManyAndReturnArgs} args - Arguments to create many Circulations.
     * @example
     * // Create many Circulations
     * const circulation = await prisma.circulation.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Circulations and only return the `book_id`
     * const circulationWithBook_idOnly = await prisma.circulation.createManyAndReturn({
     *   select: { book_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CirculationCreateManyAndReturnArgs>(args?: SelectSubset<T, CirculationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CirculationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Circulation.
     * @param {CirculationDeleteArgs} args - Arguments to delete one Circulation.
     * @example
     * // Delete one Circulation
     * const Circulation = await prisma.circulation.delete({
     *   where: {
     *     // ... filter to delete one Circulation
     *   }
     * })
     * 
     */
    delete<T extends CirculationDeleteArgs>(args: SelectSubset<T, CirculationDeleteArgs<ExtArgs>>): Prisma__CirculationClient<$Result.GetResult<Prisma.$CirculationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Circulation.
     * @param {CirculationUpdateArgs} args - Arguments to update one Circulation.
     * @example
     * // Update one Circulation
     * const circulation = await prisma.circulation.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CirculationUpdateArgs>(args: SelectSubset<T, CirculationUpdateArgs<ExtArgs>>): Prisma__CirculationClient<$Result.GetResult<Prisma.$CirculationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Circulations.
     * @param {CirculationDeleteManyArgs} args - Arguments to filter Circulations to delete.
     * @example
     * // Delete a few Circulations
     * const { count } = await prisma.circulation.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CirculationDeleteManyArgs>(args?: SelectSubset<T, CirculationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Circulations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CirculationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Circulations
     * const circulation = await prisma.circulation.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CirculationUpdateManyArgs>(args: SelectSubset<T, CirculationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Circulations and returns the data updated in the database.
     * @param {CirculationUpdateManyAndReturnArgs} args - Arguments to update many Circulations.
     * @example
     * // Update many Circulations
     * const circulation = await prisma.circulation.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Circulations and only return the `book_id`
     * const circulationWithBook_idOnly = await prisma.circulation.updateManyAndReturn({
     *   select: { book_id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CirculationUpdateManyAndReturnArgs>(args: SelectSubset<T, CirculationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CirculationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Circulation.
     * @param {CirculationUpsertArgs} args - Arguments to update or create a Circulation.
     * @example
     * // Update or create a Circulation
     * const circulation = await prisma.circulation.upsert({
     *   create: {
     *     // ... data to create a Circulation
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Circulation we want to update
     *   }
     * })
     */
    upsert<T extends CirculationUpsertArgs>(args: SelectSubset<T, CirculationUpsertArgs<ExtArgs>>): Prisma__CirculationClient<$Result.GetResult<Prisma.$CirculationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Circulations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CirculationCountArgs} args - Arguments to filter Circulations to count.
     * @example
     * // Count the number of Circulations
     * const count = await prisma.circulation.count({
     *   where: {
     *     // ... the filter for the Circulations we want to count
     *   }
     * })
    **/
    count<T extends CirculationCountArgs>(
      args?: Subset<T, CirculationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CirculationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Circulation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CirculationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CirculationAggregateArgs>(args: Subset<T, CirculationAggregateArgs>): Prisma.PrismaPromise<GetCirculationAggregateType<T>>

    /**
     * Group by Circulation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CirculationGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CirculationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CirculationGroupByArgs['orderBy'] }
        : { orderBy?: CirculationGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CirculationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCirculationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Circulation model
   */
  readonly fields: CirculationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Circulation.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CirculationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    book<T extends BookDefaultArgs<ExtArgs> = {}>(args?: Subset<T, BookDefaultArgs<ExtArgs>>): Prisma__BookClient<$Result.GetResult<Prisma.$BookPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    patron<T extends PatronDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PatronDefaultArgs<ExtArgs>>): Prisma__PatronClient<$Result.GetResult<Prisma.$PatronPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Circulation model
   */
  interface CirculationFieldRefs {
    readonly book_id: FieldRef<"Circulation", 'String'>
    readonly patron_id: FieldRef<"Circulation", 'String'>
    readonly checkout: FieldRef<"Circulation", 'DateTime'>
    readonly date_due: FieldRef<"Circulation", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Circulation findUnique
   */
  export type CirculationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Circulation
     */
    select?: CirculationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Circulation
     */
    omit?: CirculationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CirculationInclude<ExtArgs> | null
    /**
     * Filter, which Circulation to fetch.
     */
    where: CirculationWhereUniqueInput
  }

  /**
   * Circulation findUniqueOrThrow
   */
  export type CirculationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Circulation
     */
    select?: CirculationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Circulation
     */
    omit?: CirculationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CirculationInclude<ExtArgs> | null
    /**
     * Filter, which Circulation to fetch.
     */
    where: CirculationWhereUniqueInput
  }

  /**
   * Circulation findFirst
   */
  export type CirculationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Circulation
     */
    select?: CirculationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Circulation
     */
    omit?: CirculationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CirculationInclude<ExtArgs> | null
    /**
     * Filter, which Circulation to fetch.
     */
    where?: CirculationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Circulations to fetch.
     */
    orderBy?: CirculationOrderByWithRelationInput | CirculationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Circulations.
     */
    cursor?: CirculationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Circulations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Circulations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Circulations.
     */
    distinct?: CirculationScalarFieldEnum | CirculationScalarFieldEnum[]
  }

  /**
   * Circulation findFirstOrThrow
   */
  export type CirculationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Circulation
     */
    select?: CirculationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Circulation
     */
    omit?: CirculationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CirculationInclude<ExtArgs> | null
    /**
     * Filter, which Circulation to fetch.
     */
    where?: CirculationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Circulations to fetch.
     */
    orderBy?: CirculationOrderByWithRelationInput | CirculationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Circulations.
     */
    cursor?: CirculationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Circulations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Circulations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Circulations.
     */
    distinct?: CirculationScalarFieldEnum | CirculationScalarFieldEnum[]
  }

  /**
   * Circulation findMany
   */
  export type CirculationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Circulation
     */
    select?: CirculationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Circulation
     */
    omit?: CirculationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CirculationInclude<ExtArgs> | null
    /**
     * Filter, which Circulations to fetch.
     */
    where?: CirculationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Circulations to fetch.
     */
    orderBy?: CirculationOrderByWithRelationInput | CirculationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Circulations.
     */
    cursor?: CirculationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Circulations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Circulations.
     */
    skip?: number
    distinct?: CirculationScalarFieldEnum | CirculationScalarFieldEnum[]
  }

  /**
   * Circulation create
   */
  export type CirculationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Circulation
     */
    select?: CirculationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Circulation
     */
    omit?: CirculationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CirculationInclude<ExtArgs> | null
    /**
     * The data needed to create a Circulation.
     */
    data: XOR<CirculationCreateInput, CirculationUncheckedCreateInput>
  }

  /**
   * Circulation createMany
   */
  export type CirculationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Circulations.
     */
    data: CirculationCreateManyInput | CirculationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Circulation createManyAndReturn
   */
  export type CirculationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Circulation
     */
    select?: CirculationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Circulation
     */
    omit?: CirculationOmit<ExtArgs> | null
    /**
     * The data used to create many Circulations.
     */
    data: CirculationCreateManyInput | CirculationCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CirculationIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Circulation update
   */
  export type CirculationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Circulation
     */
    select?: CirculationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Circulation
     */
    omit?: CirculationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CirculationInclude<ExtArgs> | null
    /**
     * The data needed to update a Circulation.
     */
    data: XOR<CirculationUpdateInput, CirculationUncheckedUpdateInput>
    /**
     * Choose, which Circulation to update.
     */
    where: CirculationWhereUniqueInput
  }

  /**
   * Circulation updateMany
   */
  export type CirculationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Circulations.
     */
    data: XOR<CirculationUpdateManyMutationInput, CirculationUncheckedUpdateManyInput>
    /**
     * Filter which Circulations to update
     */
    where?: CirculationWhereInput
    /**
     * Limit how many Circulations to update.
     */
    limit?: number
  }

  /**
   * Circulation updateManyAndReturn
   */
  export type CirculationUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Circulation
     */
    select?: CirculationSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Circulation
     */
    omit?: CirculationOmit<ExtArgs> | null
    /**
     * The data used to update Circulations.
     */
    data: XOR<CirculationUpdateManyMutationInput, CirculationUncheckedUpdateManyInput>
    /**
     * Filter which Circulations to update
     */
    where?: CirculationWhereInput
    /**
     * Limit how many Circulations to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CirculationIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Circulation upsert
   */
  export type CirculationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Circulation
     */
    select?: CirculationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Circulation
     */
    omit?: CirculationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CirculationInclude<ExtArgs> | null
    /**
     * The filter to search for the Circulation to update in case it exists.
     */
    where: CirculationWhereUniqueInput
    /**
     * In case the Circulation found by the `where` argument doesn't exist, create a new Circulation with this data.
     */
    create: XOR<CirculationCreateInput, CirculationUncheckedCreateInput>
    /**
     * In case the Circulation was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CirculationUpdateInput, CirculationUncheckedUpdateInput>
  }

  /**
   * Circulation delete
   */
  export type CirculationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Circulation
     */
    select?: CirculationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Circulation
     */
    omit?: CirculationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CirculationInclude<ExtArgs> | null
    /**
     * Filter which Circulation to delete.
     */
    where: CirculationWhereUniqueInput
  }

  /**
   * Circulation deleteMany
   */
  export type CirculationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Circulations to delete
     */
    where?: CirculationWhereInput
    /**
     * Limit how many Circulations to delete.
     */
    limit?: number
  }

  /**
   * Circulation without action
   */
  export type CirculationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Circulation
     */
    select?: CirculationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Circulation
     */
    omit?: CirculationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CirculationInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const SessionScalarFieldEnum: {
    id: 'id',
    sid: 'sid',
    data: 'data',
    expiresAt: 'expiresAt'
  };

  export type SessionScalarFieldEnum = (typeof SessionScalarFieldEnum)[keyof typeof SessionScalarFieldEnum]


  export const LibrarianScalarFieldEnum: {
    id: 'id',
    firstname: 'firstname',
    lastname: 'lastname',
    displayname: 'displayname',
    email: 'email',
    password: 'password',
    profile_img: 'profile_img',
    address: 'address',
    contact: 'contact',
    rank: 'rank',
    books_entered: 'books_entered',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type LibrarianScalarFieldEnum = (typeof LibrarianScalarFieldEnum)[keyof typeof LibrarianScalarFieldEnum]


  export const BookScalarFieldEnum: {
    id: 'id',
    title: 'title',
    author: 'author',
    subject: 'subject',
    imprint: 'imprint',
    collation: 'collation',
    G_M_D: 'G_M_D',
    book_cover: 'book_cover',
    material_number: 'material_number',
    availability: 'availability',
    bibilography: 'bibilography',
    Keywords: 'Keywords',
    other_Title: 'other_Title',
    co_author: 'co_author',
    editor: 'editor',
    edition: 'edition',
    series: 'series',
    web_address: 'web_address',
    entered_at: 'entered_at'
  };

  export type BookScalarFieldEnum = (typeof BookScalarFieldEnum)[keyof typeof BookScalarFieldEnum]


  export const EmailVerificationTokenScalarFieldEnum: {
    id: 'id',
    email: 'email',
    token: 'token',
    expiresAt: 'expiresAt',
    createdAt: 'createdAt'
  };

  export type EmailVerificationTokenScalarFieldEnum = (typeof EmailVerificationTokenScalarFieldEnum)[keyof typeof EmailVerificationTokenScalarFieldEnum]


  export const PatronScalarFieldEnum: {
    id: 'id',
    google_Id: 'google_Id',
    firstname: 'firstname',
    lastname: 'lastname',
    displayname: 'displayname',
    address: 'address',
    email: 'email',
    password: 'password',
    profile_img: 'profile_img',
    borrowed_books: 'borrowed_books',
    isEmailVerified: 'isEmailVerified',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type PatronScalarFieldEnum = (typeof PatronScalarFieldEnum)[keyof typeof PatronScalarFieldEnum]


  export const Book_likesScalarFieldEnum: {
    book_id: 'book_id',
    patron_id: 'patron_id',
    liked_at: 'liked_at'
  };

  export type Book_likesScalarFieldEnum = (typeof Book_likesScalarFieldEnum)[keyof typeof Book_likesScalarFieldEnum]


  export const Book_consultedScalarFieldEnum: {
    book_id: 'book_id',
    patron_id: 'patron_id',
    consulted_at: 'consulted_at'
  };

  export type Book_consultedScalarFieldEnum = (typeof Book_consultedScalarFieldEnum)[keyof typeof Book_consultedScalarFieldEnum]


  export const CirculationScalarFieldEnum: {
    book_id: 'book_id',
    patron_id: 'patron_id',
    checkout: 'checkout',
    date_due: 'date_due'
  };

  export type CirculationScalarFieldEnum = (typeof CirculationScalarFieldEnum)[keyof typeof CirculationScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'GMD'
   */
  export type EnumGMDFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'GMD'>
    


  /**
   * Reference to a field of type 'GMD[]'
   */
  export type ListEnumGMDFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'GMD[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type SessionWhereInput = {
    AND?: SessionWhereInput | SessionWhereInput[]
    OR?: SessionWhereInput[]
    NOT?: SessionWhereInput | SessionWhereInput[]
    id?: StringFilter<"Session"> | string
    sid?: StringFilter<"Session"> | string
    data?: StringFilter<"Session"> | string
    expiresAt?: DateTimeFilter<"Session"> | Date | string
  }

  export type SessionOrderByWithRelationInput = {
    id?: SortOrder
    sid?: SortOrder
    data?: SortOrder
    expiresAt?: SortOrder
  }

  export type SessionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    sid?: string
    AND?: SessionWhereInput | SessionWhereInput[]
    OR?: SessionWhereInput[]
    NOT?: SessionWhereInput | SessionWhereInput[]
    data?: StringFilter<"Session"> | string
    expiresAt?: DateTimeFilter<"Session"> | Date | string
  }, "id" | "sid">

  export type SessionOrderByWithAggregationInput = {
    id?: SortOrder
    sid?: SortOrder
    data?: SortOrder
    expiresAt?: SortOrder
    _count?: SessionCountOrderByAggregateInput
    _max?: SessionMaxOrderByAggregateInput
    _min?: SessionMinOrderByAggregateInput
  }

  export type SessionScalarWhereWithAggregatesInput = {
    AND?: SessionScalarWhereWithAggregatesInput | SessionScalarWhereWithAggregatesInput[]
    OR?: SessionScalarWhereWithAggregatesInput[]
    NOT?: SessionScalarWhereWithAggregatesInput | SessionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Session"> | string
    sid?: StringWithAggregatesFilter<"Session"> | string
    data?: StringWithAggregatesFilter<"Session"> | string
    expiresAt?: DateTimeWithAggregatesFilter<"Session"> | Date | string
  }

  export type LibrarianWhereInput = {
    AND?: LibrarianWhereInput | LibrarianWhereInput[]
    OR?: LibrarianWhereInput[]
    NOT?: LibrarianWhereInput | LibrarianWhereInput[]
    id?: StringFilter<"Librarian"> | string
    firstname?: StringFilter<"Librarian"> | string
    lastname?: StringFilter<"Librarian"> | string
    displayname?: StringFilter<"Librarian"> | string
    email?: StringFilter<"Librarian"> | string
    password?: StringFilter<"Librarian"> | string
    profile_img?: StringFilter<"Librarian"> | string
    address?: StringFilter<"Librarian"> | string
    contact?: StringFilter<"Librarian"> | string
    rank?: IntFilter<"Librarian"> | number
    books_entered?: StringNullableListFilter<"Librarian">
    created_at?: DateTimeFilter<"Librarian"> | Date | string
    updated_at?: DateTimeFilter<"Librarian"> | Date | string
  }

  export type LibrarianOrderByWithRelationInput = {
    id?: SortOrder
    firstname?: SortOrder
    lastname?: SortOrder
    displayname?: SortOrder
    email?: SortOrder
    password?: SortOrder
    profile_img?: SortOrder
    address?: SortOrder
    contact?: SortOrder
    rank?: SortOrder
    books_entered?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type LibrarianWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    contact?: string
    books_entered?: string[]
    AND?: LibrarianWhereInput | LibrarianWhereInput[]
    OR?: LibrarianWhereInput[]
    NOT?: LibrarianWhereInput | LibrarianWhereInput[]
    firstname?: StringFilter<"Librarian"> | string
    lastname?: StringFilter<"Librarian"> | string
    displayname?: StringFilter<"Librarian"> | string
    password?: StringFilter<"Librarian"> | string
    profile_img?: StringFilter<"Librarian"> | string
    address?: StringFilter<"Librarian"> | string
    rank?: IntFilter<"Librarian"> | number
    created_at?: DateTimeFilter<"Librarian"> | Date | string
    updated_at?: DateTimeFilter<"Librarian"> | Date | string
  }, "id" | "email" | "contact" | "books_entered">

  export type LibrarianOrderByWithAggregationInput = {
    id?: SortOrder
    firstname?: SortOrder
    lastname?: SortOrder
    displayname?: SortOrder
    email?: SortOrder
    password?: SortOrder
    profile_img?: SortOrder
    address?: SortOrder
    contact?: SortOrder
    rank?: SortOrder
    books_entered?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: LibrarianCountOrderByAggregateInput
    _avg?: LibrarianAvgOrderByAggregateInput
    _max?: LibrarianMaxOrderByAggregateInput
    _min?: LibrarianMinOrderByAggregateInput
    _sum?: LibrarianSumOrderByAggregateInput
  }

  export type LibrarianScalarWhereWithAggregatesInput = {
    AND?: LibrarianScalarWhereWithAggregatesInput | LibrarianScalarWhereWithAggregatesInput[]
    OR?: LibrarianScalarWhereWithAggregatesInput[]
    NOT?: LibrarianScalarWhereWithAggregatesInput | LibrarianScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Librarian"> | string
    firstname?: StringWithAggregatesFilter<"Librarian"> | string
    lastname?: StringWithAggregatesFilter<"Librarian"> | string
    displayname?: StringWithAggregatesFilter<"Librarian"> | string
    email?: StringWithAggregatesFilter<"Librarian"> | string
    password?: StringWithAggregatesFilter<"Librarian"> | string
    profile_img?: StringWithAggregatesFilter<"Librarian"> | string
    address?: StringWithAggregatesFilter<"Librarian"> | string
    contact?: StringWithAggregatesFilter<"Librarian"> | string
    rank?: IntWithAggregatesFilter<"Librarian"> | number
    books_entered?: StringNullableListFilter<"Librarian">
    created_at?: DateTimeWithAggregatesFilter<"Librarian"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"Librarian"> | Date | string
  }

  export type BookWhereInput = {
    AND?: BookWhereInput | BookWhereInput[]
    OR?: BookWhereInput[]
    NOT?: BookWhereInput | BookWhereInput[]
    id?: StringFilter<"Book"> | string
    title?: StringFilter<"Book"> | string
    author?: StringFilter<"Book"> | string
    subject?: StringNullableListFilter<"Book">
    imprint?: StringFilter<"Book"> | string
    collation?: StringFilter<"Book"> | string
    G_M_D?: EnumGMDFilter<"Book"> | $Enums.GMD
    book_cover?: StringFilter<"Book"> | string
    material_number?: StringFilter<"Book"> | string
    availability?: BoolFilter<"Book"> | boolean
    bibilography?: StringFilter<"Book"> | string
    Keywords?: StringNullableListFilter<"Book">
    other_Title?: StringNullableFilter<"Book"> | string | null
    co_author?: StringNullableFilter<"Book"> | string | null
    editor?: StringNullableFilter<"Book"> | string | null
    edition?: StringNullableFilter<"Book"> | string | null
    series?: StringNullableFilter<"Book"> | string | null
    web_address?: StringNullableFilter<"Book"> | string | null
    entered_at?: DateTimeFilter<"Book"> | Date | string
    book_likes?: Book_likesListRelationFilter
    book_consulted?: Book_consultedListRelationFilter
    circulation?: CirculationListRelationFilter
  }

  export type BookOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    author?: SortOrder
    subject?: SortOrder
    imprint?: SortOrder
    collation?: SortOrder
    G_M_D?: SortOrder
    book_cover?: SortOrder
    material_number?: SortOrder
    availability?: SortOrder
    bibilography?: SortOrder
    Keywords?: SortOrder
    other_Title?: SortOrderInput | SortOrder
    co_author?: SortOrderInput | SortOrder
    editor?: SortOrderInput | SortOrder
    edition?: SortOrderInput | SortOrder
    series?: SortOrderInput | SortOrder
    web_address?: SortOrderInput | SortOrder
    entered_at?: SortOrder
    book_likes?: Book_likesOrderByRelationAggregateInput
    book_consulted?: Book_consultedOrderByRelationAggregateInput
    circulation?: CirculationOrderByRelationAggregateInput
  }

  export type BookWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: BookWhereInput | BookWhereInput[]
    OR?: BookWhereInput[]
    NOT?: BookWhereInput | BookWhereInput[]
    title?: StringFilter<"Book"> | string
    author?: StringFilter<"Book"> | string
    subject?: StringNullableListFilter<"Book">
    imprint?: StringFilter<"Book"> | string
    collation?: StringFilter<"Book"> | string
    G_M_D?: EnumGMDFilter<"Book"> | $Enums.GMD
    book_cover?: StringFilter<"Book"> | string
    material_number?: StringFilter<"Book"> | string
    availability?: BoolFilter<"Book"> | boolean
    bibilography?: StringFilter<"Book"> | string
    Keywords?: StringNullableListFilter<"Book">
    other_Title?: StringNullableFilter<"Book"> | string | null
    co_author?: StringNullableFilter<"Book"> | string | null
    editor?: StringNullableFilter<"Book"> | string | null
    edition?: StringNullableFilter<"Book"> | string | null
    series?: StringNullableFilter<"Book"> | string | null
    web_address?: StringNullableFilter<"Book"> | string | null
    entered_at?: DateTimeFilter<"Book"> | Date | string
    book_likes?: Book_likesListRelationFilter
    book_consulted?: Book_consultedListRelationFilter
    circulation?: CirculationListRelationFilter
  }, "id">

  export type BookOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    author?: SortOrder
    subject?: SortOrder
    imprint?: SortOrder
    collation?: SortOrder
    G_M_D?: SortOrder
    book_cover?: SortOrder
    material_number?: SortOrder
    availability?: SortOrder
    bibilography?: SortOrder
    Keywords?: SortOrder
    other_Title?: SortOrderInput | SortOrder
    co_author?: SortOrderInput | SortOrder
    editor?: SortOrderInput | SortOrder
    edition?: SortOrderInput | SortOrder
    series?: SortOrderInput | SortOrder
    web_address?: SortOrderInput | SortOrder
    entered_at?: SortOrder
    _count?: BookCountOrderByAggregateInput
    _max?: BookMaxOrderByAggregateInput
    _min?: BookMinOrderByAggregateInput
  }

  export type BookScalarWhereWithAggregatesInput = {
    AND?: BookScalarWhereWithAggregatesInput | BookScalarWhereWithAggregatesInput[]
    OR?: BookScalarWhereWithAggregatesInput[]
    NOT?: BookScalarWhereWithAggregatesInput | BookScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Book"> | string
    title?: StringWithAggregatesFilter<"Book"> | string
    author?: StringWithAggregatesFilter<"Book"> | string
    subject?: StringNullableListFilter<"Book">
    imprint?: StringWithAggregatesFilter<"Book"> | string
    collation?: StringWithAggregatesFilter<"Book"> | string
    G_M_D?: EnumGMDWithAggregatesFilter<"Book"> | $Enums.GMD
    book_cover?: StringWithAggregatesFilter<"Book"> | string
    material_number?: StringWithAggregatesFilter<"Book"> | string
    availability?: BoolWithAggregatesFilter<"Book"> | boolean
    bibilography?: StringWithAggregatesFilter<"Book"> | string
    Keywords?: StringNullableListFilter<"Book">
    other_Title?: StringNullableWithAggregatesFilter<"Book"> | string | null
    co_author?: StringNullableWithAggregatesFilter<"Book"> | string | null
    editor?: StringNullableWithAggregatesFilter<"Book"> | string | null
    edition?: StringNullableWithAggregatesFilter<"Book"> | string | null
    series?: StringNullableWithAggregatesFilter<"Book"> | string | null
    web_address?: StringNullableWithAggregatesFilter<"Book"> | string | null
    entered_at?: DateTimeWithAggregatesFilter<"Book"> | Date | string
  }

  export type EmailVerificationTokenWhereInput = {
    AND?: EmailVerificationTokenWhereInput | EmailVerificationTokenWhereInput[]
    OR?: EmailVerificationTokenWhereInput[]
    NOT?: EmailVerificationTokenWhereInput | EmailVerificationTokenWhereInput[]
    id?: StringFilter<"EmailVerificationToken"> | string
    email?: StringFilter<"EmailVerificationToken"> | string
    token?: StringFilter<"EmailVerificationToken"> | string
    expiresAt?: DateTimeFilter<"EmailVerificationToken"> | Date | string
    createdAt?: DateTimeFilter<"EmailVerificationToken"> | Date | string
  }

  export type EmailVerificationTokenOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    token?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
  }

  export type EmailVerificationTokenWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: EmailVerificationTokenWhereInput | EmailVerificationTokenWhereInput[]
    OR?: EmailVerificationTokenWhereInput[]
    NOT?: EmailVerificationTokenWhereInput | EmailVerificationTokenWhereInput[]
    token?: StringFilter<"EmailVerificationToken"> | string
    expiresAt?: DateTimeFilter<"EmailVerificationToken"> | Date | string
    createdAt?: DateTimeFilter<"EmailVerificationToken"> | Date | string
  }, "id" | "email">

  export type EmailVerificationTokenOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    token?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
    _count?: EmailVerificationTokenCountOrderByAggregateInput
    _max?: EmailVerificationTokenMaxOrderByAggregateInput
    _min?: EmailVerificationTokenMinOrderByAggregateInput
  }

  export type EmailVerificationTokenScalarWhereWithAggregatesInput = {
    AND?: EmailVerificationTokenScalarWhereWithAggregatesInput | EmailVerificationTokenScalarWhereWithAggregatesInput[]
    OR?: EmailVerificationTokenScalarWhereWithAggregatesInput[]
    NOT?: EmailVerificationTokenScalarWhereWithAggregatesInput | EmailVerificationTokenScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"EmailVerificationToken"> | string
    email?: StringWithAggregatesFilter<"EmailVerificationToken"> | string
    token?: StringWithAggregatesFilter<"EmailVerificationToken"> | string
    expiresAt?: DateTimeWithAggregatesFilter<"EmailVerificationToken"> | Date | string
    createdAt?: DateTimeWithAggregatesFilter<"EmailVerificationToken"> | Date | string
  }

  export type PatronWhereInput = {
    AND?: PatronWhereInput | PatronWhereInput[]
    OR?: PatronWhereInput[]
    NOT?: PatronWhereInput | PatronWhereInput[]
    id?: StringFilter<"Patron"> | string
    google_Id?: StringNullableFilter<"Patron"> | string | null
    firstname?: StringFilter<"Patron"> | string
    lastname?: StringFilter<"Patron"> | string
    displayname?: StringNullableFilter<"Patron"> | string | null
    address?: StringNullableFilter<"Patron"> | string | null
    email?: StringFilter<"Patron"> | string
    password?: StringNullableFilter<"Patron"> | string | null
    profile_img?: StringNullableFilter<"Patron"> | string | null
    borrowed_books?: StringNullableListFilter<"Patron">
    isEmailVerified?: BoolFilter<"Patron"> | boolean
    created_at?: DateTimeFilter<"Patron"> | Date | string
    updated_at?: DateTimeFilter<"Patron"> | Date | string
    book_likes?: Book_likesListRelationFilter
    book_consulted?: Book_consultedListRelationFilter
    circulation?: CirculationListRelationFilter
  }

  export type PatronOrderByWithRelationInput = {
    id?: SortOrder
    google_Id?: SortOrderInput | SortOrder
    firstname?: SortOrder
    lastname?: SortOrder
    displayname?: SortOrderInput | SortOrder
    address?: SortOrderInput | SortOrder
    email?: SortOrder
    password?: SortOrderInput | SortOrder
    profile_img?: SortOrderInput | SortOrder
    borrowed_books?: SortOrder
    isEmailVerified?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    book_likes?: Book_likesOrderByRelationAggregateInput
    book_consulted?: Book_consultedOrderByRelationAggregateInput
    circulation?: CirculationOrderByRelationAggregateInput
  }

  export type PatronWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    google_Id?: string
    displayname?: string
    email?: string
    borrowed_books?: string[]
    AND?: PatronWhereInput | PatronWhereInput[]
    OR?: PatronWhereInput[]
    NOT?: PatronWhereInput | PatronWhereInput[]
    firstname?: StringFilter<"Patron"> | string
    lastname?: StringFilter<"Patron"> | string
    address?: StringNullableFilter<"Patron"> | string | null
    password?: StringNullableFilter<"Patron"> | string | null
    profile_img?: StringNullableFilter<"Patron"> | string | null
    isEmailVerified?: BoolFilter<"Patron"> | boolean
    created_at?: DateTimeFilter<"Patron"> | Date | string
    updated_at?: DateTimeFilter<"Patron"> | Date | string
    book_likes?: Book_likesListRelationFilter
    book_consulted?: Book_consultedListRelationFilter
    circulation?: CirculationListRelationFilter
  }, "id" | "google_Id" | "displayname" | "email" | "borrowed_books">

  export type PatronOrderByWithAggregationInput = {
    id?: SortOrder
    google_Id?: SortOrderInput | SortOrder
    firstname?: SortOrder
    lastname?: SortOrder
    displayname?: SortOrderInput | SortOrder
    address?: SortOrderInput | SortOrder
    email?: SortOrder
    password?: SortOrderInput | SortOrder
    profile_img?: SortOrderInput | SortOrder
    borrowed_books?: SortOrder
    isEmailVerified?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: PatronCountOrderByAggregateInput
    _max?: PatronMaxOrderByAggregateInput
    _min?: PatronMinOrderByAggregateInput
  }

  export type PatronScalarWhereWithAggregatesInput = {
    AND?: PatronScalarWhereWithAggregatesInput | PatronScalarWhereWithAggregatesInput[]
    OR?: PatronScalarWhereWithAggregatesInput[]
    NOT?: PatronScalarWhereWithAggregatesInput | PatronScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Patron"> | string
    google_Id?: StringNullableWithAggregatesFilter<"Patron"> | string | null
    firstname?: StringWithAggregatesFilter<"Patron"> | string
    lastname?: StringWithAggregatesFilter<"Patron"> | string
    displayname?: StringNullableWithAggregatesFilter<"Patron"> | string | null
    address?: StringNullableWithAggregatesFilter<"Patron"> | string | null
    email?: StringWithAggregatesFilter<"Patron"> | string
    password?: StringNullableWithAggregatesFilter<"Patron"> | string | null
    profile_img?: StringNullableWithAggregatesFilter<"Patron"> | string | null
    borrowed_books?: StringNullableListFilter<"Patron">
    isEmailVerified?: BoolWithAggregatesFilter<"Patron"> | boolean
    created_at?: DateTimeWithAggregatesFilter<"Patron"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"Patron"> | Date | string
  }

  export type Book_likesWhereInput = {
    AND?: Book_likesWhereInput | Book_likesWhereInput[]
    OR?: Book_likesWhereInput[]
    NOT?: Book_likesWhereInput | Book_likesWhereInput[]
    book_id?: StringFilter<"Book_likes"> | string
    patron_id?: StringFilter<"Book_likes"> | string
    liked_at?: DateTimeFilter<"Book_likes"> | Date | string
    book?: XOR<BookScalarRelationFilter, BookWhereInput>
    patron?: XOR<PatronScalarRelationFilter, PatronWhereInput>
  }

  export type Book_likesOrderByWithRelationInput = {
    book_id?: SortOrder
    patron_id?: SortOrder
    liked_at?: SortOrder
    book?: BookOrderByWithRelationInput
    patron?: PatronOrderByWithRelationInput
  }

  export type Book_likesWhereUniqueInput = Prisma.AtLeast<{
    book_id?: string
    patron_id?: string
    AND?: Book_likesWhereInput | Book_likesWhereInput[]
    OR?: Book_likesWhereInput[]
    NOT?: Book_likesWhereInput | Book_likesWhereInput[]
    liked_at?: DateTimeFilter<"Book_likes"> | Date | string
    book?: XOR<BookScalarRelationFilter, BookWhereInput>
    patron?: XOR<PatronScalarRelationFilter, PatronWhereInput>
  }, "book_id" | "patron_id">

  export type Book_likesOrderByWithAggregationInput = {
    book_id?: SortOrder
    patron_id?: SortOrder
    liked_at?: SortOrder
    _count?: Book_likesCountOrderByAggregateInput
    _max?: Book_likesMaxOrderByAggregateInput
    _min?: Book_likesMinOrderByAggregateInput
  }

  export type Book_likesScalarWhereWithAggregatesInput = {
    AND?: Book_likesScalarWhereWithAggregatesInput | Book_likesScalarWhereWithAggregatesInput[]
    OR?: Book_likesScalarWhereWithAggregatesInput[]
    NOT?: Book_likesScalarWhereWithAggregatesInput | Book_likesScalarWhereWithAggregatesInput[]
    book_id?: StringWithAggregatesFilter<"Book_likes"> | string
    patron_id?: StringWithAggregatesFilter<"Book_likes"> | string
    liked_at?: DateTimeWithAggregatesFilter<"Book_likes"> | Date | string
  }

  export type Book_consultedWhereInput = {
    AND?: Book_consultedWhereInput | Book_consultedWhereInput[]
    OR?: Book_consultedWhereInput[]
    NOT?: Book_consultedWhereInput | Book_consultedWhereInput[]
    book_id?: StringFilter<"Book_consulted"> | string
    patron_id?: StringFilter<"Book_consulted"> | string
    consulted_at?: DateTimeFilter<"Book_consulted"> | Date | string
    book?: XOR<BookScalarRelationFilter, BookWhereInput>
    patron?: XOR<PatronScalarRelationFilter, PatronWhereInput>
  }

  export type Book_consultedOrderByWithRelationInput = {
    book_id?: SortOrder
    patron_id?: SortOrder
    consulted_at?: SortOrder
    book?: BookOrderByWithRelationInput
    patron?: PatronOrderByWithRelationInput
  }

  export type Book_consultedWhereUniqueInput = Prisma.AtLeast<{
    book_id?: string
    patron_id?: string
    AND?: Book_consultedWhereInput | Book_consultedWhereInput[]
    OR?: Book_consultedWhereInput[]
    NOT?: Book_consultedWhereInput | Book_consultedWhereInput[]
    consulted_at?: DateTimeFilter<"Book_consulted"> | Date | string
    book?: XOR<BookScalarRelationFilter, BookWhereInput>
    patron?: XOR<PatronScalarRelationFilter, PatronWhereInput>
  }, "book_id" | "patron_id">

  export type Book_consultedOrderByWithAggregationInput = {
    book_id?: SortOrder
    patron_id?: SortOrder
    consulted_at?: SortOrder
    _count?: Book_consultedCountOrderByAggregateInput
    _max?: Book_consultedMaxOrderByAggregateInput
    _min?: Book_consultedMinOrderByAggregateInput
  }

  export type Book_consultedScalarWhereWithAggregatesInput = {
    AND?: Book_consultedScalarWhereWithAggregatesInput | Book_consultedScalarWhereWithAggregatesInput[]
    OR?: Book_consultedScalarWhereWithAggregatesInput[]
    NOT?: Book_consultedScalarWhereWithAggregatesInput | Book_consultedScalarWhereWithAggregatesInput[]
    book_id?: StringWithAggregatesFilter<"Book_consulted"> | string
    patron_id?: StringWithAggregatesFilter<"Book_consulted"> | string
    consulted_at?: DateTimeWithAggregatesFilter<"Book_consulted"> | Date | string
  }

  export type CirculationWhereInput = {
    AND?: CirculationWhereInput | CirculationWhereInput[]
    OR?: CirculationWhereInput[]
    NOT?: CirculationWhereInput | CirculationWhereInput[]
    book_id?: StringFilter<"Circulation"> | string
    patron_id?: StringFilter<"Circulation"> | string
    checkout?: DateTimeFilter<"Circulation"> | Date | string
    date_due?: DateTimeFilter<"Circulation"> | Date | string
    book?: XOR<BookScalarRelationFilter, BookWhereInput>
    patron?: XOR<PatronScalarRelationFilter, PatronWhereInput>
  }

  export type CirculationOrderByWithRelationInput = {
    book_id?: SortOrder
    patron_id?: SortOrder
    checkout?: SortOrder
    date_due?: SortOrder
    book?: BookOrderByWithRelationInput
    patron?: PatronOrderByWithRelationInput
  }

  export type CirculationWhereUniqueInput = Prisma.AtLeast<{
    book_id?: string
    patron_id?: string
    AND?: CirculationWhereInput | CirculationWhereInput[]
    OR?: CirculationWhereInput[]
    NOT?: CirculationWhereInput | CirculationWhereInput[]
    checkout?: DateTimeFilter<"Circulation"> | Date | string
    date_due?: DateTimeFilter<"Circulation"> | Date | string
    book?: XOR<BookScalarRelationFilter, BookWhereInput>
    patron?: XOR<PatronScalarRelationFilter, PatronWhereInput>
  }, "book_id" | "patron_id">

  export type CirculationOrderByWithAggregationInput = {
    book_id?: SortOrder
    patron_id?: SortOrder
    checkout?: SortOrder
    date_due?: SortOrder
    _count?: CirculationCountOrderByAggregateInput
    _max?: CirculationMaxOrderByAggregateInput
    _min?: CirculationMinOrderByAggregateInput
  }

  export type CirculationScalarWhereWithAggregatesInput = {
    AND?: CirculationScalarWhereWithAggregatesInput | CirculationScalarWhereWithAggregatesInput[]
    OR?: CirculationScalarWhereWithAggregatesInput[]
    NOT?: CirculationScalarWhereWithAggregatesInput | CirculationScalarWhereWithAggregatesInput[]
    book_id?: StringWithAggregatesFilter<"Circulation"> | string
    patron_id?: StringWithAggregatesFilter<"Circulation"> | string
    checkout?: DateTimeWithAggregatesFilter<"Circulation"> | Date | string
    date_due?: DateTimeWithAggregatesFilter<"Circulation"> | Date | string
  }

  export type SessionCreateInput = {
    id: string
    sid: string
    data: string
    expiresAt: Date | string
  }

  export type SessionUncheckedCreateInput = {
    id: string
    sid: string
    data: string
    expiresAt: Date | string
  }

  export type SessionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    sid?: StringFieldUpdateOperationsInput | string
    data?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    sid?: StringFieldUpdateOperationsInput | string
    data?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionCreateManyInput = {
    id: string
    sid: string
    data: string
    expiresAt: Date | string
  }

  export type SessionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    sid?: StringFieldUpdateOperationsInput | string
    data?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    sid?: StringFieldUpdateOperationsInput | string
    data?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LibrarianCreateInput = {
    id?: string
    firstname: string
    lastname: string
    displayname: string
    email: string
    password: string
    profile_img: string
    address: string
    contact: string
    rank: number
    books_entered?: LibrarianCreatebooks_enteredInput | string[]
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type LibrarianUncheckedCreateInput = {
    id?: string
    firstname: string
    lastname: string
    displayname: string
    email: string
    password: string
    profile_img: string
    address: string
    contact: string
    rank: number
    books_entered?: LibrarianCreatebooks_enteredInput | string[]
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type LibrarianUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstname?: StringFieldUpdateOperationsInput | string
    lastname?: StringFieldUpdateOperationsInput | string
    displayname?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    profile_img?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    contact?: StringFieldUpdateOperationsInput | string
    rank?: IntFieldUpdateOperationsInput | number
    books_entered?: LibrarianUpdatebooks_enteredInput | string[]
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LibrarianUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstname?: StringFieldUpdateOperationsInput | string
    lastname?: StringFieldUpdateOperationsInput | string
    displayname?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    profile_img?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    contact?: StringFieldUpdateOperationsInput | string
    rank?: IntFieldUpdateOperationsInput | number
    books_entered?: LibrarianUpdatebooks_enteredInput | string[]
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LibrarianCreateManyInput = {
    id?: string
    firstname: string
    lastname: string
    displayname: string
    email: string
    password: string
    profile_img: string
    address: string
    contact: string
    rank: number
    books_entered?: LibrarianCreatebooks_enteredInput | string[]
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type LibrarianUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstname?: StringFieldUpdateOperationsInput | string
    lastname?: StringFieldUpdateOperationsInput | string
    displayname?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    profile_img?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    contact?: StringFieldUpdateOperationsInput | string
    rank?: IntFieldUpdateOperationsInput | number
    books_entered?: LibrarianUpdatebooks_enteredInput | string[]
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LibrarianUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstname?: StringFieldUpdateOperationsInput | string
    lastname?: StringFieldUpdateOperationsInput | string
    displayname?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    profile_img?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    contact?: StringFieldUpdateOperationsInput | string
    rank?: IntFieldUpdateOperationsInput | number
    books_entered?: LibrarianUpdatebooks_enteredInput | string[]
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BookCreateInput = {
    id?: string
    title: string
    author: string
    subject?: BookCreatesubjectInput | string[]
    imprint: string
    collation: string
    G_M_D: $Enums.GMD
    book_cover: string
    material_number: string
    availability: boolean
    bibilography: string
    Keywords?: BookCreateKeywordsInput | string[]
    other_Title?: string | null
    co_author?: string | null
    editor?: string | null
    edition?: string | null
    series?: string | null
    web_address?: string | null
    entered_at?: Date | string
    book_likes?: Book_likesCreateNestedManyWithoutBookInput
    book_consulted?: Book_consultedCreateNestedManyWithoutBookInput
    circulation?: CirculationCreateNestedManyWithoutBookInput
  }

  export type BookUncheckedCreateInput = {
    id?: string
    title: string
    author: string
    subject?: BookCreatesubjectInput | string[]
    imprint: string
    collation: string
    G_M_D: $Enums.GMD
    book_cover: string
    material_number: string
    availability: boolean
    bibilography: string
    Keywords?: BookCreateKeywordsInput | string[]
    other_Title?: string | null
    co_author?: string | null
    editor?: string | null
    edition?: string | null
    series?: string | null
    web_address?: string | null
    entered_at?: Date | string
    book_likes?: Book_likesUncheckedCreateNestedManyWithoutBookInput
    book_consulted?: Book_consultedUncheckedCreateNestedManyWithoutBookInput
    circulation?: CirculationUncheckedCreateNestedManyWithoutBookInput
  }

  export type BookUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    author?: StringFieldUpdateOperationsInput | string
    subject?: BookUpdatesubjectInput | string[]
    imprint?: StringFieldUpdateOperationsInput | string
    collation?: StringFieldUpdateOperationsInput | string
    G_M_D?: EnumGMDFieldUpdateOperationsInput | $Enums.GMD
    book_cover?: StringFieldUpdateOperationsInput | string
    material_number?: StringFieldUpdateOperationsInput | string
    availability?: BoolFieldUpdateOperationsInput | boolean
    bibilography?: StringFieldUpdateOperationsInput | string
    Keywords?: BookUpdateKeywordsInput | string[]
    other_Title?: NullableStringFieldUpdateOperationsInput | string | null
    co_author?: NullableStringFieldUpdateOperationsInput | string | null
    editor?: NullableStringFieldUpdateOperationsInput | string | null
    edition?: NullableStringFieldUpdateOperationsInput | string | null
    series?: NullableStringFieldUpdateOperationsInput | string | null
    web_address?: NullableStringFieldUpdateOperationsInput | string | null
    entered_at?: DateTimeFieldUpdateOperationsInput | Date | string
    book_likes?: Book_likesUpdateManyWithoutBookNestedInput
    book_consulted?: Book_consultedUpdateManyWithoutBookNestedInput
    circulation?: CirculationUpdateManyWithoutBookNestedInput
  }

  export type BookUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    author?: StringFieldUpdateOperationsInput | string
    subject?: BookUpdatesubjectInput | string[]
    imprint?: StringFieldUpdateOperationsInput | string
    collation?: StringFieldUpdateOperationsInput | string
    G_M_D?: EnumGMDFieldUpdateOperationsInput | $Enums.GMD
    book_cover?: StringFieldUpdateOperationsInput | string
    material_number?: StringFieldUpdateOperationsInput | string
    availability?: BoolFieldUpdateOperationsInput | boolean
    bibilography?: StringFieldUpdateOperationsInput | string
    Keywords?: BookUpdateKeywordsInput | string[]
    other_Title?: NullableStringFieldUpdateOperationsInput | string | null
    co_author?: NullableStringFieldUpdateOperationsInput | string | null
    editor?: NullableStringFieldUpdateOperationsInput | string | null
    edition?: NullableStringFieldUpdateOperationsInput | string | null
    series?: NullableStringFieldUpdateOperationsInput | string | null
    web_address?: NullableStringFieldUpdateOperationsInput | string | null
    entered_at?: DateTimeFieldUpdateOperationsInput | Date | string
    book_likes?: Book_likesUncheckedUpdateManyWithoutBookNestedInput
    book_consulted?: Book_consultedUncheckedUpdateManyWithoutBookNestedInput
    circulation?: CirculationUncheckedUpdateManyWithoutBookNestedInput
  }

  export type BookCreateManyInput = {
    id?: string
    title: string
    author: string
    subject?: BookCreatesubjectInput | string[]
    imprint: string
    collation: string
    G_M_D: $Enums.GMD
    book_cover: string
    material_number: string
    availability: boolean
    bibilography: string
    Keywords?: BookCreateKeywordsInput | string[]
    other_Title?: string | null
    co_author?: string | null
    editor?: string | null
    edition?: string | null
    series?: string | null
    web_address?: string | null
    entered_at?: Date | string
  }

  export type BookUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    author?: StringFieldUpdateOperationsInput | string
    subject?: BookUpdatesubjectInput | string[]
    imprint?: StringFieldUpdateOperationsInput | string
    collation?: StringFieldUpdateOperationsInput | string
    G_M_D?: EnumGMDFieldUpdateOperationsInput | $Enums.GMD
    book_cover?: StringFieldUpdateOperationsInput | string
    material_number?: StringFieldUpdateOperationsInput | string
    availability?: BoolFieldUpdateOperationsInput | boolean
    bibilography?: StringFieldUpdateOperationsInput | string
    Keywords?: BookUpdateKeywordsInput | string[]
    other_Title?: NullableStringFieldUpdateOperationsInput | string | null
    co_author?: NullableStringFieldUpdateOperationsInput | string | null
    editor?: NullableStringFieldUpdateOperationsInput | string | null
    edition?: NullableStringFieldUpdateOperationsInput | string | null
    series?: NullableStringFieldUpdateOperationsInput | string | null
    web_address?: NullableStringFieldUpdateOperationsInput | string | null
    entered_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BookUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    author?: StringFieldUpdateOperationsInput | string
    subject?: BookUpdatesubjectInput | string[]
    imprint?: StringFieldUpdateOperationsInput | string
    collation?: StringFieldUpdateOperationsInput | string
    G_M_D?: EnumGMDFieldUpdateOperationsInput | $Enums.GMD
    book_cover?: StringFieldUpdateOperationsInput | string
    material_number?: StringFieldUpdateOperationsInput | string
    availability?: BoolFieldUpdateOperationsInput | boolean
    bibilography?: StringFieldUpdateOperationsInput | string
    Keywords?: BookUpdateKeywordsInput | string[]
    other_Title?: NullableStringFieldUpdateOperationsInput | string | null
    co_author?: NullableStringFieldUpdateOperationsInput | string | null
    editor?: NullableStringFieldUpdateOperationsInput | string | null
    edition?: NullableStringFieldUpdateOperationsInput | string | null
    series?: NullableStringFieldUpdateOperationsInput | string | null
    web_address?: NullableStringFieldUpdateOperationsInput | string | null
    entered_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EmailVerificationTokenCreateInput = {
    id?: string
    email: string
    token: string
    expiresAt: Date | string
    createdAt?: Date | string
  }

  export type EmailVerificationTokenUncheckedCreateInput = {
    id?: string
    email: string
    token: string
    expiresAt: Date | string
    createdAt?: Date | string
  }

  export type EmailVerificationTokenUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EmailVerificationTokenUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EmailVerificationTokenCreateManyInput = {
    id?: string
    email: string
    token: string
    expiresAt: Date | string
    createdAt?: Date | string
  }

  export type EmailVerificationTokenUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EmailVerificationTokenUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PatronCreateInput = {
    id?: string
    google_Id?: string | null
    firstname: string
    lastname: string
    displayname?: string | null
    address?: string | null
    email: string
    password?: string | null
    profile_img?: string | null
    borrowed_books?: PatronCreateborrowed_booksInput | string[]
    isEmailVerified?: boolean
    created_at?: Date | string
    updated_at?: Date | string
    book_likes?: Book_likesCreateNestedManyWithoutPatronInput
    book_consulted?: Book_consultedCreateNestedManyWithoutPatronInput
    circulation?: CirculationCreateNestedManyWithoutPatronInput
  }

  export type PatronUncheckedCreateInput = {
    id?: string
    google_Id?: string | null
    firstname: string
    lastname: string
    displayname?: string | null
    address?: string | null
    email: string
    password?: string | null
    profile_img?: string | null
    borrowed_books?: PatronCreateborrowed_booksInput | string[]
    isEmailVerified?: boolean
    created_at?: Date | string
    updated_at?: Date | string
    book_likes?: Book_likesUncheckedCreateNestedManyWithoutPatronInput
    book_consulted?: Book_consultedUncheckedCreateNestedManyWithoutPatronInput
    circulation?: CirculationUncheckedCreateNestedManyWithoutPatronInput
  }

  export type PatronUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    google_Id?: NullableStringFieldUpdateOperationsInput | string | null
    firstname?: StringFieldUpdateOperationsInput | string
    lastname?: StringFieldUpdateOperationsInput | string
    displayname?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    profile_img?: NullableStringFieldUpdateOperationsInput | string | null
    borrowed_books?: PatronUpdateborrowed_booksInput | string[]
    isEmailVerified?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    book_likes?: Book_likesUpdateManyWithoutPatronNestedInput
    book_consulted?: Book_consultedUpdateManyWithoutPatronNestedInput
    circulation?: CirculationUpdateManyWithoutPatronNestedInput
  }

  export type PatronUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    google_Id?: NullableStringFieldUpdateOperationsInput | string | null
    firstname?: StringFieldUpdateOperationsInput | string
    lastname?: StringFieldUpdateOperationsInput | string
    displayname?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    profile_img?: NullableStringFieldUpdateOperationsInput | string | null
    borrowed_books?: PatronUpdateborrowed_booksInput | string[]
    isEmailVerified?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    book_likes?: Book_likesUncheckedUpdateManyWithoutPatronNestedInput
    book_consulted?: Book_consultedUncheckedUpdateManyWithoutPatronNestedInput
    circulation?: CirculationUncheckedUpdateManyWithoutPatronNestedInput
  }

  export type PatronCreateManyInput = {
    id?: string
    google_Id?: string | null
    firstname: string
    lastname: string
    displayname?: string | null
    address?: string | null
    email: string
    password?: string | null
    profile_img?: string | null
    borrowed_books?: PatronCreateborrowed_booksInput | string[]
    isEmailVerified?: boolean
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type PatronUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    google_Id?: NullableStringFieldUpdateOperationsInput | string | null
    firstname?: StringFieldUpdateOperationsInput | string
    lastname?: StringFieldUpdateOperationsInput | string
    displayname?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    profile_img?: NullableStringFieldUpdateOperationsInput | string | null
    borrowed_books?: PatronUpdateborrowed_booksInput | string[]
    isEmailVerified?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PatronUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    google_Id?: NullableStringFieldUpdateOperationsInput | string | null
    firstname?: StringFieldUpdateOperationsInput | string
    lastname?: StringFieldUpdateOperationsInput | string
    displayname?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    profile_img?: NullableStringFieldUpdateOperationsInput | string | null
    borrowed_books?: PatronUpdateborrowed_booksInput | string[]
    isEmailVerified?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type Book_likesCreateInput = {
    liked_at?: Date | string
    book: BookCreateNestedOneWithoutBook_likesInput
    patron: PatronCreateNestedOneWithoutBook_likesInput
  }

  export type Book_likesUncheckedCreateInput = {
    book_id: string
    patron_id: string
    liked_at?: Date | string
  }

  export type Book_likesUpdateInput = {
    liked_at?: DateTimeFieldUpdateOperationsInput | Date | string
    book?: BookUpdateOneRequiredWithoutBook_likesNestedInput
    patron?: PatronUpdateOneRequiredWithoutBook_likesNestedInput
  }

  export type Book_likesUncheckedUpdateInput = {
    book_id?: StringFieldUpdateOperationsInput | string
    patron_id?: StringFieldUpdateOperationsInput | string
    liked_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type Book_likesCreateManyInput = {
    book_id: string
    patron_id: string
    liked_at?: Date | string
  }

  export type Book_likesUpdateManyMutationInput = {
    liked_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type Book_likesUncheckedUpdateManyInput = {
    book_id?: StringFieldUpdateOperationsInput | string
    patron_id?: StringFieldUpdateOperationsInput | string
    liked_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type Book_consultedCreateInput = {
    consulted_at?: Date | string
    book: BookCreateNestedOneWithoutBook_consultedInput
    patron: PatronCreateNestedOneWithoutBook_consultedInput
  }

  export type Book_consultedUncheckedCreateInput = {
    book_id: string
    patron_id: string
    consulted_at?: Date | string
  }

  export type Book_consultedUpdateInput = {
    consulted_at?: DateTimeFieldUpdateOperationsInput | Date | string
    book?: BookUpdateOneRequiredWithoutBook_consultedNestedInput
    patron?: PatronUpdateOneRequiredWithoutBook_consultedNestedInput
  }

  export type Book_consultedUncheckedUpdateInput = {
    book_id?: StringFieldUpdateOperationsInput | string
    patron_id?: StringFieldUpdateOperationsInput | string
    consulted_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type Book_consultedCreateManyInput = {
    book_id: string
    patron_id: string
    consulted_at?: Date | string
  }

  export type Book_consultedUpdateManyMutationInput = {
    consulted_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type Book_consultedUncheckedUpdateManyInput = {
    book_id?: StringFieldUpdateOperationsInput | string
    patron_id?: StringFieldUpdateOperationsInput | string
    consulted_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CirculationCreateInput = {
    checkout?: Date | string
    date_due: Date | string
    book: BookCreateNestedOneWithoutCirculationInput
    patron: PatronCreateNestedOneWithoutCirculationInput
  }

  export type CirculationUncheckedCreateInput = {
    book_id: string
    patron_id: string
    checkout?: Date | string
    date_due: Date | string
  }

  export type CirculationUpdateInput = {
    checkout?: DateTimeFieldUpdateOperationsInput | Date | string
    date_due?: DateTimeFieldUpdateOperationsInput | Date | string
    book?: BookUpdateOneRequiredWithoutCirculationNestedInput
    patron?: PatronUpdateOneRequiredWithoutCirculationNestedInput
  }

  export type CirculationUncheckedUpdateInput = {
    book_id?: StringFieldUpdateOperationsInput | string
    patron_id?: StringFieldUpdateOperationsInput | string
    checkout?: DateTimeFieldUpdateOperationsInput | Date | string
    date_due?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CirculationCreateManyInput = {
    book_id: string
    patron_id: string
    checkout?: Date | string
    date_due: Date | string
  }

  export type CirculationUpdateManyMutationInput = {
    checkout?: DateTimeFieldUpdateOperationsInput | Date | string
    date_due?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CirculationUncheckedUpdateManyInput = {
    book_id?: StringFieldUpdateOperationsInput | string
    patron_id?: StringFieldUpdateOperationsInput | string
    checkout?: DateTimeFieldUpdateOperationsInput | Date | string
    date_due?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type SessionCountOrderByAggregateInput = {
    id?: SortOrder
    sid?: SortOrder
    data?: SortOrder
    expiresAt?: SortOrder
  }

  export type SessionMaxOrderByAggregateInput = {
    id?: SortOrder
    sid?: SortOrder
    data?: SortOrder
    expiresAt?: SortOrder
  }

  export type SessionMinOrderByAggregateInput = {
    id?: SortOrder
    sid?: SortOrder
    data?: SortOrder
    expiresAt?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    has?: string | StringFieldRefInput<$PrismaModel> | null
    hasEvery?: string[] | ListStringFieldRefInput<$PrismaModel>
    hasSome?: string[] | ListStringFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type LibrarianCountOrderByAggregateInput = {
    id?: SortOrder
    firstname?: SortOrder
    lastname?: SortOrder
    displayname?: SortOrder
    email?: SortOrder
    password?: SortOrder
    profile_img?: SortOrder
    address?: SortOrder
    contact?: SortOrder
    rank?: SortOrder
    books_entered?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type LibrarianAvgOrderByAggregateInput = {
    rank?: SortOrder
  }

  export type LibrarianMaxOrderByAggregateInput = {
    id?: SortOrder
    firstname?: SortOrder
    lastname?: SortOrder
    displayname?: SortOrder
    email?: SortOrder
    password?: SortOrder
    profile_img?: SortOrder
    address?: SortOrder
    contact?: SortOrder
    rank?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type LibrarianMinOrderByAggregateInput = {
    id?: SortOrder
    firstname?: SortOrder
    lastname?: SortOrder
    displayname?: SortOrder
    email?: SortOrder
    password?: SortOrder
    profile_img?: SortOrder
    address?: SortOrder
    contact?: SortOrder
    rank?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type LibrarianSumOrderByAggregateInput = {
    rank?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type EnumGMDFilter<$PrismaModel = never> = {
    equals?: $Enums.GMD | EnumGMDFieldRefInput<$PrismaModel>
    in?: $Enums.GMD[] | ListEnumGMDFieldRefInput<$PrismaModel>
    notIn?: $Enums.GMD[] | ListEnumGMDFieldRefInput<$PrismaModel>
    not?: NestedEnumGMDFilter<$PrismaModel> | $Enums.GMD
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type Book_likesListRelationFilter = {
    every?: Book_likesWhereInput
    some?: Book_likesWhereInput
    none?: Book_likesWhereInput
  }

  export type Book_consultedListRelationFilter = {
    every?: Book_consultedWhereInput
    some?: Book_consultedWhereInput
    none?: Book_consultedWhereInput
  }

  export type CirculationListRelationFilter = {
    every?: CirculationWhereInput
    some?: CirculationWhereInput
    none?: CirculationWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type Book_likesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type Book_consultedOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CirculationOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type BookCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    author?: SortOrder
    subject?: SortOrder
    imprint?: SortOrder
    collation?: SortOrder
    G_M_D?: SortOrder
    book_cover?: SortOrder
    material_number?: SortOrder
    availability?: SortOrder
    bibilography?: SortOrder
    Keywords?: SortOrder
    other_Title?: SortOrder
    co_author?: SortOrder
    editor?: SortOrder
    edition?: SortOrder
    series?: SortOrder
    web_address?: SortOrder
    entered_at?: SortOrder
  }

  export type BookMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    author?: SortOrder
    imprint?: SortOrder
    collation?: SortOrder
    G_M_D?: SortOrder
    book_cover?: SortOrder
    material_number?: SortOrder
    availability?: SortOrder
    bibilography?: SortOrder
    other_Title?: SortOrder
    co_author?: SortOrder
    editor?: SortOrder
    edition?: SortOrder
    series?: SortOrder
    web_address?: SortOrder
    entered_at?: SortOrder
  }

  export type BookMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    author?: SortOrder
    imprint?: SortOrder
    collation?: SortOrder
    G_M_D?: SortOrder
    book_cover?: SortOrder
    material_number?: SortOrder
    availability?: SortOrder
    bibilography?: SortOrder
    other_Title?: SortOrder
    co_author?: SortOrder
    editor?: SortOrder
    edition?: SortOrder
    series?: SortOrder
    web_address?: SortOrder
    entered_at?: SortOrder
  }

  export type EnumGMDWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.GMD | EnumGMDFieldRefInput<$PrismaModel>
    in?: $Enums.GMD[] | ListEnumGMDFieldRefInput<$PrismaModel>
    notIn?: $Enums.GMD[] | ListEnumGMDFieldRefInput<$PrismaModel>
    not?: NestedEnumGMDWithAggregatesFilter<$PrismaModel> | $Enums.GMD
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumGMDFilter<$PrismaModel>
    _max?: NestedEnumGMDFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type EmailVerificationTokenCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    token?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
  }

  export type EmailVerificationTokenMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    token?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
  }

  export type EmailVerificationTokenMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    token?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
  }

  export type PatronCountOrderByAggregateInput = {
    id?: SortOrder
    google_Id?: SortOrder
    firstname?: SortOrder
    lastname?: SortOrder
    displayname?: SortOrder
    address?: SortOrder
    email?: SortOrder
    password?: SortOrder
    profile_img?: SortOrder
    borrowed_books?: SortOrder
    isEmailVerified?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type PatronMaxOrderByAggregateInput = {
    id?: SortOrder
    google_Id?: SortOrder
    firstname?: SortOrder
    lastname?: SortOrder
    displayname?: SortOrder
    address?: SortOrder
    email?: SortOrder
    password?: SortOrder
    profile_img?: SortOrder
    isEmailVerified?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type PatronMinOrderByAggregateInput = {
    id?: SortOrder
    google_Id?: SortOrder
    firstname?: SortOrder
    lastname?: SortOrder
    displayname?: SortOrder
    address?: SortOrder
    email?: SortOrder
    password?: SortOrder
    profile_img?: SortOrder
    isEmailVerified?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type BookScalarRelationFilter = {
    is?: BookWhereInput
    isNot?: BookWhereInput
  }

  export type PatronScalarRelationFilter = {
    is?: PatronWhereInput
    isNot?: PatronWhereInput
  }

  export type Book_likesCountOrderByAggregateInput = {
    book_id?: SortOrder
    patron_id?: SortOrder
    liked_at?: SortOrder
  }

  export type Book_likesMaxOrderByAggregateInput = {
    book_id?: SortOrder
    patron_id?: SortOrder
    liked_at?: SortOrder
  }

  export type Book_likesMinOrderByAggregateInput = {
    book_id?: SortOrder
    patron_id?: SortOrder
    liked_at?: SortOrder
  }

  export type Book_consultedCountOrderByAggregateInput = {
    book_id?: SortOrder
    patron_id?: SortOrder
    consulted_at?: SortOrder
  }

  export type Book_consultedMaxOrderByAggregateInput = {
    book_id?: SortOrder
    patron_id?: SortOrder
    consulted_at?: SortOrder
  }

  export type Book_consultedMinOrderByAggregateInput = {
    book_id?: SortOrder
    patron_id?: SortOrder
    consulted_at?: SortOrder
  }

  export type CirculationCountOrderByAggregateInput = {
    book_id?: SortOrder
    patron_id?: SortOrder
    checkout?: SortOrder
    date_due?: SortOrder
  }

  export type CirculationMaxOrderByAggregateInput = {
    book_id?: SortOrder
    patron_id?: SortOrder
    checkout?: SortOrder
    date_due?: SortOrder
  }

  export type CirculationMinOrderByAggregateInput = {
    book_id?: SortOrder
    patron_id?: SortOrder
    checkout?: SortOrder
    date_due?: SortOrder
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type LibrarianCreatebooks_enteredInput = {
    set: string[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type LibrarianUpdatebooks_enteredInput = {
    set?: string[]
    push?: string | string[]
  }

  export type BookCreatesubjectInput = {
    set: string[]
  }

  export type BookCreateKeywordsInput = {
    set: string[]
  }

  export type Book_likesCreateNestedManyWithoutBookInput = {
    create?: XOR<Book_likesCreateWithoutBookInput, Book_likesUncheckedCreateWithoutBookInput> | Book_likesCreateWithoutBookInput[] | Book_likesUncheckedCreateWithoutBookInput[]
    connectOrCreate?: Book_likesCreateOrConnectWithoutBookInput | Book_likesCreateOrConnectWithoutBookInput[]
    createMany?: Book_likesCreateManyBookInputEnvelope
    connect?: Book_likesWhereUniqueInput | Book_likesWhereUniqueInput[]
  }

  export type Book_consultedCreateNestedManyWithoutBookInput = {
    create?: XOR<Book_consultedCreateWithoutBookInput, Book_consultedUncheckedCreateWithoutBookInput> | Book_consultedCreateWithoutBookInput[] | Book_consultedUncheckedCreateWithoutBookInput[]
    connectOrCreate?: Book_consultedCreateOrConnectWithoutBookInput | Book_consultedCreateOrConnectWithoutBookInput[]
    createMany?: Book_consultedCreateManyBookInputEnvelope
    connect?: Book_consultedWhereUniqueInput | Book_consultedWhereUniqueInput[]
  }

  export type CirculationCreateNestedManyWithoutBookInput = {
    create?: XOR<CirculationCreateWithoutBookInput, CirculationUncheckedCreateWithoutBookInput> | CirculationCreateWithoutBookInput[] | CirculationUncheckedCreateWithoutBookInput[]
    connectOrCreate?: CirculationCreateOrConnectWithoutBookInput | CirculationCreateOrConnectWithoutBookInput[]
    createMany?: CirculationCreateManyBookInputEnvelope
    connect?: CirculationWhereUniqueInput | CirculationWhereUniqueInput[]
  }

  export type Book_likesUncheckedCreateNestedManyWithoutBookInput = {
    create?: XOR<Book_likesCreateWithoutBookInput, Book_likesUncheckedCreateWithoutBookInput> | Book_likesCreateWithoutBookInput[] | Book_likesUncheckedCreateWithoutBookInput[]
    connectOrCreate?: Book_likesCreateOrConnectWithoutBookInput | Book_likesCreateOrConnectWithoutBookInput[]
    createMany?: Book_likesCreateManyBookInputEnvelope
    connect?: Book_likesWhereUniqueInput | Book_likesWhereUniqueInput[]
  }

  export type Book_consultedUncheckedCreateNestedManyWithoutBookInput = {
    create?: XOR<Book_consultedCreateWithoutBookInput, Book_consultedUncheckedCreateWithoutBookInput> | Book_consultedCreateWithoutBookInput[] | Book_consultedUncheckedCreateWithoutBookInput[]
    connectOrCreate?: Book_consultedCreateOrConnectWithoutBookInput | Book_consultedCreateOrConnectWithoutBookInput[]
    createMany?: Book_consultedCreateManyBookInputEnvelope
    connect?: Book_consultedWhereUniqueInput | Book_consultedWhereUniqueInput[]
  }

  export type CirculationUncheckedCreateNestedManyWithoutBookInput = {
    create?: XOR<CirculationCreateWithoutBookInput, CirculationUncheckedCreateWithoutBookInput> | CirculationCreateWithoutBookInput[] | CirculationUncheckedCreateWithoutBookInput[]
    connectOrCreate?: CirculationCreateOrConnectWithoutBookInput | CirculationCreateOrConnectWithoutBookInput[]
    createMany?: CirculationCreateManyBookInputEnvelope
    connect?: CirculationWhereUniqueInput | CirculationWhereUniqueInput[]
  }

  export type BookUpdatesubjectInput = {
    set?: string[]
    push?: string | string[]
  }

  export type EnumGMDFieldUpdateOperationsInput = {
    set?: $Enums.GMD
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type BookUpdateKeywordsInput = {
    set?: string[]
    push?: string | string[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type Book_likesUpdateManyWithoutBookNestedInput = {
    create?: XOR<Book_likesCreateWithoutBookInput, Book_likesUncheckedCreateWithoutBookInput> | Book_likesCreateWithoutBookInput[] | Book_likesUncheckedCreateWithoutBookInput[]
    connectOrCreate?: Book_likesCreateOrConnectWithoutBookInput | Book_likesCreateOrConnectWithoutBookInput[]
    upsert?: Book_likesUpsertWithWhereUniqueWithoutBookInput | Book_likesUpsertWithWhereUniqueWithoutBookInput[]
    createMany?: Book_likesCreateManyBookInputEnvelope
    set?: Book_likesWhereUniqueInput | Book_likesWhereUniqueInput[]
    disconnect?: Book_likesWhereUniqueInput | Book_likesWhereUniqueInput[]
    delete?: Book_likesWhereUniqueInput | Book_likesWhereUniqueInput[]
    connect?: Book_likesWhereUniqueInput | Book_likesWhereUniqueInput[]
    update?: Book_likesUpdateWithWhereUniqueWithoutBookInput | Book_likesUpdateWithWhereUniqueWithoutBookInput[]
    updateMany?: Book_likesUpdateManyWithWhereWithoutBookInput | Book_likesUpdateManyWithWhereWithoutBookInput[]
    deleteMany?: Book_likesScalarWhereInput | Book_likesScalarWhereInput[]
  }

  export type Book_consultedUpdateManyWithoutBookNestedInput = {
    create?: XOR<Book_consultedCreateWithoutBookInput, Book_consultedUncheckedCreateWithoutBookInput> | Book_consultedCreateWithoutBookInput[] | Book_consultedUncheckedCreateWithoutBookInput[]
    connectOrCreate?: Book_consultedCreateOrConnectWithoutBookInput | Book_consultedCreateOrConnectWithoutBookInput[]
    upsert?: Book_consultedUpsertWithWhereUniqueWithoutBookInput | Book_consultedUpsertWithWhereUniqueWithoutBookInput[]
    createMany?: Book_consultedCreateManyBookInputEnvelope
    set?: Book_consultedWhereUniqueInput | Book_consultedWhereUniqueInput[]
    disconnect?: Book_consultedWhereUniqueInput | Book_consultedWhereUniqueInput[]
    delete?: Book_consultedWhereUniqueInput | Book_consultedWhereUniqueInput[]
    connect?: Book_consultedWhereUniqueInput | Book_consultedWhereUniqueInput[]
    update?: Book_consultedUpdateWithWhereUniqueWithoutBookInput | Book_consultedUpdateWithWhereUniqueWithoutBookInput[]
    updateMany?: Book_consultedUpdateManyWithWhereWithoutBookInput | Book_consultedUpdateManyWithWhereWithoutBookInput[]
    deleteMany?: Book_consultedScalarWhereInput | Book_consultedScalarWhereInput[]
  }

  export type CirculationUpdateManyWithoutBookNestedInput = {
    create?: XOR<CirculationCreateWithoutBookInput, CirculationUncheckedCreateWithoutBookInput> | CirculationCreateWithoutBookInput[] | CirculationUncheckedCreateWithoutBookInput[]
    connectOrCreate?: CirculationCreateOrConnectWithoutBookInput | CirculationCreateOrConnectWithoutBookInput[]
    upsert?: CirculationUpsertWithWhereUniqueWithoutBookInput | CirculationUpsertWithWhereUniqueWithoutBookInput[]
    createMany?: CirculationCreateManyBookInputEnvelope
    set?: CirculationWhereUniqueInput | CirculationWhereUniqueInput[]
    disconnect?: CirculationWhereUniqueInput | CirculationWhereUniqueInput[]
    delete?: CirculationWhereUniqueInput | CirculationWhereUniqueInput[]
    connect?: CirculationWhereUniqueInput | CirculationWhereUniqueInput[]
    update?: CirculationUpdateWithWhereUniqueWithoutBookInput | CirculationUpdateWithWhereUniqueWithoutBookInput[]
    updateMany?: CirculationUpdateManyWithWhereWithoutBookInput | CirculationUpdateManyWithWhereWithoutBookInput[]
    deleteMany?: CirculationScalarWhereInput | CirculationScalarWhereInput[]
  }

  export type Book_likesUncheckedUpdateManyWithoutBookNestedInput = {
    create?: XOR<Book_likesCreateWithoutBookInput, Book_likesUncheckedCreateWithoutBookInput> | Book_likesCreateWithoutBookInput[] | Book_likesUncheckedCreateWithoutBookInput[]
    connectOrCreate?: Book_likesCreateOrConnectWithoutBookInput | Book_likesCreateOrConnectWithoutBookInput[]
    upsert?: Book_likesUpsertWithWhereUniqueWithoutBookInput | Book_likesUpsertWithWhereUniqueWithoutBookInput[]
    createMany?: Book_likesCreateManyBookInputEnvelope
    set?: Book_likesWhereUniqueInput | Book_likesWhereUniqueInput[]
    disconnect?: Book_likesWhereUniqueInput | Book_likesWhereUniqueInput[]
    delete?: Book_likesWhereUniqueInput | Book_likesWhereUniqueInput[]
    connect?: Book_likesWhereUniqueInput | Book_likesWhereUniqueInput[]
    update?: Book_likesUpdateWithWhereUniqueWithoutBookInput | Book_likesUpdateWithWhereUniqueWithoutBookInput[]
    updateMany?: Book_likesUpdateManyWithWhereWithoutBookInput | Book_likesUpdateManyWithWhereWithoutBookInput[]
    deleteMany?: Book_likesScalarWhereInput | Book_likesScalarWhereInput[]
  }

  export type Book_consultedUncheckedUpdateManyWithoutBookNestedInput = {
    create?: XOR<Book_consultedCreateWithoutBookInput, Book_consultedUncheckedCreateWithoutBookInput> | Book_consultedCreateWithoutBookInput[] | Book_consultedUncheckedCreateWithoutBookInput[]
    connectOrCreate?: Book_consultedCreateOrConnectWithoutBookInput | Book_consultedCreateOrConnectWithoutBookInput[]
    upsert?: Book_consultedUpsertWithWhereUniqueWithoutBookInput | Book_consultedUpsertWithWhereUniqueWithoutBookInput[]
    createMany?: Book_consultedCreateManyBookInputEnvelope
    set?: Book_consultedWhereUniqueInput | Book_consultedWhereUniqueInput[]
    disconnect?: Book_consultedWhereUniqueInput | Book_consultedWhereUniqueInput[]
    delete?: Book_consultedWhereUniqueInput | Book_consultedWhereUniqueInput[]
    connect?: Book_consultedWhereUniqueInput | Book_consultedWhereUniqueInput[]
    update?: Book_consultedUpdateWithWhereUniqueWithoutBookInput | Book_consultedUpdateWithWhereUniqueWithoutBookInput[]
    updateMany?: Book_consultedUpdateManyWithWhereWithoutBookInput | Book_consultedUpdateManyWithWhereWithoutBookInput[]
    deleteMany?: Book_consultedScalarWhereInput | Book_consultedScalarWhereInput[]
  }

  export type CirculationUncheckedUpdateManyWithoutBookNestedInput = {
    create?: XOR<CirculationCreateWithoutBookInput, CirculationUncheckedCreateWithoutBookInput> | CirculationCreateWithoutBookInput[] | CirculationUncheckedCreateWithoutBookInput[]
    connectOrCreate?: CirculationCreateOrConnectWithoutBookInput | CirculationCreateOrConnectWithoutBookInput[]
    upsert?: CirculationUpsertWithWhereUniqueWithoutBookInput | CirculationUpsertWithWhereUniqueWithoutBookInput[]
    createMany?: CirculationCreateManyBookInputEnvelope
    set?: CirculationWhereUniqueInput | CirculationWhereUniqueInput[]
    disconnect?: CirculationWhereUniqueInput | CirculationWhereUniqueInput[]
    delete?: CirculationWhereUniqueInput | CirculationWhereUniqueInput[]
    connect?: CirculationWhereUniqueInput | CirculationWhereUniqueInput[]
    update?: CirculationUpdateWithWhereUniqueWithoutBookInput | CirculationUpdateWithWhereUniqueWithoutBookInput[]
    updateMany?: CirculationUpdateManyWithWhereWithoutBookInput | CirculationUpdateManyWithWhereWithoutBookInput[]
    deleteMany?: CirculationScalarWhereInput | CirculationScalarWhereInput[]
  }

  export type PatronCreateborrowed_booksInput = {
    set: string[]
  }

  export type Book_likesCreateNestedManyWithoutPatronInput = {
    create?: XOR<Book_likesCreateWithoutPatronInput, Book_likesUncheckedCreateWithoutPatronInput> | Book_likesCreateWithoutPatronInput[] | Book_likesUncheckedCreateWithoutPatronInput[]
    connectOrCreate?: Book_likesCreateOrConnectWithoutPatronInput | Book_likesCreateOrConnectWithoutPatronInput[]
    createMany?: Book_likesCreateManyPatronInputEnvelope
    connect?: Book_likesWhereUniqueInput | Book_likesWhereUniqueInput[]
  }

  export type Book_consultedCreateNestedManyWithoutPatronInput = {
    create?: XOR<Book_consultedCreateWithoutPatronInput, Book_consultedUncheckedCreateWithoutPatronInput> | Book_consultedCreateWithoutPatronInput[] | Book_consultedUncheckedCreateWithoutPatronInput[]
    connectOrCreate?: Book_consultedCreateOrConnectWithoutPatronInput | Book_consultedCreateOrConnectWithoutPatronInput[]
    createMany?: Book_consultedCreateManyPatronInputEnvelope
    connect?: Book_consultedWhereUniqueInput | Book_consultedWhereUniqueInput[]
  }

  export type CirculationCreateNestedManyWithoutPatronInput = {
    create?: XOR<CirculationCreateWithoutPatronInput, CirculationUncheckedCreateWithoutPatronInput> | CirculationCreateWithoutPatronInput[] | CirculationUncheckedCreateWithoutPatronInput[]
    connectOrCreate?: CirculationCreateOrConnectWithoutPatronInput | CirculationCreateOrConnectWithoutPatronInput[]
    createMany?: CirculationCreateManyPatronInputEnvelope
    connect?: CirculationWhereUniqueInput | CirculationWhereUniqueInput[]
  }

  export type Book_likesUncheckedCreateNestedManyWithoutPatronInput = {
    create?: XOR<Book_likesCreateWithoutPatronInput, Book_likesUncheckedCreateWithoutPatronInput> | Book_likesCreateWithoutPatronInput[] | Book_likesUncheckedCreateWithoutPatronInput[]
    connectOrCreate?: Book_likesCreateOrConnectWithoutPatronInput | Book_likesCreateOrConnectWithoutPatronInput[]
    createMany?: Book_likesCreateManyPatronInputEnvelope
    connect?: Book_likesWhereUniqueInput | Book_likesWhereUniqueInput[]
  }

  export type Book_consultedUncheckedCreateNestedManyWithoutPatronInput = {
    create?: XOR<Book_consultedCreateWithoutPatronInput, Book_consultedUncheckedCreateWithoutPatronInput> | Book_consultedCreateWithoutPatronInput[] | Book_consultedUncheckedCreateWithoutPatronInput[]
    connectOrCreate?: Book_consultedCreateOrConnectWithoutPatronInput | Book_consultedCreateOrConnectWithoutPatronInput[]
    createMany?: Book_consultedCreateManyPatronInputEnvelope
    connect?: Book_consultedWhereUniqueInput | Book_consultedWhereUniqueInput[]
  }

  export type CirculationUncheckedCreateNestedManyWithoutPatronInput = {
    create?: XOR<CirculationCreateWithoutPatronInput, CirculationUncheckedCreateWithoutPatronInput> | CirculationCreateWithoutPatronInput[] | CirculationUncheckedCreateWithoutPatronInput[]
    connectOrCreate?: CirculationCreateOrConnectWithoutPatronInput | CirculationCreateOrConnectWithoutPatronInput[]
    createMany?: CirculationCreateManyPatronInputEnvelope
    connect?: CirculationWhereUniqueInput | CirculationWhereUniqueInput[]
  }

  export type PatronUpdateborrowed_booksInput = {
    set?: string[]
    push?: string | string[]
  }

  export type Book_likesUpdateManyWithoutPatronNestedInput = {
    create?: XOR<Book_likesCreateWithoutPatronInput, Book_likesUncheckedCreateWithoutPatronInput> | Book_likesCreateWithoutPatronInput[] | Book_likesUncheckedCreateWithoutPatronInput[]
    connectOrCreate?: Book_likesCreateOrConnectWithoutPatronInput | Book_likesCreateOrConnectWithoutPatronInput[]
    upsert?: Book_likesUpsertWithWhereUniqueWithoutPatronInput | Book_likesUpsertWithWhereUniqueWithoutPatronInput[]
    createMany?: Book_likesCreateManyPatronInputEnvelope
    set?: Book_likesWhereUniqueInput | Book_likesWhereUniqueInput[]
    disconnect?: Book_likesWhereUniqueInput | Book_likesWhereUniqueInput[]
    delete?: Book_likesWhereUniqueInput | Book_likesWhereUniqueInput[]
    connect?: Book_likesWhereUniqueInput | Book_likesWhereUniqueInput[]
    update?: Book_likesUpdateWithWhereUniqueWithoutPatronInput | Book_likesUpdateWithWhereUniqueWithoutPatronInput[]
    updateMany?: Book_likesUpdateManyWithWhereWithoutPatronInput | Book_likesUpdateManyWithWhereWithoutPatronInput[]
    deleteMany?: Book_likesScalarWhereInput | Book_likesScalarWhereInput[]
  }

  export type Book_consultedUpdateManyWithoutPatronNestedInput = {
    create?: XOR<Book_consultedCreateWithoutPatronInput, Book_consultedUncheckedCreateWithoutPatronInput> | Book_consultedCreateWithoutPatronInput[] | Book_consultedUncheckedCreateWithoutPatronInput[]
    connectOrCreate?: Book_consultedCreateOrConnectWithoutPatronInput | Book_consultedCreateOrConnectWithoutPatronInput[]
    upsert?: Book_consultedUpsertWithWhereUniqueWithoutPatronInput | Book_consultedUpsertWithWhereUniqueWithoutPatronInput[]
    createMany?: Book_consultedCreateManyPatronInputEnvelope
    set?: Book_consultedWhereUniqueInput | Book_consultedWhereUniqueInput[]
    disconnect?: Book_consultedWhereUniqueInput | Book_consultedWhereUniqueInput[]
    delete?: Book_consultedWhereUniqueInput | Book_consultedWhereUniqueInput[]
    connect?: Book_consultedWhereUniqueInput | Book_consultedWhereUniqueInput[]
    update?: Book_consultedUpdateWithWhereUniqueWithoutPatronInput | Book_consultedUpdateWithWhereUniqueWithoutPatronInput[]
    updateMany?: Book_consultedUpdateManyWithWhereWithoutPatronInput | Book_consultedUpdateManyWithWhereWithoutPatronInput[]
    deleteMany?: Book_consultedScalarWhereInput | Book_consultedScalarWhereInput[]
  }

  export type CirculationUpdateManyWithoutPatronNestedInput = {
    create?: XOR<CirculationCreateWithoutPatronInput, CirculationUncheckedCreateWithoutPatronInput> | CirculationCreateWithoutPatronInput[] | CirculationUncheckedCreateWithoutPatronInput[]
    connectOrCreate?: CirculationCreateOrConnectWithoutPatronInput | CirculationCreateOrConnectWithoutPatronInput[]
    upsert?: CirculationUpsertWithWhereUniqueWithoutPatronInput | CirculationUpsertWithWhereUniqueWithoutPatronInput[]
    createMany?: CirculationCreateManyPatronInputEnvelope
    set?: CirculationWhereUniqueInput | CirculationWhereUniqueInput[]
    disconnect?: CirculationWhereUniqueInput | CirculationWhereUniqueInput[]
    delete?: CirculationWhereUniqueInput | CirculationWhereUniqueInput[]
    connect?: CirculationWhereUniqueInput | CirculationWhereUniqueInput[]
    update?: CirculationUpdateWithWhereUniqueWithoutPatronInput | CirculationUpdateWithWhereUniqueWithoutPatronInput[]
    updateMany?: CirculationUpdateManyWithWhereWithoutPatronInput | CirculationUpdateManyWithWhereWithoutPatronInput[]
    deleteMany?: CirculationScalarWhereInput | CirculationScalarWhereInput[]
  }

  export type Book_likesUncheckedUpdateManyWithoutPatronNestedInput = {
    create?: XOR<Book_likesCreateWithoutPatronInput, Book_likesUncheckedCreateWithoutPatronInput> | Book_likesCreateWithoutPatronInput[] | Book_likesUncheckedCreateWithoutPatronInput[]
    connectOrCreate?: Book_likesCreateOrConnectWithoutPatronInput | Book_likesCreateOrConnectWithoutPatronInput[]
    upsert?: Book_likesUpsertWithWhereUniqueWithoutPatronInput | Book_likesUpsertWithWhereUniqueWithoutPatronInput[]
    createMany?: Book_likesCreateManyPatronInputEnvelope
    set?: Book_likesWhereUniqueInput | Book_likesWhereUniqueInput[]
    disconnect?: Book_likesWhereUniqueInput | Book_likesWhereUniqueInput[]
    delete?: Book_likesWhereUniqueInput | Book_likesWhereUniqueInput[]
    connect?: Book_likesWhereUniqueInput | Book_likesWhereUniqueInput[]
    update?: Book_likesUpdateWithWhereUniqueWithoutPatronInput | Book_likesUpdateWithWhereUniqueWithoutPatronInput[]
    updateMany?: Book_likesUpdateManyWithWhereWithoutPatronInput | Book_likesUpdateManyWithWhereWithoutPatronInput[]
    deleteMany?: Book_likesScalarWhereInput | Book_likesScalarWhereInput[]
  }

  export type Book_consultedUncheckedUpdateManyWithoutPatronNestedInput = {
    create?: XOR<Book_consultedCreateWithoutPatronInput, Book_consultedUncheckedCreateWithoutPatronInput> | Book_consultedCreateWithoutPatronInput[] | Book_consultedUncheckedCreateWithoutPatronInput[]
    connectOrCreate?: Book_consultedCreateOrConnectWithoutPatronInput | Book_consultedCreateOrConnectWithoutPatronInput[]
    upsert?: Book_consultedUpsertWithWhereUniqueWithoutPatronInput | Book_consultedUpsertWithWhereUniqueWithoutPatronInput[]
    createMany?: Book_consultedCreateManyPatronInputEnvelope
    set?: Book_consultedWhereUniqueInput | Book_consultedWhereUniqueInput[]
    disconnect?: Book_consultedWhereUniqueInput | Book_consultedWhereUniqueInput[]
    delete?: Book_consultedWhereUniqueInput | Book_consultedWhereUniqueInput[]
    connect?: Book_consultedWhereUniqueInput | Book_consultedWhereUniqueInput[]
    update?: Book_consultedUpdateWithWhereUniqueWithoutPatronInput | Book_consultedUpdateWithWhereUniqueWithoutPatronInput[]
    updateMany?: Book_consultedUpdateManyWithWhereWithoutPatronInput | Book_consultedUpdateManyWithWhereWithoutPatronInput[]
    deleteMany?: Book_consultedScalarWhereInput | Book_consultedScalarWhereInput[]
  }

  export type CirculationUncheckedUpdateManyWithoutPatronNestedInput = {
    create?: XOR<CirculationCreateWithoutPatronInput, CirculationUncheckedCreateWithoutPatronInput> | CirculationCreateWithoutPatronInput[] | CirculationUncheckedCreateWithoutPatronInput[]
    connectOrCreate?: CirculationCreateOrConnectWithoutPatronInput | CirculationCreateOrConnectWithoutPatronInput[]
    upsert?: CirculationUpsertWithWhereUniqueWithoutPatronInput | CirculationUpsertWithWhereUniqueWithoutPatronInput[]
    createMany?: CirculationCreateManyPatronInputEnvelope
    set?: CirculationWhereUniqueInput | CirculationWhereUniqueInput[]
    disconnect?: CirculationWhereUniqueInput | CirculationWhereUniqueInput[]
    delete?: CirculationWhereUniqueInput | CirculationWhereUniqueInput[]
    connect?: CirculationWhereUniqueInput | CirculationWhereUniqueInput[]
    update?: CirculationUpdateWithWhereUniqueWithoutPatronInput | CirculationUpdateWithWhereUniqueWithoutPatronInput[]
    updateMany?: CirculationUpdateManyWithWhereWithoutPatronInput | CirculationUpdateManyWithWhereWithoutPatronInput[]
    deleteMany?: CirculationScalarWhereInput | CirculationScalarWhereInput[]
  }

  export type BookCreateNestedOneWithoutBook_likesInput = {
    create?: XOR<BookCreateWithoutBook_likesInput, BookUncheckedCreateWithoutBook_likesInput>
    connectOrCreate?: BookCreateOrConnectWithoutBook_likesInput
    connect?: BookWhereUniqueInput
  }

  export type PatronCreateNestedOneWithoutBook_likesInput = {
    create?: XOR<PatronCreateWithoutBook_likesInput, PatronUncheckedCreateWithoutBook_likesInput>
    connectOrCreate?: PatronCreateOrConnectWithoutBook_likesInput
    connect?: PatronWhereUniqueInput
  }

  export type BookUpdateOneRequiredWithoutBook_likesNestedInput = {
    create?: XOR<BookCreateWithoutBook_likesInput, BookUncheckedCreateWithoutBook_likesInput>
    connectOrCreate?: BookCreateOrConnectWithoutBook_likesInput
    upsert?: BookUpsertWithoutBook_likesInput
    connect?: BookWhereUniqueInput
    update?: XOR<XOR<BookUpdateToOneWithWhereWithoutBook_likesInput, BookUpdateWithoutBook_likesInput>, BookUncheckedUpdateWithoutBook_likesInput>
  }

  export type PatronUpdateOneRequiredWithoutBook_likesNestedInput = {
    create?: XOR<PatronCreateWithoutBook_likesInput, PatronUncheckedCreateWithoutBook_likesInput>
    connectOrCreate?: PatronCreateOrConnectWithoutBook_likesInput
    upsert?: PatronUpsertWithoutBook_likesInput
    connect?: PatronWhereUniqueInput
    update?: XOR<XOR<PatronUpdateToOneWithWhereWithoutBook_likesInput, PatronUpdateWithoutBook_likesInput>, PatronUncheckedUpdateWithoutBook_likesInput>
  }

  export type BookCreateNestedOneWithoutBook_consultedInput = {
    create?: XOR<BookCreateWithoutBook_consultedInput, BookUncheckedCreateWithoutBook_consultedInput>
    connectOrCreate?: BookCreateOrConnectWithoutBook_consultedInput
    connect?: BookWhereUniqueInput
  }

  export type PatronCreateNestedOneWithoutBook_consultedInput = {
    create?: XOR<PatronCreateWithoutBook_consultedInput, PatronUncheckedCreateWithoutBook_consultedInput>
    connectOrCreate?: PatronCreateOrConnectWithoutBook_consultedInput
    connect?: PatronWhereUniqueInput
  }

  export type BookUpdateOneRequiredWithoutBook_consultedNestedInput = {
    create?: XOR<BookCreateWithoutBook_consultedInput, BookUncheckedCreateWithoutBook_consultedInput>
    connectOrCreate?: BookCreateOrConnectWithoutBook_consultedInput
    upsert?: BookUpsertWithoutBook_consultedInput
    connect?: BookWhereUniqueInput
    update?: XOR<XOR<BookUpdateToOneWithWhereWithoutBook_consultedInput, BookUpdateWithoutBook_consultedInput>, BookUncheckedUpdateWithoutBook_consultedInput>
  }

  export type PatronUpdateOneRequiredWithoutBook_consultedNestedInput = {
    create?: XOR<PatronCreateWithoutBook_consultedInput, PatronUncheckedCreateWithoutBook_consultedInput>
    connectOrCreate?: PatronCreateOrConnectWithoutBook_consultedInput
    upsert?: PatronUpsertWithoutBook_consultedInput
    connect?: PatronWhereUniqueInput
    update?: XOR<XOR<PatronUpdateToOneWithWhereWithoutBook_consultedInput, PatronUpdateWithoutBook_consultedInput>, PatronUncheckedUpdateWithoutBook_consultedInput>
  }

  export type BookCreateNestedOneWithoutCirculationInput = {
    create?: XOR<BookCreateWithoutCirculationInput, BookUncheckedCreateWithoutCirculationInput>
    connectOrCreate?: BookCreateOrConnectWithoutCirculationInput
    connect?: BookWhereUniqueInput
  }

  export type PatronCreateNestedOneWithoutCirculationInput = {
    create?: XOR<PatronCreateWithoutCirculationInput, PatronUncheckedCreateWithoutCirculationInput>
    connectOrCreate?: PatronCreateOrConnectWithoutCirculationInput
    connect?: PatronWhereUniqueInput
  }

  export type BookUpdateOneRequiredWithoutCirculationNestedInput = {
    create?: XOR<BookCreateWithoutCirculationInput, BookUncheckedCreateWithoutCirculationInput>
    connectOrCreate?: BookCreateOrConnectWithoutCirculationInput
    upsert?: BookUpsertWithoutCirculationInput
    connect?: BookWhereUniqueInput
    update?: XOR<XOR<BookUpdateToOneWithWhereWithoutCirculationInput, BookUpdateWithoutCirculationInput>, BookUncheckedUpdateWithoutCirculationInput>
  }

  export type PatronUpdateOneRequiredWithoutCirculationNestedInput = {
    create?: XOR<PatronCreateWithoutCirculationInput, PatronUncheckedCreateWithoutCirculationInput>
    connectOrCreate?: PatronCreateOrConnectWithoutCirculationInput
    upsert?: PatronUpsertWithoutCirculationInput
    connect?: PatronWhereUniqueInput
    update?: XOR<XOR<PatronUpdateToOneWithWhereWithoutCirculationInput, PatronUpdateWithoutCirculationInput>, PatronUncheckedUpdateWithoutCirculationInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedEnumGMDFilter<$PrismaModel = never> = {
    equals?: $Enums.GMD | EnumGMDFieldRefInput<$PrismaModel>
    in?: $Enums.GMD[] | ListEnumGMDFieldRefInput<$PrismaModel>
    notIn?: $Enums.GMD[] | ListEnumGMDFieldRefInput<$PrismaModel>
    not?: NestedEnumGMDFilter<$PrismaModel> | $Enums.GMD
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedEnumGMDWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.GMD | EnumGMDFieldRefInput<$PrismaModel>
    in?: $Enums.GMD[] | ListEnumGMDFieldRefInput<$PrismaModel>
    notIn?: $Enums.GMD[] | ListEnumGMDFieldRefInput<$PrismaModel>
    not?: NestedEnumGMDWithAggregatesFilter<$PrismaModel> | $Enums.GMD
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumGMDFilter<$PrismaModel>
    _max?: NestedEnumGMDFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type Book_likesCreateWithoutBookInput = {
    liked_at?: Date | string
    patron: PatronCreateNestedOneWithoutBook_likesInput
  }

  export type Book_likesUncheckedCreateWithoutBookInput = {
    patron_id: string
    liked_at?: Date | string
  }

  export type Book_likesCreateOrConnectWithoutBookInput = {
    where: Book_likesWhereUniqueInput
    create: XOR<Book_likesCreateWithoutBookInput, Book_likesUncheckedCreateWithoutBookInput>
  }

  export type Book_likesCreateManyBookInputEnvelope = {
    data: Book_likesCreateManyBookInput | Book_likesCreateManyBookInput[]
    skipDuplicates?: boolean
  }

  export type Book_consultedCreateWithoutBookInput = {
    consulted_at?: Date | string
    patron: PatronCreateNestedOneWithoutBook_consultedInput
  }

  export type Book_consultedUncheckedCreateWithoutBookInput = {
    patron_id: string
    consulted_at?: Date | string
  }

  export type Book_consultedCreateOrConnectWithoutBookInput = {
    where: Book_consultedWhereUniqueInput
    create: XOR<Book_consultedCreateWithoutBookInput, Book_consultedUncheckedCreateWithoutBookInput>
  }

  export type Book_consultedCreateManyBookInputEnvelope = {
    data: Book_consultedCreateManyBookInput | Book_consultedCreateManyBookInput[]
    skipDuplicates?: boolean
  }

  export type CirculationCreateWithoutBookInput = {
    checkout?: Date | string
    date_due: Date | string
    patron: PatronCreateNestedOneWithoutCirculationInput
  }

  export type CirculationUncheckedCreateWithoutBookInput = {
    patron_id: string
    checkout?: Date | string
    date_due: Date | string
  }

  export type CirculationCreateOrConnectWithoutBookInput = {
    where: CirculationWhereUniqueInput
    create: XOR<CirculationCreateWithoutBookInput, CirculationUncheckedCreateWithoutBookInput>
  }

  export type CirculationCreateManyBookInputEnvelope = {
    data: CirculationCreateManyBookInput | CirculationCreateManyBookInput[]
    skipDuplicates?: boolean
  }

  export type Book_likesUpsertWithWhereUniqueWithoutBookInput = {
    where: Book_likesWhereUniqueInput
    update: XOR<Book_likesUpdateWithoutBookInput, Book_likesUncheckedUpdateWithoutBookInput>
    create: XOR<Book_likesCreateWithoutBookInput, Book_likesUncheckedCreateWithoutBookInput>
  }

  export type Book_likesUpdateWithWhereUniqueWithoutBookInput = {
    where: Book_likesWhereUniqueInput
    data: XOR<Book_likesUpdateWithoutBookInput, Book_likesUncheckedUpdateWithoutBookInput>
  }

  export type Book_likesUpdateManyWithWhereWithoutBookInput = {
    where: Book_likesScalarWhereInput
    data: XOR<Book_likesUpdateManyMutationInput, Book_likesUncheckedUpdateManyWithoutBookInput>
  }

  export type Book_likesScalarWhereInput = {
    AND?: Book_likesScalarWhereInput | Book_likesScalarWhereInput[]
    OR?: Book_likesScalarWhereInput[]
    NOT?: Book_likesScalarWhereInput | Book_likesScalarWhereInput[]
    book_id?: StringFilter<"Book_likes"> | string
    patron_id?: StringFilter<"Book_likes"> | string
    liked_at?: DateTimeFilter<"Book_likes"> | Date | string
  }

  export type Book_consultedUpsertWithWhereUniqueWithoutBookInput = {
    where: Book_consultedWhereUniqueInput
    update: XOR<Book_consultedUpdateWithoutBookInput, Book_consultedUncheckedUpdateWithoutBookInput>
    create: XOR<Book_consultedCreateWithoutBookInput, Book_consultedUncheckedCreateWithoutBookInput>
  }

  export type Book_consultedUpdateWithWhereUniqueWithoutBookInput = {
    where: Book_consultedWhereUniqueInput
    data: XOR<Book_consultedUpdateWithoutBookInput, Book_consultedUncheckedUpdateWithoutBookInput>
  }

  export type Book_consultedUpdateManyWithWhereWithoutBookInput = {
    where: Book_consultedScalarWhereInput
    data: XOR<Book_consultedUpdateManyMutationInput, Book_consultedUncheckedUpdateManyWithoutBookInput>
  }

  export type Book_consultedScalarWhereInput = {
    AND?: Book_consultedScalarWhereInput | Book_consultedScalarWhereInput[]
    OR?: Book_consultedScalarWhereInput[]
    NOT?: Book_consultedScalarWhereInput | Book_consultedScalarWhereInput[]
    book_id?: StringFilter<"Book_consulted"> | string
    patron_id?: StringFilter<"Book_consulted"> | string
    consulted_at?: DateTimeFilter<"Book_consulted"> | Date | string
  }

  export type CirculationUpsertWithWhereUniqueWithoutBookInput = {
    where: CirculationWhereUniqueInput
    update: XOR<CirculationUpdateWithoutBookInput, CirculationUncheckedUpdateWithoutBookInput>
    create: XOR<CirculationCreateWithoutBookInput, CirculationUncheckedCreateWithoutBookInput>
  }

  export type CirculationUpdateWithWhereUniqueWithoutBookInput = {
    where: CirculationWhereUniqueInput
    data: XOR<CirculationUpdateWithoutBookInput, CirculationUncheckedUpdateWithoutBookInput>
  }

  export type CirculationUpdateManyWithWhereWithoutBookInput = {
    where: CirculationScalarWhereInput
    data: XOR<CirculationUpdateManyMutationInput, CirculationUncheckedUpdateManyWithoutBookInput>
  }

  export type CirculationScalarWhereInput = {
    AND?: CirculationScalarWhereInput | CirculationScalarWhereInput[]
    OR?: CirculationScalarWhereInput[]
    NOT?: CirculationScalarWhereInput | CirculationScalarWhereInput[]
    book_id?: StringFilter<"Circulation"> | string
    patron_id?: StringFilter<"Circulation"> | string
    checkout?: DateTimeFilter<"Circulation"> | Date | string
    date_due?: DateTimeFilter<"Circulation"> | Date | string
  }

  export type Book_likesCreateWithoutPatronInput = {
    liked_at?: Date | string
    book: BookCreateNestedOneWithoutBook_likesInput
  }

  export type Book_likesUncheckedCreateWithoutPatronInput = {
    book_id: string
    liked_at?: Date | string
  }

  export type Book_likesCreateOrConnectWithoutPatronInput = {
    where: Book_likesWhereUniqueInput
    create: XOR<Book_likesCreateWithoutPatronInput, Book_likesUncheckedCreateWithoutPatronInput>
  }

  export type Book_likesCreateManyPatronInputEnvelope = {
    data: Book_likesCreateManyPatronInput | Book_likesCreateManyPatronInput[]
    skipDuplicates?: boolean
  }

  export type Book_consultedCreateWithoutPatronInput = {
    consulted_at?: Date | string
    book: BookCreateNestedOneWithoutBook_consultedInput
  }

  export type Book_consultedUncheckedCreateWithoutPatronInput = {
    book_id: string
    consulted_at?: Date | string
  }

  export type Book_consultedCreateOrConnectWithoutPatronInput = {
    where: Book_consultedWhereUniqueInput
    create: XOR<Book_consultedCreateWithoutPatronInput, Book_consultedUncheckedCreateWithoutPatronInput>
  }

  export type Book_consultedCreateManyPatronInputEnvelope = {
    data: Book_consultedCreateManyPatronInput | Book_consultedCreateManyPatronInput[]
    skipDuplicates?: boolean
  }

  export type CirculationCreateWithoutPatronInput = {
    checkout?: Date | string
    date_due: Date | string
    book: BookCreateNestedOneWithoutCirculationInput
  }

  export type CirculationUncheckedCreateWithoutPatronInput = {
    book_id: string
    checkout?: Date | string
    date_due: Date | string
  }

  export type CirculationCreateOrConnectWithoutPatronInput = {
    where: CirculationWhereUniqueInput
    create: XOR<CirculationCreateWithoutPatronInput, CirculationUncheckedCreateWithoutPatronInput>
  }

  export type CirculationCreateManyPatronInputEnvelope = {
    data: CirculationCreateManyPatronInput | CirculationCreateManyPatronInput[]
    skipDuplicates?: boolean
  }

  export type Book_likesUpsertWithWhereUniqueWithoutPatronInput = {
    where: Book_likesWhereUniqueInput
    update: XOR<Book_likesUpdateWithoutPatronInput, Book_likesUncheckedUpdateWithoutPatronInput>
    create: XOR<Book_likesCreateWithoutPatronInput, Book_likesUncheckedCreateWithoutPatronInput>
  }

  export type Book_likesUpdateWithWhereUniqueWithoutPatronInput = {
    where: Book_likesWhereUniqueInput
    data: XOR<Book_likesUpdateWithoutPatronInput, Book_likesUncheckedUpdateWithoutPatronInput>
  }

  export type Book_likesUpdateManyWithWhereWithoutPatronInput = {
    where: Book_likesScalarWhereInput
    data: XOR<Book_likesUpdateManyMutationInput, Book_likesUncheckedUpdateManyWithoutPatronInput>
  }

  export type Book_consultedUpsertWithWhereUniqueWithoutPatronInput = {
    where: Book_consultedWhereUniqueInput
    update: XOR<Book_consultedUpdateWithoutPatronInput, Book_consultedUncheckedUpdateWithoutPatronInput>
    create: XOR<Book_consultedCreateWithoutPatronInput, Book_consultedUncheckedCreateWithoutPatronInput>
  }

  export type Book_consultedUpdateWithWhereUniqueWithoutPatronInput = {
    where: Book_consultedWhereUniqueInput
    data: XOR<Book_consultedUpdateWithoutPatronInput, Book_consultedUncheckedUpdateWithoutPatronInput>
  }

  export type Book_consultedUpdateManyWithWhereWithoutPatronInput = {
    where: Book_consultedScalarWhereInput
    data: XOR<Book_consultedUpdateManyMutationInput, Book_consultedUncheckedUpdateManyWithoutPatronInput>
  }

  export type CirculationUpsertWithWhereUniqueWithoutPatronInput = {
    where: CirculationWhereUniqueInput
    update: XOR<CirculationUpdateWithoutPatronInput, CirculationUncheckedUpdateWithoutPatronInput>
    create: XOR<CirculationCreateWithoutPatronInput, CirculationUncheckedCreateWithoutPatronInput>
  }

  export type CirculationUpdateWithWhereUniqueWithoutPatronInput = {
    where: CirculationWhereUniqueInput
    data: XOR<CirculationUpdateWithoutPatronInput, CirculationUncheckedUpdateWithoutPatronInput>
  }

  export type CirculationUpdateManyWithWhereWithoutPatronInput = {
    where: CirculationScalarWhereInput
    data: XOR<CirculationUpdateManyMutationInput, CirculationUncheckedUpdateManyWithoutPatronInput>
  }

  export type BookCreateWithoutBook_likesInput = {
    id?: string
    title: string
    author: string
    subject?: BookCreatesubjectInput | string[]
    imprint: string
    collation: string
    G_M_D: $Enums.GMD
    book_cover: string
    material_number: string
    availability: boolean
    bibilography: string
    Keywords?: BookCreateKeywordsInput | string[]
    other_Title?: string | null
    co_author?: string | null
    editor?: string | null
    edition?: string | null
    series?: string | null
    web_address?: string | null
    entered_at?: Date | string
    book_consulted?: Book_consultedCreateNestedManyWithoutBookInput
    circulation?: CirculationCreateNestedManyWithoutBookInput
  }

  export type BookUncheckedCreateWithoutBook_likesInput = {
    id?: string
    title: string
    author: string
    subject?: BookCreatesubjectInput | string[]
    imprint: string
    collation: string
    G_M_D: $Enums.GMD
    book_cover: string
    material_number: string
    availability: boolean
    bibilography: string
    Keywords?: BookCreateKeywordsInput | string[]
    other_Title?: string | null
    co_author?: string | null
    editor?: string | null
    edition?: string | null
    series?: string | null
    web_address?: string | null
    entered_at?: Date | string
    book_consulted?: Book_consultedUncheckedCreateNestedManyWithoutBookInput
    circulation?: CirculationUncheckedCreateNestedManyWithoutBookInput
  }

  export type BookCreateOrConnectWithoutBook_likesInput = {
    where: BookWhereUniqueInput
    create: XOR<BookCreateWithoutBook_likesInput, BookUncheckedCreateWithoutBook_likesInput>
  }

  export type PatronCreateWithoutBook_likesInput = {
    id?: string
    google_Id?: string | null
    firstname: string
    lastname: string
    displayname?: string | null
    address?: string | null
    email: string
    password?: string | null
    profile_img?: string | null
    borrowed_books?: PatronCreateborrowed_booksInput | string[]
    isEmailVerified?: boolean
    created_at?: Date | string
    updated_at?: Date | string
    book_consulted?: Book_consultedCreateNestedManyWithoutPatronInput
    circulation?: CirculationCreateNestedManyWithoutPatronInput
  }

  export type PatronUncheckedCreateWithoutBook_likesInput = {
    id?: string
    google_Id?: string | null
    firstname: string
    lastname: string
    displayname?: string | null
    address?: string | null
    email: string
    password?: string | null
    profile_img?: string | null
    borrowed_books?: PatronCreateborrowed_booksInput | string[]
    isEmailVerified?: boolean
    created_at?: Date | string
    updated_at?: Date | string
    book_consulted?: Book_consultedUncheckedCreateNestedManyWithoutPatronInput
    circulation?: CirculationUncheckedCreateNestedManyWithoutPatronInput
  }

  export type PatronCreateOrConnectWithoutBook_likesInput = {
    where: PatronWhereUniqueInput
    create: XOR<PatronCreateWithoutBook_likesInput, PatronUncheckedCreateWithoutBook_likesInput>
  }

  export type BookUpsertWithoutBook_likesInput = {
    update: XOR<BookUpdateWithoutBook_likesInput, BookUncheckedUpdateWithoutBook_likesInput>
    create: XOR<BookCreateWithoutBook_likesInput, BookUncheckedCreateWithoutBook_likesInput>
    where?: BookWhereInput
  }

  export type BookUpdateToOneWithWhereWithoutBook_likesInput = {
    where?: BookWhereInput
    data: XOR<BookUpdateWithoutBook_likesInput, BookUncheckedUpdateWithoutBook_likesInput>
  }

  export type BookUpdateWithoutBook_likesInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    author?: StringFieldUpdateOperationsInput | string
    subject?: BookUpdatesubjectInput | string[]
    imprint?: StringFieldUpdateOperationsInput | string
    collation?: StringFieldUpdateOperationsInput | string
    G_M_D?: EnumGMDFieldUpdateOperationsInput | $Enums.GMD
    book_cover?: StringFieldUpdateOperationsInput | string
    material_number?: StringFieldUpdateOperationsInput | string
    availability?: BoolFieldUpdateOperationsInput | boolean
    bibilography?: StringFieldUpdateOperationsInput | string
    Keywords?: BookUpdateKeywordsInput | string[]
    other_Title?: NullableStringFieldUpdateOperationsInput | string | null
    co_author?: NullableStringFieldUpdateOperationsInput | string | null
    editor?: NullableStringFieldUpdateOperationsInput | string | null
    edition?: NullableStringFieldUpdateOperationsInput | string | null
    series?: NullableStringFieldUpdateOperationsInput | string | null
    web_address?: NullableStringFieldUpdateOperationsInput | string | null
    entered_at?: DateTimeFieldUpdateOperationsInput | Date | string
    book_consulted?: Book_consultedUpdateManyWithoutBookNestedInput
    circulation?: CirculationUpdateManyWithoutBookNestedInput
  }

  export type BookUncheckedUpdateWithoutBook_likesInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    author?: StringFieldUpdateOperationsInput | string
    subject?: BookUpdatesubjectInput | string[]
    imprint?: StringFieldUpdateOperationsInput | string
    collation?: StringFieldUpdateOperationsInput | string
    G_M_D?: EnumGMDFieldUpdateOperationsInput | $Enums.GMD
    book_cover?: StringFieldUpdateOperationsInput | string
    material_number?: StringFieldUpdateOperationsInput | string
    availability?: BoolFieldUpdateOperationsInput | boolean
    bibilography?: StringFieldUpdateOperationsInput | string
    Keywords?: BookUpdateKeywordsInput | string[]
    other_Title?: NullableStringFieldUpdateOperationsInput | string | null
    co_author?: NullableStringFieldUpdateOperationsInput | string | null
    editor?: NullableStringFieldUpdateOperationsInput | string | null
    edition?: NullableStringFieldUpdateOperationsInput | string | null
    series?: NullableStringFieldUpdateOperationsInput | string | null
    web_address?: NullableStringFieldUpdateOperationsInput | string | null
    entered_at?: DateTimeFieldUpdateOperationsInput | Date | string
    book_consulted?: Book_consultedUncheckedUpdateManyWithoutBookNestedInput
    circulation?: CirculationUncheckedUpdateManyWithoutBookNestedInput
  }

  export type PatronUpsertWithoutBook_likesInput = {
    update: XOR<PatronUpdateWithoutBook_likesInput, PatronUncheckedUpdateWithoutBook_likesInput>
    create: XOR<PatronCreateWithoutBook_likesInput, PatronUncheckedCreateWithoutBook_likesInput>
    where?: PatronWhereInput
  }

  export type PatronUpdateToOneWithWhereWithoutBook_likesInput = {
    where?: PatronWhereInput
    data: XOR<PatronUpdateWithoutBook_likesInput, PatronUncheckedUpdateWithoutBook_likesInput>
  }

  export type PatronUpdateWithoutBook_likesInput = {
    id?: StringFieldUpdateOperationsInput | string
    google_Id?: NullableStringFieldUpdateOperationsInput | string | null
    firstname?: StringFieldUpdateOperationsInput | string
    lastname?: StringFieldUpdateOperationsInput | string
    displayname?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    profile_img?: NullableStringFieldUpdateOperationsInput | string | null
    borrowed_books?: PatronUpdateborrowed_booksInput | string[]
    isEmailVerified?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    book_consulted?: Book_consultedUpdateManyWithoutPatronNestedInput
    circulation?: CirculationUpdateManyWithoutPatronNestedInput
  }

  export type PatronUncheckedUpdateWithoutBook_likesInput = {
    id?: StringFieldUpdateOperationsInput | string
    google_Id?: NullableStringFieldUpdateOperationsInput | string | null
    firstname?: StringFieldUpdateOperationsInput | string
    lastname?: StringFieldUpdateOperationsInput | string
    displayname?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    profile_img?: NullableStringFieldUpdateOperationsInput | string | null
    borrowed_books?: PatronUpdateborrowed_booksInput | string[]
    isEmailVerified?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    book_consulted?: Book_consultedUncheckedUpdateManyWithoutPatronNestedInput
    circulation?: CirculationUncheckedUpdateManyWithoutPatronNestedInput
  }

  export type BookCreateWithoutBook_consultedInput = {
    id?: string
    title: string
    author: string
    subject?: BookCreatesubjectInput | string[]
    imprint: string
    collation: string
    G_M_D: $Enums.GMD
    book_cover: string
    material_number: string
    availability: boolean
    bibilography: string
    Keywords?: BookCreateKeywordsInput | string[]
    other_Title?: string | null
    co_author?: string | null
    editor?: string | null
    edition?: string | null
    series?: string | null
    web_address?: string | null
    entered_at?: Date | string
    book_likes?: Book_likesCreateNestedManyWithoutBookInput
    circulation?: CirculationCreateNestedManyWithoutBookInput
  }

  export type BookUncheckedCreateWithoutBook_consultedInput = {
    id?: string
    title: string
    author: string
    subject?: BookCreatesubjectInput | string[]
    imprint: string
    collation: string
    G_M_D: $Enums.GMD
    book_cover: string
    material_number: string
    availability: boolean
    bibilography: string
    Keywords?: BookCreateKeywordsInput | string[]
    other_Title?: string | null
    co_author?: string | null
    editor?: string | null
    edition?: string | null
    series?: string | null
    web_address?: string | null
    entered_at?: Date | string
    book_likes?: Book_likesUncheckedCreateNestedManyWithoutBookInput
    circulation?: CirculationUncheckedCreateNestedManyWithoutBookInput
  }

  export type BookCreateOrConnectWithoutBook_consultedInput = {
    where: BookWhereUniqueInput
    create: XOR<BookCreateWithoutBook_consultedInput, BookUncheckedCreateWithoutBook_consultedInput>
  }

  export type PatronCreateWithoutBook_consultedInput = {
    id?: string
    google_Id?: string | null
    firstname: string
    lastname: string
    displayname?: string | null
    address?: string | null
    email: string
    password?: string | null
    profile_img?: string | null
    borrowed_books?: PatronCreateborrowed_booksInput | string[]
    isEmailVerified?: boolean
    created_at?: Date | string
    updated_at?: Date | string
    book_likes?: Book_likesCreateNestedManyWithoutPatronInput
    circulation?: CirculationCreateNestedManyWithoutPatronInput
  }

  export type PatronUncheckedCreateWithoutBook_consultedInput = {
    id?: string
    google_Id?: string | null
    firstname: string
    lastname: string
    displayname?: string | null
    address?: string | null
    email: string
    password?: string | null
    profile_img?: string | null
    borrowed_books?: PatronCreateborrowed_booksInput | string[]
    isEmailVerified?: boolean
    created_at?: Date | string
    updated_at?: Date | string
    book_likes?: Book_likesUncheckedCreateNestedManyWithoutPatronInput
    circulation?: CirculationUncheckedCreateNestedManyWithoutPatronInput
  }

  export type PatronCreateOrConnectWithoutBook_consultedInput = {
    where: PatronWhereUniqueInput
    create: XOR<PatronCreateWithoutBook_consultedInput, PatronUncheckedCreateWithoutBook_consultedInput>
  }

  export type BookUpsertWithoutBook_consultedInput = {
    update: XOR<BookUpdateWithoutBook_consultedInput, BookUncheckedUpdateWithoutBook_consultedInput>
    create: XOR<BookCreateWithoutBook_consultedInput, BookUncheckedCreateWithoutBook_consultedInput>
    where?: BookWhereInput
  }

  export type BookUpdateToOneWithWhereWithoutBook_consultedInput = {
    where?: BookWhereInput
    data: XOR<BookUpdateWithoutBook_consultedInput, BookUncheckedUpdateWithoutBook_consultedInput>
  }

  export type BookUpdateWithoutBook_consultedInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    author?: StringFieldUpdateOperationsInput | string
    subject?: BookUpdatesubjectInput | string[]
    imprint?: StringFieldUpdateOperationsInput | string
    collation?: StringFieldUpdateOperationsInput | string
    G_M_D?: EnumGMDFieldUpdateOperationsInput | $Enums.GMD
    book_cover?: StringFieldUpdateOperationsInput | string
    material_number?: StringFieldUpdateOperationsInput | string
    availability?: BoolFieldUpdateOperationsInput | boolean
    bibilography?: StringFieldUpdateOperationsInput | string
    Keywords?: BookUpdateKeywordsInput | string[]
    other_Title?: NullableStringFieldUpdateOperationsInput | string | null
    co_author?: NullableStringFieldUpdateOperationsInput | string | null
    editor?: NullableStringFieldUpdateOperationsInput | string | null
    edition?: NullableStringFieldUpdateOperationsInput | string | null
    series?: NullableStringFieldUpdateOperationsInput | string | null
    web_address?: NullableStringFieldUpdateOperationsInput | string | null
    entered_at?: DateTimeFieldUpdateOperationsInput | Date | string
    book_likes?: Book_likesUpdateManyWithoutBookNestedInput
    circulation?: CirculationUpdateManyWithoutBookNestedInput
  }

  export type BookUncheckedUpdateWithoutBook_consultedInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    author?: StringFieldUpdateOperationsInput | string
    subject?: BookUpdatesubjectInput | string[]
    imprint?: StringFieldUpdateOperationsInput | string
    collation?: StringFieldUpdateOperationsInput | string
    G_M_D?: EnumGMDFieldUpdateOperationsInput | $Enums.GMD
    book_cover?: StringFieldUpdateOperationsInput | string
    material_number?: StringFieldUpdateOperationsInput | string
    availability?: BoolFieldUpdateOperationsInput | boolean
    bibilography?: StringFieldUpdateOperationsInput | string
    Keywords?: BookUpdateKeywordsInput | string[]
    other_Title?: NullableStringFieldUpdateOperationsInput | string | null
    co_author?: NullableStringFieldUpdateOperationsInput | string | null
    editor?: NullableStringFieldUpdateOperationsInput | string | null
    edition?: NullableStringFieldUpdateOperationsInput | string | null
    series?: NullableStringFieldUpdateOperationsInput | string | null
    web_address?: NullableStringFieldUpdateOperationsInput | string | null
    entered_at?: DateTimeFieldUpdateOperationsInput | Date | string
    book_likes?: Book_likesUncheckedUpdateManyWithoutBookNestedInput
    circulation?: CirculationUncheckedUpdateManyWithoutBookNestedInput
  }

  export type PatronUpsertWithoutBook_consultedInput = {
    update: XOR<PatronUpdateWithoutBook_consultedInput, PatronUncheckedUpdateWithoutBook_consultedInput>
    create: XOR<PatronCreateWithoutBook_consultedInput, PatronUncheckedCreateWithoutBook_consultedInput>
    where?: PatronWhereInput
  }

  export type PatronUpdateToOneWithWhereWithoutBook_consultedInput = {
    where?: PatronWhereInput
    data: XOR<PatronUpdateWithoutBook_consultedInput, PatronUncheckedUpdateWithoutBook_consultedInput>
  }

  export type PatronUpdateWithoutBook_consultedInput = {
    id?: StringFieldUpdateOperationsInput | string
    google_Id?: NullableStringFieldUpdateOperationsInput | string | null
    firstname?: StringFieldUpdateOperationsInput | string
    lastname?: StringFieldUpdateOperationsInput | string
    displayname?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    profile_img?: NullableStringFieldUpdateOperationsInput | string | null
    borrowed_books?: PatronUpdateborrowed_booksInput | string[]
    isEmailVerified?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    book_likes?: Book_likesUpdateManyWithoutPatronNestedInput
    circulation?: CirculationUpdateManyWithoutPatronNestedInput
  }

  export type PatronUncheckedUpdateWithoutBook_consultedInput = {
    id?: StringFieldUpdateOperationsInput | string
    google_Id?: NullableStringFieldUpdateOperationsInput | string | null
    firstname?: StringFieldUpdateOperationsInput | string
    lastname?: StringFieldUpdateOperationsInput | string
    displayname?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    profile_img?: NullableStringFieldUpdateOperationsInput | string | null
    borrowed_books?: PatronUpdateborrowed_booksInput | string[]
    isEmailVerified?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    book_likes?: Book_likesUncheckedUpdateManyWithoutPatronNestedInput
    circulation?: CirculationUncheckedUpdateManyWithoutPatronNestedInput
  }

  export type BookCreateWithoutCirculationInput = {
    id?: string
    title: string
    author: string
    subject?: BookCreatesubjectInput | string[]
    imprint: string
    collation: string
    G_M_D: $Enums.GMD
    book_cover: string
    material_number: string
    availability: boolean
    bibilography: string
    Keywords?: BookCreateKeywordsInput | string[]
    other_Title?: string | null
    co_author?: string | null
    editor?: string | null
    edition?: string | null
    series?: string | null
    web_address?: string | null
    entered_at?: Date | string
    book_likes?: Book_likesCreateNestedManyWithoutBookInput
    book_consulted?: Book_consultedCreateNestedManyWithoutBookInput
  }

  export type BookUncheckedCreateWithoutCirculationInput = {
    id?: string
    title: string
    author: string
    subject?: BookCreatesubjectInput | string[]
    imprint: string
    collation: string
    G_M_D: $Enums.GMD
    book_cover: string
    material_number: string
    availability: boolean
    bibilography: string
    Keywords?: BookCreateKeywordsInput | string[]
    other_Title?: string | null
    co_author?: string | null
    editor?: string | null
    edition?: string | null
    series?: string | null
    web_address?: string | null
    entered_at?: Date | string
    book_likes?: Book_likesUncheckedCreateNestedManyWithoutBookInput
    book_consulted?: Book_consultedUncheckedCreateNestedManyWithoutBookInput
  }

  export type BookCreateOrConnectWithoutCirculationInput = {
    where: BookWhereUniqueInput
    create: XOR<BookCreateWithoutCirculationInput, BookUncheckedCreateWithoutCirculationInput>
  }

  export type PatronCreateWithoutCirculationInput = {
    id?: string
    google_Id?: string | null
    firstname: string
    lastname: string
    displayname?: string | null
    address?: string | null
    email: string
    password?: string | null
    profile_img?: string | null
    borrowed_books?: PatronCreateborrowed_booksInput | string[]
    isEmailVerified?: boolean
    created_at?: Date | string
    updated_at?: Date | string
    book_likes?: Book_likesCreateNestedManyWithoutPatronInput
    book_consulted?: Book_consultedCreateNestedManyWithoutPatronInput
  }

  export type PatronUncheckedCreateWithoutCirculationInput = {
    id?: string
    google_Id?: string | null
    firstname: string
    lastname: string
    displayname?: string | null
    address?: string | null
    email: string
    password?: string | null
    profile_img?: string | null
    borrowed_books?: PatronCreateborrowed_booksInput | string[]
    isEmailVerified?: boolean
    created_at?: Date | string
    updated_at?: Date | string
    book_likes?: Book_likesUncheckedCreateNestedManyWithoutPatronInput
    book_consulted?: Book_consultedUncheckedCreateNestedManyWithoutPatronInput
  }

  export type PatronCreateOrConnectWithoutCirculationInput = {
    where: PatronWhereUniqueInput
    create: XOR<PatronCreateWithoutCirculationInput, PatronUncheckedCreateWithoutCirculationInput>
  }

  export type BookUpsertWithoutCirculationInput = {
    update: XOR<BookUpdateWithoutCirculationInput, BookUncheckedUpdateWithoutCirculationInput>
    create: XOR<BookCreateWithoutCirculationInput, BookUncheckedCreateWithoutCirculationInput>
    where?: BookWhereInput
  }

  export type BookUpdateToOneWithWhereWithoutCirculationInput = {
    where?: BookWhereInput
    data: XOR<BookUpdateWithoutCirculationInput, BookUncheckedUpdateWithoutCirculationInput>
  }

  export type BookUpdateWithoutCirculationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    author?: StringFieldUpdateOperationsInput | string
    subject?: BookUpdatesubjectInput | string[]
    imprint?: StringFieldUpdateOperationsInput | string
    collation?: StringFieldUpdateOperationsInput | string
    G_M_D?: EnumGMDFieldUpdateOperationsInput | $Enums.GMD
    book_cover?: StringFieldUpdateOperationsInput | string
    material_number?: StringFieldUpdateOperationsInput | string
    availability?: BoolFieldUpdateOperationsInput | boolean
    bibilography?: StringFieldUpdateOperationsInput | string
    Keywords?: BookUpdateKeywordsInput | string[]
    other_Title?: NullableStringFieldUpdateOperationsInput | string | null
    co_author?: NullableStringFieldUpdateOperationsInput | string | null
    editor?: NullableStringFieldUpdateOperationsInput | string | null
    edition?: NullableStringFieldUpdateOperationsInput | string | null
    series?: NullableStringFieldUpdateOperationsInput | string | null
    web_address?: NullableStringFieldUpdateOperationsInput | string | null
    entered_at?: DateTimeFieldUpdateOperationsInput | Date | string
    book_likes?: Book_likesUpdateManyWithoutBookNestedInput
    book_consulted?: Book_consultedUpdateManyWithoutBookNestedInput
  }

  export type BookUncheckedUpdateWithoutCirculationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    author?: StringFieldUpdateOperationsInput | string
    subject?: BookUpdatesubjectInput | string[]
    imprint?: StringFieldUpdateOperationsInput | string
    collation?: StringFieldUpdateOperationsInput | string
    G_M_D?: EnumGMDFieldUpdateOperationsInput | $Enums.GMD
    book_cover?: StringFieldUpdateOperationsInput | string
    material_number?: StringFieldUpdateOperationsInput | string
    availability?: BoolFieldUpdateOperationsInput | boolean
    bibilography?: StringFieldUpdateOperationsInput | string
    Keywords?: BookUpdateKeywordsInput | string[]
    other_Title?: NullableStringFieldUpdateOperationsInput | string | null
    co_author?: NullableStringFieldUpdateOperationsInput | string | null
    editor?: NullableStringFieldUpdateOperationsInput | string | null
    edition?: NullableStringFieldUpdateOperationsInput | string | null
    series?: NullableStringFieldUpdateOperationsInput | string | null
    web_address?: NullableStringFieldUpdateOperationsInput | string | null
    entered_at?: DateTimeFieldUpdateOperationsInput | Date | string
    book_likes?: Book_likesUncheckedUpdateManyWithoutBookNestedInput
    book_consulted?: Book_consultedUncheckedUpdateManyWithoutBookNestedInput
  }

  export type PatronUpsertWithoutCirculationInput = {
    update: XOR<PatronUpdateWithoutCirculationInput, PatronUncheckedUpdateWithoutCirculationInput>
    create: XOR<PatronCreateWithoutCirculationInput, PatronUncheckedCreateWithoutCirculationInput>
    where?: PatronWhereInput
  }

  export type PatronUpdateToOneWithWhereWithoutCirculationInput = {
    where?: PatronWhereInput
    data: XOR<PatronUpdateWithoutCirculationInput, PatronUncheckedUpdateWithoutCirculationInput>
  }

  export type PatronUpdateWithoutCirculationInput = {
    id?: StringFieldUpdateOperationsInput | string
    google_Id?: NullableStringFieldUpdateOperationsInput | string | null
    firstname?: StringFieldUpdateOperationsInput | string
    lastname?: StringFieldUpdateOperationsInput | string
    displayname?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    profile_img?: NullableStringFieldUpdateOperationsInput | string | null
    borrowed_books?: PatronUpdateborrowed_booksInput | string[]
    isEmailVerified?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    book_likes?: Book_likesUpdateManyWithoutPatronNestedInput
    book_consulted?: Book_consultedUpdateManyWithoutPatronNestedInput
  }

  export type PatronUncheckedUpdateWithoutCirculationInput = {
    id?: StringFieldUpdateOperationsInput | string
    google_Id?: NullableStringFieldUpdateOperationsInput | string | null
    firstname?: StringFieldUpdateOperationsInput | string
    lastname?: StringFieldUpdateOperationsInput | string
    displayname?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    profile_img?: NullableStringFieldUpdateOperationsInput | string | null
    borrowed_books?: PatronUpdateborrowed_booksInput | string[]
    isEmailVerified?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    book_likes?: Book_likesUncheckedUpdateManyWithoutPatronNestedInput
    book_consulted?: Book_consultedUncheckedUpdateManyWithoutPatronNestedInput
  }

  export type Book_likesCreateManyBookInput = {
    patron_id: string
    liked_at?: Date | string
  }

  export type Book_consultedCreateManyBookInput = {
    patron_id: string
    consulted_at?: Date | string
  }

  export type CirculationCreateManyBookInput = {
    patron_id: string
    checkout?: Date | string
    date_due: Date | string
  }

  export type Book_likesUpdateWithoutBookInput = {
    liked_at?: DateTimeFieldUpdateOperationsInput | Date | string
    patron?: PatronUpdateOneRequiredWithoutBook_likesNestedInput
  }

  export type Book_likesUncheckedUpdateWithoutBookInput = {
    patron_id?: StringFieldUpdateOperationsInput | string
    liked_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type Book_likesUncheckedUpdateManyWithoutBookInput = {
    patron_id?: StringFieldUpdateOperationsInput | string
    liked_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type Book_consultedUpdateWithoutBookInput = {
    consulted_at?: DateTimeFieldUpdateOperationsInput | Date | string
    patron?: PatronUpdateOneRequiredWithoutBook_consultedNestedInput
  }

  export type Book_consultedUncheckedUpdateWithoutBookInput = {
    patron_id?: StringFieldUpdateOperationsInput | string
    consulted_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type Book_consultedUncheckedUpdateManyWithoutBookInput = {
    patron_id?: StringFieldUpdateOperationsInput | string
    consulted_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CirculationUpdateWithoutBookInput = {
    checkout?: DateTimeFieldUpdateOperationsInput | Date | string
    date_due?: DateTimeFieldUpdateOperationsInput | Date | string
    patron?: PatronUpdateOneRequiredWithoutCirculationNestedInput
  }

  export type CirculationUncheckedUpdateWithoutBookInput = {
    patron_id?: StringFieldUpdateOperationsInput | string
    checkout?: DateTimeFieldUpdateOperationsInput | Date | string
    date_due?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CirculationUncheckedUpdateManyWithoutBookInput = {
    patron_id?: StringFieldUpdateOperationsInput | string
    checkout?: DateTimeFieldUpdateOperationsInput | Date | string
    date_due?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type Book_likesCreateManyPatronInput = {
    book_id: string
    liked_at?: Date | string
  }

  export type Book_consultedCreateManyPatronInput = {
    book_id: string
    consulted_at?: Date | string
  }

  export type CirculationCreateManyPatronInput = {
    book_id: string
    checkout?: Date | string
    date_due: Date | string
  }

  export type Book_likesUpdateWithoutPatronInput = {
    liked_at?: DateTimeFieldUpdateOperationsInput | Date | string
    book?: BookUpdateOneRequiredWithoutBook_likesNestedInput
  }

  export type Book_likesUncheckedUpdateWithoutPatronInput = {
    book_id?: StringFieldUpdateOperationsInput | string
    liked_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type Book_likesUncheckedUpdateManyWithoutPatronInput = {
    book_id?: StringFieldUpdateOperationsInput | string
    liked_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type Book_consultedUpdateWithoutPatronInput = {
    consulted_at?: DateTimeFieldUpdateOperationsInput | Date | string
    book?: BookUpdateOneRequiredWithoutBook_consultedNestedInput
  }

  export type Book_consultedUncheckedUpdateWithoutPatronInput = {
    book_id?: StringFieldUpdateOperationsInput | string
    consulted_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type Book_consultedUncheckedUpdateManyWithoutPatronInput = {
    book_id?: StringFieldUpdateOperationsInput | string
    consulted_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CirculationUpdateWithoutPatronInput = {
    checkout?: DateTimeFieldUpdateOperationsInput | Date | string
    date_due?: DateTimeFieldUpdateOperationsInput | Date | string
    book?: BookUpdateOneRequiredWithoutCirculationNestedInput
  }

  export type CirculationUncheckedUpdateWithoutPatronInput = {
    book_id?: StringFieldUpdateOperationsInput | string
    checkout?: DateTimeFieldUpdateOperationsInput | Date | string
    date_due?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CirculationUncheckedUpdateManyWithoutPatronInput = {
    book_id?: StringFieldUpdateOperationsInput | string
    checkout?: DateTimeFieldUpdateOperationsInput | Date | string
    date_due?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}