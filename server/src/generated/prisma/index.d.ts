
/**
 * Client
**/

import * as runtime from './runtime/library';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions

export type PrismaPromise<T> = $Public.PrismaPromise<T>


export type SessionPayload<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
  name: "Session"
  objects: {}
  scalars: $Extensions.GetResult<{
    id: string
    sid: string
    data: string
    expiresAt: Date
  }, ExtArgs["result"]["session"]>
  composites: {}
}

/**
 * Model Session
 * 
 */
export type Session = runtime.Types.DefaultSelection<SessionPayload>
export type LibrarianPayload<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
  name: "Librarian"
  objects: {}
  scalars: $Extensions.GetResult<{
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

/**
 * Model Librarian
 * 
 */
export type Librarian = runtime.Types.DefaultSelection<LibrarianPayload>
export type BookPayload<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
  name: "Book"
  objects: {
    book_likes: Book_likesPayload<ExtArgs>[]
    book_consulted: Book_consultedPayload<ExtArgs>[]
    circulation: CirculationPayload<ExtArgs>[]
  }
  scalars: $Extensions.GetResult<{
    id: string
    title: string
    author: string
    subject: string[]
    imprint: string
    collation: string
    G_M_D: GMD
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

/**
 * Model Book
 * 
 */
export type Book = runtime.Types.DefaultSelection<BookPayload>
export type EmailVerificationTokenPayload<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
  name: "EmailVerificationToken"
  objects: {}
  scalars: $Extensions.GetResult<{
    id: string
    email: string
    token: string
    expiresAt: Date
    createdAt: Date
  }, ExtArgs["result"]["emailVerificationToken"]>
  composites: {}
}

/**
 * Model EmailVerificationToken
 * 
 */
export type EmailVerificationToken = runtime.Types.DefaultSelection<EmailVerificationTokenPayload>
export type PatronPayload<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
  name: "Patron"
  objects: {
    book_likes: Book_likesPayload<ExtArgs>[]
    book_consulted: Book_consultedPayload<ExtArgs>[]
    circulation: CirculationPayload<ExtArgs>[]
  }
  scalars: $Extensions.GetResult<{
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

/**
 * Model Patron
 * 
 */
export type Patron = runtime.Types.DefaultSelection<PatronPayload>
export type Book_likesPayload<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
  name: "Book_likes"
  objects: {
    book: BookPayload<ExtArgs>
    patron: PatronPayload<ExtArgs>
  }
  scalars: $Extensions.GetResult<{
    book_id: string
    patron_id: string
    liked_at: Date
  }, ExtArgs["result"]["book_likes"]>
  composites: {}
}

/**
 * Model Book_likes
 * 
 */
export type Book_likes = runtime.Types.DefaultSelection<Book_likesPayload>
export type Book_consultedPayload<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
  name: "Book_consulted"
  objects: {
    book: BookPayload<ExtArgs>
    patron: PatronPayload<ExtArgs>
  }
  scalars: $Extensions.GetResult<{
    book_id: string
    patron_id: string
    consulted_at: Date
  }, ExtArgs["result"]["book_consulted"]>
  composites: {}
}

/**
 * Model Book_consulted
 * 
 */
export type Book_consulted = runtime.Types.DefaultSelection<Book_consultedPayload>
export type CirculationPayload<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
  name: "Circulation"
  objects: {
    book: BookPayload<ExtArgs>
    patron: PatronPayload<ExtArgs>
  }
  scalars: $Extensions.GetResult<{
    book_id: string
    patron_id: string
    checkout: Date
    date_due: Date
  }, ExtArgs["result"]["circulation"]>
  composites: {}
}

/**
 * Model Circulation
 * 
 */
export type Circulation = runtime.Types.DefaultSelection<CirculationPayload>

/**
 * Enums
 */

export const GMD: {
  Monograph: 'Monograph',
  Serial: 'Serial',
  Palmphlet: 'Palmphlet',
  Dictionary: 'Dictionary'
};

export type GMD = (typeof GMD)[keyof typeof GMD]


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
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<T['log']> : never : never,
  GlobalReject extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined = 'rejectOnNotFound' extends keyof T
    ? T['rejectOnNotFound']
    : false,
  ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs
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

  constructor(optionsArg ?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends (U | 'beforeExit')>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : V extends 'beforeExit' ? () => Promise<void> : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): Promise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): Promise<void>;

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
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): Promise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => Promise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): Promise<R>


  $extends: $Extensions.ExtendsHook<'extends', Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.session`: Exposes CRUD operations for the **Session** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Sessions
    * const sessions = await prisma.session.findMany()
    * ```
    */
  get session(): Prisma.SessionDelegate<GlobalReject, ExtArgs>;

  /**
   * `prisma.librarian`: Exposes CRUD operations for the **Librarian** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Librarians
    * const librarians = await prisma.librarian.findMany()
    * ```
    */
  get librarian(): Prisma.LibrarianDelegate<GlobalReject, ExtArgs>;

  /**
   * `prisma.book`: Exposes CRUD operations for the **Book** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Books
    * const books = await prisma.book.findMany()
    * ```
    */
  get book(): Prisma.BookDelegate<GlobalReject, ExtArgs>;

  /**
   * `prisma.emailVerificationToken`: Exposes CRUD operations for the **EmailVerificationToken** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more EmailVerificationTokens
    * const emailVerificationTokens = await prisma.emailVerificationToken.findMany()
    * ```
    */
  get emailVerificationToken(): Prisma.EmailVerificationTokenDelegate<GlobalReject, ExtArgs>;

  /**
   * `prisma.patron`: Exposes CRUD operations for the **Patron** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Patrons
    * const patrons = await prisma.patron.findMany()
    * ```
    */
  get patron(): Prisma.PatronDelegate<GlobalReject, ExtArgs>;

  /**
   * `prisma.book_likes`: Exposes CRUD operations for the **Book_likes** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Book_likes
    * const book_likes = await prisma.book_likes.findMany()
    * ```
    */
  get book_likes(): Prisma.Book_likesDelegate<GlobalReject, ExtArgs>;

  /**
   * `prisma.book_consulted`: Exposes CRUD operations for the **Book_consulted** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Book_consulteds
    * const book_consulteds = await prisma.book_consulted.findMany()
    * ```
    */
  get book_consulted(): Prisma.Book_consultedDelegate<GlobalReject, ExtArgs>;

  /**
   * `prisma.circulation`: Exposes CRUD operations for the **Circulation** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Circulations
    * const circulations = await prisma.circulation.findMany()
    * ```
    */
  get circulation(): Prisma.CirculationDelegate<GlobalReject, ExtArgs>;
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
  export import NotFoundError = runtime.NotFoundError

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
  export type Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export type Args<T, F extends $Public.Operation> = $Public.Args<T, F>
  export type Payload<T, F extends $Public.Operation> = $Public.Payload<T, F>
  export type Result<T, A, F extends $Public.Operation> = $Public.Result<T, A, F>
  export type Exact<T, W> = $Public.Exact<T, W>

  /**
   * Prisma Client JS version: 4.16.2
   * Query Engine version: 4bc8b6e1b66cb932731fb1bdbbc550d1e010de81
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
   */
  export type JsonObject = {[Key in string]?: JsonValue}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = {readonly [Key in string]?: InputJsonValue | null}

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray

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
  type HasSelect = {
    select: any
  }
  type HasInclude = {
    include: any
  }
  type CheckSelect<T, S, U> = T extends SelectAndInclude
    ? 'Please either choose `select` or `include`'
    : T extends HasSelect
    ? U
    : T extends HasInclude
    ? U
    : S

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => Promise<any>> = PromiseType<ReturnType<T>>

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
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
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
   * Like `Pick`, but with an array
   */
  type PickArray<T, K extends Array<keyof T>> = Prisma__Pick<T, TupleToUnion<K>>

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


  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.Args}, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs']>
  }

  export type TypeMap<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    meta: {
      modelProps: 'session' | 'librarian' | 'book' | 'emailVerificationToken' | 'patron' | 'book_likes' | 'book_consulted' | 'circulation'
      txIsolationLevel: Prisma.TransactionIsolationLevel
    },
    model: {
      Session: {
        payload: SessionPayload<ExtArgs>
        operations: {
          findUnique: {
            args: Prisma.SessionFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<SessionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SessionFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<SessionPayload>
          }
          findFirst: {
            args: Prisma.SessionFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<SessionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SessionFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<SessionPayload>
          }
          findMany: {
            args: Prisma.SessionFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<SessionPayload>[]
          }
          create: {
            args: Prisma.SessionCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<SessionPayload>
          }
          createMany: {
            args: Prisma.SessionCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.SessionDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<SessionPayload>
          }
          update: {
            args: Prisma.SessionUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<SessionPayload>
          }
          deleteMany: {
            args: Prisma.SessionDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.SessionUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.SessionUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<SessionPayload>
          }
          aggregate: {
            args: Prisma.SessionAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateSession>
          }
          groupBy: {
            args: Prisma.SessionGroupByArgs<ExtArgs>,
            result: $Utils.Optional<SessionGroupByOutputType>[]
          }
          count: {
            args: Prisma.SessionCountArgs<ExtArgs>,
            result: $Utils.Optional<SessionCountAggregateOutputType> | number
          }
        }
      }
      Librarian: {
        payload: LibrarianPayload<ExtArgs>
        operations: {
          findUnique: {
            args: Prisma.LibrarianFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<LibrarianPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LibrarianFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<LibrarianPayload>
          }
          findFirst: {
            args: Prisma.LibrarianFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<LibrarianPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LibrarianFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<LibrarianPayload>
          }
          findMany: {
            args: Prisma.LibrarianFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<LibrarianPayload>[]
          }
          create: {
            args: Prisma.LibrarianCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<LibrarianPayload>
          }
          createMany: {
            args: Prisma.LibrarianCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.LibrarianDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<LibrarianPayload>
          }
          update: {
            args: Prisma.LibrarianUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<LibrarianPayload>
          }
          deleteMany: {
            args: Prisma.LibrarianDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.LibrarianUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.LibrarianUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<LibrarianPayload>
          }
          aggregate: {
            args: Prisma.LibrarianAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateLibrarian>
          }
          groupBy: {
            args: Prisma.LibrarianGroupByArgs<ExtArgs>,
            result: $Utils.Optional<LibrarianGroupByOutputType>[]
          }
          count: {
            args: Prisma.LibrarianCountArgs<ExtArgs>,
            result: $Utils.Optional<LibrarianCountAggregateOutputType> | number
          }
        }
      }
      Book: {
        payload: BookPayload<ExtArgs>
        operations: {
          findUnique: {
            args: Prisma.BookFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<BookPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BookFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<BookPayload>
          }
          findFirst: {
            args: Prisma.BookFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<BookPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BookFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<BookPayload>
          }
          findMany: {
            args: Prisma.BookFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<BookPayload>[]
          }
          create: {
            args: Prisma.BookCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<BookPayload>
          }
          createMany: {
            args: Prisma.BookCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.BookDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<BookPayload>
          }
          update: {
            args: Prisma.BookUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<BookPayload>
          }
          deleteMany: {
            args: Prisma.BookDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.BookUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.BookUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<BookPayload>
          }
          aggregate: {
            args: Prisma.BookAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateBook>
          }
          groupBy: {
            args: Prisma.BookGroupByArgs<ExtArgs>,
            result: $Utils.Optional<BookGroupByOutputType>[]
          }
          count: {
            args: Prisma.BookCountArgs<ExtArgs>,
            result: $Utils.Optional<BookCountAggregateOutputType> | number
          }
        }
      }
      EmailVerificationToken: {
        payload: EmailVerificationTokenPayload<ExtArgs>
        operations: {
          findUnique: {
            args: Prisma.EmailVerificationTokenFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<EmailVerificationTokenPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EmailVerificationTokenFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<EmailVerificationTokenPayload>
          }
          findFirst: {
            args: Prisma.EmailVerificationTokenFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<EmailVerificationTokenPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EmailVerificationTokenFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<EmailVerificationTokenPayload>
          }
          findMany: {
            args: Prisma.EmailVerificationTokenFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<EmailVerificationTokenPayload>[]
          }
          create: {
            args: Prisma.EmailVerificationTokenCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<EmailVerificationTokenPayload>
          }
          createMany: {
            args: Prisma.EmailVerificationTokenCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.EmailVerificationTokenDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<EmailVerificationTokenPayload>
          }
          update: {
            args: Prisma.EmailVerificationTokenUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<EmailVerificationTokenPayload>
          }
          deleteMany: {
            args: Prisma.EmailVerificationTokenDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.EmailVerificationTokenUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.EmailVerificationTokenUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<EmailVerificationTokenPayload>
          }
          aggregate: {
            args: Prisma.EmailVerificationTokenAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateEmailVerificationToken>
          }
          groupBy: {
            args: Prisma.EmailVerificationTokenGroupByArgs<ExtArgs>,
            result: $Utils.Optional<EmailVerificationTokenGroupByOutputType>[]
          }
          count: {
            args: Prisma.EmailVerificationTokenCountArgs<ExtArgs>,
            result: $Utils.Optional<EmailVerificationTokenCountAggregateOutputType> | number
          }
        }
      }
      Patron: {
        payload: PatronPayload<ExtArgs>
        operations: {
          findUnique: {
            args: Prisma.PatronFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<PatronPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PatronFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<PatronPayload>
          }
          findFirst: {
            args: Prisma.PatronFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<PatronPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PatronFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<PatronPayload>
          }
          findMany: {
            args: Prisma.PatronFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<PatronPayload>[]
          }
          create: {
            args: Prisma.PatronCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<PatronPayload>
          }
          createMany: {
            args: Prisma.PatronCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.PatronDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<PatronPayload>
          }
          update: {
            args: Prisma.PatronUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<PatronPayload>
          }
          deleteMany: {
            args: Prisma.PatronDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.PatronUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.PatronUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<PatronPayload>
          }
          aggregate: {
            args: Prisma.PatronAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregatePatron>
          }
          groupBy: {
            args: Prisma.PatronGroupByArgs<ExtArgs>,
            result: $Utils.Optional<PatronGroupByOutputType>[]
          }
          count: {
            args: Prisma.PatronCountArgs<ExtArgs>,
            result: $Utils.Optional<PatronCountAggregateOutputType> | number
          }
        }
      }
      Book_likes: {
        payload: Book_likesPayload<ExtArgs>
        operations: {
          findUnique: {
            args: Prisma.Book_likesFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Book_likesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.Book_likesFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Book_likesPayload>
          }
          findFirst: {
            args: Prisma.Book_likesFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Book_likesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.Book_likesFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Book_likesPayload>
          }
          findMany: {
            args: Prisma.Book_likesFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Book_likesPayload>[]
          }
          create: {
            args: Prisma.Book_likesCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Book_likesPayload>
          }
          createMany: {
            args: Prisma.Book_likesCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.Book_likesDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Book_likesPayload>
          }
          update: {
            args: Prisma.Book_likesUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Book_likesPayload>
          }
          deleteMany: {
            args: Prisma.Book_likesDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.Book_likesUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.Book_likesUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Book_likesPayload>
          }
          aggregate: {
            args: Prisma.Book_likesAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateBook_likes>
          }
          groupBy: {
            args: Prisma.Book_likesGroupByArgs<ExtArgs>,
            result: $Utils.Optional<Book_likesGroupByOutputType>[]
          }
          count: {
            args: Prisma.Book_likesCountArgs<ExtArgs>,
            result: $Utils.Optional<Book_likesCountAggregateOutputType> | number
          }
        }
      }
      Book_consulted: {
        payload: Book_consultedPayload<ExtArgs>
        operations: {
          findUnique: {
            args: Prisma.Book_consultedFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Book_consultedPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.Book_consultedFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Book_consultedPayload>
          }
          findFirst: {
            args: Prisma.Book_consultedFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Book_consultedPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.Book_consultedFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Book_consultedPayload>
          }
          findMany: {
            args: Prisma.Book_consultedFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Book_consultedPayload>[]
          }
          create: {
            args: Prisma.Book_consultedCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Book_consultedPayload>
          }
          createMany: {
            args: Prisma.Book_consultedCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.Book_consultedDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Book_consultedPayload>
          }
          update: {
            args: Prisma.Book_consultedUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Book_consultedPayload>
          }
          deleteMany: {
            args: Prisma.Book_consultedDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.Book_consultedUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.Book_consultedUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Book_consultedPayload>
          }
          aggregate: {
            args: Prisma.Book_consultedAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateBook_consulted>
          }
          groupBy: {
            args: Prisma.Book_consultedGroupByArgs<ExtArgs>,
            result: $Utils.Optional<Book_consultedGroupByOutputType>[]
          }
          count: {
            args: Prisma.Book_consultedCountArgs<ExtArgs>,
            result: $Utils.Optional<Book_consultedCountAggregateOutputType> | number
          }
        }
      }
      Circulation: {
        payload: CirculationPayload<ExtArgs>
        operations: {
          findUnique: {
            args: Prisma.CirculationFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<CirculationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CirculationFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<CirculationPayload>
          }
          findFirst: {
            args: Prisma.CirculationFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<CirculationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CirculationFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<CirculationPayload>
          }
          findMany: {
            args: Prisma.CirculationFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<CirculationPayload>[]
          }
          create: {
            args: Prisma.CirculationCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<CirculationPayload>
          }
          createMany: {
            args: Prisma.CirculationCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.CirculationDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<CirculationPayload>
          }
          update: {
            args: Prisma.CirculationUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<CirculationPayload>
          }
          deleteMany: {
            args: Prisma.CirculationDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.CirculationUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.CirculationUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<CirculationPayload>
          }
          aggregate: {
            args: Prisma.CirculationAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateCirculation>
          }
          groupBy: {
            args: Prisma.CirculationGroupByArgs<ExtArgs>,
            result: $Utils.Optional<CirculationGroupByOutputType>[]
          }
          count: {
            args: Prisma.CirculationCountArgs<ExtArgs>,
            result: $Utils.Optional<CirculationCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<'define', Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type RejectOnNotFound = boolean | ((error: Error) => Error)
  export type RejectPerModel = { [P in ModelName]?: RejectOnNotFound }
  export type RejectPerOperation =  { [P in "findUnique" | "findFirst"]?: RejectPerModel | RejectOnNotFound } 
  type IsReject<T> = T extends true ? True : T extends (err: Error) => Error ? True : False
  export type HasReject<
    GlobalRejectSettings extends Prisma.PrismaClientOptions['rejectOnNotFound'],
    LocalRejectSettings,
    Action extends PrismaAction,
    Model extends ModelName
  > = LocalRejectSettings extends RejectOnNotFound
    ? IsReject<LocalRejectSettings>
    : GlobalRejectSettings extends RejectPerOperation
    ? Action extends keyof GlobalRejectSettings
      ? GlobalRejectSettings[Action] extends RejectOnNotFound
        ? IsReject<GlobalRejectSettings[Action]>
        : GlobalRejectSettings[Action] extends RejectPerModel
        ? Model extends keyof GlobalRejectSettings[Action]
          ? IsReject<GlobalRejectSettings[Action][Model]>
          : False
        : False
      : False
    : IsReject<GlobalRejectSettings>
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'

  export interface PrismaClientOptions {
    /**
     * Configure findUnique/findFirst to throw an error if the query returns null. 
     * @deprecated since 4.0.0. Use `findUniqueOrThrow`/`findFirstOrThrow` methods instead.
     * @example
     * ```
     * // Reject on both findUnique/findFirst
     * rejectOnNotFound: true
     * // Reject only on findFirst with a custom error
     * rejectOnNotFound: { findFirst: (err) => new Error("Custom Error")}
     * // Reject on user.findUnique with a custom error
     * rejectOnNotFound: { findUnique: {User: (err) => new Error("User not found")}}
     * ```
     */
    rejectOnNotFound?: RejectOnNotFound | RejectPerOperation
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources

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
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: Array<LogLevel | LogDefinition>
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
    | 'findMany'
    | 'findFirst'
    | 'create'
    | 'createMany'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'

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
    next: (params: MiddlewareParams) => Promise<T>,
  ) => Promise<T>

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

  export type BookCountOutputTypeSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    book_likes?: boolean | BookCountOutputTypeCountBook_likesArgs
    book_consulted?: boolean | BookCountOutputTypeCountBook_consultedArgs
    circulation?: boolean | BookCountOutputTypeCountCirculationArgs
  }

  // Custom InputTypes

  /**
   * BookCountOutputType without action
   */
  export type BookCountOutputTypeArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookCountOutputType
     */
    select?: BookCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * BookCountOutputType without action
   */
  export type BookCountOutputTypeCountBook_likesArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: Book_likesWhereInput
  }


  /**
   * BookCountOutputType without action
   */
  export type BookCountOutputTypeCountBook_consultedArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: Book_consultedWhereInput
  }


  /**
   * BookCountOutputType without action
   */
  export type BookCountOutputTypeCountCirculationArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
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

  export type PatronCountOutputTypeSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    book_likes?: boolean | PatronCountOutputTypeCountBook_likesArgs
    book_consulted?: boolean | PatronCountOutputTypeCountBook_consultedArgs
    circulation?: boolean | PatronCountOutputTypeCountCirculationArgs
  }

  // Custom InputTypes

  /**
   * PatronCountOutputType without action
   */
  export type PatronCountOutputTypeArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PatronCountOutputType
     */
    select?: PatronCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * PatronCountOutputType without action
   */
  export type PatronCountOutputTypeCountBook_likesArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: Book_likesWhereInput
  }


  /**
   * PatronCountOutputType without action
   */
  export type PatronCountOutputTypeCountBook_consultedArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: Book_consultedWhereInput
  }


  /**
   * PatronCountOutputType without action
   */
  export type PatronCountOutputTypeCountCirculationArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
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

  export type SessionAggregateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which Session to aggregate.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: Enumerable<SessionOrderByWithRelationInput>
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




  export type SessionGroupByArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: SessionWhereInput
    orderBy?: Enumerable<SessionOrderByWithAggregationInput>
    by: SessionScalarFieldEnum[]
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
      PickArray<SessionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SessionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SessionGroupByOutputType[P]>
            : GetScalarType<T[P], SessionGroupByOutputType[P]>
        }
      >
    >


  export type SessionSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
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


  type SessionGetPayload<S extends boolean | null | undefined | SessionArgs> = $Types.GetResult<SessionPayload, S>

  type SessionCountArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = 
    Omit<SessionFindManyArgs, 'select' | 'include'> & {
      select?: SessionCountAggregateInputType | true
    }

  export interface SessionDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> {
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
    **/
    findUnique<T extends SessionFindUniqueArgs<ExtArgs>, LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, SessionFindUniqueArgs<ExtArgs>>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Session'> extends True ? Prisma__SessionClient<$Types.GetResult<SessionPayload<ExtArgs>, T, 'findUnique', never>, never, ExtArgs> : Prisma__SessionClient<$Types.GetResult<SessionPayload<ExtArgs>, T, 'findUnique', never> | null, null, ExtArgs>

    /**
     * Find one Session that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {SessionFindUniqueOrThrowArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends SessionFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, SessionFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__SessionClient<$Types.GetResult<SessionPayload<ExtArgs>, T, 'findUniqueOrThrow', never>, never, ExtArgs>

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
    **/
    findFirst<T extends SessionFindFirstArgs<ExtArgs>, LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, SessionFindFirstArgs<ExtArgs>>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Session'> extends True ? Prisma__SessionClient<$Types.GetResult<SessionPayload<ExtArgs>, T, 'findFirst', never>, never, ExtArgs> : Prisma__SessionClient<$Types.GetResult<SessionPayload<ExtArgs>, T, 'findFirst', never> | null, null, ExtArgs>

    /**
     * Find the first Session that matches the filter or
     * throw `NotFoundError` if no matches were found.
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
    **/
    findFirstOrThrow<T extends SessionFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, SessionFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__SessionClient<$Types.GetResult<SessionPayload<ExtArgs>, T, 'findFirstOrThrow', never>, never, ExtArgs>

    /**
     * Find zero or more Sessions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindManyArgs=} args - Arguments to filter and select certain fields only.
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
    **/
    findMany<T extends SessionFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, SessionFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Types.GetResult<SessionPayload<ExtArgs>, T, 'findMany', never>>

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
    **/
    create<T extends SessionCreateArgs<ExtArgs>>(
      args: SelectSubset<T, SessionCreateArgs<ExtArgs>>
    ): Prisma__SessionClient<$Types.GetResult<SessionPayload<ExtArgs>, T, 'create', never>, never, ExtArgs>

    /**
     * Create many Sessions.
     *     @param {SessionCreateManyArgs} args - Arguments to create many Sessions.
     *     @example
     *     // Create many Sessions
     *     const session = await prisma.session.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends SessionCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, SessionCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

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
    **/
    delete<T extends SessionDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, SessionDeleteArgs<ExtArgs>>
    ): Prisma__SessionClient<$Types.GetResult<SessionPayload<ExtArgs>, T, 'delete', never>, never, ExtArgs>

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
    **/
    update<T extends SessionUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, SessionUpdateArgs<ExtArgs>>
    ): Prisma__SessionClient<$Types.GetResult<SessionPayload<ExtArgs>, T, 'update', never>, never, ExtArgs>

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
    **/
    deleteMany<T extends SessionDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, SessionDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

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
    **/
    updateMany<T extends SessionUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, SessionUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

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
    **/
    upsert<T extends SessionUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, SessionUpsertArgs<ExtArgs>>
    ): Prisma__SessionClient<$Types.GetResult<SessionPayload<ExtArgs>, T, 'upsert', never>, never, ExtArgs>

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
      ByFields extends TupleToUnion<T['by']>,
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

  }

  /**
   * The delegate class that acts as a "Promise-like" for Session.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__SessionClient<T, Null = never, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);


    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * Session base type for findUnique actions
   */
  export type SessionFindUniqueArgsBase<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session findUnique
   */
  export interface SessionFindUniqueArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends SessionFindUniqueArgsBase<ExtArgs> {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Session findUniqueOrThrow
   */
  export type SessionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where: SessionWhereUniqueInput
  }


  /**
   * Session base type for findFirst actions
   */
  export type SessionFindFirstArgsBase<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: Enumerable<SessionOrderByWithRelationInput>
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
    distinct?: Enumerable<SessionScalarFieldEnum>
  }

  /**
   * Session findFirst
   */
  export interface SessionFindFirstArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends SessionFindFirstArgsBase<ExtArgs> {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Session findFirstOrThrow
   */
  export type SessionFindFirstOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: Enumerable<SessionOrderByWithRelationInput>
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
    distinct?: Enumerable<SessionScalarFieldEnum>
  }


  /**
   * Session findMany
   */
  export type SessionFindManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Filter, which Sessions to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: Enumerable<SessionOrderByWithRelationInput>
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
    distinct?: Enumerable<SessionScalarFieldEnum>
  }


  /**
   * Session create
   */
  export type SessionCreateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * The data needed to create a Session.
     */
    data: XOR<SessionCreateInput, SessionUncheckedCreateInput>
  }


  /**
   * Session createMany
   */
  export type SessionCreateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Sessions.
     */
    data: Enumerable<SessionCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Session update
   */
  export type SessionUpdateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
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
  export type SessionUpdateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Sessions.
     */
    data: XOR<SessionUpdateManyMutationInput, SessionUncheckedUpdateManyInput>
    /**
     * Filter which Sessions to update
     */
    where?: SessionWhereInput
  }


  /**
   * Session upsert
   */
  export type SessionUpsertArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
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
  export type SessionDeleteArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Filter which Session to delete.
     */
    where: SessionWhereUniqueInput
  }


  /**
   * Session deleteMany
   */
  export type SessionDeleteManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which Sessions to delete
     */
    where?: SessionWhereInput
  }


  /**
   * Session without action
   */
  export type SessionArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
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

  export type LibrarianAggregateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which Librarian to aggregate.
     */
    where?: LibrarianWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Librarians to fetch.
     */
    orderBy?: Enumerable<LibrarianOrderByWithRelationInput>
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




  export type LibrarianGroupByArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: LibrarianWhereInput
    orderBy?: Enumerable<LibrarianOrderByWithAggregationInput>
    by: LibrarianScalarFieldEnum[]
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
      PickArray<LibrarianGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LibrarianGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LibrarianGroupByOutputType[P]>
            : GetScalarType<T[P], LibrarianGroupByOutputType[P]>
        }
      >
    >


  export type LibrarianSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
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


  type LibrarianGetPayload<S extends boolean | null | undefined | LibrarianArgs> = $Types.GetResult<LibrarianPayload, S>

  type LibrarianCountArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = 
    Omit<LibrarianFindManyArgs, 'select' | 'include'> & {
      select?: LibrarianCountAggregateInputType | true
    }

  export interface LibrarianDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> {
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
    **/
    findUnique<T extends LibrarianFindUniqueArgs<ExtArgs>, LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, LibrarianFindUniqueArgs<ExtArgs>>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Librarian'> extends True ? Prisma__LibrarianClient<$Types.GetResult<LibrarianPayload<ExtArgs>, T, 'findUnique', never>, never, ExtArgs> : Prisma__LibrarianClient<$Types.GetResult<LibrarianPayload<ExtArgs>, T, 'findUnique', never> | null, null, ExtArgs>

    /**
     * Find one Librarian that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {LibrarianFindUniqueOrThrowArgs} args - Arguments to find a Librarian
     * @example
     * // Get one Librarian
     * const librarian = await prisma.librarian.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends LibrarianFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, LibrarianFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__LibrarianClient<$Types.GetResult<LibrarianPayload<ExtArgs>, T, 'findUniqueOrThrow', never>, never, ExtArgs>

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
    **/
    findFirst<T extends LibrarianFindFirstArgs<ExtArgs>, LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, LibrarianFindFirstArgs<ExtArgs>>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Librarian'> extends True ? Prisma__LibrarianClient<$Types.GetResult<LibrarianPayload<ExtArgs>, T, 'findFirst', never>, never, ExtArgs> : Prisma__LibrarianClient<$Types.GetResult<LibrarianPayload<ExtArgs>, T, 'findFirst', never> | null, null, ExtArgs>

    /**
     * Find the first Librarian that matches the filter or
     * throw `NotFoundError` if no matches were found.
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
    **/
    findFirstOrThrow<T extends LibrarianFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, LibrarianFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__LibrarianClient<$Types.GetResult<LibrarianPayload<ExtArgs>, T, 'findFirstOrThrow', never>, never, ExtArgs>

    /**
     * Find zero or more Librarians that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LibrarianFindManyArgs=} args - Arguments to filter and select certain fields only.
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
    **/
    findMany<T extends LibrarianFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, LibrarianFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Types.GetResult<LibrarianPayload<ExtArgs>, T, 'findMany', never>>

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
    **/
    create<T extends LibrarianCreateArgs<ExtArgs>>(
      args: SelectSubset<T, LibrarianCreateArgs<ExtArgs>>
    ): Prisma__LibrarianClient<$Types.GetResult<LibrarianPayload<ExtArgs>, T, 'create', never>, never, ExtArgs>

    /**
     * Create many Librarians.
     *     @param {LibrarianCreateManyArgs} args - Arguments to create many Librarians.
     *     @example
     *     // Create many Librarians
     *     const librarian = await prisma.librarian.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends LibrarianCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, LibrarianCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

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
    **/
    delete<T extends LibrarianDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, LibrarianDeleteArgs<ExtArgs>>
    ): Prisma__LibrarianClient<$Types.GetResult<LibrarianPayload<ExtArgs>, T, 'delete', never>, never, ExtArgs>

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
    **/
    update<T extends LibrarianUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, LibrarianUpdateArgs<ExtArgs>>
    ): Prisma__LibrarianClient<$Types.GetResult<LibrarianPayload<ExtArgs>, T, 'update', never>, never, ExtArgs>

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
    **/
    deleteMany<T extends LibrarianDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, LibrarianDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

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
    **/
    updateMany<T extends LibrarianUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, LibrarianUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

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
    **/
    upsert<T extends LibrarianUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, LibrarianUpsertArgs<ExtArgs>>
    ): Prisma__LibrarianClient<$Types.GetResult<LibrarianPayload<ExtArgs>, T, 'upsert', never>, never, ExtArgs>

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
      ByFields extends TupleToUnion<T['by']>,
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

  }

  /**
   * The delegate class that acts as a "Promise-like" for Librarian.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__LibrarianClient<T, Null = never, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);


    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * Librarian base type for findUnique actions
   */
  export type LibrarianFindUniqueArgsBase<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Librarian
     */
    select?: LibrarianSelect<ExtArgs> | null
    /**
     * Filter, which Librarian to fetch.
     */
    where: LibrarianWhereUniqueInput
  }

  /**
   * Librarian findUnique
   */
  export interface LibrarianFindUniqueArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends LibrarianFindUniqueArgsBase<ExtArgs> {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Librarian findUniqueOrThrow
   */
  export type LibrarianFindUniqueOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Librarian
     */
    select?: LibrarianSelect<ExtArgs> | null
    /**
     * Filter, which Librarian to fetch.
     */
    where: LibrarianWhereUniqueInput
  }


  /**
   * Librarian base type for findFirst actions
   */
  export type LibrarianFindFirstArgsBase<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Librarian
     */
    select?: LibrarianSelect<ExtArgs> | null
    /**
     * Filter, which Librarian to fetch.
     */
    where?: LibrarianWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Librarians to fetch.
     */
    orderBy?: Enumerable<LibrarianOrderByWithRelationInput>
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
    distinct?: Enumerable<LibrarianScalarFieldEnum>
  }

  /**
   * Librarian findFirst
   */
  export interface LibrarianFindFirstArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends LibrarianFindFirstArgsBase<ExtArgs> {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Librarian findFirstOrThrow
   */
  export type LibrarianFindFirstOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Librarian
     */
    select?: LibrarianSelect<ExtArgs> | null
    /**
     * Filter, which Librarian to fetch.
     */
    where?: LibrarianWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Librarians to fetch.
     */
    orderBy?: Enumerable<LibrarianOrderByWithRelationInput>
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
    distinct?: Enumerable<LibrarianScalarFieldEnum>
  }


  /**
   * Librarian findMany
   */
  export type LibrarianFindManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Librarian
     */
    select?: LibrarianSelect<ExtArgs> | null
    /**
     * Filter, which Librarians to fetch.
     */
    where?: LibrarianWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Librarians to fetch.
     */
    orderBy?: Enumerable<LibrarianOrderByWithRelationInput>
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
    distinct?: Enumerable<LibrarianScalarFieldEnum>
  }


  /**
   * Librarian create
   */
  export type LibrarianCreateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Librarian
     */
    select?: LibrarianSelect<ExtArgs> | null
    /**
     * The data needed to create a Librarian.
     */
    data: XOR<LibrarianCreateInput, LibrarianUncheckedCreateInput>
  }


  /**
   * Librarian createMany
   */
  export type LibrarianCreateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Librarians.
     */
    data: Enumerable<LibrarianCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Librarian update
   */
  export type LibrarianUpdateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Librarian
     */
    select?: LibrarianSelect<ExtArgs> | null
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
  export type LibrarianUpdateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Librarians.
     */
    data: XOR<LibrarianUpdateManyMutationInput, LibrarianUncheckedUpdateManyInput>
    /**
     * Filter which Librarians to update
     */
    where?: LibrarianWhereInput
  }


  /**
   * Librarian upsert
   */
  export type LibrarianUpsertArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Librarian
     */
    select?: LibrarianSelect<ExtArgs> | null
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
  export type LibrarianDeleteArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Librarian
     */
    select?: LibrarianSelect<ExtArgs> | null
    /**
     * Filter which Librarian to delete.
     */
    where: LibrarianWhereUniqueInput
  }


  /**
   * Librarian deleteMany
   */
  export type LibrarianDeleteManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which Librarians to delete
     */
    where?: LibrarianWhereInput
  }


  /**
   * Librarian without action
   */
  export type LibrarianArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Librarian
     */
    select?: LibrarianSelect<ExtArgs> | null
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
    G_M_D: GMD | null
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
    G_M_D: GMD | null
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

  export type BookAggregateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which Book to aggregate.
     */
    where?: BookWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Books to fetch.
     */
    orderBy?: Enumerable<BookOrderByWithRelationInput>
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




  export type BookGroupByArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: BookWhereInput
    orderBy?: Enumerable<BookOrderByWithAggregationInput>
    by: BookScalarFieldEnum[]
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
    G_M_D: GMD
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
      PickArray<BookGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BookGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BookGroupByOutputType[P]>
            : GetScalarType<T[P], BookGroupByOutputType[P]>
        }
      >
    >


  export type BookSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
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
    _count?: boolean | BookCountOutputTypeArgs<ExtArgs>
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

  export type BookInclude<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    book_likes?: boolean | Book$book_likesArgs<ExtArgs>
    book_consulted?: boolean | Book$book_consultedArgs<ExtArgs>
    circulation?: boolean | Book$circulationArgs<ExtArgs>
    _count?: boolean | BookCountOutputTypeArgs<ExtArgs>
  }


  type BookGetPayload<S extends boolean | null | undefined | BookArgs> = $Types.GetResult<BookPayload, S>

  type BookCountArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = 
    Omit<BookFindManyArgs, 'select' | 'include'> & {
      select?: BookCountAggregateInputType | true
    }

  export interface BookDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> {
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
    **/
    findUnique<T extends BookFindUniqueArgs<ExtArgs>, LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, BookFindUniqueArgs<ExtArgs>>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Book'> extends True ? Prisma__BookClient<$Types.GetResult<BookPayload<ExtArgs>, T, 'findUnique', never>, never, ExtArgs> : Prisma__BookClient<$Types.GetResult<BookPayload<ExtArgs>, T, 'findUnique', never> | null, null, ExtArgs>

    /**
     * Find one Book that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {BookFindUniqueOrThrowArgs} args - Arguments to find a Book
     * @example
     * // Get one Book
     * const book = await prisma.book.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends BookFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, BookFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__BookClient<$Types.GetResult<BookPayload<ExtArgs>, T, 'findUniqueOrThrow', never>, never, ExtArgs>

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
    **/
    findFirst<T extends BookFindFirstArgs<ExtArgs>, LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, BookFindFirstArgs<ExtArgs>>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Book'> extends True ? Prisma__BookClient<$Types.GetResult<BookPayload<ExtArgs>, T, 'findFirst', never>, never, ExtArgs> : Prisma__BookClient<$Types.GetResult<BookPayload<ExtArgs>, T, 'findFirst', never> | null, null, ExtArgs>

    /**
     * Find the first Book that matches the filter or
     * throw `NotFoundError` if no matches were found.
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
    **/
    findFirstOrThrow<T extends BookFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, BookFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__BookClient<$Types.GetResult<BookPayload<ExtArgs>, T, 'findFirstOrThrow', never>, never, ExtArgs>

    /**
     * Find zero or more Books that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookFindManyArgs=} args - Arguments to filter and select certain fields only.
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
    **/
    findMany<T extends BookFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, BookFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Types.GetResult<BookPayload<ExtArgs>, T, 'findMany', never>>

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
    **/
    create<T extends BookCreateArgs<ExtArgs>>(
      args: SelectSubset<T, BookCreateArgs<ExtArgs>>
    ): Prisma__BookClient<$Types.GetResult<BookPayload<ExtArgs>, T, 'create', never>, never, ExtArgs>

    /**
     * Create many Books.
     *     @param {BookCreateManyArgs} args - Arguments to create many Books.
     *     @example
     *     // Create many Books
     *     const book = await prisma.book.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends BookCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, BookCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

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
    **/
    delete<T extends BookDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, BookDeleteArgs<ExtArgs>>
    ): Prisma__BookClient<$Types.GetResult<BookPayload<ExtArgs>, T, 'delete', never>, never, ExtArgs>

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
    **/
    update<T extends BookUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, BookUpdateArgs<ExtArgs>>
    ): Prisma__BookClient<$Types.GetResult<BookPayload<ExtArgs>, T, 'update', never>, never, ExtArgs>

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
    **/
    deleteMany<T extends BookDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, BookDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

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
    **/
    updateMany<T extends BookUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, BookUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

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
    **/
    upsert<T extends BookUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, BookUpsertArgs<ExtArgs>>
    ): Prisma__BookClient<$Types.GetResult<BookPayload<ExtArgs>, T, 'upsert', never>, never, ExtArgs>

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
      ByFields extends TupleToUnion<T['by']>,
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

  }

  /**
   * The delegate class that acts as a "Promise-like" for Book.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__BookClient<T, Null = never, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    book_likes<T extends Book$book_likesArgs<ExtArgs> = {}>(args?: Subset<T, Book$book_likesArgs<ExtArgs>>): Prisma.PrismaPromise<$Types.GetResult<Book_likesPayload<ExtArgs>, T, 'findMany', never>| Null>;

    book_consulted<T extends Book$book_consultedArgs<ExtArgs> = {}>(args?: Subset<T, Book$book_consultedArgs<ExtArgs>>): Prisma.PrismaPromise<$Types.GetResult<Book_consultedPayload<ExtArgs>, T, 'findMany', never>| Null>;

    circulation<T extends Book$circulationArgs<ExtArgs> = {}>(args?: Subset<T, Book$circulationArgs<ExtArgs>>): Prisma.PrismaPromise<$Types.GetResult<CirculationPayload<ExtArgs>, T, 'findMany', never>| Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * Book base type for findUnique actions
   */
  export type BookFindUniqueArgsBase<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Book
     */
    select?: BookSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BookInclude<ExtArgs> | null
    /**
     * Filter, which Book to fetch.
     */
    where: BookWhereUniqueInput
  }

  /**
   * Book findUnique
   */
  export interface BookFindUniqueArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends BookFindUniqueArgsBase<ExtArgs> {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Book findUniqueOrThrow
   */
  export type BookFindUniqueOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Book
     */
    select?: BookSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BookInclude<ExtArgs> | null
    /**
     * Filter, which Book to fetch.
     */
    where: BookWhereUniqueInput
  }


  /**
   * Book base type for findFirst actions
   */
  export type BookFindFirstArgsBase<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Book
     */
    select?: BookSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
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
    orderBy?: Enumerable<BookOrderByWithRelationInput>
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
    distinct?: Enumerable<BookScalarFieldEnum>
  }

  /**
   * Book findFirst
   */
  export interface BookFindFirstArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends BookFindFirstArgsBase<ExtArgs> {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Book findFirstOrThrow
   */
  export type BookFindFirstOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Book
     */
    select?: BookSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
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
    orderBy?: Enumerable<BookOrderByWithRelationInput>
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
    distinct?: Enumerable<BookScalarFieldEnum>
  }


  /**
   * Book findMany
   */
  export type BookFindManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Book
     */
    select?: BookSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
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
    orderBy?: Enumerable<BookOrderByWithRelationInput>
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
    distinct?: Enumerable<BookScalarFieldEnum>
  }


  /**
   * Book create
   */
  export type BookCreateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Book
     */
    select?: BookSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
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
  export type BookCreateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Books.
     */
    data: Enumerable<BookCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Book update
   */
  export type BookUpdateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Book
     */
    select?: BookSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
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
  export type BookUpdateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Books.
     */
    data: XOR<BookUpdateManyMutationInput, BookUncheckedUpdateManyInput>
    /**
     * Filter which Books to update
     */
    where?: BookWhereInput
  }


  /**
   * Book upsert
   */
  export type BookUpsertArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Book
     */
    select?: BookSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
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
  export type BookDeleteArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Book
     */
    select?: BookSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
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
  export type BookDeleteManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which Books to delete
     */
    where?: BookWhereInput
  }


  /**
   * Book.book_likes
   */
  export type Book$book_likesArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Book_likes
     */
    select?: Book_likesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: Book_likesInclude<ExtArgs> | null
    where?: Book_likesWhereInput
    orderBy?: Enumerable<Book_likesOrderByWithRelationInput>
    cursor?: Book_likesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<Book_likesScalarFieldEnum>
  }


  /**
   * Book.book_consulted
   */
  export type Book$book_consultedArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Book_consulted
     */
    select?: Book_consultedSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: Book_consultedInclude<ExtArgs> | null
    where?: Book_consultedWhereInput
    orderBy?: Enumerable<Book_consultedOrderByWithRelationInput>
    cursor?: Book_consultedWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<Book_consultedScalarFieldEnum>
  }


  /**
   * Book.circulation
   */
  export type Book$circulationArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Circulation
     */
    select?: CirculationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CirculationInclude<ExtArgs> | null
    where?: CirculationWhereInput
    orderBy?: Enumerable<CirculationOrderByWithRelationInput>
    cursor?: CirculationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<CirculationScalarFieldEnum>
  }


  /**
   * Book without action
   */
  export type BookArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Book
     */
    select?: BookSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
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

  export type EmailVerificationTokenAggregateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which EmailVerificationToken to aggregate.
     */
    where?: EmailVerificationTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EmailVerificationTokens to fetch.
     */
    orderBy?: Enumerable<EmailVerificationTokenOrderByWithRelationInput>
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




  export type EmailVerificationTokenGroupByArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: EmailVerificationTokenWhereInput
    orderBy?: Enumerable<EmailVerificationTokenOrderByWithAggregationInput>
    by: EmailVerificationTokenScalarFieldEnum[]
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
      PickArray<EmailVerificationTokenGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EmailVerificationTokenGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EmailVerificationTokenGroupByOutputType[P]>
            : GetScalarType<T[P], EmailVerificationTokenGroupByOutputType[P]>
        }
      >
    >


  export type EmailVerificationTokenSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
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


  type EmailVerificationTokenGetPayload<S extends boolean | null | undefined | EmailVerificationTokenArgs> = $Types.GetResult<EmailVerificationTokenPayload, S>

  type EmailVerificationTokenCountArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = 
    Omit<EmailVerificationTokenFindManyArgs, 'select' | 'include'> & {
      select?: EmailVerificationTokenCountAggregateInputType | true
    }

  export interface EmailVerificationTokenDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> {
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
    **/
    findUnique<T extends EmailVerificationTokenFindUniqueArgs<ExtArgs>, LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, EmailVerificationTokenFindUniqueArgs<ExtArgs>>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'EmailVerificationToken'> extends True ? Prisma__EmailVerificationTokenClient<$Types.GetResult<EmailVerificationTokenPayload<ExtArgs>, T, 'findUnique', never>, never, ExtArgs> : Prisma__EmailVerificationTokenClient<$Types.GetResult<EmailVerificationTokenPayload<ExtArgs>, T, 'findUnique', never> | null, null, ExtArgs>

    /**
     * Find one EmailVerificationToken that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {EmailVerificationTokenFindUniqueOrThrowArgs} args - Arguments to find a EmailVerificationToken
     * @example
     * // Get one EmailVerificationToken
     * const emailVerificationToken = await prisma.emailVerificationToken.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends EmailVerificationTokenFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, EmailVerificationTokenFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__EmailVerificationTokenClient<$Types.GetResult<EmailVerificationTokenPayload<ExtArgs>, T, 'findUniqueOrThrow', never>, never, ExtArgs>

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
    **/
    findFirst<T extends EmailVerificationTokenFindFirstArgs<ExtArgs>, LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, EmailVerificationTokenFindFirstArgs<ExtArgs>>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'EmailVerificationToken'> extends True ? Prisma__EmailVerificationTokenClient<$Types.GetResult<EmailVerificationTokenPayload<ExtArgs>, T, 'findFirst', never>, never, ExtArgs> : Prisma__EmailVerificationTokenClient<$Types.GetResult<EmailVerificationTokenPayload<ExtArgs>, T, 'findFirst', never> | null, null, ExtArgs>

    /**
     * Find the first EmailVerificationToken that matches the filter or
     * throw `NotFoundError` if no matches were found.
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
    **/
    findFirstOrThrow<T extends EmailVerificationTokenFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, EmailVerificationTokenFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__EmailVerificationTokenClient<$Types.GetResult<EmailVerificationTokenPayload<ExtArgs>, T, 'findFirstOrThrow', never>, never, ExtArgs>

    /**
     * Find zero or more EmailVerificationTokens that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmailVerificationTokenFindManyArgs=} args - Arguments to filter and select certain fields only.
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
    **/
    findMany<T extends EmailVerificationTokenFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, EmailVerificationTokenFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Types.GetResult<EmailVerificationTokenPayload<ExtArgs>, T, 'findMany', never>>

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
    **/
    create<T extends EmailVerificationTokenCreateArgs<ExtArgs>>(
      args: SelectSubset<T, EmailVerificationTokenCreateArgs<ExtArgs>>
    ): Prisma__EmailVerificationTokenClient<$Types.GetResult<EmailVerificationTokenPayload<ExtArgs>, T, 'create', never>, never, ExtArgs>

    /**
     * Create many EmailVerificationTokens.
     *     @param {EmailVerificationTokenCreateManyArgs} args - Arguments to create many EmailVerificationTokens.
     *     @example
     *     // Create many EmailVerificationTokens
     *     const emailVerificationToken = await prisma.emailVerificationToken.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends EmailVerificationTokenCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, EmailVerificationTokenCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

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
    **/
    delete<T extends EmailVerificationTokenDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, EmailVerificationTokenDeleteArgs<ExtArgs>>
    ): Prisma__EmailVerificationTokenClient<$Types.GetResult<EmailVerificationTokenPayload<ExtArgs>, T, 'delete', never>, never, ExtArgs>

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
    **/
    update<T extends EmailVerificationTokenUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, EmailVerificationTokenUpdateArgs<ExtArgs>>
    ): Prisma__EmailVerificationTokenClient<$Types.GetResult<EmailVerificationTokenPayload<ExtArgs>, T, 'update', never>, never, ExtArgs>

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
    **/
    deleteMany<T extends EmailVerificationTokenDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, EmailVerificationTokenDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

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
    **/
    updateMany<T extends EmailVerificationTokenUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, EmailVerificationTokenUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

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
    **/
    upsert<T extends EmailVerificationTokenUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, EmailVerificationTokenUpsertArgs<ExtArgs>>
    ): Prisma__EmailVerificationTokenClient<$Types.GetResult<EmailVerificationTokenPayload<ExtArgs>, T, 'upsert', never>, never, ExtArgs>

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
      ByFields extends TupleToUnion<T['by']>,
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

  }

  /**
   * The delegate class that acts as a "Promise-like" for EmailVerificationToken.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__EmailVerificationTokenClient<T, Null = never, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);


    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * EmailVerificationToken base type for findUnique actions
   */
  export type EmailVerificationTokenFindUniqueArgsBase<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmailVerificationToken
     */
    select?: EmailVerificationTokenSelect<ExtArgs> | null
    /**
     * Filter, which EmailVerificationToken to fetch.
     */
    where: EmailVerificationTokenWhereUniqueInput
  }

  /**
   * EmailVerificationToken findUnique
   */
  export interface EmailVerificationTokenFindUniqueArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends EmailVerificationTokenFindUniqueArgsBase<ExtArgs> {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * EmailVerificationToken findUniqueOrThrow
   */
  export type EmailVerificationTokenFindUniqueOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmailVerificationToken
     */
    select?: EmailVerificationTokenSelect<ExtArgs> | null
    /**
     * Filter, which EmailVerificationToken to fetch.
     */
    where: EmailVerificationTokenWhereUniqueInput
  }


  /**
   * EmailVerificationToken base type for findFirst actions
   */
  export type EmailVerificationTokenFindFirstArgsBase<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmailVerificationToken
     */
    select?: EmailVerificationTokenSelect<ExtArgs> | null
    /**
     * Filter, which EmailVerificationToken to fetch.
     */
    where?: EmailVerificationTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EmailVerificationTokens to fetch.
     */
    orderBy?: Enumerable<EmailVerificationTokenOrderByWithRelationInput>
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
    distinct?: Enumerable<EmailVerificationTokenScalarFieldEnum>
  }

  /**
   * EmailVerificationToken findFirst
   */
  export interface EmailVerificationTokenFindFirstArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends EmailVerificationTokenFindFirstArgsBase<ExtArgs> {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * EmailVerificationToken findFirstOrThrow
   */
  export type EmailVerificationTokenFindFirstOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmailVerificationToken
     */
    select?: EmailVerificationTokenSelect<ExtArgs> | null
    /**
     * Filter, which EmailVerificationToken to fetch.
     */
    where?: EmailVerificationTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EmailVerificationTokens to fetch.
     */
    orderBy?: Enumerable<EmailVerificationTokenOrderByWithRelationInput>
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
    distinct?: Enumerable<EmailVerificationTokenScalarFieldEnum>
  }


  /**
   * EmailVerificationToken findMany
   */
  export type EmailVerificationTokenFindManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmailVerificationToken
     */
    select?: EmailVerificationTokenSelect<ExtArgs> | null
    /**
     * Filter, which EmailVerificationTokens to fetch.
     */
    where?: EmailVerificationTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EmailVerificationTokens to fetch.
     */
    orderBy?: Enumerable<EmailVerificationTokenOrderByWithRelationInput>
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
    distinct?: Enumerable<EmailVerificationTokenScalarFieldEnum>
  }


  /**
   * EmailVerificationToken create
   */
  export type EmailVerificationTokenCreateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmailVerificationToken
     */
    select?: EmailVerificationTokenSelect<ExtArgs> | null
    /**
     * The data needed to create a EmailVerificationToken.
     */
    data: XOR<EmailVerificationTokenCreateInput, EmailVerificationTokenUncheckedCreateInput>
  }


  /**
   * EmailVerificationToken createMany
   */
  export type EmailVerificationTokenCreateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many EmailVerificationTokens.
     */
    data: Enumerable<EmailVerificationTokenCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * EmailVerificationToken update
   */
  export type EmailVerificationTokenUpdateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmailVerificationToken
     */
    select?: EmailVerificationTokenSelect<ExtArgs> | null
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
  export type EmailVerificationTokenUpdateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to update EmailVerificationTokens.
     */
    data: XOR<EmailVerificationTokenUpdateManyMutationInput, EmailVerificationTokenUncheckedUpdateManyInput>
    /**
     * Filter which EmailVerificationTokens to update
     */
    where?: EmailVerificationTokenWhereInput
  }


  /**
   * EmailVerificationToken upsert
   */
  export type EmailVerificationTokenUpsertArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmailVerificationToken
     */
    select?: EmailVerificationTokenSelect<ExtArgs> | null
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
  export type EmailVerificationTokenDeleteArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmailVerificationToken
     */
    select?: EmailVerificationTokenSelect<ExtArgs> | null
    /**
     * Filter which EmailVerificationToken to delete.
     */
    where: EmailVerificationTokenWhereUniqueInput
  }


  /**
   * EmailVerificationToken deleteMany
   */
  export type EmailVerificationTokenDeleteManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which EmailVerificationTokens to delete
     */
    where?: EmailVerificationTokenWhereInput
  }


  /**
   * EmailVerificationToken without action
   */
  export type EmailVerificationTokenArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmailVerificationToken
     */
    select?: EmailVerificationTokenSelect<ExtArgs> | null
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

  export type PatronAggregateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which Patron to aggregate.
     */
    where?: PatronWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Patrons to fetch.
     */
    orderBy?: Enumerable<PatronOrderByWithRelationInput>
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




  export type PatronGroupByArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: PatronWhereInput
    orderBy?: Enumerable<PatronOrderByWithAggregationInput>
    by: PatronScalarFieldEnum[]
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
      PickArray<PatronGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PatronGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PatronGroupByOutputType[P]>
            : GetScalarType<T[P], PatronGroupByOutputType[P]>
        }
      >
    >


  export type PatronSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
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
    _count?: boolean | PatronCountOutputTypeArgs<ExtArgs>
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

  export type PatronInclude<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    book_likes?: boolean | Patron$book_likesArgs<ExtArgs>
    book_consulted?: boolean | Patron$book_consultedArgs<ExtArgs>
    circulation?: boolean | Patron$circulationArgs<ExtArgs>
    _count?: boolean | PatronCountOutputTypeArgs<ExtArgs>
  }


  type PatronGetPayload<S extends boolean | null | undefined | PatronArgs> = $Types.GetResult<PatronPayload, S>

  type PatronCountArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = 
    Omit<PatronFindManyArgs, 'select' | 'include'> & {
      select?: PatronCountAggregateInputType | true
    }

  export interface PatronDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> {
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
    **/
    findUnique<T extends PatronFindUniqueArgs<ExtArgs>, LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, PatronFindUniqueArgs<ExtArgs>>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Patron'> extends True ? Prisma__PatronClient<$Types.GetResult<PatronPayload<ExtArgs>, T, 'findUnique', never>, never, ExtArgs> : Prisma__PatronClient<$Types.GetResult<PatronPayload<ExtArgs>, T, 'findUnique', never> | null, null, ExtArgs>

    /**
     * Find one Patron that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {PatronFindUniqueOrThrowArgs} args - Arguments to find a Patron
     * @example
     * // Get one Patron
     * const patron = await prisma.patron.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends PatronFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, PatronFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__PatronClient<$Types.GetResult<PatronPayload<ExtArgs>, T, 'findUniqueOrThrow', never>, never, ExtArgs>

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
    **/
    findFirst<T extends PatronFindFirstArgs<ExtArgs>, LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, PatronFindFirstArgs<ExtArgs>>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Patron'> extends True ? Prisma__PatronClient<$Types.GetResult<PatronPayload<ExtArgs>, T, 'findFirst', never>, never, ExtArgs> : Prisma__PatronClient<$Types.GetResult<PatronPayload<ExtArgs>, T, 'findFirst', never> | null, null, ExtArgs>

    /**
     * Find the first Patron that matches the filter or
     * throw `NotFoundError` if no matches were found.
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
    **/
    findFirstOrThrow<T extends PatronFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, PatronFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__PatronClient<$Types.GetResult<PatronPayload<ExtArgs>, T, 'findFirstOrThrow', never>, never, ExtArgs>

    /**
     * Find zero or more Patrons that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PatronFindManyArgs=} args - Arguments to filter and select certain fields only.
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
    **/
    findMany<T extends PatronFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, PatronFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Types.GetResult<PatronPayload<ExtArgs>, T, 'findMany', never>>

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
    **/
    create<T extends PatronCreateArgs<ExtArgs>>(
      args: SelectSubset<T, PatronCreateArgs<ExtArgs>>
    ): Prisma__PatronClient<$Types.GetResult<PatronPayload<ExtArgs>, T, 'create', never>, never, ExtArgs>

    /**
     * Create many Patrons.
     *     @param {PatronCreateManyArgs} args - Arguments to create many Patrons.
     *     @example
     *     // Create many Patrons
     *     const patron = await prisma.patron.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends PatronCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, PatronCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

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
    **/
    delete<T extends PatronDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, PatronDeleteArgs<ExtArgs>>
    ): Prisma__PatronClient<$Types.GetResult<PatronPayload<ExtArgs>, T, 'delete', never>, never, ExtArgs>

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
    **/
    update<T extends PatronUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, PatronUpdateArgs<ExtArgs>>
    ): Prisma__PatronClient<$Types.GetResult<PatronPayload<ExtArgs>, T, 'update', never>, never, ExtArgs>

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
    **/
    deleteMany<T extends PatronDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, PatronDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

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
    **/
    updateMany<T extends PatronUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, PatronUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

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
    **/
    upsert<T extends PatronUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, PatronUpsertArgs<ExtArgs>>
    ): Prisma__PatronClient<$Types.GetResult<PatronPayload<ExtArgs>, T, 'upsert', never>, never, ExtArgs>

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
      ByFields extends TupleToUnion<T['by']>,
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

  }

  /**
   * The delegate class that acts as a "Promise-like" for Patron.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__PatronClient<T, Null = never, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    book_likes<T extends Patron$book_likesArgs<ExtArgs> = {}>(args?: Subset<T, Patron$book_likesArgs<ExtArgs>>): Prisma.PrismaPromise<$Types.GetResult<Book_likesPayload<ExtArgs>, T, 'findMany', never>| Null>;

    book_consulted<T extends Patron$book_consultedArgs<ExtArgs> = {}>(args?: Subset<T, Patron$book_consultedArgs<ExtArgs>>): Prisma.PrismaPromise<$Types.GetResult<Book_consultedPayload<ExtArgs>, T, 'findMany', never>| Null>;

    circulation<T extends Patron$circulationArgs<ExtArgs> = {}>(args?: Subset<T, Patron$circulationArgs<ExtArgs>>): Prisma.PrismaPromise<$Types.GetResult<CirculationPayload<ExtArgs>, T, 'findMany', never>| Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * Patron base type for findUnique actions
   */
  export type PatronFindUniqueArgsBase<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Patron
     */
    select?: PatronSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PatronInclude<ExtArgs> | null
    /**
     * Filter, which Patron to fetch.
     */
    where: PatronWhereUniqueInput
  }

  /**
   * Patron findUnique
   */
  export interface PatronFindUniqueArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends PatronFindUniqueArgsBase<ExtArgs> {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Patron findUniqueOrThrow
   */
  export type PatronFindUniqueOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Patron
     */
    select?: PatronSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PatronInclude<ExtArgs> | null
    /**
     * Filter, which Patron to fetch.
     */
    where: PatronWhereUniqueInput
  }


  /**
   * Patron base type for findFirst actions
   */
  export type PatronFindFirstArgsBase<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Patron
     */
    select?: PatronSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
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
    orderBy?: Enumerable<PatronOrderByWithRelationInput>
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
    distinct?: Enumerable<PatronScalarFieldEnum>
  }

  /**
   * Patron findFirst
   */
  export interface PatronFindFirstArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends PatronFindFirstArgsBase<ExtArgs> {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Patron findFirstOrThrow
   */
  export type PatronFindFirstOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Patron
     */
    select?: PatronSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
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
    orderBy?: Enumerable<PatronOrderByWithRelationInput>
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
    distinct?: Enumerable<PatronScalarFieldEnum>
  }


  /**
   * Patron findMany
   */
  export type PatronFindManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Patron
     */
    select?: PatronSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
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
    orderBy?: Enumerable<PatronOrderByWithRelationInput>
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
    distinct?: Enumerable<PatronScalarFieldEnum>
  }


  /**
   * Patron create
   */
  export type PatronCreateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Patron
     */
    select?: PatronSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
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
  export type PatronCreateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Patrons.
     */
    data: Enumerable<PatronCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Patron update
   */
  export type PatronUpdateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Patron
     */
    select?: PatronSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
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
  export type PatronUpdateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Patrons.
     */
    data: XOR<PatronUpdateManyMutationInput, PatronUncheckedUpdateManyInput>
    /**
     * Filter which Patrons to update
     */
    where?: PatronWhereInput
  }


  /**
   * Patron upsert
   */
  export type PatronUpsertArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Patron
     */
    select?: PatronSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
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
  export type PatronDeleteArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Patron
     */
    select?: PatronSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
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
  export type PatronDeleteManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which Patrons to delete
     */
    where?: PatronWhereInput
  }


  /**
   * Patron.book_likes
   */
  export type Patron$book_likesArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Book_likes
     */
    select?: Book_likesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: Book_likesInclude<ExtArgs> | null
    where?: Book_likesWhereInput
    orderBy?: Enumerable<Book_likesOrderByWithRelationInput>
    cursor?: Book_likesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<Book_likesScalarFieldEnum>
  }


  /**
   * Patron.book_consulted
   */
  export type Patron$book_consultedArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Book_consulted
     */
    select?: Book_consultedSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: Book_consultedInclude<ExtArgs> | null
    where?: Book_consultedWhereInput
    orderBy?: Enumerable<Book_consultedOrderByWithRelationInput>
    cursor?: Book_consultedWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<Book_consultedScalarFieldEnum>
  }


  /**
   * Patron.circulation
   */
  export type Patron$circulationArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Circulation
     */
    select?: CirculationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CirculationInclude<ExtArgs> | null
    where?: CirculationWhereInput
    orderBy?: Enumerable<CirculationOrderByWithRelationInput>
    cursor?: CirculationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<CirculationScalarFieldEnum>
  }


  /**
   * Patron without action
   */
  export type PatronArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Patron
     */
    select?: PatronSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
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

  export type Book_likesAggregateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which Book_likes to aggregate.
     */
    where?: Book_likesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Book_likes to fetch.
     */
    orderBy?: Enumerable<Book_likesOrderByWithRelationInput>
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




  export type Book_likesGroupByArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: Book_likesWhereInput
    orderBy?: Enumerable<Book_likesOrderByWithAggregationInput>
    by: Book_likesScalarFieldEnum[]
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
      PickArray<Book_likesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Book_likesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Book_likesGroupByOutputType[P]>
            : GetScalarType<T[P], Book_likesGroupByOutputType[P]>
        }
      >
    >


  export type Book_likesSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    book_id?: boolean
    patron_id?: boolean
    liked_at?: boolean
    book?: boolean | BookArgs<ExtArgs>
    patron?: boolean | PatronArgs<ExtArgs>
  }, ExtArgs["result"]["book_likes"]>

  export type Book_likesSelectScalar = {
    book_id?: boolean
    patron_id?: boolean
    liked_at?: boolean
  }

  export type Book_likesInclude<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    book?: boolean | BookArgs<ExtArgs>
    patron?: boolean | PatronArgs<ExtArgs>
  }


  type Book_likesGetPayload<S extends boolean | null | undefined | Book_likesArgs> = $Types.GetResult<Book_likesPayload, S>

  type Book_likesCountArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = 
    Omit<Book_likesFindManyArgs, 'select' | 'include'> & {
      select?: Book_likesCountAggregateInputType | true
    }

  export interface Book_likesDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> {
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
    **/
    findUnique<T extends Book_likesFindUniqueArgs<ExtArgs>, LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, Book_likesFindUniqueArgs<ExtArgs>>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Book_likes'> extends True ? Prisma__Book_likesClient<$Types.GetResult<Book_likesPayload<ExtArgs>, T, 'findUnique', never>, never, ExtArgs> : Prisma__Book_likesClient<$Types.GetResult<Book_likesPayload<ExtArgs>, T, 'findUnique', never> | null, null, ExtArgs>

    /**
     * Find one Book_likes that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {Book_likesFindUniqueOrThrowArgs} args - Arguments to find a Book_likes
     * @example
     * // Get one Book_likes
     * const book_likes = await prisma.book_likes.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends Book_likesFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, Book_likesFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__Book_likesClient<$Types.GetResult<Book_likesPayload<ExtArgs>, T, 'findUniqueOrThrow', never>, never, ExtArgs>

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
    **/
    findFirst<T extends Book_likesFindFirstArgs<ExtArgs>, LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, Book_likesFindFirstArgs<ExtArgs>>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Book_likes'> extends True ? Prisma__Book_likesClient<$Types.GetResult<Book_likesPayload<ExtArgs>, T, 'findFirst', never>, never, ExtArgs> : Prisma__Book_likesClient<$Types.GetResult<Book_likesPayload<ExtArgs>, T, 'findFirst', never> | null, null, ExtArgs>

    /**
     * Find the first Book_likes that matches the filter or
     * throw `NotFoundError` if no matches were found.
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
    **/
    findFirstOrThrow<T extends Book_likesFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, Book_likesFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__Book_likesClient<$Types.GetResult<Book_likesPayload<ExtArgs>, T, 'findFirstOrThrow', never>, never, ExtArgs>

    /**
     * Find zero or more Book_likes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Book_likesFindManyArgs=} args - Arguments to filter and select certain fields only.
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
    **/
    findMany<T extends Book_likesFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, Book_likesFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Types.GetResult<Book_likesPayload<ExtArgs>, T, 'findMany', never>>

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
    **/
    create<T extends Book_likesCreateArgs<ExtArgs>>(
      args: SelectSubset<T, Book_likesCreateArgs<ExtArgs>>
    ): Prisma__Book_likesClient<$Types.GetResult<Book_likesPayload<ExtArgs>, T, 'create', never>, never, ExtArgs>

    /**
     * Create many Book_likes.
     *     @param {Book_likesCreateManyArgs} args - Arguments to create many Book_likes.
     *     @example
     *     // Create many Book_likes
     *     const book_likes = await prisma.book_likes.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends Book_likesCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, Book_likesCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

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
    **/
    delete<T extends Book_likesDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, Book_likesDeleteArgs<ExtArgs>>
    ): Prisma__Book_likesClient<$Types.GetResult<Book_likesPayload<ExtArgs>, T, 'delete', never>, never, ExtArgs>

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
    **/
    update<T extends Book_likesUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, Book_likesUpdateArgs<ExtArgs>>
    ): Prisma__Book_likesClient<$Types.GetResult<Book_likesPayload<ExtArgs>, T, 'update', never>, never, ExtArgs>

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
    **/
    deleteMany<T extends Book_likesDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, Book_likesDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

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
    **/
    updateMany<T extends Book_likesUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, Book_likesUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

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
    **/
    upsert<T extends Book_likesUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, Book_likesUpsertArgs<ExtArgs>>
    ): Prisma__Book_likesClient<$Types.GetResult<Book_likesPayload<ExtArgs>, T, 'upsert', never>, never, ExtArgs>

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
      ByFields extends TupleToUnion<T['by']>,
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

  }

  /**
   * The delegate class that acts as a "Promise-like" for Book_likes.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__Book_likesClient<T, Null = never, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    book<T extends BookArgs<ExtArgs> = {}>(args?: Subset<T, BookArgs<ExtArgs>>): Prisma__BookClient<$Types.GetResult<BookPayload<ExtArgs>, T, 'findUnique', never> | Null, never, ExtArgs>;

    patron<T extends PatronArgs<ExtArgs> = {}>(args?: Subset<T, PatronArgs<ExtArgs>>): Prisma__PatronClient<$Types.GetResult<PatronPayload<ExtArgs>, T, 'findUnique', never> | Null, never, ExtArgs>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * Book_likes base type for findUnique actions
   */
  export type Book_likesFindUniqueArgsBase<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Book_likes
     */
    select?: Book_likesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: Book_likesInclude<ExtArgs> | null
    /**
     * Filter, which Book_likes to fetch.
     */
    where: Book_likesWhereUniqueInput
  }

  /**
   * Book_likes findUnique
   */
  export interface Book_likesFindUniqueArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends Book_likesFindUniqueArgsBase<ExtArgs> {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Book_likes findUniqueOrThrow
   */
  export type Book_likesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Book_likes
     */
    select?: Book_likesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: Book_likesInclude<ExtArgs> | null
    /**
     * Filter, which Book_likes to fetch.
     */
    where: Book_likesWhereUniqueInput
  }


  /**
   * Book_likes base type for findFirst actions
   */
  export type Book_likesFindFirstArgsBase<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Book_likes
     */
    select?: Book_likesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
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
    orderBy?: Enumerable<Book_likesOrderByWithRelationInput>
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
    distinct?: Enumerable<Book_likesScalarFieldEnum>
  }

  /**
   * Book_likes findFirst
   */
  export interface Book_likesFindFirstArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends Book_likesFindFirstArgsBase<ExtArgs> {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Book_likes findFirstOrThrow
   */
  export type Book_likesFindFirstOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Book_likes
     */
    select?: Book_likesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
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
    orderBy?: Enumerable<Book_likesOrderByWithRelationInput>
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
    distinct?: Enumerable<Book_likesScalarFieldEnum>
  }


  /**
   * Book_likes findMany
   */
  export type Book_likesFindManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Book_likes
     */
    select?: Book_likesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
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
    orderBy?: Enumerable<Book_likesOrderByWithRelationInput>
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
    distinct?: Enumerable<Book_likesScalarFieldEnum>
  }


  /**
   * Book_likes create
   */
  export type Book_likesCreateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Book_likes
     */
    select?: Book_likesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
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
  export type Book_likesCreateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Book_likes.
     */
    data: Enumerable<Book_likesCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Book_likes update
   */
  export type Book_likesUpdateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Book_likes
     */
    select?: Book_likesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
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
  export type Book_likesUpdateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Book_likes.
     */
    data: XOR<Book_likesUpdateManyMutationInput, Book_likesUncheckedUpdateManyInput>
    /**
     * Filter which Book_likes to update
     */
    where?: Book_likesWhereInput
  }


  /**
   * Book_likes upsert
   */
  export type Book_likesUpsertArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Book_likes
     */
    select?: Book_likesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
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
  export type Book_likesDeleteArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Book_likes
     */
    select?: Book_likesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
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
  export type Book_likesDeleteManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which Book_likes to delete
     */
    where?: Book_likesWhereInput
  }


  /**
   * Book_likes without action
   */
  export type Book_likesArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Book_likes
     */
    select?: Book_likesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
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

  export type Book_consultedAggregateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which Book_consulted to aggregate.
     */
    where?: Book_consultedWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Book_consulteds to fetch.
     */
    orderBy?: Enumerable<Book_consultedOrderByWithRelationInput>
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




  export type Book_consultedGroupByArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: Book_consultedWhereInput
    orderBy?: Enumerable<Book_consultedOrderByWithAggregationInput>
    by: Book_consultedScalarFieldEnum[]
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
      PickArray<Book_consultedGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Book_consultedGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Book_consultedGroupByOutputType[P]>
            : GetScalarType<T[P], Book_consultedGroupByOutputType[P]>
        }
      >
    >


  export type Book_consultedSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    book_id?: boolean
    patron_id?: boolean
    consulted_at?: boolean
    book?: boolean | BookArgs<ExtArgs>
    patron?: boolean | PatronArgs<ExtArgs>
  }, ExtArgs["result"]["book_consulted"]>

  export type Book_consultedSelectScalar = {
    book_id?: boolean
    patron_id?: boolean
    consulted_at?: boolean
  }

  export type Book_consultedInclude<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    book?: boolean | BookArgs<ExtArgs>
    patron?: boolean | PatronArgs<ExtArgs>
  }


  type Book_consultedGetPayload<S extends boolean | null | undefined | Book_consultedArgs> = $Types.GetResult<Book_consultedPayload, S>

  type Book_consultedCountArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = 
    Omit<Book_consultedFindManyArgs, 'select' | 'include'> & {
      select?: Book_consultedCountAggregateInputType | true
    }

  export interface Book_consultedDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> {
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
    **/
    findUnique<T extends Book_consultedFindUniqueArgs<ExtArgs>, LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, Book_consultedFindUniqueArgs<ExtArgs>>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Book_consulted'> extends True ? Prisma__Book_consultedClient<$Types.GetResult<Book_consultedPayload<ExtArgs>, T, 'findUnique', never>, never, ExtArgs> : Prisma__Book_consultedClient<$Types.GetResult<Book_consultedPayload<ExtArgs>, T, 'findUnique', never> | null, null, ExtArgs>

    /**
     * Find one Book_consulted that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {Book_consultedFindUniqueOrThrowArgs} args - Arguments to find a Book_consulted
     * @example
     * // Get one Book_consulted
     * const book_consulted = await prisma.book_consulted.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends Book_consultedFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, Book_consultedFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__Book_consultedClient<$Types.GetResult<Book_consultedPayload<ExtArgs>, T, 'findUniqueOrThrow', never>, never, ExtArgs>

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
    **/
    findFirst<T extends Book_consultedFindFirstArgs<ExtArgs>, LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, Book_consultedFindFirstArgs<ExtArgs>>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Book_consulted'> extends True ? Prisma__Book_consultedClient<$Types.GetResult<Book_consultedPayload<ExtArgs>, T, 'findFirst', never>, never, ExtArgs> : Prisma__Book_consultedClient<$Types.GetResult<Book_consultedPayload<ExtArgs>, T, 'findFirst', never> | null, null, ExtArgs>

    /**
     * Find the first Book_consulted that matches the filter or
     * throw `NotFoundError` if no matches were found.
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
    **/
    findFirstOrThrow<T extends Book_consultedFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, Book_consultedFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__Book_consultedClient<$Types.GetResult<Book_consultedPayload<ExtArgs>, T, 'findFirstOrThrow', never>, never, ExtArgs>

    /**
     * Find zero or more Book_consulteds that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Book_consultedFindManyArgs=} args - Arguments to filter and select certain fields only.
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
    **/
    findMany<T extends Book_consultedFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, Book_consultedFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Types.GetResult<Book_consultedPayload<ExtArgs>, T, 'findMany', never>>

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
    **/
    create<T extends Book_consultedCreateArgs<ExtArgs>>(
      args: SelectSubset<T, Book_consultedCreateArgs<ExtArgs>>
    ): Prisma__Book_consultedClient<$Types.GetResult<Book_consultedPayload<ExtArgs>, T, 'create', never>, never, ExtArgs>

    /**
     * Create many Book_consulteds.
     *     @param {Book_consultedCreateManyArgs} args - Arguments to create many Book_consulteds.
     *     @example
     *     // Create many Book_consulteds
     *     const book_consulted = await prisma.book_consulted.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends Book_consultedCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, Book_consultedCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

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
    **/
    delete<T extends Book_consultedDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, Book_consultedDeleteArgs<ExtArgs>>
    ): Prisma__Book_consultedClient<$Types.GetResult<Book_consultedPayload<ExtArgs>, T, 'delete', never>, never, ExtArgs>

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
    **/
    update<T extends Book_consultedUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, Book_consultedUpdateArgs<ExtArgs>>
    ): Prisma__Book_consultedClient<$Types.GetResult<Book_consultedPayload<ExtArgs>, T, 'update', never>, never, ExtArgs>

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
    **/
    deleteMany<T extends Book_consultedDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, Book_consultedDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

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
    **/
    updateMany<T extends Book_consultedUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, Book_consultedUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

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
    **/
    upsert<T extends Book_consultedUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, Book_consultedUpsertArgs<ExtArgs>>
    ): Prisma__Book_consultedClient<$Types.GetResult<Book_consultedPayload<ExtArgs>, T, 'upsert', never>, never, ExtArgs>

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
      ByFields extends TupleToUnion<T['by']>,
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

  }

  /**
   * The delegate class that acts as a "Promise-like" for Book_consulted.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__Book_consultedClient<T, Null = never, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    book<T extends BookArgs<ExtArgs> = {}>(args?: Subset<T, BookArgs<ExtArgs>>): Prisma__BookClient<$Types.GetResult<BookPayload<ExtArgs>, T, 'findUnique', never> | Null, never, ExtArgs>;

    patron<T extends PatronArgs<ExtArgs> = {}>(args?: Subset<T, PatronArgs<ExtArgs>>): Prisma__PatronClient<$Types.GetResult<PatronPayload<ExtArgs>, T, 'findUnique', never> | Null, never, ExtArgs>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * Book_consulted base type for findUnique actions
   */
  export type Book_consultedFindUniqueArgsBase<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Book_consulted
     */
    select?: Book_consultedSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: Book_consultedInclude<ExtArgs> | null
    /**
     * Filter, which Book_consulted to fetch.
     */
    where: Book_consultedWhereUniqueInput
  }

  /**
   * Book_consulted findUnique
   */
  export interface Book_consultedFindUniqueArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends Book_consultedFindUniqueArgsBase<ExtArgs> {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Book_consulted findUniqueOrThrow
   */
  export type Book_consultedFindUniqueOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Book_consulted
     */
    select?: Book_consultedSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: Book_consultedInclude<ExtArgs> | null
    /**
     * Filter, which Book_consulted to fetch.
     */
    where: Book_consultedWhereUniqueInput
  }


  /**
   * Book_consulted base type for findFirst actions
   */
  export type Book_consultedFindFirstArgsBase<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Book_consulted
     */
    select?: Book_consultedSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
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
    orderBy?: Enumerable<Book_consultedOrderByWithRelationInput>
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
    distinct?: Enumerable<Book_consultedScalarFieldEnum>
  }

  /**
   * Book_consulted findFirst
   */
  export interface Book_consultedFindFirstArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends Book_consultedFindFirstArgsBase<ExtArgs> {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Book_consulted findFirstOrThrow
   */
  export type Book_consultedFindFirstOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Book_consulted
     */
    select?: Book_consultedSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
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
    orderBy?: Enumerable<Book_consultedOrderByWithRelationInput>
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
    distinct?: Enumerable<Book_consultedScalarFieldEnum>
  }


  /**
   * Book_consulted findMany
   */
  export type Book_consultedFindManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Book_consulted
     */
    select?: Book_consultedSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
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
    orderBy?: Enumerable<Book_consultedOrderByWithRelationInput>
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
    distinct?: Enumerable<Book_consultedScalarFieldEnum>
  }


  /**
   * Book_consulted create
   */
  export type Book_consultedCreateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Book_consulted
     */
    select?: Book_consultedSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
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
  export type Book_consultedCreateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Book_consulteds.
     */
    data: Enumerable<Book_consultedCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Book_consulted update
   */
  export type Book_consultedUpdateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Book_consulted
     */
    select?: Book_consultedSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
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
  export type Book_consultedUpdateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Book_consulteds.
     */
    data: XOR<Book_consultedUpdateManyMutationInput, Book_consultedUncheckedUpdateManyInput>
    /**
     * Filter which Book_consulteds to update
     */
    where?: Book_consultedWhereInput
  }


  /**
   * Book_consulted upsert
   */
  export type Book_consultedUpsertArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Book_consulted
     */
    select?: Book_consultedSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
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
  export type Book_consultedDeleteArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Book_consulted
     */
    select?: Book_consultedSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
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
  export type Book_consultedDeleteManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which Book_consulteds to delete
     */
    where?: Book_consultedWhereInput
  }


  /**
   * Book_consulted without action
   */
  export type Book_consultedArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Book_consulted
     */
    select?: Book_consultedSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
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

  export type CirculationAggregateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which Circulation to aggregate.
     */
    where?: CirculationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Circulations to fetch.
     */
    orderBy?: Enumerable<CirculationOrderByWithRelationInput>
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




  export type CirculationGroupByArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: CirculationWhereInput
    orderBy?: Enumerable<CirculationOrderByWithAggregationInput>
    by: CirculationScalarFieldEnum[]
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
      PickArray<CirculationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CirculationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CirculationGroupByOutputType[P]>
            : GetScalarType<T[P], CirculationGroupByOutputType[P]>
        }
      >
    >


  export type CirculationSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    book_id?: boolean
    patron_id?: boolean
    checkout?: boolean
    date_due?: boolean
    book?: boolean | BookArgs<ExtArgs>
    patron?: boolean | PatronArgs<ExtArgs>
  }, ExtArgs["result"]["circulation"]>

  export type CirculationSelectScalar = {
    book_id?: boolean
    patron_id?: boolean
    checkout?: boolean
    date_due?: boolean
  }

  export type CirculationInclude<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    book?: boolean | BookArgs<ExtArgs>
    patron?: boolean | PatronArgs<ExtArgs>
  }


  type CirculationGetPayload<S extends boolean | null | undefined | CirculationArgs> = $Types.GetResult<CirculationPayload, S>

  type CirculationCountArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = 
    Omit<CirculationFindManyArgs, 'select' | 'include'> & {
      select?: CirculationCountAggregateInputType | true
    }

  export interface CirculationDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> {
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
    **/
    findUnique<T extends CirculationFindUniqueArgs<ExtArgs>, LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, CirculationFindUniqueArgs<ExtArgs>>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Circulation'> extends True ? Prisma__CirculationClient<$Types.GetResult<CirculationPayload<ExtArgs>, T, 'findUnique', never>, never, ExtArgs> : Prisma__CirculationClient<$Types.GetResult<CirculationPayload<ExtArgs>, T, 'findUnique', never> | null, null, ExtArgs>

    /**
     * Find one Circulation that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {CirculationFindUniqueOrThrowArgs} args - Arguments to find a Circulation
     * @example
     * // Get one Circulation
     * const circulation = await prisma.circulation.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends CirculationFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, CirculationFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__CirculationClient<$Types.GetResult<CirculationPayload<ExtArgs>, T, 'findUniqueOrThrow', never>, never, ExtArgs>

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
    **/
    findFirst<T extends CirculationFindFirstArgs<ExtArgs>, LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, CirculationFindFirstArgs<ExtArgs>>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Circulation'> extends True ? Prisma__CirculationClient<$Types.GetResult<CirculationPayload<ExtArgs>, T, 'findFirst', never>, never, ExtArgs> : Prisma__CirculationClient<$Types.GetResult<CirculationPayload<ExtArgs>, T, 'findFirst', never> | null, null, ExtArgs>

    /**
     * Find the first Circulation that matches the filter or
     * throw `NotFoundError` if no matches were found.
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
    **/
    findFirstOrThrow<T extends CirculationFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, CirculationFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__CirculationClient<$Types.GetResult<CirculationPayload<ExtArgs>, T, 'findFirstOrThrow', never>, never, ExtArgs>

    /**
     * Find zero or more Circulations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CirculationFindManyArgs=} args - Arguments to filter and select certain fields only.
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
    **/
    findMany<T extends CirculationFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, CirculationFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Types.GetResult<CirculationPayload<ExtArgs>, T, 'findMany', never>>

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
    **/
    create<T extends CirculationCreateArgs<ExtArgs>>(
      args: SelectSubset<T, CirculationCreateArgs<ExtArgs>>
    ): Prisma__CirculationClient<$Types.GetResult<CirculationPayload<ExtArgs>, T, 'create', never>, never, ExtArgs>

    /**
     * Create many Circulations.
     *     @param {CirculationCreateManyArgs} args - Arguments to create many Circulations.
     *     @example
     *     // Create many Circulations
     *     const circulation = await prisma.circulation.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends CirculationCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, CirculationCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

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
    **/
    delete<T extends CirculationDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, CirculationDeleteArgs<ExtArgs>>
    ): Prisma__CirculationClient<$Types.GetResult<CirculationPayload<ExtArgs>, T, 'delete', never>, never, ExtArgs>

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
    **/
    update<T extends CirculationUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, CirculationUpdateArgs<ExtArgs>>
    ): Prisma__CirculationClient<$Types.GetResult<CirculationPayload<ExtArgs>, T, 'update', never>, never, ExtArgs>

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
    **/
    deleteMany<T extends CirculationDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, CirculationDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

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
    **/
    updateMany<T extends CirculationUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, CirculationUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

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
    **/
    upsert<T extends CirculationUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, CirculationUpsertArgs<ExtArgs>>
    ): Prisma__CirculationClient<$Types.GetResult<CirculationPayload<ExtArgs>, T, 'upsert', never>, never, ExtArgs>

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
      ByFields extends TupleToUnion<T['by']>,
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

  }

  /**
   * The delegate class that acts as a "Promise-like" for Circulation.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__CirculationClient<T, Null = never, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    book<T extends BookArgs<ExtArgs> = {}>(args?: Subset<T, BookArgs<ExtArgs>>): Prisma__BookClient<$Types.GetResult<BookPayload<ExtArgs>, T, 'findUnique', never> | Null, never, ExtArgs>;

    patron<T extends PatronArgs<ExtArgs> = {}>(args?: Subset<T, PatronArgs<ExtArgs>>): Prisma__PatronClient<$Types.GetResult<PatronPayload<ExtArgs>, T, 'findUnique', never> | Null, never, ExtArgs>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * Circulation base type for findUnique actions
   */
  export type CirculationFindUniqueArgsBase<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Circulation
     */
    select?: CirculationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CirculationInclude<ExtArgs> | null
    /**
     * Filter, which Circulation to fetch.
     */
    where: CirculationWhereUniqueInput
  }

  /**
   * Circulation findUnique
   */
  export interface CirculationFindUniqueArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends CirculationFindUniqueArgsBase<ExtArgs> {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Circulation findUniqueOrThrow
   */
  export type CirculationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Circulation
     */
    select?: CirculationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CirculationInclude<ExtArgs> | null
    /**
     * Filter, which Circulation to fetch.
     */
    where: CirculationWhereUniqueInput
  }


  /**
   * Circulation base type for findFirst actions
   */
  export type CirculationFindFirstArgsBase<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Circulation
     */
    select?: CirculationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
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
    orderBy?: Enumerable<CirculationOrderByWithRelationInput>
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
    distinct?: Enumerable<CirculationScalarFieldEnum>
  }

  /**
   * Circulation findFirst
   */
  export interface CirculationFindFirstArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends CirculationFindFirstArgsBase<ExtArgs> {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Circulation findFirstOrThrow
   */
  export type CirculationFindFirstOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Circulation
     */
    select?: CirculationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
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
    orderBy?: Enumerable<CirculationOrderByWithRelationInput>
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
    distinct?: Enumerable<CirculationScalarFieldEnum>
  }


  /**
   * Circulation findMany
   */
  export type CirculationFindManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Circulation
     */
    select?: CirculationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
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
    orderBy?: Enumerable<CirculationOrderByWithRelationInput>
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
    distinct?: Enumerable<CirculationScalarFieldEnum>
  }


  /**
   * Circulation create
   */
  export type CirculationCreateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Circulation
     */
    select?: CirculationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
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
  export type CirculationCreateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Circulations.
     */
    data: Enumerable<CirculationCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Circulation update
   */
  export type CirculationUpdateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Circulation
     */
    select?: CirculationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
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
  export type CirculationUpdateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Circulations.
     */
    data: XOR<CirculationUpdateManyMutationInput, CirculationUncheckedUpdateManyInput>
    /**
     * Filter which Circulations to update
     */
    where?: CirculationWhereInput
  }


  /**
   * Circulation upsert
   */
  export type CirculationUpsertArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Circulation
     */
    select?: CirculationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
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
  export type CirculationDeleteArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Circulation
     */
    select?: CirculationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
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
  export type CirculationDeleteManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which Circulations to delete
     */
    where?: CirculationWhereInput
  }


  /**
   * Circulation without action
   */
  export type CirculationArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Circulation
     */
    select?: CirculationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
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
   * Deep Input Types
   */


  export type SessionWhereInput = {
    AND?: Enumerable<SessionWhereInput>
    OR?: Enumerable<SessionWhereInput>
    NOT?: Enumerable<SessionWhereInput>
    id?: StringFilter | string
    sid?: StringFilter | string
    data?: StringFilter | string
    expiresAt?: DateTimeFilter | Date | string
  }

  export type SessionOrderByWithRelationInput = {
    id?: SortOrder
    sid?: SortOrder
    data?: SortOrder
    expiresAt?: SortOrder
  }

  export type SessionWhereUniqueInput = {
    id?: string
    sid?: string
  }

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
    AND?: Enumerable<SessionScalarWhereWithAggregatesInput>
    OR?: Enumerable<SessionScalarWhereWithAggregatesInput>
    NOT?: Enumerable<SessionScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    sid?: StringWithAggregatesFilter | string
    data?: StringWithAggregatesFilter | string
    expiresAt?: DateTimeWithAggregatesFilter | Date | string
  }

  export type LibrarianWhereInput = {
    AND?: Enumerable<LibrarianWhereInput>
    OR?: Enumerable<LibrarianWhereInput>
    NOT?: Enumerable<LibrarianWhereInput>
    id?: StringFilter | string
    firstname?: StringFilter | string
    lastname?: StringFilter | string
    displayname?: StringFilter | string
    email?: StringFilter | string
    password?: StringFilter | string
    profile_img?: StringFilter | string
    address?: StringFilter | string
    contact?: StringFilter | string
    rank?: IntFilter | number
    books_entered?: StringNullableListFilter
    created_at?: DateTimeFilter | Date | string
    updated_at?: DateTimeFilter | Date | string
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

  export type LibrarianWhereUniqueInput = {
    id?: string
    email?: string
    contact?: string
    books_entered?: Enumerable<string>
  }

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
    AND?: Enumerable<LibrarianScalarWhereWithAggregatesInput>
    OR?: Enumerable<LibrarianScalarWhereWithAggregatesInput>
    NOT?: Enumerable<LibrarianScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    firstname?: StringWithAggregatesFilter | string
    lastname?: StringWithAggregatesFilter | string
    displayname?: StringWithAggregatesFilter | string
    email?: StringWithAggregatesFilter | string
    password?: StringWithAggregatesFilter | string
    profile_img?: StringWithAggregatesFilter | string
    address?: StringWithAggregatesFilter | string
    contact?: StringWithAggregatesFilter | string
    rank?: IntWithAggregatesFilter | number
    books_entered?: StringNullableListFilter
    created_at?: DateTimeWithAggregatesFilter | Date | string
    updated_at?: DateTimeWithAggregatesFilter | Date | string
  }

  export type BookWhereInput = {
    AND?: Enumerable<BookWhereInput>
    OR?: Enumerable<BookWhereInput>
    NOT?: Enumerable<BookWhereInput>
    id?: StringFilter | string
    title?: StringFilter | string
    author?: StringFilter | string
    subject?: StringNullableListFilter
    imprint?: StringFilter | string
    collation?: StringFilter | string
    G_M_D?: EnumGMDFilter | GMD
    book_cover?: StringFilter | string
    material_number?: StringFilter | string
    availability?: BoolFilter | boolean
    bibilography?: StringFilter | string
    Keywords?: StringNullableListFilter
    other_Title?: StringNullableFilter | string | null
    co_author?: StringNullableFilter | string | null
    editor?: StringNullableFilter | string | null
    edition?: StringNullableFilter | string | null
    series?: StringNullableFilter | string | null
    web_address?: StringNullableFilter | string | null
    entered_at?: DateTimeFilter | Date | string
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

  export type BookWhereUniqueInput = {
    id?: string
  }

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
    AND?: Enumerable<BookScalarWhereWithAggregatesInput>
    OR?: Enumerable<BookScalarWhereWithAggregatesInput>
    NOT?: Enumerable<BookScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    title?: StringWithAggregatesFilter | string
    author?: StringWithAggregatesFilter | string
    subject?: StringNullableListFilter
    imprint?: StringWithAggregatesFilter | string
    collation?: StringWithAggregatesFilter | string
    G_M_D?: EnumGMDWithAggregatesFilter | GMD
    book_cover?: StringWithAggregatesFilter | string
    material_number?: StringWithAggregatesFilter | string
    availability?: BoolWithAggregatesFilter | boolean
    bibilography?: StringWithAggregatesFilter | string
    Keywords?: StringNullableListFilter
    other_Title?: StringNullableWithAggregatesFilter | string | null
    co_author?: StringNullableWithAggregatesFilter | string | null
    editor?: StringNullableWithAggregatesFilter | string | null
    edition?: StringNullableWithAggregatesFilter | string | null
    series?: StringNullableWithAggregatesFilter | string | null
    web_address?: StringNullableWithAggregatesFilter | string | null
    entered_at?: DateTimeWithAggregatesFilter | Date | string
  }

  export type EmailVerificationTokenWhereInput = {
    AND?: Enumerable<EmailVerificationTokenWhereInput>
    OR?: Enumerable<EmailVerificationTokenWhereInput>
    NOT?: Enumerable<EmailVerificationTokenWhereInput>
    id?: StringFilter | string
    email?: StringFilter | string
    token?: StringFilter | string
    expiresAt?: DateTimeFilter | Date | string
    createdAt?: DateTimeFilter | Date | string
  }

  export type EmailVerificationTokenOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    token?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
  }

  export type EmailVerificationTokenWhereUniqueInput = {
    id?: string
    email?: string
  }

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
    AND?: Enumerable<EmailVerificationTokenScalarWhereWithAggregatesInput>
    OR?: Enumerable<EmailVerificationTokenScalarWhereWithAggregatesInput>
    NOT?: Enumerable<EmailVerificationTokenScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    email?: StringWithAggregatesFilter | string
    token?: StringWithAggregatesFilter | string
    expiresAt?: DateTimeWithAggregatesFilter | Date | string
    createdAt?: DateTimeWithAggregatesFilter | Date | string
  }

  export type PatronWhereInput = {
    AND?: Enumerable<PatronWhereInput>
    OR?: Enumerable<PatronWhereInput>
    NOT?: Enumerable<PatronWhereInput>
    id?: StringFilter | string
    google_Id?: StringNullableFilter | string | null
    firstname?: StringFilter | string
    lastname?: StringFilter | string
    displayname?: StringNullableFilter | string | null
    address?: StringNullableFilter | string | null
    email?: StringFilter | string
    password?: StringNullableFilter | string | null
    profile_img?: StringNullableFilter | string | null
    borrowed_books?: StringNullableListFilter
    isEmailVerified?: BoolFilter | boolean
    created_at?: DateTimeFilter | Date | string
    updated_at?: DateTimeFilter | Date | string
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

  export type PatronWhereUniqueInput = {
    id?: string
    google_Id?: string
    displayname?: string
    email?: string
    borrowed_books?: Enumerable<string>
  }

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
    AND?: Enumerable<PatronScalarWhereWithAggregatesInput>
    OR?: Enumerable<PatronScalarWhereWithAggregatesInput>
    NOT?: Enumerable<PatronScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    google_Id?: StringNullableWithAggregatesFilter | string | null
    firstname?: StringWithAggregatesFilter | string
    lastname?: StringWithAggregatesFilter | string
    displayname?: StringNullableWithAggregatesFilter | string | null
    address?: StringNullableWithAggregatesFilter | string | null
    email?: StringWithAggregatesFilter | string
    password?: StringNullableWithAggregatesFilter | string | null
    profile_img?: StringNullableWithAggregatesFilter | string | null
    borrowed_books?: StringNullableListFilter
    isEmailVerified?: BoolWithAggregatesFilter | boolean
    created_at?: DateTimeWithAggregatesFilter | Date | string
    updated_at?: DateTimeWithAggregatesFilter | Date | string
  }

  export type Book_likesWhereInput = {
    AND?: Enumerable<Book_likesWhereInput>
    OR?: Enumerable<Book_likesWhereInput>
    NOT?: Enumerable<Book_likesWhereInput>
    book_id?: StringFilter | string
    patron_id?: StringFilter | string
    liked_at?: DateTimeFilter | Date | string
    book?: XOR<BookRelationFilter, BookWhereInput>
    patron?: XOR<PatronRelationFilter, PatronWhereInput>
  }

  export type Book_likesOrderByWithRelationInput = {
    book_id?: SortOrder
    patron_id?: SortOrder
    liked_at?: SortOrder
    book?: BookOrderByWithRelationInput
    patron?: PatronOrderByWithRelationInput
  }

  export type Book_likesWhereUniqueInput = {
    book_id?: string
    patron_id?: string
  }

  export type Book_likesOrderByWithAggregationInput = {
    book_id?: SortOrder
    patron_id?: SortOrder
    liked_at?: SortOrder
    _count?: Book_likesCountOrderByAggregateInput
    _max?: Book_likesMaxOrderByAggregateInput
    _min?: Book_likesMinOrderByAggregateInput
  }

  export type Book_likesScalarWhereWithAggregatesInput = {
    AND?: Enumerable<Book_likesScalarWhereWithAggregatesInput>
    OR?: Enumerable<Book_likesScalarWhereWithAggregatesInput>
    NOT?: Enumerable<Book_likesScalarWhereWithAggregatesInput>
    book_id?: StringWithAggregatesFilter | string
    patron_id?: StringWithAggregatesFilter | string
    liked_at?: DateTimeWithAggregatesFilter | Date | string
  }

  export type Book_consultedWhereInput = {
    AND?: Enumerable<Book_consultedWhereInput>
    OR?: Enumerable<Book_consultedWhereInput>
    NOT?: Enumerable<Book_consultedWhereInput>
    book_id?: StringFilter | string
    patron_id?: StringFilter | string
    consulted_at?: DateTimeFilter | Date | string
    book?: XOR<BookRelationFilter, BookWhereInput>
    patron?: XOR<PatronRelationFilter, PatronWhereInput>
  }

  export type Book_consultedOrderByWithRelationInput = {
    book_id?: SortOrder
    patron_id?: SortOrder
    consulted_at?: SortOrder
    book?: BookOrderByWithRelationInput
    patron?: PatronOrderByWithRelationInput
  }

  export type Book_consultedWhereUniqueInput = {
    book_id?: string
    patron_id?: string
  }

  export type Book_consultedOrderByWithAggregationInput = {
    book_id?: SortOrder
    patron_id?: SortOrder
    consulted_at?: SortOrder
    _count?: Book_consultedCountOrderByAggregateInput
    _max?: Book_consultedMaxOrderByAggregateInput
    _min?: Book_consultedMinOrderByAggregateInput
  }

  export type Book_consultedScalarWhereWithAggregatesInput = {
    AND?: Enumerable<Book_consultedScalarWhereWithAggregatesInput>
    OR?: Enumerable<Book_consultedScalarWhereWithAggregatesInput>
    NOT?: Enumerable<Book_consultedScalarWhereWithAggregatesInput>
    book_id?: StringWithAggregatesFilter | string
    patron_id?: StringWithAggregatesFilter | string
    consulted_at?: DateTimeWithAggregatesFilter | Date | string
  }

  export type CirculationWhereInput = {
    AND?: Enumerable<CirculationWhereInput>
    OR?: Enumerable<CirculationWhereInput>
    NOT?: Enumerable<CirculationWhereInput>
    book_id?: StringFilter | string
    patron_id?: StringFilter | string
    checkout?: DateTimeFilter | Date | string
    date_due?: DateTimeFilter | Date | string
    book?: XOR<BookRelationFilter, BookWhereInput>
    patron?: XOR<PatronRelationFilter, PatronWhereInput>
  }

  export type CirculationOrderByWithRelationInput = {
    book_id?: SortOrder
    patron_id?: SortOrder
    checkout?: SortOrder
    date_due?: SortOrder
    book?: BookOrderByWithRelationInput
    patron?: PatronOrderByWithRelationInput
  }

  export type CirculationWhereUniqueInput = {
    book_id?: string
    patron_id?: string
  }

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
    AND?: Enumerable<CirculationScalarWhereWithAggregatesInput>
    OR?: Enumerable<CirculationScalarWhereWithAggregatesInput>
    NOT?: Enumerable<CirculationScalarWhereWithAggregatesInput>
    book_id?: StringWithAggregatesFilter | string
    patron_id?: StringWithAggregatesFilter | string
    checkout?: DateTimeWithAggregatesFilter | Date | string
    date_due?: DateTimeWithAggregatesFilter | Date | string
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
    books_entered?: LibrarianCreatebooks_enteredInput | Enumerable<string>
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
    books_entered?: LibrarianCreatebooks_enteredInput | Enumerable<string>
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
    books_entered?: LibrarianUpdatebooks_enteredInput | Enumerable<string>
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
    books_entered?: LibrarianUpdatebooks_enteredInput | Enumerable<string>
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
    books_entered?: LibrarianCreatebooks_enteredInput | Enumerable<string>
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
    books_entered?: LibrarianUpdatebooks_enteredInput | Enumerable<string>
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
    books_entered?: LibrarianUpdatebooks_enteredInput | Enumerable<string>
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BookCreateInput = {
    id?: string
    title: string
    author: string
    subject?: BookCreatesubjectInput | Enumerable<string>
    imprint: string
    collation: string
    G_M_D: GMD
    book_cover: string
    material_number: string
    availability: boolean
    bibilography: string
    Keywords?: BookCreateKeywordsInput | Enumerable<string>
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
    subject?: BookCreatesubjectInput | Enumerable<string>
    imprint: string
    collation: string
    G_M_D: GMD
    book_cover: string
    material_number: string
    availability: boolean
    bibilography: string
    Keywords?: BookCreateKeywordsInput | Enumerable<string>
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
    subject?: BookUpdatesubjectInput | Enumerable<string>
    imprint?: StringFieldUpdateOperationsInput | string
    collation?: StringFieldUpdateOperationsInput | string
    G_M_D?: EnumGMDFieldUpdateOperationsInput | GMD
    book_cover?: StringFieldUpdateOperationsInput | string
    material_number?: StringFieldUpdateOperationsInput | string
    availability?: BoolFieldUpdateOperationsInput | boolean
    bibilography?: StringFieldUpdateOperationsInput | string
    Keywords?: BookUpdateKeywordsInput | Enumerable<string>
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
    subject?: BookUpdatesubjectInput | Enumerable<string>
    imprint?: StringFieldUpdateOperationsInput | string
    collation?: StringFieldUpdateOperationsInput | string
    G_M_D?: EnumGMDFieldUpdateOperationsInput | GMD
    book_cover?: StringFieldUpdateOperationsInput | string
    material_number?: StringFieldUpdateOperationsInput | string
    availability?: BoolFieldUpdateOperationsInput | boolean
    bibilography?: StringFieldUpdateOperationsInput | string
    Keywords?: BookUpdateKeywordsInput | Enumerable<string>
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
    subject?: BookCreatesubjectInput | Enumerable<string>
    imprint: string
    collation: string
    G_M_D: GMD
    book_cover: string
    material_number: string
    availability: boolean
    bibilography: string
    Keywords?: BookCreateKeywordsInput | Enumerable<string>
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
    subject?: BookUpdatesubjectInput | Enumerable<string>
    imprint?: StringFieldUpdateOperationsInput | string
    collation?: StringFieldUpdateOperationsInput | string
    G_M_D?: EnumGMDFieldUpdateOperationsInput | GMD
    book_cover?: StringFieldUpdateOperationsInput | string
    material_number?: StringFieldUpdateOperationsInput | string
    availability?: BoolFieldUpdateOperationsInput | boolean
    bibilography?: StringFieldUpdateOperationsInput | string
    Keywords?: BookUpdateKeywordsInput | Enumerable<string>
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
    subject?: BookUpdatesubjectInput | Enumerable<string>
    imprint?: StringFieldUpdateOperationsInput | string
    collation?: StringFieldUpdateOperationsInput | string
    G_M_D?: EnumGMDFieldUpdateOperationsInput | GMD
    book_cover?: StringFieldUpdateOperationsInput | string
    material_number?: StringFieldUpdateOperationsInput | string
    availability?: BoolFieldUpdateOperationsInput | boolean
    bibilography?: StringFieldUpdateOperationsInput | string
    Keywords?: BookUpdateKeywordsInput | Enumerable<string>
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
    borrowed_books?: PatronCreateborrowed_booksInput | Enumerable<string>
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
    borrowed_books?: PatronCreateborrowed_booksInput | Enumerable<string>
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
    borrowed_books?: PatronUpdateborrowed_booksInput | Enumerable<string>
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
    borrowed_books?: PatronUpdateborrowed_booksInput | Enumerable<string>
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
    borrowed_books?: PatronCreateborrowed_booksInput | Enumerable<string>
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
    borrowed_books?: PatronUpdateborrowed_booksInput | Enumerable<string>
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
    borrowed_books?: PatronUpdateborrowed_booksInput | Enumerable<string>
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

  export type StringFilter = {
    equals?: string
    in?: Enumerable<string> | string
    notIn?: Enumerable<string> | string
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    mode?: QueryMode
    not?: NestedStringFilter | string
  }

  export type DateTimeFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string> | Date | string
    notIn?: Enumerable<Date> | Enumerable<string> | Date | string
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeFilter | Date | string
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

  export type StringWithAggregatesFilter = {
    equals?: string
    in?: Enumerable<string> | string
    notIn?: Enumerable<string> | string
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter | string
    _count?: NestedIntFilter
    _min?: NestedStringFilter
    _max?: NestedStringFilter
  }

  export type DateTimeWithAggregatesFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string> | Date | string
    notIn?: Enumerable<Date> | Enumerable<string> | Date | string
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeWithAggregatesFilter | Date | string
    _count?: NestedIntFilter
    _min?: NestedDateTimeFilter
    _max?: NestedDateTimeFilter
  }

  export type IntFilter = {
    equals?: number
    in?: Enumerable<number> | number
    notIn?: Enumerable<number> | number
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntFilter | number
  }

  export type StringNullableListFilter = {
    equals?: Enumerable<string> | null
    has?: string | null
    hasEvery?: Enumerable<string>
    hasSome?: Enumerable<string>
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

  export type IntWithAggregatesFilter = {
    equals?: number
    in?: Enumerable<number> | number
    notIn?: Enumerable<number> | number
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntWithAggregatesFilter | number
    _count?: NestedIntFilter
    _avg?: NestedFloatFilter
    _sum?: NestedIntFilter
    _min?: NestedIntFilter
    _max?: NestedIntFilter
  }

  export type EnumGMDFilter = {
    equals?: GMD
    in?: Enumerable<GMD>
    notIn?: Enumerable<GMD>
    not?: NestedEnumGMDFilter | GMD
  }

  export type BoolFilter = {
    equals?: boolean
    not?: NestedBoolFilter | boolean
  }

  export type StringNullableFilter = {
    equals?: string | null
    in?: Enumerable<string> | string | null
    notIn?: Enumerable<string> | string | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    mode?: QueryMode
    not?: NestedStringNullableFilter | string | null
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

  export type EnumGMDWithAggregatesFilter = {
    equals?: GMD
    in?: Enumerable<GMD>
    notIn?: Enumerable<GMD>
    not?: NestedEnumGMDWithAggregatesFilter | GMD
    _count?: NestedIntFilter
    _min?: NestedEnumGMDFilter
    _max?: NestedEnumGMDFilter
  }

  export type BoolWithAggregatesFilter = {
    equals?: boolean
    not?: NestedBoolWithAggregatesFilter | boolean
    _count?: NestedIntFilter
    _min?: NestedBoolFilter
    _max?: NestedBoolFilter
  }

  export type StringNullableWithAggregatesFilter = {
    equals?: string | null
    in?: Enumerable<string> | string | null
    notIn?: Enumerable<string> | string | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter | string | null
    _count?: NestedIntNullableFilter
    _min?: NestedStringNullableFilter
    _max?: NestedStringNullableFilter
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

  export type BookRelationFilter = {
    is?: BookWhereInput | null
    isNot?: BookWhereInput | null
  }

  export type PatronRelationFilter = {
    is?: PatronWhereInput | null
    isNot?: PatronWhereInput | null
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
    set: Enumerable<string>
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type LibrarianUpdatebooks_enteredInput = {
    set?: Enumerable<string>
    push?: string | Enumerable<string>
  }

  export type BookCreatesubjectInput = {
    set: Enumerable<string>
  }

  export type BookCreateKeywordsInput = {
    set: Enumerable<string>
  }

  export type Book_likesCreateNestedManyWithoutBookInput = {
    create?: XOR<Enumerable<Book_likesCreateWithoutBookInput>, Enumerable<Book_likesUncheckedCreateWithoutBookInput>>
    connectOrCreate?: Enumerable<Book_likesCreateOrConnectWithoutBookInput>
    createMany?: Book_likesCreateManyBookInputEnvelope
    connect?: Enumerable<Book_likesWhereUniqueInput>
  }

  export type Book_consultedCreateNestedManyWithoutBookInput = {
    create?: XOR<Enumerable<Book_consultedCreateWithoutBookInput>, Enumerable<Book_consultedUncheckedCreateWithoutBookInput>>
    connectOrCreate?: Enumerable<Book_consultedCreateOrConnectWithoutBookInput>
    createMany?: Book_consultedCreateManyBookInputEnvelope
    connect?: Enumerable<Book_consultedWhereUniqueInput>
  }

  export type CirculationCreateNestedManyWithoutBookInput = {
    create?: XOR<Enumerable<CirculationCreateWithoutBookInput>, Enumerable<CirculationUncheckedCreateWithoutBookInput>>
    connectOrCreate?: Enumerable<CirculationCreateOrConnectWithoutBookInput>
    createMany?: CirculationCreateManyBookInputEnvelope
    connect?: Enumerable<CirculationWhereUniqueInput>
  }

  export type Book_likesUncheckedCreateNestedManyWithoutBookInput = {
    create?: XOR<Enumerable<Book_likesCreateWithoutBookInput>, Enumerable<Book_likesUncheckedCreateWithoutBookInput>>
    connectOrCreate?: Enumerable<Book_likesCreateOrConnectWithoutBookInput>
    createMany?: Book_likesCreateManyBookInputEnvelope
    connect?: Enumerable<Book_likesWhereUniqueInput>
  }

  export type Book_consultedUncheckedCreateNestedManyWithoutBookInput = {
    create?: XOR<Enumerable<Book_consultedCreateWithoutBookInput>, Enumerable<Book_consultedUncheckedCreateWithoutBookInput>>
    connectOrCreate?: Enumerable<Book_consultedCreateOrConnectWithoutBookInput>
    createMany?: Book_consultedCreateManyBookInputEnvelope
    connect?: Enumerable<Book_consultedWhereUniqueInput>
  }

  export type CirculationUncheckedCreateNestedManyWithoutBookInput = {
    create?: XOR<Enumerable<CirculationCreateWithoutBookInput>, Enumerable<CirculationUncheckedCreateWithoutBookInput>>
    connectOrCreate?: Enumerable<CirculationCreateOrConnectWithoutBookInput>
    createMany?: CirculationCreateManyBookInputEnvelope
    connect?: Enumerable<CirculationWhereUniqueInput>
  }

  export type BookUpdatesubjectInput = {
    set?: Enumerable<string>
    push?: string | Enumerable<string>
  }

  export type EnumGMDFieldUpdateOperationsInput = {
    set?: GMD
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type BookUpdateKeywordsInput = {
    set?: Enumerable<string>
    push?: string | Enumerable<string>
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type Book_likesUpdateManyWithoutBookNestedInput = {
    create?: XOR<Enumerable<Book_likesCreateWithoutBookInput>, Enumerable<Book_likesUncheckedCreateWithoutBookInput>>
    connectOrCreate?: Enumerable<Book_likesCreateOrConnectWithoutBookInput>
    upsert?: Enumerable<Book_likesUpsertWithWhereUniqueWithoutBookInput>
    createMany?: Book_likesCreateManyBookInputEnvelope
    set?: Enumerable<Book_likesWhereUniqueInput>
    disconnect?: Enumerable<Book_likesWhereUniqueInput>
    delete?: Enumerable<Book_likesWhereUniqueInput>
    connect?: Enumerable<Book_likesWhereUniqueInput>
    update?: Enumerable<Book_likesUpdateWithWhereUniqueWithoutBookInput>
    updateMany?: Enumerable<Book_likesUpdateManyWithWhereWithoutBookInput>
    deleteMany?: Enumerable<Book_likesScalarWhereInput>
  }

  export type Book_consultedUpdateManyWithoutBookNestedInput = {
    create?: XOR<Enumerable<Book_consultedCreateWithoutBookInput>, Enumerable<Book_consultedUncheckedCreateWithoutBookInput>>
    connectOrCreate?: Enumerable<Book_consultedCreateOrConnectWithoutBookInput>
    upsert?: Enumerable<Book_consultedUpsertWithWhereUniqueWithoutBookInput>
    createMany?: Book_consultedCreateManyBookInputEnvelope
    set?: Enumerable<Book_consultedWhereUniqueInput>
    disconnect?: Enumerable<Book_consultedWhereUniqueInput>
    delete?: Enumerable<Book_consultedWhereUniqueInput>
    connect?: Enumerable<Book_consultedWhereUniqueInput>
    update?: Enumerable<Book_consultedUpdateWithWhereUniqueWithoutBookInput>
    updateMany?: Enumerable<Book_consultedUpdateManyWithWhereWithoutBookInput>
    deleteMany?: Enumerable<Book_consultedScalarWhereInput>
  }

  export type CirculationUpdateManyWithoutBookNestedInput = {
    create?: XOR<Enumerable<CirculationCreateWithoutBookInput>, Enumerable<CirculationUncheckedCreateWithoutBookInput>>
    connectOrCreate?: Enumerable<CirculationCreateOrConnectWithoutBookInput>
    upsert?: Enumerable<CirculationUpsertWithWhereUniqueWithoutBookInput>
    createMany?: CirculationCreateManyBookInputEnvelope
    set?: Enumerable<CirculationWhereUniqueInput>
    disconnect?: Enumerable<CirculationWhereUniqueInput>
    delete?: Enumerable<CirculationWhereUniqueInput>
    connect?: Enumerable<CirculationWhereUniqueInput>
    update?: Enumerable<CirculationUpdateWithWhereUniqueWithoutBookInput>
    updateMany?: Enumerable<CirculationUpdateManyWithWhereWithoutBookInput>
    deleteMany?: Enumerable<CirculationScalarWhereInput>
  }

  export type Book_likesUncheckedUpdateManyWithoutBookNestedInput = {
    create?: XOR<Enumerable<Book_likesCreateWithoutBookInput>, Enumerable<Book_likesUncheckedCreateWithoutBookInput>>
    connectOrCreate?: Enumerable<Book_likesCreateOrConnectWithoutBookInput>
    upsert?: Enumerable<Book_likesUpsertWithWhereUniqueWithoutBookInput>
    createMany?: Book_likesCreateManyBookInputEnvelope
    set?: Enumerable<Book_likesWhereUniqueInput>
    disconnect?: Enumerable<Book_likesWhereUniqueInput>
    delete?: Enumerable<Book_likesWhereUniqueInput>
    connect?: Enumerable<Book_likesWhereUniqueInput>
    update?: Enumerable<Book_likesUpdateWithWhereUniqueWithoutBookInput>
    updateMany?: Enumerable<Book_likesUpdateManyWithWhereWithoutBookInput>
    deleteMany?: Enumerable<Book_likesScalarWhereInput>
  }

  export type Book_consultedUncheckedUpdateManyWithoutBookNestedInput = {
    create?: XOR<Enumerable<Book_consultedCreateWithoutBookInput>, Enumerable<Book_consultedUncheckedCreateWithoutBookInput>>
    connectOrCreate?: Enumerable<Book_consultedCreateOrConnectWithoutBookInput>
    upsert?: Enumerable<Book_consultedUpsertWithWhereUniqueWithoutBookInput>
    createMany?: Book_consultedCreateManyBookInputEnvelope
    set?: Enumerable<Book_consultedWhereUniqueInput>
    disconnect?: Enumerable<Book_consultedWhereUniqueInput>
    delete?: Enumerable<Book_consultedWhereUniqueInput>
    connect?: Enumerable<Book_consultedWhereUniqueInput>
    update?: Enumerable<Book_consultedUpdateWithWhereUniqueWithoutBookInput>
    updateMany?: Enumerable<Book_consultedUpdateManyWithWhereWithoutBookInput>
    deleteMany?: Enumerable<Book_consultedScalarWhereInput>
  }

  export type CirculationUncheckedUpdateManyWithoutBookNestedInput = {
    create?: XOR<Enumerable<CirculationCreateWithoutBookInput>, Enumerable<CirculationUncheckedCreateWithoutBookInput>>
    connectOrCreate?: Enumerable<CirculationCreateOrConnectWithoutBookInput>
    upsert?: Enumerable<CirculationUpsertWithWhereUniqueWithoutBookInput>
    createMany?: CirculationCreateManyBookInputEnvelope
    set?: Enumerable<CirculationWhereUniqueInput>
    disconnect?: Enumerable<CirculationWhereUniqueInput>
    delete?: Enumerable<CirculationWhereUniqueInput>
    connect?: Enumerable<CirculationWhereUniqueInput>
    update?: Enumerable<CirculationUpdateWithWhereUniqueWithoutBookInput>
    updateMany?: Enumerable<CirculationUpdateManyWithWhereWithoutBookInput>
    deleteMany?: Enumerable<CirculationScalarWhereInput>
  }

  export type PatronCreateborrowed_booksInput = {
    set: Enumerable<string>
  }

  export type Book_likesCreateNestedManyWithoutPatronInput = {
    create?: XOR<Enumerable<Book_likesCreateWithoutPatronInput>, Enumerable<Book_likesUncheckedCreateWithoutPatronInput>>
    connectOrCreate?: Enumerable<Book_likesCreateOrConnectWithoutPatronInput>
    createMany?: Book_likesCreateManyPatronInputEnvelope
    connect?: Enumerable<Book_likesWhereUniqueInput>
  }

  export type Book_consultedCreateNestedManyWithoutPatronInput = {
    create?: XOR<Enumerable<Book_consultedCreateWithoutPatronInput>, Enumerable<Book_consultedUncheckedCreateWithoutPatronInput>>
    connectOrCreate?: Enumerable<Book_consultedCreateOrConnectWithoutPatronInput>
    createMany?: Book_consultedCreateManyPatronInputEnvelope
    connect?: Enumerable<Book_consultedWhereUniqueInput>
  }

  export type CirculationCreateNestedManyWithoutPatronInput = {
    create?: XOR<Enumerable<CirculationCreateWithoutPatronInput>, Enumerable<CirculationUncheckedCreateWithoutPatronInput>>
    connectOrCreate?: Enumerable<CirculationCreateOrConnectWithoutPatronInput>
    createMany?: CirculationCreateManyPatronInputEnvelope
    connect?: Enumerable<CirculationWhereUniqueInput>
  }

  export type Book_likesUncheckedCreateNestedManyWithoutPatronInput = {
    create?: XOR<Enumerable<Book_likesCreateWithoutPatronInput>, Enumerable<Book_likesUncheckedCreateWithoutPatronInput>>
    connectOrCreate?: Enumerable<Book_likesCreateOrConnectWithoutPatronInput>
    createMany?: Book_likesCreateManyPatronInputEnvelope
    connect?: Enumerable<Book_likesWhereUniqueInput>
  }

  export type Book_consultedUncheckedCreateNestedManyWithoutPatronInput = {
    create?: XOR<Enumerable<Book_consultedCreateWithoutPatronInput>, Enumerable<Book_consultedUncheckedCreateWithoutPatronInput>>
    connectOrCreate?: Enumerable<Book_consultedCreateOrConnectWithoutPatronInput>
    createMany?: Book_consultedCreateManyPatronInputEnvelope
    connect?: Enumerable<Book_consultedWhereUniqueInput>
  }

  export type CirculationUncheckedCreateNestedManyWithoutPatronInput = {
    create?: XOR<Enumerable<CirculationCreateWithoutPatronInput>, Enumerable<CirculationUncheckedCreateWithoutPatronInput>>
    connectOrCreate?: Enumerable<CirculationCreateOrConnectWithoutPatronInput>
    createMany?: CirculationCreateManyPatronInputEnvelope
    connect?: Enumerable<CirculationWhereUniqueInput>
  }

  export type PatronUpdateborrowed_booksInput = {
    set?: Enumerable<string>
    push?: string | Enumerable<string>
  }

  export type Book_likesUpdateManyWithoutPatronNestedInput = {
    create?: XOR<Enumerable<Book_likesCreateWithoutPatronInput>, Enumerable<Book_likesUncheckedCreateWithoutPatronInput>>
    connectOrCreate?: Enumerable<Book_likesCreateOrConnectWithoutPatronInput>
    upsert?: Enumerable<Book_likesUpsertWithWhereUniqueWithoutPatronInput>
    createMany?: Book_likesCreateManyPatronInputEnvelope
    set?: Enumerable<Book_likesWhereUniqueInput>
    disconnect?: Enumerable<Book_likesWhereUniqueInput>
    delete?: Enumerable<Book_likesWhereUniqueInput>
    connect?: Enumerable<Book_likesWhereUniqueInput>
    update?: Enumerable<Book_likesUpdateWithWhereUniqueWithoutPatronInput>
    updateMany?: Enumerable<Book_likesUpdateManyWithWhereWithoutPatronInput>
    deleteMany?: Enumerable<Book_likesScalarWhereInput>
  }

  export type Book_consultedUpdateManyWithoutPatronNestedInput = {
    create?: XOR<Enumerable<Book_consultedCreateWithoutPatronInput>, Enumerable<Book_consultedUncheckedCreateWithoutPatronInput>>
    connectOrCreate?: Enumerable<Book_consultedCreateOrConnectWithoutPatronInput>
    upsert?: Enumerable<Book_consultedUpsertWithWhereUniqueWithoutPatronInput>
    createMany?: Book_consultedCreateManyPatronInputEnvelope
    set?: Enumerable<Book_consultedWhereUniqueInput>
    disconnect?: Enumerable<Book_consultedWhereUniqueInput>
    delete?: Enumerable<Book_consultedWhereUniqueInput>
    connect?: Enumerable<Book_consultedWhereUniqueInput>
    update?: Enumerable<Book_consultedUpdateWithWhereUniqueWithoutPatronInput>
    updateMany?: Enumerable<Book_consultedUpdateManyWithWhereWithoutPatronInput>
    deleteMany?: Enumerable<Book_consultedScalarWhereInput>
  }

  export type CirculationUpdateManyWithoutPatronNestedInput = {
    create?: XOR<Enumerable<CirculationCreateWithoutPatronInput>, Enumerable<CirculationUncheckedCreateWithoutPatronInput>>
    connectOrCreate?: Enumerable<CirculationCreateOrConnectWithoutPatronInput>
    upsert?: Enumerable<CirculationUpsertWithWhereUniqueWithoutPatronInput>
    createMany?: CirculationCreateManyPatronInputEnvelope
    set?: Enumerable<CirculationWhereUniqueInput>
    disconnect?: Enumerable<CirculationWhereUniqueInput>
    delete?: Enumerable<CirculationWhereUniqueInput>
    connect?: Enumerable<CirculationWhereUniqueInput>
    update?: Enumerable<CirculationUpdateWithWhereUniqueWithoutPatronInput>
    updateMany?: Enumerable<CirculationUpdateManyWithWhereWithoutPatronInput>
    deleteMany?: Enumerable<CirculationScalarWhereInput>
  }

  export type Book_likesUncheckedUpdateManyWithoutPatronNestedInput = {
    create?: XOR<Enumerable<Book_likesCreateWithoutPatronInput>, Enumerable<Book_likesUncheckedCreateWithoutPatronInput>>
    connectOrCreate?: Enumerable<Book_likesCreateOrConnectWithoutPatronInput>
    upsert?: Enumerable<Book_likesUpsertWithWhereUniqueWithoutPatronInput>
    createMany?: Book_likesCreateManyPatronInputEnvelope
    set?: Enumerable<Book_likesWhereUniqueInput>
    disconnect?: Enumerable<Book_likesWhereUniqueInput>
    delete?: Enumerable<Book_likesWhereUniqueInput>
    connect?: Enumerable<Book_likesWhereUniqueInput>
    update?: Enumerable<Book_likesUpdateWithWhereUniqueWithoutPatronInput>
    updateMany?: Enumerable<Book_likesUpdateManyWithWhereWithoutPatronInput>
    deleteMany?: Enumerable<Book_likesScalarWhereInput>
  }

  export type Book_consultedUncheckedUpdateManyWithoutPatronNestedInput = {
    create?: XOR<Enumerable<Book_consultedCreateWithoutPatronInput>, Enumerable<Book_consultedUncheckedCreateWithoutPatronInput>>
    connectOrCreate?: Enumerable<Book_consultedCreateOrConnectWithoutPatronInput>
    upsert?: Enumerable<Book_consultedUpsertWithWhereUniqueWithoutPatronInput>
    createMany?: Book_consultedCreateManyPatronInputEnvelope
    set?: Enumerable<Book_consultedWhereUniqueInput>
    disconnect?: Enumerable<Book_consultedWhereUniqueInput>
    delete?: Enumerable<Book_consultedWhereUniqueInput>
    connect?: Enumerable<Book_consultedWhereUniqueInput>
    update?: Enumerable<Book_consultedUpdateWithWhereUniqueWithoutPatronInput>
    updateMany?: Enumerable<Book_consultedUpdateManyWithWhereWithoutPatronInput>
    deleteMany?: Enumerable<Book_consultedScalarWhereInput>
  }

  export type CirculationUncheckedUpdateManyWithoutPatronNestedInput = {
    create?: XOR<Enumerable<CirculationCreateWithoutPatronInput>, Enumerable<CirculationUncheckedCreateWithoutPatronInput>>
    connectOrCreate?: Enumerable<CirculationCreateOrConnectWithoutPatronInput>
    upsert?: Enumerable<CirculationUpsertWithWhereUniqueWithoutPatronInput>
    createMany?: CirculationCreateManyPatronInputEnvelope
    set?: Enumerable<CirculationWhereUniqueInput>
    disconnect?: Enumerable<CirculationWhereUniqueInput>
    delete?: Enumerable<CirculationWhereUniqueInput>
    connect?: Enumerable<CirculationWhereUniqueInput>
    update?: Enumerable<CirculationUpdateWithWhereUniqueWithoutPatronInput>
    updateMany?: Enumerable<CirculationUpdateManyWithWhereWithoutPatronInput>
    deleteMany?: Enumerable<CirculationScalarWhereInput>
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
    update?: XOR<BookUpdateWithoutBook_likesInput, BookUncheckedUpdateWithoutBook_likesInput>
  }

  export type PatronUpdateOneRequiredWithoutBook_likesNestedInput = {
    create?: XOR<PatronCreateWithoutBook_likesInput, PatronUncheckedCreateWithoutBook_likesInput>
    connectOrCreate?: PatronCreateOrConnectWithoutBook_likesInput
    upsert?: PatronUpsertWithoutBook_likesInput
    connect?: PatronWhereUniqueInput
    update?: XOR<PatronUpdateWithoutBook_likesInput, PatronUncheckedUpdateWithoutBook_likesInput>
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
    update?: XOR<BookUpdateWithoutBook_consultedInput, BookUncheckedUpdateWithoutBook_consultedInput>
  }

  export type PatronUpdateOneRequiredWithoutBook_consultedNestedInput = {
    create?: XOR<PatronCreateWithoutBook_consultedInput, PatronUncheckedCreateWithoutBook_consultedInput>
    connectOrCreate?: PatronCreateOrConnectWithoutBook_consultedInput
    upsert?: PatronUpsertWithoutBook_consultedInput
    connect?: PatronWhereUniqueInput
    update?: XOR<PatronUpdateWithoutBook_consultedInput, PatronUncheckedUpdateWithoutBook_consultedInput>
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
    update?: XOR<BookUpdateWithoutCirculationInput, BookUncheckedUpdateWithoutCirculationInput>
  }

  export type PatronUpdateOneRequiredWithoutCirculationNestedInput = {
    create?: XOR<PatronCreateWithoutCirculationInput, PatronUncheckedCreateWithoutCirculationInput>
    connectOrCreate?: PatronCreateOrConnectWithoutCirculationInput
    upsert?: PatronUpsertWithoutCirculationInput
    connect?: PatronWhereUniqueInput
    update?: XOR<PatronUpdateWithoutCirculationInput, PatronUncheckedUpdateWithoutCirculationInput>
  }

  export type NestedStringFilter = {
    equals?: string
    in?: Enumerable<string> | string
    notIn?: Enumerable<string> | string
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringFilter | string
  }

  export type NestedDateTimeFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string> | Date | string
    notIn?: Enumerable<Date> | Enumerable<string> | Date | string
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeFilter | Date | string
  }

  export type NestedStringWithAggregatesFilter = {
    equals?: string
    in?: Enumerable<string> | string
    notIn?: Enumerable<string> | string
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringWithAggregatesFilter | string
    _count?: NestedIntFilter
    _min?: NestedStringFilter
    _max?: NestedStringFilter
  }

  export type NestedIntFilter = {
    equals?: number
    in?: Enumerable<number> | number
    notIn?: Enumerable<number> | number
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntFilter | number
  }

  export type NestedDateTimeWithAggregatesFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string> | Date | string
    notIn?: Enumerable<Date> | Enumerable<string> | Date | string
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeWithAggregatesFilter | Date | string
    _count?: NestedIntFilter
    _min?: NestedDateTimeFilter
    _max?: NestedDateTimeFilter
  }

  export type NestedIntWithAggregatesFilter = {
    equals?: number
    in?: Enumerable<number> | number
    notIn?: Enumerable<number> | number
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntWithAggregatesFilter | number
    _count?: NestedIntFilter
    _avg?: NestedFloatFilter
    _sum?: NestedIntFilter
    _min?: NestedIntFilter
    _max?: NestedIntFilter
  }

  export type NestedFloatFilter = {
    equals?: number
    in?: Enumerable<number> | number
    notIn?: Enumerable<number> | number
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedFloatFilter | number
  }

  export type NestedEnumGMDFilter = {
    equals?: GMD
    in?: Enumerable<GMD>
    notIn?: Enumerable<GMD>
    not?: NestedEnumGMDFilter | GMD
  }

  export type NestedBoolFilter = {
    equals?: boolean
    not?: NestedBoolFilter | boolean
  }

  export type NestedStringNullableFilter = {
    equals?: string | null
    in?: Enumerable<string> | string | null
    notIn?: Enumerable<string> | string | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringNullableFilter | string | null
  }

  export type NestedEnumGMDWithAggregatesFilter = {
    equals?: GMD
    in?: Enumerable<GMD>
    notIn?: Enumerable<GMD>
    not?: NestedEnumGMDWithAggregatesFilter | GMD
    _count?: NestedIntFilter
    _min?: NestedEnumGMDFilter
    _max?: NestedEnumGMDFilter
  }

  export type NestedBoolWithAggregatesFilter = {
    equals?: boolean
    not?: NestedBoolWithAggregatesFilter | boolean
    _count?: NestedIntFilter
    _min?: NestedBoolFilter
    _max?: NestedBoolFilter
  }

  export type NestedStringNullableWithAggregatesFilter = {
    equals?: string | null
    in?: Enumerable<string> | string | null
    notIn?: Enumerable<string> | string | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringNullableWithAggregatesFilter | string | null
    _count?: NestedIntNullableFilter
    _min?: NestedStringNullableFilter
    _max?: NestedStringNullableFilter
  }

  export type NestedIntNullableFilter = {
    equals?: number | null
    in?: Enumerable<number> | number | null
    notIn?: Enumerable<number> | number | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntNullableFilter | number | null
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
    data: Enumerable<Book_likesCreateManyBookInput>
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
    data: Enumerable<Book_consultedCreateManyBookInput>
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
    data: Enumerable<CirculationCreateManyBookInput>
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
    data: XOR<Book_likesUpdateManyMutationInput, Book_likesUncheckedUpdateManyWithoutBook_likesInput>
  }

  export type Book_likesScalarWhereInput = {
    AND?: Enumerable<Book_likesScalarWhereInput>
    OR?: Enumerable<Book_likesScalarWhereInput>
    NOT?: Enumerable<Book_likesScalarWhereInput>
    book_id?: StringFilter | string
    patron_id?: StringFilter | string
    liked_at?: DateTimeFilter | Date | string
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
    data: XOR<Book_consultedUpdateManyMutationInput, Book_consultedUncheckedUpdateManyWithoutBook_consultedInput>
  }

  export type Book_consultedScalarWhereInput = {
    AND?: Enumerable<Book_consultedScalarWhereInput>
    OR?: Enumerable<Book_consultedScalarWhereInput>
    NOT?: Enumerable<Book_consultedScalarWhereInput>
    book_id?: StringFilter | string
    patron_id?: StringFilter | string
    consulted_at?: DateTimeFilter | Date | string
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
    data: XOR<CirculationUpdateManyMutationInput, CirculationUncheckedUpdateManyWithoutCirculationInput>
  }

  export type CirculationScalarWhereInput = {
    AND?: Enumerable<CirculationScalarWhereInput>
    OR?: Enumerable<CirculationScalarWhereInput>
    NOT?: Enumerable<CirculationScalarWhereInput>
    book_id?: StringFilter | string
    patron_id?: StringFilter | string
    checkout?: DateTimeFilter | Date | string
    date_due?: DateTimeFilter | Date | string
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
    data: Enumerable<Book_likesCreateManyPatronInput>
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
    data: Enumerable<Book_consultedCreateManyPatronInput>
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
    data: Enumerable<CirculationCreateManyPatronInput>
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
    data: XOR<Book_likesUpdateManyMutationInput, Book_likesUncheckedUpdateManyWithoutBook_likesInput>
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
    data: XOR<Book_consultedUpdateManyMutationInput, Book_consultedUncheckedUpdateManyWithoutBook_consultedInput>
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
    data: XOR<CirculationUpdateManyMutationInput, CirculationUncheckedUpdateManyWithoutCirculationInput>
  }

  export type BookCreateWithoutBook_likesInput = {
    id?: string
    title: string
    author: string
    subject?: BookCreatesubjectInput | Enumerable<string>
    imprint: string
    collation: string
    G_M_D: GMD
    book_cover: string
    material_number: string
    availability: boolean
    bibilography: string
    Keywords?: BookCreateKeywordsInput | Enumerable<string>
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
    subject?: BookCreatesubjectInput | Enumerable<string>
    imprint: string
    collation: string
    G_M_D: GMD
    book_cover: string
    material_number: string
    availability: boolean
    bibilography: string
    Keywords?: BookCreateKeywordsInput | Enumerable<string>
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
    borrowed_books?: PatronCreateborrowed_booksInput | Enumerable<string>
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
    borrowed_books?: PatronCreateborrowed_booksInput | Enumerable<string>
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
  }

  export type BookUpdateWithoutBook_likesInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    author?: StringFieldUpdateOperationsInput | string
    subject?: BookUpdatesubjectInput | Enumerable<string>
    imprint?: StringFieldUpdateOperationsInput | string
    collation?: StringFieldUpdateOperationsInput | string
    G_M_D?: EnumGMDFieldUpdateOperationsInput | GMD
    book_cover?: StringFieldUpdateOperationsInput | string
    material_number?: StringFieldUpdateOperationsInput | string
    availability?: BoolFieldUpdateOperationsInput | boolean
    bibilography?: StringFieldUpdateOperationsInput | string
    Keywords?: BookUpdateKeywordsInput | Enumerable<string>
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
    subject?: BookUpdatesubjectInput | Enumerable<string>
    imprint?: StringFieldUpdateOperationsInput | string
    collation?: StringFieldUpdateOperationsInput | string
    G_M_D?: EnumGMDFieldUpdateOperationsInput | GMD
    book_cover?: StringFieldUpdateOperationsInput | string
    material_number?: StringFieldUpdateOperationsInput | string
    availability?: BoolFieldUpdateOperationsInput | boolean
    bibilography?: StringFieldUpdateOperationsInput | string
    Keywords?: BookUpdateKeywordsInput | Enumerable<string>
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
    borrowed_books?: PatronUpdateborrowed_booksInput | Enumerable<string>
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
    borrowed_books?: PatronUpdateborrowed_booksInput | Enumerable<string>
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
    subject?: BookCreatesubjectInput | Enumerable<string>
    imprint: string
    collation: string
    G_M_D: GMD
    book_cover: string
    material_number: string
    availability: boolean
    bibilography: string
    Keywords?: BookCreateKeywordsInput | Enumerable<string>
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
    subject?: BookCreatesubjectInput | Enumerable<string>
    imprint: string
    collation: string
    G_M_D: GMD
    book_cover: string
    material_number: string
    availability: boolean
    bibilography: string
    Keywords?: BookCreateKeywordsInput | Enumerable<string>
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
    borrowed_books?: PatronCreateborrowed_booksInput | Enumerable<string>
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
    borrowed_books?: PatronCreateborrowed_booksInput | Enumerable<string>
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
  }

  export type BookUpdateWithoutBook_consultedInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    author?: StringFieldUpdateOperationsInput | string
    subject?: BookUpdatesubjectInput | Enumerable<string>
    imprint?: StringFieldUpdateOperationsInput | string
    collation?: StringFieldUpdateOperationsInput | string
    G_M_D?: EnumGMDFieldUpdateOperationsInput | GMD
    book_cover?: StringFieldUpdateOperationsInput | string
    material_number?: StringFieldUpdateOperationsInput | string
    availability?: BoolFieldUpdateOperationsInput | boolean
    bibilography?: StringFieldUpdateOperationsInput | string
    Keywords?: BookUpdateKeywordsInput | Enumerable<string>
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
    subject?: BookUpdatesubjectInput | Enumerable<string>
    imprint?: StringFieldUpdateOperationsInput | string
    collation?: StringFieldUpdateOperationsInput | string
    G_M_D?: EnumGMDFieldUpdateOperationsInput | GMD
    book_cover?: StringFieldUpdateOperationsInput | string
    material_number?: StringFieldUpdateOperationsInput | string
    availability?: BoolFieldUpdateOperationsInput | boolean
    bibilography?: StringFieldUpdateOperationsInput | string
    Keywords?: BookUpdateKeywordsInput | Enumerable<string>
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
    borrowed_books?: PatronUpdateborrowed_booksInput | Enumerable<string>
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
    borrowed_books?: PatronUpdateborrowed_booksInput | Enumerable<string>
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
    subject?: BookCreatesubjectInput | Enumerable<string>
    imprint: string
    collation: string
    G_M_D: GMD
    book_cover: string
    material_number: string
    availability: boolean
    bibilography: string
    Keywords?: BookCreateKeywordsInput | Enumerable<string>
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
    subject?: BookCreatesubjectInput | Enumerable<string>
    imprint: string
    collation: string
    G_M_D: GMD
    book_cover: string
    material_number: string
    availability: boolean
    bibilography: string
    Keywords?: BookCreateKeywordsInput | Enumerable<string>
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
    borrowed_books?: PatronCreateborrowed_booksInput | Enumerable<string>
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
    borrowed_books?: PatronCreateborrowed_booksInput | Enumerable<string>
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
  }

  export type BookUpdateWithoutCirculationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    author?: StringFieldUpdateOperationsInput | string
    subject?: BookUpdatesubjectInput | Enumerable<string>
    imprint?: StringFieldUpdateOperationsInput | string
    collation?: StringFieldUpdateOperationsInput | string
    G_M_D?: EnumGMDFieldUpdateOperationsInput | GMD
    book_cover?: StringFieldUpdateOperationsInput | string
    material_number?: StringFieldUpdateOperationsInput | string
    availability?: BoolFieldUpdateOperationsInput | boolean
    bibilography?: StringFieldUpdateOperationsInput | string
    Keywords?: BookUpdateKeywordsInput | Enumerable<string>
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
    subject?: BookUpdatesubjectInput | Enumerable<string>
    imprint?: StringFieldUpdateOperationsInput | string
    collation?: StringFieldUpdateOperationsInput | string
    G_M_D?: EnumGMDFieldUpdateOperationsInput | GMD
    book_cover?: StringFieldUpdateOperationsInput | string
    material_number?: StringFieldUpdateOperationsInput | string
    availability?: BoolFieldUpdateOperationsInput | boolean
    bibilography?: StringFieldUpdateOperationsInput | string
    Keywords?: BookUpdateKeywordsInput | Enumerable<string>
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
    borrowed_books?: PatronUpdateborrowed_booksInput | Enumerable<string>
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
    borrowed_books?: PatronUpdateborrowed_booksInput | Enumerable<string>
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

  export type Book_likesUncheckedUpdateManyWithoutBook_likesInput = {
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

  export type Book_consultedUncheckedUpdateManyWithoutBook_consultedInput = {
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

  export type CirculationUncheckedUpdateManyWithoutCirculationInput = {
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

  export type Book_consultedUpdateWithoutPatronInput = {
    consulted_at?: DateTimeFieldUpdateOperationsInput | Date | string
    book?: BookUpdateOneRequiredWithoutBook_consultedNestedInput
  }

  export type Book_consultedUncheckedUpdateWithoutPatronInput = {
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