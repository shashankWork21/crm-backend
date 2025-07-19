
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
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Session
 * 
 */
export type Session = $Result.DefaultSelection<Prisma.$SessionPayload>
/**
 * Model Token
 * 
 */
export type Token = $Result.DefaultSelection<Prisma.$TokenPayload>
/**
 * Model Region
 * 
 */
export type Region = $Result.DefaultSelection<Prisma.$RegionPayload>
/**
 * Model Schedule
 * 
 */
export type Schedule = $Result.DefaultSelection<Prisma.$SchedulePayload>
/**
 * Model Branch
 * 
 */
export type Branch = $Result.DefaultSelection<Prisma.$BranchPayload>
/**
 * Model Organisation
 * 
 */
export type Organisation = $Result.DefaultSelection<Prisma.$OrganisationPayload>
/**
 * Model Tag
 * 
 */
export type Tag = $Result.DefaultSelection<Prisma.$TagPayload>
/**
 * Model Activity
 * 
 */
export type Activity = $Result.DefaultSelection<Prisma.$ActivityPayload>
/**
 * Model Note
 * 
 */
export type Note = $Result.DefaultSelection<Prisma.$NotePayload>
/**
 * Model Contact
 * 
 */
export type Contact = $Result.DefaultSelection<Prisma.$ContactPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const NoteCategory: {
  CALL: 'CALL',
  CONTACT: 'CONTACT',
  ENQUIRY: 'ENQUIRY',
  QUOTATION: 'QUOTATION',
  PURCHASE: 'PURCHASE',
  MISCELLANEOUS: 'MISCELLANEOUS'
};

export type NoteCategory = (typeof NoteCategory)[keyof typeof NoteCategory]


export const Role: {
  EMPLOYEE: 'EMPLOYEE',
  ADMIN: 'ADMIN'
};

export type Role = (typeof Role)[keyof typeof Role]


export const Scope: {
  CALENDAR: 'CALENDAR',
  YOUTUBE: 'YOUTUBE',
  EMAIL: 'EMAIL',
  PROFILE: 'PROFILE',
  OPENID: 'OPENID',
  SHEETS: 'SHEETS',
  DOCS: 'DOCS'
};

export type Scope = (typeof Scope)[keyof typeof Scope]


export const ContactType: {
  LEAD: 'LEAD',
  PROSPECT: 'PROSPECT',
  CUSTOMER: 'CUSTOMER'
};

export type ContactType = (typeof ContactType)[keyof typeof ContactType]


export const LeadSegment: {
  HOT: 'HOT',
  WARM: 'WARM',
  COLD: 'COLD'
};

export type LeadSegment = (typeof LeadSegment)[keyof typeof LeadSegment]


export const BranchType: {
  HEADQUARTERS: 'HEADQUARTERS',
  BRANCH: 'BRANCH'
};

export type BranchType = (typeof BranchType)[keyof typeof BranchType]


export const TagType: {
  ORGANISATION: 'ORGANISATION',
  CONTACT: 'CONTACT',
  ACTIVITY: 'ACTIVITY'
};

export type TagType = (typeof TagType)[keyof typeof TagType]


export const ActivityType: {
  ENQUIRY: 'ENQUIRY',
  QUOTATION_REQUEST: 'QUOTATION_REQUEST',
  PURCHASE_ORDER: 'PURCHASE_ORDER',
  INVOICE: 'INVOICE',
  PAYMENT: 'PAYMENT',
  DELIVERY: 'DELIVERY',
  RETURN: 'RETURN',
  COMPLAINT: 'COMPLAINT',
  MISCELLANEOUS: 'MISCELLANEOUS'
};

export type ActivityType = (typeof ActivityType)[keyof typeof ActivityType]

}

export type NoteCategory = $Enums.NoteCategory

export const NoteCategory: typeof $Enums.NoteCategory

export type Role = $Enums.Role

export const Role: typeof $Enums.Role

export type Scope = $Enums.Scope

export const Scope: typeof $Enums.Scope

export type ContactType = $Enums.ContactType

export const ContactType: typeof $Enums.ContactType

export type LeadSegment = $Enums.LeadSegment

export const LeadSegment: typeof $Enums.LeadSegment

export type BranchType = $Enums.BranchType

export const BranchType: typeof $Enums.BranchType

export type TagType = $Enums.TagType

export const TagType: typeof $Enums.TagType

export type ActivityType = $Enums.ActivityType

export const ActivityType: typeof $Enums.ActivityType

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
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
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
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
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

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
   * `prisma.token`: Exposes CRUD operations for the **Token** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tokens
    * const tokens = await prisma.token.findMany()
    * ```
    */
  get token(): Prisma.TokenDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.region`: Exposes CRUD operations for the **Region** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Regions
    * const regions = await prisma.region.findMany()
    * ```
    */
  get region(): Prisma.RegionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.schedule`: Exposes CRUD operations for the **Schedule** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Schedules
    * const schedules = await prisma.schedule.findMany()
    * ```
    */
  get schedule(): Prisma.ScheduleDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.branch`: Exposes CRUD operations for the **Branch** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Branches
    * const branches = await prisma.branch.findMany()
    * ```
    */
  get branch(): Prisma.BranchDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.organisation`: Exposes CRUD operations for the **Organisation** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Organisations
    * const organisations = await prisma.organisation.findMany()
    * ```
    */
  get organisation(): Prisma.OrganisationDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.tag`: Exposes CRUD operations for the **Tag** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tags
    * const tags = await prisma.tag.findMany()
    * ```
    */
  get tag(): Prisma.TagDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.activity`: Exposes CRUD operations for the **Activity** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Activities
    * const activities = await prisma.activity.findMany()
    * ```
    */
  get activity(): Prisma.ActivityDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.note`: Exposes CRUD operations for the **Note** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Notes
    * const notes = await prisma.note.findMany()
    * ```
    */
  get note(): Prisma.NoteDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.contact`: Exposes CRUD operations for the **Contact** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Contacts
    * const contacts = await prisma.contact.findMany()
    * ```
    */
  get contact(): Prisma.ContactDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.12.0
   * Query Engine version: 8047c96bbd92db98a2abc7c9323ce77c02c89dbc
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
    User: 'User',
    Session: 'Session',
    Token: 'Token',
    Region: 'Region',
    Schedule: 'Schedule',
    Branch: 'Branch',
    Organisation: 'Organisation',
    Tag: 'Tag',
    Activity: 'Activity',
    Note: 'Note',
    Contact: 'Contact'
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
      modelProps: "user" | "session" | "token" | "region" | "schedule" | "branch" | "organisation" | "tag" | "activity" | "note" | "contact"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
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
      Token: {
        payload: Prisma.$TokenPayload<ExtArgs>
        fields: Prisma.TokenFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TokenFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TokenPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TokenFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TokenPayload>
          }
          findFirst: {
            args: Prisma.TokenFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TokenPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TokenFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TokenPayload>
          }
          findMany: {
            args: Prisma.TokenFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TokenPayload>[]
          }
          create: {
            args: Prisma.TokenCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TokenPayload>
          }
          createMany: {
            args: Prisma.TokenCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TokenCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TokenPayload>[]
          }
          delete: {
            args: Prisma.TokenDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TokenPayload>
          }
          update: {
            args: Prisma.TokenUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TokenPayload>
          }
          deleteMany: {
            args: Prisma.TokenDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TokenUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TokenUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TokenPayload>[]
          }
          upsert: {
            args: Prisma.TokenUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TokenPayload>
          }
          aggregate: {
            args: Prisma.TokenAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateToken>
          }
          groupBy: {
            args: Prisma.TokenGroupByArgs<ExtArgs>
            result: $Utils.Optional<TokenGroupByOutputType>[]
          }
          count: {
            args: Prisma.TokenCountArgs<ExtArgs>
            result: $Utils.Optional<TokenCountAggregateOutputType> | number
          }
        }
      }
      Region: {
        payload: Prisma.$RegionPayload<ExtArgs>
        fields: Prisma.RegionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RegionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RegionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegionPayload>
          }
          findFirst: {
            args: Prisma.RegionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RegionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegionPayload>
          }
          findMany: {
            args: Prisma.RegionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegionPayload>[]
          }
          create: {
            args: Prisma.RegionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegionPayload>
          }
          createMany: {
            args: Prisma.RegionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RegionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegionPayload>[]
          }
          delete: {
            args: Prisma.RegionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegionPayload>
          }
          update: {
            args: Prisma.RegionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegionPayload>
          }
          deleteMany: {
            args: Prisma.RegionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RegionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.RegionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegionPayload>[]
          }
          upsert: {
            args: Prisma.RegionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegionPayload>
          }
          aggregate: {
            args: Prisma.RegionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRegion>
          }
          groupBy: {
            args: Prisma.RegionGroupByArgs<ExtArgs>
            result: $Utils.Optional<RegionGroupByOutputType>[]
          }
          count: {
            args: Prisma.RegionCountArgs<ExtArgs>
            result: $Utils.Optional<RegionCountAggregateOutputType> | number
          }
        }
      }
      Schedule: {
        payload: Prisma.$SchedulePayload<ExtArgs>
        fields: Prisma.ScheduleFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ScheduleFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchedulePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ScheduleFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchedulePayload>
          }
          findFirst: {
            args: Prisma.ScheduleFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchedulePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ScheduleFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchedulePayload>
          }
          findMany: {
            args: Prisma.ScheduleFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchedulePayload>[]
          }
          create: {
            args: Prisma.ScheduleCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchedulePayload>
          }
          createMany: {
            args: Prisma.ScheduleCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ScheduleCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchedulePayload>[]
          }
          delete: {
            args: Prisma.ScheduleDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchedulePayload>
          }
          update: {
            args: Prisma.ScheduleUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchedulePayload>
          }
          deleteMany: {
            args: Prisma.ScheduleDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ScheduleUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ScheduleUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchedulePayload>[]
          }
          upsert: {
            args: Prisma.ScheduleUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchedulePayload>
          }
          aggregate: {
            args: Prisma.ScheduleAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSchedule>
          }
          groupBy: {
            args: Prisma.ScheduleGroupByArgs<ExtArgs>
            result: $Utils.Optional<ScheduleGroupByOutputType>[]
          }
          count: {
            args: Prisma.ScheduleCountArgs<ExtArgs>
            result: $Utils.Optional<ScheduleCountAggregateOutputType> | number
          }
        }
      }
      Branch: {
        payload: Prisma.$BranchPayload<ExtArgs>
        fields: Prisma.BranchFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BranchFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BranchPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BranchFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BranchPayload>
          }
          findFirst: {
            args: Prisma.BranchFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BranchPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BranchFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BranchPayload>
          }
          findMany: {
            args: Prisma.BranchFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BranchPayload>[]
          }
          create: {
            args: Prisma.BranchCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BranchPayload>
          }
          createMany: {
            args: Prisma.BranchCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.BranchCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BranchPayload>[]
          }
          delete: {
            args: Prisma.BranchDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BranchPayload>
          }
          update: {
            args: Prisma.BranchUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BranchPayload>
          }
          deleteMany: {
            args: Prisma.BranchDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BranchUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.BranchUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BranchPayload>[]
          }
          upsert: {
            args: Prisma.BranchUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BranchPayload>
          }
          aggregate: {
            args: Prisma.BranchAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBranch>
          }
          groupBy: {
            args: Prisma.BranchGroupByArgs<ExtArgs>
            result: $Utils.Optional<BranchGroupByOutputType>[]
          }
          count: {
            args: Prisma.BranchCountArgs<ExtArgs>
            result: $Utils.Optional<BranchCountAggregateOutputType> | number
          }
        }
      }
      Organisation: {
        payload: Prisma.$OrganisationPayload<ExtArgs>
        fields: Prisma.OrganisationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.OrganisationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganisationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.OrganisationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganisationPayload>
          }
          findFirst: {
            args: Prisma.OrganisationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganisationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.OrganisationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganisationPayload>
          }
          findMany: {
            args: Prisma.OrganisationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganisationPayload>[]
          }
          create: {
            args: Prisma.OrganisationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganisationPayload>
          }
          createMany: {
            args: Prisma.OrganisationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.OrganisationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganisationPayload>[]
          }
          delete: {
            args: Prisma.OrganisationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganisationPayload>
          }
          update: {
            args: Prisma.OrganisationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganisationPayload>
          }
          deleteMany: {
            args: Prisma.OrganisationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.OrganisationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.OrganisationUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganisationPayload>[]
          }
          upsert: {
            args: Prisma.OrganisationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganisationPayload>
          }
          aggregate: {
            args: Prisma.OrganisationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOrganisation>
          }
          groupBy: {
            args: Prisma.OrganisationGroupByArgs<ExtArgs>
            result: $Utils.Optional<OrganisationGroupByOutputType>[]
          }
          count: {
            args: Prisma.OrganisationCountArgs<ExtArgs>
            result: $Utils.Optional<OrganisationCountAggregateOutputType> | number
          }
        }
      }
      Tag: {
        payload: Prisma.$TagPayload<ExtArgs>
        fields: Prisma.TagFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TagFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TagFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload>
          }
          findFirst: {
            args: Prisma.TagFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TagFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload>
          }
          findMany: {
            args: Prisma.TagFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload>[]
          }
          create: {
            args: Prisma.TagCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload>
          }
          createMany: {
            args: Prisma.TagCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TagCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload>[]
          }
          delete: {
            args: Prisma.TagDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload>
          }
          update: {
            args: Prisma.TagUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload>
          }
          deleteMany: {
            args: Prisma.TagDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TagUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TagUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload>[]
          }
          upsert: {
            args: Prisma.TagUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload>
          }
          aggregate: {
            args: Prisma.TagAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTag>
          }
          groupBy: {
            args: Prisma.TagGroupByArgs<ExtArgs>
            result: $Utils.Optional<TagGroupByOutputType>[]
          }
          count: {
            args: Prisma.TagCountArgs<ExtArgs>
            result: $Utils.Optional<TagCountAggregateOutputType> | number
          }
        }
      }
      Activity: {
        payload: Prisma.$ActivityPayload<ExtArgs>
        fields: Prisma.ActivityFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ActivityFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ActivityFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityPayload>
          }
          findFirst: {
            args: Prisma.ActivityFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ActivityFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityPayload>
          }
          findMany: {
            args: Prisma.ActivityFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityPayload>[]
          }
          create: {
            args: Prisma.ActivityCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityPayload>
          }
          createMany: {
            args: Prisma.ActivityCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ActivityCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityPayload>[]
          }
          delete: {
            args: Prisma.ActivityDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityPayload>
          }
          update: {
            args: Prisma.ActivityUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityPayload>
          }
          deleteMany: {
            args: Prisma.ActivityDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ActivityUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ActivityUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityPayload>[]
          }
          upsert: {
            args: Prisma.ActivityUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityPayload>
          }
          aggregate: {
            args: Prisma.ActivityAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateActivity>
          }
          groupBy: {
            args: Prisma.ActivityGroupByArgs<ExtArgs>
            result: $Utils.Optional<ActivityGroupByOutputType>[]
          }
          count: {
            args: Prisma.ActivityCountArgs<ExtArgs>
            result: $Utils.Optional<ActivityCountAggregateOutputType> | number
          }
        }
      }
      Note: {
        payload: Prisma.$NotePayload<ExtArgs>
        fields: Prisma.NoteFieldRefs
        operations: {
          findUnique: {
            args: Prisma.NoteFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.NoteFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotePayload>
          }
          findFirst: {
            args: Prisma.NoteFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.NoteFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotePayload>
          }
          findMany: {
            args: Prisma.NoteFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotePayload>[]
          }
          create: {
            args: Prisma.NoteCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotePayload>
          }
          createMany: {
            args: Prisma.NoteCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.NoteCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotePayload>[]
          }
          delete: {
            args: Prisma.NoteDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotePayload>
          }
          update: {
            args: Prisma.NoteUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotePayload>
          }
          deleteMany: {
            args: Prisma.NoteDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.NoteUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.NoteUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotePayload>[]
          }
          upsert: {
            args: Prisma.NoteUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotePayload>
          }
          aggregate: {
            args: Prisma.NoteAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateNote>
          }
          groupBy: {
            args: Prisma.NoteGroupByArgs<ExtArgs>
            result: $Utils.Optional<NoteGroupByOutputType>[]
          }
          count: {
            args: Prisma.NoteCountArgs<ExtArgs>
            result: $Utils.Optional<NoteCountAggregateOutputType> | number
          }
        }
      }
      Contact: {
        payload: Prisma.$ContactPayload<ExtArgs>
        fields: Prisma.ContactFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ContactFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ContactFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactPayload>
          }
          findFirst: {
            args: Prisma.ContactFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ContactFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactPayload>
          }
          findMany: {
            args: Prisma.ContactFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactPayload>[]
          }
          create: {
            args: Prisma.ContactCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactPayload>
          }
          createMany: {
            args: Prisma.ContactCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ContactCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactPayload>[]
          }
          delete: {
            args: Prisma.ContactDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactPayload>
          }
          update: {
            args: Prisma.ContactUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactPayload>
          }
          deleteMany: {
            args: Prisma.ContactDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ContactUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ContactUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactPayload>[]
          }
          upsert: {
            args: Prisma.ContactUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactPayload>
          }
          aggregate: {
            args: Prisma.ContactAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateContact>
          }
          groupBy: {
            args: Prisma.ContactGroupByArgs<ExtArgs>
            result: $Utils.Optional<ContactGroupByOutputType>[]
          }
          count: {
            args: Prisma.ContactCountArgs<ExtArgs>
            result: $Utils.Optional<ContactCountAggregateOutputType> | number
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
    user?: UserOmit
    session?: SessionOmit
    token?: TokenOmit
    region?: RegionOmit
    schedule?: ScheduleOmit
    branch?: BranchOmit
    organisation?: OrganisationOmit
    tag?: TagOmit
    activity?: ActivityOmit
    note?: NoteOmit
    contact?: ContactOmit
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
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    addedActivities: number
    sessions: number
    tokens: number
    contactFollowUps: number
    createdNotes: number
    activityFollowUps: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    addedActivities?: boolean | UserCountOutputTypeCountAddedActivitiesArgs
    sessions?: boolean | UserCountOutputTypeCountSessionsArgs
    tokens?: boolean | UserCountOutputTypeCountTokensArgs
    contactFollowUps?: boolean | UserCountOutputTypeCountContactFollowUpsArgs
    createdNotes?: boolean | UserCountOutputTypeCountCreatedNotesArgs
    activityFollowUps?: boolean | UserCountOutputTypeCountActivityFollowUpsArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountAddedActivitiesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ActivityWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountSessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SessionWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountTokensArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TokenWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountContactFollowUpsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ContactWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountCreatedNotesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NoteWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountActivityFollowUpsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ActivityWhereInput
  }


  /**
   * Count Type SessionCountOutputType
   */

  export type SessionCountOutputType = {
    tokens: number
  }

  export type SessionCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tokens?: boolean | SessionCountOutputTypeCountTokensArgs
  }

  // Custom InputTypes
  /**
   * SessionCountOutputType without action
   */
  export type SessionCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SessionCountOutputType
     */
    select?: SessionCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * SessionCountOutputType without action
   */
  export type SessionCountOutputTypeCountTokensArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TokenWhereInput
  }


  /**
   * Count Type RegionCountOutputType
   */

  export type RegionCountOutputType = {
    branches: number
    schedules: number
  }

  export type RegionCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    branches?: boolean | RegionCountOutputTypeCountBranchesArgs
    schedules?: boolean | RegionCountOutputTypeCountSchedulesArgs
  }

  // Custom InputTypes
  /**
   * RegionCountOutputType without action
   */
  export type RegionCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RegionCountOutputType
     */
    select?: RegionCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * RegionCountOutputType without action
   */
  export type RegionCountOutputTypeCountBranchesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BranchWhereInput
  }

  /**
   * RegionCountOutputType without action
   */
  export type RegionCountOutputTypeCountSchedulesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ScheduleWhereInput
  }


  /**
   * Count Type BranchCountOutputType
   */

  export type BranchCountOutputType = {
    contacts: number
  }

  export type BranchCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    contacts?: boolean | BranchCountOutputTypeCountContactsArgs
  }

  // Custom InputTypes
  /**
   * BranchCountOutputType without action
   */
  export type BranchCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BranchCountOutputType
     */
    select?: BranchCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * BranchCountOutputType without action
   */
  export type BranchCountOutputTypeCountContactsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ContactWhereInput
  }


  /**
   * Count Type OrganisationCountOutputType
   */

  export type OrganisationCountOutputType = {
    team: number
    branches: number
    tags: number
    contactOrganisations: number
    createdTags: number
    contacts: number
    createdSchedule: number
  }

  export type OrganisationCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    team?: boolean | OrganisationCountOutputTypeCountTeamArgs
    branches?: boolean | OrganisationCountOutputTypeCountBranchesArgs
    tags?: boolean | OrganisationCountOutputTypeCountTagsArgs
    contactOrganisations?: boolean | OrganisationCountOutputTypeCountContactOrganisationsArgs
    createdTags?: boolean | OrganisationCountOutputTypeCountCreatedTagsArgs
    contacts?: boolean | OrganisationCountOutputTypeCountContactsArgs
    createdSchedule?: boolean | OrganisationCountOutputTypeCountCreatedScheduleArgs
  }

  // Custom InputTypes
  /**
   * OrganisationCountOutputType without action
   */
  export type OrganisationCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrganisationCountOutputType
     */
    select?: OrganisationCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * OrganisationCountOutputType without action
   */
  export type OrganisationCountOutputTypeCountTeamArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
  }

  /**
   * OrganisationCountOutputType without action
   */
  export type OrganisationCountOutputTypeCountBranchesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BranchWhereInput
  }

  /**
   * OrganisationCountOutputType without action
   */
  export type OrganisationCountOutputTypeCountTagsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TagWhereInput
  }

  /**
   * OrganisationCountOutputType without action
   */
  export type OrganisationCountOutputTypeCountContactOrganisationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrganisationWhereInput
  }

  /**
   * OrganisationCountOutputType without action
   */
  export type OrganisationCountOutputTypeCountCreatedTagsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TagWhereInput
  }

  /**
   * OrganisationCountOutputType without action
   */
  export type OrganisationCountOutputTypeCountContactsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ContactWhereInput
  }

  /**
   * OrganisationCountOutputType without action
   */
  export type OrganisationCountOutputTypeCountCreatedScheduleArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ScheduleWhereInput
  }


  /**
   * Count Type TagCountOutputType
   */

  export type TagCountOutputType = {
    organisations: number
    activities: number
    contacts: number
  }

  export type TagCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    organisations?: boolean | TagCountOutputTypeCountOrganisationsArgs
    activities?: boolean | TagCountOutputTypeCountActivitiesArgs
    contacts?: boolean | TagCountOutputTypeCountContactsArgs
  }

  // Custom InputTypes
  /**
   * TagCountOutputType without action
   */
  export type TagCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TagCountOutputType
     */
    select?: TagCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TagCountOutputType without action
   */
  export type TagCountOutputTypeCountOrganisationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrganisationWhereInput
  }

  /**
   * TagCountOutputType without action
   */
  export type TagCountOutputTypeCountActivitiesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ActivityWhereInput
  }

  /**
   * TagCountOutputType without action
   */
  export type TagCountOutputTypeCountContactsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ContactWhereInput
  }


  /**
   * Count Type ActivityCountOutputType
   */

  export type ActivityCountOutputType = {
    tags: number
    followUpActivities: number
  }

  export type ActivityCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tags?: boolean | ActivityCountOutputTypeCountTagsArgs
    followUpActivities?: boolean | ActivityCountOutputTypeCountFollowUpActivitiesArgs
  }

  // Custom InputTypes
  /**
   * ActivityCountOutputType without action
   */
  export type ActivityCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActivityCountOutputType
     */
    select?: ActivityCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ActivityCountOutputType without action
   */
  export type ActivityCountOutputTypeCountTagsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TagWhereInput
  }

  /**
   * ActivityCountOutputType without action
   */
  export type ActivityCountOutputTypeCountFollowUpActivitiesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ActivityWhereInput
  }


  /**
   * Count Type ContactCountOutputType
   */

  export type ContactCountOutputType = {
    activities: number
    notes: number
    tags: number
  }

  export type ContactCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    activities?: boolean | ContactCountOutputTypeCountActivitiesArgs
    notes?: boolean | ContactCountOutputTypeCountNotesArgs
    tags?: boolean | ContactCountOutputTypeCountTagsArgs
  }

  // Custom InputTypes
  /**
   * ContactCountOutputType without action
   */
  export type ContactCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactCountOutputType
     */
    select?: ContactCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ContactCountOutputType without action
   */
  export type ContactCountOutputTypeCountActivitiesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ActivityWhereInput
  }

  /**
   * ContactCountOutputType without action
   */
  export type ContactCountOutputTypeCountNotesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NoteWhereInput
  }

  /**
   * ContactCountOutputType without action
   */
  export type ContactCountOutputTypeCountTagsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TagWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    firstName: string | null
    lastName: string | null
    email: string | null
    password: string | null
    countryCode: string | null
    phoneNumber: string | null
    role: $Enums.Role | null
    createdAt: Date | null
    updatedAt: Date | null
    organisationId: string | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    firstName: string | null
    lastName: string | null
    email: string | null
    password: string | null
    countryCode: string | null
    phoneNumber: string | null
    role: $Enums.Role | null
    createdAt: Date | null
    updatedAt: Date | null
    organisationId: string | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    firstName: number
    lastName: number
    email: number
    password: number
    countryCode: number
    phoneNumber: number
    role: number
    createdAt: number
    updatedAt: number
    organisationId: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    firstName?: true
    lastName?: true
    email?: true
    password?: true
    countryCode?: true
    phoneNumber?: true
    role?: true
    createdAt?: true
    updatedAt?: true
    organisationId?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    firstName?: true
    lastName?: true
    email?: true
    password?: true
    countryCode?: true
    phoneNumber?: true
    role?: true
    createdAt?: true
    updatedAt?: true
    organisationId?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    firstName?: true
    lastName?: true
    email?: true
    password?: true
    countryCode?: true
    phoneNumber?: true
    role?: true
    createdAt?: true
    updatedAt?: true
    organisationId?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    firstName: string
    lastName: string
    email: string
    password: string
    countryCode: string
    phoneNumber: string
    role: $Enums.Role
    createdAt: Date
    updatedAt: Date
    organisationId: string | null
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    firstName?: boolean
    lastName?: boolean
    email?: boolean
    password?: boolean
    countryCode?: boolean
    phoneNumber?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    organisationId?: boolean
    organisation?: boolean | User$organisationArgs<ExtArgs>
    addedActivities?: boolean | User$addedActivitiesArgs<ExtArgs>
    sessions?: boolean | User$sessionsArgs<ExtArgs>
    tokens?: boolean | User$tokensArgs<ExtArgs>
    contactFollowUps?: boolean | User$contactFollowUpsArgs<ExtArgs>
    createdNotes?: boolean | User$createdNotesArgs<ExtArgs>
    activityFollowUps?: boolean | User$activityFollowUpsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    firstName?: boolean
    lastName?: boolean
    email?: boolean
    password?: boolean
    countryCode?: boolean
    phoneNumber?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    organisationId?: boolean
    organisation?: boolean | User$organisationArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    firstName?: boolean
    lastName?: boolean
    email?: boolean
    password?: boolean
    countryCode?: boolean
    phoneNumber?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    organisationId?: boolean
    organisation?: boolean | User$organisationArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    firstName?: boolean
    lastName?: boolean
    email?: boolean
    password?: boolean
    countryCode?: boolean
    phoneNumber?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    organisationId?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "firstName" | "lastName" | "email" | "password" | "countryCode" | "phoneNumber" | "role" | "createdAt" | "updatedAt" | "organisationId", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    organisation?: boolean | User$organisationArgs<ExtArgs>
    addedActivities?: boolean | User$addedActivitiesArgs<ExtArgs>
    sessions?: boolean | User$sessionsArgs<ExtArgs>
    tokens?: boolean | User$tokensArgs<ExtArgs>
    contactFollowUps?: boolean | User$contactFollowUpsArgs<ExtArgs>
    createdNotes?: boolean | User$createdNotesArgs<ExtArgs>
    activityFollowUps?: boolean | User$activityFollowUpsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    organisation?: boolean | User$organisationArgs<ExtArgs>
  }
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    organisation?: boolean | User$organisationArgs<ExtArgs>
  }

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      organisation: Prisma.$OrganisationPayload<ExtArgs> | null
      addedActivities: Prisma.$ActivityPayload<ExtArgs>[]
      sessions: Prisma.$SessionPayload<ExtArgs>[]
      tokens: Prisma.$TokenPayload<ExtArgs>[]
      contactFollowUps: Prisma.$ContactPayload<ExtArgs>[]
      createdNotes: Prisma.$NotePayload<ExtArgs>[]
      activityFollowUps: Prisma.$ActivityPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      firstName: string
      lastName: string
      email: string
      password: string
      countryCode: string
      phoneNumber: string
      role: $Enums.Role
      createdAt: Date
      updatedAt: Date
      organisationId: string | null
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit' | 'relationLoadStrategy'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
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
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
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
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    organisation<T extends User$organisationArgs<ExtArgs> = {}>(args?: Subset<T, User$organisationArgs<ExtArgs>>): Prisma__OrganisationClient<$Result.GetResult<Prisma.$OrganisationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    addedActivities<T extends User$addedActivitiesArgs<ExtArgs> = {}>(args?: Subset<T, User$addedActivitiesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ActivityPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    sessions<T extends User$sessionsArgs<ExtArgs> = {}>(args?: Subset<T, User$sessionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    tokens<T extends User$tokensArgs<ExtArgs> = {}>(args?: Subset<T, User$tokensArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TokenPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    contactFollowUps<T extends User$contactFollowUpsArgs<ExtArgs> = {}>(args?: Subset<T, User$contactFollowUpsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContactPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    createdNotes<T extends User$createdNotesArgs<ExtArgs> = {}>(args?: Subset<T, User$createdNotesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    activityFollowUps<T extends User$activityFollowUpsArgs<ExtArgs> = {}>(args?: Subset<T, User$activityFollowUpsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ActivityPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly firstName: FieldRef<"User", 'String'>
    readonly lastName: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly countryCode: FieldRef<"User", 'String'>
    readonly phoneNumber: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'Role'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
    readonly organisationId: FieldRef<"User", 'String'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.organisation
   */
  export type User$organisationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organisation
     */
    select?: OrganisationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Organisation
     */
    omit?: OrganisationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganisationInclude<ExtArgs> | null
    where?: OrganisationWhereInput
  }

  /**
   * User.addedActivities
   */
  export type User$addedActivitiesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Activity
     */
    select?: ActivitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Activity
     */
    omit?: ActivityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityInclude<ExtArgs> | null
    where?: ActivityWhereInput
    orderBy?: ActivityOrderByWithRelationInput | ActivityOrderByWithRelationInput[]
    cursor?: ActivityWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ActivityScalarFieldEnum | ActivityScalarFieldEnum[]
  }

  /**
   * User.sessions
   */
  export type User$sessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    where?: SessionWhereInput
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    cursor?: SessionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * User.tokens
   */
  export type User$tokensArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Token
     */
    select?: TokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Token
     */
    omit?: TokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TokenInclude<ExtArgs> | null
    where?: TokenWhereInput
    orderBy?: TokenOrderByWithRelationInput | TokenOrderByWithRelationInput[]
    cursor?: TokenWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TokenScalarFieldEnum | TokenScalarFieldEnum[]
  }

  /**
   * User.contactFollowUps
   */
  export type User$contactFollowUpsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contact
     */
    select?: ContactSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contact
     */
    omit?: ContactOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContactInclude<ExtArgs> | null
    where?: ContactWhereInput
    orderBy?: ContactOrderByWithRelationInput | ContactOrderByWithRelationInput[]
    cursor?: ContactWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ContactScalarFieldEnum | ContactScalarFieldEnum[]
  }

  /**
   * User.createdNotes
   */
  export type User$createdNotesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Note
     */
    select?: NoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Note
     */
    omit?: NoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NoteInclude<ExtArgs> | null
    where?: NoteWhereInput
    orderBy?: NoteOrderByWithRelationInput | NoteOrderByWithRelationInput[]
    cursor?: NoteWhereUniqueInput
    take?: number
    skip?: number
    distinct?: NoteScalarFieldEnum | NoteScalarFieldEnum[]
  }

  /**
   * User.activityFollowUps
   */
  export type User$activityFollowUpsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Activity
     */
    select?: ActivitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Activity
     */
    omit?: ActivityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityInclude<ExtArgs> | null
    where?: ActivityWhereInput
    orderBy?: ActivityOrderByWithRelationInput | ActivityOrderByWithRelationInput[]
    cursor?: ActivityWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ActivityScalarFieldEnum | ActivityScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


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
    userId: string | null
    expiresAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SessionMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    expiresAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SessionCountAggregateOutputType = {
    id: number
    userId: number
    expiresAt: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type SessionMinAggregateInputType = {
    id?: true
    userId?: true
    expiresAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SessionMaxAggregateInputType = {
    id?: true
    userId?: true
    expiresAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SessionCountAggregateInputType = {
    id?: true
    userId?: true
    expiresAt?: true
    createdAt?: true
    updatedAt?: true
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
    userId: string
    expiresAt: Date
    createdAt: Date
    updatedAt: Date
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
    userId?: boolean
    expiresAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    tokens?: boolean | Session$tokensArgs<ExtArgs>
    _count?: boolean | SessionCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["session"]>

  export type SessionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    expiresAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["session"]>

  export type SessionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    expiresAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["session"]>

  export type SessionSelectScalar = {
    id?: boolean
    userId?: boolean
    expiresAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type SessionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "expiresAt" | "createdAt" | "updatedAt", ExtArgs["result"]["session"]>
  export type SessionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    tokens?: boolean | Session$tokensArgs<ExtArgs>
    _count?: boolean | SessionCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type SessionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type SessionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $SessionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Session"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      tokens: Prisma.$TokenPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      expiresAt: Date
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["session"]>
    composites: {}
  }

  type SessionGetPayload<S extends boolean | null | undefined | SessionDefaultArgs> = $Result.GetResult<Prisma.$SessionPayload, S>

  type SessionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SessionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit' | 'relationLoadStrategy'> & {
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
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    tokens<T extends Session$tokensArgs<ExtArgs> = {}>(args?: Subset<T, Session$tokensArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TokenPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
    readonly userId: FieldRef<"Session", 'String'>
    readonly expiresAt: FieldRef<"Session", 'DateTime'>
    readonly createdAt: FieldRef<"Session", 'DateTime'>
    readonly updatedAt: FieldRef<"Session", 'DateTime'>
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
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where: SessionWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
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
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where: SessionWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
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
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
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
    relationLoadStrategy?: RelationLoadStrategy
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
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
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
    relationLoadStrategy?: RelationLoadStrategy
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
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
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
    relationLoadStrategy?: RelationLoadStrategy
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
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * The data needed to create a Session.
     */
    data: XOR<SessionCreateInput, SessionUncheckedCreateInput>
    relationLoadStrategy?: RelationLoadStrategy
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
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionIncludeCreateManyAndReturn<ExtArgs> | null
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
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * The data needed to update a Session.
     */
    data: XOR<SessionUpdateInput, SessionUncheckedUpdateInput>
    /**
     * Choose, which Session to update.
     */
    where: SessionWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
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
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionIncludeUpdateManyAndReturn<ExtArgs> | null
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
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
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
    relationLoadStrategy?: RelationLoadStrategy
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
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter which Session to delete.
     */
    where: SessionWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
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
   * Session.tokens
   */
  export type Session$tokensArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Token
     */
    select?: TokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Token
     */
    omit?: TokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TokenInclude<ExtArgs> | null
    where?: TokenWhereInput
    orderBy?: TokenOrderByWithRelationInput | TokenOrderByWithRelationInput[]
    cursor?: TokenWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TokenScalarFieldEnum | TokenScalarFieldEnum[]
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
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
  }


  /**
   * Model Token
   */

  export type AggregateToken = {
    _count: TokenCountAggregateOutputType | null
    _min: TokenMinAggregateOutputType | null
    _max: TokenMaxAggregateOutputType | null
  }

  export type TokenMinAggregateOutputType = {
    id: string | null
    userId: string | null
    sessionId: string | null
    accessToken: string | null
    refreshToken: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TokenMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    sessionId: string | null
    accessToken: string | null
    refreshToken: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TokenCountAggregateOutputType = {
    id: number
    userId: number
    sessionId: number
    scopes: number
    accessToken: number
    refreshToken: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type TokenMinAggregateInputType = {
    id?: true
    userId?: true
    sessionId?: true
    accessToken?: true
    refreshToken?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TokenMaxAggregateInputType = {
    id?: true
    userId?: true
    sessionId?: true
    accessToken?: true
    refreshToken?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TokenCountAggregateInputType = {
    id?: true
    userId?: true
    sessionId?: true
    scopes?: true
    accessToken?: true
    refreshToken?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type TokenAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Token to aggregate.
     */
    where?: TokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tokens to fetch.
     */
    orderBy?: TokenOrderByWithRelationInput | TokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Tokens
    **/
    _count?: true | TokenCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TokenMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TokenMaxAggregateInputType
  }

  export type GetTokenAggregateType<T extends TokenAggregateArgs> = {
        [P in keyof T & keyof AggregateToken]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateToken[P]>
      : GetScalarType<T[P], AggregateToken[P]>
  }




  export type TokenGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TokenWhereInput
    orderBy?: TokenOrderByWithAggregationInput | TokenOrderByWithAggregationInput[]
    by: TokenScalarFieldEnum[] | TokenScalarFieldEnum
    having?: TokenScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TokenCountAggregateInputType | true
    _min?: TokenMinAggregateInputType
    _max?: TokenMaxAggregateInputType
  }

  export type TokenGroupByOutputType = {
    id: string
    userId: string
    sessionId: string
    scopes: $Enums.Scope[]
    accessToken: string
    refreshToken: string | null
    createdAt: Date
    updatedAt: Date
    _count: TokenCountAggregateOutputType | null
    _min: TokenMinAggregateOutputType | null
    _max: TokenMaxAggregateOutputType | null
  }

  type GetTokenGroupByPayload<T extends TokenGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TokenGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TokenGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TokenGroupByOutputType[P]>
            : GetScalarType<T[P], TokenGroupByOutputType[P]>
        }
      >
    >


  export type TokenSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    sessionId?: boolean
    scopes?: boolean
    accessToken?: boolean
    refreshToken?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    session?: boolean | SessionDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["token"]>

  export type TokenSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    sessionId?: boolean
    scopes?: boolean
    accessToken?: boolean
    refreshToken?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    session?: boolean | SessionDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["token"]>

  export type TokenSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    sessionId?: boolean
    scopes?: boolean
    accessToken?: boolean
    refreshToken?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    session?: boolean | SessionDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["token"]>

  export type TokenSelectScalar = {
    id?: boolean
    userId?: boolean
    sessionId?: boolean
    scopes?: boolean
    accessToken?: boolean
    refreshToken?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type TokenOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "sessionId" | "scopes" | "accessToken" | "refreshToken" | "createdAt" | "updatedAt", ExtArgs["result"]["token"]>
  export type TokenInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    session?: boolean | SessionDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type TokenIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    session?: boolean | SessionDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type TokenIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    session?: boolean | SessionDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $TokenPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Token"
    objects: {
      session: Prisma.$SessionPayload<ExtArgs>
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      sessionId: string
      scopes: $Enums.Scope[]
      accessToken: string
      refreshToken: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["token"]>
    composites: {}
  }

  type TokenGetPayload<S extends boolean | null | undefined | TokenDefaultArgs> = $Result.GetResult<Prisma.$TokenPayload, S>

  type TokenCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TokenFindManyArgs, 'select' | 'include' | 'distinct' | 'omit' | 'relationLoadStrategy'> & {
      select?: TokenCountAggregateInputType | true
    }

  export interface TokenDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Token'], meta: { name: 'Token' } }
    /**
     * Find zero or one Token that matches the filter.
     * @param {TokenFindUniqueArgs} args - Arguments to find a Token
     * @example
     * // Get one Token
     * const token = await prisma.token.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TokenFindUniqueArgs>(args: SelectSubset<T, TokenFindUniqueArgs<ExtArgs>>): Prisma__TokenClient<$Result.GetResult<Prisma.$TokenPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Token that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TokenFindUniqueOrThrowArgs} args - Arguments to find a Token
     * @example
     * // Get one Token
     * const token = await prisma.token.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TokenFindUniqueOrThrowArgs>(args: SelectSubset<T, TokenFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TokenClient<$Result.GetResult<Prisma.$TokenPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Token that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TokenFindFirstArgs} args - Arguments to find a Token
     * @example
     * // Get one Token
     * const token = await prisma.token.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TokenFindFirstArgs>(args?: SelectSubset<T, TokenFindFirstArgs<ExtArgs>>): Prisma__TokenClient<$Result.GetResult<Prisma.$TokenPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Token that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TokenFindFirstOrThrowArgs} args - Arguments to find a Token
     * @example
     * // Get one Token
     * const token = await prisma.token.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TokenFindFirstOrThrowArgs>(args?: SelectSubset<T, TokenFindFirstOrThrowArgs<ExtArgs>>): Prisma__TokenClient<$Result.GetResult<Prisma.$TokenPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Tokens that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TokenFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tokens
     * const tokens = await prisma.token.findMany()
     * 
     * // Get first 10 Tokens
     * const tokens = await prisma.token.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const tokenWithIdOnly = await prisma.token.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TokenFindManyArgs>(args?: SelectSubset<T, TokenFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TokenPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Token.
     * @param {TokenCreateArgs} args - Arguments to create a Token.
     * @example
     * // Create one Token
     * const Token = await prisma.token.create({
     *   data: {
     *     // ... data to create a Token
     *   }
     * })
     * 
     */
    create<T extends TokenCreateArgs>(args: SelectSubset<T, TokenCreateArgs<ExtArgs>>): Prisma__TokenClient<$Result.GetResult<Prisma.$TokenPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Tokens.
     * @param {TokenCreateManyArgs} args - Arguments to create many Tokens.
     * @example
     * // Create many Tokens
     * const token = await prisma.token.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TokenCreateManyArgs>(args?: SelectSubset<T, TokenCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Tokens and returns the data saved in the database.
     * @param {TokenCreateManyAndReturnArgs} args - Arguments to create many Tokens.
     * @example
     * // Create many Tokens
     * const token = await prisma.token.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Tokens and only return the `id`
     * const tokenWithIdOnly = await prisma.token.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TokenCreateManyAndReturnArgs>(args?: SelectSubset<T, TokenCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TokenPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Token.
     * @param {TokenDeleteArgs} args - Arguments to delete one Token.
     * @example
     * // Delete one Token
     * const Token = await prisma.token.delete({
     *   where: {
     *     // ... filter to delete one Token
     *   }
     * })
     * 
     */
    delete<T extends TokenDeleteArgs>(args: SelectSubset<T, TokenDeleteArgs<ExtArgs>>): Prisma__TokenClient<$Result.GetResult<Prisma.$TokenPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Token.
     * @param {TokenUpdateArgs} args - Arguments to update one Token.
     * @example
     * // Update one Token
     * const token = await prisma.token.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TokenUpdateArgs>(args: SelectSubset<T, TokenUpdateArgs<ExtArgs>>): Prisma__TokenClient<$Result.GetResult<Prisma.$TokenPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Tokens.
     * @param {TokenDeleteManyArgs} args - Arguments to filter Tokens to delete.
     * @example
     * // Delete a few Tokens
     * const { count } = await prisma.token.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TokenDeleteManyArgs>(args?: SelectSubset<T, TokenDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TokenUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tokens
     * const token = await prisma.token.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TokenUpdateManyArgs>(args: SelectSubset<T, TokenUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tokens and returns the data updated in the database.
     * @param {TokenUpdateManyAndReturnArgs} args - Arguments to update many Tokens.
     * @example
     * // Update many Tokens
     * const token = await prisma.token.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Tokens and only return the `id`
     * const tokenWithIdOnly = await prisma.token.updateManyAndReturn({
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
    updateManyAndReturn<T extends TokenUpdateManyAndReturnArgs>(args: SelectSubset<T, TokenUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TokenPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Token.
     * @param {TokenUpsertArgs} args - Arguments to update or create a Token.
     * @example
     * // Update or create a Token
     * const token = await prisma.token.upsert({
     *   create: {
     *     // ... data to create a Token
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Token we want to update
     *   }
     * })
     */
    upsert<T extends TokenUpsertArgs>(args: SelectSubset<T, TokenUpsertArgs<ExtArgs>>): Prisma__TokenClient<$Result.GetResult<Prisma.$TokenPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Tokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TokenCountArgs} args - Arguments to filter Tokens to count.
     * @example
     * // Count the number of Tokens
     * const count = await prisma.token.count({
     *   where: {
     *     // ... the filter for the Tokens we want to count
     *   }
     * })
    **/
    count<T extends TokenCountArgs>(
      args?: Subset<T, TokenCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TokenCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Token.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TokenAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TokenAggregateArgs>(args: Subset<T, TokenAggregateArgs>): Prisma.PrismaPromise<GetTokenAggregateType<T>>

    /**
     * Group by Token.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TokenGroupByArgs} args - Group by arguments.
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
      T extends TokenGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TokenGroupByArgs['orderBy'] }
        : { orderBy?: TokenGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TokenGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTokenGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Token model
   */
  readonly fields: TokenFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Token.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TokenClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    session<T extends SessionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SessionDefaultArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Token model
   */
  interface TokenFieldRefs {
    readonly id: FieldRef<"Token", 'String'>
    readonly userId: FieldRef<"Token", 'String'>
    readonly sessionId: FieldRef<"Token", 'String'>
    readonly scopes: FieldRef<"Token", 'Scope[]'>
    readonly accessToken: FieldRef<"Token", 'String'>
    readonly refreshToken: FieldRef<"Token", 'String'>
    readonly createdAt: FieldRef<"Token", 'DateTime'>
    readonly updatedAt: FieldRef<"Token", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Token findUnique
   */
  export type TokenFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Token
     */
    select?: TokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Token
     */
    omit?: TokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TokenInclude<ExtArgs> | null
    /**
     * Filter, which Token to fetch.
     */
    where: TokenWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * Token findUniqueOrThrow
   */
  export type TokenFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Token
     */
    select?: TokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Token
     */
    omit?: TokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TokenInclude<ExtArgs> | null
    /**
     * Filter, which Token to fetch.
     */
    where: TokenWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * Token findFirst
   */
  export type TokenFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Token
     */
    select?: TokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Token
     */
    omit?: TokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TokenInclude<ExtArgs> | null
    /**
     * Filter, which Token to fetch.
     */
    where?: TokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tokens to fetch.
     */
    orderBy?: TokenOrderByWithRelationInput | TokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tokens.
     */
    cursor?: TokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tokens.
     */
    distinct?: TokenScalarFieldEnum | TokenScalarFieldEnum[]
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * Token findFirstOrThrow
   */
  export type TokenFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Token
     */
    select?: TokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Token
     */
    omit?: TokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TokenInclude<ExtArgs> | null
    /**
     * Filter, which Token to fetch.
     */
    where?: TokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tokens to fetch.
     */
    orderBy?: TokenOrderByWithRelationInput | TokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tokens.
     */
    cursor?: TokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tokens.
     */
    distinct?: TokenScalarFieldEnum | TokenScalarFieldEnum[]
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * Token findMany
   */
  export type TokenFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Token
     */
    select?: TokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Token
     */
    omit?: TokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TokenInclude<ExtArgs> | null
    /**
     * Filter, which Tokens to fetch.
     */
    where?: TokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tokens to fetch.
     */
    orderBy?: TokenOrderByWithRelationInput | TokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Tokens.
     */
    cursor?: TokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tokens.
     */
    skip?: number
    distinct?: TokenScalarFieldEnum | TokenScalarFieldEnum[]
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * Token create
   */
  export type TokenCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Token
     */
    select?: TokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Token
     */
    omit?: TokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TokenInclude<ExtArgs> | null
    /**
     * The data needed to create a Token.
     */
    data: XOR<TokenCreateInput, TokenUncheckedCreateInput>
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * Token createMany
   */
  export type TokenCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Tokens.
     */
    data: TokenCreateManyInput | TokenCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Token createManyAndReturn
   */
  export type TokenCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Token
     */
    select?: TokenSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Token
     */
    omit?: TokenOmit<ExtArgs> | null
    /**
     * The data used to create many Tokens.
     */
    data: TokenCreateManyInput | TokenCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TokenIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Token update
   */
  export type TokenUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Token
     */
    select?: TokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Token
     */
    omit?: TokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TokenInclude<ExtArgs> | null
    /**
     * The data needed to update a Token.
     */
    data: XOR<TokenUpdateInput, TokenUncheckedUpdateInput>
    /**
     * Choose, which Token to update.
     */
    where: TokenWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * Token updateMany
   */
  export type TokenUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Tokens.
     */
    data: XOR<TokenUpdateManyMutationInput, TokenUncheckedUpdateManyInput>
    /**
     * Filter which Tokens to update
     */
    where?: TokenWhereInput
    /**
     * Limit how many Tokens to update.
     */
    limit?: number
  }

  /**
   * Token updateManyAndReturn
   */
  export type TokenUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Token
     */
    select?: TokenSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Token
     */
    omit?: TokenOmit<ExtArgs> | null
    /**
     * The data used to update Tokens.
     */
    data: XOR<TokenUpdateManyMutationInput, TokenUncheckedUpdateManyInput>
    /**
     * Filter which Tokens to update
     */
    where?: TokenWhereInput
    /**
     * Limit how many Tokens to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TokenIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Token upsert
   */
  export type TokenUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Token
     */
    select?: TokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Token
     */
    omit?: TokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TokenInclude<ExtArgs> | null
    /**
     * The filter to search for the Token to update in case it exists.
     */
    where: TokenWhereUniqueInput
    /**
     * In case the Token found by the `where` argument doesn't exist, create a new Token with this data.
     */
    create: XOR<TokenCreateInput, TokenUncheckedCreateInput>
    /**
     * In case the Token was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TokenUpdateInput, TokenUncheckedUpdateInput>
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * Token delete
   */
  export type TokenDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Token
     */
    select?: TokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Token
     */
    omit?: TokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TokenInclude<ExtArgs> | null
    /**
     * Filter which Token to delete.
     */
    where: TokenWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * Token deleteMany
   */
  export type TokenDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Tokens to delete
     */
    where?: TokenWhereInput
    /**
     * Limit how many Tokens to delete.
     */
    limit?: number
  }

  /**
   * Token without action
   */
  export type TokenDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Token
     */
    select?: TokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Token
     */
    omit?: TokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TokenInclude<ExtArgs> | null
  }


  /**
   * Model Region
   */

  export type AggregateRegion = {
    _count: RegionCountAggregateOutputType | null
    _min: RegionMinAggregateOutputType | null
    _max: RegionMaxAggregateOutputType | null
  }

  export type RegionMinAggregateOutputType = {
    id: string | null
    name: string | null
    state: string | null
    country: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type RegionMaxAggregateOutputType = {
    id: string | null
    name: string | null
    state: string | null
    country: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type RegionCountAggregateOutputType = {
    id: number
    name: number
    state: number
    country: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type RegionMinAggregateInputType = {
    id?: true
    name?: true
    state?: true
    country?: true
    createdAt?: true
    updatedAt?: true
  }

  export type RegionMaxAggregateInputType = {
    id?: true
    name?: true
    state?: true
    country?: true
    createdAt?: true
    updatedAt?: true
  }

  export type RegionCountAggregateInputType = {
    id?: true
    name?: true
    state?: true
    country?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type RegionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Region to aggregate.
     */
    where?: RegionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Regions to fetch.
     */
    orderBy?: RegionOrderByWithRelationInput | RegionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RegionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Regions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Regions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Regions
    **/
    _count?: true | RegionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RegionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RegionMaxAggregateInputType
  }

  export type GetRegionAggregateType<T extends RegionAggregateArgs> = {
        [P in keyof T & keyof AggregateRegion]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRegion[P]>
      : GetScalarType<T[P], AggregateRegion[P]>
  }




  export type RegionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RegionWhereInput
    orderBy?: RegionOrderByWithAggregationInput | RegionOrderByWithAggregationInput[]
    by: RegionScalarFieldEnum[] | RegionScalarFieldEnum
    having?: RegionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RegionCountAggregateInputType | true
    _min?: RegionMinAggregateInputType
    _max?: RegionMaxAggregateInputType
  }

  export type RegionGroupByOutputType = {
    id: string
    name: string
    state: string
    country: string
    createdAt: Date
    updatedAt: Date
    _count: RegionCountAggregateOutputType | null
    _min: RegionMinAggregateOutputType | null
    _max: RegionMaxAggregateOutputType | null
  }

  type GetRegionGroupByPayload<T extends RegionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RegionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RegionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RegionGroupByOutputType[P]>
            : GetScalarType<T[P], RegionGroupByOutputType[P]>
        }
      >
    >


  export type RegionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    state?: boolean
    country?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    branches?: boolean | Region$branchesArgs<ExtArgs>
    schedules?: boolean | Region$schedulesArgs<ExtArgs>
    _count?: boolean | RegionCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["region"]>

  export type RegionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    state?: boolean
    country?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["region"]>

  export type RegionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    state?: boolean
    country?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["region"]>

  export type RegionSelectScalar = {
    id?: boolean
    name?: boolean
    state?: boolean
    country?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type RegionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "state" | "country" | "createdAt" | "updatedAt", ExtArgs["result"]["region"]>
  export type RegionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    branches?: boolean | Region$branchesArgs<ExtArgs>
    schedules?: boolean | Region$schedulesArgs<ExtArgs>
    _count?: boolean | RegionCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type RegionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type RegionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $RegionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Region"
    objects: {
      branches: Prisma.$BranchPayload<ExtArgs>[]
      schedules: Prisma.$SchedulePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      state: string
      country: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["region"]>
    composites: {}
  }

  type RegionGetPayload<S extends boolean | null | undefined | RegionDefaultArgs> = $Result.GetResult<Prisma.$RegionPayload, S>

  type RegionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RegionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit' | 'relationLoadStrategy'> & {
      select?: RegionCountAggregateInputType | true
    }

  export interface RegionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Region'], meta: { name: 'Region' } }
    /**
     * Find zero or one Region that matches the filter.
     * @param {RegionFindUniqueArgs} args - Arguments to find a Region
     * @example
     * // Get one Region
     * const region = await prisma.region.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RegionFindUniqueArgs>(args: SelectSubset<T, RegionFindUniqueArgs<ExtArgs>>): Prisma__RegionClient<$Result.GetResult<Prisma.$RegionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Region that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RegionFindUniqueOrThrowArgs} args - Arguments to find a Region
     * @example
     * // Get one Region
     * const region = await prisma.region.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RegionFindUniqueOrThrowArgs>(args: SelectSubset<T, RegionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RegionClient<$Result.GetResult<Prisma.$RegionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Region that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RegionFindFirstArgs} args - Arguments to find a Region
     * @example
     * // Get one Region
     * const region = await prisma.region.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RegionFindFirstArgs>(args?: SelectSubset<T, RegionFindFirstArgs<ExtArgs>>): Prisma__RegionClient<$Result.GetResult<Prisma.$RegionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Region that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RegionFindFirstOrThrowArgs} args - Arguments to find a Region
     * @example
     * // Get one Region
     * const region = await prisma.region.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RegionFindFirstOrThrowArgs>(args?: SelectSubset<T, RegionFindFirstOrThrowArgs<ExtArgs>>): Prisma__RegionClient<$Result.GetResult<Prisma.$RegionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Regions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RegionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Regions
     * const regions = await prisma.region.findMany()
     * 
     * // Get first 10 Regions
     * const regions = await prisma.region.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const regionWithIdOnly = await prisma.region.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RegionFindManyArgs>(args?: SelectSubset<T, RegionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RegionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Region.
     * @param {RegionCreateArgs} args - Arguments to create a Region.
     * @example
     * // Create one Region
     * const Region = await prisma.region.create({
     *   data: {
     *     // ... data to create a Region
     *   }
     * })
     * 
     */
    create<T extends RegionCreateArgs>(args: SelectSubset<T, RegionCreateArgs<ExtArgs>>): Prisma__RegionClient<$Result.GetResult<Prisma.$RegionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Regions.
     * @param {RegionCreateManyArgs} args - Arguments to create many Regions.
     * @example
     * // Create many Regions
     * const region = await prisma.region.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RegionCreateManyArgs>(args?: SelectSubset<T, RegionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Regions and returns the data saved in the database.
     * @param {RegionCreateManyAndReturnArgs} args - Arguments to create many Regions.
     * @example
     * // Create many Regions
     * const region = await prisma.region.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Regions and only return the `id`
     * const regionWithIdOnly = await prisma.region.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RegionCreateManyAndReturnArgs>(args?: SelectSubset<T, RegionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RegionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Region.
     * @param {RegionDeleteArgs} args - Arguments to delete one Region.
     * @example
     * // Delete one Region
     * const Region = await prisma.region.delete({
     *   where: {
     *     // ... filter to delete one Region
     *   }
     * })
     * 
     */
    delete<T extends RegionDeleteArgs>(args: SelectSubset<T, RegionDeleteArgs<ExtArgs>>): Prisma__RegionClient<$Result.GetResult<Prisma.$RegionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Region.
     * @param {RegionUpdateArgs} args - Arguments to update one Region.
     * @example
     * // Update one Region
     * const region = await prisma.region.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RegionUpdateArgs>(args: SelectSubset<T, RegionUpdateArgs<ExtArgs>>): Prisma__RegionClient<$Result.GetResult<Prisma.$RegionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Regions.
     * @param {RegionDeleteManyArgs} args - Arguments to filter Regions to delete.
     * @example
     * // Delete a few Regions
     * const { count } = await prisma.region.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RegionDeleteManyArgs>(args?: SelectSubset<T, RegionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Regions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RegionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Regions
     * const region = await prisma.region.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RegionUpdateManyArgs>(args: SelectSubset<T, RegionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Regions and returns the data updated in the database.
     * @param {RegionUpdateManyAndReturnArgs} args - Arguments to update many Regions.
     * @example
     * // Update many Regions
     * const region = await prisma.region.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Regions and only return the `id`
     * const regionWithIdOnly = await prisma.region.updateManyAndReturn({
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
    updateManyAndReturn<T extends RegionUpdateManyAndReturnArgs>(args: SelectSubset<T, RegionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RegionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Region.
     * @param {RegionUpsertArgs} args - Arguments to update or create a Region.
     * @example
     * // Update or create a Region
     * const region = await prisma.region.upsert({
     *   create: {
     *     // ... data to create a Region
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Region we want to update
     *   }
     * })
     */
    upsert<T extends RegionUpsertArgs>(args: SelectSubset<T, RegionUpsertArgs<ExtArgs>>): Prisma__RegionClient<$Result.GetResult<Prisma.$RegionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Regions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RegionCountArgs} args - Arguments to filter Regions to count.
     * @example
     * // Count the number of Regions
     * const count = await prisma.region.count({
     *   where: {
     *     // ... the filter for the Regions we want to count
     *   }
     * })
    **/
    count<T extends RegionCountArgs>(
      args?: Subset<T, RegionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RegionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Region.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RegionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends RegionAggregateArgs>(args: Subset<T, RegionAggregateArgs>): Prisma.PrismaPromise<GetRegionAggregateType<T>>

    /**
     * Group by Region.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RegionGroupByArgs} args - Group by arguments.
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
      T extends RegionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RegionGroupByArgs['orderBy'] }
        : { orderBy?: RegionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, RegionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRegionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Region model
   */
  readonly fields: RegionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Region.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RegionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    branches<T extends Region$branchesArgs<ExtArgs> = {}>(args?: Subset<T, Region$branchesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BranchPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    schedules<T extends Region$schedulesArgs<ExtArgs> = {}>(args?: Subset<T, Region$schedulesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SchedulePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Region model
   */
  interface RegionFieldRefs {
    readonly id: FieldRef<"Region", 'String'>
    readonly name: FieldRef<"Region", 'String'>
    readonly state: FieldRef<"Region", 'String'>
    readonly country: FieldRef<"Region", 'String'>
    readonly createdAt: FieldRef<"Region", 'DateTime'>
    readonly updatedAt: FieldRef<"Region", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Region findUnique
   */
  export type RegionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Region
     */
    select?: RegionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Region
     */
    omit?: RegionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegionInclude<ExtArgs> | null
    /**
     * Filter, which Region to fetch.
     */
    where: RegionWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * Region findUniqueOrThrow
   */
  export type RegionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Region
     */
    select?: RegionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Region
     */
    omit?: RegionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegionInclude<ExtArgs> | null
    /**
     * Filter, which Region to fetch.
     */
    where: RegionWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * Region findFirst
   */
  export type RegionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Region
     */
    select?: RegionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Region
     */
    omit?: RegionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegionInclude<ExtArgs> | null
    /**
     * Filter, which Region to fetch.
     */
    where?: RegionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Regions to fetch.
     */
    orderBy?: RegionOrderByWithRelationInput | RegionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Regions.
     */
    cursor?: RegionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Regions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Regions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Regions.
     */
    distinct?: RegionScalarFieldEnum | RegionScalarFieldEnum[]
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * Region findFirstOrThrow
   */
  export type RegionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Region
     */
    select?: RegionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Region
     */
    omit?: RegionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegionInclude<ExtArgs> | null
    /**
     * Filter, which Region to fetch.
     */
    where?: RegionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Regions to fetch.
     */
    orderBy?: RegionOrderByWithRelationInput | RegionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Regions.
     */
    cursor?: RegionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Regions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Regions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Regions.
     */
    distinct?: RegionScalarFieldEnum | RegionScalarFieldEnum[]
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * Region findMany
   */
  export type RegionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Region
     */
    select?: RegionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Region
     */
    omit?: RegionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegionInclude<ExtArgs> | null
    /**
     * Filter, which Regions to fetch.
     */
    where?: RegionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Regions to fetch.
     */
    orderBy?: RegionOrderByWithRelationInput | RegionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Regions.
     */
    cursor?: RegionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Regions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Regions.
     */
    skip?: number
    distinct?: RegionScalarFieldEnum | RegionScalarFieldEnum[]
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * Region create
   */
  export type RegionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Region
     */
    select?: RegionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Region
     */
    omit?: RegionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegionInclude<ExtArgs> | null
    /**
     * The data needed to create a Region.
     */
    data: XOR<RegionCreateInput, RegionUncheckedCreateInput>
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * Region createMany
   */
  export type RegionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Regions.
     */
    data: RegionCreateManyInput | RegionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Region createManyAndReturn
   */
  export type RegionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Region
     */
    select?: RegionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Region
     */
    omit?: RegionOmit<ExtArgs> | null
    /**
     * The data used to create many Regions.
     */
    data: RegionCreateManyInput | RegionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Region update
   */
  export type RegionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Region
     */
    select?: RegionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Region
     */
    omit?: RegionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegionInclude<ExtArgs> | null
    /**
     * The data needed to update a Region.
     */
    data: XOR<RegionUpdateInput, RegionUncheckedUpdateInput>
    /**
     * Choose, which Region to update.
     */
    where: RegionWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * Region updateMany
   */
  export type RegionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Regions.
     */
    data: XOR<RegionUpdateManyMutationInput, RegionUncheckedUpdateManyInput>
    /**
     * Filter which Regions to update
     */
    where?: RegionWhereInput
    /**
     * Limit how many Regions to update.
     */
    limit?: number
  }

  /**
   * Region updateManyAndReturn
   */
  export type RegionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Region
     */
    select?: RegionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Region
     */
    omit?: RegionOmit<ExtArgs> | null
    /**
     * The data used to update Regions.
     */
    data: XOR<RegionUpdateManyMutationInput, RegionUncheckedUpdateManyInput>
    /**
     * Filter which Regions to update
     */
    where?: RegionWhereInput
    /**
     * Limit how many Regions to update.
     */
    limit?: number
  }

  /**
   * Region upsert
   */
  export type RegionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Region
     */
    select?: RegionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Region
     */
    omit?: RegionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegionInclude<ExtArgs> | null
    /**
     * The filter to search for the Region to update in case it exists.
     */
    where: RegionWhereUniqueInput
    /**
     * In case the Region found by the `where` argument doesn't exist, create a new Region with this data.
     */
    create: XOR<RegionCreateInput, RegionUncheckedCreateInput>
    /**
     * In case the Region was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RegionUpdateInput, RegionUncheckedUpdateInput>
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * Region delete
   */
  export type RegionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Region
     */
    select?: RegionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Region
     */
    omit?: RegionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegionInclude<ExtArgs> | null
    /**
     * Filter which Region to delete.
     */
    where: RegionWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * Region deleteMany
   */
  export type RegionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Regions to delete
     */
    where?: RegionWhereInput
    /**
     * Limit how many Regions to delete.
     */
    limit?: number
  }

  /**
   * Region.branches
   */
  export type Region$branchesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Branch
     */
    select?: BranchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Branch
     */
    omit?: BranchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BranchInclude<ExtArgs> | null
    where?: BranchWhereInput
    orderBy?: BranchOrderByWithRelationInput | BranchOrderByWithRelationInput[]
    cursor?: BranchWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BranchScalarFieldEnum | BranchScalarFieldEnum[]
  }

  /**
   * Region.schedules
   */
  export type Region$schedulesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Schedule
     */
    select?: ScheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Schedule
     */
    omit?: ScheduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScheduleInclude<ExtArgs> | null
    where?: ScheduleWhereInput
    orderBy?: ScheduleOrderByWithRelationInput | ScheduleOrderByWithRelationInput[]
    cursor?: ScheduleWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ScheduleScalarFieldEnum | ScheduleScalarFieldEnum[]
  }

  /**
   * Region without action
   */
  export type RegionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Region
     */
    select?: RegionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Region
     */
    omit?: RegionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegionInclude<ExtArgs> | null
  }


  /**
   * Model Schedule
   */

  export type AggregateSchedule = {
    _count: ScheduleCountAggregateOutputType | null
    _avg: ScheduleAvgAggregateOutputType | null
    _sum: ScheduleSumAggregateOutputType | null
    _min: ScheduleMinAggregateOutputType | null
    _max: ScheduleMaxAggregateOutputType | null
  }

  export type ScheduleAvgAggregateOutputType = {
    dayOfMonth: number | null
  }

  export type ScheduleSumAggregateOutputType = {
    dayOfMonth: number | null
  }

  export type ScheduleMinAggregateOutputType = {
    id: string | null
    regionId: string | null
    dayOfMonth: number | null
    createdOrgId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ScheduleMaxAggregateOutputType = {
    id: string | null
    regionId: string | null
    dayOfMonth: number | null
    createdOrgId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ScheduleCountAggregateOutputType = {
    id: number
    regionId: number
    dayOfMonth: number
    createdOrgId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ScheduleAvgAggregateInputType = {
    dayOfMonth?: true
  }

  export type ScheduleSumAggregateInputType = {
    dayOfMonth?: true
  }

  export type ScheduleMinAggregateInputType = {
    id?: true
    regionId?: true
    dayOfMonth?: true
    createdOrgId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ScheduleMaxAggregateInputType = {
    id?: true
    regionId?: true
    dayOfMonth?: true
    createdOrgId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ScheduleCountAggregateInputType = {
    id?: true
    regionId?: true
    dayOfMonth?: true
    createdOrgId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ScheduleAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Schedule to aggregate.
     */
    where?: ScheduleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Schedules to fetch.
     */
    orderBy?: ScheduleOrderByWithRelationInput | ScheduleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ScheduleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Schedules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Schedules.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Schedules
    **/
    _count?: true | ScheduleCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ScheduleAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ScheduleSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ScheduleMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ScheduleMaxAggregateInputType
  }

  export type GetScheduleAggregateType<T extends ScheduleAggregateArgs> = {
        [P in keyof T & keyof AggregateSchedule]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSchedule[P]>
      : GetScalarType<T[P], AggregateSchedule[P]>
  }




  export type ScheduleGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ScheduleWhereInput
    orderBy?: ScheduleOrderByWithAggregationInput | ScheduleOrderByWithAggregationInput[]
    by: ScheduleScalarFieldEnum[] | ScheduleScalarFieldEnum
    having?: ScheduleScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ScheduleCountAggregateInputType | true
    _avg?: ScheduleAvgAggregateInputType
    _sum?: ScheduleSumAggregateInputType
    _min?: ScheduleMinAggregateInputType
    _max?: ScheduleMaxAggregateInputType
  }

  export type ScheduleGroupByOutputType = {
    id: string
    regionId: string
    dayOfMonth: number
    createdOrgId: string
    createdAt: Date
    updatedAt: Date
    _count: ScheduleCountAggregateOutputType | null
    _avg: ScheduleAvgAggregateOutputType | null
    _sum: ScheduleSumAggregateOutputType | null
    _min: ScheduleMinAggregateOutputType | null
    _max: ScheduleMaxAggregateOutputType | null
  }

  type GetScheduleGroupByPayload<T extends ScheduleGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ScheduleGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ScheduleGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ScheduleGroupByOutputType[P]>
            : GetScalarType<T[P], ScheduleGroupByOutputType[P]>
        }
      >
    >


  export type ScheduleSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    regionId?: boolean
    dayOfMonth?: boolean
    createdOrgId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    region?: boolean | RegionDefaultArgs<ExtArgs>
    createdOrg?: boolean | OrganisationDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["schedule"]>

  export type ScheduleSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    regionId?: boolean
    dayOfMonth?: boolean
    createdOrgId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    region?: boolean | RegionDefaultArgs<ExtArgs>
    createdOrg?: boolean | OrganisationDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["schedule"]>

  export type ScheduleSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    regionId?: boolean
    dayOfMonth?: boolean
    createdOrgId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    region?: boolean | RegionDefaultArgs<ExtArgs>
    createdOrg?: boolean | OrganisationDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["schedule"]>

  export type ScheduleSelectScalar = {
    id?: boolean
    regionId?: boolean
    dayOfMonth?: boolean
    createdOrgId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ScheduleOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "regionId" | "dayOfMonth" | "createdOrgId" | "createdAt" | "updatedAt", ExtArgs["result"]["schedule"]>
  export type ScheduleInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    region?: boolean | RegionDefaultArgs<ExtArgs>
    createdOrg?: boolean | OrganisationDefaultArgs<ExtArgs>
  }
  export type ScheduleIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    region?: boolean | RegionDefaultArgs<ExtArgs>
    createdOrg?: boolean | OrganisationDefaultArgs<ExtArgs>
  }
  export type ScheduleIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    region?: boolean | RegionDefaultArgs<ExtArgs>
    createdOrg?: boolean | OrganisationDefaultArgs<ExtArgs>
  }

  export type $SchedulePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Schedule"
    objects: {
      region: Prisma.$RegionPayload<ExtArgs>
      createdOrg: Prisma.$OrganisationPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      regionId: string
      dayOfMonth: number
      createdOrgId: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["schedule"]>
    composites: {}
  }

  type ScheduleGetPayload<S extends boolean | null | undefined | ScheduleDefaultArgs> = $Result.GetResult<Prisma.$SchedulePayload, S>

  type ScheduleCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ScheduleFindManyArgs, 'select' | 'include' | 'distinct' | 'omit' | 'relationLoadStrategy'> & {
      select?: ScheduleCountAggregateInputType | true
    }

  export interface ScheduleDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Schedule'], meta: { name: 'Schedule' } }
    /**
     * Find zero or one Schedule that matches the filter.
     * @param {ScheduleFindUniqueArgs} args - Arguments to find a Schedule
     * @example
     * // Get one Schedule
     * const schedule = await prisma.schedule.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ScheduleFindUniqueArgs>(args: SelectSubset<T, ScheduleFindUniqueArgs<ExtArgs>>): Prisma__ScheduleClient<$Result.GetResult<Prisma.$SchedulePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Schedule that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ScheduleFindUniqueOrThrowArgs} args - Arguments to find a Schedule
     * @example
     * // Get one Schedule
     * const schedule = await prisma.schedule.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ScheduleFindUniqueOrThrowArgs>(args: SelectSubset<T, ScheduleFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ScheduleClient<$Result.GetResult<Prisma.$SchedulePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Schedule that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScheduleFindFirstArgs} args - Arguments to find a Schedule
     * @example
     * // Get one Schedule
     * const schedule = await prisma.schedule.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ScheduleFindFirstArgs>(args?: SelectSubset<T, ScheduleFindFirstArgs<ExtArgs>>): Prisma__ScheduleClient<$Result.GetResult<Prisma.$SchedulePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Schedule that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScheduleFindFirstOrThrowArgs} args - Arguments to find a Schedule
     * @example
     * // Get one Schedule
     * const schedule = await prisma.schedule.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ScheduleFindFirstOrThrowArgs>(args?: SelectSubset<T, ScheduleFindFirstOrThrowArgs<ExtArgs>>): Prisma__ScheduleClient<$Result.GetResult<Prisma.$SchedulePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Schedules that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScheduleFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Schedules
     * const schedules = await prisma.schedule.findMany()
     * 
     * // Get first 10 Schedules
     * const schedules = await prisma.schedule.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const scheduleWithIdOnly = await prisma.schedule.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ScheduleFindManyArgs>(args?: SelectSubset<T, ScheduleFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SchedulePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Schedule.
     * @param {ScheduleCreateArgs} args - Arguments to create a Schedule.
     * @example
     * // Create one Schedule
     * const Schedule = await prisma.schedule.create({
     *   data: {
     *     // ... data to create a Schedule
     *   }
     * })
     * 
     */
    create<T extends ScheduleCreateArgs>(args: SelectSubset<T, ScheduleCreateArgs<ExtArgs>>): Prisma__ScheduleClient<$Result.GetResult<Prisma.$SchedulePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Schedules.
     * @param {ScheduleCreateManyArgs} args - Arguments to create many Schedules.
     * @example
     * // Create many Schedules
     * const schedule = await prisma.schedule.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ScheduleCreateManyArgs>(args?: SelectSubset<T, ScheduleCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Schedules and returns the data saved in the database.
     * @param {ScheduleCreateManyAndReturnArgs} args - Arguments to create many Schedules.
     * @example
     * // Create many Schedules
     * const schedule = await prisma.schedule.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Schedules and only return the `id`
     * const scheduleWithIdOnly = await prisma.schedule.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ScheduleCreateManyAndReturnArgs>(args?: SelectSubset<T, ScheduleCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SchedulePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Schedule.
     * @param {ScheduleDeleteArgs} args - Arguments to delete one Schedule.
     * @example
     * // Delete one Schedule
     * const Schedule = await prisma.schedule.delete({
     *   where: {
     *     // ... filter to delete one Schedule
     *   }
     * })
     * 
     */
    delete<T extends ScheduleDeleteArgs>(args: SelectSubset<T, ScheduleDeleteArgs<ExtArgs>>): Prisma__ScheduleClient<$Result.GetResult<Prisma.$SchedulePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Schedule.
     * @param {ScheduleUpdateArgs} args - Arguments to update one Schedule.
     * @example
     * // Update one Schedule
     * const schedule = await prisma.schedule.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ScheduleUpdateArgs>(args: SelectSubset<T, ScheduleUpdateArgs<ExtArgs>>): Prisma__ScheduleClient<$Result.GetResult<Prisma.$SchedulePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Schedules.
     * @param {ScheduleDeleteManyArgs} args - Arguments to filter Schedules to delete.
     * @example
     * // Delete a few Schedules
     * const { count } = await prisma.schedule.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ScheduleDeleteManyArgs>(args?: SelectSubset<T, ScheduleDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Schedules.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScheduleUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Schedules
     * const schedule = await prisma.schedule.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ScheduleUpdateManyArgs>(args: SelectSubset<T, ScheduleUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Schedules and returns the data updated in the database.
     * @param {ScheduleUpdateManyAndReturnArgs} args - Arguments to update many Schedules.
     * @example
     * // Update many Schedules
     * const schedule = await prisma.schedule.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Schedules and only return the `id`
     * const scheduleWithIdOnly = await prisma.schedule.updateManyAndReturn({
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
    updateManyAndReturn<T extends ScheduleUpdateManyAndReturnArgs>(args: SelectSubset<T, ScheduleUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SchedulePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Schedule.
     * @param {ScheduleUpsertArgs} args - Arguments to update or create a Schedule.
     * @example
     * // Update or create a Schedule
     * const schedule = await prisma.schedule.upsert({
     *   create: {
     *     // ... data to create a Schedule
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Schedule we want to update
     *   }
     * })
     */
    upsert<T extends ScheduleUpsertArgs>(args: SelectSubset<T, ScheduleUpsertArgs<ExtArgs>>): Prisma__ScheduleClient<$Result.GetResult<Prisma.$SchedulePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Schedules.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScheduleCountArgs} args - Arguments to filter Schedules to count.
     * @example
     * // Count the number of Schedules
     * const count = await prisma.schedule.count({
     *   where: {
     *     // ... the filter for the Schedules we want to count
     *   }
     * })
    **/
    count<T extends ScheduleCountArgs>(
      args?: Subset<T, ScheduleCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ScheduleCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Schedule.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScheduleAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ScheduleAggregateArgs>(args: Subset<T, ScheduleAggregateArgs>): Prisma.PrismaPromise<GetScheduleAggregateType<T>>

    /**
     * Group by Schedule.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScheduleGroupByArgs} args - Group by arguments.
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
      T extends ScheduleGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ScheduleGroupByArgs['orderBy'] }
        : { orderBy?: ScheduleGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ScheduleGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetScheduleGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Schedule model
   */
  readonly fields: ScheduleFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Schedule.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ScheduleClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    region<T extends RegionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, RegionDefaultArgs<ExtArgs>>): Prisma__RegionClient<$Result.GetResult<Prisma.$RegionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    createdOrg<T extends OrganisationDefaultArgs<ExtArgs> = {}>(args?: Subset<T, OrganisationDefaultArgs<ExtArgs>>): Prisma__OrganisationClient<$Result.GetResult<Prisma.$OrganisationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Schedule model
   */
  interface ScheduleFieldRefs {
    readonly id: FieldRef<"Schedule", 'String'>
    readonly regionId: FieldRef<"Schedule", 'String'>
    readonly dayOfMonth: FieldRef<"Schedule", 'Int'>
    readonly createdOrgId: FieldRef<"Schedule", 'String'>
    readonly createdAt: FieldRef<"Schedule", 'DateTime'>
    readonly updatedAt: FieldRef<"Schedule", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Schedule findUnique
   */
  export type ScheduleFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Schedule
     */
    select?: ScheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Schedule
     */
    omit?: ScheduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScheduleInclude<ExtArgs> | null
    /**
     * Filter, which Schedule to fetch.
     */
    where: ScheduleWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * Schedule findUniqueOrThrow
   */
  export type ScheduleFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Schedule
     */
    select?: ScheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Schedule
     */
    omit?: ScheduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScheduleInclude<ExtArgs> | null
    /**
     * Filter, which Schedule to fetch.
     */
    where: ScheduleWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * Schedule findFirst
   */
  export type ScheduleFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Schedule
     */
    select?: ScheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Schedule
     */
    omit?: ScheduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScheduleInclude<ExtArgs> | null
    /**
     * Filter, which Schedule to fetch.
     */
    where?: ScheduleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Schedules to fetch.
     */
    orderBy?: ScheduleOrderByWithRelationInput | ScheduleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Schedules.
     */
    cursor?: ScheduleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Schedules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Schedules.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Schedules.
     */
    distinct?: ScheduleScalarFieldEnum | ScheduleScalarFieldEnum[]
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * Schedule findFirstOrThrow
   */
  export type ScheduleFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Schedule
     */
    select?: ScheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Schedule
     */
    omit?: ScheduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScheduleInclude<ExtArgs> | null
    /**
     * Filter, which Schedule to fetch.
     */
    where?: ScheduleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Schedules to fetch.
     */
    orderBy?: ScheduleOrderByWithRelationInput | ScheduleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Schedules.
     */
    cursor?: ScheduleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Schedules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Schedules.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Schedules.
     */
    distinct?: ScheduleScalarFieldEnum | ScheduleScalarFieldEnum[]
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * Schedule findMany
   */
  export type ScheduleFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Schedule
     */
    select?: ScheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Schedule
     */
    omit?: ScheduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScheduleInclude<ExtArgs> | null
    /**
     * Filter, which Schedules to fetch.
     */
    where?: ScheduleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Schedules to fetch.
     */
    orderBy?: ScheduleOrderByWithRelationInput | ScheduleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Schedules.
     */
    cursor?: ScheduleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Schedules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Schedules.
     */
    skip?: number
    distinct?: ScheduleScalarFieldEnum | ScheduleScalarFieldEnum[]
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * Schedule create
   */
  export type ScheduleCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Schedule
     */
    select?: ScheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Schedule
     */
    omit?: ScheduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScheduleInclude<ExtArgs> | null
    /**
     * The data needed to create a Schedule.
     */
    data: XOR<ScheduleCreateInput, ScheduleUncheckedCreateInput>
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * Schedule createMany
   */
  export type ScheduleCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Schedules.
     */
    data: ScheduleCreateManyInput | ScheduleCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Schedule createManyAndReturn
   */
  export type ScheduleCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Schedule
     */
    select?: ScheduleSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Schedule
     */
    omit?: ScheduleOmit<ExtArgs> | null
    /**
     * The data used to create many Schedules.
     */
    data: ScheduleCreateManyInput | ScheduleCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScheduleIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Schedule update
   */
  export type ScheduleUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Schedule
     */
    select?: ScheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Schedule
     */
    omit?: ScheduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScheduleInclude<ExtArgs> | null
    /**
     * The data needed to update a Schedule.
     */
    data: XOR<ScheduleUpdateInput, ScheduleUncheckedUpdateInput>
    /**
     * Choose, which Schedule to update.
     */
    where: ScheduleWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * Schedule updateMany
   */
  export type ScheduleUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Schedules.
     */
    data: XOR<ScheduleUpdateManyMutationInput, ScheduleUncheckedUpdateManyInput>
    /**
     * Filter which Schedules to update
     */
    where?: ScheduleWhereInput
    /**
     * Limit how many Schedules to update.
     */
    limit?: number
  }

  /**
   * Schedule updateManyAndReturn
   */
  export type ScheduleUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Schedule
     */
    select?: ScheduleSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Schedule
     */
    omit?: ScheduleOmit<ExtArgs> | null
    /**
     * The data used to update Schedules.
     */
    data: XOR<ScheduleUpdateManyMutationInput, ScheduleUncheckedUpdateManyInput>
    /**
     * Filter which Schedules to update
     */
    where?: ScheduleWhereInput
    /**
     * Limit how many Schedules to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScheduleIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Schedule upsert
   */
  export type ScheduleUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Schedule
     */
    select?: ScheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Schedule
     */
    omit?: ScheduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScheduleInclude<ExtArgs> | null
    /**
     * The filter to search for the Schedule to update in case it exists.
     */
    where: ScheduleWhereUniqueInput
    /**
     * In case the Schedule found by the `where` argument doesn't exist, create a new Schedule with this data.
     */
    create: XOR<ScheduleCreateInput, ScheduleUncheckedCreateInput>
    /**
     * In case the Schedule was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ScheduleUpdateInput, ScheduleUncheckedUpdateInput>
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * Schedule delete
   */
  export type ScheduleDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Schedule
     */
    select?: ScheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Schedule
     */
    omit?: ScheduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScheduleInclude<ExtArgs> | null
    /**
     * Filter which Schedule to delete.
     */
    where: ScheduleWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * Schedule deleteMany
   */
  export type ScheduleDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Schedules to delete
     */
    where?: ScheduleWhereInput
    /**
     * Limit how many Schedules to delete.
     */
    limit?: number
  }

  /**
   * Schedule without action
   */
  export type ScheduleDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Schedule
     */
    select?: ScheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Schedule
     */
    omit?: ScheduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScheduleInclude<ExtArgs> | null
  }


  /**
   * Model Branch
   */

  export type AggregateBranch = {
    _count: BranchCountAggregateOutputType | null
    _min: BranchMinAggregateOutputType | null
    _max: BranchMaxAggregateOutputType | null
  }

  export type BranchMinAggregateOutputType = {
    id: string | null
    address: string | null
    city: string | null
    postalCode: string | null
    landlineNumber: string | null
    regionId: string | null
    createdAt: Date | null
    updatedAt: Date | null
    organisationId: string | null
    type: $Enums.BranchType | null
    pointOfContactId: string | null
  }

  export type BranchMaxAggregateOutputType = {
    id: string | null
    address: string | null
    city: string | null
    postalCode: string | null
    landlineNumber: string | null
    regionId: string | null
    createdAt: Date | null
    updatedAt: Date | null
    organisationId: string | null
    type: $Enums.BranchType | null
    pointOfContactId: string | null
  }

  export type BranchCountAggregateOutputType = {
    id: number
    address: number
    city: number
    postalCode: number
    landlineNumber: number
    regionId: number
    createdAt: number
    updatedAt: number
    organisationId: number
    type: number
    pointOfContactId: number
    _all: number
  }


  export type BranchMinAggregateInputType = {
    id?: true
    address?: true
    city?: true
    postalCode?: true
    landlineNumber?: true
    regionId?: true
    createdAt?: true
    updatedAt?: true
    organisationId?: true
    type?: true
    pointOfContactId?: true
  }

  export type BranchMaxAggregateInputType = {
    id?: true
    address?: true
    city?: true
    postalCode?: true
    landlineNumber?: true
    regionId?: true
    createdAt?: true
    updatedAt?: true
    organisationId?: true
    type?: true
    pointOfContactId?: true
  }

  export type BranchCountAggregateInputType = {
    id?: true
    address?: true
    city?: true
    postalCode?: true
    landlineNumber?: true
    regionId?: true
    createdAt?: true
    updatedAt?: true
    organisationId?: true
    type?: true
    pointOfContactId?: true
    _all?: true
  }

  export type BranchAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Branch to aggregate.
     */
    where?: BranchWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Branches to fetch.
     */
    orderBy?: BranchOrderByWithRelationInput | BranchOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BranchWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Branches from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Branches.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Branches
    **/
    _count?: true | BranchCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BranchMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BranchMaxAggregateInputType
  }

  export type GetBranchAggregateType<T extends BranchAggregateArgs> = {
        [P in keyof T & keyof AggregateBranch]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBranch[P]>
      : GetScalarType<T[P], AggregateBranch[P]>
  }




  export type BranchGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BranchWhereInput
    orderBy?: BranchOrderByWithAggregationInput | BranchOrderByWithAggregationInput[]
    by: BranchScalarFieldEnum[] | BranchScalarFieldEnum
    having?: BranchScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BranchCountAggregateInputType | true
    _min?: BranchMinAggregateInputType
    _max?: BranchMaxAggregateInputType
  }

  export type BranchGroupByOutputType = {
    id: string
    address: string | null
    city: string
    postalCode: string | null
    landlineNumber: string | null
    regionId: string
    createdAt: Date
    updatedAt: Date
    organisationId: string
    type: $Enums.BranchType
    pointOfContactId: string | null
    _count: BranchCountAggregateOutputType | null
    _min: BranchMinAggregateOutputType | null
    _max: BranchMaxAggregateOutputType | null
  }

  type GetBranchGroupByPayload<T extends BranchGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BranchGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BranchGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BranchGroupByOutputType[P]>
            : GetScalarType<T[P], BranchGroupByOutputType[P]>
        }
      >
    >


  export type BranchSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    address?: boolean
    city?: boolean
    postalCode?: boolean
    landlineNumber?: boolean
    regionId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    organisationId?: boolean
    type?: boolean
    pointOfContactId?: boolean
    region?: boolean | RegionDefaultArgs<ExtArgs>
    organisation?: boolean | OrganisationDefaultArgs<ExtArgs>
    contacts?: boolean | Branch$contactsArgs<ExtArgs>
    pointOfContact?: boolean | Branch$pointOfContactArgs<ExtArgs>
    _count?: boolean | BranchCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["branch"]>

  export type BranchSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    address?: boolean
    city?: boolean
    postalCode?: boolean
    landlineNumber?: boolean
    regionId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    organisationId?: boolean
    type?: boolean
    pointOfContactId?: boolean
    region?: boolean | RegionDefaultArgs<ExtArgs>
    organisation?: boolean | OrganisationDefaultArgs<ExtArgs>
    pointOfContact?: boolean | Branch$pointOfContactArgs<ExtArgs>
  }, ExtArgs["result"]["branch"]>

  export type BranchSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    address?: boolean
    city?: boolean
    postalCode?: boolean
    landlineNumber?: boolean
    regionId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    organisationId?: boolean
    type?: boolean
    pointOfContactId?: boolean
    region?: boolean | RegionDefaultArgs<ExtArgs>
    organisation?: boolean | OrganisationDefaultArgs<ExtArgs>
    pointOfContact?: boolean | Branch$pointOfContactArgs<ExtArgs>
  }, ExtArgs["result"]["branch"]>

  export type BranchSelectScalar = {
    id?: boolean
    address?: boolean
    city?: boolean
    postalCode?: boolean
    landlineNumber?: boolean
    regionId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    organisationId?: boolean
    type?: boolean
    pointOfContactId?: boolean
  }

  export type BranchOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "address" | "city" | "postalCode" | "landlineNumber" | "regionId" | "createdAt" | "updatedAt" | "organisationId" | "type" | "pointOfContactId", ExtArgs["result"]["branch"]>
  export type BranchInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    region?: boolean | RegionDefaultArgs<ExtArgs>
    organisation?: boolean | OrganisationDefaultArgs<ExtArgs>
    contacts?: boolean | Branch$contactsArgs<ExtArgs>
    pointOfContact?: boolean | Branch$pointOfContactArgs<ExtArgs>
    _count?: boolean | BranchCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type BranchIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    region?: boolean | RegionDefaultArgs<ExtArgs>
    organisation?: boolean | OrganisationDefaultArgs<ExtArgs>
    pointOfContact?: boolean | Branch$pointOfContactArgs<ExtArgs>
  }
  export type BranchIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    region?: boolean | RegionDefaultArgs<ExtArgs>
    organisation?: boolean | OrganisationDefaultArgs<ExtArgs>
    pointOfContact?: boolean | Branch$pointOfContactArgs<ExtArgs>
  }

  export type $BranchPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Branch"
    objects: {
      region: Prisma.$RegionPayload<ExtArgs>
      organisation: Prisma.$OrganisationPayload<ExtArgs>
      contacts: Prisma.$ContactPayload<ExtArgs>[]
      pointOfContact: Prisma.$ContactPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      address: string | null
      city: string
      postalCode: string | null
      landlineNumber: string | null
      regionId: string
      createdAt: Date
      updatedAt: Date
      organisationId: string
      type: $Enums.BranchType
      pointOfContactId: string | null
    }, ExtArgs["result"]["branch"]>
    composites: {}
  }

  type BranchGetPayload<S extends boolean | null | undefined | BranchDefaultArgs> = $Result.GetResult<Prisma.$BranchPayload, S>

  type BranchCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BranchFindManyArgs, 'select' | 'include' | 'distinct' | 'omit' | 'relationLoadStrategy'> & {
      select?: BranchCountAggregateInputType | true
    }

  export interface BranchDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Branch'], meta: { name: 'Branch' } }
    /**
     * Find zero or one Branch that matches the filter.
     * @param {BranchFindUniqueArgs} args - Arguments to find a Branch
     * @example
     * // Get one Branch
     * const branch = await prisma.branch.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BranchFindUniqueArgs>(args: SelectSubset<T, BranchFindUniqueArgs<ExtArgs>>): Prisma__BranchClient<$Result.GetResult<Prisma.$BranchPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Branch that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BranchFindUniqueOrThrowArgs} args - Arguments to find a Branch
     * @example
     * // Get one Branch
     * const branch = await prisma.branch.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BranchFindUniqueOrThrowArgs>(args: SelectSubset<T, BranchFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BranchClient<$Result.GetResult<Prisma.$BranchPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Branch that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BranchFindFirstArgs} args - Arguments to find a Branch
     * @example
     * // Get one Branch
     * const branch = await prisma.branch.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BranchFindFirstArgs>(args?: SelectSubset<T, BranchFindFirstArgs<ExtArgs>>): Prisma__BranchClient<$Result.GetResult<Prisma.$BranchPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Branch that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BranchFindFirstOrThrowArgs} args - Arguments to find a Branch
     * @example
     * // Get one Branch
     * const branch = await prisma.branch.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BranchFindFirstOrThrowArgs>(args?: SelectSubset<T, BranchFindFirstOrThrowArgs<ExtArgs>>): Prisma__BranchClient<$Result.GetResult<Prisma.$BranchPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Branches that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BranchFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Branches
     * const branches = await prisma.branch.findMany()
     * 
     * // Get first 10 Branches
     * const branches = await prisma.branch.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const branchWithIdOnly = await prisma.branch.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BranchFindManyArgs>(args?: SelectSubset<T, BranchFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BranchPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Branch.
     * @param {BranchCreateArgs} args - Arguments to create a Branch.
     * @example
     * // Create one Branch
     * const Branch = await prisma.branch.create({
     *   data: {
     *     // ... data to create a Branch
     *   }
     * })
     * 
     */
    create<T extends BranchCreateArgs>(args: SelectSubset<T, BranchCreateArgs<ExtArgs>>): Prisma__BranchClient<$Result.GetResult<Prisma.$BranchPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Branches.
     * @param {BranchCreateManyArgs} args - Arguments to create many Branches.
     * @example
     * // Create many Branches
     * const branch = await prisma.branch.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BranchCreateManyArgs>(args?: SelectSubset<T, BranchCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Branches and returns the data saved in the database.
     * @param {BranchCreateManyAndReturnArgs} args - Arguments to create many Branches.
     * @example
     * // Create many Branches
     * const branch = await prisma.branch.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Branches and only return the `id`
     * const branchWithIdOnly = await prisma.branch.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends BranchCreateManyAndReturnArgs>(args?: SelectSubset<T, BranchCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BranchPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Branch.
     * @param {BranchDeleteArgs} args - Arguments to delete one Branch.
     * @example
     * // Delete one Branch
     * const Branch = await prisma.branch.delete({
     *   where: {
     *     // ... filter to delete one Branch
     *   }
     * })
     * 
     */
    delete<T extends BranchDeleteArgs>(args: SelectSubset<T, BranchDeleteArgs<ExtArgs>>): Prisma__BranchClient<$Result.GetResult<Prisma.$BranchPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Branch.
     * @param {BranchUpdateArgs} args - Arguments to update one Branch.
     * @example
     * // Update one Branch
     * const branch = await prisma.branch.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BranchUpdateArgs>(args: SelectSubset<T, BranchUpdateArgs<ExtArgs>>): Prisma__BranchClient<$Result.GetResult<Prisma.$BranchPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Branches.
     * @param {BranchDeleteManyArgs} args - Arguments to filter Branches to delete.
     * @example
     * // Delete a few Branches
     * const { count } = await prisma.branch.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BranchDeleteManyArgs>(args?: SelectSubset<T, BranchDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Branches.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BranchUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Branches
     * const branch = await prisma.branch.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BranchUpdateManyArgs>(args: SelectSubset<T, BranchUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Branches and returns the data updated in the database.
     * @param {BranchUpdateManyAndReturnArgs} args - Arguments to update many Branches.
     * @example
     * // Update many Branches
     * const branch = await prisma.branch.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Branches and only return the `id`
     * const branchWithIdOnly = await prisma.branch.updateManyAndReturn({
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
    updateManyAndReturn<T extends BranchUpdateManyAndReturnArgs>(args: SelectSubset<T, BranchUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BranchPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Branch.
     * @param {BranchUpsertArgs} args - Arguments to update or create a Branch.
     * @example
     * // Update or create a Branch
     * const branch = await prisma.branch.upsert({
     *   create: {
     *     // ... data to create a Branch
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Branch we want to update
     *   }
     * })
     */
    upsert<T extends BranchUpsertArgs>(args: SelectSubset<T, BranchUpsertArgs<ExtArgs>>): Prisma__BranchClient<$Result.GetResult<Prisma.$BranchPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Branches.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BranchCountArgs} args - Arguments to filter Branches to count.
     * @example
     * // Count the number of Branches
     * const count = await prisma.branch.count({
     *   where: {
     *     // ... the filter for the Branches we want to count
     *   }
     * })
    **/
    count<T extends BranchCountArgs>(
      args?: Subset<T, BranchCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BranchCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Branch.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BranchAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends BranchAggregateArgs>(args: Subset<T, BranchAggregateArgs>): Prisma.PrismaPromise<GetBranchAggregateType<T>>

    /**
     * Group by Branch.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BranchGroupByArgs} args - Group by arguments.
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
      T extends BranchGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BranchGroupByArgs['orderBy'] }
        : { orderBy?: BranchGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, BranchGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBranchGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Branch model
   */
  readonly fields: BranchFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Branch.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BranchClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    region<T extends RegionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, RegionDefaultArgs<ExtArgs>>): Prisma__RegionClient<$Result.GetResult<Prisma.$RegionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    organisation<T extends OrganisationDefaultArgs<ExtArgs> = {}>(args?: Subset<T, OrganisationDefaultArgs<ExtArgs>>): Prisma__OrganisationClient<$Result.GetResult<Prisma.$OrganisationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    contacts<T extends Branch$contactsArgs<ExtArgs> = {}>(args?: Subset<T, Branch$contactsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContactPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    pointOfContact<T extends Branch$pointOfContactArgs<ExtArgs> = {}>(args?: Subset<T, Branch$pointOfContactArgs<ExtArgs>>): Prisma__ContactClient<$Result.GetResult<Prisma.$ContactPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Branch model
   */
  interface BranchFieldRefs {
    readonly id: FieldRef<"Branch", 'String'>
    readonly address: FieldRef<"Branch", 'String'>
    readonly city: FieldRef<"Branch", 'String'>
    readonly postalCode: FieldRef<"Branch", 'String'>
    readonly landlineNumber: FieldRef<"Branch", 'String'>
    readonly regionId: FieldRef<"Branch", 'String'>
    readonly createdAt: FieldRef<"Branch", 'DateTime'>
    readonly updatedAt: FieldRef<"Branch", 'DateTime'>
    readonly organisationId: FieldRef<"Branch", 'String'>
    readonly type: FieldRef<"Branch", 'BranchType'>
    readonly pointOfContactId: FieldRef<"Branch", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Branch findUnique
   */
  export type BranchFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Branch
     */
    select?: BranchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Branch
     */
    omit?: BranchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BranchInclude<ExtArgs> | null
    /**
     * Filter, which Branch to fetch.
     */
    where: BranchWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * Branch findUniqueOrThrow
   */
  export type BranchFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Branch
     */
    select?: BranchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Branch
     */
    omit?: BranchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BranchInclude<ExtArgs> | null
    /**
     * Filter, which Branch to fetch.
     */
    where: BranchWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * Branch findFirst
   */
  export type BranchFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Branch
     */
    select?: BranchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Branch
     */
    omit?: BranchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BranchInclude<ExtArgs> | null
    /**
     * Filter, which Branch to fetch.
     */
    where?: BranchWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Branches to fetch.
     */
    orderBy?: BranchOrderByWithRelationInput | BranchOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Branches.
     */
    cursor?: BranchWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Branches from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Branches.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Branches.
     */
    distinct?: BranchScalarFieldEnum | BranchScalarFieldEnum[]
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * Branch findFirstOrThrow
   */
  export type BranchFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Branch
     */
    select?: BranchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Branch
     */
    omit?: BranchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BranchInclude<ExtArgs> | null
    /**
     * Filter, which Branch to fetch.
     */
    where?: BranchWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Branches to fetch.
     */
    orderBy?: BranchOrderByWithRelationInput | BranchOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Branches.
     */
    cursor?: BranchWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Branches from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Branches.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Branches.
     */
    distinct?: BranchScalarFieldEnum | BranchScalarFieldEnum[]
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * Branch findMany
   */
  export type BranchFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Branch
     */
    select?: BranchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Branch
     */
    omit?: BranchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BranchInclude<ExtArgs> | null
    /**
     * Filter, which Branches to fetch.
     */
    where?: BranchWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Branches to fetch.
     */
    orderBy?: BranchOrderByWithRelationInput | BranchOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Branches.
     */
    cursor?: BranchWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Branches from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Branches.
     */
    skip?: number
    distinct?: BranchScalarFieldEnum | BranchScalarFieldEnum[]
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * Branch create
   */
  export type BranchCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Branch
     */
    select?: BranchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Branch
     */
    omit?: BranchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BranchInclude<ExtArgs> | null
    /**
     * The data needed to create a Branch.
     */
    data: XOR<BranchCreateInput, BranchUncheckedCreateInput>
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * Branch createMany
   */
  export type BranchCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Branches.
     */
    data: BranchCreateManyInput | BranchCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Branch createManyAndReturn
   */
  export type BranchCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Branch
     */
    select?: BranchSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Branch
     */
    omit?: BranchOmit<ExtArgs> | null
    /**
     * The data used to create many Branches.
     */
    data: BranchCreateManyInput | BranchCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BranchIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Branch update
   */
  export type BranchUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Branch
     */
    select?: BranchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Branch
     */
    omit?: BranchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BranchInclude<ExtArgs> | null
    /**
     * The data needed to update a Branch.
     */
    data: XOR<BranchUpdateInput, BranchUncheckedUpdateInput>
    /**
     * Choose, which Branch to update.
     */
    where: BranchWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * Branch updateMany
   */
  export type BranchUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Branches.
     */
    data: XOR<BranchUpdateManyMutationInput, BranchUncheckedUpdateManyInput>
    /**
     * Filter which Branches to update
     */
    where?: BranchWhereInput
    /**
     * Limit how many Branches to update.
     */
    limit?: number
  }

  /**
   * Branch updateManyAndReturn
   */
  export type BranchUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Branch
     */
    select?: BranchSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Branch
     */
    omit?: BranchOmit<ExtArgs> | null
    /**
     * The data used to update Branches.
     */
    data: XOR<BranchUpdateManyMutationInput, BranchUncheckedUpdateManyInput>
    /**
     * Filter which Branches to update
     */
    where?: BranchWhereInput
    /**
     * Limit how many Branches to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BranchIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Branch upsert
   */
  export type BranchUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Branch
     */
    select?: BranchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Branch
     */
    omit?: BranchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BranchInclude<ExtArgs> | null
    /**
     * The filter to search for the Branch to update in case it exists.
     */
    where: BranchWhereUniqueInput
    /**
     * In case the Branch found by the `where` argument doesn't exist, create a new Branch with this data.
     */
    create: XOR<BranchCreateInput, BranchUncheckedCreateInput>
    /**
     * In case the Branch was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BranchUpdateInput, BranchUncheckedUpdateInput>
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * Branch delete
   */
  export type BranchDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Branch
     */
    select?: BranchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Branch
     */
    omit?: BranchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BranchInclude<ExtArgs> | null
    /**
     * Filter which Branch to delete.
     */
    where: BranchWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * Branch deleteMany
   */
  export type BranchDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Branches to delete
     */
    where?: BranchWhereInput
    /**
     * Limit how many Branches to delete.
     */
    limit?: number
  }

  /**
   * Branch.contacts
   */
  export type Branch$contactsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contact
     */
    select?: ContactSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contact
     */
    omit?: ContactOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContactInclude<ExtArgs> | null
    where?: ContactWhereInput
    orderBy?: ContactOrderByWithRelationInput | ContactOrderByWithRelationInput[]
    cursor?: ContactWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ContactScalarFieldEnum | ContactScalarFieldEnum[]
  }

  /**
   * Branch.pointOfContact
   */
  export type Branch$pointOfContactArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contact
     */
    select?: ContactSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contact
     */
    omit?: ContactOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContactInclude<ExtArgs> | null
    where?: ContactWhereInput
  }

  /**
   * Branch without action
   */
  export type BranchDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Branch
     */
    select?: BranchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Branch
     */
    omit?: BranchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BranchInclude<ExtArgs> | null
  }


  /**
   * Model Organisation
   */

  export type AggregateOrganisation = {
    _count: OrganisationCountAggregateOutputType | null
    _min: OrganisationMinAggregateOutputType | null
    _max: OrganisationMaxAggregateOutputType | null
  }

  export type OrganisationMinAggregateOutputType = {
    id: string | null
    name: string | null
    createdAt: Date | null
    updatedAt: Date | null
    contactOrgId: string | null
  }

  export type OrganisationMaxAggregateOutputType = {
    id: string | null
    name: string | null
    createdAt: Date | null
    updatedAt: Date | null
    contactOrgId: string | null
  }

  export type OrganisationCountAggregateOutputType = {
    id: number
    name: number
    createdAt: number
    updatedAt: number
    contactOrgId: number
    _all: number
  }


  export type OrganisationMinAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    updatedAt?: true
    contactOrgId?: true
  }

  export type OrganisationMaxAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    updatedAt?: true
    contactOrgId?: true
  }

  export type OrganisationCountAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    updatedAt?: true
    contactOrgId?: true
    _all?: true
  }

  export type OrganisationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Organisation to aggregate.
     */
    where?: OrganisationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Organisations to fetch.
     */
    orderBy?: OrganisationOrderByWithRelationInput | OrganisationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: OrganisationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Organisations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Organisations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Organisations
    **/
    _count?: true | OrganisationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OrganisationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OrganisationMaxAggregateInputType
  }

  export type GetOrganisationAggregateType<T extends OrganisationAggregateArgs> = {
        [P in keyof T & keyof AggregateOrganisation]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOrganisation[P]>
      : GetScalarType<T[P], AggregateOrganisation[P]>
  }




  export type OrganisationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrganisationWhereInput
    orderBy?: OrganisationOrderByWithAggregationInput | OrganisationOrderByWithAggregationInput[]
    by: OrganisationScalarFieldEnum[] | OrganisationScalarFieldEnum
    having?: OrganisationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OrganisationCountAggregateInputType | true
    _min?: OrganisationMinAggregateInputType
    _max?: OrganisationMaxAggregateInputType
  }

  export type OrganisationGroupByOutputType = {
    id: string
    name: string
    createdAt: Date
    updatedAt: Date
    contactOrgId: string | null
    _count: OrganisationCountAggregateOutputType | null
    _min: OrganisationMinAggregateOutputType | null
    _max: OrganisationMaxAggregateOutputType | null
  }

  type GetOrganisationGroupByPayload<T extends OrganisationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OrganisationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OrganisationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OrganisationGroupByOutputType[P]>
            : GetScalarType<T[P], OrganisationGroupByOutputType[P]>
        }
      >
    >


  export type OrganisationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    contactOrgId?: boolean
    team?: boolean | Organisation$teamArgs<ExtArgs>
    branches?: boolean | Organisation$branchesArgs<ExtArgs>
    tags?: boolean | Organisation$tagsArgs<ExtArgs>
    contactOrganisations?: boolean | Organisation$contactOrganisationsArgs<ExtArgs>
    contactOrganisation?: boolean | Organisation$contactOrganisationArgs<ExtArgs>
    createdTags?: boolean | Organisation$createdTagsArgs<ExtArgs>
    contacts?: boolean | Organisation$contactsArgs<ExtArgs>
    createdSchedule?: boolean | Organisation$createdScheduleArgs<ExtArgs>
    _count?: boolean | OrganisationCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["organisation"]>

  export type OrganisationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    contactOrgId?: boolean
    contactOrganisation?: boolean | Organisation$contactOrganisationArgs<ExtArgs>
  }, ExtArgs["result"]["organisation"]>

  export type OrganisationSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    contactOrgId?: boolean
    contactOrganisation?: boolean | Organisation$contactOrganisationArgs<ExtArgs>
  }, ExtArgs["result"]["organisation"]>

  export type OrganisationSelectScalar = {
    id?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    contactOrgId?: boolean
  }

  export type OrganisationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "createdAt" | "updatedAt" | "contactOrgId", ExtArgs["result"]["organisation"]>
  export type OrganisationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    team?: boolean | Organisation$teamArgs<ExtArgs>
    branches?: boolean | Organisation$branchesArgs<ExtArgs>
    tags?: boolean | Organisation$tagsArgs<ExtArgs>
    contactOrganisations?: boolean | Organisation$contactOrganisationsArgs<ExtArgs>
    contactOrganisation?: boolean | Organisation$contactOrganisationArgs<ExtArgs>
    createdTags?: boolean | Organisation$createdTagsArgs<ExtArgs>
    contacts?: boolean | Organisation$contactsArgs<ExtArgs>
    createdSchedule?: boolean | Organisation$createdScheduleArgs<ExtArgs>
    _count?: boolean | OrganisationCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type OrganisationIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    contactOrganisation?: boolean | Organisation$contactOrganisationArgs<ExtArgs>
  }
  export type OrganisationIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    contactOrganisation?: boolean | Organisation$contactOrganisationArgs<ExtArgs>
  }

  export type $OrganisationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Organisation"
    objects: {
      team: Prisma.$UserPayload<ExtArgs>[]
      branches: Prisma.$BranchPayload<ExtArgs>[]
      tags: Prisma.$TagPayload<ExtArgs>[]
      contactOrganisations: Prisma.$OrganisationPayload<ExtArgs>[]
      contactOrganisation: Prisma.$OrganisationPayload<ExtArgs> | null
      createdTags: Prisma.$TagPayload<ExtArgs>[]
      contacts: Prisma.$ContactPayload<ExtArgs>[]
      createdSchedule: Prisma.$SchedulePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      createdAt: Date
      updatedAt: Date
      contactOrgId: string | null
    }, ExtArgs["result"]["organisation"]>
    composites: {}
  }

  type OrganisationGetPayload<S extends boolean | null | undefined | OrganisationDefaultArgs> = $Result.GetResult<Prisma.$OrganisationPayload, S>

  type OrganisationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<OrganisationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit' | 'relationLoadStrategy'> & {
      select?: OrganisationCountAggregateInputType | true
    }

  export interface OrganisationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Organisation'], meta: { name: 'Organisation' } }
    /**
     * Find zero or one Organisation that matches the filter.
     * @param {OrganisationFindUniqueArgs} args - Arguments to find a Organisation
     * @example
     * // Get one Organisation
     * const organisation = await prisma.organisation.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends OrganisationFindUniqueArgs>(args: SelectSubset<T, OrganisationFindUniqueArgs<ExtArgs>>): Prisma__OrganisationClient<$Result.GetResult<Prisma.$OrganisationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Organisation that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {OrganisationFindUniqueOrThrowArgs} args - Arguments to find a Organisation
     * @example
     * // Get one Organisation
     * const organisation = await prisma.organisation.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends OrganisationFindUniqueOrThrowArgs>(args: SelectSubset<T, OrganisationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__OrganisationClient<$Result.GetResult<Prisma.$OrganisationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Organisation that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganisationFindFirstArgs} args - Arguments to find a Organisation
     * @example
     * // Get one Organisation
     * const organisation = await prisma.organisation.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends OrganisationFindFirstArgs>(args?: SelectSubset<T, OrganisationFindFirstArgs<ExtArgs>>): Prisma__OrganisationClient<$Result.GetResult<Prisma.$OrganisationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Organisation that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganisationFindFirstOrThrowArgs} args - Arguments to find a Organisation
     * @example
     * // Get one Organisation
     * const organisation = await prisma.organisation.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends OrganisationFindFirstOrThrowArgs>(args?: SelectSubset<T, OrganisationFindFirstOrThrowArgs<ExtArgs>>): Prisma__OrganisationClient<$Result.GetResult<Prisma.$OrganisationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Organisations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganisationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Organisations
     * const organisations = await prisma.organisation.findMany()
     * 
     * // Get first 10 Organisations
     * const organisations = await prisma.organisation.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const organisationWithIdOnly = await prisma.organisation.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends OrganisationFindManyArgs>(args?: SelectSubset<T, OrganisationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrganisationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Organisation.
     * @param {OrganisationCreateArgs} args - Arguments to create a Organisation.
     * @example
     * // Create one Organisation
     * const Organisation = await prisma.organisation.create({
     *   data: {
     *     // ... data to create a Organisation
     *   }
     * })
     * 
     */
    create<T extends OrganisationCreateArgs>(args: SelectSubset<T, OrganisationCreateArgs<ExtArgs>>): Prisma__OrganisationClient<$Result.GetResult<Prisma.$OrganisationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Organisations.
     * @param {OrganisationCreateManyArgs} args - Arguments to create many Organisations.
     * @example
     * // Create many Organisations
     * const organisation = await prisma.organisation.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends OrganisationCreateManyArgs>(args?: SelectSubset<T, OrganisationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Organisations and returns the data saved in the database.
     * @param {OrganisationCreateManyAndReturnArgs} args - Arguments to create many Organisations.
     * @example
     * // Create many Organisations
     * const organisation = await prisma.organisation.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Organisations and only return the `id`
     * const organisationWithIdOnly = await prisma.organisation.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends OrganisationCreateManyAndReturnArgs>(args?: SelectSubset<T, OrganisationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrganisationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Organisation.
     * @param {OrganisationDeleteArgs} args - Arguments to delete one Organisation.
     * @example
     * // Delete one Organisation
     * const Organisation = await prisma.organisation.delete({
     *   where: {
     *     // ... filter to delete one Organisation
     *   }
     * })
     * 
     */
    delete<T extends OrganisationDeleteArgs>(args: SelectSubset<T, OrganisationDeleteArgs<ExtArgs>>): Prisma__OrganisationClient<$Result.GetResult<Prisma.$OrganisationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Organisation.
     * @param {OrganisationUpdateArgs} args - Arguments to update one Organisation.
     * @example
     * // Update one Organisation
     * const organisation = await prisma.organisation.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends OrganisationUpdateArgs>(args: SelectSubset<T, OrganisationUpdateArgs<ExtArgs>>): Prisma__OrganisationClient<$Result.GetResult<Prisma.$OrganisationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Organisations.
     * @param {OrganisationDeleteManyArgs} args - Arguments to filter Organisations to delete.
     * @example
     * // Delete a few Organisations
     * const { count } = await prisma.organisation.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends OrganisationDeleteManyArgs>(args?: SelectSubset<T, OrganisationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Organisations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganisationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Organisations
     * const organisation = await prisma.organisation.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends OrganisationUpdateManyArgs>(args: SelectSubset<T, OrganisationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Organisations and returns the data updated in the database.
     * @param {OrganisationUpdateManyAndReturnArgs} args - Arguments to update many Organisations.
     * @example
     * // Update many Organisations
     * const organisation = await prisma.organisation.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Organisations and only return the `id`
     * const organisationWithIdOnly = await prisma.organisation.updateManyAndReturn({
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
    updateManyAndReturn<T extends OrganisationUpdateManyAndReturnArgs>(args: SelectSubset<T, OrganisationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrganisationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Organisation.
     * @param {OrganisationUpsertArgs} args - Arguments to update or create a Organisation.
     * @example
     * // Update or create a Organisation
     * const organisation = await prisma.organisation.upsert({
     *   create: {
     *     // ... data to create a Organisation
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Organisation we want to update
     *   }
     * })
     */
    upsert<T extends OrganisationUpsertArgs>(args: SelectSubset<T, OrganisationUpsertArgs<ExtArgs>>): Prisma__OrganisationClient<$Result.GetResult<Prisma.$OrganisationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Organisations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganisationCountArgs} args - Arguments to filter Organisations to count.
     * @example
     * // Count the number of Organisations
     * const count = await prisma.organisation.count({
     *   where: {
     *     // ... the filter for the Organisations we want to count
     *   }
     * })
    **/
    count<T extends OrganisationCountArgs>(
      args?: Subset<T, OrganisationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OrganisationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Organisation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganisationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends OrganisationAggregateArgs>(args: Subset<T, OrganisationAggregateArgs>): Prisma.PrismaPromise<GetOrganisationAggregateType<T>>

    /**
     * Group by Organisation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganisationGroupByArgs} args - Group by arguments.
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
      T extends OrganisationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OrganisationGroupByArgs['orderBy'] }
        : { orderBy?: OrganisationGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, OrganisationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOrganisationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Organisation model
   */
  readonly fields: OrganisationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Organisation.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__OrganisationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    team<T extends Organisation$teamArgs<ExtArgs> = {}>(args?: Subset<T, Organisation$teamArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    branches<T extends Organisation$branchesArgs<ExtArgs> = {}>(args?: Subset<T, Organisation$branchesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BranchPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    tags<T extends Organisation$tagsArgs<ExtArgs> = {}>(args?: Subset<T, Organisation$tagsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    contactOrganisations<T extends Organisation$contactOrganisationsArgs<ExtArgs> = {}>(args?: Subset<T, Organisation$contactOrganisationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrganisationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    contactOrganisation<T extends Organisation$contactOrganisationArgs<ExtArgs> = {}>(args?: Subset<T, Organisation$contactOrganisationArgs<ExtArgs>>): Prisma__OrganisationClient<$Result.GetResult<Prisma.$OrganisationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    createdTags<T extends Organisation$createdTagsArgs<ExtArgs> = {}>(args?: Subset<T, Organisation$createdTagsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    contacts<T extends Organisation$contactsArgs<ExtArgs> = {}>(args?: Subset<T, Organisation$contactsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContactPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    createdSchedule<T extends Organisation$createdScheduleArgs<ExtArgs> = {}>(args?: Subset<T, Organisation$createdScheduleArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SchedulePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Organisation model
   */
  interface OrganisationFieldRefs {
    readonly id: FieldRef<"Organisation", 'String'>
    readonly name: FieldRef<"Organisation", 'String'>
    readonly createdAt: FieldRef<"Organisation", 'DateTime'>
    readonly updatedAt: FieldRef<"Organisation", 'DateTime'>
    readonly contactOrgId: FieldRef<"Organisation", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Organisation findUnique
   */
  export type OrganisationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organisation
     */
    select?: OrganisationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Organisation
     */
    omit?: OrganisationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganisationInclude<ExtArgs> | null
    /**
     * Filter, which Organisation to fetch.
     */
    where: OrganisationWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * Organisation findUniqueOrThrow
   */
  export type OrganisationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organisation
     */
    select?: OrganisationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Organisation
     */
    omit?: OrganisationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganisationInclude<ExtArgs> | null
    /**
     * Filter, which Organisation to fetch.
     */
    where: OrganisationWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * Organisation findFirst
   */
  export type OrganisationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organisation
     */
    select?: OrganisationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Organisation
     */
    omit?: OrganisationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganisationInclude<ExtArgs> | null
    /**
     * Filter, which Organisation to fetch.
     */
    where?: OrganisationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Organisations to fetch.
     */
    orderBy?: OrganisationOrderByWithRelationInput | OrganisationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Organisations.
     */
    cursor?: OrganisationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Organisations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Organisations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Organisations.
     */
    distinct?: OrganisationScalarFieldEnum | OrganisationScalarFieldEnum[]
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * Organisation findFirstOrThrow
   */
  export type OrganisationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organisation
     */
    select?: OrganisationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Organisation
     */
    omit?: OrganisationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganisationInclude<ExtArgs> | null
    /**
     * Filter, which Organisation to fetch.
     */
    where?: OrganisationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Organisations to fetch.
     */
    orderBy?: OrganisationOrderByWithRelationInput | OrganisationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Organisations.
     */
    cursor?: OrganisationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Organisations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Organisations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Organisations.
     */
    distinct?: OrganisationScalarFieldEnum | OrganisationScalarFieldEnum[]
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * Organisation findMany
   */
  export type OrganisationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organisation
     */
    select?: OrganisationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Organisation
     */
    omit?: OrganisationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganisationInclude<ExtArgs> | null
    /**
     * Filter, which Organisations to fetch.
     */
    where?: OrganisationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Organisations to fetch.
     */
    orderBy?: OrganisationOrderByWithRelationInput | OrganisationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Organisations.
     */
    cursor?: OrganisationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Organisations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Organisations.
     */
    skip?: number
    distinct?: OrganisationScalarFieldEnum | OrganisationScalarFieldEnum[]
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * Organisation create
   */
  export type OrganisationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organisation
     */
    select?: OrganisationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Organisation
     */
    omit?: OrganisationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganisationInclude<ExtArgs> | null
    /**
     * The data needed to create a Organisation.
     */
    data: XOR<OrganisationCreateInput, OrganisationUncheckedCreateInput>
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * Organisation createMany
   */
  export type OrganisationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Organisations.
     */
    data: OrganisationCreateManyInput | OrganisationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Organisation createManyAndReturn
   */
  export type OrganisationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organisation
     */
    select?: OrganisationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Organisation
     */
    omit?: OrganisationOmit<ExtArgs> | null
    /**
     * The data used to create many Organisations.
     */
    data: OrganisationCreateManyInput | OrganisationCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganisationIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Organisation update
   */
  export type OrganisationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organisation
     */
    select?: OrganisationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Organisation
     */
    omit?: OrganisationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganisationInclude<ExtArgs> | null
    /**
     * The data needed to update a Organisation.
     */
    data: XOR<OrganisationUpdateInput, OrganisationUncheckedUpdateInput>
    /**
     * Choose, which Organisation to update.
     */
    where: OrganisationWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * Organisation updateMany
   */
  export type OrganisationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Organisations.
     */
    data: XOR<OrganisationUpdateManyMutationInput, OrganisationUncheckedUpdateManyInput>
    /**
     * Filter which Organisations to update
     */
    where?: OrganisationWhereInput
    /**
     * Limit how many Organisations to update.
     */
    limit?: number
  }

  /**
   * Organisation updateManyAndReturn
   */
  export type OrganisationUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organisation
     */
    select?: OrganisationSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Organisation
     */
    omit?: OrganisationOmit<ExtArgs> | null
    /**
     * The data used to update Organisations.
     */
    data: XOR<OrganisationUpdateManyMutationInput, OrganisationUncheckedUpdateManyInput>
    /**
     * Filter which Organisations to update
     */
    where?: OrganisationWhereInput
    /**
     * Limit how many Organisations to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganisationIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Organisation upsert
   */
  export type OrganisationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organisation
     */
    select?: OrganisationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Organisation
     */
    omit?: OrganisationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganisationInclude<ExtArgs> | null
    /**
     * The filter to search for the Organisation to update in case it exists.
     */
    where: OrganisationWhereUniqueInput
    /**
     * In case the Organisation found by the `where` argument doesn't exist, create a new Organisation with this data.
     */
    create: XOR<OrganisationCreateInput, OrganisationUncheckedCreateInput>
    /**
     * In case the Organisation was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OrganisationUpdateInput, OrganisationUncheckedUpdateInput>
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * Organisation delete
   */
  export type OrganisationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organisation
     */
    select?: OrganisationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Organisation
     */
    omit?: OrganisationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganisationInclude<ExtArgs> | null
    /**
     * Filter which Organisation to delete.
     */
    where: OrganisationWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * Organisation deleteMany
   */
  export type OrganisationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Organisations to delete
     */
    where?: OrganisationWhereInput
    /**
     * Limit how many Organisations to delete.
     */
    limit?: number
  }

  /**
   * Organisation.team
   */
  export type Organisation$teamArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    cursor?: UserWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * Organisation.branches
   */
  export type Organisation$branchesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Branch
     */
    select?: BranchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Branch
     */
    omit?: BranchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BranchInclude<ExtArgs> | null
    where?: BranchWhereInput
    orderBy?: BranchOrderByWithRelationInput | BranchOrderByWithRelationInput[]
    cursor?: BranchWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BranchScalarFieldEnum | BranchScalarFieldEnum[]
  }

  /**
   * Organisation.tags
   */
  export type Organisation$tagsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
    where?: TagWhereInput
    orderBy?: TagOrderByWithRelationInput | TagOrderByWithRelationInput[]
    cursor?: TagWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TagScalarFieldEnum | TagScalarFieldEnum[]
  }

  /**
   * Organisation.contactOrganisations
   */
  export type Organisation$contactOrganisationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organisation
     */
    select?: OrganisationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Organisation
     */
    omit?: OrganisationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganisationInclude<ExtArgs> | null
    where?: OrganisationWhereInput
    orderBy?: OrganisationOrderByWithRelationInput | OrganisationOrderByWithRelationInput[]
    cursor?: OrganisationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OrganisationScalarFieldEnum | OrganisationScalarFieldEnum[]
  }

  /**
   * Organisation.contactOrganisation
   */
  export type Organisation$contactOrganisationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organisation
     */
    select?: OrganisationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Organisation
     */
    omit?: OrganisationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganisationInclude<ExtArgs> | null
    where?: OrganisationWhereInput
  }

  /**
   * Organisation.createdTags
   */
  export type Organisation$createdTagsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
    where?: TagWhereInput
    orderBy?: TagOrderByWithRelationInput | TagOrderByWithRelationInput[]
    cursor?: TagWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TagScalarFieldEnum | TagScalarFieldEnum[]
  }

  /**
   * Organisation.contacts
   */
  export type Organisation$contactsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contact
     */
    select?: ContactSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contact
     */
    omit?: ContactOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContactInclude<ExtArgs> | null
    where?: ContactWhereInput
    orderBy?: ContactOrderByWithRelationInput | ContactOrderByWithRelationInput[]
    cursor?: ContactWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ContactScalarFieldEnum | ContactScalarFieldEnum[]
  }

  /**
   * Organisation.createdSchedule
   */
  export type Organisation$createdScheduleArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Schedule
     */
    select?: ScheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Schedule
     */
    omit?: ScheduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScheduleInclude<ExtArgs> | null
    where?: ScheduleWhereInput
    orderBy?: ScheduleOrderByWithRelationInput | ScheduleOrderByWithRelationInput[]
    cursor?: ScheduleWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ScheduleScalarFieldEnum | ScheduleScalarFieldEnum[]
  }

  /**
   * Organisation without action
   */
  export type OrganisationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organisation
     */
    select?: OrganisationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Organisation
     */
    omit?: OrganisationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganisationInclude<ExtArgs> | null
  }


  /**
   * Model Tag
   */

  export type AggregateTag = {
    _count: TagCountAggregateOutputType | null
    _min: TagMinAggregateOutputType | null
    _max: TagMaxAggregateOutputType | null
  }

  export type TagMinAggregateOutputType = {
    id: string | null
    title: string | null
    description: string | null
    tagType: $Enums.TagType | null
    createdOrganisationId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TagMaxAggregateOutputType = {
    id: string | null
    title: string | null
    description: string | null
    tagType: $Enums.TagType | null
    createdOrganisationId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TagCountAggregateOutputType = {
    id: number
    title: number
    description: number
    tagType: number
    createdOrganisationId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type TagMinAggregateInputType = {
    id?: true
    title?: true
    description?: true
    tagType?: true
    createdOrganisationId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TagMaxAggregateInputType = {
    id?: true
    title?: true
    description?: true
    tagType?: true
    createdOrganisationId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TagCountAggregateInputType = {
    id?: true
    title?: true
    description?: true
    tagType?: true
    createdOrganisationId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type TagAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Tag to aggregate.
     */
    where?: TagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tags to fetch.
     */
    orderBy?: TagOrderByWithRelationInput | TagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Tags
    **/
    _count?: true | TagCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TagMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TagMaxAggregateInputType
  }

  export type GetTagAggregateType<T extends TagAggregateArgs> = {
        [P in keyof T & keyof AggregateTag]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTag[P]>
      : GetScalarType<T[P], AggregateTag[P]>
  }




  export type TagGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TagWhereInput
    orderBy?: TagOrderByWithAggregationInput | TagOrderByWithAggregationInput[]
    by: TagScalarFieldEnum[] | TagScalarFieldEnum
    having?: TagScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TagCountAggregateInputType | true
    _min?: TagMinAggregateInputType
    _max?: TagMaxAggregateInputType
  }

  export type TagGroupByOutputType = {
    id: string
    title: string
    description: string | null
    tagType: $Enums.TagType
    createdOrganisationId: string
    createdAt: Date
    updatedAt: Date
    _count: TagCountAggregateOutputType | null
    _min: TagMinAggregateOutputType | null
    _max: TagMaxAggregateOutputType | null
  }

  type GetTagGroupByPayload<T extends TagGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TagGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TagGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TagGroupByOutputType[P]>
            : GetScalarType<T[P], TagGroupByOutputType[P]>
        }
      >
    >


  export type TagSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    tagType?: boolean
    createdOrganisationId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    createdOrganisation?: boolean | OrganisationDefaultArgs<ExtArgs>
    organisations?: boolean | Tag$organisationsArgs<ExtArgs>
    activities?: boolean | Tag$activitiesArgs<ExtArgs>
    contacts?: boolean | Tag$contactsArgs<ExtArgs>
    _count?: boolean | TagCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tag"]>

  export type TagSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    tagType?: boolean
    createdOrganisationId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    createdOrganisation?: boolean | OrganisationDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tag"]>

  export type TagSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    tagType?: boolean
    createdOrganisationId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    createdOrganisation?: boolean | OrganisationDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tag"]>

  export type TagSelectScalar = {
    id?: boolean
    title?: boolean
    description?: boolean
    tagType?: boolean
    createdOrganisationId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type TagOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "description" | "tagType" | "createdOrganisationId" | "createdAt" | "updatedAt", ExtArgs["result"]["tag"]>
  export type TagInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    createdOrganisation?: boolean | OrganisationDefaultArgs<ExtArgs>
    organisations?: boolean | Tag$organisationsArgs<ExtArgs>
    activities?: boolean | Tag$activitiesArgs<ExtArgs>
    contacts?: boolean | Tag$contactsArgs<ExtArgs>
    _count?: boolean | TagCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type TagIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    createdOrganisation?: boolean | OrganisationDefaultArgs<ExtArgs>
  }
  export type TagIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    createdOrganisation?: boolean | OrganisationDefaultArgs<ExtArgs>
  }

  export type $TagPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Tag"
    objects: {
      createdOrganisation: Prisma.$OrganisationPayload<ExtArgs>
      organisations: Prisma.$OrganisationPayload<ExtArgs>[]
      activities: Prisma.$ActivityPayload<ExtArgs>[]
      contacts: Prisma.$ContactPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      description: string | null
      tagType: $Enums.TagType
      createdOrganisationId: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["tag"]>
    composites: {}
  }

  type TagGetPayload<S extends boolean | null | undefined | TagDefaultArgs> = $Result.GetResult<Prisma.$TagPayload, S>

  type TagCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TagFindManyArgs, 'select' | 'include' | 'distinct' | 'omit' | 'relationLoadStrategy'> & {
      select?: TagCountAggregateInputType | true
    }

  export interface TagDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Tag'], meta: { name: 'Tag' } }
    /**
     * Find zero or one Tag that matches the filter.
     * @param {TagFindUniqueArgs} args - Arguments to find a Tag
     * @example
     * // Get one Tag
     * const tag = await prisma.tag.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TagFindUniqueArgs>(args: SelectSubset<T, TagFindUniqueArgs<ExtArgs>>): Prisma__TagClient<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Tag that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TagFindUniqueOrThrowArgs} args - Arguments to find a Tag
     * @example
     * // Get one Tag
     * const tag = await prisma.tag.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TagFindUniqueOrThrowArgs>(args: SelectSubset<T, TagFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TagClient<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tag that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagFindFirstArgs} args - Arguments to find a Tag
     * @example
     * // Get one Tag
     * const tag = await prisma.tag.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TagFindFirstArgs>(args?: SelectSubset<T, TagFindFirstArgs<ExtArgs>>): Prisma__TagClient<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tag that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagFindFirstOrThrowArgs} args - Arguments to find a Tag
     * @example
     * // Get one Tag
     * const tag = await prisma.tag.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TagFindFirstOrThrowArgs>(args?: SelectSubset<T, TagFindFirstOrThrowArgs<ExtArgs>>): Prisma__TagClient<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Tags that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tags
     * const tags = await prisma.tag.findMany()
     * 
     * // Get first 10 Tags
     * const tags = await prisma.tag.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const tagWithIdOnly = await prisma.tag.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TagFindManyArgs>(args?: SelectSubset<T, TagFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Tag.
     * @param {TagCreateArgs} args - Arguments to create a Tag.
     * @example
     * // Create one Tag
     * const Tag = await prisma.tag.create({
     *   data: {
     *     // ... data to create a Tag
     *   }
     * })
     * 
     */
    create<T extends TagCreateArgs>(args: SelectSubset<T, TagCreateArgs<ExtArgs>>): Prisma__TagClient<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Tags.
     * @param {TagCreateManyArgs} args - Arguments to create many Tags.
     * @example
     * // Create many Tags
     * const tag = await prisma.tag.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TagCreateManyArgs>(args?: SelectSubset<T, TagCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Tags and returns the data saved in the database.
     * @param {TagCreateManyAndReturnArgs} args - Arguments to create many Tags.
     * @example
     * // Create many Tags
     * const tag = await prisma.tag.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Tags and only return the `id`
     * const tagWithIdOnly = await prisma.tag.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TagCreateManyAndReturnArgs>(args?: SelectSubset<T, TagCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Tag.
     * @param {TagDeleteArgs} args - Arguments to delete one Tag.
     * @example
     * // Delete one Tag
     * const Tag = await prisma.tag.delete({
     *   where: {
     *     // ... filter to delete one Tag
     *   }
     * })
     * 
     */
    delete<T extends TagDeleteArgs>(args: SelectSubset<T, TagDeleteArgs<ExtArgs>>): Prisma__TagClient<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Tag.
     * @param {TagUpdateArgs} args - Arguments to update one Tag.
     * @example
     * // Update one Tag
     * const tag = await prisma.tag.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TagUpdateArgs>(args: SelectSubset<T, TagUpdateArgs<ExtArgs>>): Prisma__TagClient<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Tags.
     * @param {TagDeleteManyArgs} args - Arguments to filter Tags to delete.
     * @example
     * // Delete a few Tags
     * const { count } = await prisma.tag.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TagDeleteManyArgs>(args?: SelectSubset<T, TagDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tags.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tags
     * const tag = await prisma.tag.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TagUpdateManyArgs>(args: SelectSubset<T, TagUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tags and returns the data updated in the database.
     * @param {TagUpdateManyAndReturnArgs} args - Arguments to update many Tags.
     * @example
     * // Update many Tags
     * const tag = await prisma.tag.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Tags and only return the `id`
     * const tagWithIdOnly = await prisma.tag.updateManyAndReturn({
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
    updateManyAndReturn<T extends TagUpdateManyAndReturnArgs>(args: SelectSubset<T, TagUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Tag.
     * @param {TagUpsertArgs} args - Arguments to update or create a Tag.
     * @example
     * // Update or create a Tag
     * const tag = await prisma.tag.upsert({
     *   create: {
     *     // ... data to create a Tag
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Tag we want to update
     *   }
     * })
     */
    upsert<T extends TagUpsertArgs>(args: SelectSubset<T, TagUpsertArgs<ExtArgs>>): Prisma__TagClient<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Tags.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagCountArgs} args - Arguments to filter Tags to count.
     * @example
     * // Count the number of Tags
     * const count = await prisma.tag.count({
     *   where: {
     *     // ... the filter for the Tags we want to count
     *   }
     * })
    **/
    count<T extends TagCountArgs>(
      args?: Subset<T, TagCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TagCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Tag.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TagAggregateArgs>(args: Subset<T, TagAggregateArgs>): Prisma.PrismaPromise<GetTagAggregateType<T>>

    /**
     * Group by Tag.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagGroupByArgs} args - Group by arguments.
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
      T extends TagGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TagGroupByArgs['orderBy'] }
        : { orderBy?: TagGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TagGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTagGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Tag model
   */
  readonly fields: TagFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Tag.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TagClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    createdOrganisation<T extends OrganisationDefaultArgs<ExtArgs> = {}>(args?: Subset<T, OrganisationDefaultArgs<ExtArgs>>): Prisma__OrganisationClient<$Result.GetResult<Prisma.$OrganisationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    organisations<T extends Tag$organisationsArgs<ExtArgs> = {}>(args?: Subset<T, Tag$organisationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrganisationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    activities<T extends Tag$activitiesArgs<ExtArgs> = {}>(args?: Subset<T, Tag$activitiesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ActivityPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    contacts<T extends Tag$contactsArgs<ExtArgs> = {}>(args?: Subset<T, Tag$contactsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContactPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Tag model
   */
  interface TagFieldRefs {
    readonly id: FieldRef<"Tag", 'String'>
    readonly title: FieldRef<"Tag", 'String'>
    readonly description: FieldRef<"Tag", 'String'>
    readonly tagType: FieldRef<"Tag", 'TagType'>
    readonly createdOrganisationId: FieldRef<"Tag", 'String'>
    readonly createdAt: FieldRef<"Tag", 'DateTime'>
    readonly updatedAt: FieldRef<"Tag", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Tag findUnique
   */
  export type TagFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
    /**
     * Filter, which Tag to fetch.
     */
    where: TagWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * Tag findUniqueOrThrow
   */
  export type TagFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
    /**
     * Filter, which Tag to fetch.
     */
    where: TagWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * Tag findFirst
   */
  export type TagFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
    /**
     * Filter, which Tag to fetch.
     */
    where?: TagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tags to fetch.
     */
    orderBy?: TagOrderByWithRelationInput | TagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tags.
     */
    cursor?: TagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tags.
     */
    distinct?: TagScalarFieldEnum | TagScalarFieldEnum[]
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * Tag findFirstOrThrow
   */
  export type TagFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
    /**
     * Filter, which Tag to fetch.
     */
    where?: TagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tags to fetch.
     */
    orderBy?: TagOrderByWithRelationInput | TagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tags.
     */
    cursor?: TagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tags.
     */
    distinct?: TagScalarFieldEnum | TagScalarFieldEnum[]
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * Tag findMany
   */
  export type TagFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
    /**
     * Filter, which Tags to fetch.
     */
    where?: TagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tags to fetch.
     */
    orderBy?: TagOrderByWithRelationInput | TagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Tags.
     */
    cursor?: TagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tags.
     */
    skip?: number
    distinct?: TagScalarFieldEnum | TagScalarFieldEnum[]
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * Tag create
   */
  export type TagCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
    /**
     * The data needed to create a Tag.
     */
    data: XOR<TagCreateInput, TagUncheckedCreateInput>
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * Tag createMany
   */
  export type TagCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Tags.
     */
    data: TagCreateManyInput | TagCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Tag createManyAndReturn
   */
  export type TagCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * The data used to create many Tags.
     */
    data: TagCreateManyInput | TagCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Tag update
   */
  export type TagUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
    /**
     * The data needed to update a Tag.
     */
    data: XOR<TagUpdateInput, TagUncheckedUpdateInput>
    /**
     * Choose, which Tag to update.
     */
    where: TagWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * Tag updateMany
   */
  export type TagUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Tags.
     */
    data: XOR<TagUpdateManyMutationInput, TagUncheckedUpdateManyInput>
    /**
     * Filter which Tags to update
     */
    where?: TagWhereInput
    /**
     * Limit how many Tags to update.
     */
    limit?: number
  }

  /**
   * Tag updateManyAndReturn
   */
  export type TagUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * The data used to update Tags.
     */
    data: XOR<TagUpdateManyMutationInput, TagUncheckedUpdateManyInput>
    /**
     * Filter which Tags to update
     */
    where?: TagWhereInput
    /**
     * Limit how many Tags to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Tag upsert
   */
  export type TagUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
    /**
     * The filter to search for the Tag to update in case it exists.
     */
    where: TagWhereUniqueInput
    /**
     * In case the Tag found by the `where` argument doesn't exist, create a new Tag with this data.
     */
    create: XOR<TagCreateInput, TagUncheckedCreateInput>
    /**
     * In case the Tag was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TagUpdateInput, TagUncheckedUpdateInput>
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * Tag delete
   */
  export type TagDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
    /**
     * Filter which Tag to delete.
     */
    where: TagWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * Tag deleteMany
   */
  export type TagDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Tags to delete
     */
    where?: TagWhereInput
    /**
     * Limit how many Tags to delete.
     */
    limit?: number
  }

  /**
   * Tag.organisations
   */
  export type Tag$organisationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organisation
     */
    select?: OrganisationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Organisation
     */
    omit?: OrganisationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganisationInclude<ExtArgs> | null
    where?: OrganisationWhereInput
    orderBy?: OrganisationOrderByWithRelationInput | OrganisationOrderByWithRelationInput[]
    cursor?: OrganisationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OrganisationScalarFieldEnum | OrganisationScalarFieldEnum[]
  }

  /**
   * Tag.activities
   */
  export type Tag$activitiesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Activity
     */
    select?: ActivitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Activity
     */
    omit?: ActivityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityInclude<ExtArgs> | null
    where?: ActivityWhereInput
    orderBy?: ActivityOrderByWithRelationInput | ActivityOrderByWithRelationInput[]
    cursor?: ActivityWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ActivityScalarFieldEnum | ActivityScalarFieldEnum[]
  }

  /**
   * Tag.contacts
   */
  export type Tag$contactsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contact
     */
    select?: ContactSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contact
     */
    omit?: ContactOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContactInclude<ExtArgs> | null
    where?: ContactWhereInput
    orderBy?: ContactOrderByWithRelationInput | ContactOrderByWithRelationInput[]
    cursor?: ContactWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ContactScalarFieldEnum | ContactScalarFieldEnum[]
  }

  /**
   * Tag without action
   */
  export type TagDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
  }


  /**
   * Model Activity
   */

  export type AggregateActivity = {
    _count: ActivityCountAggregateOutputType | null
    _min: ActivityMinAggregateOutputType | null
    _max: ActivityMaxAggregateOutputType | null
  }

  export type ActivityMinAggregateOutputType = {
    id: string | null
    title: string | null
    description: string | null
    addedById: string | null
    needFollowUp: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
    type: $Enums.ActivityType | null
    contactId: string | null
    followUpDate: Date | null
    assignedToId: string | null
    followUpActivityId: string | null
  }

  export type ActivityMaxAggregateOutputType = {
    id: string | null
    title: string | null
    description: string | null
    addedById: string | null
    needFollowUp: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
    type: $Enums.ActivityType | null
    contactId: string | null
    followUpDate: Date | null
    assignedToId: string | null
    followUpActivityId: string | null
  }

  export type ActivityCountAggregateOutputType = {
    id: number
    title: number
    description: number
    addedById: number
    needFollowUp: number
    createdAt: number
    updatedAt: number
    type: number
    contactId: number
    followUpDate: number
    assignedToId: number
    followUpActivityId: number
    _all: number
  }


  export type ActivityMinAggregateInputType = {
    id?: true
    title?: true
    description?: true
    addedById?: true
    needFollowUp?: true
    createdAt?: true
    updatedAt?: true
    type?: true
    contactId?: true
    followUpDate?: true
    assignedToId?: true
    followUpActivityId?: true
  }

  export type ActivityMaxAggregateInputType = {
    id?: true
    title?: true
    description?: true
    addedById?: true
    needFollowUp?: true
    createdAt?: true
    updatedAt?: true
    type?: true
    contactId?: true
    followUpDate?: true
    assignedToId?: true
    followUpActivityId?: true
  }

  export type ActivityCountAggregateInputType = {
    id?: true
    title?: true
    description?: true
    addedById?: true
    needFollowUp?: true
    createdAt?: true
    updatedAt?: true
    type?: true
    contactId?: true
    followUpDate?: true
    assignedToId?: true
    followUpActivityId?: true
    _all?: true
  }

  export type ActivityAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Activity to aggregate.
     */
    where?: ActivityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Activities to fetch.
     */
    orderBy?: ActivityOrderByWithRelationInput | ActivityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ActivityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Activities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Activities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Activities
    **/
    _count?: true | ActivityCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ActivityMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ActivityMaxAggregateInputType
  }

  export type GetActivityAggregateType<T extends ActivityAggregateArgs> = {
        [P in keyof T & keyof AggregateActivity]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateActivity[P]>
      : GetScalarType<T[P], AggregateActivity[P]>
  }




  export type ActivityGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ActivityWhereInput
    orderBy?: ActivityOrderByWithAggregationInput | ActivityOrderByWithAggregationInput[]
    by: ActivityScalarFieldEnum[] | ActivityScalarFieldEnum
    having?: ActivityScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ActivityCountAggregateInputType | true
    _min?: ActivityMinAggregateInputType
    _max?: ActivityMaxAggregateInputType
  }

  export type ActivityGroupByOutputType = {
    id: string
    title: string
    description: string
    addedById: string
    needFollowUp: boolean
    createdAt: Date
    updatedAt: Date
    type: $Enums.ActivityType
    contactId: string
    followUpDate: Date | null
    assignedToId: string | null
    followUpActivityId: string | null
    _count: ActivityCountAggregateOutputType | null
    _min: ActivityMinAggregateOutputType | null
    _max: ActivityMaxAggregateOutputType | null
  }

  type GetActivityGroupByPayload<T extends ActivityGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ActivityGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ActivityGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ActivityGroupByOutputType[P]>
            : GetScalarType<T[P], ActivityGroupByOutputType[P]>
        }
      >
    >


  export type ActivitySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    addedById?: boolean
    needFollowUp?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    type?: boolean
    contactId?: boolean
    followUpDate?: boolean
    assignedToId?: boolean
    followUpActivityId?: boolean
    addedBy?: boolean | UserDefaultArgs<ExtArgs>
    tags?: boolean | Activity$tagsArgs<ExtArgs>
    contact?: boolean | ContactDefaultArgs<ExtArgs>
    assignedTo?: boolean | Activity$assignedToArgs<ExtArgs>
    followUpActivity?: boolean | Activity$followUpActivityArgs<ExtArgs>
    followUpActivities?: boolean | Activity$followUpActivitiesArgs<ExtArgs>
    _count?: boolean | ActivityCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["activity"]>

  export type ActivitySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    addedById?: boolean
    needFollowUp?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    type?: boolean
    contactId?: boolean
    followUpDate?: boolean
    assignedToId?: boolean
    followUpActivityId?: boolean
    addedBy?: boolean | UserDefaultArgs<ExtArgs>
    contact?: boolean | ContactDefaultArgs<ExtArgs>
    assignedTo?: boolean | Activity$assignedToArgs<ExtArgs>
    followUpActivity?: boolean | Activity$followUpActivityArgs<ExtArgs>
  }, ExtArgs["result"]["activity"]>

  export type ActivitySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    addedById?: boolean
    needFollowUp?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    type?: boolean
    contactId?: boolean
    followUpDate?: boolean
    assignedToId?: boolean
    followUpActivityId?: boolean
    addedBy?: boolean | UserDefaultArgs<ExtArgs>
    contact?: boolean | ContactDefaultArgs<ExtArgs>
    assignedTo?: boolean | Activity$assignedToArgs<ExtArgs>
    followUpActivity?: boolean | Activity$followUpActivityArgs<ExtArgs>
  }, ExtArgs["result"]["activity"]>

  export type ActivitySelectScalar = {
    id?: boolean
    title?: boolean
    description?: boolean
    addedById?: boolean
    needFollowUp?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    type?: boolean
    contactId?: boolean
    followUpDate?: boolean
    assignedToId?: boolean
    followUpActivityId?: boolean
  }

  export type ActivityOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "description" | "addedById" | "needFollowUp" | "createdAt" | "updatedAt" | "type" | "contactId" | "followUpDate" | "assignedToId" | "followUpActivityId", ExtArgs["result"]["activity"]>
  export type ActivityInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    addedBy?: boolean | UserDefaultArgs<ExtArgs>
    tags?: boolean | Activity$tagsArgs<ExtArgs>
    contact?: boolean | ContactDefaultArgs<ExtArgs>
    assignedTo?: boolean | Activity$assignedToArgs<ExtArgs>
    followUpActivity?: boolean | Activity$followUpActivityArgs<ExtArgs>
    followUpActivities?: boolean | Activity$followUpActivitiesArgs<ExtArgs>
    _count?: boolean | ActivityCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ActivityIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    addedBy?: boolean | UserDefaultArgs<ExtArgs>
    contact?: boolean | ContactDefaultArgs<ExtArgs>
    assignedTo?: boolean | Activity$assignedToArgs<ExtArgs>
    followUpActivity?: boolean | Activity$followUpActivityArgs<ExtArgs>
  }
  export type ActivityIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    addedBy?: boolean | UserDefaultArgs<ExtArgs>
    contact?: boolean | ContactDefaultArgs<ExtArgs>
    assignedTo?: boolean | Activity$assignedToArgs<ExtArgs>
    followUpActivity?: boolean | Activity$followUpActivityArgs<ExtArgs>
  }

  export type $ActivityPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Activity"
    objects: {
      addedBy: Prisma.$UserPayload<ExtArgs>
      tags: Prisma.$TagPayload<ExtArgs>[]
      contact: Prisma.$ContactPayload<ExtArgs>
      assignedTo: Prisma.$UserPayload<ExtArgs> | null
      followUpActivity: Prisma.$ActivityPayload<ExtArgs> | null
      followUpActivities: Prisma.$ActivityPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      description: string
      addedById: string
      needFollowUp: boolean
      createdAt: Date
      updatedAt: Date
      type: $Enums.ActivityType
      contactId: string
      followUpDate: Date | null
      assignedToId: string | null
      followUpActivityId: string | null
    }, ExtArgs["result"]["activity"]>
    composites: {}
  }

  type ActivityGetPayload<S extends boolean | null | undefined | ActivityDefaultArgs> = $Result.GetResult<Prisma.$ActivityPayload, S>

  type ActivityCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ActivityFindManyArgs, 'select' | 'include' | 'distinct' | 'omit' | 'relationLoadStrategy'> & {
      select?: ActivityCountAggregateInputType | true
    }

  export interface ActivityDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Activity'], meta: { name: 'Activity' } }
    /**
     * Find zero or one Activity that matches the filter.
     * @param {ActivityFindUniqueArgs} args - Arguments to find a Activity
     * @example
     * // Get one Activity
     * const activity = await prisma.activity.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ActivityFindUniqueArgs>(args: SelectSubset<T, ActivityFindUniqueArgs<ExtArgs>>): Prisma__ActivityClient<$Result.GetResult<Prisma.$ActivityPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Activity that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ActivityFindUniqueOrThrowArgs} args - Arguments to find a Activity
     * @example
     * // Get one Activity
     * const activity = await prisma.activity.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ActivityFindUniqueOrThrowArgs>(args: SelectSubset<T, ActivityFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ActivityClient<$Result.GetResult<Prisma.$ActivityPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Activity that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActivityFindFirstArgs} args - Arguments to find a Activity
     * @example
     * // Get one Activity
     * const activity = await prisma.activity.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ActivityFindFirstArgs>(args?: SelectSubset<T, ActivityFindFirstArgs<ExtArgs>>): Prisma__ActivityClient<$Result.GetResult<Prisma.$ActivityPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Activity that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActivityFindFirstOrThrowArgs} args - Arguments to find a Activity
     * @example
     * // Get one Activity
     * const activity = await prisma.activity.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ActivityFindFirstOrThrowArgs>(args?: SelectSubset<T, ActivityFindFirstOrThrowArgs<ExtArgs>>): Prisma__ActivityClient<$Result.GetResult<Prisma.$ActivityPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Activities that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActivityFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Activities
     * const activities = await prisma.activity.findMany()
     * 
     * // Get first 10 Activities
     * const activities = await prisma.activity.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const activityWithIdOnly = await prisma.activity.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ActivityFindManyArgs>(args?: SelectSubset<T, ActivityFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ActivityPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Activity.
     * @param {ActivityCreateArgs} args - Arguments to create a Activity.
     * @example
     * // Create one Activity
     * const Activity = await prisma.activity.create({
     *   data: {
     *     // ... data to create a Activity
     *   }
     * })
     * 
     */
    create<T extends ActivityCreateArgs>(args: SelectSubset<T, ActivityCreateArgs<ExtArgs>>): Prisma__ActivityClient<$Result.GetResult<Prisma.$ActivityPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Activities.
     * @param {ActivityCreateManyArgs} args - Arguments to create many Activities.
     * @example
     * // Create many Activities
     * const activity = await prisma.activity.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ActivityCreateManyArgs>(args?: SelectSubset<T, ActivityCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Activities and returns the data saved in the database.
     * @param {ActivityCreateManyAndReturnArgs} args - Arguments to create many Activities.
     * @example
     * // Create many Activities
     * const activity = await prisma.activity.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Activities and only return the `id`
     * const activityWithIdOnly = await prisma.activity.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ActivityCreateManyAndReturnArgs>(args?: SelectSubset<T, ActivityCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ActivityPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Activity.
     * @param {ActivityDeleteArgs} args - Arguments to delete one Activity.
     * @example
     * // Delete one Activity
     * const Activity = await prisma.activity.delete({
     *   where: {
     *     // ... filter to delete one Activity
     *   }
     * })
     * 
     */
    delete<T extends ActivityDeleteArgs>(args: SelectSubset<T, ActivityDeleteArgs<ExtArgs>>): Prisma__ActivityClient<$Result.GetResult<Prisma.$ActivityPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Activity.
     * @param {ActivityUpdateArgs} args - Arguments to update one Activity.
     * @example
     * // Update one Activity
     * const activity = await prisma.activity.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ActivityUpdateArgs>(args: SelectSubset<T, ActivityUpdateArgs<ExtArgs>>): Prisma__ActivityClient<$Result.GetResult<Prisma.$ActivityPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Activities.
     * @param {ActivityDeleteManyArgs} args - Arguments to filter Activities to delete.
     * @example
     * // Delete a few Activities
     * const { count } = await prisma.activity.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ActivityDeleteManyArgs>(args?: SelectSubset<T, ActivityDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Activities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActivityUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Activities
     * const activity = await prisma.activity.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ActivityUpdateManyArgs>(args: SelectSubset<T, ActivityUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Activities and returns the data updated in the database.
     * @param {ActivityUpdateManyAndReturnArgs} args - Arguments to update many Activities.
     * @example
     * // Update many Activities
     * const activity = await prisma.activity.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Activities and only return the `id`
     * const activityWithIdOnly = await prisma.activity.updateManyAndReturn({
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
    updateManyAndReturn<T extends ActivityUpdateManyAndReturnArgs>(args: SelectSubset<T, ActivityUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ActivityPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Activity.
     * @param {ActivityUpsertArgs} args - Arguments to update or create a Activity.
     * @example
     * // Update or create a Activity
     * const activity = await prisma.activity.upsert({
     *   create: {
     *     // ... data to create a Activity
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Activity we want to update
     *   }
     * })
     */
    upsert<T extends ActivityUpsertArgs>(args: SelectSubset<T, ActivityUpsertArgs<ExtArgs>>): Prisma__ActivityClient<$Result.GetResult<Prisma.$ActivityPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Activities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActivityCountArgs} args - Arguments to filter Activities to count.
     * @example
     * // Count the number of Activities
     * const count = await prisma.activity.count({
     *   where: {
     *     // ... the filter for the Activities we want to count
     *   }
     * })
    **/
    count<T extends ActivityCountArgs>(
      args?: Subset<T, ActivityCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ActivityCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Activity.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActivityAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ActivityAggregateArgs>(args: Subset<T, ActivityAggregateArgs>): Prisma.PrismaPromise<GetActivityAggregateType<T>>

    /**
     * Group by Activity.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActivityGroupByArgs} args - Group by arguments.
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
      T extends ActivityGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ActivityGroupByArgs['orderBy'] }
        : { orderBy?: ActivityGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ActivityGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetActivityGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Activity model
   */
  readonly fields: ActivityFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Activity.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ActivityClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    addedBy<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    tags<T extends Activity$tagsArgs<ExtArgs> = {}>(args?: Subset<T, Activity$tagsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    contact<T extends ContactDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ContactDefaultArgs<ExtArgs>>): Prisma__ContactClient<$Result.GetResult<Prisma.$ContactPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    assignedTo<T extends Activity$assignedToArgs<ExtArgs> = {}>(args?: Subset<T, Activity$assignedToArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    followUpActivity<T extends Activity$followUpActivityArgs<ExtArgs> = {}>(args?: Subset<T, Activity$followUpActivityArgs<ExtArgs>>): Prisma__ActivityClient<$Result.GetResult<Prisma.$ActivityPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    followUpActivities<T extends Activity$followUpActivitiesArgs<ExtArgs> = {}>(args?: Subset<T, Activity$followUpActivitiesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ActivityPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Activity model
   */
  interface ActivityFieldRefs {
    readonly id: FieldRef<"Activity", 'String'>
    readonly title: FieldRef<"Activity", 'String'>
    readonly description: FieldRef<"Activity", 'String'>
    readonly addedById: FieldRef<"Activity", 'String'>
    readonly needFollowUp: FieldRef<"Activity", 'Boolean'>
    readonly createdAt: FieldRef<"Activity", 'DateTime'>
    readonly updatedAt: FieldRef<"Activity", 'DateTime'>
    readonly type: FieldRef<"Activity", 'ActivityType'>
    readonly contactId: FieldRef<"Activity", 'String'>
    readonly followUpDate: FieldRef<"Activity", 'DateTime'>
    readonly assignedToId: FieldRef<"Activity", 'String'>
    readonly followUpActivityId: FieldRef<"Activity", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Activity findUnique
   */
  export type ActivityFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Activity
     */
    select?: ActivitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Activity
     */
    omit?: ActivityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityInclude<ExtArgs> | null
    /**
     * Filter, which Activity to fetch.
     */
    where: ActivityWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * Activity findUniqueOrThrow
   */
  export type ActivityFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Activity
     */
    select?: ActivitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Activity
     */
    omit?: ActivityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityInclude<ExtArgs> | null
    /**
     * Filter, which Activity to fetch.
     */
    where: ActivityWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * Activity findFirst
   */
  export type ActivityFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Activity
     */
    select?: ActivitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Activity
     */
    omit?: ActivityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityInclude<ExtArgs> | null
    /**
     * Filter, which Activity to fetch.
     */
    where?: ActivityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Activities to fetch.
     */
    orderBy?: ActivityOrderByWithRelationInput | ActivityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Activities.
     */
    cursor?: ActivityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Activities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Activities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Activities.
     */
    distinct?: ActivityScalarFieldEnum | ActivityScalarFieldEnum[]
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * Activity findFirstOrThrow
   */
  export type ActivityFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Activity
     */
    select?: ActivitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Activity
     */
    omit?: ActivityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityInclude<ExtArgs> | null
    /**
     * Filter, which Activity to fetch.
     */
    where?: ActivityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Activities to fetch.
     */
    orderBy?: ActivityOrderByWithRelationInput | ActivityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Activities.
     */
    cursor?: ActivityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Activities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Activities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Activities.
     */
    distinct?: ActivityScalarFieldEnum | ActivityScalarFieldEnum[]
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * Activity findMany
   */
  export type ActivityFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Activity
     */
    select?: ActivitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Activity
     */
    omit?: ActivityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityInclude<ExtArgs> | null
    /**
     * Filter, which Activities to fetch.
     */
    where?: ActivityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Activities to fetch.
     */
    orderBy?: ActivityOrderByWithRelationInput | ActivityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Activities.
     */
    cursor?: ActivityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Activities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Activities.
     */
    skip?: number
    distinct?: ActivityScalarFieldEnum | ActivityScalarFieldEnum[]
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * Activity create
   */
  export type ActivityCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Activity
     */
    select?: ActivitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Activity
     */
    omit?: ActivityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityInclude<ExtArgs> | null
    /**
     * The data needed to create a Activity.
     */
    data: XOR<ActivityCreateInput, ActivityUncheckedCreateInput>
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * Activity createMany
   */
  export type ActivityCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Activities.
     */
    data: ActivityCreateManyInput | ActivityCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Activity createManyAndReturn
   */
  export type ActivityCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Activity
     */
    select?: ActivitySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Activity
     */
    omit?: ActivityOmit<ExtArgs> | null
    /**
     * The data used to create many Activities.
     */
    data: ActivityCreateManyInput | ActivityCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Activity update
   */
  export type ActivityUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Activity
     */
    select?: ActivitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Activity
     */
    omit?: ActivityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityInclude<ExtArgs> | null
    /**
     * The data needed to update a Activity.
     */
    data: XOR<ActivityUpdateInput, ActivityUncheckedUpdateInput>
    /**
     * Choose, which Activity to update.
     */
    where: ActivityWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * Activity updateMany
   */
  export type ActivityUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Activities.
     */
    data: XOR<ActivityUpdateManyMutationInput, ActivityUncheckedUpdateManyInput>
    /**
     * Filter which Activities to update
     */
    where?: ActivityWhereInput
    /**
     * Limit how many Activities to update.
     */
    limit?: number
  }

  /**
   * Activity updateManyAndReturn
   */
  export type ActivityUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Activity
     */
    select?: ActivitySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Activity
     */
    omit?: ActivityOmit<ExtArgs> | null
    /**
     * The data used to update Activities.
     */
    data: XOR<ActivityUpdateManyMutationInput, ActivityUncheckedUpdateManyInput>
    /**
     * Filter which Activities to update
     */
    where?: ActivityWhereInput
    /**
     * Limit how many Activities to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Activity upsert
   */
  export type ActivityUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Activity
     */
    select?: ActivitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Activity
     */
    omit?: ActivityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityInclude<ExtArgs> | null
    /**
     * The filter to search for the Activity to update in case it exists.
     */
    where: ActivityWhereUniqueInput
    /**
     * In case the Activity found by the `where` argument doesn't exist, create a new Activity with this data.
     */
    create: XOR<ActivityCreateInput, ActivityUncheckedCreateInput>
    /**
     * In case the Activity was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ActivityUpdateInput, ActivityUncheckedUpdateInput>
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * Activity delete
   */
  export type ActivityDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Activity
     */
    select?: ActivitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Activity
     */
    omit?: ActivityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityInclude<ExtArgs> | null
    /**
     * Filter which Activity to delete.
     */
    where: ActivityWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * Activity deleteMany
   */
  export type ActivityDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Activities to delete
     */
    where?: ActivityWhereInput
    /**
     * Limit how many Activities to delete.
     */
    limit?: number
  }

  /**
   * Activity.tags
   */
  export type Activity$tagsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
    where?: TagWhereInput
    orderBy?: TagOrderByWithRelationInput | TagOrderByWithRelationInput[]
    cursor?: TagWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TagScalarFieldEnum | TagScalarFieldEnum[]
  }

  /**
   * Activity.assignedTo
   */
  export type Activity$assignedToArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * Activity.followUpActivity
   */
  export type Activity$followUpActivityArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Activity
     */
    select?: ActivitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Activity
     */
    omit?: ActivityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityInclude<ExtArgs> | null
    where?: ActivityWhereInput
  }

  /**
   * Activity.followUpActivities
   */
  export type Activity$followUpActivitiesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Activity
     */
    select?: ActivitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Activity
     */
    omit?: ActivityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityInclude<ExtArgs> | null
    where?: ActivityWhereInput
    orderBy?: ActivityOrderByWithRelationInput | ActivityOrderByWithRelationInput[]
    cursor?: ActivityWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ActivityScalarFieldEnum | ActivityScalarFieldEnum[]
  }

  /**
   * Activity without action
   */
  export type ActivityDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Activity
     */
    select?: ActivitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Activity
     */
    omit?: ActivityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityInclude<ExtArgs> | null
  }


  /**
   * Model Note
   */

  export type AggregateNote = {
    _count: NoteCountAggregateOutputType | null
    _min: NoteMinAggregateOutputType | null
    _max: NoteMaxAggregateOutputType | null
  }

  export type NoteMinAggregateOutputType = {
    id: string | null
    title: string | null
    description: string | null
    category: $Enums.NoteCategory | null
    createdAt: Date | null
    updatedAt: Date | null
    contactId: string | null
    createdById: string | null
  }

  export type NoteMaxAggregateOutputType = {
    id: string | null
    title: string | null
    description: string | null
    category: $Enums.NoteCategory | null
    createdAt: Date | null
    updatedAt: Date | null
    contactId: string | null
    createdById: string | null
  }

  export type NoteCountAggregateOutputType = {
    id: number
    title: number
    description: number
    category: number
    createdAt: number
    updatedAt: number
    contactId: number
    createdById: number
    _all: number
  }


  export type NoteMinAggregateInputType = {
    id?: true
    title?: true
    description?: true
    category?: true
    createdAt?: true
    updatedAt?: true
    contactId?: true
    createdById?: true
  }

  export type NoteMaxAggregateInputType = {
    id?: true
    title?: true
    description?: true
    category?: true
    createdAt?: true
    updatedAt?: true
    contactId?: true
    createdById?: true
  }

  export type NoteCountAggregateInputType = {
    id?: true
    title?: true
    description?: true
    category?: true
    createdAt?: true
    updatedAt?: true
    contactId?: true
    createdById?: true
    _all?: true
  }

  export type NoteAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Note to aggregate.
     */
    where?: NoteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notes to fetch.
     */
    orderBy?: NoteOrderByWithRelationInput | NoteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: NoteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Notes
    **/
    _count?: true | NoteCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: NoteMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: NoteMaxAggregateInputType
  }

  export type GetNoteAggregateType<T extends NoteAggregateArgs> = {
        [P in keyof T & keyof AggregateNote]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateNote[P]>
      : GetScalarType<T[P], AggregateNote[P]>
  }




  export type NoteGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NoteWhereInput
    orderBy?: NoteOrderByWithAggregationInput | NoteOrderByWithAggregationInput[]
    by: NoteScalarFieldEnum[] | NoteScalarFieldEnum
    having?: NoteScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: NoteCountAggregateInputType | true
    _min?: NoteMinAggregateInputType
    _max?: NoteMaxAggregateInputType
  }

  export type NoteGroupByOutputType = {
    id: string
    title: string
    description: string
    category: $Enums.NoteCategory
    createdAt: Date
    updatedAt: Date
    contactId: string
    createdById: string
    _count: NoteCountAggregateOutputType | null
    _min: NoteMinAggregateOutputType | null
    _max: NoteMaxAggregateOutputType | null
  }

  type GetNoteGroupByPayload<T extends NoteGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<NoteGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof NoteGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], NoteGroupByOutputType[P]>
            : GetScalarType<T[P], NoteGroupByOutputType[P]>
        }
      >
    >


  export type NoteSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    category?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    contactId?: boolean
    createdById?: boolean
    contact?: boolean | ContactDefaultArgs<ExtArgs>
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["note"]>

  export type NoteSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    category?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    contactId?: boolean
    createdById?: boolean
    contact?: boolean | ContactDefaultArgs<ExtArgs>
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["note"]>

  export type NoteSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    category?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    contactId?: boolean
    createdById?: boolean
    contact?: boolean | ContactDefaultArgs<ExtArgs>
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["note"]>

  export type NoteSelectScalar = {
    id?: boolean
    title?: boolean
    description?: boolean
    category?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    contactId?: boolean
    createdById?: boolean
  }

  export type NoteOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "description" | "category" | "createdAt" | "updatedAt" | "contactId" | "createdById", ExtArgs["result"]["note"]>
  export type NoteInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    contact?: boolean | ContactDefaultArgs<ExtArgs>
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type NoteIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    contact?: boolean | ContactDefaultArgs<ExtArgs>
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type NoteIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    contact?: boolean | ContactDefaultArgs<ExtArgs>
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $NotePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Note"
    objects: {
      contact: Prisma.$ContactPayload<ExtArgs>
      createdBy: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      description: string
      category: $Enums.NoteCategory
      createdAt: Date
      updatedAt: Date
      contactId: string
      createdById: string
    }, ExtArgs["result"]["note"]>
    composites: {}
  }

  type NoteGetPayload<S extends boolean | null | undefined | NoteDefaultArgs> = $Result.GetResult<Prisma.$NotePayload, S>

  type NoteCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<NoteFindManyArgs, 'select' | 'include' | 'distinct' | 'omit' | 'relationLoadStrategy'> & {
      select?: NoteCountAggregateInputType | true
    }

  export interface NoteDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Note'], meta: { name: 'Note' } }
    /**
     * Find zero or one Note that matches the filter.
     * @param {NoteFindUniqueArgs} args - Arguments to find a Note
     * @example
     * // Get one Note
     * const note = await prisma.note.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends NoteFindUniqueArgs>(args: SelectSubset<T, NoteFindUniqueArgs<ExtArgs>>): Prisma__NoteClient<$Result.GetResult<Prisma.$NotePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Note that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {NoteFindUniqueOrThrowArgs} args - Arguments to find a Note
     * @example
     * // Get one Note
     * const note = await prisma.note.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends NoteFindUniqueOrThrowArgs>(args: SelectSubset<T, NoteFindUniqueOrThrowArgs<ExtArgs>>): Prisma__NoteClient<$Result.GetResult<Prisma.$NotePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Note that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NoteFindFirstArgs} args - Arguments to find a Note
     * @example
     * // Get one Note
     * const note = await prisma.note.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends NoteFindFirstArgs>(args?: SelectSubset<T, NoteFindFirstArgs<ExtArgs>>): Prisma__NoteClient<$Result.GetResult<Prisma.$NotePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Note that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NoteFindFirstOrThrowArgs} args - Arguments to find a Note
     * @example
     * // Get one Note
     * const note = await prisma.note.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends NoteFindFirstOrThrowArgs>(args?: SelectSubset<T, NoteFindFirstOrThrowArgs<ExtArgs>>): Prisma__NoteClient<$Result.GetResult<Prisma.$NotePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Notes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NoteFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Notes
     * const notes = await prisma.note.findMany()
     * 
     * // Get first 10 Notes
     * const notes = await prisma.note.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const noteWithIdOnly = await prisma.note.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends NoteFindManyArgs>(args?: SelectSubset<T, NoteFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Note.
     * @param {NoteCreateArgs} args - Arguments to create a Note.
     * @example
     * // Create one Note
     * const Note = await prisma.note.create({
     *   data: {
     *     // ... data to create a Note
     *   }
     * })
     * 
     */
    create<T extends NoteCreateArgs>(args: SelectSubset<T, NoteCreateArgs<ExtArgs>>): Prisma__NoteClient<$Result.GetResult<Prisma.$NotePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Notes.
     * @param {NoteCreateManyArgs} args - Arguments to create many Notes.
     * @example
     * // Create many Notes
     * const note = await prisma.note.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends NoteCreateManyArgs>(args?: SelectSubset<T, NoteCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Notes and returns the data saved in the database.
     * @param {NoteCreateManyAndReturnArgs} args - Arguments to create many Notes.
     * @example
     * // Create many Notes
     * const note = await prisma.note.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Notes and only return the `id`
     * const noteWithIdOnly = await prisma.note.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends NoteCreateManyAndReturnArgs>(args?: SelectSubset<T, NoteCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Note.
     * @param {NoteDeleteArgs} args - Arguments to delete one Note.
     * @example
     * // Delete one Note
     * const Note = await prisma.note.delete({
     *   where: {
     *     // ... filter to delete one Note
     *   }
     * })
     * 
     */
    delete<T extends NoteDeleteArgs>(args: SelectSubset<T, NoteDeleteArgs<ExtArgs>>): Prisma__NoteClient<$Result.GetResult<Prisma.$NotePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Note.
     * @param {NoteUpdateArgs} args - Arguments to update one Note.
     * @example
     * // Update one Note
     * const note = await prisma.note.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends NoteUpdateArgs>(args: SelectSubset<T, NoteUpdateArgs<ExtArgs>>): Prisma__NoteClient<$Result.GetResult<Prisma.$NotePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Notes.
     * @param {NoteDeleteManyArgs} args - Arguments to filter Notes to delete.
     * @example
     * // Delete a few Notes
     * const { count } = await prisma.note.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends NoteDeleteManyArgs>(args?: SelectSubset<T, NoteDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Notes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NoteUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Notes
     * const note = await prisma.note.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends NoteUpdateManyArgs>(args: SelectSubset<T, NoteUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Notes and returns the data updated in the database.
     * @param {NoteUpdateManyAndReturnArgs} args - Arguments to update many Notes.
     * @example
     * // Update many Notes
     * const note = await prisma.note.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Notes and only return the `id`
     * const noteWithIdOnly = await prisma.note.updateManyAndReturn({
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
    updateManyAndReturn<T extends NoteUpdateManyAndReturnArgs>(args: SelectSubset<T, NoteUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Note.
     * @param {NoteUpsertArgs} args - Arguments to update or create a Note.
     * @example
     * // Update or create a Note
     * const note = await prisma.note.upsert({
     *   create: {
     *     // ... data to create a Note
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Note we want to update
     *   }
     * })
     */
    upsert<T extends NoteUpsertArgs>(args: SelectSubset<T, NoteUpsertArgs<ExtArgs>>): Prisma__NoteClient<$Result.GetResult<Prisma.$NotePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Notes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NoteCountArgs} args - Arguments to filter Notes to count.
     * @example
     * // Count the number of Notes
     * const count = await prisma.note.count({
     *   where: {
     *     // ... the filter for the Notes we want to count
     *   }
     * })
    **/
    count<T extends NoteCountArgs>(
      args?: Subset<T, NoteCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], NoteCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Note.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NoteAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends NoteAggregateArgs>(args: Subset<T, NoteAggregateArgs>): Prisma.PrismaPromise<GetNoteAggregateType<T>>

    /**
     * Group by Note.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NoteGroupByArgs} args - Group by arguments.
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
      T extends NoteGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: NoteGroupByArgs['orderBy'] }
        : { orderBy?: NoteGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, NoteGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetNoteGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Note model
   */
  readonly fields: NoteFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Note.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__NoteClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    contact<T extends ContactDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ContactDefaultArgs<ExtArgs>>): Prisma__ContactClient<$Result.GetResult<Prisma.$ContactPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    createdBy<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Note model
   */
  interface NoteFieldRefs {
    readonly id: FieldRef<"Note", 'String'>
    readonly title: FieldRef<"Note", 'String'>
    readonly description: FieldRef<"Note", 'String'>
    readonly category: FieldRef<"Note", 'NoteCategory'>
    readonly createdAt: FieldRef<"Note", 'DateTime'>
    readonly updatedAt: FieldRef<"Note", 'DateTime'>
    readonly contactId: FieldRef<"Note", 'String'>
    readonly createdById: FieldRef<"Note", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Note findUnique
   */
  export type NoteFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Note
     */
    select?: NoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Note
     */
    omit?: NoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NoteInclude<ExtArgs> | null
    /**
     * Filter, which Note to fetch.
     */
    where: NoteWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * Note findUniqueOrThrow
   */
  export type NoteFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Note
     */
    select?: NoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Note
     */
    omit?: NoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NoteInclude<ExtArgs> | null
    /**
     * Filter, which Note to fetch.
     */
    where: NoteWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * Note findFirst
   */
  export type NoteFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Note
     */
    select?: NoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Note
     */
    omit?: NoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NoteInclude<ExtArgs> | null
    /**
     * Filter, which Note to fetch.
     */
    where?: NoteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notes to fetch.
     */
    orderBy?: NoteOrderByWithRelationInput | NoteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Notes.
     */
    cursor?: NoteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Notes.
     */
    distinct?: NoteScalarFieldEnum | NoteScalarFieldEnum[]
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * Note findFirstOrThrow
   */
  export type NoteFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Note
     */
    select?: NoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Note
     */
    omit?: NoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NoteInclude<ExtArgs> | null
    /**
     * Filter, which Note to fetch.
     */
    where?: NoteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notes to fetch.
     */
    orderBy?: NoteOrderByWithRelationInput | NoteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Notes.
     */
    cursor?: NoteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Notes.
     */
    distinct?: NoteScalarFieldEnum | NoteScalarFieldEnum[]
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * Note findMany
   */
  export type NoteFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Note
     */
    select?: NoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Note
     */
    omit?: NoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NoteInclude<ExtArgs> | null
    /**
     * Filter, which Notes to fetch.
     */
    where?: NoteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notes to fetch.
     */
    orderBy?: NoteOrderByWithRelationInput | NoteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Notes.
     */
    cursor?: NoteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notes.
     */
    skip?: number
    distinct?: NoteScalarFieldEnum | NoteScalarFieldEnum[]
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * Note create
   */
  export type NoteCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Note
     */
    select?: NoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Note
     */
    omit?: NoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NoteInclude<ExtArgs> | null
    /**
     * The data needed to create a Note.
     */
    data: XOR<NoteCreateInput, NoteUncheckedCreateInput>
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * Note createMany
   */
  export type NoteCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Notes.
     */
    data: NoteCreateManyInput | NoteCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Note createManyAndReturn
   */
  export type NoteCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Note
     */
    select?: NoteSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Note
     */
    omit?: NoteOmit<ExtArgs> | null
    /**
     * The data used to create many Notes.
     */
    data: NoteCreateManyInput | NoteCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NoteIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Note update
   */
  export type NoteUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Note
     */
    select?: NoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Note
     */
    omit?: NoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NoteInclude<ExtArgs> | null
    /**
     * The data needed to update a Note.
     */
    data: XOR<NoteUpdateInput, NoteUncheckedUpdateInput>
    /**
     * Choose, which Note to update.
     */
    where: NoteWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * Note updateMany
   */
  export type NoteUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Notes.
     */
    data: XOR<NoteUpdateManyMutationInput, NoteUncheckedUpdateManyInput>
    /**
     * Filter which Notes to update
     */
    where?: NoteWhereInput
    /**
     * Limit how many Notes to update.
     */
    limit?: number
  }

  /**
   * Note updateManyAndReturn
   */
  export type NoteUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Note
     */
    select?: NoteSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Note
     */
    omit?: NoteOmit<ExtArgs> | null
    /**
     * The data used to update Notes.
     */
    data: XOR<NoteUpdateManyMutationInput, NoteUncheckedUpdateManyInput>
    /**
     * Filter which Notes to update
     */
    where?: NoteWhereInput
    /**
     * Limit how many Notes to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NoteIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Note upsert
   */
  export type NoteUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Note
     */
    select?: NoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Note
     */
    omit?: NoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NoteInclude<ExtArgs> | null
    /**
     * The filter to search for the Note to update in case it exists.
     */
    where: NoteWhereUniqueInput
    /**
     * In case the Note found by the `where` argument doesn't exist, create a new Note with this data.
     */
    create: XOR<NoteCreateInput, NoteUncheckedCreateInput>
    /**
     * In case the Note was found with the provided `where` argument, update it with this data.
     */
    update: XOR<NoteUpdateInput, NoteUncheckedUpdateInput>
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * Note delete
   */
  export type NoteDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Note
     */
    select?: NoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Note
     */
    omit?: NoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NoteInclude<ExtArgs> | null
    /**
     * Filter which Note to delete.
     */
    where: NoteWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * Note deleteMany
   */
  export type NoteDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Notes to delete
     */
    where?: NoteWhereInput
    /**
     * Limit how many Notes to delete.
     */
    limit?: number
  }

  /**
   * Note without action
   */
  export type NoteDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Note
     */
    select?: NoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Note
     */
    omit?: NoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NoteInclude<ExtArgs> | null
  }


  /**
   * Model Contact
   */

  export type AggregateContact = {
    _count: ContactCountAggregateOutputType | null
    _avg: ContactAvgAggregateOutputType | null
    _sum: ContactSumAggregateOutputType | null
    _min: ContactMinAggregateOutputType | null
    _max: ContactMaxAggregateOutputType | null
  }

  export type ContactAvgAggregateOutputType = {
    leadScore: number | null
    followUpFrequency: number | null
  }

  export type ContactSumAggregateOutputType = {
    leadScore: number | null
    followUpFrequency: number | null
  }

  export type ContactMinAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    phoneNumber: string | null
    alternateNumber: string | null
    branchId: string | null
    contactType: $Enums.ContactType | null
    leadSegment: $Enums.LeadSegment | null
    leadScore: number | null
    followUpFrequency: number | null
    followUpOn: Date | null
    assignedToId: string | null
    createdAt: Date | null
    updatedAt: Date | null
    contactOrgId: string | null
  }

  export type ContactMaxAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    phoneNumber: string | null
    alternateNumber: string | null
    branchId: string | null
    contactType: $Enums.ContactType | null
    leadSegment: $Enums.LeadSegment | null
    leadScore: number | null
    followUpFrequency: number | null
    followUpOn: Date | null
    assignedToId: string | null
    createdAt: Date | null
    updatedAt: Date | null
    contactOrgId: string | null
  }

  export type ContactCountAggregateOutputType = {
    id: number
    name: number
    email: number
    phoneNumber: number
    alternateNumber: number
    branchId: number
    contactType: number
    leadSegment: number
    leadScore: number
    followUpFrequency: number
    followUpOn: number
    assignedToId: number
    createdAt: number
    updatedAt: number
    contactOrgId: number
    _all: number
  }


  export type ContactAvgAggregateInputType = {
    leadScore?: true
    followUpFrequency?: true
  }

  export type ContactSumAggregateInputType = {
    leadScore?: true
    followUpFrequency?: true
  }

  export type ContactMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    phoneNumber?: true
    alternateNumber?: true
    branchId?: true
    contactType?: true
    leadSegment?: true
    leadScore?: true
    followUpFrequency?: true
    followUpOn?: true
    assignedToId?: true
    createdAt?: true
    updatedAt?: true
    contactOrgId?: true
  }

  export type ContactMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    phoneNumber?: true
    alternateNumber?: true
    branchId?: true
    contactType?: true
    leadSegment?: true
    leadScore?: true
    followUpFrequency?: true
    followUpOn?: true
    assignedToId?: true
    createdAt?: true
    updatedAt?: true
    contactOrgId?: true
  }

  export type ContactCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    phoneNumber?: true
    alternateNumber?: true
    branchId?: true
    contactType?: true
    leadSegment?: true
    leadScore?: true
    followUpFrequency?: true
    followUpOn?: true
    assignedToId?: true
    createdAt?: true
    updatedAt?: true
    contactOrgId?: true
    _all?: true
  }

  export type ContactAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Contact to aggregate.
     */
    where?: ContactWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Contacts to fetch.
     */
    orderBy?: ContactOrderByWithRelationInput | ContactOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ContactWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Contacts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Contacts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Contacts
    **/
    _count?: true | ContactCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ContactAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ContactSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ContactMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ContactMaxAggregateInputType
  }

  export type GetContactAggregateType<T extends ContactAggregateArgs> = {
        [P in keyof T & keyof AggregateContact]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateContact[P]>
      : GetScalarType<T[P], AggregateContact[P]>
  }




  export type ContactGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ContactWhereInput
    orderBy?: ContactOrderByWithAggregationInput | ContactOrderByWithAggregationInput[]
    by: ContactScalarFieldEnum[] | ContactScalarFieldEnum
    having?: ContactScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ContactCountAggregateInputType | true
    _avg?: ContactAvgAggregateInputType
    _sum?: ContactSumAggregateInputType
    _min?: ContactMinAggregateInputType
    _max?: ContactMaxAggregateInputType
  }

  export type ContactGroupByOutputType = {
    id: string
    name: string
    email: string | null
    phoneNumber: string
    alternateNumber: string | null
    branchId: string | null
    contactType: $Enums.ContactType
    leadSegment: $Enums.LeadSegment | null
    leadScore: number | null
    followUpFrequency: number | null
    followUpOn: Date | null
    assignedToId: string | null
    createdAt: Date
    updatedAt: Date
    contactOrgId: string
    _count: ContactCountAggregateOutputType | null
    _avg: ContactAvgAggregateOutputType | null
    _sum: ContactSumAggregateOutputType | null
    _min: ContactMinAggregateOutputType | null
    _max: ContactMaxAggregateOutputType | null
  }

  type GetContactGroupByPayload<T extends ContactGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ContactGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ContactGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ContactGroupByOutputType[P]>
            : GetScalarType<T[P], ContactGroupByOutputType[P]>
        }
      >
    >


  export type ContactSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    phoneNumber?: boolean
    alternateNumber?: boolean
    branchId?: boolean
    contactType?: boolean
    leadSegment?: boolean
    leadScore?: boolean
    followUpFrequency?: boolean
    followUpOn?: boolean
    assignedToId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    contactOrgId?: boolean
    branch?: boolean | Contact$branchArgs<ExtArgs>
    assignedTo?: boolean | Contact$assignedToArgs<ExtArgs>
    pocBranch?: boolean | Contact$pocBranchArgs<ExtArgs>
    activities?: boolean | Contact$activitiesArgs<ExtArgs>
    notes?: boolean | Contact$notesArgs<ExtArgs>
    tags?: boolean | Contact$tagsArgs<ExtArgs>
    contactOrg?: boolean | OrganisationDefaultArgs<ExtArgs>
    _count?: boolean | ContactCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["contact"]>

  export type ContactSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    phoneNumber?: boolean
    alternateNumber?: boolean
    branchId?: boolean
    contactType?: boolean
    leadSegment?: boolean
    leadScore?: boolean
    followUpFrequency?: boolean
    followUpOn?: boolean
    assignedToId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    contactOrgId?: boolean
    branch?: boolean | Contact$branchArgs<ExtArgs>
    assignedTo?: boolean | Contact$assignedToArgs<ExtArgs>
    contactOrg?: boolean | OrganisationDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["contact"]>

  export type ContactSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    phoneNumber?: boolean
    alternateNumber?: boolean
    branchId?: boolean
    contactType?: boolean
    leadSegment?: boolean
    leadScore?: boolean
    followUpFrequency?: boolean
    followUpOn?: boolean
    assignedToId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    contactOrgId?: boolean
    branch?: boolean | Contact$branchArgs<ExtArgs>
    assignedTo?: boolean | Contact$assignedToArgs<ExtArgs>
    contactOrg?: boolean | OrganisationDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["contact"]>

  export type ContactSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    phoneNumber?: boolean
    alternateNumber?: boolean
    branchId?: boolean
    contactType?: boolean
    leadSegment?: boolean
    leadScore?: boolean
    followUpFrequency?: boolean
    followUpOn?: boolean
    assignedToId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    contactOrgId?: boolean
  }

  export type ContactOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "phoneNumber" | "alternateNumber" | "branchId" | "contactType" | "leadSegment" | "leadScore" | "followUpFrequency" | "followUpOn" | "assignedToId" | "createdAt" | "updatedAt" | "contactOrgId", ExtArgs["result"]["contact"]>
  export type ContactInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    branch?: boolean | Contact$branchArgs<ExtArgs>
    assignedTo?: boolean | Contact$assignedToArgs<ExtArgs>
    pocBranch?: boolean | Contact$pocBranchArgs<ExtArgs>
    activities?: boolean | Contact$activitiesArgs<ExtArgs>
    notes?: boolean | Contact$notesArgs<ExtArgs>
    tags?: boolean | Contact$tagsArgs<ExtArgs>
    contactOrg?: boolean | OrganisationDefaultArgs<ExtArgs>
    _count?: boolean | ContactCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ContactIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    branch?: boolean | Contact$branchArgs<ExtArgs>
    assignedTo?: boolean | Contact$assignedToArgs<ExtArgs>
    contactOrg?: boolean | OrganisationDefaultArgs<ExtArgs>
  }
  export type ContactIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    branch?: boolean | Contact$branchArgs<ExtArgs>
    assignedTo?: boolean | Contact$assignedToArgs<ExtArgs>
    contactOrg?: boolean | OrganisationDefaultArgs<ExtArgs>
  }

  export type $ContactPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Contact"
    objects: {
      branch: Prisma.$BranchPayload<ExtArgs> | null
      assignedTo: Prisma.$UserPayload<ExtArgs> | null
      pocBranch: Prisma.$BranchPayload<ExtArgs> | null
      activities: Prisma.$ActivityPayload<ExtArgs>[]
      notes: Prisma.$NotePayload<ExtArgs>[]
      tags: Prisma.$TagPayload<ExtArgs>[]
      contactOrg: Prisma.$OrganisationPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      email: string | null
      phoneNumber: string
      alternateNumber: string | null
      branchId: string | null
      contactType: $Enums.ContactType
      leadSegment: $Enums.LeadSegment | null
      leadScore: number | null
      followUpFrequency: number | null
      followUpOn: Date | null
      assignedToId: string | null
      createdAt: Date
      updatedAt: Date
      contactOrgId: string
    }, ExtArgs["result"]["contact"]>
    composites: {}
  }

  type ContactGetPayload<S extends boolean | null | undefined | ContactDefaultArgs> = $Result.GetResult<Prisma.$ContactPayload, S>

  type ContactCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ContactFindManyArgs, 'select' | 'include' | 'distinct' | 'omit' | 'relationLoadStrategy'> & {
      select?: ContactCountAggregateInputType | true
    }

  export interface ContactDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Contact'], meta: { name: 'Contact' } }
    /**
     * Find zero or one Contact that matches the filter.
     * @param {ContactFindUniqueArgs} args - Arguments to find a Contact
     * @example
     * // Get one Contact
     * const contact = await prisma.contact.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ContactFindUniqueArgs>(args: SelectSubset<T, ContactFindUniqueArgs<ExtArgs>>): Prisma__ContactClient<$Result.GetResult<Prisma.$ContactPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Contact that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ContactFindUniqueOrThrowArgs} args - Arguments to find a Contact
     * @example
     * // Get one Contact
     * const contact = await prisma.contact.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ContactFindUniqueOrThrowArgs>(args: SelectSubset<T, ContactFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ContactClient<$Result.GetResult<Prisma.$ContactPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Contact that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactFindFirstArgs} args - Arguments to find a Contact
     * @example
     * // Get one Contact
     * const contact = await prisma.contact.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ContactFindFirstArgs>(args?: SelectSubset<T, ContactFindFirstArgs<ExtArgs>>): Prisma__ContactClient<$Result.GetResult<Prisma.$ContactPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Contact that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactFindFirstOrThrowArgs} args - Arguments to find a Contact
     * @example
     * // Get one Contact
     * const contact = await prisma.contact.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ContactFindFirstOrThrowArgs>(args?: SelectSubset<T, ContactFindFirstOrThrowArgs<ExtArgs>>): Prisma__ContactClient<$Result.GetResult<Prisma.$ContactPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Contacts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Contacts
     * const contacts = await prisma.contact.findMany()
     * 
     * // Get first 10 Contacts
     * const contacts = await prisma.contact.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const contactWithIdOnly = await prisma.contact.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ContactFindManyArgs>(args?: SelectSubset<T, ContactFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContactPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Contact.
     * @param {ContactCreateArgs} args - Arguments to create a Contact.
     * @example
     * // Create one Contact
     * const Contact = await prisma.contact.create({
     *   data: {
     *     // ... data to create a Contact
     *   }
     * })
     * 
     */
    create<T extends ContactCreateArgs>(args: SelectSubset<T, ContactCreateArgs<ExtArgs>>): Prisma__ContactClient<$Result.GetResult<Prisma.$ContactPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Contacts.
     * @param {ContactCreateManyArgs} args - Arguments to create many Contacts.
     * @example
     * // Create many Contacts
     * const contact = await prisma.contact.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ContactCreateManyArgs>(args?: SelectSubset<T, ContactCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Contacts and returns the data saved in the database.
     * @param {ContactCreateManyAndReturnArgs} args - Arguments to create many Contacts.
     * @example
     * // Create many Contacts
     * const contact = await prisma.contact.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Contacts and only return the `id`
     * const contactWithIdOnly = await prisma.contact.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ContactCreateManyAndReturnArgs>(args?: SelectSubset<T, ContactCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContactPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Contact.
     * @param {ContactDeleteArgs} args - Arguments to delete one Contact.
     * @example
     * // Delete one Contact
     * const Contact = await prisma.contact.delete({
     *   where: {
     *     // ... filter to delete one Contact
     *   }
     * })
     * 
     */
    delete<T extends ContactDeleteArgs>(args: SelectSubset<T, ContactDeleteArgs<ExtArgs>>): Prisma__ContactClient<$Result.GetResult<Prisma.$ContactPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Contact.
     * @param {ContactUpdateArgs} args - Arguments to update one Contact.
     * @example
     * // Update one Contact
     * const contact = await prisma.contact.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ContactUpdateArgs>(args: SelectSubset<T, ContactUpdateArgs<ExtArgs>>): Prisma__ContactClient<$Result.GetResult<Prisma.$ContactPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Contacts.
     * @param {ContactDeleteManyArgs} args - Arguments to filter Contacts to delete.
     * @example
     * // Delete a few Contacts
     * const { count } = await prisma.contact.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ContactDeleteManyArgs>(args?: SelectSubset<T, ContactDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Contacts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Contacts
     * const contact = await prisma.contact.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ContactUpdateManyArgs>(args: SelectSubset<T, ContactUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Contacts and returns the data updated in the database.
     * @param {ContactUpdateManyAndReturnArgs} args - Arguments to update many Contacts.
     * @example
     * // Update many Contacts
     * const contact = await prisma.contact.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Contacts and only return the `id`
     * const contactWithIdOnly = await prisma.contact.updateManyAndReturn({
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
    updateManyAndReturn<T extends ContactUpdateManyAndReturnArgs>(args: SelectSubset<T, ContactUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContactPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Contact.
     * @param {ContactUpsertArgs} args - Arguments to update or create a Contact.
     * @example
     * // Update or create a Contact
     * const contact = await prisma.contact.upsert({
     *   create: {
     *     // ... data to create a Contact
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Contact we want to update
     *   }
     * })
     */
    upsert<T extends ContactUpsertArgs>(args: SelectSubset<T, ContactUpsertArgs<ExtArgs>>): Prisma__ContactClient<$Result.GetResult<Prisma.$ContactPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Contacts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactCountArgs} args - Arguments to filter Contacts to count.
     * @example
     * // Count the number of Contacts
     * const count = await prisma.contact.count({
     *   where: {
     *     // ... the filter for the Contacts we want to count
     *   }
     * })
    **/
    count<T extends ContactCountArgs>(
      args?: Subset<T, ContactCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ContactCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Contact.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ContactAggregateArgs>(args: Subset<T, ContactAggregateArgs>): Prisma.PrismaPromise<GetContactAggregateType<T>>

    /**
     * Group by Contact.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactGroupByArgs} args - Group by arguments.
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
      T extends ContactGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ContactGroupByArgs['orderBy'] }
        : { orderBy?: ContactGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ContactGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetContactGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Contact model
   */
  readonly fields: ContactFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Contact.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ContactClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    branch<T extends Contact$branchArgs<ExtArgs> = {}>(args?: Subset<T, Contact$branchArgs<ExtArgs>>): Prisma__BranchClient<$Result.GetResult<Prisma.$BranchPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    assignedTo<T extends Contact$assignedToArgs<ExtArgs> = {}>(args?: Subset<T, Contact$assignedToArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    pocBranch<T extends Contact$pocBranchArgs<ExtArgs> = {}>(args?: Subset<T, Contact$pocBranchArgs<ExtArgs>>): Prisma__BranchClient<$Result.GetResult<Prisma.$BranchPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    activities<T extends Contact$activitiesArgs<ExtArgs> = {}>(args?: Subset<T, Contact$activitiesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ActivityPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    notes<T extends Contact$notesArgs<ExtArgs> = {}>(args?: Subset<T, Contact$notesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    tags<T extends Contact$tagsArgs<ExtArgs> = {}>(args?: Subset<T, Contact$tagsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    contactOrg<T extends OrganisationDefaultArgs<ExtArgs> = {}>(args?: Subset<T, OrganisationDefaultArgs<ExtArgs>>): Prisma__OrganisationClient<$Result.GetResult<Prisma.$OrganisationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Contact model
   */
  interface ContactFieldRefs {
    readonly id: FieldRef<"Contact", 'String'>
    readonly name: FieldRef<"Contact", 'String'>
    readonly email: FieldRef<"Contact", 'String'>
    readonly phoneNumber: FieldRef<"Contact", 'String'>
    readonly alternateNumber: FieldRef<"Contact", 'String'>
    readonly branchId: FieldRef<"Contact", 'String'>
    readonly contactType: FieldRef<"Contact", 'ContactType'>
    readonly leadSegment: FieldRef<"Contact", 'LeadSegment'>
    readonly leadScore: FieldRef<"Contact", 'Int'>
    readonly followUpFrequency: FieldRef<"Contact", 'Int'>
    readonly followUpOn: FieldRef<"Contact", 'DateTime'>
    readonly assignedToId: FieldRef<"Contact", 'String'>
    readonly createdAt: FieldRef<"Contact", 'DateTime'>
    readonly updatedAt: FieldRef<"Contact", 'DateTime'>
    readonly contactOrgId: FieldRef<"Contact", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Contact findUnique
   */
  export type ContactFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contact
     */
    select?: ContactSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contact
     */
    omit?: ContactOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContactInclude<ExtArgs> | null
    /**
     * Filter, which Contact to fetch.
     */
    where: ContactWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * Contact findUniqueOrThrow
   */
  export type ContactFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contact
     */
    select?: ContactSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contact
     */
    omit?: ContactOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContactInclude<ExtArgs> | null
    /**
     * Filter, which Contact to fetch.
     */
    where: ContactWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * Contact findFirst
   */
  export type ContactFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contact
     */
    select?: ContactSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contact
     */
    omit?: ContactOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContactInclude<ExtArgs> | null
    /**
     * Filter, which Contact to fetch.
     */
    where?: ContactWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Contacts to fetch.
     */
    orderBy?: ContactOrderByWithRelationInput | ContactOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Contacts.
     */
    cursor?: ContactWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Contacts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Contacts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Contacts.
     */
    distinct?: ContactScalarFieldEnum | ContactScalarFieldEnum[]
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * Contact findFirstOrThrow
   */
  export type ContactFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contact
     */
    select?: ContactSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contact
     */
    omit?: ContactOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContactInclude<ExtArgs> | null
    /**
     * Filter, which Contact to fetch.
     */
    where?: ContactWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Contacts to fetch.
     */
    orderBy?: ContactOrderByWithRelationInput | ContactOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Contacts.
     */
    cursor?: ContactWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Contacts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Contacts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Contacts.
     */
    distinct?: ContactScalarFieldEnum | ContactScalarFieldEnum[]
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * Contact findMany
   */
  export type ContactFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contact
     */
    select?: ContactSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contact
     */
    omit?: ContactOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContactInclude<ExtArgs> | null
    /**
     * Filter, which Contacts to fetch.
     */
    where?: ContactWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Contacts to fetch.
     */
    orderBy?: ContactOrderByWithRelationInput | ContactOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Contacts.
     */
    cursor?: ContactWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Contacts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Contacts.
     */
    skip?: number
    distinct?: ContactScalarFieldEnum | ContactScalarFieldEnum[]
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * Contact create
   */
  export type ContactCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contact
     */
    select?: ContactSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contact
     */
    omit?: ContactOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContactInclude<ExtArgs> | null
    /**
     * The data needed to create a Contact.
     */
    data: XOR<ContactCreateInput, ContactUncheckedCreateInput>
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * Contact createMany
   */
  export type ContactCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Contacts.
     */
    data: ContactCreateManyInput | ContactCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Contact createManyAndReturn
   */
  export type ContactCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contact
     */
    select?: ContactSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Contact
     */
    omit?: ContactOmit<ExtArgs> | null
    /**
     * The data used to create many Contacts.
     */
    data: ContactCreateManyInput | ContactCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContactIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Contact update
   */
  export type ContactUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contact
     */
    select?: ContactSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contact
     */
    omit?: ContactOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContactInclude<ExtArgs> | null
    /**
     * The data needed to update a Contact.
     */
    data: XOR<ContactUpdateInput, ContactUncheckedUpdateInput>
    /**
     * Choose, which Contact to update.
     */
    where: ContactWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * Contact updateMany
   */
  export type ContactUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Contacts.
     */
    data: XOR<ContactUpdateManyMutationInput, ContactUncheckedUpdateManyInput>
    /**
     * Filter which Contacts to update
     */
    where?: ContactWhereInput
    /**
     * Limit how many Contacts to update.
     */
    limit?: number
  }

  /**
   * Contact updateManyAndReturn
   */
  export type ContactUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contact
     */
    select?: ContactSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Contact
     */
    omit?: ContactOmit<ExtArgs> | null
    /**
     * The data used to update Contacts.
     */
    data: XOR<ContactUpdateManyMutationInput, ContactUncheckedUpdateManyInput>
    /**
     * Filter which Contacts to update
     */
    where?: ContactWhereInput
    /**
     * Limit how many Contacts to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContactIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Contact upsert
   */
  export type ContactUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contact
     */
    select?: ContactSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contact
     */
    omit?: ContactOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContactInclude<ExtArgs> | null
    /**
     * The filter to search for the Contact to update in case it exists.
     */
    where: ContactWhereUniqueInput
    /**
     * In case the Contact found by the `where` argument doesn't exist, create a new Contact with this data.
     */
    create: XOR<ContactCreateInput, ContactUncheckedCreateInput>
    /**
     * In case the Contact was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ContactUpdateInput, ContactUncheckedUpdateInput>
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * Contact delete
   */
  export type ContactDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contact
     */
    select?: ContactSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contact
     */
    omit?: ContactOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContactInclude<ExtArgs> | null
    /**
     * Filter which Contact to delete.
     */
    where: ContactWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * Contact deleteMany
   */
  export type ContactDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Contacts to delete
     */
    where?: ContactWhereInput
    /**
     * Limit how many Contacts to delete.
     */
    limit?: number
  }

  /**
   * Contact.branch
   */
  export type Contact$branchArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Branch
     */
    select?: BranchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Branch
     */
    omit?: BranchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BranchInclude<ExtArgs> | null
    where?: BranchWhereInput
  }

  /**
   * Contact.assignedTo
   */
  export type Contact$assignedToArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * Contact.pocBranch
   */
  export type Contact$pocBranchArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Branch
     */
    select?: BranchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Branch
     */
    omit?: BranchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BranchInclude<ExtArgs> | null
    where?: BranchWhereInput
  }

  /**
   * Contact.activities
   */
  export type Contact$activitiesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Activity
     */
    select?: ActivitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Activity
     */
    omit?: ActivityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityInclude<ExtArgs> | null
    where?: ActivityWhereInput
    orderBy?: ActivityOrderByWithRelationInput | ActivityOrderByWithRelationInput[]
    cursor?: ActivityWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ActivityScalarFieldEnum | ActivityScalarFieldEnum[]
  }

  /**
   * Contact.notes
   */
  export type Contact$notesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Note
     */
    select?: NoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Note
     */
    omit?: NoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NoteInclude<ExtArgs> | null
    where?: NoteWhereInput
    orderBy?: NoteOrderByWithRelationInput | NoteOrderByWithRelationInput[]
    cursor?: NoteWhereUniqueInput
    take?: number
    skip?: number
    distinct?: NoteScalarFieldEnum | NoteScalarFieldEnum[]
  }

  /**
   * Contact.tags
   */
  export type Contact$tagsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
    where?: TagWhereInput
    orderBy?: TagOrderByWithRelationInput | TagOrderByWithRelationInput[]
    cursor?: TagWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TagScalarFieldEnum | TagScalarFieldEnum[]
  }

  /**
   * Contact without action
   */
  export type ContactDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contact
     */
    select?: ContactSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contact
     */
    omit?: ContactOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContactInclude<ExtArgs> | null
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


  export const UserScalarFieldEnum: {
    id: 'id',
    firstName: 'firstName',
    lastName: 'lastName',
    email: 'email',
    password: 'password',
    countryCode: 'countryCode',
    phoneNumber: 'phoneNumber',
    role: 'role',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    organisationId: 'organisationId'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const RelationLoadStrategy: {
    query: 'query',
    join: 'join'
  };

  export type RelationLoadStrategy = (typeof RelationLoadStrategy)[keyof typeof RelationLoadStrategy]


  export const SessionScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    expiresAt: 'expiresAt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type SessionScalarFieldEnum = (typeof SessionScalarFieldEnum)[keyof typeof SessionScalarFieldEnum]


  export const TokenScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    sessionId: 'sessionId',
    scopes: 'scopes',
    accessToken: 'accessToken',
    refreshToken: 'refreshToken',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type TokenScalarFieldEnum = (typeof TokenScalarFieldEnum)[keyof typeof TokenScalarFieldEnum]


  export const RegionScalarFieldEnum: {
    id: 'id',
    name: 'name',
    state: 'state',
    country: 'country',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type RegionScalarFieldEnum = (typeof RegionScalarFieldEnum)[keyof typeof RegionScalarFieldEnum]


  export const ScheduleScalarFieldEnum: {
    id: 'id',
    regionId: 'regionId',
    dayOfMonth: 'dayOfMonth',
    createdOrgId: 'createdOrgId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ScheduleScalarFieldEnum = (typeof ScheduleScalarFieldEnum)[keyof typeof ScheduleScalarFieldEnum]


  export const BranchScalarFieldEnum: {
    id: 'id',
    address: 'address',
    city: 'city',
    postalCode: 'postalCode',
    landlineNumber: 'landlineNumber',
    regionId: 'regionId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    organisationId: 'organisationId',
    type: 'type',
    pointOfContactId: 'pointOfContactId'
  };

  export type BranchScalarFieldEnum = (typeof BranchScalarFieldEnum)[keyof typeof BranchScalarFieldEnum]


  export const OrganisationScalarFieldEnum: {
    id: 'id',
    name: 'name',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    contactOrgId: 'contactOrgId'
  };

  export type OrganisationScalarFieldEnum = (typeof OrganisationScalarFieldEnum)[keyof typeof OrganisationScalarFieldEnum]


  export const TagScalarFieldEnum: {
    id: 'id',
    title: 'title',
    description: 'description',
    tagType: 'tagType',
    createdOrganisationId: 'createdOrganisationId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type TagScalarFieldEnum = (typeof TagScalarFieldEnum)[keyof typeof TagScalarFieldEnum]


  export const ActivityScalarFieldEnum: {
    id: 'id',
    title: 'title',
    description: 'description',
    addedById: 'addedById',
    needFollowUp: 'needFollowUp',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    type: 'type',
    contactId: 'contactId',
    followUpDate: 'followUpDate',
    assignedToId: 'assignedToId',
    followUpActivityId: 'followUpActivityId'
  };

  export type ActivityScalarFieldEnum = (typeof ActivityScalarFieldEnum)[keyof typeof ActivityScalarFieldEnum]


  export const NoteScalarFieldEnum: {
    id: 'id',
    title: 'title',
    description: 'description',
    category: 'category',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    contactId: 'contactId',
    createdById: 'createdById'
  };

  export type NoteScalarFieldEnum = (typeof NoteScalarFieldEnum)[keyof typeof NoteScalarFieldEnum]


  export const ContactScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    phoneNumber: 'phoneNumber',
    alternateNumber: 'alternateNumber',
    branchId: 'branchId',
    contactType: 'contactType',
    leadSegment: 'leadSegment',
    leadScore: 'leadScore',
    followUpFrequency: 'followUpFrequency',
    followUpOn: 'followUpOn',
    assignedToId: 'assignedToId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    contactOrgId: 'contactOrgId'
  };

  export type ContactScalarFieldEnum = (typeof ContactScalarFieldEnum)[keyof typeof ContactScalarFieldEnum]


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


  export const UserOrderByRelevanceFieldEnum: {
    id: 'id',
    firstName: 'firstName',
    lastName: 'lastName',
    email: 'email',
    password: 'password',
    countryCode: 'countryCode',
    phoneNumber: 'phoneNumber',
    organisationId: 'organisationId'
  };

  export type UserOrderByRelevanceFieldEnum = (typeof UserOrderByRelevanceFieldEnum)[keyof typeof UserOrderByRelevanceFieldEnum]


  export const SessionOrderByRelevanceFieldEnum: {
    id: 'id',
    userId: 'userId'
  };

  export type SessionOrderByRelevanceFieldEnum = (typeof SessionOrderByRelevanceFieldEnum)[keyof typeof SessionOrderByRelevanceFieldEnum]


  export const TokenOrderByRelevanceFieldEnum: {
    id: 'id',
    userId: 'userId',
    sessionId: 'sessionId',
    accessToken: 'accessToken',
    refreshToken: 'refreshToken'
  };

  export type TokenOrderByRelevanceFieldEnum = (typeof TokenOrderByRelevanceFieldEnum)[keyof typeof TokenOrderByRelevanceFieldEnum]


  export const RegionOrderByRelevanceFieldEnum: {
    id: 'id',
    name: 'name',
    state: 'state',
    country: 'country'
  };

  export type RegionOrderByRelevanceFieldEnum = (typeof RegionOrderByRelevanceFieldEnum)[keyof typeof RegionOrderByRelevanceFieldEnum]


  export const ScheduleOrderByRelevanceFieldEnum: {
    id: 'id',
    regionId: 'regionId',
    createdOrgId: 'createdOrgId'
  };

  export type ScheduleOrderByRelevanceFieldEnum = (typeof ScheduleOrderByRelevanceFieldEnum)[keyof typeof ScheduleOrderByRelevanceFieldEnum]


  export const BranchOrderByRelevanceFieldEnum: {
    id: 'id',
    address: 'address',
    city: 'city',
    postalCode: 'postalCode',
    landlineNumber: 'landlineNumber',
    regionId: 'regionId',
    organisationId: 'organisationId',
    pointOfContactId: 'pointOfContactId'
  };

  export type BranchOrderByRelevanceFieldEnum = (typeof BranchOrderByRelevanceFieldEnum)[keyof typeof BranchOrderByRelevanceFieldEnum]


  export const OrganisationOrderByRelevanceFieldEnum: {
    id: 'id',
    name: 'name',
    contactOrgId: 'contactOrgId'
  };

  export type OrganisationOrderByRelevanceFieldEnum = (typeof OrganisationOrderByRelevanceFieldEnum)[keyof typeof OrganisationOrderByRelevanceFieldEnum]


  export const TagOrderByRelevanceFieldEnum: {
    id: 'id',
    title: 'title',
    description: 'description',
    createdOrganisationId: 'createdOrganisationId'
  };

  export type TagOrderByRelevanceFieldEnum = (typeof TagOrderByRelevanceFieldEnum)[keyof typeof TagOrderByRelevanceFieldEnum]


  export const ActivityOrderByRelevanceFieldEnum: {
    id: 'id',
    title: 'title',
    description: 'description',
    addedById: 'addedById',
    contactId: 'contactId',
    assignedToId: 'assignedToId',
    followUpActivityId: 'followUpActivityId'
  };

  export type ActivityOrderByRelevanceFieldEnum = (typeof ActivityOrderByRelevanceFieldEnum)[keyof typeof ActivityOrderByRelevanceFieldEnum]


  export const NoteOrderByRelevanceFieldEnum: {
    id: 'id',
    title: 'title',
    description: 'description',
    contactId: 'contactId',
    createdById: 'createdById'
  };

  export type NoteOrderByRelevanceFieldEnum = (typeof NoteOrderByRelevanceFieldEnum)[keyof typeof NoteOrderByRelevanceFieldEnum]


  export const ContactOrderByRelevanceFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    phoneNumber: 'phoneNumber',
    alternateNumber: 'alternateNumber',
    branchId: 'branchId',
    assignedToId: 'assignedToId',
    contactOrgId: 'contactOrgId'
  };

  export type ContactOrderByRelevanceFieldEnum = (typeof ContactOrderByRelevanceFieldEnum)[keyof typeof ContactOrderByRelevanceFieldEnum]


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
   * Reference to a field of type 'Role'
   */
  export type EnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role'>
    


  /**
   * Reference to a field of type 'Role[]'
   */
  export type ListEnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Scope[]'
   */
  export type ListEnumScopeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Scope[]'>
    


  /**
   * Reference to a field of type 'Scope'
   */
  export type EnumScopeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Scope'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'BranchType'
   */
  export type EnumBranchTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BranchType'>
    


  /**
   * Reference to a field of type 'BranchType[]'
   */
  export type ListEnumBranchTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BranchType[]'>
    


  /**
   * Reference to a field of type 'TagType'
   */
  export type EnumTagTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TagType'>
    


  /**
   * Reference to a field of type 'TagType[]'
   */
  export type ListEnumTagTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TagType[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'ActivityType'
   */
  export type EnumActivityTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ActivityType'>
    


  /**
   * Reference to a field of type 'ActivityType[]'
   */
  export type ListEnumActivityTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ActivityType[]'>
    


  /**
   * Reference to a field of type 'NoteCategory'
   */
  export type EnumNoteCategoryFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'NoteCategory'>
    


  /**
   * Reference to a field of type 'NoteCategory[]'
   */
  export type ListEnumNoteCategoryFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'NoteCategory[]'>
    


  /**
   * Reference to a field of type 'ContactType'
   */
  export type EnumContactTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ContactType'>
    


  /**
   * Reference to a field of type 'ContactType[]'
   */
  export type ListEnumContactTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ContactType[]'>
    


  /**
   * Reference to a field of type 'LeadSegment'
   */
  export type EnumLeadSegmentFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'LeadSegment'>
    


  /**
   * Reference to a field of type 'LeadSegment[]'
   */
  export type ListEnumLeadSegmentFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'LeadSegment[]'>
    


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


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    firstName?: StringFilter<"User"> | string
    lastName?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    countryCode?: StringFilter<"User"> | string
    phoneNumber?: StringFilter<"User"> | string
    role?: EnumRoleFilter<"User"> | $Enums.Role
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    organisationId?: StringNullableFilter<"User"> | string | null
    organisation?: XOR<OrganisationNullableScalarRelationFilter, OrganisationWhereInput> | null
    addedActivities?: ActivityListRelationFilter
    sessions?: SessionListRelationFilter
    tokens?: TokenListRelationFilter
    contactFollowUps?: ContactListRelationFilter
    createdNotes?: NoteListRelationFilter
    activityFollowUps?: ActivityListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    password?: SortOrder
    countryCode?: SortOrder
    phoneNumber?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    organisationId?: SortOrderInput | SortOrder
    organisation?: OrganisationOrderByWithRelationInput
    addedActivities?: ActivityOrderByRelationAggregateInput
    sessions?: SessionOrderByRelationAggregateInput
    tokens?: TokenOrderByRelationAggregateInput
    contactFollowUps?: ContactOrderByRelationAggregateInput
    createdNotes?: NoteOrderByRelationAggregateInput
    activityFollowUps?: ActivityOrderByRelationAggregateInput
    _relevance?: UserOrderByRelevanceInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    firstName?: StringFilter<"User"> | string
    lastName?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    countryCode?: StringFilter<"User"> | string
    phoneNumber?: StringFilter<"User"> | string
    role?: EnumRoleFilter<"User"> | $Enums.Role
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    organisationId?: StringNullableFilter<"User"> | string | null
    organisation?: XOR<OrganisationNullableScalarRelationFilter, OrganisationWhereInput> | null
    addedActivities?: ActivityListRelationFilter
    sessions?: SessionListRelationFilter
    tokens?: TokenListRelationFilter
    contactFollowUps?: ContactListRelationFilter
    createdNotes?: NoteListRelationFilter
    activityFollowUps?: ActivityListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    password?: SortOrder
    countryCode?: SortOrder
    phoneNumber?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    organisationId?: SortOrderInput | SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    firstName?: StringWithAggregatesFilter<"User"> | string
    lastName?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    countryCode?: StringWithAggregatesFilter<"User"> | string
    phoneNumber?: StringWithAggregatesFilter<"User"> | string
    role?: EnumRoleWithAggregatesFilter<"User"> | $Enums.Role
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    organisationId?: StringNullableWithAggregatesFilter<"User"> | string | null
  }

  export type SessionWhereInput = {
    AND?: SessionWhereInput | SessionWhereInput[]
    OR?: SessionWhereInput[]
    NOT?: SessionWhereInput | SessionWhereInput[]
    id?: StringFilter<"Session"> | string
    userId?: StringFilter<"Session"> | string
    expiresAt?: DateTimeFilter<"Session"> | Date | string
    createdAt?: DateTimeFilter<"Session"> | Date | string
    updatedAt?: DateTimeFilter<"Session"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    tokens?: TokenListRelationFilter
  }

  export type SessionOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
    tokens?: TokenOrderByRelationAggregateInput
    _relevance?: SessionOrderByRelevanceInput
  }

  export type SessionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: SessionWhereInput | SessionWhereInput[]
    OR?: SessionWhereInput[]
    NOT?: SessionWhereInput | SessionWhereInput[]
    userId?: StringFilter<"Session"> | string
    expiresAt?: DateTimeFilter<"Session"> | Date | string
    createdAt?: DateTimeFilter<"Session"> | Date | string
    updatedAt?: DateTimeFilter<"Session"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    tokens?: TokenListRelationFilter
  }, "id">

  export type SessionOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: SessionCountOrderByAggregateInput
    _max?: SessionMaxOrderByAggregateInput
    _min?: SessionMinOrderByAggregateInput
  }

  export type SessionScalarWhereWithAggregatesInput = {
    AND?: SessionScalarWhereWithAggregatesInput | SessionScalarWhereWithAggregatesInput[]
    OR?: SessionScalarWhereWithAggregatesInput[]
    NOT?: SessionScalarWhereWithAggregatesInput | SessionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Session"> | string
    userId?: StringWithAggregatesFilter<"Session"> | string
    expiresAt?: DateTimeWithAggregatesFilter<"Session"> | Date | string
    createdAt?: DateTimeWithAggregatesFilter<"Session"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Session"> | Date | string
  }

  export type TokenWhereInput = {
    AND?: TokenWhereInput | TokenWhereInput[]
    OR?: TokenWhereInput[]
    NOT?: TokenWhereInput | TokenWhereInput[]
    id?: StringFilter<"Token"> | string
    userId?: StringFilter<"Token"> | string
    sessionId?: StringFilter<"Token"> | string
    scopes?: EnumScopeNullableListFilter<"Token">
    accessToken?: StringFilter<"Token"> | string
    refreshToken?: StringNullableFilter<"Token"> | string | null
    createdAt?: DateTimeFilter<"Token"> | Date | string
    updatedAt?: DateTimeFilter<"Token"> | Date | string
    session?: XOR<SessionScalarRelationFilter, SessionWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type TokenOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    sessionId?: SortOrder
    scopes?: SortOrder
    accessToken?: SortOrder
    refreshToken?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    session?: SessionOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
    _relevance?: TokenOrderByRelevanceInput
  }

  export type TokenWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: TokenWhereInput | TokenWhereInput[]
    OR?: TokenWhereInput[]
    NOT?: TokenWhereInput | TokenWhereInput[]
    userId?: StringFilter<"Token"> | string
    sessionId?: StringFilter<"Token"> | string
    scopes?: EnumScopeNullableListFilter<"Token">
    accessToken?: StringFilter<"Token"> | string
    refreshToken?: StringNullableFilter<"Token"> | string | null
    createdAt?: DateTimeFilter<"Token"> | Date | string
    updatedAt?: DateTimeFilter<"Token"> | Date | string
    session?: XOR<SessionScalarRelationFilter, SessionWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type TokenOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    sessionId?: SortOrder
    scopes?: SortOrder
    accessToken?: SortOrder
    refreshToken?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: TokenCountOrderByAggregateInput
    _max?: TokenMaxOrderByAggregateInput
    _min?: TokenMinOrderByAggregateInput
  }

  export type TokenScalarWhereWithAggregatesInput = {
    AND?: TokenScalarWhereWithAggregatesInput | TokenScalarWhereWithAggregatesInput[]
    OR?: TokenScalarWhereWithAggregatesInput[]
    NOT?: TokenScalarWhereWithAggregatesInput | TokenScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Token"> | string
    userId?: StringWithAggregatesFilter<"Token"> | string
    sessionId?: StringWithAggregatesFilter<"Token"> | string
    scopes?: EnumScopeNullableListFilter<"Token">
    accessToken?: StringWithAggregatesFilter<"Token"> | string
    refreshToken?: StringNullableWithAggregatesFilter<"Token"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Token"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Token"> | Date | string
  }

  export type RegionWhereInput = {
    AND?: RegionWhereInput | RegionWhereInput[]
    OR?: RegionWhereInput[]
    NOT?: RegionWhereInput | RegionWhereInput[]
    id?: StringFilter<"Region"> | string
    name?: StringFilter<"Region"> | string
    state?: StringFilter<"Region"> | string
    country?: StringFilter<"Region"> | string
    createdAt?: DateTimeFilter<"Region"> | Date | string
    updatedAt?: DateTimeFilter<"Region"> | Date | string
    branches?: BranchListRelationFilter
    schedules?: ScheduleListRelationFilter
  }

  export type RegionOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    state?: SortOrder
    country?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    branches?: BranchOrderByRelationAggregateInput
    schedules?: ScheduleOrderByRelationAggregateInput
    _relevance?: RegionOrderByRelevanceInput
  }

  export type RegionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: RegionWhereInput | RegionWhereInput[]
    OR?: RegionWhereInput[]
    NOT?: RegionWhereInput | RegionWhereInput[]
    name?: StringFilter<"Region"> | string
    state?: StringFilter<"Region"> | string
    country?: StringFilter<"Region"> | string
    createdAt?: DateTimeFilter<"Region"> | Date | string
    updatedAt?: DateTimeFilter<"Region"> | Date | string
    branches?: BranchListRelationFilter
    schedules?: ScheduleListRelationFilter
  }, "id">

  export type RegionOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    state?: SortOrder
    country?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: RegionCountOrderByAggregateInput
    _max?: RegionMaxOrderByAggregateInput
    _min?: RegionMinOrderByAggregateInput
  }

  export type RegionScalarWhereWithAggregatesInput = {
    AND?: RegionScalarWhereWithAggregatesInput | RegionScalarWhereWithAggregatesInput[]
    OR?: RegionScalarWhereWithAggregatesInput[]
    NOT?: RegionScalarWhereWithAggregatesInput | RegionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Region"> | string
    name?: StringWithAggregatesFilter<"Region"> | string
    state?: StringWithAggregatesFilter<"Region"> | string
    country?: StringWithAggregatesFilter<"Region"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Region"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Region"> | Date | string
  }

  export type ScheduleWhereInput = {
    AND?: ScheduleWhereInput | ScheduleWhereInput[]
    OR?: ScheduleWhereInput[]
    NOT?: ScheduleWhereInput | ScheduleWhereInput[]
    id?: StringFilter<"Schedule"> | string
    regionId?: StringFilter<"Schedule"> | string
    dayOfMonth?: IntFilter<"Schedule"> | number
    createdOrgId?: StringFilter<"Schedule"> | string
    createdAt?: DateTimeFilter<"Schedule"> | Date | string
    updatedAt?: DateTimeFilter<"Schedule"> | Date | string
    region?: XOR<RegionScalarRelationFilter, RegionWhereInput>
    createdOrg?: XOR<OrganisationScalarRelationFilter, OrganisationWhereInput>
  }

  export type ScheduleOrderByWithRelationInput = {
    id?: SortOrder
    regionId?: SortOrder
    dayOfMonth?: SortOrder
    createdOrgId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    region?: RegionOrderByWithRelationInput
    createdOrg?: OrganisationOrderByWithRelationInput
    _relevance?: ScheduleOrderByRelevanceInput
  }

  export type ScheduleWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ScheduleWhereInput | ScheduleWhereInput[]
    OR?: ScheduleWhereInput[]
    NOT?: ScheduleWhereInput | ScheduleWhereInput[]
    regionId?: StringFilter<"Schedule"> | string
    dayOfMonth?: IntFilter<"Schedule"> | number
    createdOrgId?: StringFilter<"Schedule"> | string
    createdAt?: DateTimeFilter<"Schedule"> | Date | string
    updatedAt?: DateTimeFilter<"Schedule"> | Date | string
    region?: XOR<RegionScalarRelationFilter, RegionWhereInput>
    createdOrg?: XOR<OrganisationScalarRelationFilter, OrganisationWhereInput>
  }, "id">

  export type ScheduleOrderByWithAggregationInput = {
    id?: SortOrder
    regionId?: SortOrder
    dayOfMonth?: SortOrder
    createdOrgId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ScheduleCountOrderByAggregateInput
    _avg?: ScheduleAvgOrderByAggregateInput
    _max?: ScheduleMaxOrderByAggregateInput
    _min?: ScheduleMinOrderByAggregateInput
    _sum?: ScheduleSumOrderByAggregateInput
  }

  export type ScheduleScalarWhereWithAggregatesInput = {
    AND?: ScheduleScalarWhereWithAggregatesInput | ScheduleScalarWhereWithAggregatesInput[]
    OR?: ScheduleScalarWhereWithAggregatesInput[]
    NOT?: ScheduleScalarWhereWithAggregatesInput | ScheduleScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Schedule"> | string
    regionId?: StringWithAggregatesFilter<"Schedule"> | string
    dayOfMonth?: IntWithAggregatesFilter<"Schedule"> | number
    createdOrgId?: StringWithAggregatesFilter<"Schedule"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Schedule"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Schedule"> | Date | string
  }

  export type BranchWhereInput = {
    AND?: BranchWhereInput | BranchWhereInput[]
    OR?: BranchWhereInput[]
    NOT?: BranchWhereInput | BranchWhereInput[]
    id?: StringFilter<"Branch"> | string
    address?: StringNullableFilter<"Branch"> | string | null
    city?: StringFilter<"Branch"> | string
    postalCode?: StringNullableFilter<"Branch"> | string | null
    landlineNumber?: StringNullableFilter<"Branch"> | string | null
    regionId?: StringFilter<"Branch"> | string
    createdAt?: DateTimeFilter<"Branch"> | Date | string
    updatedAt?: DateTimeFilter<"Branch"> | Date | string
    organisationId?: StringFilter<"Branch"> | string
    type?: EnumBranchTypeFilter<"Branch"> | $Enums.BranchType
    pointOfContactId?: StringNullableFilter<"Branch"> | string | null
    region?: XOR<RegionScalarRelationFilter, RegionWhereInput>
    organisation?: XOR<OrganisationScalarRelationFilter, OrganisationWhereInput>
    contacts?: ContactListRelationFilter
    pointOfContact?: XOR<ContactNullableScalarRelationFilter, ContactWhereInput> | null
  }

  export type BranchOrderByWithRelationInput = {
    id?: SortOrder
    address?: SortOrderInput | SortOrder
    city?: SortOrder
    postalCode?: SortOrderInput | SortOrder
    landlineNumber?: SortOrderInput | SortOrder
    regionId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    organisationId?: SortOrder
    type?: SortOrder
    pointOfContactId?: SortOrderInput | SortOrder
    region?: RegionOrderByWithRelationInput
    organisation?: OrganisationOrderByWithRelationInput
    contacts?: ContactOrderByRelationAggregateInput
    pointOfContact?: ContactOrderByWithRelationInput
    _relevance?: BranchOrderByRelevanceInput
  }

  export type BranchWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    pointOfContactId?: string
    AND?: BranchWhereInput | BranchWhereInput[]
    OR?: BranchWhereInput[]
    NOT?: BranchWhereInput | BranchWhereInput[]
    address?: StringNullableFilter<"Branch"> | string | null
    city?: StringFilter<"Branch"> | string
    postalCode?: StringNullableFilter<"Branch"> | string | null
    landlineNumber?: StringNullableFilter<"Branch"> | string | null
    regionId?: StringFilter<"Branch"> | string
    createdAt?: DateTimeFilter<"Branch"> | Date | string
    updatedAt?: DateTimeFilter<"Branch"> | Date | string
    organisationId?: StringFilter<"Branch"> | string
    type?: EnumBranchTypeFilter<"Branch"> | $Enums.BranchType
    region?: XOR<RegionScalarRelationFilter, RegionWhereInput>
    organisation?: XOR<OrganisationScalarRelationFilter, OrganisationWhereInput>
    contacts?: ContactListRelationFilter
    pointOfContact?: XOR<ContactNullableScalarRelationFilter, ContactWhereInput> | null
  }, "id" | "pointOfContactId">

  export type BranchOrderByWithAggregationInput = {
    id?: SortOrder
    address?: SortOrderInput | SortOrder
    city?: SortOrder
    postalCode?: SortOrderInput | SortOrder
    landlineNumber?: SortOrderInput | SortOrder
    regionId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    organisationId?: SortOrder
    type?: SortOrder
    pointOfContactId?: SortOrderInput | SortOrder
    _count?: BranchCountOrderByAggregateInput
    _max?: BranchMaxOrderByAggregateInput
    _min?: BranchMinOrderByAggregateInput
  }

  export type BranchScalarWhereWithAggregatesInput = {
    AND?: BranchScalarWhereWithAggregatesInput | BranchScalarWhereWithAggregatesInput[]
    OR?: BranchScalarWhereWithAggregatesInput[]
    NOT?: BranchScalarWhereWithAggregatesInput | BranchScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Branch"> | string
    address?: StringNullableWithAggregatesFilter<"Branch"> | string | null
    city?: StringWithAggregatesFilter<"Branch"> | string
    postalCode?: StringNullableWithAggregatesFilter<"Branch"> | string | null
    landlineNumber?: StringNullableWithAggregatesFilter<"Branch"> | string | null
    regionId?: StringWithAggregatesFilter<"Branch"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Branch"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Branch"> | Date | string
    organisationId?: StringWithAggregatesFilter<"Branch"> | string
    type?: EnumBranchTypeWithAggregatesFilter<"Branch"> | $Enums.BranchType
    pointOfContactId?: StringNullableWithAggregatesFilter<"Branch"> | string | null
  }

  export type OrganisationWhereInput = {
    AND?: OrganisationWhereInput | OrganisationWhereInput[]
    OR?: OrganisationWhereInput[]
    NOT?: OrganisationWhereInput | OrganisationWhereInput[]
    id?: StringFilter<"Organisation"> | string
    name?: StringFilter<"Organisation"> | string
    createdAt?: DateTimeFilter<"Organisation"> | Date | string
    updatedAt?: DateTimeFilter<"Organisation"> | Date | string
    contactOrgId?: StringNullableFilter<"Organisation"> | string | null
    team?: UserListRelationFilter
    branches?: BranchListRelationFilter
    tags?: TagListRelationFilter
    contactOrganisations?: OrganisationListRelationFilter
    contactOrganisation?: XOR<OrganisationNullableScalarRelationFilter, OrganisationWhereInput> | null
    createdTags?: TagListRelationFilter
    contacts?: ContactListRelationFilter
    createdSchedule?: ScheduleListRelationFilter
  }

  export type OrganisationOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    contactOrgId?: SortOrderInput | SortOrder
    team?: UserOrderByRelationAggregateInput
    branches?: BranchOrderByRelationAggregateInput
    tags?: TagOrderByRelationAggregateInput
    contactOrganisations?: OrganisationOrderByRelationAggregateInput
    contactOrganisation?: OrganisationOrderByWithRelationInput
    createdTags?: TagOrderByRelationAggregateInput
    contacts?: ContactOrderByRelationAggregateInput
    createdSchedule?: ScheduleOrderByRelationAggregateInput
    _relevance?: OrganisationOrderByRelevanceInput
  }

  export type OrganisationWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: OrganisationWhereInput | OrganisationWhereInput[]
    OR?: OrganisationWhereInput[]
    NOT?: OrganisationWhereInput | OrganisationWhereInput[]
    name?: StringFilter<"Organisation"> | string
    createdAt?: DateTimeFilter<"Organisation"> | Date | string
    updatedAt?: DateTimeFilter<"Organisation"> | Date | string
    contactOrgId?: StringNullableFilter<"Organisation"> | string | null
    team?: UserListRelationFilter
    branches?: BranchListRelationFilter
    tags?: TagListRelationFilter
    contactOrganisations?: OrganisationListRelationFilter
    contactOrganisation?: XOR<OrganisationNullableScalarRelationFilter, OrganisationWhereInput> | null
    createdTags?: TagListRelationFilter
    contacts?: ContactListRelationFilter
    createdSchedule?: ScheduleListRelationFilter
  }, "id">

  export type OrganisationOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    contactOrgId?: SortOrderInput | SortOrder
    _count?: OrganisationCountOrderByAggregateInput
    _max?: OrganisationMaxOrderByAggregateInput
    _min?: OrganisationMinOrderByAggregateInput
  }

  export type OrganisationScalarWhereWithAggregatesInput = {
    AND?: OrganisationScalarWhereWithAggregatesInput | OrganisationScalarWhereWithAggregatesInput[]
    OR?: OrganisationScalarWhereWithAggregatesInput[]
    NOT?: OrganisationScalarWhereWithAggregatesInput | OrganisationScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Organisation"> | string
    name?: StringWithAggregatesFilter<"Organisation"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Organisation"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Organisation"> | Date | string
    contactOrgId?: StringNullableWithAggregatesFilter<"Organisation"> | string | null
  }

  export type TagWhereInput = {
    AND?: TagWhereInput | TagWhereInput[]
    OR?: TagWhereInput[]
    NOT?: TagWhereInput | TagWhereInput[]
    id?: StringFilter<"Tag"> | string
    title?: StringFilter<"Tag"> | string
    description?: StringNullableFilter<"Tag"> | string | null
    tagType?: EnumTagTypeFilter<"Tag"> | $Enums.TagType
    createdOrganisationId?: StringFilter<"Tag"> | string
    createdAt?: DateTimeFilter<"Tag"> | Date | string
    updatedAt?: DateTimeFilter<"Tag"> | Date | string
    createdOrganisation?: XOR<OrganisationScalarRelationFilter, OrganisationWhereInput>
    organisations?: OrganisationListRelationFilter
    activities?: ActivityListRelationFilter
    contacts?: ContactListRelationFilter
  }

  export type TagOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    tagType?: SortOrder
    createdOrganisationId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    createdOrganisation?: OrganisationOrderByWithRelationInput
    organisations?: OrganisationOrderByRelationAggregateInput
    activities?: ActivityOrderByRelationAggregateInput
    contacts?: ContactOrderByRelationAggregateInput
    _relevance?: TagOrderByRelevanceInput
  }

  export type TagWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: TagWhereInput | TagWhereInput[]
    OR?: TagWhereInput[]
    NOT?: TagWhereInput | TagWhereInput[]
    title?: StringFilter<"Tag"> | string
    description?: StringNullableFilter<"Tag"> | string | null
    tagType?: EnumTagTypeFilter<"Tag"> | $Enums.TagType
    createdOrganisationId?: StringFilter<"Tag"> | string
    createdAt?: DateTimeFilter<"Tag"> | Date | string
    updatedAt?: DateTimeFilter<"Tag"> | Date | string
    createdOrganisation?: XOR<OrganisationScalarRelationFilter, OrganisationWhereInput>
    organisations?: OrganisationListRelationFilter
    activities?: ActivityListRelationFilter
    contacts?: ContactListRelationFilter
  }, "id">

  export type TagOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    tagType?: SortOrder
    createdOrganisationId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: TagCountOrderByAggregateInput
    _max?: TagMaxOrderByAggregateInput
    _min?: TagMinOrderByAggregateInput
  }

  export type TagScalarWhereWithAggregatesInput = {
    AND?: TagScalarWhereWithAggregatesInput | TagScalarWhereWithAggregatesInput[]
    OR?: TagScalarWhereWithAggregatesInput[]
    NOT?: TagScalarWhereWithAggregatesInput | TagScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Tag"> | string
    title?: StringWithAggregatesFilter<"Tag"> | string
    description?: StringNullableWithAggregatesFilter<"Tag"> | string | null
    tagType?: EnumTagTypeWithAggregatesFilter<"Tag"> | $Enums.TagType
    createdOrganisationId?: StringWithAggregatesFilter<"Tag"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Tag"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Tag"> | Date | string
  }

  export type ActivityWhereInput = {
    AND?: ActivityWhereInput | ActivityWhereInput[]
    OR?: ActivityWhereInput[]
    NOT?: ActivityWhereInput | ActivityWhereInput[]
    id?: StringFilter<"Activity"> | string
    title?: StringFilter<"Activity"> | string
    description?: StringFilter<"Activity"> | string
    addedById?: StringFilter<"Activity"> | string
    needFollowUp?: BoolFilter<"Activity"> | boolean
    createdAt?: DateTimeFilter<"Activity"> | Date | string
    updatedAt?: DateTimeFilter<"Activity"> | Date | string
    type?: EnumActivityTypeFilter<"Activity"> | $Enums.ActivityType
    contactId?: StringFilter<"Activity"> | string
    followUpDate?: DateTimeNullableFilter<"Activity"> | Date | string | null
    assignedToId?: StringNullableFilter<"Activity"> | string | null
    followUpActivityId?: StringNullableFilter<"Activity"> | string | null
    addedBy?: XOR<UserScalarRelationFilter, UserWhereInput>
    tags?: TagListRelationFilter
    contact?: XOR<ContactScalarRelationFilter, ContactWhereInput>
    assignedTo?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    followUpActivity?: XOR<ActivityNullableScalarRelationFilter, ActivityWhereInput> | null
    followUpActivities?: ActivityListRelationFilter
  }

  export type ActivityOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    addedById?: SortOrder
    needFollowUp?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    type?: SortOrder
    contactId?: SortOrder
    followUpDate?: SortOrderInput | SortOrder
    assignedToId?: SortOrderInput | SortOrder
    followUpActivityId?: SortOrderInput | SortOrder
    addedBy?: UserOrderByWithRelationInput
    tags?: TagOrderByRelationAggregateInput
    contact?: ContactOrderByWithRelationInput
    assignedTo?: UserOrderByWithRelationInput
    followUpActivity?: ActivityOrderByWithRelationInput
    followUpActivities?: ActivityOrderByRelationAggregateInput
    _relevance?: ActivityOrderByRelevanceInput
  }

  export type ActivityWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ActivityWhereInput | ActivityWhereInput[]
    OR?: ActivityWhereInput[]
    NOT?: ActivityWhereInput | ActivityWhereInput[]
    title?: StringFilter<"Activity"> | string
    description?: StringFilter<"Activity"> | string
    addedById?: StringFilter<"Activity"> | string
    needFollowUp?: BoolFilter<"Activity"> | boolean
    createdAt?: DateTimeFilter<"Activity"> | Date | string
    updatedAt?: DateTimeFilter<"Activity"> | Date | string
    type?: EnumActivityTypeFilter<"Activity"> | $Enums.ActivityType
    contactId?: StringFilter<"Activity"> | string
    followUpDate?: DateTimeNullableFilter<"Activity"> | Date | string | null
    assignedToId?: StringNullableFilter<"Activity"> | string | null
    followUpActivityId?: StringNullableFilter<"Activity"> | string | null
    addedBy?: XOR<UserScalarRelationFilter, UserWhereInput>
    tags?: TagListRelationFilter
    contact?: XOR<ContactScalarRelationFilter, ContactWhereInput>
    assignedTo?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    followUpActivity?: XOR<ActivityNullableScalarRelationFilter, ActivityWhereInput> | null
    followUpActivities?: ActivityListRelationFilter
  }, "id">

  export type ActivityOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    addedById?: SortOrder
    needFollowUp?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    type?: SortOrder
    contactId?: SortOrder
    followUpDate?: SortOrderInput | SortOrder
    assignedToId?: SortOrderInput | SortOrder
    followUpActivityId?: SortOrderInput | SortOrder
    _count?: ActivityCountOrderByAggregateInput
    _max?: ActivityMaxOrderByAggregateInput
    _min?: ActivityMinOrderByAggregateInput
  }

  export type ActivityScalarWhereWithAggregatesInput = {
    AND?: ActivityScalarWhereWithAggregatesInput | ActivityScalarWhereWithAggregatesInput[]
    OR?: ActivityScalarWhereWithAggregatesInput[]
    NOT?: ActivityScalarWhereWithAggregatesInput | ActivityScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Activity"> | string
    title?: StringWithAggregatesFilter<"Activity"> | string
    description?: StringWithAggregatesFilter<"Activity"> | string
    addedById?: StringWithAggregatesFilter<"Activity"> | string
    needFollowUp?: BoolWithAggregatesFilter<"Activity"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Activity"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Activity"> | Date | string
    type?: EnumActivityTypeWithAggregatesFilter<"Activity"> | $Enums.ActivityType
    contactId?: StringWithAggregatesFilter<"Activity"> | string
    followUpDate?: DateTimeNullableWithAggregatesFilter<"Activity"> | Date | string | null
    assignedToId?: StringNullableWithAggregatesFilter<"Activity"> | string | null
    followUpActivityId?: StringNullableWithAggregatesFilter<"Activity"> | string | null
  }

  export type NoteWhereInput = {
    AND?: NoteWhereInput | NoteWhereInput[]
    OR?: NoteWhereInput[]
    NOT?: NoteWhereInput | NoteWhereInput[]
    id?: StringFilter<"Note"> | string
    title?: StringFilter<"Note"> | string
    description?: StringFilter<"Note"> | string
    category?: EnumNoteCategoryFilter<"Note"> | $Enums.NoteCategory
    createdAt?: DateTimeFilter<"Note"> | Date | string
    updatedAt?: DateTimeFilter<"Note"> | Date | string
    contactId?: StringFilter<"Note"> | string
    createdById?: StringFilter<"Note"> | string
    contact?: XOR<ContactScalarRelationFilter, ContactWhereInput>
    createdBy?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type NoteOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    category?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    contactId?: SortOrder
    createdById?: SortOrder
    contact?: ContactOrderByWithRelationInput
    createdBy?: UserOrderByWithRelationInput
    _relevance?: NoteOrderByRelevanceInput
  }

  export type NoteWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: NoteWhereInput | NoteWhereInput[]
    OR?: NoteWhereInput[]
    NOT?: NoteWhereInput | NoteWhereInput[]
    title?: StringFilter<"Note"> | string
    description?: StringFilter<"Note"> | string
    category?: EnumNoteCategoryFilter<"Note"> | $Enums.NoteCategory
    createdAt?: DateTimeFilter<"Note"> | Date | string
    updatedAt?: DateTimeFilter<"Note"> | Date | string
    contactId?: StringFilter<"Note"> | string
    createdById?: StringFilter<"Note"> | string
    contact?: XOR<ContactScalarRelationFilter, ContactWhereInput>
    createdBy?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type NoteOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    category?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    contactId?: SortOrder
    createdById?: SortOrder
    _count?: NoteCountOrderByAggregateInput
    _max?: NoteMaxOrderByAggregateInput
    _min?: NoteMinOrderByAggregateInput
  }

  export type NoteScalarWhereWithAggregatesInput = {
    AND?: NoteScalarWhereWithAggregatesInput | NoteScalarWhereWithAggregatesInput[]
    OR?: NoteScalarWhereWithAggregatesInput[]
    NOT?: NoteScalarWhereWithAggregatesInput | NoteScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Note"> | string
    title?: StringWithAggregatesFilter<"Note"> | string
    description?: StringWithAggregatesFilter<"Note"> | string
    category?: EnumNoteCategoryWithAggregatesFilter<"Note"> | $Enums.NoteCategory
    createdAt?: DateTimeWithAggregatesFilter<"Note"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Note"> | Date | string
    contactId?: StringWithAggregatesFilter<"Note"> | string
    createdById?: StringWithAggregatesFilter<"Note"> | string
  }

  export type ContactWhereInput = {
    AND?: ContactWhereInput | ContactWhereInput[]
    OR?: ContactWhereInput[]
    NOT?: ContactWhereInput | ContactWhereInput[]
    id?: StringFilter<"Contact"> | string
    name?: StringFilter<"Contact"> | string
    email?: StringNullableFilter<"Contact"> | string | null
    phoneNumber?: StringFilter<"Contact"> | string
    alternateNumber?: StringNullableFilter<"Contact"> | string | null
    branchId?: StringNullableFilter<"Contact"> | string | null
    contactType?: EnumContactTypeFilter<"Contact"> | $Enums.ContactType
    leadSegment?: EnumLeadSegmentNullableFilter<"Contact"> | $Enums.LeadSegment | null
    leadScore?: IntNullableFilter<"Contact"> | number | null
    followUpFrequency?: IntNullableFilter<"Contact"> | number | null
    followUpOn?: DateTimeNullableFilter<"Contact"> | Date | string | null
    assignedToId?: StringNullableFilter<"Contact"> | string | null
    createdAt?: DateTimeFilter<"Contact"> | Date | string
    updatedAt?: DateTimeFilter<"Contact"> | Date | string
    contactOrgId?: StringFilter<"Contact"> | string
    branch?: XOR<BranchNullableScalarRelationFilter, BranchWhereInput> | null
    assignedTo?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    pocBranch?: XOR<BranchNullableScalarRelationFilter, BranchWhereInput> | null
    activities?: ActivityListRelationFilter
    notes?: NoteListRelationFilter
    tags?: TagListRelationFilter
    contactOrg?: XOR<OrganisationScalarRelationFilter, OrganisationWhereInput>
  }

  export type ContactOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrderInput | SortOrder
    phoneNumber?: SortOrder
    alternateNumber?: SortOrderInput | SortOrder
    branchId?: SortOrderInput | SortOrder
    contactType?: SortOrder
    leadSegment?: SortOrderInput | SortOrder
    leadScore?: SortOrderInput | SortOrder
    followUpFrequency?: SortOrderInput | SortOrder
    followUpOn?: SortOrderInput | SortOrder
    assignedToId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    contactOrgId?: SortOrder
    branch?: BranchOrderByWithRelationInput
    assignedTo?: UserOrderByWithRelationInput
    pocBranch?: BranchOrderByWithRelationInput
    activities?: ActivityOrderByRelationAggregateInput
    notes?: NoteOrderByRelationAggregateInput
    tags?: TagOrderByRelationAggregateInput
    contactOrg?: OrganisationOrderByWithRelationInput
    _relevance?: ContactOrderByRelevanceInput
  }

  export type ContactWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ContactWhereInput | ContactWhereInput[]
    OR?: ContactWhereInput[]
    NOT?: ContactWhereInput | ContactWhereInput[]
    name?: StringFilter<"Contact"> | string
    email?: StringNullableFilter<"Contact"> | string | null
    phoneNumber?: StringFilter<"Contact"> | string
    alternateNumber?: StringNullableFilter<"Contact"> | string | null
    branchId?: StringNullableFilter<"Contact"> | string | null
    contactType?: EnumContactTypeFilter<"Contact"> | $Enums.ContactType
    leadSegment?: EnumLeadSegmentNullableFilter<"Contact"> | $Enums.LeadSegment | null
    leadScore?: IntNullableFilter<"Contact"> | number | null
    followUpFrequency?: IntNullableFilter<"Contact"> | number | null
    followUpOn?: DateTimeNullableFilter<"Contact"> | Date | string | null
    assignedToId?: StringNullableFilter<"Contact"> | string | null
    createdAt?: DateTimeFilter<"Contact"> | Date | string
    updatedAt?: DateTimeFilter<"Contact"> | Date | string
    contactOrgId?: StringFilter<"Contact"> | string
    branch?: XOR<BranchNullableScalarRelationFilter, BranchWhereInput> | null
    assignedTo?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    pocBranch?: XOR<BranchNullableScalarRelationFilter, BranchWhereInput> | null
    activities?: ActivityListRelationFilter
    notes?: NoteListRelationFilter
    tags?: TagListRelationFilter
    contactOrg?: XOR<OrganisationScalarRelationFilter, OrganisationWhereInput>
  }, "id">

  export type ContactOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrderInput | SortOrder
    phoneNumber?: SortOrder
    alternateNumber?: SortOrderInput | SortOrder
    branchId?: SortOrderInput | SortOrder
    contactType?: SortOrder
    leadSegment?: SortOrderInput | SortOrder
    leadScore?: SortOrderInput | SortOrder
    followUpFrequency?: SortOrderInput | SortOrder
    followUpOn?: SortOrderInput | SortOrder
    assignedToId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    contactOrgId?: SortOrder
    _count?: ContactCountOrderByAggregateInput
    _avg?: ContactAvgOrderByAggregateInput
    _max?: ContactMaxOrderByAggregateInput
    _min?: ContactMinOrderByAggregateInput
    _sum?: ContactSumOrderByAggregateInput
  }

  export type ContactScalarWhereWithAggregatesInput = {
    AND?: ContactScalarWhereWithAggregatesInput | ContactScalarWhereWithAggregatesInput[]
    OR?: ContactScalarWhereWithAggregatesInput[]
    NOT?: ContactScalarWhereWithAggregatesInput | ContactScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Contact"> | string
    name?: StringWithAggregatesFilter<"Contact"> | string
    email?: StringNullableWithAggregatesFilter<"Contact"> | string | null
    phoneNumber?: StringWithAggregatesFilter<"Contact"> | string
    alternateNumber?: StringNullableWithAggregatesFilter<"Contact"> | string | null
    branchId?: StringNullableWithAggregatesFilter<"Contact"> | string | null
    contactType?: EnumContactTypeWithAggregatesFilter<"Contact"> | $Enums.ContactType
    leadSegment?: EnumLeadSegmentNullableWithAggregatesFilter<"Contact"> | $Enums.LeadSegment | null
    leadScore?: IntNullableWithAggregatesFilter<"Contact"> | number | null
    followUpFrequency?: IntNullableWithAggregatesFilter<"Contact"> | number | null
    followUpOn?: DateTimeNullableWithAggregatesFilter<"Contact"> | Date | string | null
    assignedToId?: StringNullableWithAggregatesFilter<"Contact"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Contact"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Contact"> | Date | string
    contactOrgId?: StringWithAggregatesFilter<"Contact"> | string
  }

  export type UserCreateInput = {
    id?: string
    firstName: string
    lastName: string
    email: string
    password: string
    countryCode: string
    phoneNumber: string
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    organisation?: OrganisationCreateNestedOneWithoutTeamInput
    addedActivities?: ActivityCreateNestedManyWithoutAddedByInput
    sessions?: SessionCreateNestedManyWithoutUserInput
    tokens?: TokenCreateNestedManyWithoutUserInput
    contactFollowUps?: ContactCreateNestedManyWithoutAssignedToInput
    createdNotes?: NoteCreateNestedManyWithoutCreatedByInput
    activityFollowUps?: ActivityCreateNestedManyWithoutAssignedToInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    firstName: string
    lastName: string
    email: string
    password: string
    countryCode: string
    phoneNumber: string
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    organisationId?: string | null
    addedActivities?: ActivityUncheckedCreateNestedManyWithoutAddedByInput
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    tokens?: TokenUncheckedCreateNestedManyWithoutUserInput
    contactFollowUps?: ContactUncheckedCreateNestedManyWithoutAssignedToInput
    createdNotes?: NoteUncheckedCreateNestedManyWithoutCreatedByInput
    activityFollowUps?: ActivityUncheckedCreateNestedManyWithoutAssignedToInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    countryCode?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    organisation?: OrganisationUpdateOneWithoutTeamNestedInput
    addedActivities?: ActivityUpdateManyWithoutAddedByNestedInput
    sessions?: SessionUpdateManyWithoutUserNestedInput
    tokens?: TokenUpdateManyWithoutUserNestedInput
    contactFollowUps?: ContactUpdateManyWithoutAssignedToNestedInput
    createdNotes?: NoteUpdateManyWithoutCreatedByNestedInput
    activityFollowUps?: ActivityUpdateManyWithoutAssignedToNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    countryCode?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    organisationId?: NullableStringFieldUpdateOperationsInput | string | null
    addedActivities?: ActivityUncheckedUpdateManyWithoutAddedByNestedInput
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    tokens?: TokenUncheckedUpdateManyWithoutUserNestedInput
    contactFollowUps?: ContactUncheckedUpdateManyWithoutAssignedToNestedInput
    createdNotes?: NoteUncheckedUpdateManyWithoutCreatedByNestedInput
    activityFollowUps?: ActivityUncheckedUpdateManyWithoutAssignedToNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    firstName: string
    lastName: string
    email: string
    password: string
    countryCode: string
    phoneNumber: string
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    organisationId?: string | null
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    countryCode?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    countryCode?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    organisationId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SessionCreateInput = {
    id?: string
    expiresAt: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutSessionsInput
    tokens?: TokenCreateNestedManyWithoutSessionInput
  }

  export type SessionUncheckedCreateInput = {
    id?: string
    userId: string
    expiresAt: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    tokens?: TokenUncheckedCreateNestedManyWithoutSessionInput
  }

  export type SessionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutSessionsNestedInput
    tokens?: TokenUpdateManyWithoutSessionNestedInput
  }

  export type SessionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tokens?: TokenUncheckedUpdateManyWithoutSessionNestedInput
  }

  export type SessionCreateManyInput = {
    id?: string
    userId: string
    expiresAt: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SessionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TokenCreateInput = {
    id?: string
    scopes?: TokenCreatescopesInput | $Enums.Scope[]
    accessToken: string
    refreshToken?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    session: SessionCreateNestedOneWithoutTokensInput
    user: UserCreateNestedOneWithoutTokensInput
  }

  export type TokenUncheckedCreateInput = {
    id?: string
    userId: string
    sessionId: string
    scopes?: TokenCreatescopesInput | $Enums.Scope[]
    accessToken: string
    refreshToken?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TokenUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    scopes?: TokenUpdatescopesInput | $Enums.Scope[]
    accessToken?: StringFieldUpdateOperationsInput | string
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    session?: SessionUpdateOneRequiredWithoutTokensNestedInput
    user?: UserUpdateOneRequiredWithoutTokensNestedInput
  }

  export type TokenUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    sessionId?: StringFieldUpdateOperationsInput | string
    scopes?: TokenUpdatescopesInput | $Enums.Scope[]
    accessToken?: StringFieldUpdateOperationsInput | string
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TokenCreateManyInput = {
    id?: string
    userId: string
    sessionId: string
    scopes?: TokenCreatescopesInput | $Enums.Scope[]
    accessToken: string
    refreshToken?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TokenUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    scopes?: TokenUpdatescopesInput | $Enums.Scope[]
    accessToken?: StringFieldUpdateOperationsInput | string
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TokenUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    sessionId?: StringFieldUpdateOperationsInput | string
    scopes?: TokenUpdatescopesInput | $Enums.Scope[]
    accessToken?: StringFieldUpdateOperationsInput | string
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RegionCreateInput = {
    id?: string
    name: string
    state: string
    country: string
    createdAt?: Date | string
    updatedAt?: Date | string
    branches?: BranchCreateNestedManyWithoutRegionInput
    schedules?: ScheduleCreateNestedManyWithoutRegionInput
  }

  export type RegionUncheckedCreateInput = {
    id?: string
    name: string
    state: string
    country: string
    createdAt?: Date | string
    updatedAt?: Date | string
    branches?: BranchUncheckedCreateNestedManyWithoutRegionInput
    schedules?: ScheduleUncheckedCreateNestedManyWithoutRegionInput
  }

  export type RegionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    branches?: BranchUpdateManyWithoutRegionNestedInput
    schedules?: ScheduleUpdateManyWithoutRegionNestedInput
  }

  export type RegionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    branches?: BranchUncheckedUpdateManyWithoutRegionNestedInput
    schedules?: ScheduleUncheckedUpdateManyWithoutRegionNestedInput
  }

  export type RegionCreateManyInput = {
    id?: string
    name: string
    state: string
    country: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RegionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RegionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ScheduleCreateInput = {
    id?: string
    dayOfMonth: number
    createdAt?: Date | string
    updatedAt?: Date | string
    region: RegionCreateNestedOneWithoutSchedulesInput
    createdOrg: OrganisationCreateNestedOneWithoutCreatedScheduleInput
  }

  export type ScheduleUncheckedCreateInput = {
    id?: string
    regionId: string
    dayOfMonth: number
    createdOrgId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ScheduleUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    dayOfMonth?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    region?: RegionUpdateOneRequiredWithoutSchedulesNestedInput
    createdOrg?: OrganisationUpdateOneRequiredWithoutCreatedScheduleNestedInput
  }

  export type ScheduleUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    regionId?: StringFieldUpdateOperationsInput | string
    dayOfMonth?: IntFieldUpdateOperationsInput | number
    createdOrgId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ScheduleCreateManyInput = {
    id?: string
    regionId: string
    dayOfMonth: number
    createdOrgId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ScheduleUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    dayOfMonth?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ScheduleUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    regionId?: StringFieldUpdateOperationsInput | string
    dayOfMonth?: IntFieldUpdateOperationsInput | number
    createdOrgId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BranchCreateInput = {
    id?: string
    address?: string | null
    city: string
    postalCode?: string | null
    landlineNumber?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    type: $Enums.BranchType
    region: RegionCreateNestedOneWithoutBranchesInput
    organisation: OrganisationCreateNestedOneWithoutBranchesInput
    contacts?: ContactCreateNestedManyWithoutBranchInput
    pointOfContact?: ContactCreateNestedOneWithoutPocBranchInput
  }

  export type BranchUncheckedCreateInput = {
    id?: string
    address?: string | null
    city: string
    postalCode?: string | null
    landlineNumber?: string | null
    regionId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    organisationId: string
    type: $Enums.BranchType
    pointOfContactId?: string | null
    contacts?: ContactUncheckedCreateNestedManyWithoutBranchInput
  }

  export type BranchUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    city?: StringFieldUpdateOperationsInput | string
    postalCode?: NullableStringFieldUpdateOperationsInput | string | null
    landlineNumber?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: EnumBranchTypeFieldUpdateOperationsInput | $Enums.BranchType
    region?: RegionUpdateOneRequiredWithoutBranchesNestedInput
    organisation?: OrganisationUpdateOneRequiredWithoutBranchesNestedInput
    contacts?: ContactUpdateManyWithoutBranchNestedInput
    pointOfContact?: ContactUpdateOneWithoutPocBranchNestedInput
  }

  export type BranchUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    city?: StringFieldUpdateOperationsInput | string
    postalCode?: NullableStringFieldUpdateOperationsInput | string | null
    landlineNumber?: NullableStringFieldUpdateOperationsInput | string | null
    regionId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    organisationId?: StringFieldUpdateOperationsInput | string
    type?: EnumBranchTypeFieldUpdateOperationsInput | $Enums.BranchType
    pointOfContactId?: NullableStringFieldUpdateOperationsInput | string | null
    contacts?: ContactUncheckedUpdateManyWithoutBranchNestedInput
  }

  export type BranchCreateManyInput = {
    id?: string
    address?: string | null
    city: string
    postalCode?: string | null
    landlineNumber?: string | null
    regionId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    organisationId: string
    type: $Enums.BranchType
    pointOfContactId?: string | null
  }

  export type BranchUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    city?: StringFieldUpdateOperationsInput | string
    postalCode?: NullableStringFieldUpdateOperationsInput | string | null
    landlineNumber?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: EnumBranchTypeFieldUpdateOperationsInput | $Enums.BranchType
  }

  export type BranchUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    city?: StringFieldUpdateOperationsInput | string
    postalCode?: NullableStringFieldUpdateOperationsInput | string | null
    landlineNumber?: NullableStringFieldUpdateOperationsInput | string | null
    regionId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    organisationId?: StringFieldUpdateOperationsInput | string
    type?: EnumBranchTypeFieldUpdateOperationsInput | $Enums.BranchType
    pointOfContactId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type OrganisationCreateInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    team?: UserCreateNestedManyWithoutOrganisationInput
    branches?: BranchCreateNestedManyWithoutOrganisationInput
    tags?: TagCreateNestedManyWithoutOrganisationsInput
    contactOrganisations?: OrganisationCreateNestedManyWithoutContactOrganisationInput
    contactOrganisation?: OrganisationCreateNestedOneWithoutContactOrganisationsInput
    createdTags?: TagCreateNestedManyWithoutCreatedOrganisationInput
    contacts?: ContactCreateNestedManyWithoutContactOrgInput
    createdSchedule?: ScheduleCreateNestedManyWithoutCreatedOrgInput
  }

  export type OrganisationUncheckedCreateInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    contactOrgId?: string | null
    team?: UserUncheckedCreateNestedManyWithoutOrganisationInput
    branches?: BranchUncheckedCreateNestedManyWithoutOrganisationInput
    tags?: TagUncheckedCreateNestedManyWithoutOrganisationsInput
    contactOrganisations?: OrganisationUncheckedCreateNestedManyWithoutContactOrganisationInput
    createdTags?: TagUncheckedCreateNestedManyWithoutCreatedOrganisationInput
    contacts?: ContactUncheckedCreateNestedManyWithoutContactOrgInput
    createdSchedule?: ScheduleUncheckedCreateNestedManyWithoutCreatedOrgInput
  }

  export type OrganisationUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    team?: UserUpdateManyWithoutOrganisationNestedInput
    branches?: BranchUpdateManyWithoutOrganisationNestedInput
    tags?: TagUpdateManyWithoutOrganisationsNestedInput
    contactOrganisations?: OrganisationUpdateManyWithoutContactOrganisationNestedInput
    contactOrganisation?: OrganisationUpdateOneWithoutContactOrganisationsNestedInput
    createdTags?: TagUpdateManyWithoutCreatedOrganisationNestedInput
    contacts?: ContactUpdateManyWithoutContactOrgNestedInput
    createdSchedule?: ScheduleUpdateManyWithoutCreatedOrgNestedInput
  }

  export type OrganisationUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    contactOrgId?: NullableStringFieldUpdateOperationsInput | string | null
    team?: UserUncheckedUpdateManyWithoutOrganisationNestedInput
    branches?: BranchUncheckedUpdateManyWithoutOrganisationNestedInput
    tags?: TagUncheckedUpdateManyWithoutOrganisationsNestedInput
    contactOrganisations?: OrganisationUncheckedUpdateManyWithoutContactOrganisationNestedInput
    createdTags?: TagUncheckedUpdateManyWithoutCreatedOrganisationNestedInput
    contacts?: ContactUncheckedUpdateManyWithoutContactOrgNestedInput
    createdSchedule?: ScheduleUncheckedUpdateManyWithoutCreatedOrgNestedInput
  }

  export type OrganisationCreateManyInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    contactOrgId?: string | null
  }

  export type OrganisationUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrganisationUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    contactOrgId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type TagCreateInput = {
    id?: string
    title: string
    description?: string | null
    tagType?: $Enums.TagType
    createdAt?: Date | string
    updatedAt?: Date | string
    createdOrganisation: OrganisationCreateNestedOneWithoutCreatedTagsInput
    organisations?: OrganisationCreateNestedManyWithoutTagsInput
    activities?: ActivityCreateNestedManyWithoutTagsInput
    contacts?: ContactCreateNestedManyWithoutTagsInput
  }

  export type TagUncheckedCreateInput = {
    id?: string
    title: string
    description?: string | null
    tagType?: $Enums.TagType
    createdOrganisationId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    organisations?: OrganisationUncheckedCreateNestedManyWithoutTagsInput
    activities?: ActivityUncheckedCreateNestedManyWithoutTagsInput
    contacts?: ContactUncheckedCreateNestedManyWithoutTagsInput
  }

  export type TagUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    tagType?: EnumTagTypeFieldUpdateOperationsInput | $Enums.TagType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdOrganisation?: OrganisationUpdateOneRequiredWithoutCreatedTagsNestedInput
    organisations?: OrganisationUpdateManyWithoutTagsNestedInput
    activities?: ActivityUpdateManyWithoutTagsNestedInput
    contacts?: ContactUpdateManyWithoutTagsNestedInput
  }

  export type TagUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    tagType?: EnumTagTypeFieldUpdateOperationsInput | $Enums.TagType
    createdOrganisationId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    organisations?: OrganisationUncheckedUpdateManyWithoutTagsNestedInput
    activities?: ActivityUncheckedUpdateManyWithoutTagsNestedInput
    contacts?: ContactUncheckedUpdateManyWithoutTagsNestedInput
  }

  export type TagCreateManyInput = {
    id?: string
    title: string
    description?: string | null
    tagType?: $Enums.TagType
    createdOrganisationId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TagUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    tagType?: EnumTagTypeFieldUpdateOperationsInput | $Enums.TagType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TagUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    tagType?: EnumTagTypeFieldUpdateOperationsInput | $Enums.TagType
    createdOrganisationId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ActivityCreateInput = {
    id?: string
    title: string
    description: string
    needFollowUp?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    type?: $Enums.ActivityType
    followUpDate?: Date | string | null
    addedBy: UserCreateNestedOneWithoutAddedActivitiesInput
    tags?: TagCreateNestedManyWithoutActivitiesInput
    contact: ContactCreateNestedOneWithoutActivitiesInput
    assignedTo?: UserCreateNestedOneWithoutActivityFollowUpsInput
    followUpActivity?: ActivityCreateNestedOneWithoutFollowUpActivitiesInput
    followUpActivities?: ActivityCreateNestedManyWithoutFollowUpActivityInput
  }

  export type ActivityUncheckedCreateInput = {
    id?: string
    title: string
    description: string
    addedById: string
    needFollowUp?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    type?: $Enums.ActivityType
    contactId: string
    followUpDate?: Date | string | null
    assignedToId?: string | null
    followUpActivityId?: string | null
    tags?: TagUncheckedCreateNestedManyWithoutActivitiesInput
    followUpActivities?: ActivityUncheckedCreateNestedManyWithoutFollowUpActivityInput
  }

  export type ActivityUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    needFollowUp?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: EnumActivityTypeFieldUpdateOperationsInput | $Enums.ActivityType
    followUpDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    addedBy?: UserUpdateOneRequiredWithoutAddedActivitiesNestedInput
    tags?: TagUpdateManyWithoutActivitiesNestedInput
    contact?: ContactUpdateOneRequiredWithoutActivitiesNestedInput
    assignedTo?: UserUpdateOneWithoutActivityFollowUpsNestedInput
    followUpActivity?: ActivityUpdateOneWithoutFollowUpActivitiesNestedInput
    followUpActivities?: ActivityUpdateManyWithoutFollowUpActivityNestedInput
  }

  export type ActivityUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    addedById?: StringFieldUpdateOperationsInput | string
    needFollowUp?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: EnumActivityTypeFieldUpdateOperationsInput | $Enums.ActivityType
    contactId?: StringFieldUpdateOperationsInput | string
    followUpDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    assignedToId?: NullableStringFieldUpdateOperationsInput | string | null
    followUpActivityId?: NullableStringFieldUpdateOperationsInput | string | null
    tags?: TagUncheckedUpdateManyWithoutActivitiesNestedInput
    followUpActivities?: ActivityUncheckedUpdateManyWithoutFollowUpActivityNestedInput
  }

  export type ActivityCreateManyInput = {
    id?: string
    title: string
    description: string
    addedById: string
    needFollowUp?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    type?: $Enums.ActivityType
    contactId: string
    followUpDate?: Date | string | null
    assignedToId?: string | null
    followUpActivityId?: string | null
  }

  export type ActivityUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    needFollowUp?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: EnumActivityTypeFieldUpdateOperationsInput | $Enums.ActivityType
    followUpDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ActivityUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    addedById?: StringFieldUpdateOperationsInput | string
    needFollowUp?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: EnumActivityTypeFieldUpdateOperationsInput | $Enums.ActivityType
    contactId?: StringFieldUpdateOperationsInput | string
    followUpDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    assignedToId?: NullableStringFieldUpdateOperationsInput | string | null
    followUpActivityId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type NoteCreateInput = {
    id?: string
    title: string
    description: string
    category: $Enums.NoteCategory
    createdAt?: Date | string
    updatedAt?: Date | string
    contact: ContactCreateNestedOneWithoutNotesInput
    createdBy: UserCreateNestedOneWithoutCreatedNotesInput
  }

  export type NoteUncheckedCreateInput = {
    id?: string
    title: string
    description: string
    category: $Enums.NoteCategory
    createdAt?: Date | string
    updatedAt?: Date | string
    contactId: string
    createdById: string
  }

  export type NoteUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    category?: EnumNoteCategoryFieldUpdateOperationsInput | $Enums.NoteCategory
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    contact?: ContactUpdateOneRequiredWithoutNotesNestedInput
    createdBy?: UserUpdateOneRequiredWithoutCreatedNotesNestedInput
  }

  export type NoteUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    category?: EnumNoteCategoryFieldUpdateOperationsInput | $Enums.NoteCategory
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    contactId?: StringFieldUpdateOperationsInput | string
    createdById?: StringFieldUpdateOperationsInput | string
  }

  export type NoteCreateManyInput = {
    id?: string
    title: string
    description: string
    category: $Enums.NoteCategory
    createdAt?: Date | string
    updatedAt?: Date | string
    contactId: string
    createdById: string
  }

  export type NoteUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    category?: EnumNoteCategoryFieldUpdateOperationsInput | $Enums.NoteCategory
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NoteUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    category?: EnumNoteCategoryFieldUpdateOperationsInput | $Enums.NoteCategory
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    contactId?: StringFieldUpdateOperationsInput | string
    createdById?: StringFieldUpdateOperationsInput | string
  }

  export type ContactCreateInput = {
    id?: string
    name: string
    email?: string | null
    phoneNumber: string
    alternateNumber?: string | null
    contactType: $Enums.ContactType
    leadSegment?: $Enums.LeadSegment | null
    leadScore?: number | null
    followUpFrequency?: number | null
    followUpOn?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    branch?: BranchCreateNestedOneWithoutContactsInput
    assignedTo?: UserCreateNestedOneWithoutContactFollowUpsInput
    pocBranch?: BranchCreateNestedOneWithoutPointOfContactInput
    activities?: ActivityCreateNestedManyWithoutContactInput
    notes?: NoteCreateNestedManyWithoutContactInput
    tags?: TagCreateNestedManyWithoutContactsInput
    contactOrg: OrganisationCreateNestedOneWithoutContactsInput
  }

  export type ContactUncheckedCreateInput = {
    id?: string
    name: string
    email?: string | null
    phoneNumber: string
    alternateNumber?: string | null
    branchId?: string | null
    contactType: $Enums.ContactType
    leadSegment?: $Enums.LeadSegment | null
    leadScore?: number | null
    followUpFrequency?: number | null
    followUpOn?: Date | string | null
    assignedToId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    contactOrgId: string
    pocBranch?: BranchUncheckedCreateNestedOneWithoutPointOfContactInput
    activities?: ActivityUncheckedCreateNestedManyWithoutContactInput
    notes?: NoteUncheckedCreateNestedManyWithoutContactInput
    tags?: TagUncheckedCreateNestedManyWithoutContactsInput
  }

  export type ContactUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: StringFieldUpdateOperationsInput | string
    alternateNumber?: NullableStringFieldUpdateOperationsInput | string | null
    contactType?: EnumContactTypeFieldUpdateOperationsInput | $Enums.ContactType
    leadSegment?: NullableEnumLeadSegmentFieldUpdateOperationsInput | $Enums.LeadSegment | null
    leadScore?: NullableIntFieldUpdateOperationsInput | number | null
    followUpFrequency?: NullableIntFieldUpdateOperationsInput | number | null
    followUpOn?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    branch?: BranchUpdateOneWithoutContactsNestedInput
    assignedTo?: UserUpdateOneWithoutContactFollowUpsNestedInput
    pocBranch?: BranchUpdateOneWithoutPointOfContactNestedInput
    activities?: ActivityUpdateManyWithoutContactNestedInput
    notes?: NoteUpdateManyWithoutContactNestedInput
    tags?: TagUpdateManyWithoutContactsNestedInput
    contactOrg?: OrganisationUpdateOneRequiredWithoutContactsNestedInput
  }

  export type ContactUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: StringFieldUpdateOperationsInput | string
    alternateNumber?: NullableStringFieldUpdateOperationsInput | string | null
    branchId?: NullableStringFieldUpdateOperationsInput | string | null
    contactType?: EnumContactTypeFieldUpdateOperationsInput | $Enums.ContactType
    leadSegment?: NullableEnumLeadSegmentFieldUpdateOperationsInput | $Enums.LeadSegment | null
    leadScore?: NullableIntFieldUpdateOperationsInput | number | null
    followUpFrequency?: NullableIntFieldUpdateOperationsInput | number | null
    followUpOn?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    assignedToId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    contactOrgId?: StringFieldUpdateOperationsInput | string
    pocBranch?: BranchUncheckedUpdateOneWithoutPointOfContactNestedInput
    activities?: ActivityUncheckedUpdateManyWithoutContactNestedInput
    notes?: NoteUncheckedUpdateManyWithoutContactNestedInput
    tags?: TagUncheckedUpdateManyWithoutContactsNestedInput
  }

  export type ContactCreateManyInput = {
    id?: string
    name: string
    email?: string | null
    phoneNumber: string
    alternateNumber?: string | null
    branchId?: string | null
    contactType: $Enums.ContactType
    leadSegment?: $Enums.LeadSegment | null
    leadScore?: number | null
    followUpFrequency?: number | null
    followUpOn?: Date | string | null
    assignedToId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    contactOrgId: string
  }

  export type ContactUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: StringFieldUpdateOperationsInput | string
    alternateNumber?: NullableStringFieldUpdateOperationsInput | string | null
    contactType?: EnumContactTypeFieldUpdateOperationsInput | $Enums.ContactType
    leadSegment?: NullableEnumLeadSegmentFieldUpdateOperationsInput | $Enums.LeadSegment | null
    leadScore?: NullableIntFieldUpdateOperationsInput | number | null
    followUpFrequency?: NullableIntFieldUpdateOperationsInput | number | null
    followUpOn?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ContactUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: StringFieldUpdateOperationsInput | string
    alternateNumber?: NullableStringFieldUpdateOperationsInput | string | null
    branchId?: NullableStringFieldUpdateOperationsInput | string | null
    contactType?: EnumContactTypeFieldUpdateOperationsInput | $Enums.ContactType
    leadSegment?: NullableEnumLeadSegmentFieldUpdateOperationsInput | $Enums.LeadSegment | null
    leadScore?: NullableIntFieldUpdateOperationsInput | number | null
    followUpFrequency?: NullableIntFieldUpdateOperationsInput | number | null
    followUpOn?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    assignedToId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    contactOrgId?: StringFieldUpdateOperationsInput | string
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
    search?: string
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type EnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
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
    search?: string
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type OrganisationNullableScalarRelationFilter = {
    is?: OrganisationWhereInput | null
    isNot?: OrganisationWhereInput | null
  }

  export type ActivityListRelationFilter = {
    every?: ActivityWhereInput
    some?: ActivityWhereInput
    none?: ActivityWhereInput
  }

  export type SessionListRelationFilter = {
    every?: SessionWhereInput
    some?: SessionWhereInput
    none?: SessionWhereInput
  }

  export type TokenListRelationFilter = {
    every?: TokenWhereInput
    some?: TokenWhereInput
    none?: TokenWhereInput
  }

  export type ContactListRelationFilter = {
    every?: ContactWhereInput
    some?: ContactWhereInput
    none?: ContactWhereInput
  }

  export type NoteListRelationFilter = {
    every?: NoteWhereInput
    some?: NoteWhereInput
    none?: NoteWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type ActivityOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SessionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TokenOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ContactOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type NoteOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserOrderByRelevanceInput = {
    fields: UserOrderByRelevanceFieldEnum | UserOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    password?: SortOrder
    countryCode?: SortOrder
    phoneNumber?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    organisationId?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    password?: SortOrder
    countryCode?: SortOrder
    phoneNumber?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    organisationId?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    password?: SortOrder
    countryCode?: SortOrder
    phoneNumber?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    organisationId?: SortOrder
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
    search?: string
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type EnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
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
    search?: string
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type SessionOrderByRelevanceInput = {
    fields: SessionOrderByRelevanceFieldEnum | SessionOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type SessionCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SessionMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SessionMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnumScopeNullableListFilter<$PrismaModel = never> = {
    equals?: $Enums.Scope[] | ListEnumScopeFieldRefInput<$PrismaModel> | null
    has?: $Enums.Scope | EnumScopeFieldRefInput<$PrismaModel> | null
    hasEvery?: $Enums.Scope[] | ListEnumScopeFieldRefInput<$PrismaModel>
    hasSome?: $Enums.Scope[] | ListEnumScopeFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type SessionScalarRelationFilter = {
    is?: SessionWhereInput
    isNot?: SessionWhereInput
  }

  export type TokenOrderByRelevanceInput = {
    fields: TokenOrderByRelevanceFieldEnum | TokenOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type TokenCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    sessionId?: SortOrder
    scopes?: SortOrder
    accessToken?: SortOrder
    refreshToken?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TokenMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    sessionId?: SortOrder
    accessToken?: SortOrder
    refreshToken?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TokenMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    sessionId?: SortOrder
    accessToken?: SortOrder
    refreshToken?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BranchListRelationFilter = {
    every?: BranchWhereInput
    some?: BranchWhereInput
    none?: BranchWhereInput
  }

  export type ScheduleListRelationFilter = {
    every?: ScheduleWhereInput
    some?: ScheduleWhereInput
    none?: ScheduleWhereInput
  }

  export type BranchOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ScheduleOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type RegionOrderByRelevanceInput = {
    fields: RegionOrderByRelevanceFieldEnum | RegionOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type RegionCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    state?: SortOrder
    country?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RegionMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    state?: SortOrder
    country?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RegionMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    state?: SortOrder
    country?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
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

  export type RegionScalarRelationFilter = {
    is?: RegionWhereInput
    isNot?: RegionWhereInput
  }

  export type OrganisationScalarRelationFilter = {
    is?: OrganisationWhereInput
    isNot?: OrganisationWhereInput
  }

  export type ScheduleOrderByRelevanceInput = {
    fields: ScheduleOrderByRelevanceFieldEnum | ScheduleOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type ScheduleCountOrderByAggregateInput = {
    id?: SortOrder
    regionId?: SortOrder
    dayOfMonth?: SortOrder
    createdOrgId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ScheduleAvgOrderByAggregateInput = {
    dayOfMonth?: SortOrder
  }

  export type ScheduleMaxOrderByAggregateInput = {
    id?: SortOrder
    regionId?: SortOrder
    dayOfMonth?: SortOrder
    createdOrgId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ScheduleMinOrderByAggregateInput = {
    id?: SortOrder
    regionId?: SortOrder
    dayOfMonth?: SortOrder
    createdOrgId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ScheduleSumOrderByAggregateInput = {
    dayOfMonth?: SortOrder
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

  export type EnumBranchTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.BranchType | EnumBranchTypeFieldRefInput<$PrismaModel>
    in?: $Enums.BranchType[] | ListEnumBranchTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.BranchType[] | ListEnumBranchTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumBranchTypeFilter<$PrismaModel> | $Enums.BranchType
  }

  export type ContactNullableScalarRelationFilter = {
    is?: ContactWhereInput | null
    isNot?: ContactWhereInput | null
  }

  export type BranchOrderByRelevanceInput = {
    fields: BranchOrderByRelevanceFieldEnum | BranchOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type BranchCountOrderByAggregateInput = {
    id?: SortOrder
    address?: SortOrder
    city?: SortOrder
    postalCode?: SortOrder
    landlineNumber?: SortOrder
    regionId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    organisationId?: SortOrder
    type?: SortOrder
    pointOfContactId?: SortOrder
  }

  export type BranchMaxOrderByAggregateInput = {
    id?: SortOrder
    address?: SortOrder
    city?: SortOrder
    postalCode?: SortOrder
    landlineNumber?: SortOrder
    regionId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    organisationId?: SortOrder
    type?: SortOrder
    pointOfContactId?: SortOrder
  }

  export type BranchMinOrderByAggregateInput = {
    id?: SortOrder
    address?: SortOrder
    city?: SortOrder
    postalCode?: SortOrder
    landlineNumber?: SortOrder
    regionId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    organisationId?: SortOrder
    type?: SortOrder
    pointOfContactId?: SortOrder
  }

  export type EnumBranchTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.BranchType | EnumBranchTypeFieldRefInput<$PrismaModel>
    in?: $Enums.BranchType[] | ListEnumBranchTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.BranchType[] | ListEnumBranchTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumBranchTypeWithAggregatesFilter<$PrismaModel> | $Enums.BranchType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumBranchTypeFilter<$PrismaModel>
    _max?: NestedEnumBranchTypeFilter<$PrismaModel>
  }

  export type UserListRelationFilter = {
    every?: UserWhereInput
    some?: UserWhereInput
    none?: UserWhereInput
  }

  export type TagListRelationFilter = {
    every?: TagWhereInput
    some?: TagWhereInput
    none?: TagWhereInput
  }

  export type OrganisationListRelationFilter = {
    every?: OrganisationWhereInput
    some?: OrganisationWhereInput
    none?: OrganisationWhereInput
  }

  export type UserOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TagOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type OrganisationOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type OrganisationOrderByRelevanceInput = {
    fields: OrganisationOrderByRelevanceFieldEnum | OrganisationOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type OrganisationCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    contactOrgId?: SortOrder
  }

  export type OrganisationMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    contactOrgId?: SortOrder
  }

  export type OrganisationMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    contactOrgId?: SortOrder
  }

  export type EnumTagTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.TagType | EnumTagTypeFieldRefInput<$PrismaModel>
    in?: $Enums.TagType[] | ListEnumTagTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.TagType[] | ListEnumTagTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumTagTypeFilter<$PrismaModel> | $Enums.TagType
  }

  export type TagOrderByRelevanceInput = {
    fields: TagOrderByRelevanceFieldEnum | TagOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type TagCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    tagType?: SortOrder
    createdOrganisationId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TagMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    tagType?: SortOrder
    createdOrganisationId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TagMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    tagType?: SortOrder
    createdOrganisationId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnumTagTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TagType | EnumTagTypeFieldRefInput<$PrismaModel>
    in?: $Enums.TagType[] | ListEnumTagTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.TagType[] | ListEnumTagTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumTagTypeWithAggregatesFilter<$PrismaModel> | $Enums.TagType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTagTypeFilter<$PrismaModel>
    _max?: NestedEnumTagTypeFilter<$PrismaModel>
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type EnumActivityTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.ActivityType | EnumActivityTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ActivityType[] | ListEnumActivityTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ActivityType[] | ListEnumActivityTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumActivityTypeFilter<$PrismaModel> | $Enums.ActivityType
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type ContactScalarRelationFilter = {
    is?: ContactWhereInput
    isNot?: ContactWhereInput
  }

  export type UserNullableScalarRelationFilter = {
    is?: UserWhereInput | null
    isNot?: UserWhereInput | null
  }

  export type ActivityNullableScalarRelationFilter = {
    is?: ActivityWhereInput | null
    isNot?: ActivityWhereInput | null
  }

  export type ActivityOrderByRelevanceInput = {
    fields: ActivityOrderByRelevanceFieldEnum | ActivityOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type ActivityCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    addedById?: SortOrder
    needFollowUp?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    type?: SortOrder
    contactId?: SortOrder
    followUpDate?: SortOrder
    assignedToId?: SortOrder
    followUpActivityId?: SortOrder
  }

  export type ActivityMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    addedById?: SortOrder
    needFollowUp?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    type?: SortOrder
    contactId?: SortOrder
    followUpDate?: SortOrder
    assignedToId?: SortOrder
    followUpActivityId?: SortOrder
  }

  export type ActivityMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    addedById?: SortOrder
    needFollowUp?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    type?: SortOrder
    contactId?: SortOrder
    followUpDate?: SortOrder
    assignedToId?: SortOrder
    followUpActivityId?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type EnumActivityTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ActivityType | EnumActivityTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ActivityType[] | ListEnumActivityTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ActivityType[] | ListEnumActivityTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumActivityTypeWithAggregatesFilter<$PrismaModel> | $Enums.ActivityType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumActivityTypeFilter<$PrismaModel>
    _max?: NestedEnumActivityTypeFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type EnumNoteCategoryFilter<$PrismaModel = never> = {
    equals?: $Enums.NoteCategory | EnumNoteCategoryFieldRefInput<$PrismaModel>
    in?: $Enums.NoteCategory[] | ListEnumNoteCategoryFieldRefInput<$PrismaModel>
    notIn?: $Enums.NoteCategory[] | ListEnumNoteCategoryFieldRefInput<$PrismaModel>
    not?: NestedEnumNoteCategoryFilter<$PrismaModel> | $Enums.NoteCategory
  }

  export type NoteOrderByRelevanceInput = {
    fields: NoteOrderByRelevanceFieldEnum | NoteOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type NoteCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    category?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    contactId?: SortOrder
    createdById?: SortOrder
  }

  export type NoteMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    category?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    contactId?: SortOrder
    createdById?: SortOrder
  }

  export type NoteMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    category?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    contactId?: SortOrder
    createdById?: SortOrder
  }

  export type EnumNoteCategoryWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.NoteCategory | EnumNoteCategoryFieldRefInput<$PrismaModel>
    in?: $Enums.NoteCategory[] | ListEnumNoteCategoryFieldRefInput<$PrismaModel>
    notIn?: $Enums.NoteCategory[] | ListEnumNoteCategoryFieldRefInput<$PrismaModel>
    not?: NestedEnumNoteCategoryWithAggregatesFilter<$PrismaModel> | $Enums.NoteCategory
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumNoteCategoryFilter<$PrismaModel>
    _max?: NestedEnumNoteCategoryFilter<$PrismaModel>
  }

  export type EnumContactTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.ContactType | EnumContactTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ContactType[] | ListEnumContactTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ContactType[] | ListEnumContactTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumContactTypeFilter<$PrismaModel> | $Enums.ContactType
  }

  export type EnumLeadSegmentNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.LeadSegment | EnumLeadSegmentFieldRefInput<$PrismaModel> | null
    in?: $Enums.LeadSegment[] | ListEnumLeadSegmentFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.LeadSegment[] | ListEnumLeadSegmentFieldRefInput<$PrismaModel> | null
    not?: NestedEnumLeadSegmentNullableFilter<$PrismaModel> | $Enums.LeadSegment | null
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type BranchNullableScalarRelationFilter = {
    is?: BranchWhereInput | null
    isNot?: BranchWhereInput | null
  }

  export type ContactOrderByRelevanceInput = {
    fields: ContactOrderByRelevanceFieldEnum | ContactOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type ContactCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phoneNumber?: SortOrder
    alternateNumber?: SortOrder
    branchId?: SortOrder
    contactType?: SortOrder
    leadSegment?: SortOrder
    leadScore?: SortOrder
    followUpFrequency?: SortOrder
    followUpOn?: SortOrder
    assignedToId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    contactOrgId?: SortOrder
  }

  export type ContactAvgOrderByAggregateInput = {
    leadScore?: SortOrder
    followUpFrequency?: SortOrder
  }

  export type ContactMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phoneNumber?: SortOrder
    alternateNumber?: SortOrder
    branchId?: SortOrder
    contactType?: SortOrder
    leadSegment?: SortOrder
    leadScore?: SortOrder
    followUpFrequency?: SortOrder
    followUpOn?: SortOrder
    assignedToId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    contactOrgId?: SortOrder
  }

  export type ContactMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phoneNumber?: SortOrder
    alternateNumber?: SortOrder
    branchId?: SortOrder
    contactType?: SortOrder
    leadSegment?: SortOrder
    leadScore?: SortOrder
    followUpFrequency?: SortOrder
    followUpOn?: SortOrder
    assignedToId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    contactOrgId?: SortOrder
  }

  export type ContactSumOrderByAggregateInput = {
    leadScore?: SortOrder
    followUpFrequency?: SortOrder
  }

  export type EnumContactTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ContactType | EnumContactTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ContactType[] | ListEnumContactTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ContactType[] | ListEnumContactTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumContactTypeWithAggregatesFilter<$PrismaModel> | $Enums.ContactType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumContactTypeFilter<$PrismaModel>
    _max?: NestedEnumContactTypeFilter<$PrismaModel>
  }

  export type EnumLeadSegmentNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.LeadSegment | EnumLeadSegmentFieldRefInput<$PrismaModel> | null
    in?: $Enums.LeadSegment[] | ListEnumLeadSegmentFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.LeadSegment[] | ListEnumLeadSegmentFieldRefInput<$PrismaModel> | null
    not?: NestedEnumLeadSegmentNullableWithAggregatesFilter<$PrismaModel> | $Enums.LeadSegment | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumLeadSegmentNullableFilter<$PrismaModel>
    _max?: NestedEnumLeadSegmentNullableFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type OrganisationCreateNestedOneWithoutTeamInput = {
    create?: XOR<OrganisationCreateWithoutTeamInput, OrganisationUncheckedCreateWithoutTeamInput>
    connectOrCreate?: OrganisationCreateOrConnectWithoutTeamInput
    connect?: OrganisationWhereUniqueInput
  }

  export type ActivityCreateNestedManyWithoutAddedByInput = {
    create?: XOR<ActivityCreateWithoutAddedByInput, ActivityUncheckedCreateWithoutAddedByInput> | ActivityCreateWithoutAddedByInput[] | ActivityUncheckedCreateWithoutAddedByInput[]
    connectOrCreate?: ActivityCreateOrConnectWithoutAddedByInput | ActivityCreateOrConnectWithoutAddedByInput[]
    createMany?: ActivityCreateManyAddedByInputEnvelope
    connect?: ActivityWhereUniqueInput | ActivityWhereUniqueInput[]
  }

  export type SessionCreateNestedManyWithoutUserInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
  }

  export type TokenCreateNestedManyWithoutUserInput = {
    create?: XOR<TokenCreateWithoutUserInput, TokenUncheckedCreateWithoutUserInput> | TokenCreateWithoutUserInput[] | TokenUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TokenCreateOrConnectWithoutUserInput | TokenCreateOrConnectWithoutUserInput[]
    createMany?: TokenCreateManyUserInputEnvelope
    connect?: TokenWhereUniqueInput | TokenWhereUniqueInput[]
  }

  export type ContactCreateNestedManyWithoutAssignedToInput = {
    create?: XOR<ContactCreateWithoutAssignedToInput, ContactUncheckedCreateWithoutAssignedToInput> | ContactCreateWithoutAssignedToInput[] | ContactUncheckedCreateWithoutAssignedToInput[]
    connectOrCreate?: ContactCreateOrConnectWithoutAssignedToInput | ContactCreateOrConnectWithoutAssignedToInput[]
    createMany?: ContactCreateManyAssignedToInputEnvelope
    connect?: ContactWhereUniqueInput | ContactWhereUniqueInput[]
  }

  export type NoteCreateNestedManyWithoutCreatedByInput = {
    create?: XOR<NoteCreateWithoutCreatedByInput, NoteUncheckedCreateWithoutCreatedByInput> | NoteCreateWithoutCreatedByInput[] | NoteUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: NoteCreateOrConnectWithoutCreatedByInput | NoteCreateOrConnectWithoutCreatedByInput[]
    createMany?: NoteCreateManyCreatedByInputEnvelope
    connect?: NoteWhereUniqueInput | NoteWhereUniqueInput[]
  }

  export type ActivityCreateNestedManyWithoutAssignedToInput = {
    create?: XOR<ActivityCreateWithoutAssignedToInput, ActivityUncheckedCreateWithoutAssignedToInput> | ActivityCreateWithoutAssignedToInput[] | ActivityUncheckedCreateWithoutAssignedToInput[]
    connectOrCreate?: ActivityCreateOrConnectWithoutAssignedToInput | ActivityCreateOrConnectWithoutAssignedToInput[]
    createMany?: ActivityCreateManyAssignedToInputEnvelope
    connect?: ActivityWhereUniqueInput | ActivityWhereUniqueInput[]
  }

  export type ActivityUncheckedCreateNestedManyWithoutAddedByInput = {
    create?: XOR<ActivityCreateWithoutAddedByInput, ActivityUncheckedCreateWithoutAddedByInput> | ActivityCreateWithoutAddedByInput[] | ActivityUncheckedCreateWithoutAddedByInput[]
    connectOrCreate?: ActivityCreateOrConnectWithoutAddedByInput | ActivityCreateOrConnectWithoutAddedByInput[]
    createMany?: ActivityCreateManyAddedByInputEnvelope
    connect?: ActivityWhereUniqueInput | ActivityWhereUniqueInput[]
  }

  export type SessionUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
  }

  export type TokenUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<TokenCreateWithoutUserInput, TokenUncheckedCreateWithoutUserInput> | TokenCreateWithoutUserInput[] | TokenUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TokenCreateOrConnectWithoutUserInput | TokenCreateOrConnectWithoutUserInput[]
    createMany?: TokenCreateManyUserInputEnvelope
    connect?: TokenWhereUniqueInput | TokenWhereUniqueInput[]
  }

  export type ContactUncheckedCreateNestedManyWithoutAssignedToInput = {
    create?: XOR<ContactCreateWithoutAssignedToInput, ContactUncheckedCreateWithoutAssignedToInput> | ContactCreateWithoutAssignedToInput[] | ContactUncheckedCreateWithoutAssignedToInput[]
    connectOrCreate?: ContactCreateOrConnectWithoutAssignedToInput | ContactCreateOrConnectWithoutAssignedToInput[]
    createMany?: ContactCreateManyAssignedToInputEnvelope
    connect?: ContactWhereUniqueInput | ContactWhereUniqueInput[]
  }

  export type NoteUncheckedCreateNestedManyWithoutCreatedByInput = {
    create?: XOR<NoteCreateWithoutCreatedByInput, NoteUncheckedCreateWithoutCreatedByInput> | NoteCreateWithoutCreatedByInput[] | NoteUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: NoteCreateOrConnectWithoutCreatedByInput | NoteCreateOrConnectWithoutCreatedByInput[]
    createMany?: NoteCreateManyCreatedByInputEnvelope
    connect?: NoteWhereUniqueInput | NoteWhereUniqueInput[]
  }

  export type ActivityUncheckedCreateNestedManyWithoutAssignedToInput = {
    create?: XOR<ActivityCreateWithoutAssignedToInput, ActivityUncheckedCreateWithoutAssignedToInput> | ActivityCreateWithoutAssignedToInput[] | ActivityUncheckedCreateWithoutAssignedToInput[]
    connectOrCreate?: ActivityCreateOrConnectWithoutAssignedToInput | ActivityCreateOrConnectWithoutAssignedToInput[]
    createMany?: ActivityCreateManyAssignedToInputEnvelope
    connect?: ActivityWhereUniqueInput | ActivityWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type EnumRoleFieldUpdateOperationsInput = {
    set?: $Enums.Role
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type OrganisationUpdateOneWithoutTeamNestedInput = {
    create?: XOR<OrganisationCreateWithoutTeamInput, OrganisationUncheckedCreateWithoutTeamInput>
    connectOrCreate?: OrganisationCreateOrConnectWithoutTeamInput
    upsert?: OrganisationUpsertWithoutTeamInput
    disconnect?: OrganisationWhereInput | boolean
    delete?: OrganisationWhereInput | boolean
    connect?: OrganisationWhereUniqueInput
    update?: XOR<XOR<OrganisationUpdateToOneWithWhereWithoutTeamInput, OrganisationUpdateWithoutTeamInput>, OrganisationUncheckedUpdateWithoutTeamInput>
  }

  export type ActivityUpdateManyWithoutAddedByNestedInput = {
    create?: XOR<ActivityCreateWithoutAddedByInput, ActivityUncheckedCreateWithoutAddedByInput> | ActivityCreateWithoutAddedByInput[] | ActivityUncheckedCreateWithoutAddedByInput[]
    connectOrCreate?: ActivityCreateOrConnectWithoutAddedByInput | ActivityCreateOrConnectWithoutAddedByInput[]
    upsert?: ActivityUpsertWithWhereUniqueWithoutAddedByInput | ActivityUpsertWithWhereUniqueWithoutAddedByInput[]
    createMany?: ActivityCreateManyAddedByInputEnvelope
    set?: ActivityWhereUniqueInput | ActivityWhereUniqueInput[]
    disconnect?: ActivityWhereUniqueInput | ActivityWhereUniqueInput[]
    delete?: ActivityWhereUniqueInput | ActivityWhereUniqueInput[]
    connect?: ActivityWhereUniqueInput | ActivityWhereUniqueInput[]
    update?: ActivityUpdateWithWhereUniqueWithoutAddedByInput | ActivityUpdateWithWhereUniqueWithoutAddedByInput[]
    updateMany?: ActivityUpdateManyWithWhereWithoutAddedByInput | ActivityUpdateManyWithWhereWithoutAddedByInput[]
    deleteMany?: ActivityScalarWhereInput | ActivityScalarWhereInput[]
  }

  export type SessionUpdateManyWithoutUserNestedInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    upsert?: SessionUpsertWithWhereUniqueWithoutUserInput | SessionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    set?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    disconnect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    delete?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    update?: SessionUpdateWithWhereUniqueWithoutUserInput | SessionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SessionUpdateManyWithWhereWithoutUserInput | SessionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SessionScalarWhereInput | SessionScalarWhereInput[]
  }

  export type TokenUpdateManyWithoutUserNestedInput = {
    create?: XOR<TokenCreateWithoutUserInput, TokenUncheckedCreateWithoutUserInput> | TokenCreateWithoutUserInput[] | TokenUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TokenCreateOrConnectWithoutUserInput | TokenCreateOrConnectWithoutUserInput[]
    upsert?: TokenUpsertWithWhereUniqueWithoutUserInput | TokenUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: TokenCreateManyUserInputEnvelope
    set?: TokenWhereUniqueInput | TokenWhereUniqueInput[]
    disconnect?: TokenWhereUniqueInput | TokenWhereUniqueInput[]
    delete?: TokenWhereUniqueInput | TokenWhereUniqueInput[]
    connect?: TokenWhereUniqueInput | TokenWhereUniqueInput[]
    update?: TokenUpdateWithWhereUniqueWithoutUserInput | TokenUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: TokenUpdateManyWithWhereWithoutUserInput | TokenUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: TokenScalarWhereInput | TokenScalarWhereInput[]
  }

  export type ContactUpdateManyWithoutAssignedToNestedInput = {
    create?: XOR<ContactCreateWithoutAssignedToInput, ContactUncheckedCreateWithoutAssignedToInput> | ContactCreateWithoutAssignedToInput[] | ContactUncheckedCreateWithoutAssignedToInput[]
    connectOrCreate?: ContactCreateOrConnectWithoutAssignedToInput | ContactCreateOrConnectWithoutAssignedToInput[]
    upsert?: ContactUpsertWithWhereUniqueWithoutAssignedToInput | ContactUpsertWithWhereUniqueWithoutAssignedToInput[]
    createMany?: ContactCreateManyAssignedToInputEnvelope
    set?: ContactWhereUniqueInput | ContactWhereUniqueInput[]
    disconnect?: ContactWhereUniqueInput | ContactWhereUniqueInput[]
    delete?: ContactWhereUniqueInput | ContactWhereUniqueInput[]
    connect?: ContactWhereUniqueInput | ContactWhereUniqueInput[]
    update?: ContactUpdateWithWhereUniqueWithoutAssignedToInput | ContactUpdateWithWhereUniqueWithoutAssignedToInput[]
    updateMany?: ContactUpdateManyWithWhereWithoutAssignedToInput | ContactUpdateManyWithWhereWithoutAssignedToInput[]
    deleteMany?: ContactScalarWhereInput | ContactScalarWhereInput[]
  }

  export type NoteUpdateManyWithoutCreatedByNestedInput = {
    create?: XOR<NoteCreateWithoutCreatedByInput, NoteUncheckedCreateWithoutCreatedByInput> | NoteCreateWithoutCreatedByInput[] | NoteUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: NoteCreateOrConnectWithoutCreatedByInput | NoteCreateOrConnectWithoutCreatedByInput[]
    upsert?: NoteUpsertWithWhereUniqueWithoutCreatedByInput | NoteUpsertWithWhereUniqueWithoutCreatedByInput[]
    createMany?: NoteCreateManyCreatedByInputEnvelope
    set?: NoteWhereUniqueInput | NoteWhereUniqueInput[]
    disconnect?: NoteWhereUniqueInput | NoteWhereUniqueInput[]
    delete?: NoteWhereUniqueInput | NoteWhereUniqueInput[]
    connect?: NoteWhereUniqueInput | NoteWhereUniqueInput[]
    update?: NoteUpdateWithWhereUniqueWithoutCreatedByInput | NoteUpdateWithWhereUniqueWithoutCreatedByInput[]
    updateMany?: NoteUpdateManyWithWhereWithoutCreatedByInput | NoteUpdateManyWithWhereWithoutCreatedByInput[]
    deleteMany?: NoteScalarWhereInput | NoteScalarWhereInput[]
  }

  export type ActivityUpdateManyWithoutAssignedToNestedInput = {
    create?: XOR<ActivityCreateWithoutAssignedToInput, ActivityUncheckedCreateWithoutAssignedToInput> | ActivityCreateWithoutAssignedToInput[] | ActivityUncheckedCreateWithoutAssignedToInput[]
    connectOrCreate?: ActivityCreateOrConnectWithoutAssignedToInput | ActivityCreateOrConnectWithoutAssignedToInput[]
    upsert?: ActivityUpsertWithWhereUniqueWithoutAssignedToInput | ActivityUpsertWithWhereUniqueWithoutAssignedToInput[]
    createMany?: ActivityCreateManyAssignedToInputEnvelope
    set?: ActivityWhereUniqueInput | ActivityWhereUniqueInput[]
    disconnect?: ActivityWhereUniqueInput | ActivityWhereUniqueInput[]
    delete?: ActivityWhereUniqueInput | ActivityWhereUniqueInput[]
    connect?: ActivityWhereUniqueInput | ActivityWhereUniqueInput[]
    update?: ActivityUpdateWithWhereUniqueWithoutAssignedToInput | ActivityUpdateWithWhereUniqueWithoutAssignedToInput[]
    updateMany?: ActivityUpdateManyWithWhereWithoutAssignedToInput | ActivityUpdateManyWithWhereWithoutAssignedToInput[]
    deleteMany?: ActivityScalarWhereInput | ActivityScalarWhereInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type ActivityUncheckedUpdateManyWithoutAddedByNestedInput = {
    create?: XOR<ActivityCreateWithoutAddedByInput, ActivityUncheckedCreateWithoutAddedByInput> | ActivityCreateWithoutAddedByInput[] | ActivityUncheckedCreateWithoutAddedByInput[]
    connectOrCreate?: ActivityCreateOrConnectWithoutAddedByInput | ActivityCreateOrConnectWithoutAddedByInput[]
    upsert?: ActivityUpsertWithWhereUniqueWithoutAddedByInput | ActivityUpsertWithWhereUniqueWithoutAddedByInput[]
    createMany?: ActivityCreateManyAddedByInputEnvelope
    set?: ActivityWhereUniqueInput | ActivityWhereUniqueInput[]
    disconnect?: ActivityWhereUniqueInput | ActivityWhereUniqueInput[]
    delete?: ActivityWhereUniqueInput | ActivityWhereUniqueInput[]
    connect?: ActivityWhereUniqueInput | ActivityWhereUniqueInput[]
    update?: ActivityUpdateWithWhereUniqueWithoutAddedByInput | ActivityUpdateWithWhereUniqueWithoutAddedByInput[]
    updateMany?: ActivityUpdateManyWithWhereWithoutAddedByInput | ActivityUpdateManyWithWhereWithoutAddedByInput[]
    deleteMany?: ActivityScalarWhereInput | ActivityScalarWhereInput[]
  }

  export type SessionUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    upsert?: SessionUpsertWithWhereUniqueWithoutUserInput | SessionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    set?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    disconnect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    delete?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    update?: SessionUpdateWithWhereUniqueWithoutUserInput | SessionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SessionUpdateManyWithWhereWithoutUserInput | SessionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SessionScalarWhereInput | SessionScalarWhereInput[]
  }

  export type TokenUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<TokenCreateWithoutUserInput, TokenUncheckedCreateWithoutUserInput> | TokenCreateWithoutUserInput[] | TokenUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TokenCreateOrConnectWithoutUserInput | TokenCreateOrConnectWithoutUserInput[]
    upsert?: TokenUpsertWithWhereUniqueWithoutUserInput | TokenUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: TokenCreateManyUserInputEnvelope
    set?: TokenWhereUniqueInput | TokenWhereUniqueInput[]
    disconnect?: TokenWhereUniqueInput | TokenWhereUniqueInput[]
    delete?: TokenWhereUniqueInput | TokenWhereUniqueInput[]
    connect?: TokenWhereUniqueInput | TokenWhereUniqueInput[]
    update?: TokenUpdateWithWhereUniqueWithoutUserInput | TokenUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: TokenUpdateManyWithWhereWithoutUserInput | TokenUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: TokenScalarWhereInput | TokenScalarWhereInput[]
  }

  export type ContactUncheckedUpdateManyWithoutAssignedToNestedInput = {
    create?: XOR<ContactCreateWithoutAssignedToInput, ContactUncheckedCreateWithoutAssignedToInput> | ContactCreateWithoutAssignedToInput[] | ContactUncheckedCreateWithoutAssignedToInput[]
    connectOrCreate?: ContactCreateOrConnectWithoutAssignedToInput | ContactCreateOrConnectWithoutAssignedToInput[]
    upsert?: ContactUpsertWithWhereUniqueWithoutAssignedToInput | ContactUpsertWithWhereUniqueWithoutAssignedToInput[]
    createMany?: ContactCreateManyAssignedToInputEnvelope
    set?: ContactWhereUniqueInput | ContactWhereUniqueInput[]
    disconnect?: ContactWhereUniqueInput | ContactWhereUniqueInput[]
    delete?: ContactWhereUniqueInput | ContactWhereUniqueInput[]
    connect?: ContactWhereUniqueInput | ContactWhereUniqueInput[]
    update?: ContactUpdateWithWhereUniqueWithoutAssignedToInput | ContactUpdateWithWhereUniqueWithoutAssignedToInput[]
    updateMany?: ContactUpdateManyWithWhereWithoutAssignedToInput | ContactUpdateManyWithWhereWithoutAssignedToInput[]
    deleteMany?: ContactScalarWhereInput | ContactScalarWhereInput[]
  }

  export type NoteUncheckedUpdateManyWithoutCreatedByNestedInput = {
    create?: XOR<NoteCreateWithoutCreatedByInput, NoteUncheckedCreateWithoutCreatedByInput> | NoteCreateWithoutCreatedByInput[] | NoteUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: NoteCreateOrConnectWithoutCreatedByInput | NoteCreateOrConnectWithoutCreatedByInput[]
    upsert?: NoteUpsertWithWhereUniqueWithoutCreatedByInput | NoteUpsertWithWhereUniqueWithoutCreatedByInput[]
    createMany?: NoteCreateManyCreatedByInputEnvelope
    set?: NoteWhereUniqueInput | NoteWhereUniqueInput[]
    disconnect?: NoteWhereUniqueInput | NoteWhereUniqueInput[]
    delete?: NoteWhereUniqueInput | NoteWhereUniqueInput[]
    connect?: NoteWhereUniqueInput | NoteWhereUniqueInput[]
    update?: NoteUpdateWithWhereUniqueWithoutCreatedByInput | NoteUpdateWithWhereUniqueWithoutCreatedByInput[]
    updateMany?: NoteUpdateManyWithWhereWithoutCreatedByInput | NoteUpdateManyWithWhereWithoutCreatedByInput[]
    deleteMany?: NoteScalarWhereInput | NoteScalarWhereInput[]
  }

  export type ActivityUncheckedUpdateManyWithoutAssignedToNestedInput = {
    create?: XOR<ActivityCreateWithoutAssignedToInput, ActivityUncheckedCreateWithoutAssignedToInput> | ActivityCreateWithoutAssignedToInput[] | ActivityUncheckedCreateWithoutAssignedToInput[]
    connectOrCreate?: ActivityCreateOrConnectWithoutAssignedToInput | ActivityCreateOrConnectWithoutAssignedToInput[]
    upsert?: ActivityUpsertWithWhereUniqueWithoutAssignedToInput | ActivityUpsertWithWhereUniqueWithoutAssignedToInput[]
    createMany?: ActivityCreateManyAssignedToInputEnvelope
    set?: ActivityWhereUniqueInput | ActivityWhereUniqueInput[]
    disconnect?: ActivityWhereUniqueInput | ActivityWhereUniqueInput[]
    delete?: ActivityWhereUniqueInput | ActivityWhereUniqueInput[]
    connect?: ActivityWhereUniqueInput | ActivityWhereUniqueInput[]
    update?: ActivityUpdateWithWhereUniqueWithoutAssignedToInput | ActivityUpdateWithWhereUniqueWithoutAssignedToInput[]
    updateMany?: ActivityUpdateManyWithWhereWithoutAssignedToInput | ActivityUpdateManyWithWhereWithoutAssignedToInput[]
    deleteMany?: ActivityScalarWhereInput | ActivityScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutSessionsInput = {
    create?: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSessionsInput
    connect?: UserWhereUniqueInput
  }

  export type TokenCreateNestedManyWithoutSessionInput = {
    create?: XOR<TokenCreateWithoutSessionInput, TokenUncheckedCreateWithoutSessionInput> | TokenCreateWithoutSessionInput[] | TokenUncheckedCreateWithoutSessionInput[]
    connectOrCreate?: TokenCreateOrConnectWithoutSessionInput | TokenCreateOrConnectWithoutSessionInput[]
    createMany?: TokenCreateManySessionInputEnvelope
    connect?: TokenWhereUniqueInput | TokenWhereUniqueInput[]
  }

  export type TokenUncheckedCreateNestedManyWithoutSessionInput = {
    create?: XOR<TokenCreateWithoutSessionInput, TokenUncheckedCreateWithoutSessionInput> | TokenCreateWithoutSessionInput[] | TokenUncheckedCreateWithoutSessionInput[]
    connectOrCreate?: TokenCreateOrConnectWithoutSessionInput | TokenCreateOrConnectWithoutSessionInput[]
    createMany?: TokenCreateManySessionInputEnvelope
    connect?: TokenWhereUniqueInput | TokenWhereUniqueInput[]
  }

  export type UserUpdateOneRequiredWithoutSessionsNestedInput = {
    create?: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSessionsInput
    upsert?: UserUpsertWithoutSessionsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutSessionsInput, UserUpdateWithoutSessionsInput>, UserUncheckedUpdateWithoutSessionsInput>
  }

  export type TokenUpdateManyWithoutSessionNestedInput = {
    create?: XOR<TokenCreateWithoutSessionInput, TokenUncheckedCreateWithoutSessionInput> | TokenCreateWithoutSessionInput[] | TokenUncheckedCreateWithoutSessionInput[]
    connectOrCreate?: TokenCreateOrConnectWithoutSessionInput | TokenCreateOrConnectWithoutSessionInput[]
    upsert?: TokenUpsertWithWhereUniqueWithoutSessionInput | TokenUpsertWithWhereUniqueWithoutSessionInput[]
    createMany?: TokenCreateManySessionInputEnvelope
    set?: TokenWhereUniqueInput | TokenWhereUniqueInput[]
    disconnect?: TokenWhereUniqueInput | TokenWhereUniqueInput[]
    delete?: TokenWhereUniqueInput | TokenWhereUniqueInput[]
    connect?: TokenWhereUniqueInput | TokenWhereUniqueInput[]
    update?: TokenUpdateWithWhereUniqueWithoutSessionInput | TokenUpdateWithWhereUniqueWithoutSessionInput[]
    updateMany?: TokenUpdateManyWithWhereWithoutSessionInput | TokenUpdateManyWithWhereWithoutSessionInput[]
    deleteMany?: TokenScalarWhereInput | TokenScalarWhereInput[]
  }

  export type TokenUncheckedUpdateManyWithoutSessionNestedInput = {
    create?: XOR<TokenCreateWithoutSessionInput, TokenUncheckedCreateWithoutSessionInput> | TokenCreateWithoutSessionInput[] | TokenUncheckedCreateWithoutSessionInput[]
    connectOrCreate?: TokenCreateOrConnectWithoutSessionInput | TokenCreateOrConnectWithoutSessionInput[]
    upsert?: TokenUpsertWithWhereUniqueWithoutSessionInput | TokenUpsertWithWhereUniqueWithoutSessionInput[]
    createMany?: TokenCreateManySessionInputEnvelope
    set?: TokenWhereUniqueInput | TokenWhereUniqueInput[]
    disconnect?: TokenWhereUniqueInput | TokenWhereUniqueInput[]
    delete?: TokenWhereUniqueInput | TokenWhereUniqueInput[]
    connect?: TokenWhereUniqueInput | TokenWhereUniqueInput[]
    update?: TokenUpdateWithWhereUniqueWithoutSessionInput | TokenUpdateWithWhereUniqueWithoutSessionInput[]
    updateMany?: TokenUpdateManyWithWhereWithoutSessionInput | TokenUpdateManyWithWhereWithoutSessionInput[]
    deleteMany?: TokenScalarWhereInput | TokenScalarWhereInput[]
  }

  export type TokenCreatescopesInput = {
    set: $Enums.Scope[]
  }

  export type SessionCreateNestedOneWithoutTokensInput = {
    create?: XOR<SessionCreateWithoutTokensInput, SessionUncheckedCreateWithoutTokensInput>
    connectOrCreate?: SessionCreateOrConnectWithoutTokensInput
    connect?: SessionWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutTokensInput = {
    create?: XOR<UserCreateWithoutTokensInput, UserUncheckedCreateWithoutTokensInput>
    connectOrCreate?: UserCreateOrConnectWithoutTokensInput
    connect?: UserWhereUniqueInput
  }

  export type TokenUpdatescopesInput = {
    set?: $Enums.Scope[]
    push?: $Enums.Scope | $Enums.Scope[]
  }

  export type SessionUpdateOneRequiredWithoutTokensNestedInput = {
    create?: XOR<SessionCreateWithoutTokensInput, SessionUncheckedCreateWithoutTokensInput>
    connectOrCreate?: SessionCreateOrConnectWithoutTokensInput
    upsert?: SessionUpsertWithoutTokensInput
    connect?: SessionWhereUniqueInput
    update?: XOR<XOR<SessionUpdateToOneWithWhereWithoutTokensInput, SessionUpdateWithoutTokensInput>, SessionUncheckedUpdateWithoutTokensInput>
  }

  export type UserUpdateOneRequiredWithoutTokensNestedInput = {
    create?: XOR<UserCreateWithoutTokensInput, UserUncheckedCreateWithoutTokensInput>
    connectOrCreate?: UserCreateOrConnectWithoutTokensInput
    upsert?: UserUpsertWithoutTokensInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutTokensInput, UserUpdateWithoutTokensInput>, UserUncheckedUpdateWithoutTokensInput>
  }

  export type BranchCreateNestedManyWithoutRegionInput = {
    create?: XOR<BranchCreateWithoutRegionInput, BranchUncheckedCreateWithoutRegionInput> | BranchCreateWithoutRegionInput[] | BranchUncheckedCreateWithoutRegionInput[]
    connectOrCreate?: BranchCreateOrConnectWithoutRegionInput | BranchCreateOrConnectWithoutRegionInput[]
    createMany?: BranchCreateManyRegionInputEnvelope
    connect?: BranchWhereUniqueInput | BranchWhereUniqueInput[]
  }

  export type ScheduleCreateNestedManyWithoutRegionInput = {
    create?: XOR<ScheduleCreateWithoutRegionInput, ScheduleUncheckedCreateWithoutRegionInput> | ScheduleCreateWithoutRegionInput[] | ScheduleUncheckedCreateWithoutRegionInput[]
    connectOrCreate?: ScheduleCreateOrConnectWithoutRegionInput | ScheduleCreateOrConnectWithoutRegionInput[]
    createMany?: ScheduleCreateManyRegionInputEnvelope
    connect?: ScheduleWhereUniqueInput | ScheduleWhereUniqueInput[]
  }

  export type BranchUncheckedCreateNestedManyWithoutRegionInput = {
    create?: XOR<BranchCreateWithoutRegionInput, BranchUncheckedCreateWithoutRegionInput> | BranchCreateWithoutRegionInput[] | BranchUncheckedCreateWithoutRegionInput[]
    connectOrCreate?: BranchCreateOrConnectWithoutRegionInput | BranchCreateOrConnectWithoutRegionInput[]
    createMany?: BranchCreateManyRegionInputEnvelope
    connect?: BranchWhereUniqueInput | BranchWhereUniqueInput[]
  }

  export type ScheduleUncheckedCreateNestedManyWithoutRegionInput = {
    create?: XOR<ScheduleCreateWithoutRegionInput, ScheduleUncheckedCreateWithoutRegionInput> | ScheduleCreateWithoutRegionInput[] | ScheduleUncheckedCreateWithoutRegionInput[]
    connectOrCreate?: ScheduleCreateOrConnectWithoutRegionInput | ScheduleCreateOrConnectWithoutRegionInput[]
    createMany?: ScheduleCreateManyRegionInputEnvelope
    connect?: ScheduleWhereUniqueInput | ScheduleWhereUniqueInput[]
  }

  export type BranchUpdateManyWithoutRegionNestedInput = {
    create?: XOR<BranchCreateWithoutRegionInput, BranchUncheckedCreateWithoutRegionInput> | BranchCreateWithoutRegionInput[] | BranchUncheckedCreateWithoutRegionInput[]
    connectOrCreate?: BranchCreateOrConnectWithoutRegionInput | BranchCreateOrConnectWithoutRegionInput[]
    upsert?: BranchUpsertWithWhereUniqueWithoutRegionInput | BranchUpsertWithWhereUniqueWithoutRegionInput[]
    createMany?: BranchCreateManyRegionInputEnvelope
    set?: BranchWhereUniqueInput | BranchWhereUniqueInput[]
    disconnect?: BranchWhereUniqueInput | BranchWhereUniqueInput[]
    delete?: BranchWhereUniqueInput | BranchWhereUniqueInput[]
    connect?: BranchWhereUniqueInput | BranchWhereUniqueInput[]
    update?: BranchUpdateWithWhereUniqueWithoutRegionInput | BranchUpdateWithWhereUniqueWithoutRegionInput[]
    updateMany?: BranchUpdateManyWithWhereWithoutRegionInput | BranchUpdateManyWithWhereWithoutRegionInput[]
    deleteMany?: BranchScalarWhereInput | BranchScalarWhereInput[]
  }

  export type ScheduleUpdateManyWithoutRegionNestedInput = {
    create?: XOR<ScheduleCreateWithoutRegionInput, ScheduleUncheckedCreateWithoutRegionInput> | ScheduleCreateWithoutRegionInput[] | ScheduleUncheckedCreateWithoutRegionInput[]
    connectOrCreate?: ScheduleCreateOrConnectWithoutRegionInput | ScheduleCreateOrConnectWithoutRegionInput[]
    upsert?: ScheduleUpsertWithWhereUniqueWithoutRegionInput | ScheduleUpsertWithWhereUniqueWithoutRegionInput[]
    createMany?: ScheduleCreateManyRegionInputEnvelope
    set?: ScheduleWhereUniqueInput | ScheduleWhereUniqueInput[]
    disconnect?: ScheduleWhereUniqueInput | ScheduleWhereUniqueInput[]
    delete?: ScheduleWhereUniqueInput | ScheduleWhereUniqueInput[]
    connect?: ScheduleWhereUniqueInput | ScheduleWhereUniqueInput[]
    update?: ScheduleUpdateWithWhereUniqueWithoutRegionInput | ScheduleUpdateWithWhereUniqueWithoutRegionInput[]
    updateMany?: ScheduleUpdateManyWithWhereWithoutRegionInput | ScheduleUpdateManyWithWhereWithoutRegionInput[]
    deleteMany?: ScheduleScalarWhereInput | ScheduleScalarWhereInput[]
  }

  export type BranchUncheckedUpdateManyWithoutRegionNestedInput = {
    create?: XOR<BranchCreateWithoutRegionInput, BranchUncheckedCreateWithoutRegionInput> | BranchCreateWithoutRegionInput[] | BranchUncheckedCreateWithoutRegionInput[]
    connectOrCreate?: BranchCreateOrConnectWithoutRegionInput | BranchCreateOrConnectWithoutRegionInput[]
    upsert?: BranchUpsertWithWhereUniqueWithoutRegionInput | BranchUpsertWithWhereUniqueWithoutRegionInput[]
    createMany?: BranchCreateManyRegionInputEnvelope
    set?: BranchWhereUniqueInput | BranchWhereUniqueInput[]
    disconnect?: BranchWhereUniqueInput | BranchWhereUniqueInput[]
    delete?: BranchWhereUniqueInput | BranchWhereUniqueInput[]
    connect?: BranchWhereUniqueInput | BranchWhereUniqueInput[]
    update?: BranchUpdateWithWhereUniqueWithoutRegionInput | BranchUpdateWithWhereUniqueWithoutRegionInput[]
    updateMany?: BranchUpdateManyWithWhereWithoutRegionInput | BranchUpdateManyWithWhereWithoutRegionInput[]
    deleteMany?: BranchScalarWhereInput | BranchScalarWhereInput[]
  }

  export type ScheduleUncheckedUpdateManyWithoutRegionNestedInput = {
    create?: XOR<ScheduleCreateWithoutRegionInput, ScheduleUncheckedCreateWithoutRegionInput> | ScheduleCreateWithoutRegionInput[] | ScheduleUncheckedCreateWithoutRegionInput[]
    connectOrCreate?: ScheduleCreateOrConnectWithoutRegionInput | ScheduleCreateOrConnectWithoutRegionInput[]
    upsert?: ScheduleUpsertWithWhereUniqueWithoutRegionInput | ScheduleUpsertWithWhereUniqueWithoutRegionInput[]
    createMany?: ScheduleCreateManyRegionInputEnvelope
    set?: ScheduleWhereUniqueInput | ScheduleWhereUniqueInput[]
    disconnect?: ScheduleWhereUniqueInput | ScheduleWhereUniqueInput[]
    delete?: ScheduleWhereUniqueInput | ScheduleWhereUniqueInput[]
    connect?: ScheduleWhereUniqueInput | ScheduleWhereUniqueInput[]
    update?: ScheduleUpdateWithWhereUniqueWithoutRegionInput | ScheduleUpdateWithWhereUniqueWithoutRegionInput[]
    updateMany?: ScheduleUpdateManyWithWhereWithoutRegionInput | ScheduleUpdateManyWithWhereWithoutRegionInput[]
    deleteMany?: ScheduleScalarWhereInput | ScheduleScalarWhereInput[]
  }

  export type RegionCreateNestedOneWithoutSchedulesInput = {
    create?: XOR<RegionCreateWithoutSchedulesInput, RegionUncheckedCreateWithoutSchedulesInput>
    connectOrCreate?: RegionCreateOrConnectWithoutSchedulesInput
    connect?: RegionWhereUniqueInput
  }

  export type OrganisationCreateNestedOneWithoutCreatedScheduleInput = {
    create?: XOR<OrganisationCreateWithoutCreatedScheduleInput, OrganisationUncheckedCreateWithoutCreatedScheduleInput>
    connectOrCreate?: OrganisationCreateOrConnectWithoutCreatedScheduleInput
    connect?: OrganisationWhereUniqueInput
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type RegionUpdateOneRequiredWithoutSchedulesNestedInput = {
    create?: XOR<RegionCreateWithoutSchedulesInput, RegionUncheckedCreateWithoutSchedulesInput>
    connectOrCreate?: RegionCreateOrConnectWithoutSchedulesInput
    upsert?: RegionUpsertWithoutSchedulesInput
    connect?: RegionWhereUniqueInput
    update?: XOR<XOR<RegionUpdateToOneWithWhereWithoutSchedulesInput, RegionUpdateWithoutSchedulesInput>, RegionUncheckedUpdateWithoutSchedulesInput>
  }

  export type OrganisationUpdateOneRequiredWithoutCreatedScheduleNestedInput = {
    create?: XOR<OrganisationCreateWithoutCreatedScheduleInput, OrganisationUncheckedCreateWithoutCreatedScheduleInput>
    connectOrCreate?: OrganisationCreateOrConnectWithoutCreatedScheduleInput
    upsert?: OrganisationUpsertWithoutCreatedScheduleInput
    connect?: OrganisationWhereUniqueInput
    update?: XOR<XOR<OrganisationUpdateToOneWithWhereWithoutCreatedScheduleInput, OrganisationUpdateWithoutCreatedScheduleInput>, OrganisationUncheckedUpdateWithoutCreatedScheduleInput>
  }

  export type RegionCreateNestedOneWithoutBranchesInput = {
    create?: XOR<RegionCreateWithoutBranchesInput, RegionUncheckedCreateWithoutBranchesInput>
    connectOrCreate?: RegionCreateOrConnectWithoutBranchesInput
    connect?: RegionWhereUniqueInput
  }

  export type OrganisationCreateNestedOneWithoutBranchesInput = {
    create?: XOR<OrganisationCreateWithoutBranchesInput, OrganisationUncheckedCreateWithoutBranchesInput>
    connectOrCreate?: OrganisationCreateOrConnectWithoutBranchesInput
    connect?: OrganisationWhereUniqueInput
  }

  export type ContactCreateNestedManyWithoutBranchInput = {
    create?: XOR<ContactCreateWithoutBranchInput, ContactUncheckedCreateWithoutBranchInput> | ContactCreateWithoutBranchInput[] | ContactUncheckedCreateWithoutBranchInput[]
    connectOrCreate?: ContactCreateOrConnectWithoutBranchInput | ContactCreateOrConnectWithoutBranchInput[]
    createMany?: ContactCreateManyBranchInputEnvelope
    connect?: ContactWhereUniqueInput | ContactWhereUniqueInput[]
  }

  export type ContactCreateNestedOneWithoutPocBranchInput = {
    create?: XOR<ContactCreateWithoutPocBranchInput, ContactUncheckedCreateWithoutPocBranchInput>
    connectOrCreate?: ContactCreateOrConnectWithoutPocBranchInput
    connect?: ContactWhereUniqueInput
  }

  export type ContactUncheckedCreateNestedManyWithoutBranchInput = {
    create?: XOR<ContactCreateWithoutBranchInput, ContactUncheckedCreateWithoutBranchInput> | ContactCreateWithoutBranchInput[] | ContactUncheckedCreateWithoutBranchInput[]
    connectOrCreate?: ContactCreateOrConnectWithoutBranchInput | ContactCreateOrConnectWithoutBranchInput[]
    createMany?: ContactCreateManyBranchInputEnvelope
    connect?: ContactWhereUniqueInput | ContactWhereUniqueInput[]
  }

  export type EnumBranchTypeFieldUpdateOperationsInput = {
    set?: $Enums.BranchType
  }

  export type RegionUpdateOneRequiredWithoutBranchesNestedInput = {
    create?: XOR<RegionCreateWithoutBranchesInput, RegionUncheckedCreateWithoutBranchesInput>
    connectOrCreate?: RegionCreateOrConnectWithoutBranchesInput
    upsert?: RegionUpsertWithoutBranchesInput
    connect?: RegionWhereUniqueInput
    update?: XOR<XOR<RegionUpdateToOneWithWhereWithoutBranchesInput, RegionUpdateWithoutBranchesInput>, RegionUncheckedUpdateWithoutBranchesInput>
  }

  export type OrganisationUpdateOneRequiredWithoutBranchesNestedInput = {
    create?: XOR<OrganisationCreateWithoutBranchesInput, OrganisationUncheckedCreateWithoutBranchesInput>
    connectOrCreate?: OrganisationCreateOrConnectWithoutBranchesInput
    upsert?: OrganisationUpsertWithoutBranchesInput
    connect?: OrganisationWhereUniqueInput
    update?: XOR<XOR<OrganisationUpdateToOneWithWhereWithoutBranchesInput, OrganisationUpdateWithoutBranchesInput>, OrganisationUncheckedUpdateWithoutBranchesInput>
  }

  export type ContactUpdateManyWithoutBranchNestedInput = {
    create?: XOR<ContactCreateWithoutBranchInput, ContactUncheckedCreateWithoutBranchInput> | ContactCreateWithoutBranchInput[] | ContactUncheckedCreateWithoutBranchInput[]
    connectOrCreate?: ContactCreateOrConnectWithoutBranchInput | ContactCreateOrConnectWithoutBranchInput[]
    upsert?: ContactUpsertWithWhereUniqueWithoutBranchInput | ContactUpsertWithWhereUniqueWithoutBranchInput[]
    createMany?: ContactCreateManyBranchInputEnvelope
    set?: ContactWhereUniqueInput | ContactWhereUniqueInput[]
    disconnect?: ContactWhereUniqueInput | ContactWhereUniqueInput[]
    delete?: ContactWhereUniqueInput | ContactWhereUniqueInput[]
    connect?: ContactWhereUniqueInput | ContactWhereUniqueInput[]
    update?: ContactUpdateWithWhereUniqueWithoutBranchInput | ContactUpdateWithWhereUniqueWithoutBranchInput[]
    updateMany?: ContactUpdateManyWithWhereWithoutBranchInput | ContactUpdateManyWithWhereWithoutBranchInput[]
    deleteMany?: ContactScalarWhereInput | ContactScalarWhereInput[]
  }

  export type ContactUpdateOneWithoutPocBranchNestedInput = {
    create?: XOR<ContactCreateWithoutPocBranchInput, ContactUncheckedCreateWithoutPocBranchInput>
    connectOrCreate?: ContactCreateOrConnectWithoutPocBranchInput
    upsert?: ContactUpsertWithoutPocBranchInput
    disconnect?: ContactWhereInput | boolean
    delete?: ContactWhereInput | boolean
    connect?: ContactWhereUniqueInput
    update?: XOR<XOR<ContactUpdateToOneWithWhereWithoutPocBranchInput, ContactUpdateWithoutPocBranchInput>, ContactUncheckedUpdateWithoutPocBranchInput>
  }

  export type ContactUncheckedUpdateManyWithoutBranchNestedInput = {
    create?: XOR<ContactCreateWithoutBranchInput, ContactUncheckedCreateWithoutBranchInput> | ContactCreateWithoutBranchInput[] | ContactUncheckedCreateWithoutBranchInput[]
    connectOrCreate?: ContactCreateOrConnectWithoutBranchInput | ContactCreateOrConnectWithoutBranchInput[]
    upsert?: ContactUpsertWithWhereUniqueWithoutBranchInput | ContactUpsertWithWhereUniqueWithoutBranchInput[]
    createMany?: ContactCreateManyBranchInputEnvelope
    set?: ContactWhereUniqueInput | ContactWhereUniqueInput[]
    disconnect?: ContactWhereUniqueInput | ContactWhereUniqueInput[]
    delete?: ContactWhereUniqueInput | ContactWhereUniqueInput[]
    connect?: ContactWhereUniqueInput | ContactWhereUniqueInput[]
    update?: ContactUpdateWithWhereUniqueWithoutBranchInput | ContactUpdateWithWhereUniqueWithoutBranchInput[]
    updateMany?: ContactUpdateManyWithWhereWithoutBranchInput | ContactUpdateManyWithWhereWithoutBranchInput[]
    deleteMany?: ContactScalarWhereInput | ContactScalarWhereInput[]
  }

  export type UserCreateNestedManyWithoutOrganisationInput = {
    create?: XOR<UserCreateWithoutOrganisationInput, UserUncheckedCreateWithoutOrganisationInput> | UserCreateWithoutOrganisationInput[] | UserUncheckedCreateWithoutOrganisationInput[]
    connectOrCreate?: UserCreateOrConnectWithoutOrganisationInput | UserCreateOrConnectWithoutOrganisationInput[]
    createMany?: UserCreateManyOrganisationInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type BranchCreateNestedManyWithoutOrganisationInput = {
    create?: XOR<BranchCreateWithoutOrganisationInput, BranchUncheckedCreateWithoutOrganisationInput> | BranchCreateWithoutOrganisationInput[] | BranchUncheckedCreateWithoutOrganisationInput[]
    connectOrCreate?: BranchCreateOrConnectWithoutOrganisationInput | BranchCreateOrConnectWithoutOrganisationInput[]
    createMany?: BranchCreateManyOrganisationInputEnvelope
    connect?: BranchWhereUniqueInput | BranchWhereUniqueInput[]
  }

  export type TagCreateNestedManyWithoutOrganisationsInput = {
    create?: XOR<TagCreateWithoutOrganisationsInput, TagUncheckedCreateWithoutOrganisationsInput> | TagCreateWithoutOrganisationsInput[] | TagUncheckedCreateWithoutOrganisationsInput[]
    connectOrCreate?: TagCreateOrConnectWithoutOrganisationsInput | TagCreateOrConnectWithoutOrganisationsInput[]
    connect?: TagWhereUniqueInput | TagWhereUniqueInput[]
  }

  export type OrganisationCreateNestedManyWithoutContactOrganisationInput = {
    create?: XOR<OrganisationCreateWithoutContactOrganisationInput, OrganisationUncheckedCreateWithoutContactOrganisationInput> | OrganisationCreateWithoutContactOrganisationInput[] | OrganisationUncheckedCreateWithoutContactOrganisationInput[]
    connectOrCreate?: OrganisationCreateOrConnectWithoutContactOrganisationInput | OrganisationCreateOrConnectWithoutContactOrganisationInput[]
    createMany?: OrganisationCreateManyContactOrganisationInputEnvelope
    connect?: OrganisationWhereUniqueInput | OrganisationWhereUniqueInput[]
  }

  export type OrganisationCreateNestedOneWithoutContactOrganisationsInput = {
    create?: XOR<OrganisationCreateWithoutContactOrganisationsInput, OrganisationUncheckedCreateWithoutContactOrganisationsInput>
    connectOrCreate?: OrganisationCreateOrConnectWithoutContactOrganisationsInput
    connect?: OrganisationWhereUniqueInput
  }

  export type TagCreateNestedManyWithoutCreatedOrganisationInput = {
    create?: XOR<TagCreateWithoutCreatedOrganisationInput, TagUncheckedCreateWithoutCreatedOrganisationInput> | TagCreateWithoutCreatedOrganisationInput[] | TagUncheckedCreateWithoutCreatedOrganisationInput[]
    connectOrCreate?: TagCreateOrConnectWithoutCreatedOrganisationInput | TagCreateOrConnectWithoutCreatedOrganisationInput[]
    createMany?: TagCreateManyCreatedOrganisationInputEnvelope
    connect?: TagWhereUniqueInput | TagWhereUniqueInput[]
  }

  export type ContactCreateNestedManyWithoutContactOrgInput = {
    create?: XOR<ContactCreateWithoutContactOrgInput, ContactUncheckedCreateWithoutContactOrgInput> | ContactCreateWithoutContactOrgInput[] | ContactUncheckedCreateWithoutContactOrgInput[]
    connectOrCreate?: ContactCreateOrConnectWithoutContactOrgInput | ContactCreateOrConnectWithoutContactOrgInput[]
    createMany?: ContactCreateManyContactOrgInputEnvelope
    connect?: ContactWhereUniqueInput | ContactWhereUniqueInput[]
  }

  export type ScheduleCreateNestedManyWithoutCreatedOrgInput = {
    create?: XOR<ScheduleCreateWithoutCreatedOrgInput, ScheduleUncheckedCreateWithoutCreatedOrgInput> | ScheduleCreateWithoutCreatedOrgInput[] | ScheduleUncheckedCreateWithoutCreatedOrgInput[]
    connectOrCreate?: ScheduleCreateOrConnectWithoutCreatedOrgInput | ScheduleCreateOrConnectWithoutCreatedOrgInput[]
    createMany?: ScheduleCreateManyCreatedOrgInputEnvelope
    connect?: ScheduleWhereUniqueInput | ScheduleWhereUniqueInput[]
  }

  export type UserUncheckedCreateNestedManyWithoutOrganisationInput = {
    create?: XOR<UserCreateWithoutOrganisationInput, UserUncheckedCreateWithoutOrganisationInput> | UserCreateWithoutOrganisationInput[] | UserUncheckedCreateWithoutOrganisationInput[]
    connectOrCreate?: UserCreateOrConnectWithoutOrganisationInput | UserCreateOrConnectWithoutOrganisationInput[]
    createMany?: UserCreateManyOrganisationInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type BranchUncheckedCreateNestedManyWithoutOrganisationInput = {
    create?: XOR<BranchCreateWithoutOrganisationInput, BranchUncheckedCreateWithoutOrganisationInput> | BranchCreateWithoutOrganisationInput[] | BranchUncheckedCreateWithoutOrganisationInput[]
    connectOrCreate?: BranchCreateOrConnectWithoutOrganisationInput | BranchCreateOrConnectWithoutOrganisationInput[]
    createMany?: BranchCreateManyOrganisationInputEnvelope
    connect?: BranchWhereUniqueInput | BranchWhereUniqueInput[]
  }

  export type TagUncheckedCreateNestedManyWithoutOrganisationsInput = {
    create?: XOR<TagCreateWithoutOrganisationsInput, TagUncheckedCreateWithoutOrganisationsInput> | TagCreateWithoutOrganisationsInput[] | TagUncheckedCreateWithoutOrganisationsInput[]
    connectOrCreate?: TagCreateOrConnectWithoutOrganisationsInput | TagCreateOrConnectWithoutOrganisationsInput[]
    connect?: TagWhereUniqueInput | TagWhereUniqueInput[]
  }

  export type OrganisationUncheckedCreateNestedManyWithoutContactOrganisationInput = {
    create?: XOR<OrganisationCreateWithoutContactOrganisationInput, OrganisationUncheckedCreateWithoutContactOrganisationInput> | OrganisationCreateWithoutContactOrganisationInput[] | OrganisationUncheckedCreateWithoutContactOrganisationInput[]
    connectOrCreate?: OrganisationCreateOrConnectWithoutContactOrganisationInput | OrganisationCreateOrConnectWithoutContactOrganisationInput[]
    createMany?: OrganisationCreateManyContactOrganisationInputEnvelope
    connect?: OrganisationWhereUniqueInput | OrganisationWhereUniqueInput[]
  }

  export type TagUncheckedCreateNestedManyWithoutCreatedOrganisationInput = {
    create?: XOR<TagCreateWithoutCreatedOrganisationInput, TagUncheckedCreateWithoutCreatedOrganisationInput> | TagCreateWithoutCreatedOrganisationInput[] | TagUncheckedCreateWithoutCreatedOrganisationInput[]
    connectOrCreate?: TagCreateOrConnectWithoutCreatedOrganisationInput | TagCreateOrConnectWithoutCreatedOrganisationInput[]
    createMany?: TagCreateManyCreatedOrganisationInputEnvelope
    connect?: TagWhereUniqueInput | TagWhereUniqueInput[]
  }

  export type ContactUncheckedCreateNestedManyWithoutContactOrgInput = {
    create?: XOR<ContactCreateWithoutContactOrgInput, ContactUncheckedCreateWithoutContactOrgInput> | ContactCreateWithoutContactOrgInput[] | ContactUncheckedCreateWithoutContactOrgInput[]
    connectOrCreate?: ContactCreateOrConnectWithoutContactOrgInput | ContactCreateOrConnectWithoutContactOrgInput[]
    createMany?: ContactCreateManyContactOrgInputEnvelope
    connect?: ContactWhereUniqueInput | ContactWhereUniqueInput[]
  }

  export type ScheduleUncheckedCreateNestedManyWithoutCreatedOrgInput = {
    create?: XOR<ScheduleCreateWithoutCreatedOrgInput, ScheduleUncheckedCreateWithoutCreatedOrgInput> | ScheduleCreateWithoutCreatedOrgInput[] | ScheduleUncheckedCreateWithoutCreatedOrgInput[]
    connectOrCreate?: ScheduleCreateOrConnectWithoutCreatedOrgInput | ScheduleCreateOrConnectWithoutCreatedOrgInput[]
    createMany?: ScheduleCreateManyCreatedOrgInputEnvelope
    connect?: ScheduleWhereUniqueInput | ScheduleWhereUniqueInput[]
  }

  export type UserUpdateManyWithoutOrganisationNestedInput = {
    create?: XOR<UserCreateWithoutOrganisationInput, UserUncheckedCreateWithoutOrganisationInput> | UserCreateWithoutOrganisationInput[] | UserUncheckedCreateWithoutOrganisationInput[]
    connectOrCreate?: UserCreateOrConnectWithoutOrganisationInput | UserCreateOrConnectWithoutOrganisationInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutOrganisationInput | UserUpsertWithWhereUniqueWithoutOrganisationInput[]
    createMany?: UserCreateManyOrganisationInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutOrganisationInput | UserUpdateWithWhereUniqueWithoutOrganisationInput[]
    updateMany?: UserUpdateManyWithWhereWithoutOrganisationInput | UserUpdateManyWithWhereWithoutOrganisationInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type BranchUpdateManyWithoutOrganisationNestedInput = {
    create?: XOR<BranchCreateWithoutOrganisationInput, BranchUncheckedCreateWithoutOrganisationInput> | BranchCreateWithoutOrganisationInput[] | BranchUncheckedCreateWithoutOrganisationInput[]
    connectOrCreate?: BranchCreateOrConnectWithoutOrganisationInput | BranchCreateOrConnectWithoutOrganisationInput[]
    upsert?: BranchUpsertWithWhereUniqueWithoutOrganisationInput | BranchUpsertWithWhereUniqueWithoutOrganisationInput[]
    createMany?: BranchCreateManyOrganisationInputEnvelope
    set?: BranchWhereUniqueInput | BranchWhereUniqueInput[]
    disconnect?: BranchWhereUniqueInput | BranchWhereUniqueInput[]
    delete?: BranchWhereUniqueInput | BranchWhereUniqueInput[]
    connect?: BranchWhereUniqueInput | BranchWhereUniqueInput[]
    update?: BranchUpdateWithWhereUniqueWithoutOrganisationInput | BranchUpdateWithWhereUniqueWithoutOrganisationInput[]
    updateMany?: BranchUpdateManyWithWhereWithoutOrganisationInput | BranchUpdateManyWithWhereWithoutOrganisationInput[]
    deleteMany?: BranchScalarWhereInput | BranchScalarWhereInput[]
  }

  export type TagUpdateManyWithoutOrganisationsNestedInput = {
    create?: XOR<TagCreateWithoutOrganisationsInput, TagUncheckedCreateWithoutOrganisationsInput> | TagCreateWithoutOrganisationsInput[] | TagUncheckedCreateWithoutOrganisationsInput[]
    connectOrCreate?: TagCreateOrConnectWithoutOrganisationsInput | TagCreateOrConnectWithoutOrganisationsInput[]
    upsert?: TagUpsertWithWhereUniqueWithoutOrganisationsInput | TagUpsertWithWhereUniqueWithoutOrganisationsInput[]
    set?: TagWhereUniqueInput | TagWhereUniqueInput[]
    disconnect?: TagWhereUniqueInput | TagWhereUniqueInput[]
    delete?: TagWhereUniqueInput | TagWhereUniqueInput[]
    connect?: TagWhereUniqueInput | TagWhereUniqueInput[]
    update?: TagUpdateWithWhereUniqueWithoutOrganisationsInput | TagUpdateWithWhereUniqueWithoutOrganisationsInput[]
    updateMany?: TagUpdateManyWithWhereWithoutOrganisationsInput | TagUpdateManyWithWhereWithoutOrganisationsInput[]
    deleteMany?: TagScalarWhereInput | TagScalarWhereInput[]
  }

  export type OrganisationUpdateManyWithoutContactOrganisationNestedInput = {
    create?: XOR<OrganisationCreateWithoutContactOrganisationInput, OrganisationUncheckedCreateWithoutContactOrganisationInput> | OrganisationCreateWithoutContactOrganisationInput[] | OrganisationUncheckedCreateWithoutContactOrganisationInput[]
    connectOrCreate?: OrganisationCreateOrConnectWithoutContactOrganisationInput | OrganisationCreateOrConnectWithoutContactOrganisationInput[]
    upsert?: OrganisationUpsertWithWhereUniqueWithoutContactOrganisationInput | OrganisationUpsertWithWhereUniqueWithoutContactOrganisationInput[]
    createMany?: OrganisationCreateManyContactOrganisationInputEnvelope
    set?: OrganisationWhereUniqueInput | OrganisationWhereUniqueInput[]
    disconnect?: OrganisationWhereUniqueInput | OrganisationWhereUniqueInput[]
    delete?: OrganisationWhereUniqueInput | OrganisationWhereUniqueInput[]
    connect?: OrganisationWhereUniqueInput | OrganisationWhereUniqueInput[]
    update?: OrganisationUpdateWithWhereUniqueWithoutContactOrganisationInput | OrganisationUpdateWithWhereUniqueWithoutContactOrganisationInput[]
    updateMany?: OrganisationUpdateManyWithWhereWithoutContactOrganisationInput | OrganisationUpdateManyWithWhereWithoutContactOrganisationInput[]
    deleteMany?: OrganisationScalarWhereInput | OrganisationScalarWhereInput[]
  }

  export type OrganisationUpdateOneWithoutContactOrganisationsNestedInput = {
    create?: XOR<OrganisationCreateWithoutContactOrganisationsInput, OrganisationUncheckedCreateWithoutContactOrganisationsInput>
    connectOrCreate?: OrganisationCreateOrConnectWithoutContactOrganisationsInput
    upsert?: OrganisationUpsertWithoutContactOrganisationsInput
    disconnect?: OrganisationWhereInput | boolean
    delete?: OrganisationWhereInput | boolean
    connect?: OrganisationWhereUniqueInput
    update?: XOR<XOR<OrganisationUpdateToOneWithWhereWithoutContactOrganisationsInput, OrganisationUpdateWithoutContactOrganisationsInput>, OrganisationUncheckedUpdateWithoutContactOrganisationsInput>
  }

  export type TagUpdateManyWithoutCreatedOrganisationNestedInput = {
    create?: XOR<TagCreateWithoutCreatedOrganisationInput, TagUncheckedCreateWithoutCreatedOrganisationInput> | TagCreateWithoutCreatedOrganisationInput[] | TagUncheckedCreateWithoutCreatedOrganisationInput[]
    connectOrCreate?: TagCreateOrConnectWithoutCreatedOrganisationInput | TagCreateOrConnectWithoutCreatedOrganisationInput[]
    upsert?: TagUpsertWithWhereUniqueWithoutCreatedOrganisationInput | TagUpsertWithWhereUniqueWithoutCreatedOrganisationInput[]
    createMany?: TagCreateManyCreatedOrganisationInputEnvelope
    set?: TagWhereUniqueInput | TagWhereUniqueInput[]
    disconnect?: TagWhereUniqueInput | TagWhereUniqueInput[]
    delete?: TagWhereUniqueInput | TagWhereUniqueInput[]
    connect?: TagWhereUniqueInput | TagWhereUniqueInput[]
    update?: TagUpdateWithWhereUniqueWithoutCreatedOrganisationInput | TagUpdateWithWhereUniqueWithoutCreatedOrganisationInput[]
    updateMany?: TagUpdateManyWithWhereWithoutCreatedOrganisationInput | TagUpdateManyWithWhereWithoutCreatedOrganisationInput[]
    deleteMany?: TagScalarWhereInput | TagScalarWhereInput[]
  }

  export type ContactUpdateManyWithoutContactOrgNestedInput = {
    create?: XOR<ContactCreateWithoutContactOrgInput, ContactUncheckedCreateWithoutContactOrgInput> | ContactCreateWithoutContactOrgInput[] | ContactUncheckedCreateWithoutContactOrgInput[]
    connectOrCreate?: ContactCreateOrConnectWithoutContactOrgInput | ContactCreateOrConnectWithoutContactOrgInput[]
    upsert?: ContactUpsertWithWhereUniqueWithoutContactOrgInput | ContactUpsertWithWhereUniqueWithoutContactOrgInput[]
    createMany?: ContactCreateManyContactOrgInputEnvelope
    set?: ContactWhereUniqueInput | ContactWhereUniqueInput[]
    disconnect?: ContactWhereUniqueInput | ContactWhereUniqueInput[]
    delete?: ContactWhereUniqueInput | ContactWhereUniqueInput[]
    connect?: ContactWhereUniqueInput | ContactWhereUniqueInput[]
    update?: ContactUpdateWithWhereUniqueWithoutContactOrgInput | ContactUpdateWithWhereUniqueWithoutContactOrgInput[]
    updateMany?: ContactUpdateManyWithWhereWithoutContactOrgInput | ContactUpdateManyWithWhereWithoutContactOrgInput[]
    deleteMany?: ContactScalarWhereInput | ContactScalarWhereInput[]
  }

  export type ScheduleUpdateManyWithoutCreatedOrgNestedInput = {
    create?: XOR<ScheduleCreateWithoutCreatedOrgInput, ScheduleUncheckedCreateWithoutCreatedOrgInput> | ScheduleCreateWithoutCreatedOrgInput[] | ScheduleUncheckedCreateWithoutCreatedOrgInput[]
    connectOrCreate?: ScheduleCreateOrConnectWithoutCreatedOrgInput | ScheduleCreateOrConnectWithoutCreatedOrgInput[]
    upsert?: ScheduleUpsertWithWhereUniqueWithoutCreatedOrgInput | ScheduleUpsertWithWhereUniqueWithoutCreatedOrgInput[]
    createMany?: ScheduleCreateManyCreatedOrgInputEnvelope
    set?: ScheduleWhereUniqueInput | ScheduleWhereUniqueInput[]
    disconnect?: ScheduleWhereUniqueInput | ScheduleWhereUniqueInput[]
    delete?: ScheduleWhereUniqueInput | ScheduleWhereUniqueInput[]
    connect?: ScheduleWhereUniqueInput | ScheduleWhereUniqueInput[]
    update?: ScheduleUpdateWithWhereUniqueWithoutCreatedOrgInput | ScheduleUpdateWithWhereUniqueWithoutCreatedOrgInput[]
    updateMany?: ScheduleUpdateManyWithWhereWithoutCreatedOrgInput | ScheduleUpdateManyWithWhereWithoutCreatedOrgInput[]
    deleteMany?: ScheduleScalarWhereInput | ScheduleScalarWhereInput[]
  }

  export type UserUncheckedUpdateManyWithoutOrganisationNestedInput = {
    create?: XOR<UserCreateWithoutOrganisationInput, UserUncheckedCreateWithoutOrganisationInput> | UserCreateWithoutOrganisationInput[] | UserUncheckedCreateWithoutOrganisationInput[]
    connectOrCreate?: UserCreateOrConnectWithoutOrganisationInput | UserCreateOrConnectWithoutOrganisationInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutOrganisationInput | UserUpsertWithWhereUniqueWithoutOrganisationInput[]
    createMany?: UserCreateManyOrganisationInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutOrganisationInput | UserUpdateWithWhereUniqueWithoutOrganisationInput[]
    updateMany?: UserUpdateManyWithWhereWithoutOrganisationInput | UserUpdateManyWithWhereWithoutOrganisationInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type BranchUncheckedUpdateManyWithoutOrganisationNestedInput = {
    create?: XOR<BranchCreateWithoutOrganisationInput, BranchUncheckedCreateWithoutOrganisationInput> | BranchCreateWithoutOrganisationInput[] | BranchUncheckedCreateWithoutOrganisationInput[]
    connectOrCreate?: BranchCreateOrConnectWithoutOrganisationInput | BranchCreateOrConnectWithoutOrganisationInput[]
    upsert?: BranchUpsertWithWhereUniqueWithoutOrganisationInput | BranchUpsertWithWhereUniqueWithoutOrganisationInput[]
    createMany?: BranchCreateManyOrganisationInputEnvelope
    set?: BranchWhereUniqueInput | BranchWhereUniqueInput[]
    disconnect?: BranchWhereUniqueInput | BranchWhereUniqueInput[]
    delete?: BranchWhereUniqueInput | BranchWhereUniqueInput[]
    connect?: BranchWhereUniqueInput | BranchWhereUniqueInput[]
    update?: BranchUpdateWithWhereUniqueWithoutOrganisationInput | BranchUpdateWithWhereUniqueWithoutOrganisationInput[]
    updateMany?: BranchUpdateManyWithWhereWithoutOrganisationInput | BranchUpdateManyWithWhereWithoutOrganisationInput[]
    deleteMany?: BranchScalarWhereInput | BranchScalarWhereInput[]
  }

  export type TagUncheckedUpdateManyWithoutOrganisationsNestedInput = {
    create?: XOR<TagCreateWithoutOrganisationsInput, TagUncheckedCreateWithoutOrganisationsInput> | TagCreateWithoutOrganisationsInput[] | TagUncheckedCreateWithoutOrganisationsInput[]
    connectOrCreate?: TagCreateOrConnectWithoutOrganisationsInput | TagCreateOrConnectWithoutOrganisationsInput[]
    upsert?: TagUpsertWithWhereUniqueWithoutOrganisationsInput | TagUpsertWithWhereUniqueWithoutOrganisationsInput[]
    set?: TagWhereUniqueInput | TagWhereUniqueInput[]
    disconnect?: TagWhereUniqueInput | TagWhereUniqueInput[]
    delete?: TagWhereUniqueInput | TagWhereUniqueInput[]
    connect?: TagWhereUniqueInput | TagWhereUniqueInput[]
    update?: TagUpdateWithWhereUniqueWithoutOrganisationsInput | TagUpdateWithWhereUniqueWithoutOrganisationsInput[]
    updateMany?: TagUpdateManyWithWhereWithoutOrganisationsInput | TagUpdateManyWithWhereWithoutOrganisationsInput[]
    deleteMany?: TagScalarWhereInput | TagScalarWhereInput[]
  }

  export type OrganisationUncheckedUpdateManyWithoutContactOrganisationNestedInput = {
    create?: XOR<OrganisationCreateWithoutContactOrganisationInput, OrganisationUncheckedCreateWithoutContactOrganisationInput> | OrganisationCreateWithoutContactOrganisationInput[] | OrganisationUncheckedCreateWithoutContactOrganisationInput[]
    connectOrCreate?: OrganisationCreateOrConnectWithoutContactOrganisationInput | OrganisationCreateOrConnectWithoutContactOrganisationInput[]
    upsert?: OrganisationUpsertWithWhereUniqueWithoutContactOrganisationInput | OrganisationUpsertWithWhereUniqueWithoutContactOrganisationInput[]
    createMany?: OrganisationCreateManyContactOrganisationInputEnvelope
    set?: OrganisationWhereUniqueInput | OrganisationWhereUniqueInput[]
    disconnect?: OrganisationWhereUniqueInput | OrganisationWhereUniqueInput[]
    delete?: OrganisationWhereUniqueInput | OrganisationWhereUniqueInput[]
    connect?: OrganisationWhereUniqueInput | OrganisationWhereUniqueInput[]
    update?: OrganisationUpdateWithWhereUniqueWithoutContactOrganisationInput | OrganisationUpdateWithWhereUniqueWithoutContactOrganisationInput[]
    updateMany?: OrganisationUpdateManyWithWhereWithoutContactOrganisationInput | OrganisationUpdateManyWithWhereWithoutContactOrganisationInput[]
    deleteMany?: OrganisationScalarWhereInput | OrganisationScalarWhereInput[]
  }

  export type TagUncheckedUpdateManyWithoutCreatedOrganisationNestedInput = {
    create?: XOR<TagCreateWithoutCreatedOrganisationInput, TagUncheckedCreateWithoutCreatedOrganisationInput> | TagCreateWithoutCreatedOrganisationInput[] | TagUncheckedCreateWithoutCreatedOrganisationInput[]
    connectOrCreate?: TagCreateOrConnectWithoutCreatedOrganisationInput | TagCreateOrConnectWithoutCreatedOrganisationInput[]
    upsert?: TagUpsertWithWhereUniqueWithoutCreatedOrganisationInput | TagUpsertWithWhereUniqueWithoutCreatedOrganisationInput[]
    createMany?: TagCreateManyCreatedOrganisationInputEnvelope
    set?: TagWhereUniqueInput | TagWhereUniqueInput[]
    disconnect?: TagWhereUniqueInput | TagWhereUniqueInput[]
    delete?: TagWhereUniqueInput | TagWhereUniqueInput[]
    connect?: TagWhereUniqueInput | TagWhereUniqueInput[]
    update?: TagUpdateWithWhereUniqueWithoutCreatedOrganisationInput | TagUpdateWithWhereUniqueWithoutCreatedOrganisationInput[]
    updateMany?: TagUpdateManyWithWhereWithoutCreatedOrganisationInput | TagUpdateManyWithWhereWithoutCreatedOrganisationInput[]
    deleteMany?: TagScalarWhereInput | TagScalarWhereInput[]
  }

  export type ContactUncheckedUpdateManyWithoutContactOrgNestedInput = {
    create?: XOR<ContactCreateWithoutContactOrgInput, ContactUncheckedCreateWithoutContactOrgInput> | ContactCreateWithoutContactOrgInput[] | ContactUncheckedCreateWithoutContactOrgInput[]
    connectOrCreate?: ContactCreateOrConnectWithoutContactOrgInput | ContactCreateOrConnectWithoutContactOrgInput[]
    upsert?: ContactUpsertWithWhereUniqueWithoutContactOrgInput | ContactUpsertWithWhereUniqueWithoutContactOrgInput[]
    createMany?: ContactCreateManyContactOrgInputEnvelope
    set?: ContactWhereUniqueInput | ContactWhereUniqueInput[]
    disconnect?: ContactWhereUniqueInput | ContactWhereUniqueInput[]
    delete?: ContactWhereUniqueInput | ContactWhereUniqueInput[]
    connect?: ContactWhereUniqueInput | ContactWhereUniqueInput[]
    update?: ContactUpdateWithWhereUniqueWithoutContactOrgInput | ContactUpdateWithWhereUniqueWithoutContactOrgInput[]
    updateMany?: ContactUpdateManyWithWhereWithoutContactOrgInput | ContactUpdateManyWithWhereWithoutContactOrgInput[]
    deleteMany?: ContactScalarWhereInput | ContactScalarWhereInput[]
  }

  export type ScheduleUncheckedUpdateManyWithoutCreatedOrgNestedInput = {
    create?: XOR<ScheduleCreateWithoutCreatedOrgInput, ScheduleUncheckedCreateWithoutCreatedOrgInput> | ScheduleCreateWithoutCreatedOrgInput[] | ScheduleUncheckedCreateWithoutCreatedOrgInput[]
    connectOrCreate?: ScheduleCreateOrConnectWithoutCreatedOrgInput | ScheduleCreateOrConnectWithoutCreatedOrgInput[]
    upsert?: ScheduleUpsertWithWhereUniqueWithoutCreatedOrgInput | ScheduleUpsertWithWhereUniqueWithoutCreatedOrgInput[]
    createMany?: ScheduleCreateManyCreatedOrgInputEnvelope
    set?: ScheduleWhereUniqueInput | ScheduleWhereUniqueInput[]
    disconnect?: ScheduleWhereUniqueInput | ScheduleWhereUniqueInput[]
    delete?: ScheduleWhereUniqueInput | ScheduleWhereUniqueInput[]
    connect?: ScheduleWhereUniqueInput | ScheduleWhereUniqueInput[]
    update?: ScheduleUpdateWithWhereUniqueWithoutCreatedOrgInput | ScheduleUpdateWithWhereUniqueWithoutCreatedOrgInput[]
    updateMany?: ScheduleUpdateManyWithWhereWithoutCreatedOrgInput | ScheduleUpdateManyWithWhereWithoutCreatedOrgInput[]
    deleteMany?: ScheduleScalarWhereInput | ScheduleScalarWhereInput[]
  }

  export type OrganisationCreateNestedOneWithoutCreatedTagsInput = {
    create?: XOR<OrganisationCreateWithoutCreatedTagsInput, OrganisationUncheckedCreateWithoutCreatedTagsInput>
    connectOrCreate?: OrganisationCreateOrConnectWithoutCreatedTagsInput
    connect?: OrganisationWhereUniqueInput
  }

  export type OrganisationCreateNestedManyWithoutTagsInput = {
    create?: XOR<OrganisationCreateWithoutTagsInput, OrganisationUncheckedCreateWithoutTagsInput> | OrganisationCreateWithoutTagsInput[] | OrganisationUncheckedCreateWithoutTagsInput[]
    connectOrCreate?: OrganisationCreateOrConnectWithoutTagsInput | OrganisationCreateOrConnectWithoutTagsInput[]
    connect?: OrganisationWhereUniqueInput | OrganisationWhereUniqueInput[]
  }

  export type ActivityCreateNestedManyWithoutTagsInput = {
    create?: XOR<ActivityCreateWithoutTagsInput, ActivityUncheckedCreateWithoutTagsInput> | ActivityCreateWithoutTagsInput[] | ActivityUncheckedCreateWithoutTagsInput[]
    connectOrCreate?: ActivityCreateOrConnectWithoutTagsInput | ActivityCreateOrConnectWithoutTagsInput[]
    connect?: ActivityWhereUniqueInput | ActivityWhereUniqueInput[]
  }

  export type ContactCreateNestedManyWithoutTagsInput = {
    create?: XOR<ContactCreateWithoutTagsInput, ContactUncheckedCreateWithoutTagsInput> | ContactCreateWithoutTagsInput[] | ContactUncheckedCreateWithoutTagsInput[]
    connectOrCreate?: ContactCreateOrConnectWithoutTagsInput | ContactCreateOrConnectWithoutTagsInput[]
    connect?: ContactWhereUniqueInput | ContactWhereUniqueInput[]
  }

  export type OrganisationUncheckedCreateNestedManyWithoutTagsInput = {
    create?: XOR<OrganisationCreateWithoutTagsInput, OrganisationUncheckedCreateWithoutTagsInput> | OrganisationCreateWithoutTagsInput[] | OrganisationUncheckedCreateWithoutTagsInput[]
    connectOrCreate?: OrganisationCreateOrConnectWithoutTagsInput | OrganisationCreateOrConnectWithoutTagsInput[]
    connect?: OrganisationWhereUniqueInput | OrganisationWhereUniqueInput[]
  }

  export type ActivityUncheckedCreateNestedManyWithoutTagsInput = {
    create?: XOR<ActivityCreateWithoutTagsInput, ActivityUncheckedCreateWithoutTagsInput> | ActivityCreateWithoutTagsInput[] | ActivityUncheckedCreateWithoutTagsInput[]
    connectOrCreate?: ActivityCreateOrConnectWithoutTagsInput | ActivityCreateOrConnectWithoutTagsInput[]
    connect?: ActivityWhereUniqueInput | ActivityWhereUniqueInput[]
  }

  export type ContactUncheckedCreateNestedManyWithoutTagsInput = {
    create?: XOR<ContactCreateWithoutTagsInput, ContactUncheckedCreateWithoutTagsInput> | ContactCreateWithoutTagsInput[] | ContactUncheckedCreateWithoutTagsInput[]
    connectOrCreate?: ContactCreateOrConnectWithoutTagsInput | ContactCreateOrConnectWithoutTagsInput[]
    connect?: ContactWhereUniqueInput | ContactWhereUniqueInput[]
  }

  export type EnumTagTypeFieldUpdateOperationsInput = {
    set?: $Enums.TagType
  }

  export type OrganisationUpdateOneRequiredWithoutCreatedTagsNestedInput = {
    create?: XOR<OrganisationCreateWithoutCreatedTagsInput, OrganisationUncheckedCreateWithoutCreatedTagsInput>
    connectOrCreate?: OrganisationCreateOrConnectWithoutCreatedTagsInput
    upsert?: OrganisationUpsertWithoutCreatedTagsInput
    connect?: OrganisationWhereUniqueInput
    update?: XOR<XOR<OrganisationUpdateToOneWithWhereWithoutCreatedTagsInput, OrganisationUpdateWithoutCreatedTagsInput>, OrganisationUncheckedUpdateWithoutCreatedTagsInput>
  }

  export type OrganisationUpdateManyWithoutTagsNestedInput = {
    create?: XOR<OrganisationCreateWithoutTagsInput, OrganisationUncheckedCreateWithoutTagsInput> | OrganisationCreateWithoutTagsInput[] | OrganisationUncheckedCreateWithoutTagsInput[]
    connectOrCreate?: OrganisationCreateOrConnectWithoutTagsInput | OrganisationCreateOrConnectWithoutTagsInput[]
    upsert?: OrganisationUpsertWithWhereUniqueWithoutTagsInput | OrganisationUpsertWithWhereUniqueWithoutTagsInput[]
    set?: OrganisationWhereUniqueInput | OrganisationWhereUniqueInput[]
    disconnect?: OrganisationWhereUniqueInput | OrganisationWhereUniqueInput[]
    delete?: OrganisationWhereUniqueInput | OrganisationWhereUniqueInput[]
    connect?: OrganisationWhereUniqueInput | OrganisationWhereUniqueInput[]
    update?: OrganisationUpdateWithWhereUniqueWithoutTagsInput | OrganisationUpdateWithWhereUniqueWithoutTagsInput[]
    updateMany?: OrganisationUpdateManyWithWhereWithoutTagsInput | OrganisationUpdateManyWithWhereWithoutTagsInput[]
    deleteMany?: OrganisationScalarWhereInput | OrganisationScalarWhereInput[]
  }

  export type ActivityUpdateManyWithoutTagsNestedInput = {
    create?: XOR<ActivityCreateWithoutTagsInput, ActivityUncheckedCreateWithoutTagsInput> | ActivityCreateWithoutTagsInput[] | ActivityUncheckedCreateWithoutTagsInput[]
    connectOrCreate?: ActivityCreateOrConnectWithoutTagsInput | ActivityCreateOrConnectWithoutTagsInput[]
    upsert?: ActivityUpsertWithWhereUniqueWithoutTagsInput | ActivityUpsertWithWhereUniqueWithoutTagsInput[]
    set?: ActivityWhereUniqueInput | ActivityWhereUniqueInput[]
    disconnect?: ActivityWhereUniqueInput | ActivityWhereUniqueInput[]
    delete?: ActivityWhereUniqueInput | ActivityWhereUniqueInput[]
    connect?: ActivityWhereUniqueInput | ActivityWhereUniqueInput[]
    update?: ActivityUpdateWithWhereUniqueWithoutTagsInput | ActivityUpdateWithWhereUniqueWithoutTagsInput[]
    updateMany?: ActivityUpdateManyWithWhereWithoutTagsInput | ActivityUpdateManyWithWhereWithoutTagsInput[]
    deleteMany?: ActivityScalarWhereInput | ActivityScalarWhereInput[]
  }

  export type ContactUpdateManyWithoutTagsNestedInput = {
    create?: XOR<ContactCreateWithoutTagsInput, ContactUncheckedCreateWithoutTagsInput> | ContactCreateWithoutTagsInput[] | ContactUncheckedCreateWithoutTagsInput[]
    connectOrCreate?: ContactCreateOrConnectWithoutTagsInput | ContactCreateOrConnectWithoutTagsInput[]
    upsert?: ContactUpsertWithWhereUniqueWithoutTagsInput | ContactUpsertWithWhereUniqueWithoutTagsInput[]
    set?: ContactWhereUniqueInput | ContactWhereUniqueInput[]
    disconnect?: ContactWhereUniqueInput | ContactWhereUniqueInput[]
    delete?: ContactWhereUniqueInput | ContactWhereUniqueInput[]
    connect?: ContactWhereUniqueInput | ContactWhereUniqueInput[]
    update?: ContactUpdateWithWhereUniqueWithoutTagsInput | ContactUpdateWithWhereUniqueWithoutTagsInput[]
    updateMany?: ContactUpdateManyWithWhereWithoutTagsInput | ContactUpdateManyWithWhereWithoutTagsInput[]
    deleteMany?: ContactScalarWhereInput | ContactScalarWhereInput[]
  }

  export type OrganisationUncheckedUpdateManyWithoutTagsNestedInput = {
    create?: XOR<OrganisationCreateWithoutTagsInput, OrganisationUncheckedCreateWithoutTagsInput> | OrganisationCreateWithoutTagsInput[] | OrganisationUncheckedCreateWithoutTagsInput[]
    connectOrCreate?: OrganisationCreateOrConnectWithoutTagsInput | OrganisationCreateOrConnectWithoutTagsInput[]
    upsert?: OrganisationUpsertWithWhereUniqueWithoutTagsInput | OrganisationUpsertWithWhereUniqueWithoutTagsInput[]
    set?: OrganisationWhereUniqueInput | OrganisationWhereUniqueInput[]
    disconnect?: OrganisationWhereUniqueInput | OrganisationWhereUniqueInput[]
    delete?: OrganisationWhereUniqueInput | OrganisationWhereUniqueInput[]
    connect?: OrganisationWhereUniqueInput | OrganisationWhereUniqueInput[]
    update?: OrganisationUpdateWithWhereUniqueWithoutTagsInput | OrganisationUpdateWithWhereUniqueWithoutTagsInput[]
    updateMany?: OrganisationUpdateManyWithWhereWithoutTagsInput | OrganisationUpdateManyWithWhereWithoutTagsInput[]
    deleteMany?: OrganisationScalarWhereInput | OrganisationScalarWhereInput[]
  }

  export type ActivityUncheckedUpdateManyWithoutTagsNestedInput = {
    create?: XOR<ActivityCreateWithoutTagsInput, ActivityUncheckedCreateWithoutTagsInput> | ActivityCreateWithoutTagsInput[] | ActivityUncheckedCreateWithoutTagsInput[]
    connectOrCreate?: ActivityCreateOrConnectWithoutTagsInput | ActivityCreateOrConnectWithoutTagsInput[]
    upsert?: ActivityUpsertWithWhereUniqueWithoutTagsInput | ActivityUpsertWithWhereUniqueWithoutTagsInput[]
    set?: ActivityWhereUniqueInput | ActivityWhereUniqueInput[]
    disconnect?: ActivityWhereUniqueInput | ActivityWhereUniqueInput[]
    delete?: ActivityWhereUniqueInput | ActivityWhereUniqueInput[]
    connect?: ActivityWhereUniqueInput | ActivityWhereUniqueInput[]
    update?: ActivityUpdateWithWhereUniqueWithoutTagsInput | ActivityUpdateWithWhereUniqueWithoutTagsInput[]
    updateMany?: ActivityUpdateManyWithWhereWithoutTagsInput | ActivityUpdateManyWithWhereWithoutTagsInput[]
    deleteMany?: ActivityScalarWhereInput | ActivityScalarWhereInput[]
  }

  export type ContactUncheckedUpdateManyWithoutTagsNestedInput = {
    create?: XOR<ContactCreateWithoutTagsInput, ContactUncheckedCreateWithoutTagsInput> | ContactCreateWithoutTagsInput[] | ContactUncheckedCreateWithoutTagsInput[]
    connectOrCreate?: ContactCreateOrConnectWithoutTagsInput | ContactCreateOrConnectWithoutTagsInput[]
    upsert?: ContactUpsertWithWhereUniqueWithoutTagsInput | ContactUpsertWithWhereUniqueWithoutTagsInput[]
    set?: ContactWhereUniqueInput | ContactWhereUniqueInput[]
    disconnect?: ContactWhereUniqueInput | ContactWhereUniqueInput[]
    delete?: ContactWhereUniqueInput | ContactWhereUniqueInput[]
    connect?: ContactWhereUniqueInput | ContactWhereUniqueInput[]
    update?: ContactUpdateWithWhereUniqueWithoutTagsInput | ContactUpdateWithWhereUniqueWithoutTagsInput[]
    updateMany?: ContactUpdateManyWithWhereWithoutTagsInput | ContactUpdateManyWithWhereWithoutTagsInput[]
    deleteMany?: ContactScalarWhereInput | ContactScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutAddedActivitiesInput = {
    create?: XOR<UserCreateWithoutAddedActivitiesInput, UserUncheckedCreateWithoutAddedActivitiesInput>
    connectOrCreate?: UserCreateOrConnectWithoutAddedActivitiesInput
    connect?: UserWhereUniqueInput
  }

  export type TagCreateNestedManyWithoutActivitiesInput = {
    create?: XOR<TagCreateWithoutActivitiesInput, TagUncheckedCreateWithoutActivitiesInput> | TagCreateWithoutActivitiesInput[] | TagUncheckedCreateWithoutActivitiesInput[]
    connectOrCreate?: TagCreateOrConnectWithoutActivitiesInput | TagCreateOrConnectWithoutActivitiesInput[]
    connect?: TagWhereUniqueInput | TagWhereUniqueInput[]
  }

  export type ContactCreateNestedOneWithoutActivitiesInput = {
    create?: XOR<ContactCreateWithoutActivitiesInput, ContactUncheckedCreateWithoutActivitiesInput>
    connectOrCreate?: ContactCreateOrConnectWithoutActivitiesInput
    connect?: ContactWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutActivityFollowUpsInput = {
    create?: XOR<UserCreateWithoutActivityFollowUpsInput, UserUncheckedCreateWithoutActivityFollowUpsInput>
    connectOrCreate?: UserCreateOrConnectWithoutActivityFollowUpsInput
    connect?: UserWhereUniqueInput
  }

  export type ActivityCreateNestedOneWithoutFollowUpActivitiesInput = {
    create?: XOR<ActivityCreateWithoutFollowUpActivitiesInput, ActivityUncheckedCreateWithoutFollowUpActivitiesInput>
    connectOrCreate?: ActivityCreateOrConnectWithoutFollowUpActivitiesInput
    connect?: ActivityWhereUniqueInput
  }

  export type ActivityCreateNestedManyWithoutFollowUpActivityInput = {
    create?: XOR<ActivityCreateWithoutFollowUpActivityInput, ActivityUncheckedCreateWithoutFollowUpActivityInput> | ActivityCreateWithoutFollowUpActivityInput[] | ActivityUncheckedCreateWithoutFollowUpActivityInput[]
    connectOrCreate?: ActivityCreateOrConnectWithoutFollowUpActivityInput | ActivityCreateOrConnectWithoutFollowUpActivityInput[]
    createMany?: ActivityCreateManyFollowUpActivityInputEnvelope
    connect?: ActivityWhereUniqueInput | ActivityWhereUniqueInput[]
  }

  export type TagUncheckedCreateNestedManyWithoutActivitiesInput = {
    create?: XOR<TagCreateWithoutActivitiesInput, TagUncheckedCreateWithoutActivitiesInput> | TagCreateWithoutActivitiesInput[] | TagUncheckedCreateWithoutActivitiesInput[]
    connectOrCreate?: TagCreateOrConnectWithoutActivitiesInput | TagCreateOrConnectWithoutActivitiesInput[]
    connect?: TagWhereUniqueInput | TagWhereUniqueInput[]
  }

  export type ActivityUncheckedCreateNestedManyWithoutFollowUpActivityInput = {
    create?: XOR<ActivityCreateWithoutFollowUpActivityInput, ActivityUncheckedCreateWithoutFollowUpActivityInput> | ActivityCreateWithoutFollowUpActivityInput[] | ActivityUncheckedCreateWithoutFollowUpActivityInput[]
    connectOrCreate?: ActivityCreateOrConnectWithoutFollowUpActivityInput | ActivityCreateOrConnectWithoutFollowUpActivityInput[]
    createMany?: ActivityCreateManyFollowUpActivityInputEnvelope
    connect?: ActivityWhereUniqueInput | ActivityWhereUniqueInput[]
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type EnumActivityTypeFieldUpdateOperationsInput = {
    set?: $Enums.ActivityType
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type UserUpdateOneRequiredWithoutAddedActivitiesNestedInput = {
    create?: XOR<UserCreateWithoutAddedActivitiesInput, UserUncheckedCreateWithoutAddedActivitiesInput>
    connectOrCreate?: UserCreateOrConnectWithoutAddedActivitiesInput
    upsert?: UserUpsertWithoutAddedActivitiesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutAddedActivitiesInput, UserUpdateWithoutAddedActivitiesInput>, UserUncheckedUpdateWithoutAddedActivitiesInput>
  }

  export type TagUpdateManyWithoutActivitiesNestedInput = {
    create?: XOR<TagCreateWithoutActivitiesInput, TagUncheckedCreateWithoutActivitiesInput> | TagCreateWithoutActivitiesInput[] | TagUncheckedCreateWithoutActivitiesInput[]
    connectOrCreate?: TagCreateOrConnectWithoutActivitiesInput | TagCreateOrConnectWithoutActivitiesInput[]
    upsert?: TagUpsertWithWhereUniqueWithoutActivitiesInput | TagUpsertWithWhereUniqueWithoutActivitiesInput[]
    set?: TagWhereUniqueInput | TagWhereUniqueInput[]
    disconnect?: TagWhereUniqueInput | TagWhereUniqueInput[]
    delete?: TagWhereUniqueInput | TagWhereUniqueInput[]
    connect?: TagWhereUniqueInput | TagWhereUniqueInput[]
    update?: TagUpdateWithWhereUniqueWithoutActivitiesInput | TagUpdateWithWhereUniqueWithoutActivitiesInput[]
    updateMany?: TagUpdateManyWithWhereWithoutActivitiesInput | TagUpdateManyWithWhereWithoutActivitiesInput[]
    deleteMany?: TagScalarWhereInput | TagScalarWhereInput[]
  }

  export type ContactUpdateOneRequiredWithoutActivitiesNestedInput = {
    create?: XOR<ContactCreateWithoutActivitiesInput, ContactUncheckedCreateWithoutActivitiesInput>
    connectOrCreate?: ContactCreateOrConnectWithoutActivitiesInput
    upsert?: ContactUpsertWithoutActivitiesInput
    connect?: ContactWhereUniqueInput
    update?: XOR<XOR<ContactUpdateToOneWithWhereWithoutActivitiesInput, ContactUpdateWithoutActivitiesInput>, ContactUncheckedUpdateWithoutActivitiesInput>
  }

  export type UserUpdateOneWithoutActivityFollowUpsNestedInput = {
    create?: XOR<UserCreateWithoutActivityFollowUpsInput, UserUncheckedCreateWithoutActivityFollowUpsInput>
    connectOrCreate?: UserCreateOrConnectWithoutActivityFollowUpsInput
    upsert?: UserUpsertWithoutActivityFollowUpsInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutActivityFollowUpsInput, UserUpdateWithoutActivityFollowUpsInput>, UserUncheckedUpdateWithoutActivityFollowUpsInput>
  }

  export type ActivityUpdateOneWithoutFollowUpActivitiesNestedInput = {
    create?: XOR<ActivityCreateWithoutFollowUpActivitiesInput, ActivityUncheckedCreateWithoutFollowUpActivitiesInput>
    connectOrCreate?: ActivityCreateOrConnectWithoutFollowUpActivitiesInput
    upsert?: ActivityUpsertWithoutFollowUpActivitiesInput
    disconnect?: ActivityWhereInput | boolean
    delete?: ActivityWhereInput | boolean
    connect?: ActivityWhereUniqueInput
    update?: XOR<XOR<ActivityUpdateToOneWithWhereWithoutFollowUpActivitiesInput, ActivityUpdateWithoutFollowUpActivitiesInput>, ActivityUncheckedUpdateWithoutFollowUpActivitiesInput>
  }

  export type ActivityUpdateManyWithoutFollowUpActivityNestedInput = {
    create?: XOR<ActivityCreateWithoutFollowUpActivityInput, ActivityUncheckedCreateWithoutFollowUpActivityInput> | ActivityCreateWithoutFollowUpActivityInput[] | ActivityUncheckedCreateWithoutFollowUpActivityInput[]
    connectOrCreate?: ActivityCreateOrConnectWithoutFollowUpActivityInput | ActivityCreateOrConnectWithoutFollowUpActivityInput[]
    upsert?: ActivityUpsertWithWhereUniqueWithoutFollowUpActivityInput | ActivityUpsertWithWhereUniqueWithoutFollowUpActivityInput[]
    createMany?: ActivityCreateManyFollowUpActivityInputEnvelope
    set?: ActivityWhereUniqueInput | ActivityWhereUniqueInput[]
    disconnect?: ActivityWhereUniqueInput | ActivityWhereUniqueInput[]
    delete?: ActivityWhereUniqueInput | ActivityWhereUniqueInput[]
    connect?: ActivityWhereUniqueInput | ActivityWhereUniqueInput[]
    update?: ActivityUpdateWithWhereUniqueWithoutFollowUpActivityInput | ActivityUpdateWithWhereUniqueWithoutFollowUpActivityInput[]
    updateMany?: ActivityUpdateManyWithWhereWithoutFollowUpActivityInput | ActivityUpdateManyWithWhereWithoutFollowUpActivityInput[]
    deleteMany?: ActivityScalarWhereInput | ActivityScalarWhereInput[]
  }

  export type TagUncheckedUpdateManyWithoutActivitiesNestedInput = {
    create?: XOR<TagCreateWithoutActivitiesInput, TagUncheckedCreateWithoutActivitiesInput> | TagCreateWithoutActivitiesInput[] | TagUncheckedCreateWithoutActivitiesInput[]
    connectOrCreate?: TagCreateOrConnectWithoutActivitiesInput | TagCreateOrConnectWithoutActivitiesInput[]
    upsert?: TagUpsertWithWhereUniqueWithoutActivitiesInput | TagUpsertWithWhereUniqueWithoutActivitiesInput[]
    set?: TagWhereUniqueInput | TagWhereUniqueInput[]
    disconnect?: TagWhereUniqueInput | TagWhereUniqueInput[]
    delete?: TagWhereUniqueInput | TagWhereUniqueInput[]
    connect?: TagWhereUniqueInput | TagWhereUniqueInput[]
    update?: TagUpdateWithWhereUniqueWithoutActivitiesInput | TagUpdateWithWhereUniqueWithoutActivitiesInput[]
    updateMany?: TagUpdateManyWithWhereWithoutActivitiesInput | TagUpdateManyWithWhereWithoutActivitiesInput[]
    deleteMany?: TagScalarWhereInput | TagScalarWhereInput[]
  }

  export type ActivityUncheckedUpdateManyWithoutFollowUpActivityNestedInput = {
    create?: XOR<ActivityCreateWithoutFollowUpActivityInput, ActivityUncheckedCreateWithoutFollowUpActivityInput> | ActivityCreateWithoutFollowUpActivityInput[] | ActivityUncheckedCreateWithoutFollowUpActivityInput[]
    connectOrCreate?: ActivityCreateOrConnectWithoutFollowUpActivityInput | ActivityCreateOrConnectWithoutFollowUpActivityInput[]
    upsert?: ActivityUpsertWithWhereUniqueWithoutFollowUpActivityInput | ActivityUpsertWithWhereUniqueWithoutFollowUpActivityInput[]
    createMany?: ActivityCreateManyFollowUpActivityInputEnvelope
    set?: ActivityWhereUniqueInput | ActivityWhereUniqueInput[]
    disconnect?: ActivityWhereUniqueInput | ActivityWhereUniqueInput[]
    delete?: ActivityWhereUniqueInput | ActivityWhereUniqueInput[]
    connect?: ActivityWhereUniqueInput | ActivityWhereUniqueInput[]
    update?: ActivityUpdateWithWhereUniqueWithoutFollowUpActivityInput | ActivityUpdateWithWhereUniqueWithoutFollowUpActivityInput[]
    updateMany?: ActivityUpdateManyWithWhereWithoutFollowUpActivityInput | ActivityUpdateManyWithWhereWithoutFollowUpActivityInput[]
    deleteMany?: ActivityScalarWhereInput | ActivityScalarWhereInput[]
  }

  export type ContactCreateNestedOneWithoutNotesInput = {
    create?: XOR<ContactCreateWithoutNotesInput, ContactUncheckedCreateWithoutNotesInput>
    connectOrCreate?: ContactCreateOrConnectWithoutNotesInput
    connect?: ContactWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutCreatedNotesInput = {
    create?: XOR<UserCreateWithoutCreatedNotesInput, UserUncheckedCreateWithoutCreatedNotesInput>
    connectOrCreate?: UserCreateOrConnectWithoutCreatedNotesInput
    connect?: UserWhereUniqueInput
  }

  export type EnumNoteCategoryFieldUpdateOperationsInput = {
    set?: $Enums.NoteCategory
  }

  export type ContactUpdateOneRequiredWithoutNotesNestedInput = {
    create?: XOR<ContactCreateWithoutNotesInput, ContactUncheckedCreateWithoutNotesInput>
    connectOrCreate?: ContactCreateOrConnectWithoutNotesInput
    upsert?: ContactUpsertWithoutNotesInput
    connect?: ContactWhereUniqueInput
    update?: XOR<XOR<ContactUpdateToOneWithWhereWithoutNotesInput, ContactUpdateWithoutNotesInput>, ContactUncheckedUpdateWithoutNotesInput>
  }

  export type UserUpdateOneRequiredWithoutCreatedNotesNestedInput = {
    create?: XOR<UserCreateWithoutCreatedNotesInput, UserUncheckedCreateWithoutCreatedNotesInput>
    connectOrCreate?: UserCreateOrConnectWithoutCreatedNotesInput
    upsert?: UserUpsertWithoutCreatedNotesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutCreatedNotesInput, UserUpdateWithoutCreatedNotesInput>, UserUncheckedUpdateWithoutCreatedNotesInput>
  }

  export type BranchCreateNestedOneWithoutContactsInput = {
    create?: XOR<BranchCreateWithoutContactsInput, BranchUncheckedCreateWithoutContactsInput>
    connectOrCreate?: BranchCreateOrConnectWithoutContactsInput
    connect?: BranchWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutContactFollowUpsInput = {
    create?: XOR<UserCreateWithoutContactFollowUpsInput, UserUncheckedCreateWithoutContactFollowUpsInput>
    connectOrCreate?: UserCreateOrConnectWithoutContactFollowUpsInput
    connect?: UserWhereUniqueInput
  }

  export type BranchCreateNestedOneWithoutPointOfContactInput = {
    create?: XOR<BranchCreateWithoutPointOfContactInput, BranchUncheckedCreateWithoutPointOfContactInput>
    connectOrCreate?: BranchCreateOrConnectWithoutPointOfContactInput
    connect?: BranchWhereUniqueInput
  }

  export type ActivityCreateNestedManyWithoutContactInput = {
    create?: XOR<ActivityCreateWithoutContactInput, ActivityUncheckedCreateWithoutContactInput> | ActivityCreateWithoutContactInput[] | ActivityUncheckedCreateWithoutContactInput[]
    connectOrCreate?: ActivityCreateOrConnectWithoutContactInput | ActivityCreateOrConnectWithoutContactInput[]
    createMany?: ActivityCreateManyContactInputEnvelope
    connect?: ActivityWhereUniqueInput | ActivityWhereUniqueInput[]
  }

  export type NoteCreateNestedManyWithoutContactInput = {
    create?: XOR<NoteCreateWithoutContactInput, NoteUncheckedCreateWithoutContactInput> | NoteCreateWithoutContactInput[] | NoteUncheckedCreateWithoutContactInput[]
    connectOrCreate?: NoteCreateOrConnectWithoutContactInput | NoteCreateOrConnectWithoutContactInput[]
    createMany?: NoteCreateManyContactInputEnvelope
    connect?: NoteWhereUniqueInput | NoteWhereUniqueInput[]
  }

  export type TagCreateNestedManyWithoutContactsInput = {
    create?: XOR<TagCreateWithoutContactsInput, TagUncheckedCreateWithoutContactsInput> | TagCreateWithoutContactsInput[] | TagUncheckedCreateWithoutContactsInput[]
    connectOrCreate?: TagCreateOrConnectWithoutContactsInput | TagCreateOrConnectWithoutContactsInput[]
    connect?: TagWhereUniqueInput | TagWhereUniqueInput[]
  }

  export type OrganisationCreateNestedOneWithoutContactsInput = {
    create?: XOR<OrganisationCreateWithoutContactsInput, OrganisationUncheckedCreateWithoutContactsInput>
    connectOrCreate?: OrganisationCreateOrConnectWithoutContactsInput
    connect?: OrganisationWhereUniqueInput
  }

  export type BranchUncheckedCreateNestedOneWithoutPointOfContactInput = {
    create?: XOR<BranchCreateWithoutPointOfContactInput, BranchUncheckedCreateWithoutPointOfContactInput>
    connectOrCreate?: BranchCreateOrConnectWithoutPointOfContactInput
    connect?: BranchWhereUniqueInput
  }

  export type ActivityUncheckedCreateNestedManyWithoutContactInput = {
    create?: XOR<ActivityCreateWithoutContactInput, ActivityUncheckedCreateWithoutContactInput> | ActivityCreateWithoutContactInput[] | ActivityUncheckedCreateWithoutContactInput[]
    connectOrCreate?: ActivityCreateOrConnectWithoutContactInput | ActivityCreateOrConnectWithoutContactInput[]
    createMany?: ActivityCreateManyContactInputEnvelope
    connect?: ActivityWhereUniqueInput | ActivityWhereUniqueInput[]
  }

  export type NoteUncheckedCreateNestedManyWithoutContactInput = {
    create?: XOR<NoteCreateWithoutContactInput, NoteUncheckedCreateWithoutContactInput> | NoteCreateWithoutContactInput[] | NoteUncheckedCreateWithoutContactInput[]
    connectOrCreate?: NoteCreateOrConnectWithoutContactInput | NoteCreateOrConnectWithoutContactInput[]
    createMany?: NoteCreateManyContactInputEnvelope
    connect?: NoteWhereUniqueInput | NoteWhereUniqueInput[]
  }

  export type TagUncheckedCreateNestedManyWithoutContactsInput = {
    create?: XOR<TagCreateWithoutContactsInput, TagUncheckedCreateWithoutContactsInput> | TagCreateWithoutContactsInput[] | TagUncheckedCreateWithoutContactsInput[]
    connectOrCreate?: TagCreateOrConnectWithoutContactsInput | TagCreateOrConnectWithoutContactsInput[]
    connect?: TagWhereUniqueInput | TagWhereUniqueInput[]
  }

  export type EnumContactTypeFieldUpdateOperationsInput = {
    set?: $Enums.ContactType
  }

  export type NullableEnumLeadSegmentFieldUpdateOperationsInput = {
    set?: $Enums.LeadSegment | null
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type BranchUpdateOneWithoutContactsNestedInput = {
    create?: XOR<BranchCreateWithoutContactsInput, BranchUncheckedCreateWithoutContactsInput>
    connectOrCreate?: BranchCreateOrConnectWithoutContactsInput
    upsert?: BranchUpsertWithoutContactsInput
    disconnect?: BranchWhereInput | boolean
    delete?: BranchWhereInput | boolean
    connect?: BranchWhereUniqueInput
    update?: XOR<XOR<BranchUpdateToOneWithWhereWithoutContactsInput, BranchUpdateWithoutContactsInput>, BranchUncheckedUpdateWithoutContactsInput>
  }

  export type UserUpdateOneWithoutContactFollowUpsNestedInput = {
    create?: XOR<UserCreateWithoutContactFollowUpsInput, UserUncheckedCreateWithoutContactFollowUpsInput>
    connectOrCreate?: UserCreateOrConnectWithoutContactFollowUpsInput
    upsert?: UserUpsertWithoutContactFollowUpsInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutContactFollowUpsInput, UserUpdateWithoutContactFollowUpsInput>, UserUncheckedUpdateWithoutContactFollowUpsInput>
  }

  export type BranchUpdateOneWithoutPointOfContactNestedInput = {
    create?: XOR<BranchCreateWithoutPointOfContactInput, BranchUncheckedCreateWithoutPointOfContactInput>
    connectOrCreate?: BranchCreateOrConnectWithoutPointOfContactInput
    upsert?: BranchUpsertWithoutPointOfContactInput
    disconnect?: BranchWhereInput | boolean
    delete?: BranchWhereInput | boolean
    connect?: BranchWhereUniqueInput
    update?: XOR<XOR<BranchUpdateToOneWithWhereWithoutPointOfContactInput, BranchUpdateWithoutPointOfContactInput>, BranchUncheckedUpdateWithoutPointOfContactInput>
  }

  export type ActivityUpdateManyWithoutContactNestedInput = {
    create?: XOR<ActivityCreateWithoutContactInput, ActivityUncheckedCreateWithoutContactInput> | ActivityCreateWithoutContactInput[] | ActivityUncheckedCreateWithoutContactInput[]
    connectOrCreate?: ActivityCreateOrConnectWithoutContactInput | ActivityCreateOrConnectWithoutContactInput[]
    upsert?: ActivityUpsertWithWhereUniqueWithoutContactInput | ActivityUpsertWithWhereUniqueWithoutContactInput[]
    createMany?: ActivityCreateManyContactInputEnvelope
    set?: ActivityWhereUniqueInput | ActivityWhereUniqueInput[]
    disconnect?: ActivityWhereUniqueInput | ActivityWhereUniqueInput[]
    delete?: ActivityWhereUniqueInput | ActivityWhereUniqueInput[]
    connect?: ActivityWhereUniqueInput | ActivityWhereUniqueInput[]
    update?: ActivityUpdateWithWhereUniqueWithoutContactInput | ActivityUpdateWithWhereUniqueWithoutContactInput[]
    updateMany?: ActivityUpdateManyWithWhereWithoutContactInput | ActivityUpdateManyWithWhereWithoutContactInput[]
    deleteMany?: ActivityScalarWhereInput | ActivityScalarWhereInput[]
  }

  export type NoteUpdateManyWithoutContactNestedInput = {
    create?: XOR<NoteCreateWithoutContactInput, NoteUncheckedCreateWithoutContactInput> | NoteCreateWithoutContactInput[] | NoteUncheckedCreateWithoutContactInput[]
    connectOrCreate?: NoteCreateOrConnectWithoutContactInput | NoteCreateOrConnectWithoutContactInput[]
    upsert?: NoteUpsertWithWhereUniqueWithoutContactInput | NoteUpsertWithWhereUniqueWithoutContactInput[]
    createMany?: NoteCreateManyContactInputEnvelope
    set?: NoteWhereUniqueInput | NoteWhereUniqueInput[]
    disconnect?: NoteWhereUniqueInput | NoteWhereUniqueInput[]
    delete?: NoteWhereUniqueInput | NoteWhereUniqueInput[]
    connect?: NoteWhereUniqueInput | NoteWhereUniqueInput[]
    update?: NoteUpdateWithWhereUniqueWithoutContactInput | NoteUpdateWithWhereUniqueWithoutContactInput[]
    updateMany?: NoteUpdateManyWithWhereWithoutContactInput | NoteUpdateManyWithWhereWithoutContactInput[]
    deleteMany?: NoteScalarWhereInput | NoteScalarWhereInput[]
  }

  export type TagUpdateManyWithoutContactsNestedInput = {
    create?: XOR<TagCreateWithoutContactsInput, TagUncheckedCreateWithoutContactsInput> | TagCreateWithoutContactsInput[] | TagUncheckedCreateWithoutContactsInput[]
    connectOrCreate?: TagCreateOrConnectWithoutContactsInput | TagCreateOrConnectWithoutContactsInput[]
    upsert?: TagUpsertWithWhereUniqueWithoutContactsInput | TagUpsertWithWhereUniqueWithoutContactsInput[]
    set?: TagWhereUniqueInput | TagWhereUniqueInput[]
    disconnect?: TagWhereUniqueInput | TagWhereUniqueInput[]
    delete?: TagWhereUniqueInput | TagWhereUniqueInput[]
    connect?: TagWhereUniqueInput | TagWhereUniqueInput[]
    update?: TagUpdateWithWhereUniqueWithoutContactsInput | TagUpdateWithWhereUniqueWithoutContactsInput[]
    updateMany?: TagUpdateManyWithWhereWithoutContactsInput | TagUpdateManyWithWhereWithoutContactsInput[]
    deleteMany?: TagScalarWhereInput | TagScalarWhereInput[]
  }

  export type OrganisationUpdateOneRequiredWithoutContactsNestedInput = {
    create?: XOR<OrganisationCreateWithoutContactsInput, OrganisationUncheckedCreateWithoutContactsInput>
    connectOrCreate?: OrganisationCreateOrConnectWithoutContactsInput
    upsert?: OrganisationUpsertWithoutContactsInput
    connect?: OrganisationWhereUniqueInput
    update?: XOR<XOR<OrganisationUpdateToOneWithWhereWithoutContactsInput, OrganisationUpdateWithoutContactsInput>, OrganisationUncheckedUpdateWithoutContactsInput>
  }

  export type BranchUncheckedUpdateOneWithoutPointOfContactNestedInput = {
    create?: XOR<BranchCreateWithoutPointOfContactInput, BranchUncheckedCreateWithoutPointOfContactInput>
    connectOrCreate?: BranchCreateOrConnectWithoutPointOfContactInput
    upsert?: BranchUpsertWithoutPointOfContactInput
    disconnect?: BranchWhereInput | boolean
    delete?: BranchWhereInput | boolean
    connect?: BranchWhereUniqueInput
    update?: XOR<XOR<BranchUpdateToOneWithWhereWithoutPointOfContactInput, BranchUpdateWithoutPointOfContactInput>, BranchUncheckedUpdateWithoutPointOfContactInput>
  }

  export type ActivityUncheckedUpdateManyWithoutContactNestedInput = {
    create?: XOR<ActivityCreateWithoutContactInput, ActivityUncheckedCreateWithoutContactInput> | ActivityCreateWithoutContactInput[] | ActivityUncheckedCreateWithoutContactInput[]
    connectOrCreate?: ActivityCreateOrConnectWithoutContactInput | ActivityCreateOrConnectWithoutContactInput[]
    upsert?: ActivityUpsertWithWhereUniqueWithoutContactInput | ActivityUpsertWithWhereUniqueWithoutContactInput[]
    createMany?: ActivityCreateManyContactInputEnvelope
    set?: ActivityWhereUniqueInput | ActivityWhereUniqueInput[]
    disconnect?: ActivityWhereUniqueInput | ActivityWhereUniqueInput[]
    delete?: ActivityWhereUniqueInput | ActivityWhereUniqueInput[]
    connect?: ActivityWhereUniqueInput | ActivityWhereUniqueInput[]
    update?: ActivityUpdateWithWhereUniqueWithoutContactInput | ActivityUpdateWithWhereUniqueWithoutContactInput[]
    updateMany?: ActivityUpdateManyWithWhereWithoutContactInput | ActivityUpdateManyWithWhereWithoutContactInput[]
    deleteMany?: ActivityScalarWhereInput | ActivityScalarWhereInput[]
  }

  export type NoteUncheckedUpdateManyWithoutContactNestedInput = {
    create?: XOR<NoteCreateWithoutContactInput, NoteUncheckedCreateWithoutContactInput> | NoteCreateWithoutContactInput[] | NoteUncheckedCreateWithoutContactInput[]
    connectOrCreate?: NoteCreateOrConnectWithoutContactInput | NoteCreateOrConnectWithoutContactInput[]
    upsert?: NoteUpsertWithWhereUniqueWithoutContactInput | NoteUpsertWithWhereUniqueWithoutContactInput[]
    createMany?: NoteCreateManyContactInputEnvelope
    set?: NoteWhereUniqueInput | NoteWhereUniqueInput[]
    disconnect?: NoteWhereUniqueInput | NoteWhereUniqueInput[]
    delete?: NoteWhereUniqueInput | NoteWhereUniqueInput[]
    connect?: NoteWhereUniqueInput | NoteWhereUniqueInput[]
    update?: NoteUpdateWithWhereUniqueWithoutContactInput | NoteUpdateWithWhereUniqueWithoutContactInput[]
    updateMany?: NoteUpdateManyWithWhereWithoutContactInput | NoteUpdateManyWithWhereWithoutContactInput[]
    deleteMany?: NoteScalarWhereInput | NoteScalarWhereInput[]
  }

  export type TagUncheckedUpdateManyWithoutContactsNestedInput = {
    create?: XOR<TagCreateWithoutContactsInput, TagUncheckedCreateWithoutContactsInput> | TagCreateWithoutContactsInput[] | TagUncheckedCreateWithoutContactsInput[]
    connectOrCreate?: TagCreateOrConnectWithoutContactsInput | TagCreateOrConnectWithoutContactsInput[]
    upsert?: TagUpsertWithWhereUniqueWithoutContactsInput | TagUpsertWithWhereUniqueWithoutContactsInput[]
    set?: TagWhereUniqueInput | TagWhereUniqueInput[]
    disconnect?: TagWhereUniqueInput | TagWhereUniqueInput[]
    delete?: TagWhereUniqueInput | TagWhereUniqueInput[]
    connect?: TagWhereUniqueInput | TagWhereUniqueInput[]
    update?: TagUpdateWithWhereUniqueWithoutContactsInput | TagUpdateWithWhereUniqueWithoutContactsInput[]
    updateMany?: TagUpdateManyWithWhereWithoutContactsInput | TagUpdateManyWithWhereWithoutContactsInput[]
    deleteMany?: TagScalarWhereInput | TagScalarWhereInput[]
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
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedEnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
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
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
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
    search?: string
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

  export type NestedEnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
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
    search?: string
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

  export type NestedEnumBranchTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.BranchType | EnumBranchTypeFieldRefInput<$PrismaModel>
    in?: $Enums.BranchType[] | ListEnumBranchTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.BranchType[] | ListEnumBranchTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumBranchTypeFilter<$PrismaModel> | $Enums.BranchType
  }

  export type NestedEnumBranchTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.BranchType | EnumBranchTypeFieldRefInput<$PrismaModel>
    in?: $Enums.BranchType[] | ListEnumBranchTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.BranchType[] | ListEnumBranchTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumBranchTypeWithAggregatesFilter<$PrismaModel> | $Enums.BranchType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumBranchTypeFilter<$PrismaModel>
    _max?: NestedEnumBranchTypeFilter<$PrismaModel>
  }

  export type NestedEnumTagTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.TagType | EnumTagTypeFieldRefInput<$PrismaModel>
    in?: $Enums.TagType[] | ListEnumTagTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.TagType[] | ListEnumTagTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumTagTypeFilter<$PrismaModel> | $Enums.TagType
  }

  export type NestedEnumTagTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TagType | EnumTagTypeFieldRefInput<$PrismaModel>
    in?: $Enums.TagType[] | ListEnumTagTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.TagType[] | ListEnumTagTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumTagTypeWithAggregatesFilter<$PrismaModel> | $Enums.TagType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTagTypeFilter<$PrismaModel>
    _max?: NestedEnumTagTypeFilter<$PrismaModel>
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedEnumActivityTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.ActivityType | EnumActivityTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ActivityType[] | ListEnumActivityTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ActivityType[] | ListEnumActivityTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumActivityTypeFilter<$PrismaModel> | $Enums.ActivityType
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedEnumActivityTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ActivityType | EnumActivityTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ActivityType[] | ListEnumActivityTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ActivityType[] | ListEnumActivityTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumActivityTypeWithAggregatesFilter<$PrismaModel> | $Enums.ActivityType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumActivityTypeFilter<$PrismaModel>
    _max?: NestedEnumActivityTypeFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedEnumNoteCategoryFilter<$PrismaModel = never> = {
    equals?: $Enums.NoteCategory | EnumNoteCategoryFieldRefInput<$PrismaModel>
    in?: $Enums.NoteCategory[] | ListEnumNoteCategoryFieldRefInput<$PrismaModel>
    notIn?: $Enums.NoteCategory[] | ListEnumNoteCategoryFieldRefInput<$PrismaModel>
    not?: NestedEnumNoteCategoryFilter<$PrismaModel> | $Enums.NoteCategory
  }

  export type NestedEnumNoteCategoryWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.NoteCategory | EnumNoteCategoryFieldRefInput<$PrismaModel>
    in?: $Enums.NoteCategory[] | ListEnumNoteCategoryFieldRefInput<$PrismaModel>
    notIn?: $Enums.NoteCategory[] | ListEnumNoteCategoryFieldRefInput<$PrismaModel>
    not?: NestedEnumNoteCategoryWithAggregatesFilter<$PrismaModel> | $Enums.NoteCategory
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumNoteCategoryFilter<$PrismaModel>
    _max?: NestedEnumNoteCategoryFilter<$PrismaModel>
  }

  export type NestedEnumContactTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.ContactType | EnumContactTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ContactType[] | ListEnumContactTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ContactType[] | ListEnumContactTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumContactTypeFilter<$PrismaModel> | $Enums.ContactType
  }

  export type NestedEnumLeadSegmentNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.LeadSegment | EnumLeadSegmentFieldRefInput<$PrismaModel> | null
    in?: $Enums.LeadSegment[] | ListEnumLeadSegmentFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.LeadSegment[] | ListEnumLeadSegmentFieldRefInput<$PrismaModel> | null
    not?: NestedEnumLeadSegmentNullableFilter<$PrismaModel> | $Enums.LeadSegment | null
  }

  export type NestedEnumContactTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ContactType | EnumContactTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ContactType[] | ListEnumContactTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ContactType[] | ListEnumContactTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumContactTypeWithAggregatesFilter<$PrismaModel> | $Enums.ContactType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumContactTypeFilter<$PrismaModel>
    _max?: NestedEnumContactTypeFilter<$PrismaModel>
  }

  export type NestedEnumLeadSegmentNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.LeadSegment | EnumLeadSegmentFieldRefInput<$PrismaModel> | null
    in?: $Enums.LeadSegment[] | ListEnumLeadSegmentFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.LeadSegment[] | ListEnumLeadSegmentFieldRefInput<$PrismaModel> | null
    not?: NestedEnumLeadSegmentNullableWithAggregatesFilter<$PrismaModel> | $Enums.LeadSegment | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumLeadSegmentNullableFilter<$PrismaModel>
    _max?: NestedEnumLeadSegmentNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type OrganisationCreateWithoutTeamInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    branches?: BranchCreateNestedManyWithoutOrganisationInput
    tags?: TagCreateNestedManyWithoutOrganisationsInput
    contactOrganisations?: OrganisationCreateNestedManyWithoutContactOrganisationInput
    contactOrganisation?: OrganisationCreateNestedOneWithoutContactOrganisationsInput
    createdTags?: TagCreateNestedManyWithoutCreatedOrganisationInput
    contacts?: ContactCreateNestedManyWithoutContactOrgInput
    createdSchedule?: ScheduleCreateNestedManyWithoutCreatedOrgInput
  }

  export type OrganisationUncheckedCreateWithoutTeamInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    contactOrgId?: string | null
    branches?: BranchUncheckedCreateNestedManyWithoutOrganisationInput
    tags?: TagUncheckedCreateNestedManyWithoutOrganisationsInput
    contactOrganisations?: OrganisationUncheckedCreateNestedManyWithoutContactOrganisationInput
    createdTags?: TagUncheckedCreateNestedManyWithoutCreatedOrganisationInput
    contacts?: ContactUncheckedCreateNestedManyWithoutContactOrgInput
    createdSchedule?: ScheduleUncheckedCreateNestedManyWithoutCreatedOrgInput
  }

  export type OrganisationCreateOrConnectWithoutTeamInput = {
    where: OrganisationWhereUniqueInput
    create: XOR<OrganisationCreateWithoutTeamInput, OrganisationUncheckedCreateWithoutTeamInput>
  }

  export type ActivityCreateWithoutAddedByInput = {
    id?: string
    title: string
    description: string
    needFollowUp?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    type?: $Enums.ActivityType
    followUpDate?: Date | string | null
    tags?: TagCreateNestedManyWithoutActivitiesInput
    contact: ContactCreateNestedOneWithoutActivitiesInput
    assignedTo?: UserCreateNestedOneWithoutActivityFollowUpsInput
    followUpActivity?: ActivityCreateNestedOneWithoutFollowUpActivitiesInput
    followUpActivities?: ActivityCreateNestedManyWithoutFollowUpActivityInput
  }

  export type ActivityUncheckedCreateWithoutAddedByInput = {
    id?: string
    title: string
    description: string
    needFollowUp?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    type?: $Enums.ActivityType
    contactId: string
    followUpDate?: Date | string | null
    assignedToId?: string | null
    followUpActivityId?: string | null
    tags?: TagUncheckedCreateNestedManyWithoutActivitiesInput
    followUpActivities?: ActivityUncheckedCreateNestedManyWithoutFollowUpActivityInput
  }

  export type ActivityCreateOrConnectWithoutAddedByInput = {
    where: ActivityWhereUniqueInput
    create: XOR<ActivityCreateWithoutAddedByInput, ActivityUncheckedCreateWithoutAddedByInput>
  }

  export type ActivityCreateManyAddedByInputEnvelope = {
    data: ActivityCreateManyAddedByInput | ActivityCreateManyAddedByInput[]
    skipDuplicates?: boolean
  }

  export type SessionCreateWithoutUserInput = {
    id?: string
    expiresAt: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    tokens?: TokenCreateNestedManyWithoutSessionInput
  }

  export type SessionUncheckedCreateWithoutUserInput = {
    id?: string
    expiresAt: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    tokens?: TokenUncheckedCreateNestedManyWithoutSessionInput
  }

  export type SessionCreateOrConnectWithoutUserInput = {
    where: SessionWhereUniqueInput
    create: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput>
  }

  export type SessionCreateManyUserInputEnvelope = {
    data: SessionCreateManyUserInput | SessionCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type TokenCreateWithoutUserInput = {
    id?: string
    scopes?: TokenCreatescopesInput | $Enums.Scope[]
    accessToken: string
    refreshToken?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    session: SessionCreateNestedOneWithoutTokensInput
  }

  export type TokenUncheckedCreateWithoutUserInput = {
    id?: string
    sessionId: string
    scopes?: TokenCreatescopesInput | $Enums.Scope[]
    accessToken: string
    refreshToken?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TokenCreateOrConnectWithoutUserInput = {
    where: TokenWhereUniqueInput
    create: XOR<TokenCreateWithoutUserInput, TokenUncheckedCreateWithoutUserInput>
  }

  export type TokenCreateManyUserInputEnvelope = {
    data: TokenCreateManyUserInput | TokenCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type ContactCreateWithoutAssignedToInput = {
    id?: string
    name: string
    email?: string | null
    phoneNumber: string
    alternateNumber?: string | null
    contactType: $Enums.ContactType
    leadSegment?: $Enums.LeadSegment | null
    leadScore?: number | null
    followUpFrequency?: number | null
    followUpOn?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    branch?: BranchCreateNestedOneWithoutContactsInput
    pocBranch?: BranchCreateNestedOneWithoutPointOfContactInput
    activities?: ActivityCreateNestedManyWithoutContactInput
    notes?: NoteCreateNestedManyWithoutContactInput
    tags?: TagCreateNestedManyWithoutContactsInput
    contactOrg: OrganisationCreateNestedOneWithoutContactsInput
  }

  export type ContactUncheckedCreateWithoutAssignedToInput = {
    id?: string
    name: string
    email?: string | null
    phoneNumber: string
    alternateNumber?: string | null
    branchId?: string | null
    contactType: $Enums.ContactType
    leadSegment?: $Enums.LeadSegment | null
    leadScore?: number | null
    followUpFrequency?: number | null
    followUpOn?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    contactOrgId: string
    pocBranch?: BranchUncheckedCreateNestedOneWithoutPointOfContactInput
    activities?: ActivityUncheckedCreateNestedManyWithoutContactInput
    notes?: NoteUncheckedCreateNestedManyWithoutContactInput
    tags?: TagUncheckedCreateNestedManyWithoutContactsInput
  }

  export type ContactCreateOrConnectWithoutAssignedToInput = {
    where: ContactWhereUniqueInput
    create: XOR<ContactCreateWithoutAssignedToInput, ContactUncheckedCreateWithoutAssignedToInput>
  }

  export type ContactCreateManyAssignedToInputEnvelope = {
    data: ContactCreateManyAssignedToInput | ContactCreateManyAssignedToInput[]
    skipDuplicates?: boolean
  }

  export type NoteCreateWithoutCreatedByInput = {
    id?: string
    title: string
    description: string
    category: $Enums.NoteCategory
    createdAt?: Date | string
    updatedAt?: Date | string
    contact: ContactCreateNestedOneWithoutNotesInput
  }

  export type NoteUncheckedCreateWithoutCreatedByInput = {
    id?: string
    title: string
    description: string
    category: $Enums.NoteCategory
    createdAt?: Date | string
    updatedAt?: Date | string
    contactId: string
  }

  export type NoteCreateOrConnectWithoutCreatedByInput = {
    where: NoteWhereUniqueInput
    create: XOR<NoteCreateWithoutCreatedByInput, NoteUncheckedCreateWithoutCreatedByInput>
  }

  export type NoteCreateManyCreatedByInputEnvelope = {
    data: NoteCreateManyCreatedByInput | NoteCreateManyCreatedByInput[]
    skipDuplicates?: boolean
  }

  export type ActivityCreateWithoutAssignedToInput = {
    id?: string
    title: string
    description: string
    needFollowUp?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    type?: $Enums.ActivityType
    followUpDate?: Date | string | null
    addedBy: UserCreateNestedOneWithoutAddedActivitiesInput
    tags?: TagCreateNestedManyWithoutActivitiesInput
    contact: ContactCreateNestedOneWithoutActivitiesInput
    followUpActivity?: ActivityCreateNestedOneWithoutFollowUpActivitiesInput
    followUpActivities?: ActivityCreateNestedManyWithoutFollowUpActivityInput
  }

  export type ActivityUncheckedCreateWithoutAssignedToInput = {
    id?: string
    title: string
    description: string
    addedById: string
    needFollowUp?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    type?: $Enums.ActivityType
    contactId: string
    followUpDate?: Date | string | null
    followUpActivityId?: string | null
    tags?: TagUncheckedCreateNestedManyWithoutActivitiesInput
    followUpActivities?: ActivityUncheckedCreateNestedManyWithoutFollowUpActivityInput
  }

  export type ActivityCreateOrConnectWithoutAssignedToInput = {
    where: ActivityWhereUniqueInput
    create: XOR<ActivityCreateWithoutAssignedToInput, ActivityUncheckedCreateWithoutAssignedToInput>
  }

  export type ActivityCreateManyAssignedToInputEnvelope = {
    data: ActivityCreateManyAssignedToInput | ActivityCreateManyAssignedToInput[]
    skipDuplicates?: boolean
  }

  export type OrganisationUpsertWithoutTeamInput = {
    update: XOR<OrganisationUpdateWithoutTeamInput, OrganisationUncheckedUpdateWithoutTeamInput>
    create: XOR<OrganisationCreateWithoutTeamInput, OrganisationUncheckedCreateWithoutTeamInput>
    where?: OrganisationWhereInput
  }

  export type OrganisationUpdateToOneWithWhereWithoutTeamInput = {
    where?: OrganisationWhereInput
    data: XOR<OrganisationUpdateWithoutTeamInput, OrganisationUncheckedUpdateWithoutTeamInput>
  }

  export type OrganisationUpdateWithoutTeamInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    branches?: BranchUpdateManyWithoutOrganisationNestedInput
    tags?: TagUpdateManyWithoutOrganisationsNestedInput
    contactOrganisations?: OrganisationUpdateManyWithoutContactOrganisationNestedInput
    contactOrganisation?: OrganisationUpdateOneWithoutContactOrganisationsNestedInput
    createdTags?: TagUpdateManyWithoutCreatedOrganisationNestedInput
    contacts?: ContactUpdateManyWithoutContactOrgNestedInput
    createdSchedule?: ScheduleUpdateManyWithoutCreatedOrgNestedInput
  }

  export type OrganisationUncheckedUpdateWithoutTeamInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    contactOrgId?: NullableStringFieldUpdateOperationsInput | string | null
    branches?: BranchUncheckedUpdateManyWithoutOrganisationNestedInput
    tags?: TagUncheckedUpdateManyWithoutOrganisationsNestedInput
    contactOrganisations?: OrganisationUncheckedUpdateManyWithoutContactOrganisationNestedInput
    createdTags?: TagUncheckedUpdateManyWithoutCreatedOrganisationNestedInput
    contacts?: ContactUncheckedUpdateManyWithoutContactOrgNestedInput
    createdSchedule?: ScheduleUncheckedUpdateManyWithoutCreatedOrgNestedInput
  }

  export type ActivityUpsertWithWhereUniqueWithoutAddedByInput = {
    where: ActivityWhereUniqueInput
    update: XOR<ActivityUpdateWithoutAddedByInput, ActivityUncheckedUpdateWithoutAddedByInput>
    create: XOR<ActivityCreateWithoutAddedByInput, ActivityUncheckedCreateWithoutAddedByInput>
  }

  export type ActivityUpdateWithWhereUniqueWithoutAddedByInput = {
    where: ActivityWhereUniqueInput
    data: XOR<ActivityUpdateWithoutAddedByInput, ActivityUncheckedUpdateWithoutAddedByInput>
  }

  export type ActivityUpdateManyWithWhereWithoutAddedByInput = {
    where: ActivityScalarWhereInput
    data: XOR<ActivityUpdateManyMutationInput, ActivityUncheckedUpdateManyWithoutAddedByInput>
  }

  export type ActivityScalarWhereInput = {
    AND?: ActivityScalarWhereInput | ActivityScalarWhereInput[]
    OR?: ActivityScalarWhereInput[]
    NOT?: ActivityScalarWhereInput | ActivityScalarWhereInput[]
    id?: StringFilter<"Activity"> | string
    title?: StringFilter<"Activity"> | string
    description?: StringFilter<"Activity"> | string
    addedById?: StringFilter<"Activity"> | string
    needFollowUp?: BoolFilter<"Activity"> | boolean
    createdAt?: DateTimeFilter<"Activity"> | Date | string
    updatedAt?: DateTimeFilter<"Activity"> | Date | string
    type?: EnumActivityTypeFilter<"Activity"> | $Enums.ActivityType
    contactId?: StringFilter<"Activity"> | string
    followUpDate?: DateTimeNullableFilter<"Activity"> | Date | string | null
    assignedToId?: StringNullableFilter<"Activity"> | string | null
    followUpActivityId?: StringNullableFilter<"Activity"> | string | null
  }

  export type SessionUpsertWithWhereUniqueWithoutUserInput = {
    where: SessionWhereUniqueInput
    update: XOR<SessionUpdateWithoutUserInput, SessionUncheckedUpdateWithoutUserInput>
    create: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput>
  }

  export type SessionUpdateWithWhereUniqueWithoutUserInput = {
    where: SessionWhereUniqueInput
    data: XOR<SessionUpdateWithoutUserInput, SessionUncheckedUpdateWithoutUserInput>
  }

  export type SessionUpdateManyWithWhereWithoutUserInput = {
    where: SessionScalarWhereInput
    data: XOR<SessionUpdateManyMutationInput, SessionUncheckedUpdateManyWithoutUserInput>
  }

  export type SessionScalarWhereInput = {
    AND?: SessionScalarWhereInput | SessionScalarWhereInput[]
    OR?: SessionScalarWhereInput[]
    NOT?: SessionScalarWhereInput | SessionScalarWhereInput[]
    id?: StringFilter<"Session"> | string
    userId?: StringFilter<"Session"> | string
    expiresAt?: DateTimeFilter<"Session"> | Date | string
    createdAt?: DateTimeFilter<"Session"> | Date | string
    updatedAt?: DateTimeFilter<"Session"> | Date | string
  }

  export type TokenUpsertWithWhereUniqueWithoutUserInput = {
    where: TokenWhereUniqueInput
    update: XOR<TokenUpdateWithoutUserInput, TokenUncheckedUpdateWithoutUserInput>
    create: XOR<TokenCreateWithoutUserInput, TokenUncheckedCreateWithoutUserInput>
  }

  export type TokenUpdateWithWhereUniqueWithoutUserInput = {
    where: TokenWhereUniqueInput
    data: XOR<TokenUpdateWithoutUserInput, TokenUncheckedUpdateWithoutUserInput>
  }

  export type TokenUpdateManyWithWhereWithoutUserInput = {
    where: TokenScalarWhereInput
    data: XOR<TokenUpdateManyMutationInput, TokenUncheckedUpdateManyWithoutUserInput>
  }

  export type TokenScalarWhereInput = {
    AND?: TokenScalarWhereInput | TokenScalarWhereInput[]
    OR?: TokenScalarWhereInput[]
    NOT?: TokenScalarWhereInput | TokenScalarWhereInput[]
    id?: StringFilter<"Token"> | string
    userId?: StringFilter<"Token"> | string
    sessionId?: StringFilter<"Token"> | string
    scopes?: EnumScopeNullableListFilter<"Token">
    accessToken?: StringFilter<"Token"> | string
    refreshToken?: StringNullableFilter<"Token"> | string | null
    createdAt?: DateTimeFilter<"Token"> | Date | string
    updatedAt?: DateTimeFilter<"Token"> | Date | string
  }

  export type ContactUpsertWithWhereUniqueWithoutAssignedToInput = {
    where: ContactWhereUniqueInput
    update: XOR<ContactUpdateWithoutAssignedToInput, ContactUncheckedUpdateWithoutAssignedToInput>
    create: XOR<ContactCreateWithoutAssignedToInput, ContactUncheckedCreateWithoutAssignedToInput>
  }

  export type ContactUpdateWithWhereUniqueWithoutAssignedToInput = {
    where: ContactWhereUniqueInput
    data: XOR<ContactUpdateWithoutAssignedToInput, ContactUncheckedUpdateWithoutAssignedToInput>
  }

  export type ContactUpdateManyWithWhereWithoutAssignedToInput = {
    where: ContactScalarWhereInput
    data: XOR<ContactUpdateManyMutationInput, ContactUncheckedUpdateManyWithoutAssignedToInput>
  }

  export type ContactScalarWhereInput = {
    AND?: ContactScalarWhereInput | ContactScalarWhereInput[]
    OR?: ContactScalarWhereInput[]
    NOT?: ContactScalarWhereInput | ContactScalarWhereInput[]
    id?: StringFilter<"Contact"> | string
    name?: StringFilter<"Contact"> | string
    email?: StringNullableFilter<"Contact"> | string | null
    phoneNumber?: StringFilter<"Contact"> | string
    alternateNumber?: StringNullableFilter<"Contact"> | string | null
    branchId?: StringNullableFilter<"Contact"> | string | null
    contactType?: EnumContactTypeFilter<"Contact"> | $Enums.ContactType
    leadSegment?: EnumLeadSegmentNullableFilter<"Contact"> | $Enums.LeadSegment | null
    leadScore?: IntNullableFilter<"Contact"> | number | null
    followUpFrequency?: IntNullableFilter<"Contact"> | number | null
    followUpOn?: DateTimeNullableFilter<"Contact"> | Date | string | null
    assignedToId?: StringNullableFilter<"Contact"> | string | null
    createdAt?: DateTimeFilter<"Contact"> | Date | string
    updatedAt?: DateTimeFilter<"Contact"> | Date | string
    contactOrgId?: StringFilter<"Contact"> | string
  }

  export type NoteUpsertWithWhereUniqueWithoutCreatedByInput = {
    where: NoteWhereUniqueInput
    update: XOR<NoteUpdateWithoutCreatedByInput, NoteUncheckedUpdateWithoutCreatedByInput>
    create: XOR<NoteCreateWithoutCreatedByInput, NoteUncheckedCreateWithoutCreatedByInput>
  }

  export type NoteUpdateWithWhereUniqueWithoutCreatedByInput = {
    where: NoteWhereUniqueInput
    data: XOR<NoteUpdateWithoutCreatedByInput, NoteUncheckedUpdateWithoutCreatedByInput>
  }

  export type NoteUpdateManyWithWhereWithoutCreatedByInput = {
    where: NoteScalarWhereInput
    data: XOR<NoteUpdateManyMutationInput, NoteUncheckedUpdateManyWithoutCreatedByInput>
  }

  export type NoteScalarWhereInput = {
    AND?: NoteScalarWhereInput | NoteScalarWhereInput[]
    OR?: NoteScalarWhereInput[]
    NOT?: NoteScalarWhereInput | NoteScalarWhereInput[]
    id?: StringFilter<"Note"> | string
    title?: StringFilter<"Note"> | string
    description?: StringFilter<"Note"> | string
    category?: EnumNoteCategoryFilter<"Note"> | $Enums.NoteCategory
    createdAt?: DateTimeFilter<"Note"> | Date | string
    updatedAt?: DateTimeFilter<"Note"> | Date | string
    contactId?: StringFilter<"Note"> | string
    createdById?: StringFilter<"Note"> | string
  }

  export type ActivityUpsertWithWhereUniqueWithoutAssignedToInput = {
    where: ActivityWhereUniqueInput
    update: XOR<ActivityUpdateWithoutAssignedToInput, ActivityUncheckedUpdateWithoutAssignedToInput>
    create: XOR<ActivityCreateWithoutAssignedToInput, ActivityUncheckedCreateWithoutAssignedToInput>
  }

  export type ActivityUpdateWithWhereUniqueWithoutAssignedToInput = {
    where: ActivityWhereUniqueInput
    data: XOR<ActivityUpdateWithoutAssignedToInput, ActivityUncheckedUpdateWithoutAssignedToInput>
  }

  export type ActivityUpdateManyWithWhereWithoutAssignedToInput = {
    where: ActivityScalarWhereInput
    data: XOR<ActivityUpdateManyMutationInput, ActivityUncheckedUpdateManyWithoutAssignedToInput>
  }

  export type UserCreateWithoutSessionsInput = {
    id?: string
    firstName: string
    lastName: string
    email: string
    password: string
    countryCode: string
    phoneNumber: string
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    organisation?: OrganisationCreateNestedOneWithoutTeamInput
    addedActivities?: ActivityCreateNestedManyWithoutAddedByInput
    tokens?: TokenCreateNestedManyWithoutUserInput
    contactFollowUps?: ContactCreateNestedManyWithoutAssignedToInput
    createdNotes?: NoteCreateNestedManyWithoutCreatedByInput
    activityFollowUps?: ActivityCreateNestedManyWithoutAssignedToInput
  }

  export type UserUncheckedCreateWithoutSessionsInput = {
    id?: string
    firstName: string
    lastName: string
    email: string
    password: string
    countryCode: string
    phoneNumber: string
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    organisationId?: string | null
    addedActivities?: ActivityUncheckedCreateNestedManyWithoutAddedByInput
    tokens?: TokenUncheckedCreateNestedManyWithoutUserInput
    contactFollowUps?: ContactUncheckedCreateNestedManyWithoutAssignedToInput
    createdNotes?: NoteUncheckedCreateNestedManyWithoutCreatedByInput
    activityFollowUps?: ActivityUncheckedCreateNestedManyWithoutAssignedToInput
  }

  export type UserCreateOrConnectWithoutSessionsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
  }

  export type TokenCreateWithoutSessionInput = {
    id?: string
    scopes?: TokenCreatescopesInput | $Enums.Scope[]
    accessToken: string
    refreshToken?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutTokensInput
  }

  export type TokenUncheckedCreateWithoutSessionInput = {
    id?: string
    userId: string
    scopes?: TokenCreatescopesInput | $Enums.Scope[]
    accessToken: string
    refreshToken?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TokenCreateOrConnectWithoutSessionInput = {
    where: TokenWhereUniqueInput
    create: XOR<TokenCreateWithoutSessionInput, TokenUncheckedCreateWithoutSessionInput>
  }

  export type TokenCreateManySessionInputEnvelope = {
    data: TokenCreateManySessionInput | TokenCreateManySessionInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutSessionsInput = {
    update: XOR<UserUpdateWithoutSessionsInput, UserUncheckedUpdateWithoutSessionsInput>
    create: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutSessionsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutSessionsInput, UserUncheckedUpdateWithoutSessionsInput>
  }

  export type UserUpdateWithoutSessionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    countryCode?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    organisation?: OrganisationUpdateOneWithoutTeamNestedInput
    addedActivities?: ActivityUpdateManyWithoutAddedByNestedInput
    tokens?: TokenUpdateManyWithoutUserNestedInput
    contactFollowUps?: ContactUpdateManyWithoutAssignedToNestedInput
    createdNotes?: NoteUpdateManyWithoutCreatedByNestedInput
    activityFollowUps?: ActivityUpdateManyWithoutAssignedToNestedInput
  }

  export type UserUncheckedUpdateWithoutSessionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    countryCode?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    organisationId?: NullableStringFieldUpdateOperationsInput | string | null
    addedActivities?: ActivityUncheckedUpdateManyWithoutAddedByNestedInput
    tokens?: TokenUncheckedUpdateManyWithoutUserNestedInput
    contactFollowUps?: ContactUncheckedUpdateManyWithoutAssignedToNestedInput
    createdNotes?: NoteUncheckedUpdateManyWithoutCreatedByNestedInput
    activityFollowUps?: ActivityUncheckedUpdateManyWithoutAssignedToNestedInput
  }

  export type TokenUpsertWithWhereUniqueWithoutSessionInput = {
    where: TokenWhereUniqueInput
    update: XOR<TokenUpdateWithoutSessionInput, TokenUncheckedUpdateWithoutSessionInput>
    create: XOR<TokenCreateWithoutSessionInput, TokenUncheckedCreateWithoutSessionInput>
  }

  export type TokenUpdateWithWhereUniqueWithoutSessionInput = {
    where: TokenWhereUniqueInput
    data: XOR<TokenUpdateWithoutSessionInput, TokenUncheckedUpdateWithoutSessionInput>
  }

  export type TokenUpdateManyWithWhereWithoutSessionInput = {
    where: TokenScalarWhereInput
    data: XOR<TokenUpdateManyMutationInput, TokenUncheckedUpdateManyWithoutSessionInput>
  }

  export type SessionCreateWithoutTokensInput = {
    id?: string
    expiresAt: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutSessionsInput
  }

  export type SessionUncheckedCreateWithoutTokensInput = {
    id?: string
    userId: string
    expiresAt: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SessionCreateOrConnectWithoutTokensInput = {
    where: SessionWhereUniqueInput
    create: XOR<SessionCreateWithoutTokensInput, SessionUncheckedCreateWithoutTokensInput>
  }

  export type UserCreateWithoutTokensInput = {
    id?: string
    firstName: string
    lastName: string
    email: string
    password: string
    countryCode: string
    phoneNumber: string
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    organisation?: OrganisationCreateNestedOneWithoutTeamInput
    addedActivities?: ActivityCreateNestedManyWithoutAddedByInput
    sessions?: SessionCreateNestedManyWithoutUserInput
    contactFollowUps?: ContactCreateNestedManyWithoutAssignedToInput
    createdNotes?: NoteCreateNestedManyWithoutCreatedByInput
    activityFollowUps?: ActivityCreateNestedManyWithoutAssignedToInput
  }

  export type UserUncheckedCreateWithoutTokensInput = {
    id?: string
    firstName: string
    lastName: string
    email: string
    password: string
    countryCode: string
    phoneNumber: string
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    organisationId?: string | null
    addedActivities?: ActivityUncheckedCreateNestedManyWithoutAddedByInput
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    contactFollowUps?: ContactUncheckedCreateNestedManyWithoutAssignedToInput
    createdNotes?: NoteUncheckedCreateNestedManyWithoutCreatedByInput
    activityFollowUps?: ActivityUncheckedCreateNestedManyWithoutAssignedToInput
  }

  export type UserCreateOrConnectWithoutTokensInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutTokensInput, UserUncheckedCreateWithoutTokensInput>
  }

  export type SessionUpsertWithoutTokensInput = {
    update: XOR<SessionUpdateWithoutTokensInput, SessionUncheckedUpdateWithoutTokensInput>
    create: XOR<SessionCreateWithoutTokensInput, SessionUncheckedCreateWithoutTokensInput>
    where?: SessionWhereInput
  }

  export type SessionUpdateToOneWithWhereWithoutTokensInput = {
    where?: SessionWhereInput
    data: XOR<SessionUpdateWithoutTokensInput, SessionUncheckedUpdateWithoutTokensInput>
  }

  export type SessionUpdateWithoutTokensInput = {
    id?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutSessionsNestedInput
  }

  export type SessionUncheckedUpdateWithoutTokensInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUpsertWithoutTokensInput = {
    update: XOR<UserUpdateWithoutTokensInput, UserUncheckedUpdateWithoutTokensInput>
    create: XOR<UserCreateWithoutTokensInput, UserUncheckedCreateWithoutTokensInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutTokensInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutTokensInput, UserUncheckedUpdateWithoutTokensInput>
  }

  export type UserUpdateWithoutTokensInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    countryCode?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    organisation?: OrganisationUpdateOneWithoutTeamNestedInput
    addedActivities?: ActivityUpdateManyWithoutAddedByNestedInput
    sessions?: SessionUpdateManyWithoutUserNestedInput
    contactFollowUps?: ContactUpdateManyWithoutAssignedToNestedInput
    createdNotes?: NoteUpdateManyWithoutCreatedByNestedInput
    activityFollowUps?: ActivityUpdateManyWithoutAssignedToNestedInput
  }

  export type UserUncheckedUpdateWithoutTokensInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    countryCode?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    organisationId?: NullableStringFieldUpdateOperationsInput | string | null
    addedActivities?: ActivityUncheckedUpdateManyWithoutAddedByNestedInput
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    contactFollowUps?: ContactUncheckedUpdateManyWithoutAssignedToNestedInput
    createdNotes?: NoteUncheckedUpdateManyWithoutCreatedByNestedInput
    activityFollowUps?: ActivityUncheckedUpdateManyWithoutAssignedToNestedInput
  }

  export type BranchCreateWithoutRegionInput = {
    id?: string
    address?: string | null
    city: string
    postalCode?: string | null
    landlineNumber?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    type: $Enums.BranchType
    organisation: OrganisationCreateNestedOneWithoutBranchesInput
    contacts?: ContactCreateNestedManyWithoutBranchInput
    pointOfContact?: ContactCreateNestedOneWithoutPocBranchInput
  }

  export type BranchUncheckedCreateWithoutRegionInput = {
    id?: string
    address?: string | null
    city: string
    postalCode?: string | null
    landlineNumber?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    organisationId: string
    type: $Enums.BranchType
    pointOfContactId?: string | null
    contacts?: ContactUncheckedCreateNestedManyWithoutBranchInput
  }

  export type BranchCreateOrConnectWithoutRegionInput = {
    where: BranchWhereUniqueInput
    create: XOR<BranchCreateWithoutRegionInput, BranchUncheckedCreateWithoutRegionInput>
  }

  export type BranchCreateManyRegionInputEnvelope = {
    data: BranchCreateManyRegionInput | BranchCreateManyRegionInput[]
    skipDuplicates?: boolean
  }

  export type ScheduleCreateWithoutRegionInput = {
    id?: string
    dayOfMonth: number
    createdAt?: Date | string
    updatedAt?: Date | string
    createdOrg: OrganisationCreateNestedOneWithoutCreatedScheduleInput
  }

  export type ScheduleUncheckedCreateWithoutRegionInput = {
    id?: string
    dayOfMonth: number
    createdOrgId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ScheduleCreateOrConnectWithoutRegionInput = {
    where: ScheduleWhereUniqueInput
    create: XOR<ScheduleCreateWithoutRegionInput, ScheduleUncheckedCreateWithoutRegionInput>
  }

  export type ScheduleCreateManyRegionInputEnvelope = {
    data: ScheduleCreateManyRegionInput | ScheduleCreateManyRegionInput[]
    skipDuplicates?: boolean
  }

  export type BranchUpsertWithWhereUniqueWithoutRegionInput = {
    where: BranchWhereUniqueInput
    update: XOR<BranchUpdateWithoutRegionInput, BranchUncheckedUpdateWithoutRegionInput>
    create: XOR<BranchCreateWithoutRegionInput, BranchUncheckedCreateWithoutRegionInput>
  }

  export type BranchUpdateWithWhereUniqueWithoutRegionInput = {
    where: BranchWhereUniqueInput
    data: XOR<BranchUpdateWithoutRegionInput, BranchUncheckedUpdateWithoutRegionInput>
  }

  export type BranchUpdateManyWithWhereWithoutRegionInput = {
    where: BranchScalarWhereInput
    data: XOR<BranchUpdateManyMutationInput, BranchUncheckedUpdateManyWithoutRegionInput>
  }

  export type BranchScalarWhereInput = {
    AND?: BranchScalarWhereInput | BranchScalarWhereInput[]
    OR?: BranchScalarWhereInput[]
    NOT?: BranchScalarWhereInput | BranchScalarWhereInput[]
    id?: StringFilter<"Branch"> | string
    address?: StringNullableFilter<"Branch"> | string | null
    city?: StringFilter<"Branch"> | string
    postalCode?: StringNullableFilter<"Branch"> | string | null
    landlineNumber?: StringNullableFilter<"Branch"> | string | null
    regionId?: StringFilter<"Branch"> | string
    createdAt?: DateTimeFilter<"Branch"> | Date | string
    updatedAt?: DateTimeFilter<"Branch"> | Date | string
    organisationId?: StringFilter<"Branch"> | string
    type?: EnumBranchTypeFilter<"Branch"> | $Enums.BranchType
    pointOfContactId?: StringNullableFilter<"Branch"> | string | null
  }

  export type ScheduleUpsertWithWhereUniqueWithoutRegionInput = {
    where: ScheduleWhereUniqueInput
    update: XOR<ScheduleUpdateWithoutRegionInput, ScheduleUncheckedUpdateWithoutRegionInput>
    create: XOR<ScheduleCreateWithoutRegionInput, ScheduleUncheckedCreateWithoutRegionInput>
  }

  export type ScheduleUpdateWithWhereUniqueWithoutRegionInput = {
    where: ScheduleWhereUniqueInput
    data: XOR<ScheduleUpdateWithoutRegionInput, ScheduleUncheckedUpdateWithoutRegionInput>
  }

  export type ScheduleUpdateManyWithWhereWithoutRegionInput = {
    where: ScheduleScalarWhereInput
    data: XOR<ScheduleUpdateManyMutationInput, ScheduleUncheckedUpdateManyWithoutRegionInput>
  }

  export type ScheduleScalarWhereInput = {
    AND?: ScheduleScalarWhereInput | ScheduleScalarWhereInput[]
    OR?: ScheduleScalarWhereInput[]
    NOT?: ScheduleScalarWhereInput | ScheduleScalarWhereInput[]
    id?: StringFilter<"Schedule"> | string
    regionId?: StringFilter<"Schedule"> | string
    dayOfMonth?: IntFilter<"Schedule"> | number
    createdOrgId?: StringFilter<"Schedule"> | string
    createdAt?: DateTimeFilter<"Schedule"> | Date | string
    updatedAt?: DateTimeFilter<"Schedule"> | Date | string
  }

  export type RegionCreateWithoutSchedulesInput = {
    id?: string
    name: string
    state: string
    country: string
    createdAt?: Date | string
    updatedAt?: Date | string
    branches?: BranchCreateNestedManyWithoutRegionInput
  }

  export type RegionUncheckedCreateWithoutSchedulesInput = {
    id?: string
    name: string
    state: string
    country: string
    createdAt?: Date | string
    updatedAt?: Date | string
    branches?: BranchUncheckedCreateNestedManyWithoutRegionInput
  }

  export type RegionCreateOrConnectWithoutSchedulesInput = {
    where: RegionWhereUniqueInput
    create: XOR<RegionCreateWithoutSchedulesInput, RegionUncheckedCreateWithoutSchedulesInput>
  }

  export type OrganisationCreateWithoutCreatedScheduleInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    team?: UserCreateNestedManyWithoutOrganisationInput
    branches?: BranchCreateNestedManyWithoutOrganisationInput
    tags?: TagCreateNestedManyWithoutOrganisationsInput
    contactOrganisations?: OrganisationCreateNestedManyWithoutContactOrganisationInput
    contactOrganisation?: OrganisationCreateNestedOneWithoutContactOrganisationsInput
    createdTags?: TagCreateNestedManyWithoutCreatedOrganisationInput
    contacts?: ContactCreateNestedManyWithoutContactOrgInput
  }

  export type OrganisationUncheckedCreateWithoutCreatedScheduleInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    contactOrgId?: string | null
    team?: UserUncheckedCreateNestedManyWithoutOrganisationInput
    branches?: BranchUncheckedCreateNestedManyWithoutOrganisationInput
    tags?: TagUncheckedCreateNestedManyWithoutOrganisationsInput
    contactOrganisations?: OrganisationUncheckedCreateNestedManyWithoutContactOrganisationInput
    createdTags?: TagUncheckedCreateNestedManyWithoutCreatedOrganisationInput
    contacts?: ContactUncheckedCreateNestedManyWithoutContactOrgInput
  }

  export type OrganisationCreateOrConnectWithoutCreatedScheduleInput = {
    where: OrganisationWhereUniqueInput
    create: XOR<OrganisationCreateWithoutCreatedScheduleInput, OrganisationUncheckedCreateWithoutCreatedScheduleInput>
  }

  export type RegionUpsertWithoutSchedulesInput = {
    update: XOR<RegionUpdateWithoutSchedulesInput, RegionUncheckedUpdateWithoutSchedulesInput>
    create: XOR<RegionCreateWithoutSchedulesInput, RegionUncheckedCreateWithoutSchedulesInput>
    where?: RegionWhereInput
  }

  export type RegionUpdateToOneWithWhereWithoutSchedulesInput = {
    where?: RegionWhereInput
    data: XOR<RegionUpdateWithoutSchedulesInput, RegionUncheckedUpdateWithoutSchedulesInput>
  }

  export type RegionUpdateWithoutSchedulesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    branches?: BranchUpdateManyWithoutRegionNestedInput
  }

  export type RegionUncheckedUpdateWithoutSchedulesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    branches?: BranchUncheckedUpdateManyWithoutRegionNestedInput
  }

  export type OrganisationUpsertWithoutCreatedScheduleInput = {
    update: XOR<OrganisationUpdateWithoutCreatedScheduleInput, OrganisationUncheckedUpdateWithoutCreatedScheduleInput>
    create: XOR<OrganisationCreateWithoutCreatedScheduleInput, OrganisationUncheckedCreateWithoutCreatedScheduleInput>
    where?: OrganisationWhereInput
  }

  export type OrganisationUpdateToOneWithWhereWithoutCreatedScheduleInput = {
    where?: OrganisationWhereInput
    data: XOR<OrganisationUpdateWithoutCreatedScheduleInput, OrganisationUncheckedUpdateWithoutCreatedScheduleInput>
  }

  export type OrganisationUpdateWithoutCreatedScheduleInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    team?: UserUpdateManyWithoutOrganisationNestedInput
    branches?: BranchUpdateManyWithoutOrganisationNestedInput
    tags?: TagUpdateManyWithoutOrganisationsNestedInput
    contactOrganisations?: OrganisationUpdateManyWithoutContactOrganisationNestedInput
    contactOrganisation?: OrganisationUpdateOneWithoutContactOrganisationsNestedInput
    createdTags?: TagUpdateManyWithoutCreatedOrganisationNestedInput
    contacts?: ContactUpdateManyWithoutContactOrgNestedInput
  }

  export type OrganisationUncheckedUpdateWithoutCreatedScheduleInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    contactOrgId?: NullableStringFieldUpdateOperationsInput | string | null
    team?: UserUncheckedUpdateManyWithoutOrganisationNestedInput
    branches?: BranchUncheckedUpdateManyWithoutOrganisationNestedInput
    tags?: TagUncheckedUpdateManyWithoutOrganisationsNestedInput
    contactOrganisations?: OrganisationUncheckedUpdateManyWithoutContactOrganisationNestedInput
    createdTags?: TagUncheckedUpdateManyWithoutCreatedOrganisationNestedInput
    contacts?: ContactUncheckedUpdateManyWithoutContactOrgNestedInput
  }

  export type RegionCreateWithoutBranchesInput = {
    id?: string
    name: string
    state: string
    country: string
    createdAt?: Date | string
    updatedAt?: Date | string
    schedules?: ScheduleCreateNestedManyWithoutRegionInput
  }

  export type RegionUncheckedCreateWithoutBranchesInput = {
    id?: string
    name: string
    state: string
    country: string
    createdAt?: Date | string
    updatedAt?: Date | string
    schedules?: ScheduleUncheckedCreateNestedManyWithoutRegionInput
  }

  export type RegionCreateOrConnectWithoutBranchesInput = {
    where: RegionWhereUniqueInput
    create: XOR<RegionCreateWithoutBranchesInput, RegionUncheckedCreateWithoutBranchesInput>
  }

  export type OrganisationCreateWithoutBranchesInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    team?: UserCreateNestedManyWithoutOrganisationInput
    tags?: TagCreateNestedManyWithoutOrganisationsInput
    contactOrganisations?: OrganisationCreateNestedManyWithoutContactOrganisationInput
    contactOrganisation?: OrganisationCreateNestedOneWithoutContactOrganisationsInput
    createdTags?: TagCreateNestedManyWithoutCreatedOrganisationInput
    contacts?: ContactCreateNestedManyWithoutContactOrgInput
    createdSchedule?: ScheduleCreateNestedManyWithoutCreatedOrgInput
  }

  export type OrganisationUncheckedCreateWithoutBranchesInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    contactOrgId?: string | null
    team?: UserUncheckedCreateNestedManyWithoutOrganisationInput
    tags?: TagUncheckedCreateNestedManyWithoutOrganisationsInput
    contactOrganisations?: OrganisationUncheckedCreateNestedManyWithoutContactOrganisationInput
    createdTags?: TagUncheckedCreateNestedManyWithoutCreatedOrganisationInput
    contacts?: ContactUncheckedCreateNestedManyWithoutContactOrgInput
    createdSchedule?: ScheduleUncheckedCreateNestedManyWithoutCreatedOrgInput
  }

  export type OrganisationCreateOrConnectWithoutBranchesInput = {
    where: OrganisationWhereUniqueInput
    create: XOR<OrganisationCreateWithoutBranchesInput, OrganisationUncheckedCreateWithoutBranchesInput>
  }

  export type ContactCreateWithoutBranchInput = {
    id?: string
    name: string
    email?: string | null
    phoneNumber: string
    alternateNumber?: string | null
    contactType: $Enums.ContactType
    leadSegment?: $Enums.LeadSegment | null
    leadScore?: number | null
    followUpFrequency?: number | null
    followUpOn?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    assignedTo?: UserCreateNestedOneWithoutContactFollowUpsInput
    pocBranch?: BranchCreateNestedOneWithoutPointOfContactInput
    activities?: ActivityCreateNestedManyWithoutContactInput
    notes?: NoteCreateNestedManyWithoutContactInput
    tags?: TagCreateNestedManyWithoutContactsInput
    contactOrg: OrganisationCreateNestedOneWithoutContactsInput
  }

  export type ContactUncheckedCreateWithoutBranchInput = {
    id?: string
    name: string
    email?: string | null
    phoneNumber: string
    alternateNumber?: string | null
    contactType: $Enums.ContactType
    leadSegment?: $Enums.LeadSegment | null
    leadScore?: number | null
    followUpFrequency?: number | null
    followUpOn?: Date | string | null
    assignedToId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    contactOrgId: string
    pocBranch?: BranchUncheckedCreateNestedOneWithoutPointOfContactInput
    activities?: ActivityUncheckedCreateNestedManyWithoutContactInput
    notes?: NoteUncheckedCreateNestedManyWithoutContactInput
    tags?: TagUncheckedCreateNestedManyWithoutContactsInput
  }

  export type ContactCreateOrConnectWithoutBranchInput = {
    where: ContactWhereUniqueInput
    create: XOR<ContactCreateWithoutBranchInput, ContactUncheckedCreateWithoutBranchInput>
  }

  export type ContactCreateManyBranchInputEnvelope = {
    data: ContactCreateManyBranchInput | ContactCreateManyBranchInput[]
    skipDuplicates?: boolean
  }

  export type ContactCreateWithoutPocBranchInput = {
    id?: string
    name: string
    email?: string | null
    phoneNumber: string
    alternateNumber?: string | null
    contactType: $Enums.ContactType
    leadSegment?: $Enums.LeadSegment | null
    leadScore?: number | null
    followUpFrequency?: number | null
    followUpOn?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    branch?: BranchCreateNestedOneWithoutContactsInput
    assignedTo?: UserCreateNestedOneWithoutContactFollowUpsInput
    activities?: ActivityCreateNestedManyWithoutContactInput
    notes?: NoteCreateNestedManyWithoutContactInput
    tags?: TagCreateNestedManyWithoutContactsInput
    contactOrg: OrganisationCreateNestedOneWithoutContactsInput
  }

  export type ContactUncheckedCreateWithoutPocBranchInput = {
    id?: string
    name: string
    email?: string | null
    phoneNumber: string
    alternateNumber?: string | null
    branchId?: string | null
    contactType: $Enums.ContactType
    leadSegment?: $Enums.LeadSegment | null
    leadScore?: number | null
    followUpFrequency?: number | null
    followUpOn?: Date | string | null
    assignedToId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    contactOrgId: string
    activities?: ActivityUncheckedCreateNestedManyWithoutContactInput
    notes?: NoteUncheckedCreateNestedManyWithoutContactInput
    tags?: TagUncheckedCreateNestedManyWithoutContactsInput
  }

  export type ContactCreateOrConnectWithoutPocBranchInput = {
    where: ContactWhereUniqueInput
    create: XOR<ContactCreateWithoutPocBranchInput, ContactUncheckedCreateWithoutPocBranchInput>
  }

  export type RegionUpsertWithoutBranchesInput = {
    update: XOR<RegionUpdateWithoutBranchesInput, RegionUncheckedUpdateWithoutBranchesInput>
    create: XOR<RegionCreateWithoutBranchesInput, RegionUncheckedCreateWithoutBranchesInput>
    where?: RegionWhereInput
  }

  export type RegionUpdateToOneWithWhereWithoutBranchesInput = {
    where?: RegionWhereInput
    data: XOR<RegionUpdateWithoutBranchesInput, RegionUncheckedUpdateWithoutBranchesInput>
  }

  export type RegionUpdateWithoutBranchesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    schedules?: ScheduleUpdateManyWithoutRegionNestedInput
  }

  export type RegionUncheckedUpdateWithoutBranchesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    schedules?: ScheduleUncheckedUpdateManyWithoutRegionNestedInput
  }

  export type OrganisationUpsertWithoutBranchesInput = {
    update: XOR<OrganisationUpdateWithoutBranchesInput, OrganisationUncheckedUpdateWithoutBranchesInput>
    create: XOR<OrganisationCreateWithoutBranchesInput, OrganisationUncheckedCreateWithoutBranchesInput>
    where?: OrganisationWhereInput
  }

  export type OrganisationUpdateToOneWithWhereWithoutBranchesInput = {
    where?: OrganisationWhereInput
    data: XOR<OrganisationUpdateWithoutBranchesInput, OrganisationUncheckedUpdateWithoutBranchesInput>
  }

  export type OrganisationUpdateWithoutBranchesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    team?: UserUpdateManyWithoutOrganisationNestedInput
    tags?: TagUpdateManyWithoutOrganisationsNestedInput
    contactOrganisations?: OrganisationUpdateManyWithoutContactOrganisationNestedInput
    contactOrganisation?: OrganisationUpdateOneWithoutContactOrganisationsNestedInput
    createdTags?: TagUpdateManyWithoutCreatedOrganisationNestedInput
    contacts?: ContactUpdateManyWithoutContactOrgNestedInput
    createdSchedule?: ScheduleUpdateManyWithoutCreatedOrgNestedInput
  }

  export type OrganisationUncheckedUpdateWithoutBranchesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    contactOrgId?: NullableStringFieldUpdateOperationsInput | string | null
    team?: UserUncheckedUpdateManyWithoutOrganisationNestedInput
    tags?: TagUncheckedUpdateManyWithoutOrganisationsNestedInput
    contactOrganisations?: OrganisationUncheckedUpdateManyWithoutContactOrganisationNestedInput
    createdTags?: TagUncheckedUpdateManyWithoutCreatedOrganisationNestedInput
    contacts?: ContactUncheckedUpdateManyWithoutContactOrgNestedInput
    createdSchedule?: ScheduleUncheckedUpdateManyWithoutCreatedOrgNestedInput
  }

  export type ContactUpsertWithWhereUniqueWithoutBranchInput = {
    where: ContactWhereUniqueInput
    update: XOR<ContactUpdateWithoutBranchInput, ContactUncheckedUpdateWithoutBranchInput>
    create: XOR<ContactCreateWithoutBranchInput, ContactUncheckedCreateWithoutBranchInput>
  }

  export type ContactUpdateWithWhereUniqueWithoutBranchInput = {
    where: ContactWhereUniqueInput
    data: XOR<ContactUpdateWithoutBranchInput, ContactUncheckedUpdateWithoutBranchInput>
  }

  export type ContactUpdateManyWithWhereWithoutBranchInput = {
    where: ContactScalarWhereInput
    data: XOR<ContactUpdateManyMutationInput, ContactUncheckedUpdateManyWithoutBranchInput>
  }

  export type ContactUpsertWithoutPocBranchInput = {
    update: XOR<ContactUpdateWithoutPocBranchInput, ContactUncheckedUpdateWithoutPocBranchInput>
    create: XOR<ContactCreateWithoutPocBranchInput, ContactUncheckedCreateWithoutPocBranchInput>
    where?: ContactWhereInput
  }

  export type ContactUpdateToOneWithWhereWithoutPocBranchInput = {
    where?: ContactWhereInput
    data: XOR<ContactUpdateWithoutPocBranchInput, ContactUncheckedUpdateWithoutPocBranchInput>
  }

  export type ContactUpdateWithoutPocBranchInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: StringFieldUpdateOperationsInput | string
    alternateNumber?: NullableStringFieldUpdateOperationsInput | string | null
    contactType?: EnumContactTypeFieldUpdateOperationsInput | $Enums.ContactType
    leadSegment?: NullableEnumLeadSegmentFieldUpdateOperationsInput | $Enums.LeadSegment | null
    leadScore?: NullableIntFieldUpdateOperationsInput | number | null
    followUpFrequency?: NullableIntFieldUpdateOperationsInput | number | null
    followUpOn?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    branch?: BranchUpdateOneWithoutContactsNestedInput
    assignedTo?: UserUpdateOneWithoutContactFollowUpsNestedInput
    activities?: ActivityUpdateManyWithoutContactNestedInput
    notes?: NoteUpdateManyWithoutContactNestedInput
    tags?: TagUpdateManyWithoutContactsNestedInput
    contactOrg?: OrganisationUpdateOneRequiredWithoutContactsNestedInput
  }

  export type ContactUncheckedUpdateWithoutPocBranchInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: StringFieldUpdateOperationsInput | string
    alternateNumber?: NullableStringFieldUpdateOperationsInput | string | null
    branchId?: NullableStringFieldUpdateOperationsInput | string | null
    contactType?: EnumContactTypeFieldUpdateOperationsInput | $Enums.ContactType
    leadSegment?: NullableEnumLeadSegmentFieldUpdateOperationsInput | $Enums.LeadSegment | null
    leadScore?: NullableIntFieldUpdateOperationsInput | number | null
    followUpFrequency?: NullableIntFieldUpdateOperationsInput | number | null
    followUpOn?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    assignedToId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    contactOrgId?: StringFieldUpdateOperationsInput | string
    activities?: ActivityUncheckedUpdateManyWithoutContactNestedInput
    notes?: NoteUncheckedUpdateManyWithoutContactNestedInput
    tags?: TagUncheckedUpdateManyWithoutContactsNestedInput
  }

  export type UserCreateWithoutOrganisationInput = {
    id?: string
    firstName: string
    lastName: string
    email: string
    password: string
    countryCode: string
    phoneNumber: string
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    addedActivities?: ActivityCreateNestedManyWithoutAddedByInput
    sessions?: SessionCreateNestedManyWithoutUserInput
    tokens?: TokenCreateNestedManyWithoutUserInput
    contactFollowUps?: ContactCreateNestedManyWithoutAssignedToInput
    createdNotes?: NoteCreateNestedManyWithoutCreatedByInput
    activityFollowUps?: ActivityCreateNestedManyWithoutAssignedToInput
  }

  export type UserUncheckedCreateWithoutOrganisationInput = {
    id?: string
    firstName: string
    lastName: string
    email: string
    password: string
    countryCode: string
    phoneNumber: string
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    addedActivities?: ActivityUncheckedCreateNestedManyWithoutAddedByInput
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    tokens?: TokenUncheckedCreateNestedManyWithoutUserInput
    contactFollowUps?: ContactUncheckedCreateNestedManyWithoutAssignedToInput
    createdNotes?: NoteUncheckedCreateNestedManyWithoutCreatedByInput
    activityFollowUps?: ActivityUncheckedCreateNestedManyWithoutAssignedToInput
  }

  export type UserCreateOrConnectWithoutOrganisationInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutOrganisationInput, UserUncheckedCreateWithoutOrganisationInput>
  }

  export type UserCreateManyOrganisationInputEnvelope = {
    data: UserCreateManyOrganisationInput | UserCreateManyOrganisationInput[]
    skipDuplicates?: boolean
  }

  export type BranchCreateWithoutOrganisationInput = {
    id?: string
    address?: string | null
    city: string
    postalCode?: string | null
    landlineNumber?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    type: $Enums.BranchType
    region: RegionCreateNestedOneWithoutBranchesInput
    contacts?: ContactCreateNestedManyWithoutBranchInput
    pointOfContact?: ContactCreateNestedOneWithoutPocBranchInput
  }

  export type BranchUncheckedCreateWithoutOrganisationInput = {
    id?: string
    address?: string | null
    city: string
    postalCode?: string | null
    landlineNumber?: string | null
    regionId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    type: $Enums.BranchType
    pointOfContactId?: string | null
    contacts?: ContactUncheckedCreateNestedManyWithoutBranchInput
  }

  export type BranchCreateOrConnectWithoutOrganisationInput = {
    where: BranchWhereUniqueInput
    create: XOR<BranchCreateWithoutOrganisationInput, BranchUncheckedCreateWithoutOrganisationInput>
  }

  export type BranchCreateManyOrganisationInputEnvelope = {
    data: BranchCreateManyOrganisationInput | BranchCreateManyOrganisationInput[]
    skipDuplicates?: boolean
  }

  export type TagCreateWithoutOrganisationsInput = {
    id?: string
    title: string
    description?: string | null
    tagType?: $Enums.TagType
    createdAt?: Date | string
    updatedAt?: Date | string
    createdOrganisation: OrganisationCreateNestedOneWithoutCreatedTagsInput
    activities?: ActivityCreateNestedManyWithoutTagsInput
    contacts?: ContactCreateNestedManyWithoutTagsInput
  }

  export type TagUncheckedCreateWithoutOrganisationsInput = {
    id?: string
    title: string
    description?: string | null
    tagType?: $Enums.TagType
    createdOrganisationId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    activities?: ActivityUncheckedCreateNestedManyWithoutTagsInput
    contacts?: ContactUncheckedCreateNestedManyWithoutTagsInput
  }

  export type TagCreateOrConnectWithoutOrganisationsInput = {
    where: TagWhereUniqueInput
    create: XOR<TagCreateWithoutOrganisationsInput, TagUncheckedCreateWithoutOrganisationsInput>
  }

  export type OrganisationCreateWithoutContactOrganisationInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    team?: UserCreateNestedManyWithoutOrganisationInput
    branches?: BranchCreateNestedManyWithoutOrganisationInput
    tags?: TagCreateNestedManyWithoutOrganisationsInput
    contactOrganisations?: OrganisationCreateNestedManyWithoutContactOrganisationInput
    createdTags?: TagCreateNestedManyWithoutCreatedOrganisationInput
    contacts?: ContactCreateNestedManyWithoutContactOrgInput
    createdSchedule?: ScheduleCreateNestedManyWithoutCreatedOrgInput
  }

  export type OrganisationUncheckedCreateWithoutContactOrganisationInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    team?: UserUncheckedCreateNestedManyWithoutOrganisationInput
    branches?: BranchUncheckedCreateNestedManyWithoutOrganisationInput
    tags?: TagUncheckedCreateNestedManyWithoutOrganisationsInput
    contactOrganisations?: OrganisationUncheckedCreateNestedManyWithoutContactOrganisationInput
    createdTags?: TagUncheckedCreateNestedManyWithoutCreatedOrganisationInput
    contacts?: ContactUncheckedCreateNestedManyWithoutContactOrgInput
    createdSchedule?: ScheduleUncheckedCreateNestedManyWithoutCreatedOrgInput
  }

  export type OrganisationCreateOrConnectWithoutContactOrganisationInput = {
    where: OrganisationWhereUniqueInput
    create: XOR<OrganisationCreateWithoutContactOrganisationInput, OrganisationUncheckedCreateWithoutContactOrganisationInput>
  }

  export type OrganisationCreateManyContactOrganisationInputEnvelope = {
    data: OrganisationCreateManyContactOrganisationInput | OrganisationCreateManyContactOrganisationInput[]
    skipDuplicates?: boolean
  }

  export type OrganisationCreateWithoutContactOrganisationsInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    team?: UserCreateNestedManyWithoutOrganisationInput
    branches?: BranchCreateNestedManyWithoutOrganisationInput
    tags?: TagCreateNestedManyWithoutOrganisationsInput
    contactOrganisation?: OrganisationCreateNestedOneWithoutContactOrganisationsInput
    createdTags?: TagCreateNestedManyWithoutCreatedOrganisationInput
    contacts?: ContactCreateNestedManyWithoutContactOrgInput
    createdSchedule?: ScheduleCreateNestedManyWithoutCreatedOrgInput
  }

  export type OrganisationUncheckedCreateWithoutContactOrganisationsInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    contactOrgId?: string | null
    team?: UserUncheckedCreateNestedManyWithoutOrganisationInput
    branches?: BranchUncheckedCreateNestedManyWithoutOrganisationInput
    tags?: TagUncheckedCreateNestedManyWithoutOrganisationsInput
    createdTags?: TagUncheckedCreateNestedManyWithoutCreatedOrganisationInput
    contacts?: ContactUncheckedCreateNestedManyWithoutContactOrgInput
    createdSchedule?: ScheduleUncheckedCreateNestedManyWithoutCreatedOrgInput
  }

  export type OrganisationCreateOrConnectWithoutContactOrganisationsInput = {
    where: OrganisationWhereUniqueInput
    create: XOR<OrganisationCreateWithoutContactOrganisationsInput, OrganisationUncheckedCreateWithoutContactOrganisationsInput>
  }

  export type TagCreateWithoutCreatedOrganisationInput = {
    id?: string
    title: string
    description?: string | null
    tagType?: $Enums.TagType
    createdAt?: Date | string
    updatedAt?: Date | string
    organisations?: OrganisationCreateNestedManyWithoutTagsInput
    activities?: ActivityCreateNestedManyWithoutTagsInput
    contacts?: ContactCreateNestedManyWithoutTagsInput
  }

  export type TagUncheckedCreateWithoutCreatedOrganisationInput = {
    id?: string
    title: string
    description?: string | null
    tagType?: $Enums.TagType
    createdAt?: Date | string
    updatedAt?: Date | string
    organisations?: OrganisationUncheckedCreateNestedManyWithoutTagsInput
    activities?: ActivityUncheckedCreateNestedManyWithoutTagsInput
    contacts?: ContactUncheckedCreateNestedManyWithoutTagsInput
  }

  export type TagCreateOrConnectWithoutCreatedOrganisationInput = {
    where: TagWhereUniqueInput
    create: XOR<TagCreateWithoutCreatedOrganisationInput, TagUncheckedCreateWithoutCreatedOrganisationInput>
  }

  export type TagCreateManyCreatedOrganisationInputEnvelope = {
    data: TagCreateManyCreatedOrganisationInput | TagCreateManyCreatedOrganisationInput[]
    skipDuplicates?: boolean
  }

  export type ContactCreateWithoutContactOrgInput = {
    id?: string
    name: string
    email?: string | null
    phoneNumber: string
    alternateNumber?: string | null
    contactType: $Enums.ContactType
    leadSegment?: $Enums.LeadSegment | null
    leadScore?: number | null
    followUpFrequency?: number | null
    followUpOn?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    branch?: BranchCreateNestedOneWithoutContactsInput
    assignedTo?: UserCreateNestedOneWithoutContactFollowUpsInput
    pocBranch?: BranchCreateNestedOneWithoutPointOfContactInput
    activities?: ActivityCreateNestedManyWithoutContactInput
    notes?: NoteCreateNestedManyWithoutContactInput
    tags?: TagCreateNestedManyWithoutContactsInput
  }

  export type ContactUncheckedCreateWithoutContactOrgInput = {
    id?: string
    name: string
    email?: string | null
    phoneNumber: string
    alternateNumber?: string | null
    branchId?: string | null
    contactType: $Enums.ContactType
    leadSegment?: $Enums.LeadSegment | null
    leadScore?: number | null
    followUpFrequency?: number | null
    followUpOn?: Date | string | null
    assignedToId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    pocBranch?: BranchUncheckedCreateNestedOneWithoutPointOfContactInput
    activities?: ActivityUncheckedCreateNestedManyWithoutContactInput
    notes?: NoteUncheckedCreateNestedManyWithoutContactInput
    tags?: TagUncheckedCreateNestedManyWithoutContactsInput
  }

  export type ContactCreateOrConnectWithoutContactOrgInput = {
    where: ContactWhereUniqueInput
    create: XOR<ContactCreateWithoutContactOrgInput, ContactUncheckedCreateWithoutContactOrgInput>
  }

  export type ContactCreateManyContactOrgInputEnvelope = {
    data: ContactCreateManyContactOrgInput | ContactCreateManyContactOrgInput[]
    skipDuplicates?: boolean
  }

  export type ScheduleCreateWithoutCreatedOrgInput = {
    id?: string
    dayOfMonth: number
    createdAt?: Date | string
    updatedAt?: Date | string
    region: RegionCreateNestedOneWithoutSchedulesInput
  }

  export type ScheduleUncheckedCreateWithoutCreatedOrgInput = {
    id?: string
    regionId: string
    dayOfMonth: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ScheduleCreateOrConnectWithoutCreatedOrgInput = {
    where: ScheduleWhereUniqueInput
    create: XOR<ScheduleCreateWithoutCreatedOrgInput, ScheduleUncheckedCreateWithoutCreatedOrgInput>
  }

  export type ScheduleCreateManyCreatedOrgInputEnvelope = {
    data: ScheduleCreateManyCreatedOrgInput | ScheduleCreateManyCreatedOrgInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithWhereUniqueWithoutOrganisationInput = {
    where: UserWhereUniqueInput
    update: XOR<UserUpdateWithoutOrganisationInput, UserUncheckedUpdateWithoutOrganisationInput>
    create: XOR<UserCreateWithoutOrganisationInput, UserUncheckedCreateWithoutOrganisationInput>
  }

  export type UserUpdateWithWhereUniqueWithoutOrganisationInput = {
    where: UserWhereUniqueInput
    data: XOR<UserUpdateWithoutOrganisationInput, UserUncheckedUpdateWithoutOrganisationInput>
  }

  export type UserUpdateManyWithWhereWithoutOrganisationInput = {
    where: UserScalarWhereInput
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyWithoutOrganisationInput>
  }

  export type UserScalarWhereInput = {
    AND?: UserScalarWhereInput | UserScalarWhereInput[]
    OR?: UserScalarWhereInput[]
    NOT?: UserScalarWhereInput | UserScalarWhereInput[]
    id?: StringFilter<"User"> | string
    firstName?: StringFilter<"User"> | string
    lastName?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    countryCode?: StringFilter<"User"> | string
    phoneNumber?: StringFilter<"User"> | string
    role?: EnumRoleFilter<"User"> | $Enums.Role
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    organisationId?: StringNullableFilter<"User"> | string | null
  }

  export type BranchUpsertWithWhereUniqueWithoutOrganisationInput = {
    where: BranchWhereUniqueInput
    update: XOR<BranchUpdateWithoutOrganisationInput, BranchUncheckedUpdateWithoutOrganisationInput>
    create: XOR<BranchCreateWithoutOrganisationInput, BranchUncheckedCreateWithoutOrganisationInput>
  }

  export type BranchUpdateWithWhereUniqueWithoutOrganisationInput = {
    where: BranchWhereUniqueInput
    data: XOR<BranchUpdateWithoutOrganisationInput, BranchUncheckedUpdateWithoutOrganisationInput>
  }

  export type BranchUpdateManyWithWhereWithoutOrganisationInput = {
    where: BranchScalarWhereInput
    data: XOR<BranchUpdateManyMutationInput, BranchUncheckedUpdateManyWithoutOrganisationInput>
  }

  export type TagUpsertWithWhereUniqueWithoutOrganisationsInput = {
    where: TagWhereUniqueInput
    update: XOR<TagUpdateWithoutOrganisationsInput, TagUncheckedUpdateWithoutOrganisationsInput>
    create: XOR<TagCreateWithoutOrganisationsInput, TagUncheckedCreateWithoutOrganisationsInput>
  }

  export type TagUpdateWithWhereUniqueWithoutOrganisationsInput = {
    where: TagWhereUniqueInput
    data: XOR<TagUpdateWithoutOrganisationsInput, TagUncheckedUpdateWithoutOrganisationsInput>
  }

  export type TagUpdateManyWithWhereWithoutOrganisationsInput = {
    where: TagScalarWhereInput
    data: XOR<TagUpdateManyMutationInput, TagUncheckedUpdateManyWithoutOrganisationsInput>
  }

  export type TagScalarWhereInput = {
    AND?: TagScalarWhereInput | TagScalarWhereInput[]
    OR?: TagScalarWhereInput[]
    NOT?: TagScalarWhereInput | TagScalarWhereInput[]
    id?: StringFilter<"Tag"> | string
    title?: StringFilter<"Tag"> | string
    description?: StringNullableFilter<"Tag"> | string | null
    tagType?: EnumTagTypeFilter<"Tag"> | $Enums.TagType
    createdOrganisationId?: StringFilter<"Tag"> | string
    createdAt?: DateTimeFilter<"Tag"> | Date | string
    updatedAt?: DateTimeFilter<"Tag"> | Date | string
  }

  export type OrganisationUpsertWithWhereUniqueWithoutContactOrganisationInput = {
    where: OrganisationWhereUniqueInput
    update: XOR<OrganisationUpdateWithoutContactOrganisationInput, OrganisationUncheckedUpdateWithoutContactOrganisationInput>
    create: XOR<OrganisationCreateWithoutContactOrganisationInput, OrganisationUncheckedCreateWithoutContactOrganisationInput>
  }

  export type OrganisationUpdateWithWhereUniqueWithoutContactOrganisationInput = {
    where: OrganisationWhereUniqueInput
    data: XOR<OrganisationUpdateWithoutContactOrganisationInput, OrganisationUncheckedUpdateWithoutContactOrganisationInput>
  }

  export type OrganisationUpdateManyWithWhereWithoutContactOrganisationInput = {
    where: OrganisationScalarWhereInput
    data: XOR<OrganisationUpdateManyMutationInput, OrganisationUncheckedUpdateManyWithoutContactOrganisationInput>
  }

  export type OrganisationScalarWhereInput = {
    AND?: OrganisationScalarWhereInput | OrganisationScalarWhereInput[]
    OR?: OrganisationScalarWhereInput[]
    NOT?: OrganisationScalarWhereInput | OrganisationScalarWhereInput[]
    id?: StringFilter<"Organisation"> | string
    name?: StringFilter<"Organisation"> | string
    createdAt?: DateTimeFilter<"Organisation"> | Date | string
    updatedAt?: DateTimeFilter<"Organisation"> | Date | string
    contactOrgId?: StringNullableFilter<"Organisation"> | string | null
  }

  export type OrganisationUpsertWithoutContactOrganisationsInput = {
    update: XOR<OrganisationUpdateWithoutContactOrganisationsInput, OrganisationUncheckedUpdateWithoutContactOrganisationsInput>
    create: XOR<OrganisationCreateWithoutContactOrganisationsInput, OrganisationUncheckedCreateWithoutContactOrganisationsInput>
    where?: OrganisationWhereInput
  }

  export type OrganisationUpdateToOneWithWhereWithoutContactOrganisationsInput = {
    where?: OrganisationWhereInput
    data: XOR<OrganisationUpdateWithoutContactOrganisationsInput, OrganisationUncheckedUpdateWithoutContactOrganisationsInput>
  }

  export type OrganisationUpdateWithoutContactOrganisationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    team?: UserUpdateManyWithoutOrganisationNestedInput
    branches?: BranchUpdateManyWithoutOrganisationNestedInput
    tags?: TagUpdateManyWithoutOrganisationsNestedInput
    contactOrganisation?: OrganisationUpdateOneWithoutContactOrganisationsNestedInput
    createdTags?: TagUpdateManyWithoutCreatedOrganisationNestedInput
    contacts?: ContactUpdateManyWithoutContactOrgNestedInput
    createdSchedule?: ScheduleUpdateManyWithoutCreatedOrgNestedInput
  }

  export type OrganisationUncheckedUpdateWithoutContactOrganisationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    contactOrgId?: NullableStringFieldUpdateOperationsInput | string | null
    team?: UserUncheckedUpdateManyWithoutOrganisationNestedInput
    branches?: BranchUncheckedUpdateManyWithoutOrganisationNestedInput
    tags?: TagUncheckedUpdateManyWithoutOrganisationsNestedInput
    createdTags?: TagUncheckedUpdateManyWithoutCreatedOrganisationNestedInput
    contacts?: ContactUncheckedUpdateManyWithoutContactOrgNestedInput
    createdSchedule?: ScheduleUncheckedUpdateManyWithoutCreatedOrgNestedInput
  }

  export type TagUpsertWithWhereUniqueWithoutCreatedOrganisationInput = {
    where: TagWhereUniqueInput
    update: XOR<TagUpdateWithoutCreatedOrganisationInput, TagUncheckedUpdateWithoutCreatedOrganisationInput>
    create: XOR<TagCreateWithoutCreatedOrganisationInput, TagUncheckedCreateWithoutCreatedOrganisationInput>
  }

  export type TagUpdateWithWhereUniqueWithoutCreatedOrganisationInput = {
    where: TagWhereUniqueInput
    data: XOR<TagUpdateWithoutCreatedOrganisationInput, TagUncheckedUpdateWithoutCreatedOrganisationInput>
  }

  export type TagUpdateManyWithWhereWithoutCreatedOrganisationInput = {
    where: TagScalarWhereInput
    data: XOR<TagUpdateManyMutationInput, TagUncheckedUpdateManyWithoutCreatedOrganisationInput>
  }

  export type ContactUpsertWithWhereUniqueWithoutContactOrgInput = {
    where: ContactWhereUniqueInput
    update: XOR<ContactUpdateWithoutContactOrgInput, ContactUncheckedUpdateWithoutContactOrgInput>
    create: XOR<ContactCreateWithoutContactOrgInput, ContactUncheckedCreateWithoutContactOrgInput>
  }

  export type ContactUpdateWithWhereUniqueWithoutContactOrgInput = {
    where: ContactWhereUniqueInput
    data: XOR<ContactUpdateWithoutContactOrgInput, ContactUncheckedUpdateWithoutContactOrgInput>
  }

  export type ContactUpdateManyWithWhereWithoutContactOrgInput = {
    where: ContactScalarWhereInput
    data: XOR<ContactUpdateManyMutationInput, ContactUncheckedUpdateManyWithoutContactOrgInput>
  }

  export type ScheduleUpsertWithWhereUniqueWithoutCreatedOrgInput = {
    where: ScheduleWhereUniqueInput
    update: XOR<ScheduleUpdateWithoutCreatedOrgInput, ScheduleUncheckedUpdateWithoutCreatedOrgInput>
    create: XOR<ScheduleCreateWithoutCreatedOrgInput, ScheduleUncheckedCreateWithoutCreatedOrgInput>
  }

  export type ScheduleUpdateWithWhereUniqueWithoutCreatedOrgInput = {
    where: ScheduleWhereUniqueInput
    data: XOR<ScheduleUpdateWithoutCreatedOrgInput, ScheduleUncheckedUpdateWithoutCreatedOrgInput>
  }

  export type ScheduleUpdateManyWithWhereWithoutCreatedOrgInput = {
    where: ScheduleScalarWhereInput
    data: XOR<ScheduleUpdateManyMutationInput, ScheduleUncheckedUpdateManyWithoutCreatedOrgInput>
  }

  export type OrganisationCreateWithoutCreatedTagsInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    team?: UserCreateNestedManyWithoutOrganisationInput
    branches?: BranchCreateNestedManyWithoutOrganisationInput
    tags?: TagCreateNestedManyWithoutOrganisationsInput
    contactOrganisations?: OrganisationCreateNestedManyWithoutContactOrganisationInput
    contactOrganisation?: OrganisationCreateNestedOneWithoutContactOrganisationsInput
    contacts?: ContactCreateNestedManyWithoutContactOrgInput
    createdSchedule?: ScheduleCreateNestedManyWithoutCreatedOrgInput
  }

  export type OrganisationUncheckedCreateWithoutCreatedTagsInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    contactOrgId?: string | null
    team?: UserUncheckedCreateNestedManyWithoutOrganisationInput
    branches?: BranchUncheckedCreateNestedManyWithoutOrganisationInput
    tags?: TagUncheckedCreateNestedManyWithoutOrganisationsInput
    contactOrganisations?: OrganisationUncheckedCreateNestedManyWithoutContactOrganisationInput
    contacts?: ContactUncheckedCreateNestedManyWithoutContactOrgInput
    createdSchedule?: ScheduleUncheckedCreateNestedManyWithoutCreatedOrgInput
  }

  export type OrganisationCreateOrConnectWithoutCreatedTagsInput = {
    where: OrganisationWhereUniqueInput
    create: XOR<OrganisationCreateWithoutCreatedTagsInput, OrganisationUncheckedCreateWithoutCreatedTagsInput>
  }

  export type OrganisationCreateWithoutTagsInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    team?: UserCreateNestedManyWithoutOrganisationInput
    branches?: BranchCreateNestedManyWithoutOrganisationInput
    contactOrganisations?: OrganisationCreateNestedManyWithoutContactOrganisationInput
    contactOrganisation?: OrganisationCreateNestedOneWithoutContactOrganisationsInput
    createdTags?: TagCreateNestedManyWithoutCreatedOrganisationInput
    contacts?: ContactCreateNestedManyWithoutContactOrgInput
    createdSchedule?: ScheduleCreateNestedManyWithoutCreatedOrgInput
  }

  export type OrganisationUncheckedCreateWithoutTagsInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    contactOrgId?: string | null
    team?: UserUncheckedCreateNestedManyWithoutOrganisationInput
    branches?: BranchUncheckedCreateNestedManyWithoutOrganisationInput
    contactOrganisations?: OrganisationUncheckedCreateNestedManyWithoutContactOrganisationInput
    createdTags?: TagUncheckedCreateNestedManyWithoutCreatedOrganisationInput
    contacts?: ContactUncheckedCreateNestedManyWithoutContactOrgInput
    createdSchedule?: ScheduleUncheckedCreateNestedManyWithoutCreatedOrgInput
  }

  export type OrganisationCreateOrConnectWithoutTagsInput = {
    where: OrganisationWhereUniqueInput
    create: XOR<OrganisationCreateWithoutTagsInput, OrganisationUncheckedCreateWithoutTagsInput>
  }

  export type ActivityCreateWithoutTagsInput = {
    id?: string
    title: string
    description: string
    needFollowUp?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    type?: $Enums.ActivityType
    followUpDate?: Date | string | null
    addedBy: UserCreateNestedOneWithoutAddedActivitiesInput
    contact: ContactCreateNestedOneWithoutActivitiesInput
    assignedTo?: UserCreateNestedOneWithoutActivityFollowUpsInput
    followUpActivity?: ActivityCreateNestedOneWithoutFollowUpActivitiesInput
    followUpActivities?: ActivityCreateNestedManyWithoutFollowUpActivityInput
  }

  export type ActivityUncheckedCreateWithoutTagsInput = {
    id?: string
    title: string
    description: string
    addedById: string
    needFollowUp?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    type?: $Enums.ActivityType
    contactId: string
    followUpDate?: Date | string | null
    assignedToId?: string | null
    followUpActivityId?: string | null
    followUpActivities?: ActivityUncheckedCreateNestedManyWithoutFollowUpActivityInput
  }

  export type ActivityCreateOrConnectWithoutTagsInput = {
    where: ActivityWhereUniqueInput
    create: XOR<ActivityCreateWithoutTagsInput, ActivityUncheckedCreateWithoutTagsInput>
  }

  export type ContactCreateWithoutTagsInput = {
    id?: string
    name: string
    email?: string | null
    phoneNumber: string
    alternateNumber?: string | null
    contactType: $Enums.ContactType
    leadSegment?: $Enums.LeadSegment | null
    leadScore?: number | null
    followUpFrequency?: number | null
    followUpOn?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    branch?: BranchCreateNestedOneWithoutContactsInput
    assignedTo?: UserCreateNestedOneWithoutContactFollowUpsInput
    pocBranch?: BranchCreateNestedOneWithoutPointOfContactInput
    activities?: ActivityCreateNestedManyWithoutContactInput
    notes?: NoteCreateNestedManyWithoutContactInput
    contactOrg: OrganisationCreateNestedOneWithoutContactsInput
  }

  export type ContactUncheckedCreateWithoutTagsInput = {
    id?: string
    name: string
    email?: string | null
    phoneNumber: string
    alternateNumber?: string | null
    branchId?: string | null
    contactType: $Enums.ContactType
    leadSegment?: $Enums.LeadSegment | null
    leadScore?: number | null
    followUpFrequency?: number | null
    followUpOn?: Date | string | null
    assignedToId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    contactOrgId: string
    pocBranch?: BranchUncheckedCreateNestedOneWithoutPointOfContactInput
    activities?: ActivityUncheckedCreateNestedManyWithoutContactInput
    notes?: NoteUncheckedCreateNestedManyWithoutContactInput
  }

  export type ContactCreateOrConnectWithoutTagsInput = {
    where: ContactWhereUniqueInput
    create: XOR<ContactCreateWithoutTagsInput, ContactUncheckedCreateWithoutTagsInput>
  }

  export type OrganisationUpsertWithoutCreatedTagsInput = {
    update: XOR<OrganisationUpdateWithoutCreatedTagsInput, OrganisationUncheckedUpdateWithoutCreatedTagsInput>
    create: XOR<OrganisationCreateWithoutCreatedTagsInput, OrganisationUncheckedCreateWithoutCreatedTagsInput>
    where?: OrganisationWhereInput
  }

  export type OrganisationUpdateToOneWithWhereWithoutCreatedTagsInput = {
    where?: OrganisationWhereInput
    data: XOR<OrganisationUpdateWithoutCreatedTagsInput, OrganisationUncheckedUpdateWithoutCreatedTagsInput>
  }

  export type OrganisationUpdateWithoutCreatedTagsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    team?: UserUpdateManyWithoutOrganisationNestedInput
    branches?: BranchUpdateManyWithoutOrganisationNestedInput
    tags?: TagUpdateManyWithoutOrganisationsNestedInput
    contactOrganisations?: OrganisationUpdateManyWithoutContactOrganisationNestedInput
    contactOrganisation?: OrganisationUpdateOneWithoutContactOrganisationsNestedInput
    contacts?: ContactUpdateManyWithoutContactOrgNestedInput
    createdSchedule?: ScheduleUpdateManyWithoutCreatedOrgNestedInput
  }

  export type OrganisationUncheckedUpdateWithoutCreatedTagsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    contactOrgId?: NullableStringFieldUpdateOperationsInput | string | null
    team?: UserUncheckedUpdateManyWithoutOrganisationNestedInput
    branches?: BranchUncheckedUpdateManyWithoutOrganisationNestedInput
    tags?: TagUncheckedUpdateManyWithoutOrganisationsNestedInput
    contactOrganisations?: OrganisationUncheckedUpdateManyWithoutContactOrganisationNestedInput
    contacts?: ContactUncheckedUpdateManyWithoutContactOrgNestedInput
    createdSchedule?: ScheduleUncheckedUpdateManyWithoutCreatedOrgNestedInput
  }

  export type OrganisationUpsertWithWhereUniqueWithoutTagsInput = {
    where: OrganisationWhereUniqueInput
    update: XOR<OrganisationUpdateWithoutTagsInput, OrganisationUncheckedUpdateWithoutTagsInput>
    create: XOR<OrganisationCreateWithoutTagsInput, OrganisationUncheckedCreateWithoutTagsInput>
  }

  export type OrganisationUpdateWithWhereUniqueWithoutTagsInput = {
    where: OrganisationWhereUniqueInput
    data: XOR<OrganisationUpdateWithoutTagsInput, OrganisationUncheckedUpdateWithoutTagsInput>
  }

  export type OrganisationUpdateManyWithWhereWithoutTagsInput = {
    where: OrganisationScalarWhereInput
    data: XOR<OrganisationUpdateManyMutationInput, OrganisationUncheckedUpdateManyWithoutTagsInput>
  }

  export type ActivityUpsertWithWhereUniqueWithoutTagsInput = {
    where: ActivityWhereUniqueInput
    update: XOR<ActivityUpdateWithoutTagsInput, ActivityUncheckedUpdateWithoutTagsInput>
    create: XOR<ActivityCreateWithoutTagsInput, ActivityUncheckedCreateWithoutTagsInput>
  }

  export type ActivityUpdateWithWhereUniqueWithoutTagsInput = {
    where: ActivityWhereUniqueInput
    data: XOR<ActivityUpdateWithoutTagsInput, ActivityUncheckedUpdateWithoutTagsInput>
  }

  export type ActivityUpdateManyWithWhereWithoutTagsInput = {
    where: ActivityScalarWhereInput
    data: XOR<ActivityUpdateManyMutationInput, ActivityUncheckedUpdateManyWithoutTagsInput>
  }

  export type ContactUpsertWithWhereUniqueWithoutTagsInput = {
    where: ContactWhereUniqueInput
    update: XOR<ContactUpdateWithoutTagsInput, ContactUncheckedUpdateWithoutTagsInput>
    create: XOR<ContactCreateWithoutTagsInput, ContactUncheckedCreateWithoutTagsInput>
  }

  export type ContactUpdateWithWhereUniqueWithoutTagsInput = {
    where: ContactWhereUniqueInput
    data: XOR<ContactUpdateWithoutTagsInput, ContactUncheckedUpdateWithoutTagsInput>
  }

  export type ContactUpdateManyWithWhereWithoutTagsInput = {
    where: ContactScalarWhereInput
    data: XOR<ContactUpdateManyMutationInput, ContactUncheckedUpdateManyWithoutTagsInput>
  }

  export type UserCreateWithoutAddedActivitiesInput = {
    id?: string
    firstName: string
    lastName: string
    email: string
    password: string
    countryCode: string
    phoneNumber: string
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    organisation?: OrganisationCreateNestedOneWithoutTeamInput
    sessions?: SessionCreateNestedManyWithoutUserInput
    tokens?: TokenCreateNestedManyWithoutUserInput
    contactFollowUps?: ContactCreateNestedManyWithoutAssignedToInput
    createdNotes?: NoteCreateNestedManyWithoutCreatedByInput
    activityFollowUps?: ActivityCreateNestedManyWithoutAssignedToInput
  }

  export type UserUncheckedCreateWithoutAddedActivitiesInput = {
    id?: string
    firstName: string
    lastName: string
    email: string
    password: string
    countryCode: string
    phoneNumber: string
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    organisationId?: string | null
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    tokens?: TokenUncheckedCreateNestedManyWithoutUserInput
    contactFollowUps?: ContactUncheckedCreateNestedManyWithoutAssignedToInput
    createdNotes?: NoteUncheckedCreateNestedManyWithoutCreatedByInput
    activityFollowUps?: ActivityUncheckedCreateNestedManyWithoutAssignedToInput
  }

  export type UserCreateOrConnectWithoutAddedActivitiesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutAddedActivitiesInput, UserUncheckedCreateWithoutAddedActivitiesInput>
  }

  export type TagCreateWithoutActivitiesInput = {
    id?: string
    title: string
    description?: string | null
    tagType?: $Enums.TagType
    createdAt?: Date | string
    updatedAt?: Date | string
    createdOrganisation: OrganisationCreateNestedOneWithoutCreatedTagsInput
    organisations?: OrganisationCreateNestedManyWithoutTagsInput
    contacts?: ContactCreateNestedManyWithoutTagsInput
  }

  export type TagUncheckedCreateWithoutActivitiesInput = {
    id?: string
    title: string
    description?: string | null
    tagType?: $Enums.TagType
    createdOrganisationId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    organisations?: OrganisationUncheckedCreateNestedManyWithoutTagsInput
    contacts?: ContactUncheckedCreateNestedManyWithoutTagsInput
  }

  export type TagCreateOrConnectWithoutActivitiesInput = {
    where: TagWhereUniqueInput
    create: XOR<TagCreateWithoutActivitiesInput, TagUncheckedCreateWithoutActivitiesInput>
  }

  export type ContactCreateWithoutActivitiesInput = {
    id?: string
    name: string
    email?: string | null
    phoneNumber: string
    alternateNumber?: string | null
    contactType: $Enums.ContactType
    leadSegment?: $Enums.LeadSegment | null
    leadScore?: number | null
    followUpFrequency?: number | null
    followUpOn?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    branch?: BranchCreateNestedOneWithoutContactsInput
    assignedTo?: UserCreateNestedOneWithoutContactFollowUpsInput
    pocBranch?: BranchCreateNestedOneWithoutPointOfContactInput
    notes?: NoteCreateNestedManyWithoutContactInput
    tags?: TagCreateNestedManyWithoutContactsInput
    contactOrg: OrganisationCreateNestedOneWithoutContactsInput
  }

  export type ContactUncheckedCreateWithoutActivitiesInput = {
    id?: string
    name: string
    email?: string | null
    phoneNumber: string
    alternateNumber?: string | null
    branchId?: string | null
    contactType: $Enums.ContactType
    leadSegment?: $Enums.LeadSegment | null
    leadScore?: number | null
    followUpFrequency?: number | null
    followUpOn?: Date | string | null
    assignedToId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    contactOrgId: string
    pocBranch?: BranchUncheckedCreateNestedOneWithoutPointOfContactInput
    notes?: NoteUncheckedCreateNestedManyWithoutContactInput
    tags?: TagUncheckedCreateNestedManyWithoutContactsInput
  }

  export type ContactCreateOrConnectWithoutActivitiesInput = {
    where: ContactWhereUniqueInput
    create: XOR<ContactCreateWithoutActivitiesInput, ContactUncheckedCreateWithoutActivitiesInput>
  }

  export type UserCreateWithoutActivityFollowUpsInput = {
    id?: string
    firstName: string
    lastName: string
    email: string
    password: string
    countryCode: string
    phoneNumber: string
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    organisation?: OrganisationCreateNestedOneWithoutTeamInput
    addedActivities?: ActivityCreateNestedManyWithoutAddedByInput
    sessions?: SessionCreateNestedManyWithoutUserInput
    tokens?: TokenCreateNestedManyWithoutUserInput
    contactFollowUps?: ContactCreateNestedManyWithoutAssignedToInput
    createdNotes?: NoteCreateNestedManyWithoutCreatedByInput
  }

  export type UserUncheckedCreateWithoutActivityFollowUpsInput = {
    id?: string
    firstName: string
    lastName: string
    email: string
    password: string
    countryCode: string
    phoneNumber: string
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    organisationId?: string | null
    addedActivities?: ActivityUncheckedCreateNestedManyWithoutAddedByInput
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    tokens?: TokenUncheckedCreateNestedManyWithoutUserInput
    contactFollowUps?: ContactUncheckedCreateNestedManyWithoutAssignedToInput
    createdNotes?: NoteUncheckedCreateNestedManyWithoutCreatedByInput
  }

  export type UserCreateOrConnectWithoutActivityFollowUpsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutActivityFollowUpsInput, UserUncheckedCreateWithoutActivityFollowUpsInput>
  }

  export type ActivityCreateWithoutFollowUpActivitiesInput = {
    id?: string
    title: string
    description: string
    needFollowUp?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    type?: $Enums.ActivityType
    followUpDate?: Date | string | null
    addedBy: UserCreateNestedOneWithoutAddedActivitiesInput
    tags?: TagCreateNestedManyWithoutActivitiesInput
    contact: ContactCreateNestedOneWithoutActivitiesInput
    assignedTo?: UserCreateNestedOneWithoutActivityFollowUpsInput
    followUpActivity?: ActivityCreateNestedOneWithoutFollowUpActivitiesInput
  }

  export type ActivityUncheckedCreateWithoutFollowUpActivitiesInput = {
    id?: string
    title: string
    description: string
    addedById: string
    needFollowUp?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    type?: $Enums.ActivityType
    contactId: string
    followUpDate?: Date | string | null
    assignedToId?: string | null
    followUpActivityId?: string | null
    tags?: TagUncheckedCreateNestedManyWithoutActivitiesInput
  }

  export type ActivityCreateOrConnectWithoutFollowUpActivitiesInput = {
    where: ActivityWhereUniqueInput
    create: XOR<ActivityCreateWithoutFollowUpActivitiesInput, ActivityUncheckedCreateWithoutFollowUpActivitiesInput>
  }

  export type ActivityCreateWithoutFollowUpActivityInput = {
    id?: string
    title: string
    description: string
    needFollowUp?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    type?: $Enums.ActivityType
    followUpDate?: Date | string | null
    addedBy: UserCreateNestedOneWithoutAddedActivitiesInput
    tags?: TagCreateNestedManyWithoutActivitiesInput
    contact: ContactCreateNestedOneWithoutActivitiesInput
    assignedTo?: UserCreateNestedOneWithoutActivityFollowUpsInput
    followUpActivities?: ActivityCreateNestedManyWithoutFollowUpActivityInput
  }

  export type ActivityUncheckedCreateWithoutFollowUpActivityInput = {
    id?: string
    title: string
    description: string
    addedById: string
    needFollowUp?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    type?: $Enums.ActivityType
    contactId: string
    followUpDate?: Date | string | null
    assignedToId?: string | null
    tags?: TagUncheckedCreateNestedManyWithoutActivitiesInput
    followUpActivities?: ActivityUncheckedCreateNestedManyWithoutFollowUpActivityInput
  }

  export type ActivityCreateOrConnectWithoutFollowUpActivityInput = {
    where: ActivityWhereUniqueInput
    create: XOR<ActivityCreateWithoutFollowUpActivityInput, ActivityUncheckedCreateWithoutFollowUpActivityInput>
  }

  export type ActivityCreateManyFollowUpActivityInputEnvelope = {
    data: ActivityCreateManyFollowUpActivityInput | ActivityCreateManyFollowUpActivityInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutAddedActivitiesInput = {
    update: XOR<UserUpdateWithoutAddedActivitiesInput, UserUncheckedUpdateWithoutAddedActivitiesInput>
    create: XOR<UserCreateWithoutAddedActivitiesInput, UserUncheckedCreateWithoutAddedActivitiesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutAddedActivitiesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutAddedActivitiesInput, UserUncheckedUpdateWithoutAddedActivitiesInput>
  }

  export type UserUpdateWithoutAddedActivitiesInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    countryCode?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    organisation?: OrganisationUpdateOneWithoutTeamNestedInput
    sessions?: SessionUpdateManyWithoutUserNestedInput
    tokens?: TokenUpdateManyWithoutUserNestedInput
    contactFollowUps?: ContactUpdateManyWithoutAssignedToNestedInput
    createdNotes?: NoteUpdateManyWithoutCreatedByNestedInput
    activityFollowUps?: ActivityUpdateManyWithoutAssignedToNestedInput
  }

  export type UserUncheckedUpdateWithoutAddedActivitiesInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    countryCode?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    organisationId?: NullableStringFieldUpdateOperationsInput | string | null
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    tokens?: TokenUncheckedUpdateManyWithoutUserNestedInput
    contactFollowUps?: ContactUncheckedUpdateManyWithoutAssignedToNestedInput
    createdNotes?: NoteUncheckedUpdateManyWithoutCreatedByNestedInput
    activityFollowUps?: ActivityUncheckedUpdateManyWithoutAssignedToNestedInput
  }

  export type TagUpsertWithWhereUniqueWithoutActivitiesInput = {
    where: TagWhereUniqueInput
    update: XOR<TagUpdateWithoutActivitiesInput, TagUncheckedUpdateWithoutActivitiesInput>
    create: XOR<TagCreateWithoutActivitiesInput, TagUncheckedCreateWithoutActivitiesInput>
  }

  export type TagUpdateWithWhereUniqueWithoutActivitiesInput = {
    where: TagWhereUniqueInput
    data: XOR<TagUpdateWithoutActivitiesInput, TagUncheckedUpdateWithoutActivitiesInput>
  }

  export type TagUpdateManyWithWhereWithoutActivitiesInput = {
    where: TagScalarWhereInput
    data: XOR<TagUpdateManyMutationInput, TagUncheckedUpdateManyWithoutActivitiesInput>
  }

  export type ContactUpsertWithoutActivitiesInput = {
    update: XOR<ContactUpdateWithoutActivitiesInput, ContactUncheckedUpdateWithoutActivitiesInput>
    create: XOR<ContactCreateWithoutActivitiesInput, ContactUncheckedCreateWithoutActivitiesInput>
    where?: ContactWhereInput
  }

  export type ContactUpdateToOneWithWhereWithoutActivitiesInput = {
    where?: ContactWhereInput
    data: XOR<ContactUpdateWithoutActivitiesInput, ContactUncheckedUpdateWithoutActivitiesInput>
  }

  export type ContactUpdateWithoutActivitiesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: StringFieldUpdateOperationsInput | string
    alternateNumber?: NullableStringFieldUpdateOperationsInput | string | null
    contactType?: EnumContactTypeFieldUpdateOperationsInput | $Enums.ContactType
    leadSegment?: NullableEnumLeadSegmentFieldUpdateOperationsInput | $Enums.LeadSegment | null
    leadScore?: NullableIntFieldUpdateOperationsInput | number | null
    followUpFrequency?: NullableIntFieldUpdateOperationsInput | number | null
    followUpOn?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    branch?: BranchUpdateOneWithoutContactsNestedInput
    assignedTo?: UserUpdateOneWithoutContactFollowUpsNestedInput
    pocBranch?: BranchUpdateOneWithoutPointOfContactNestedInput
    notes?: NoteUpdateManyWithoutContactNestedInput
    tags?: TagUpdateManyWithoutContactsNestedInput
    contactOrg?: OrganisationUpdateOneRequiredWithoutContactsNestedInput
  }

  export type ContactUncheckedUpdateWithoutActivitiesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: StringFieldUpdateOperationsInput | string
    alternateNumber?: NullableStringFieldUpdateOperationsInput | string | null
    branchId?: NullableStringFieldUpdateOperationsInput | string | null
    contactType?: EnumContactTypeFieldUpdateOperationsInput | $Enums.ContactType
    leadSegment?: NullableEnumLeadSegmentFieldUpdateOperationsInput | $Enums.LeadSegment | null
    leadScore?: NullableIntFieldUpdateOperationsInput | number | null
    followUpFrequency?: NullableIntFieldUpdateOperationsInput | number | null
    followUpOn?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    assignedToId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    contactOrgId?: StringFieldUpdateOperationsInput | string
    pocBranch?: BranchUncheckedUpdateOneWithoutPointOfContactNestedInput
    notes?: NoteUncheckedUpdateManyWithoutContactNestedInput
    tags?: TagUncheckedUpdateManyWithoutContactsNestedInput
  }

  export type UserUpsertWithoutActivityFollowUpsInput = {
    update: XOR<UserUpdateWithoutActivityFollowUpsInput, UserUncheckedUpdateWithoutActivityFollowUpsInput>
    create: XOR<UserCreateWithoutActivityFollowUpsInput, UserUncheckedCreateWithoutActivityFollowUpsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutActivityFollowUpsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutActivityFollowUpsInput, UserUncheckedUpdateWithoutActivityFollowUpsInput>
  }

  export type UserUpdateWithoutActivityFollowUpsInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    countryCode?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    organisation?: OrganisationUpdateOneWithoutTeamNestedInput
    addedActivities?: ActivityUpdateManyWithoutAddedByNestedInput
    sessions?: SessionUpdateManyWithoutUserNestedInput
    tokens?: TokenUpdateManyWithoutUserNestedInput
    contactFollowUps?: ContactUpdateManyWithoutAssignedToNestedInput
    createdNotes?: NoteUpdateManyWithoutCreatedByNestedInput
  }

  export type UserUncheckedUpdateWithoutActivityFollowUpsInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    countryCode?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    organisationId?: NullableStringFieldUpdateOperationsInput | string | null
    addedActivities?: ActivityUncheckedUpdateManyWithoutAddedByNestedInput
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    tokens?: TokenUncheckedUpdateManyWithoutUserNestedInput
    contactFollowUps?: ContactUncheckedUpdateManyWithoutAssignedToNestedInput
    createdNotes?: NoteUncheckedUpdateManyWithoutCreatedByNestedInput
  }

  export type ActivityUpsertWithoutFollowUpActivitiesInput = {
    update: XOR<ActivityUpdateWithoutFollowUpActivitiesInput, ActivityUncheckedUpdateWithoutFollowUpActivitiesInput>
    create: XOR<ActivityCreateWithoutFollowUpActivitiesInput, ActivityUncheckedCreateWithoutFollowUpActivitiesInput>
    where?: ActivityWhereInput
  }

  export type ActivityUpdateToOneWithWhereWithoutFollowUpActivitiesInput = {
    where?: ActivityWhereInput
    data: XOR<ActivityUpdateWithoutFollowUpActivitiesInput, ActivityUncheckedUpdateWithoutFollowUpActivitiesInput>
  }

  export type ActivityUpdateWithoutFollowUpActivitiesInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    needFollowUp?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: EnumActivityTypeFieldUpdateOperationsInput | $Enums.ActivityType
    followUpDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    addedBy?: UserUpdateOneRequiredWithoutAddedActivitiesNestedInput
    tags?: TagUpdateManyWithoutActivitiesNestedInput
    contact?: ContactUpdateOneRequiredWithoutActivitiesNestedInput
    assignedTo?: UserUpdateOneWithoutActivityFollowUpsNestedInput
    followUpActivity?: ActivityUpdateOneWithoutFollowUpActivitiesNestedInput
  }

  export type ActivityUncheckedUpdateWithoutFollowUpActivitiesInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    addedById?: StringFieldUpdateOperationsInput | string
    needFollowUp?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: EnumActivityTypeFieldUpdateOperationsInput | $Enums.ActivityType
    contactId?: StringFieldUpdateOperationsInput | string
    followUpDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    assignedToId?: NullableStringFieldUpdateOperationsInput | string | null
    followUpActivityId?: NullableStringFieldUpdateOperationsInput | string | null
    tags?: TagUncheckedUpdateManyWithoutActivitiesNestedInput
  }

  export type ActivityUpsertWithWhereUniqueWithoutFollowUpActivityInput = {
    where: ActivityWhereUniqueInput
    update: XOR<ActivityUpdateWithoutFollowUpActivityInput, ActivityUncheckedUpdateWithoutFollowUpActivityInput>
    create: XOR<ActivityCreateWithoutFollowUpActivityInput, ActivityUncheckedCreateWithoutFollowUpActivityInput>
  }

  export type ActivityUpdateWithWhereUniqueWithoutFollowUpActivityInput = {
    where: ActivityWhereUniqueInput
    data: XOR<ActivityUpdateWithoutFollowUpActivityInput, ActivityUncheckedUpdateWithoutFollowUpActivityInput>
  }

  export type ActivityUpdateManyWithWhereWithoutFollowUpActivityInput = {
    where: ActivityScalarWhereInput
    data: XOR<ActivityUpdateManyMutationInput, ActivityUncheckedUpdateManyWithoutFollowUpActivityInput>
  }

  export type ContactCreateWithoutNotesInput = {
    id?: string
    name: string
    email?: string | null
    phoneNumber: string
    alternateNumber?: string | null
    contactType: $Enums.ContactType
    leadSegment?: $Enums.LeadSegment | null
    leadScore?: number | null
    followUpFrequency?: number | null
    followUpOn?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    branch?: BranchCreateNestedOneWithoutContactsInput
    assignedTo?: UserCreateNestedOneWithoutContactFollowUpsInput
    pocBranch?: BranchCreateNestedOneWithoutPointOfContactInput
    activities?: ActivityCreateNestedManyWithoutContactInput
    tags?: TagCreateNestedManyWithoutContactsInput
    contactOrg: OrganisationCreateNestedOneWithoutContactsInput
  }

  export type ContactUncheckedCreateWithoutNotesInput = {
    id?: string
    name: string
    email?: string | null
    phoneNumber: string
    alternateNumber?: string | null
    branchId?: string | null
    contactType: $Enums.ContactType
    leadSegment?: $Enums.LeadSegment | null
    leadScore?: number | null
    followUpFrequency?: number | null
    followUpOn?: Date | string | null
    assignedToId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    contactOrgId: string
    pocBranch?: BranchUncheckedCreateNestedOneWithoutPointOfContactInput
    activities?: ActivityUncheckedCreateNestedManyWithoutContactInput
    tags?: TagUncheckedCreateNestedManyWithoutContactsInput
  }

  export type ContactCreateOrConnectWithoutNotesInput = {
    where: ContactWhereUniqueInput
    create: XOR<ContactCreateWithoutNotesInput, ContactUncheckedCreateWithoutNotesInput>
  }

  export type UserCreateWithoutCreatedNotesInput = {
    id?: string
    firstName: string
    lastName: string
    email: string
    password: string
    countryCode: string
    phoneNumber: string
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    organisation?: OrganisationCreateNestedOneWithoutTeamInput
    addedActivities?: ActivityCreateNestedManyWithoutAddedByInput
    sessions?: SessionCreateNestedManyWithoutUserInput
    tokens?: TokenCreateNestedManyWithoutUserInput
    contactFollowUps?: ContactCreateNestedManyWithoutAssignedToInput
    activityFollowUps?: ActivityCreateNestedManyWithoutAssignedToInput
  }

  export type UserUncheckedCreateWithoutCreatedNotesInput = {
    id?: string
    firstName: string
    lastName: string
    email: string
    password: string
    countryCode: string
    phoneNumber: string
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    organisationId?: string | null
    addedActivities?: ActivityUncheckedCreateNestedManyWithoutAddedByInput
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    tokens?: TokenUncheckedCreateNestedManyWithoutUserInput
    contactFollowUps?: ContactUncheckedCreateNestedManyWithoutAssignedToInput
    activityFollowUps?: ActivityUncheckedCreateNestedManyWithoutAssignedToInput
  }

  export type UserCreateOrConnectWithoutCreatedNotesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutCreatedNotesInput, UserUncheckedCreateWithoutCreatedNotesInput>
  }

  export type ContactUpsertWithoutNotesInput = {
    update: XOR<ContactUpdateWithoutNotesInput, ContactUncheckedUpdateWithoutNotesInput>
    create: XOR<ContactCreateWithoutNotesInput, ContactUncheckedCreateWithoutNotesInput>
    where?: ContactWhereInput
  }

  export type ContactUpdateToOneWithWhereWithoutNotesInput = {
    where?: ContactWhereInput
    data: XOR<ContactUpdateWithoutNotesInput, ContactUncheckedUpdateWithoutNotesInput>
  }

  export type ContactUpdateWithoutNotesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: StringFieldUpdateOperationsInput | string
    alternateNumber?: NullableStringFieldUpdateOperationsInput | string | null
    contactType?: EnumContactTypeFieldUpdateOperationsInput | $Enums.ContactType
    leadSegment?: NullableEnumLeadSegmentFieldUpdateOperationsInput | $Enums.LeadSegment | null
    leadScore?: NullableIntFieldUpdateOperationsInput | number | null
    followUpFrequency?: NullableIntFieldUpdateOperationsInput | number | null
    followUpOn?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    branch?: BranchUpdateOneWithoutContactsNestedInput
    assignedTo?: UserUpdateOneWithoutContactFollowUpsNestedInput
    pocBranch?: BranchUpdateOneWithoutPointOfContactNestedInput
    activities?: ActivityUpdateManyWithoutContactNestedInput
    tags?: TagUpdateManyWithoutContactsNestedInput
    contactOrg?: OrganisationUpdateOneRequiredWithoutContactsNestedInput
  }

  export type ContactUncheckedUpdateWithoutNotesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: StringFieldUpdateOperationsInput | string
    alternateNumber?: NullableStringFieldUpdateOperationsInput | string | null
    branchId?: NullableStringFieldUpdateOperationsInput | string | null
    contactType?: EnumContactTypeFieldUpdateOperationsInput | $Enums.ContactType
    leadSegment?: NullableEnumLeadSegmentFieldUpdateOperationsInput | $Enums.LeadSegment | null
    leadScore?: NullableIntFieldUpdateOperationsInput | number | null
    followUpFrequency?: NullableIntFieldUpdateOperationsInput | number | null
    followUpOn?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    assignedToId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    contactOrgId?: StringFieldUpdateOperationsInput | string
    pocBranch?: BranchUncheckedUpdateOneWithoutPointOfContactNestedInput
    activities?: ActivityUncheckedUpdateManyWithoutContactNestedInput
    tags?: TagUncheckedUpdateManyWithoutContactsNestedInput
  }

  export type UserUpsertWithoutCreatedNotesInput = {
    update: XOR<UserUpdateWithoutCreatedNotesInput, UserUncheckedUpdateWithoutCreatedNotesInput>
    create: XOR<UserCreateWithoutCreatedNotesInput, UserUncheckedCreateWithoutCreatedNotesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutCreatedNotesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutCreatedNotesInput, UserUncheckedUpdateWithoutCreatedNotesInput>
  }

  export type UserUpdateWithoutCreatedNotesInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    countryCode?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    organisation?: OrganisationUpdateOneWithoutTeamNestedInput
    addedActivities?: ActivityUpdateManyWithoutAddedByNestedInput
    sessions?: SessionUpdateManyWithoutUserNestedInput
    tokens?: TokenUpdateManyWithoutUserNestedInput
    contactFollowUps?: ContactUpdateManyWithoutAssignedToNestedInput
    activityFollowUps?: ActivityUpdateManyWithoutAssignedToNestedInput
  }

  export type UserUncheckedUpdateWithoutCreatedNotesInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    countryCode?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    organisationId?: NullableStringFieldUpdateOperationsInput | string | null
    addedActivities?: ActivityUncheckedUpdateManyWithoutAddedByNestedInput
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    tokens?: TokenUncheckedUpdateManyWithoutUserNestedInput
    contactFollowUps?: ContactUncheckedUpdateManyWithoutAssignedToNestedInput
    activityFollowUps?: ActivityUncheckedUpdateManyWithoutAssignedToNestedInput
  }

  export type BranchCreateWithoutContactsInput = {
    id?: string
    address?: string | null
    city: string
    postalCode?: string | null
    landlineNumber?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    type: $Enums.BranchType
    region: RegionCreateNestedOneWithoutBranchesInput
    organisation: OrganisationCreateNestedOneWithoutBranchesInput
    pointOfContact?: ContactCreateNestedOneWithoutPocBranchInput
  }

  export type BranchUncheckedCreateWithoutContactsInput = {
    id?: string
    address?: string | null
    city: string
    postalCode?: string | null
    landlineNumber?: string | null
    regionId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    organisationId: string
    type: $Enums.BranchType
    pointOfContactId?: string | null
  }

  export type BranchCreateOrConnectWithoutContactsInput = {
    where: BranchWhereUniqueInput
    create: XOR<BranchCreateWithoutContactsInput, BranchUncheckedCreateWithoutContactsInput>
  }

  export type UserCreateWithoutContactFollowUpsInput = {
    id?: string
    firstName: string
    lastName: string
    email: string
    password: string
    countryCode: string
    phoneNumber: string
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    organisation?: OrganisationCreateNestedOneWithoutTeamInput
    addedActivities?: ActivityCreateNestedManyWithoutAddedByInput
    sessions?: SessionCreateNestedManyWithoutUserInput
    tokens?: TokenCreateNestedManyWithoutUserInput
    createdNotes?: NoteCreateNestedManyWithoutCreatedByInput
    activityFollowUps?: ActivityCreateNestedManyWithoutAssignedToInput
  }

  export type UserUncheckedCreateWithoutContactFollowUpsInput = {
    id?: string
    firstName: string
    lastName: string
    email: string
    password: string
    countryCode: string
    phoneNumber: string
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    organisationId?: string | null
    addedActivities?: ActivityUncheckedCreateNestedManyWithoutAddedByInput
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    tokens?: TokenUncheckedCreateNestedManyWithoutUserInput
    createdNotes?: NoteUncheckedCreateNestedManyWithoutCreatedByInput
    activityFollowUps?: ActivityUncheckedCreateNestedManyWithoutAssignedToInput
  }

  export type UserCreateOrConnectWithoutContactFollowUpsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutContactFollowUpsInput, UserUncheckedCreateWithoutContactFollowUpsInput>
  }

  export type BranchCreateWithoutPointOfContactInput = {
    id?: string
    address?: string | null
    city: string
    postalCode?: string | null
    landlineNumber?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    type: $Enums.BranchType
    region: RegionCreateNestedOneWithoutBranchesInput
    organisation: OrganisationCreateNestedOneWithoutBranchesInput
    contacts?: ContactCreateNestedManyWithoutBranchInput
  }

  export type BranchUncheckedCreateWithoutPointOfContactInput = {
    id?: string
    address?: string | null
    city: string
    postalCode?: string | null
    landlineNumber?: string | null
    regionId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    organisationId: string
    type: $Enums.BranchType
    contacts?: ContactUncheckedCreateNestedManyWithoutBranchInput
  }

  export type BranchCreateOrConnectWithoutPointOfContactInput = {
    where: BranchWhereUniqueInput
    create: XOR<BranchCreateWithoutPointOfContactInput, BranchUncheckedCreateWithoutPointOfContactInput>
  }

  export type ActivityCreateWithoutContactInput = {
    id?: string
    title: string
    description: string
    needFollowUp?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    type?: $Enums.ActivityType
    followUpDate?: Date | string | null
    addedBy: UserCreateNestedOneWithoutAddedActivitiesInput
    tags?: TagCreateNestedManyWithoutActivitiesInput
    assignedTo?: UserCreateNestedOneWithoutActivityFollowUpsInput
    followUpActivity?: ActivityCreateNestedOneWithoutFollowUpActivitiesInput
    followUpActivities?: ActivityCreateNestedManyWithoutFollowUpActivityInput
  }

  export type ActivityUncheckedCreateWithoutContactInput = {
    id?: string
    title: string
    description: string
    addedById: string
    needFollowUp?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    type?: $Enums.ActivityType
    followUpDate?: Date | string | null
    assignedToId?: string | null
    followUpActivityId?: string | null
    tags?: TagUncheckedCreateNestedManyWithoutActivitiesInput
    followUpActivities?: ActivityUncheckedCreateNestedManyWithoutFollowUpActivityInput
  }

  export type ActivityCreateOrConnectWithoutContactInput = {
    where: ActivityWhereUniqueInput
    create: XOR<ActivityCreateWithoutContactInput, ActivityUncheckedCreateWithoutContactInput>
  }

  export type ActivityCreateManyContactInputEnvelope = {
    data: ActivityCreateManyContactInput | ActivityCreateManyContactInput[]
    skipDuplicates?: boolean
  }

  export type NoteCreateWithoutContactInput = {
    id?: string
    title: string
    description: string
    category: $Enums.NoteCategory
    createdAt?: Date | string
    updatedAt?: Date | string
    createdBy: UserCreateNestedOneWithoutCreatedNotesInput
  }

  export type NoteUncheckedCreateWithoutContactInput = {
    id?: string
    title: string
    description: string
    category: $Enums.NoteCategory
    createdAt?: Date | string
    updatedAt?: Date | string
    createdById: string
  }

  export type NoteCreateOrConnectWithoutContactInput = {
    where: NoteWhereUniqueInput
    create: XOR<NoteCreateWithoutContactInput, NoteUncheckedCreateWithoutContactInput>
  }

  export type NoteCreateManyContactInputEnvelope = {
    data: NoteCreateManyContactInput | NoteCreateManyContactInput[]
    skipDuplicates?: boolean
  }

  export type TagCreateWithoutContactsInput = {
    id?: string
    title: string
    description?: string | null
    tagType?: $Enums.TagType
    createdAt?: Date | string
    updatedAt?: Date | string
    createdOrganisation: OrganisationCreateNestedOneWithoutCreatedTagsInput
    organisations?: OrganisationCreateNestedManyWithoutTagsInput
    activities?: ActivityCreateNestedManyWithoutTagsInput
  }

  export type TagUncheckedCreateWithoutContactsInput = {
    id?: string
    title: string
    description?: string | null
    tagType?: $Enums.TagType
    createdOrganisationId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    organisations?: OrganisationUncheckedCreateNestedManyWithoutTagsInput
    activities?: ActivityUncheckedCreateNestedManyWithoutTagsInput
  }

  export type TagCreateOrConnectWithoutContactsInput = {
    where: TagWhereUniqueInput
    create: XOR<TagCreateWithoutContactsInput, TagUncheckedCreateWithoutContactsInput>
  }

  export type OrganisationCreateWithoutContactsInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    team?: UserCreateNestedManyWithoutOrganisationInput
    branches?: BranchCreateNestedManyWithoutOrganisationInput
    tags?: TagCreateNestedManyWithoutOrganisationsInput
    contactOrganisations?: OrganisationCreateNestedManyWithoutContactOrganisationInput
    contactOrganisation?: OrganisationCreateNestedOneWithoutContactOrganisationsInput
    createdTags?: TagCreateNestedManyWithoutCreatedOrganisationInput
    createdSchedule?: ScheduleCreateNestedManyWithoutCreatedOrgInput
  }

  export type OrganisationUncheckedCreateWithoutContactsInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    contactOrgId?: string | null
    team?: UserUncheckedCreateNestedManyWithoutOrganisationInput
    branches?: BranchUncheckedCreateNestedManyWithoutOrganisationInput
    tags?: TagUncheckedCreateNestedManyWithoutOrganisationsInput
    contactOrganisations?: OrganisationUncheckedCreateNestedManyWithoutContactOrganisationInput
    createdTags?: TagUncheckedCreateNestedManyWithoutCreatedOrganisationInput
    createdSchedule?: ScheduleUncheckedCreateNestedManyWithoutCreatedOrgInput
  }

  export type OrganisationCreateOrConnectWithoutContactsInput = {
    where: OrganisationWhereUniqueInput
    create: XOR<OrganisationCreateWithoutContactsInput, OrganisationUncheckedCreateWithoutContactsInput>
  }

  export type BranchUpsertWithoutContactsInput = {
    update: XOR<BranchUpdateWithoutContactsInput, BranchUncheckedUpdateWithoutContactsInput>
    create: XOR<BranchCreateWithoutContactsInput, BranchUncheckedCreateWithoutContactsInput>
    where?: BranchWhereInput
  }

  export type BranchUpdateToOneWithWhereWithoutContactsInput = {
    where?: BranchWhereInput
    data: XOR<BranchUpdateWithoutContactsInput, BranchUncheckedUpdateWithoutContactsInput>
  }

  export type BranchUpdateWithoutContactsInput = {
    id?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    city?: StringFieldUpdateOperationsInput | string
    postalCode?: NullableStringFieldUpdateOperationsInput | string | null
    landlineNumber?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: EnumBranchTypeFieldUpdateOperationsInput | $Enums.BranchType
    region?: RegionUpdateOneRequiredWithoutBranchesNestedInput
    organisation?: OrganisationUpdateOneRequiredWithoutBranchesNestedInput
    pointOfContact?: ContactUpdateOneWithoutPocBranchNestedInput
  }

  export type BranchUncheckedUpdateWithoutContactsInput = {
    id?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    city?: StringFieldUpdateOperationsInput | string
    postalCode?: NullableStringFieldUpdateOperationsInput | string | null
    landlineNumber?: NullableStringFieldUpdateOperationsInput | string | null
    regionId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    organisationId?: StringFieldUpdateOperationsInput | string
    type?: EnumBranchTypeFieldUpdateOperationsInput | $Enums.BranchType
    pointOfContactId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UserUpsertWithoutContactFollowUpsInput = {
    update: XOR<UserUpdateWithoutContactFollowUpsInput, UserUncheckedUpdateWithoutContactFollowUpsInput>
    create: XOR<UserCreateWithoutContactFollowUpsInput, UserUncheckedCreateWithoutContactFollowUpsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutContactFollowUpsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutContactFollowUpsInput, UserUncheckedUpdateWithoutContactFollowUpsInput>
  }

  export type UserUpdateWithoutContactFollowUpsInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    countryCode?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    organisation?: OrganisationUpdateOneWithoutTeamNestedInput
    addedActivities?: ActivityUpdateManyWithoutAddedByNestedInput
    sessions?: SessionUpdateManyWithoutUserNestedInput
    tokens?: TokenUpdateManyWithoutUserNestedInput
    createdNotes?: NoteUpdateManyWithoutCreatedByNestedInput
    activityFollowUps?: ActivityUpdateManyWithoutAssignedToNestedInput
  }

  export type UserUncheckedUpdateWithoutContactFollowUpsInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    countryCode?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    organisationId?: NullableStringFieldUpdateOperationsInput | string | null
    addedActivities?: ActivityUncheckedUpdateManyWithoutAddedByNestedInput
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    tokens?: TokenUncheckedUpdateManyWithoutUserNestedInput
    createdNotes?: NoteUncheckedUpdateManyWithoutCreatedByNestedInput
    activityFollowUps?: ActivityUncheckedUpdateManyWithoutAssignedToNestedInput
  }

  export type BranchUpsertWithoutPointOfContactInput = {
    update: XOR<BranchUpdateWithoutPointOfContactInput, BranchUncheckedUpdateWithoutPointOfContactInput>
    create: XOR<BranchCreateWithoutPointOfContactInput, BranchUncheckedCreateWithoutPointOfContactInput>
    where?: BranchWhereInput
  }

  export type BranchUpdateToOneWithWhereWithoutPointOfContactInput = {
    where?: BranchWhereInput
    data: XOR<BranchUpdateWithoutPointOfContactInput, BranchUncheckedUpdateWithoutPointOfContactInput>
  }

  export type BranchUpdateWithoutPointOfContactInput = {
    id?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    city?: StringFieldUpdateOperationsInput | string
    postalCode?: NullableStringFieldUpdateOperationsInput | string | null
    landlineNumber?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: EnumBranchTypeFieldUpdateOperationsInput | $Enums.BranchType
    region?: RegionUpdateOneRequiredWithoutBranchesNestedInput
    organisation?: OrganisationUpdateOneRequiredWithoutBranchesNestedInput
    contacts?: ContactUpdateManyWithoutBranchNestedInput
  }

  export type BranchUncheckedUpdateWithoutPointOfContactInput = {
    id?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    city?: StringFieldUpdateOperationsInput | string
    postalCode?: NullableStringFieldUpdateOperationsInput | string | null
    landlineNumber?: NullableStringFieldUpdateOperationsInput | string | null
    regionId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    organisationId?: StringFieldUpdateOperationsInput | string
    type?: EnumBranchTypeFieldUpdateOperationsInput | $Enums.BranchType
    contacts?: ContactUncheckedUpdateManyWithoutBranchNestedInput
  }

  export type ActivityUpsertWithWhereUniqueWithoutContactInput = {
    where: ActivityWhereUniqueInput
    update: XOR<ActivityUpdateWithoutContactInput, ActivityUncheckedUpdateWithoutContactInput>
    create: XOR<ActivityCreateWithoutContactInput, ActivityUncheckedCreateWithoutContactInput>
  }

  export type ActivityUpdateWithWhereUniqueWithoutContactInput = {
    where: ActivityWhereUniqueInput
    data: XOR<ActivityUpdateWithoutContactInput, ActivityUncheckedUpdateWithoutContactInput>
  }

  export type ActivityUpdateManyWithWhereWithoutContactInput = {
    where: ActivityScalarWhereInput
    data: XOR<ActivityUpdateManyMutationInput, ActivityUncheckedUpdateManyWithoutContactInput>
  }

  export type NoteUpsertWithWhereUniqueWithoutContactInput = {
    where: NoteWhereUniqueInput
    update: XOR<NoteUpdateWithoutContactInput, NoteUncheckedUpdateWithoutContactInput>
    create: XOR<NoteCreateWithoutContactInput, NoteUncheckedCreateWithoutContactInput>
  }

  export type NoteUpdateWithWhereUniqueWithoutContactInput = {
    where: NoteWhereUniqueInput
    data: XOR<NoteUpdateWithoutContactInput, NoteUncheckedUpdateWithoutContactInput>
  }

  export type NoteUpdateManyWithWhereWithoutContactInput = {
    where: NoteScalarWhereInput
    data: XOR<NoteUpdateManyMutationInput, NoteUncheckedUpdateManyWithoutContactInput>
  }

  export type TagUpsertWithWhereUniqueWithoutContactsInput = {
    where: TagWhereUniqueInput
    update: XOR<TagUpdateWithoutContactsInput, TagUncheckedUpdateWithoutContactsInput>
    create: XOR<TagCreateWithoutContactsInput, TagUncheckedCreateWithoutContactsInput>
  }

  export type TagUpdateWithWhereUniqueWithoutContactsInput = {
    where: TagWhereUniqueInput
    data: XOR<TagUpdateWithoutContactsInput, TagUncheckedUpdateWithoutContactsInput>
  }

  export type TagUpdateManyWithWhereWithoutContactsInput = {
    where: TagScalarWhereInput
    data: XOR<TagUpdateManyMutationInput, TagUncheckedUpdateManyWithoutContactsInput>
  }

  export type OrganisationUpsertWithoutContactsInput = {
    update: XOR<OrganisationUpdateWithoutContactsInput, OrganisationUncheckedUpdateWithoutContactsInput>
    create: XOR<OrganisationCreateWithoutContactsInput, OrganisationUncheckedCreateWithoutContactsInput>
    where?: OrganisationWhereInput
  }

  export type OrganisationUpdateToOneWithWhereWithoutContactsInput = {
    where?: OrganisationWhereInput
    data: XOR<OrganisationUpdateWithoutContactsInput, OrganisationUncheckedUpdateWithoutContactsInput>
  }

  export type OrganisationUpdateWithoutContactsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    team?: UserUpdateManyWithoutOrganisationNestedInput
    branches?: BranchUpdateManyWithoutOrganisationNestedInput
    tags?: TagUpdateManyWithoutOrganisationsNestedInput
    contactOrganisations?: OrganisationUpdateManyWithoutContactOrganisationNestedInput
    contactOrganisation?: OrganisationUpdateOneWithoutContactOrganisationsNestedInput
    createdTags?: TagUpdateManyWithoutCreatedOrganisationNestedInput
    createdSchedule?: ScheduleUpdateManyWithoutCreatedOrgNestedInput
  }

  export type OrganisationUncheckedUpdateWithoutContactsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    contactOrgId?: NullableStringFieldUpdateOperationsInput | string | null
    team?: UserUncheckedUpdateManyWithoutOrganisationNestedInput
    branches?: BranchUncheckedUpdateManyWithoutOrganisationNestedInput
    tags?: TagUncheckedUpdateManyWithoutOrganisationsNestedInput
    contactOrganisations?: OrganisationUncheckedUpdateManyWithoutContactOrganisationNestedInput
    createdTags?: TagUncheckedUpdateManyWithoutCreatedOrganisationNestedInput
    createdSchedule?: ScheduleUncheckedUpdateManyWithoutCreatedOrgNestedInput
  }

  export type ActivityCreateManyAddedByInput = {
    id?: string
    title: string
    description: string
    needFollowUp?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    type?: $Enums.ActivityType
    contactId: string
    followUpDate?: Date | string | null
    assignedToId?: string | null
    followUpActivityId?: string | null
  }

  export type SessionCreateManyUserInput = {
    id?: string
    expiresAt: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TokenCreateManyUserInput = {
    id?: string
    sessionId: string
    scopes?: TokenCreatescopesInput | $Enums.Scope[]
    accessToken: string
    refreshToken?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ContactCreateManyAssignedToInput = {
    id?: string
    name: string
    email?: string | null
    phoneNumber: string
    alternateNumber?: string | null
    branchId?: string | null
    contactType: $Enums.ContactType
    leadSegment?: $Enums.LeadSegment | null
    leadScore?: number | null
    followUpFrequency?: number | null
    followUpOn?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    contactOrgId: string
  }

  export type NoteCreateManyCreatedByInput = {
    id?: string
    title: string
    description: string
    category: $Enums.NoteCategory
    createdAt?: Date | string
    updatedAt?: Date | string
    contactId: string
  }

  export type ActivityCreateManyAssignedToInput = {
    id?: string
    title: string
    description: string
    addedById: string
    needFollowUp?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    type?: $Enums.ActivityType
    contactId: string
    followUpDate?: Date | string | null
    followUpActivityId?: string | null
  }

  export type ActivityUpdateWithoutAddedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    needFollowUp?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: EnumActivityTypeFieldUpdateOperationsInput | $Enums.ActivityType
    followUpDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tags?: TagUpdateManyWithoutActivitiesNestedInput
    contact?: ContactUpdateOneRequiredWithoutActivitiesNestedInput
    assignedTo?: UserUpdateOneWithoutActivityFollowUpsNestedInput
    followUpActivity?: ActivityUpdateOneWithoutFollowUpActivitiesNestedInput
    followUpActivities?: ActivityUpdateManyWithoutFollowUpActivityNestedInput
  }

  export type ActivityUncheckedUpdateWithoutAddedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    needFollowUp?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: EnumActivityTypeFieldUpdateOperationsInput | $Enums.ActivityType
    contactId?: StringFieldUpdateOperationsInput | string
    followUpDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    assignedToId?: NullableStringFieldUpdateOperationsInput | string | null
    followUpActivityId?: NullableStringFieldUpdateOperationsInput | string | null
    tags?: TagUncheckedUpdateManyWithoutActivitiesNestedInput
    followUpActivities?: ActivityUncheckedUpdateManyWithoutFollowUpActivityNestedInput
  }

  export type ActivityUncheckedUpdateManyWithoutAddedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    needFollowUp?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: EnumActivityTypeFieldUpdateOperationsInput | $Enums.ActivityType
    contactId?: StringFieldUpdateOperationsInput | string
    followUpDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    assignedToId?: NullableStringFieldUpdateOperationsInput | string | null
    followUpActivityId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SessionUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tokens?: TokenUpdateManyWithoutSessionNestedInput
  }

  export type SessionUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tokens?: TokenUncheckedUpdateManyWithoutSessionNestedInput
  }

  export type SessionUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TokenUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    scopes?: TokenUpdatescopesInput | $Enums.Scope[]
    accessToken?: StringFieldUpdateOperationsInput | string
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    session?: SessionUpdateOneRequiredWithoutTokensNestedInput
  }

  export type TokenUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionId?: StringFieldUpdateOperationsInput | string
    scopes?: TokenUpdatescopesInput | $Enums.Scope[]
    accessToken?: StringFieldUpdateOperationsInput | string
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TokenUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionId?: StringFieldUpdateOperationsInput | string
    scopes?: TokenUpdatescopesInput | $Enums.Scope[]
    accessToken?: StringFieldUpdateOperationsInput | string
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ContactUpdateWithoutAssignedToInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: StringFieldUpdateOperationsInput | string
    alternateNumber?: NullableStringFieldUpdateOperationsInput | string | null
    contactType?: EnumContactTypeFieldUpdateOperationsInput | $Enums.ContactType
    leadSegment?: NullableEnumLeadSegmentFieldUpdateOperationsInput | $Enums.LeadSegment | null
    leadScore?: NullableIntFieldUpdateOperationsInput | number | null
    followUpFrequency?: NullableIntFieldUpdateOperationsInput | number | null
    followUpOn?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    branch?: BranchUpdateOneWithoutContactsNestedInput
    pocBranch?: BranchUpdateOneWithoutPointOfContactNestedInput
    activities?: ActivityUpdateManyWithoutContactNestedInput
    notes?: NoteUpdateManyWithoutContactNestedInput
    tags?: TagUpdateManyWithoutContactsNestedInput
    contactOrg?: OrganisationUpdateOneRequiredWithoutContactsNestedInput
  }

  export type ContactUncheckedUpdateWithoutAssignedToInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: StringFieldUpdateOperationsInput | string
    alternateNumber?: NullableStringFieldUpdateOperationsInput | string | null
    branchId?: NullableStringFieldUpdateOperationsInput | string | null
    contactType?: EnumContactTypeFieldUpdateOperationsInput | $Enums.ContactType
    leadSegment?: NullableEnumLeadSegmentFieldUpdateOperationsInput | $Enums.LeadSegment | null
    leadScore?: NullableIntFieldUpdateOperationsInput | number | null
    followUpFrequency?: NullableIntFieldUpdateOperationsInput | number | null
    followUpOn?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    contactOrgId?: StringFieldUpdateOperationsInput | string
    pocBranch?: BranchUncheckedUpdateOneWithoutPointOfContactNestedInput
    activities?: ActivityUncheckedUpdateManyWithoutContactNestedInput
    notes?: NoteUncheckedUpdateManyWithoutContactNestedInput
    tags?: TagUncheckedUpdateManyWithoutContactsNestedInput
  }

  export type ContactUncheckedUpdateManyWithoutAssignedToInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: StringFieldUpdateOperationsInput | string
    alternateNumber?: NullableStringFieldUpdateOperationsInput | string | null
    branchId?: NullableStringFieldUpdateOperationsInput | string | null
    contactType?: EnumContactTypeFieldUpdateOperationsInput | $Enums.ContactType
    leadSegment?: NullableEnumLeadSegmentFieldUpdateOperationsInput | $Enums.LeadSegment | null
    leadScore?: NullableIntFieldUpdateOperationsInput | number | null
    followUpFrequency?: NullableIntFieldUpdateOperationsInput | number | null
    followUpOn?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    contactOrgId?: StringFieldUpdateOperationsInput | string
  }

  export type NoteUpdateWithoutCreatedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    category?: EnumNoteCategoryFieldUpdateOperationsInput | $Enums.NoteCategory
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    contact?: ContactUpdateOneRequiredWithoutNotesNestedInput
  }

  export type NoteUncheckedUpdateWithoutCreatedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    category?: EnumNoteCategoryFieldUpdateOperationsInput | $Enums.NoteCategory
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    contactId?: StringFieldUpdateOperationsInput | string
  }

  export type NoteUncheckedUpdateManyWithoutCreatedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    category?: EnumNoteCategoryFieldUpdateOperationsInput | $Enums.NoteCategory
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    contactId?: StringFieldUpdateOperationsInput | string
  }

  export type ActivityUpdateWithoutAssignedToInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    needFollowUp?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: EnumActivityTypeFieldUpdateOperationsInput | $Enums.ActivityType
    followUpDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    addedBy?: UserUpdateOneRequiredWithoutAddedActivitiesNestedInput
    tags?: TagUpdateManyWithoutActivitiesNestedInput
    contact?: ContactUpdateOneRequiredWithoutActivitiesNestedInput
    followUpActivity?: ActivityUpdateOneWithoutFollowUpActivitiesNestedInput
    followUpActivities?: ActivityUpdateManyWithoutFollowUpActivityNestedInput
  }

  export type ActivityUncheckedUpdateWithoutAssignedToInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    addedById?: StringFieldUpdateOperationsInput | string
    needFollowUp?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: EnumActivityTypeFieldUpdateOperationsInput | $Enums.ActivityType
    contactId?: StringFieldUpdateOperationsInput | string
    followUpDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    followUpActivityId?: NullableStringFieldUpdateOperationsInput | string | null
    tags?: TagUncheckedUpdateManyWithoutActivitiesNestedInput
    followUpActivities?: ActivityUncheckedUpdateManyWithoutFollowUpActivityNestedInput
  }

  export type ActivityUncheckedUpdateManyWithoutAssignedToInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    addedById?: StringFieldUpdateOperationsInput | string
    needFollowUp?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: EnumActivityTypeFieldUpdateOperationsInput | $Enums.ActivityType
    contactId?: StringFieldUpdateOperationsInput | string
    followUpDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    followUpActivityId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type TokenCreateManySessionInput = {
    id?: string
    userId: string
    scopes?: TokenCreatescopesInput | $Enums.Scope[]
    accessToken: string
    refreshToken?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TokenUpdateWithoutSessionInput = {
    id?: StringFieldUpdateOperationsInput | string
    scopes?: TokenUpdatescopesInput | $Enums.Scope[]
    accessToken?: StringFieldUpdateOperationsInput | string
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutTokensNestedInput
  }

  export type TokenUncheckedUpdateWithoutSessionInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    scopes?: TokenUpdatescopesInput | $Enums.Scope[]
    accessToken?: StringFieldUpdateOperationsInput | string
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TokenUncheckedUpdateManyWithoutSessionInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    scopes?: TokenUpdatescopesInput | $Enums.Scope[]
    accessToken?: StringFieldUpdateOperationsInput | string
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BranchCreateManyRegionInput = {
    id?: string
    address?: string | null
    city: string
    postalCode?: string | null
    landlineNumber?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    organisationId: string
    type: $Enums.BranchType
    pointOfContactId?: string | null
  }

  export type ScheduleCreateManyRegionInput = {
    id?: string
    dayOfMonth: number
    createdOrgId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BranchUpdateWithoutRegionInput = {
    id?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    city?: StringFieldUpdateOperationsInput | string
    postalCode?: NullableStringFieldUpdateOperationsInput | string | null
    landlineNumber?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: EnumBranchTypeFieldUpdateOperationsInput | $Enums.BranchType
    organisation?: OrganisationUpdateOneRequiredWithoutBranchesNestedInput
    contacts?: ContactUpdateManyWithoutBranchNestedInput
    pointOfContact?: ContactUpdateOneWithoutPocBranchNestedInput
  }

  export type BranchUncheckedUpdateWithoutRegionInput = {
    id?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    city?: StringFieldUpdateOperationsInput | string
    postalCode?: NullableStringFieldUpdateOperationsInput | string | null
    landlineNumber?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    organisationId?: StringFieldUpdateOperationsInput | string
    type?: EnumBranchTypeFieldUpdateOperationsInput | $Enums.BranchType
    pointOfContactId?: NullableStringFieldUpdateOperationsInput | string | null
    contacts?: ContactUncheckedUpdateManyWithoutBranchNestedInput
  }

  export type BranchUncheckedUpdateManyWithoutRegionInput = {
    id?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    city?: StringFieldUpdateOperationsInput | string
    postalCode?: NullableStringFieldUpdateOperationsInput | string | null
    landlineNumber?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    organisationId?: StringFieldUpdateOperationsInput | string
    type?: EnumBranchTypeFieldUpdateOperationsInput | $Enums.BranchType
    pointOfContactId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ScheduleUpdateWithoutRegionInput = {
    id?: StringFieldUpdateOperationsInput | string
    dayOfMonth?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdOrg?: OrganisationUpdateOneRequiredWithoutCreatedScheduleNestedInput
  }

  export type ScheduleUncheckedUpdateWithoutRegionInput = {
    id?: StringFieldUpdateOperationsInput | string
    dayOfMonth?: IntFieldUpdateOperationsInput | number
    createdOrgId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ScheduleUncheckedUpdateManyWithoutRegionInput = {
    id?: StringFieldUpdateOperationsInput | string
    dayOfMonth?: IntFieldUpdateOperationsInput | number
    createdOrgId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ContactCreateManyBranchInput = {
    id?: string
    name: string
    email?: string | null
    phoneNumber: string
    alternateNumber?: string | null
    contactType: $Enums.ContactType
    leadSegment?: $Enums.LeadSegment | null
    leadScore?: number | null
    followUpFrequency?: number | null
    followUpOn?: Date | string | null
    assignedToId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    contactOrgId: string
  }

  export type ContactUpdateWithoutBranchInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: StringFieldUpdateOperationsInput | string
    alternateNumber?: NullableStringFieldUpdateOperationsInput | string | null
    contactType?: EnumContactTypeFieldUpdateOperationsInput | $Enums.ContactType
    leadSegment?: NullableEnumLeadSegmentFieldUpdateOperationsInput | $Enums.LeadSegment | null
    leadScore?: NullableIntFieldUpdateOperationsInput | number | null
    followUpFrequency?: NullableIntFieldUpdateOperationsInput | number | null
    followUpOn?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    assignedTo?: UserUpdateOneWithoutContactFollowUpsNestedInput
    pocBranch?: BranchUpdateOneWithoutPointOfContactNestedInput
    activities?: ActivityUpdateManyWithoutContactNestedInput
    notes?: NoteUpdateManyWithoutContactNestedInput
    tags?: TagUpdateManyWithoutContactsNestedInput
    contactOrg?: OrganisationUpdateOneRequiredWithoutContactsNestedInput
  }

  export type ContactUncheckedUpdateWithoutBranchInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: StringFieldUpdateOperationsInput | string
    alternateNumber?: NullableStringFieldUpdateOperationsInput | string | null
    contactType?: EnumContactTypeFieldUpdateOperationsInput | $Enums.ContactType
    leadSegment?: NullableEnumLeadSegmentFieldUpdateOperationsInput | $Enums.LeadSegment | null
    leadScore?: NullableIntFieldUpdateOperationsInput | number | null
    followUpFrequency?: NullableIntFieldUpdateOperationsInput | number | null
    followUpOn?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    assignedToId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    contactOrgId?: StringFieldUpdateOperationsInput | string
    pocBranch?: BranchUncheckedUpdateOneWithoutPointOfContactNestedInput
    activities?: ActivityUncheckedUpdateManyWithoutContactNestedInput
    notes?: NoteUncheckedUpdateManyWithoutContactNestedInput
    tags?: TagUncheckedUpdateManyWithoutContactsNestedInput
  }

  export type ContactUncheckedUpdateManyWithoutBranchInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: StringFieldUpdateOperationsInput | string
    alternateNumber?: NullableStringFieldUpdateOperationsInput | string | null
    contactType?: EnumContactTypeFieldUpdateOperationsInput | $Enums.ContactType
    leadSegment?: NullableEnumLeadSegmentFieldUpdateOperationsInput | $Enums.LeadSegment | null
    leadScore?: NullableIntFieldUpdateOperationsInput | number | null
    followUpFrequency?: NullableIntFieldUpdateOperationsInput | number | null
    followUpOn?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    assignedToId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    contactOrgId?: StringFieldUpdateOperationsInput | string
  }

  export type UserCreateManyOrganisationInput = {
    id?: string
    firstName: string
    lastName: string
    email: string
    password: string
    countryCode: string
    phoneNumber: string
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BranchCreateManyOrganisationInput = {
    id?: string
    address?: string | null
    city: string
    postalCode?: string | null
    landlineNumber?: string | null
    regionId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    type: $Enums.BranchType
    pointOfContactId?: string | null
  }

  export type OrganisationCreateManyContactOrganisationInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TagCreateManyCreatedOrganisationInput = {
    id?: string
    title: string
    description?: string | null
    tagType?: $Enums.TagType
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ContactCreateManyContactOrgInput = {
    id?: string
    name: string
    email?: string | null
    phoneNumber: string
    alternateNumber?: string | null
    branchId?: string | null
    contactType: $Enums.ContactType
    leadSegment?: $Enums.LeadSegment | null
    leadScore?: number | null
    followUpFrequency?: number | null
    followUpOn?: Date | string | null
    assignedToId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ScheduleCreateManyCreatedOrgInput = {
    id?: string
    regionId: string
    dayOfMonth: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateWithoutOrganisationInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    countryCode?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    addedActivities?: ActivityUpdateManyWithoutAddedByNestedInput
    sessions?: SessionUpdateManyWithoutUserNestedInput
    tokens?: TokenUpdateManyWithoutUserNestedInput
    contactFollowUps?: ContactUpdateManyWithoutAssignedToNestedInput
    createdNotes?: NoteUpdateManyWithoutCreatedByNestedInput
    activityFollowUps?: ActivityUpdateManyWithoutAssignedToNestedInput
  }

  export type UserUncheckedUpdateWithoutOrganisationInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    countryCode?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    addedActivities?: ActivityUncheckedUpdateManyWithoutAddedByNestedInput
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    tokens?: TokenUncheckedUpdateManyWithoutUserNestedInput
    contactFollowUps?: ContactUncheckedUpdateManyWithoutAssignedToNestedInput
    createdNotes?: NoteUncheckedUpdateManyWithoutCreatedByNestedInput
    activityFollowUps?: ActivityUncheckedUpdateManyWithoutAssignedToNestedInput
  }

  export type UserUncheckedUpdateManyWithoutOrganisationInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    countryCode?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BranchUpdateWithoutOrganisationInput = {
    id?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    city?: StringFieldUpdateOperationsInput | string
    postalCode?: NullableStringFieldUpdateOperationsInput | string | null
    landlineNumber?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: EnumBranchTypeFieldUpdateOperationsInput | $Enums.BranchType
    region?: RegionUpdateOneRequiredWithoutBranchesNestedInput
    contacts?: ContactUpdateManyWithoutBranchNestedInput
    pointOfContact?: ContactUpdateOneWithoutPocBranchNestedInput
  }

  export type BranchUncheckedUpdateWithoutOrganisationInput = {
    id?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    city?: StringFieldUpdateOperationsInput | string
    postalCode?: NullableStringFieldUpdateOperationsInput | string | null
    landlineNumber?: NullableStringFieldUpdateOperationsInput | string | null
    regionId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: EnumBranchTypeFieldUpdateOperationsInput | $Enums.BranchType
    pointOfContactId?: NullableStringFieldUpdateOperationsInput | string | null
    contacts?: ContactUncheckedUpdateManyWithoutBranchNestedInput
  }

  export type BranchUncheckedUpdateManyWithoutOrganisationInput = {
    id?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    city?: StringFieldUpdateOperationsInput | string
    postalCode?: NullableStringFieldUpdateOperationsInput | string | null
    landlineNumber?: NullableStringFieldUpdateOperationsInput | string | null
    regionId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: EnumBranchTypeFieldUpdateOperationsInput | $Enums.BranchType
    pointOfContactId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type TagUpdateWithoutOrganisationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    tagType?: EnumTagTypeFieldUpdateOperationsInput | $Enums.TagType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdOrganisation?: OrganisationUpdateOneRequiredWithoutCreatedTagsNestedInput
    activities?: ActivityUpdateManyWithoutTagsNestedInput
    contacts?: ContactUpdateManyWithoutTagsNestedInput
  }

  export type TagUncheckedUpdateWithoutOrganisationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    tagType?: EnumTagTypeFieldUpdateOperationsInput | $Enums.TagType
    createdOrganisationId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    activities?: ActivityUncheckedUpdateManyWithoutTagsNestedInput
    contacts?: ContactUncheckedUpdateManyWithoutTagsNestedInput
  }

  export type TagUncheckedUpdateManyWithoutOrganisationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    tagType?: EnumTagTypeFieldUpdateOperationsInput | $Enums.TagType
    createdOrganisationId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrganisationUpdateWithoutContactOrganisationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    team?: UserUpdateManyWithoutOrganisationNestedInput
    branches?: BranchUpdateManyWithoutOrganisationNestedInput
    tags?: TagUpdateManyWithoutOrganisationsNestedInput
    contactOrganisations?: OrganisationUpdateManyWithoutContactOrganisationNestedInput
    createdTags?: TagUpdateManyWithoutCreatedOrganisationNestedInput
    contacts?: ContactUpdateManyWithoutContactOrgNestedInput
    createdSchedule?: ScheduleUpdateManyWithoutCreatedOrgNestedInput
  }

  export type OrganisationUncheckedUpdateWithoutContactOrganisationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    team?: UserUncheckedUpdateManyWithoutOrganisationNestedInput
    branches?: BranchUncheckedUpdateManyWithoutOrganisationNestedInput
    tags?: TagUncheckedUpdateManyWithoutOrganisationsNestedInput
    contactOrganisations?: OrganisationUncheckedUpdateManyWithoutContactOrganisationNestedInput
    createdTags?: TagUncheckedUpdateManyWithoutCreatedOrganisationNestedInput
    contacts?: ContactUncheckedUpdateManyWithoutContactOrgNestedInput
    createdSchedule?: ScheduleUncheckedUpdateManyWithoutCreatedOrgNestedInput
  }

  export type OrganisationUncheckedUpdateManyWithoutContactOrganisationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TagUpdateWithoutCreatedOrganisationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    tagType?: EnumTagTypeFieldUpdateOperationsInput | $Enums.TagType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    organisations?: OrganisationUpdateManyWithoutTagsNestedInput
    activities?: ActivityUpdateManyWithoutTagsNestedInput
    contacts?: ContactUpdateManyWithoutTagsNestedInput
  }

  export type TagUncheckedUpdateWithoutCreatedOrganisationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    tagType?: EnumTagTypeFieldUpdateOperationsInput | $Enums.TagType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    organisations?: OrganisationUncheckedUpdateManyWithoutTagsNestedInput
    activities?: ActivityUncheckedUpdateManyWithoutTagsNestedInput
    contacts?: ContactUncheckedUpdateManyWithoutTagsNestedInput
  }

  export type TagUncheckedUpdateManyWithoutCreatedOrganisationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    tagType?: EnumTagTypeFieldUpdateOperationsInput | $Enums.TagType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ContactUpdateWithoutContactOrgInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: StringFieldUpdateOperationsInput | string
    alternateNumber?: NullableStringFieldUpdateOperationsInput | string | null
    contactType?: EnumContactTypeFieldUpdateOperationsInput | $Enums.ContactType
    leadSegment?: NullableEnumLeadSegmentFieldUpdateOperationsInput | $Enums.LeadSegment | null
    leadScore?: NullableIntFieldUpdateOperationsInput | number | null
    followUpFrequency?: NullableIntFieldUpdateOperationsInput | number | null
    followUpOn?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    branch?: BranchUpdateOneWithoutContactsNestedInput
    assignedTo?: UserUpdateOneWithoutContactFollowUpsNestedInput
    pocBranch?: BranchUpdateOneWithoutPointOfContactNestedInput
    activities?: ActivityUpdateManyWithoutContactNestedInput
    notes?: NoteUpdateManyWithoutContactNestedInput
    tags?: TagUpdateManyWithoutContactsNestedInput
  }

  export type ContactUncheckedUpdateWithoutContactOrgInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: StringFieldUpdateOperationsInput | string
    alternateNumber?: NullableStringFieldUpdateOperationsInput | string | null
    branchId?: NullableStringFieldUpdateOperationsInput | string | null
    contactType?: EnumContactTypeFieldUpdateOperationsInput | $Enums.ContactType
    leadSegment?: NullableEnumLeadSegmentFieldUpdateOperationsInput | $Enums.LeadSegment | null
    leadScore?: NullableIntFieldUpdateOperationsInput | number | null
    followUpFrequency?: NullableIntFieldUpdateOperationsInput | number | null
    followUpOn?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    assignedToId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    pocBranch?: BranchUncheckedUpdateOneWithoutPointOfContactNestedInput
    activities?: ActivityUncheckedUpdateManyWithoutContactNestedInput
    notes?: NoteUncheckedUpdateManyWithoutContactNestedInput
    tags?: TagUncheckedUpdateManyWithoutContactsNestedInput
  }

  export type ContactUncheckedUpdateManyWithoutContactOrgInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: StringFieldUpdateOperationsInput | string
    alternateNumber?: NullableStringFieldUpdateOperationsInput | string | null
    branchId?: NullableStringFieldUpdateOperationsInput | string | null
    contactType?: EnumContactTypeFieldUpdateOperationsInput | $Enums.ContactType
    leadSegment?: NullableEnumLeadSegmentFieldUpdateOperationsInput | $Enums.LeadSegment | null
    leadScore?: NullableIntFieldUpdateOperationsInput | number | null
    followUpFrequency?: NullableIntFieldUpdateOperationsInput | number | null
    followUpOn?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    assignedToId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ScheduleUpdateWithoutCreatedOrgInput = {
    id?: StringFieldUpdateOperationsInput | string
    dayOfMonth?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    region?: RegionUpdateOneRequiredWithoutSchedulesNestedInput
  }

  export type ScheduleUncheckedUpdateWithoutCreatedOrgInput = {
    id?: StringFieldUpdateOperationsInput | string
    regionId?: StringFieldUpdateOperationsInput | string
    dayOfMonth?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ScheduleUncheckedUpdateManyWithoutCreatedOrgInput = {
    id?: StringFieldUpdateOperationsInput | string
    regionId?: StringFieldUpdateOperationsInput | string
    dayOfMonth?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrganisationUpdateWithoutTagsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    team?: UserUpdateManyWithoutOrganisationNestedInput
    branches?: BranchUpdateManyWithoutOrganisationNestedInput
    contactOrganisations?: OrganisationUpdateManyWithoutContactOrganisationNestedInput
    contactOrganisation?: OrganisationUpdateOneWithoutContactOrganisationsNestedInput
    createdTags?: TagUpdateManyWithoutCreatedOrganisationNestedInput
    contacts?: ContactUpdateManyWithoutContactOrgNestedInput
    createdSchedule?: ScheduleUpdateManyWithoutCreatedOrgNestedInput
  }

  export type OrganisationUncheckedUpdateWithoutTagsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    contactOrgId?: NullableStringFieldUpdateOperationsInput | string | null
    team?: UserUncheckedUpdateManyWithoutOrganisationNestedInput
    branches?: BranchUncheckedUpdateManyWithoutOrganisationNestedInput
    contactOrganisations?: OrganisationUncheckedUpdateManyWithoutContactOrganisationNestedInput
    createdTags?: TagUncheckedUpdateManyWithoutCreatedOrganisationNestedInput
    contacts?: ContactUncheckedUpdateManyWithoutContactOrgNestedInput
    createdSchedule?: ScheduleUncheckedUpdateManyWithoutCreatedOrgNestedInput
  }

  export type OrganisationUncheckedUpdateManyWithoutTagsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    contactOrgId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ActivityUpdateWithoutTagsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    needFollowUp?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: EnumActivityTypeFieldUpdateOperationsInput | $Enums.ActivityType
    followUpDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    addedBy?: UserUpdateOneRequiredWithoutAddedActivitiesNestedInput
    contact?: ContactUpdateOneRequiredWithoutActivitiesNestedInput
    assignedTo?: UserUpdateOneWithoutActivityFollowUpsNestedInput
    followUpActivity?: ActivityUpdateOneWithoutFollowUpActivitiesNestedInput
    followUpActivities?: ActivityUpdateManyWithoutFollowUpActivityNestedInput
  }

  export type ActivityUncheckedUpdateWithoutTagsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    addedById?: StringFieldUpdateOperationsInput | string
    needFollowUp?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: EnumActivityTypeFieldUpdateOperationsInput | $Enums.ActivityType
    contactId?: StringFieldUpdateOperationsInput | string
    followUpDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    assignedToId?: NullableStringFieldUpdateOperationsInput | string | null
    followUpActivityId?: NullableStringFieldUpdateOperationsInput | string | null
    followUpActivities?: ActivityUncheckedUpdateManyWithoutFollowUpActivityNestedInput
  }

  export type ActivityUncheckedUpdateManyWithoutTagsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    addedById?: StringFieldUpdateOperationsInput | string
    needFollowUp?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: EnumActivityTypeFieldUpdateOperationsInput | $Enums.ActivityType
    contactId?: StringFieldUpdateOperationsInput | string
    followUpDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    assignedToId?: NullableStringFieldUpdateOperationsInput | string | null
    followUpActivityId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ContactUpdateWithoutTagsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: StringFieldUpdateOperationsInput | string
    alternateNumber?: NullableStringFieldUpdateOperationsInput | string | null
    contactType?: EnumContactTypeFieldUpdateOperationsInput | $Enums.ContactType
    leadSegment?: NullableEnumLeadSegmentFieldUpdateOperationsInput | $Enums.LeadSegment | null
    leadScore?: NullableIntFieldUpdateOperationsInput | number | null
    followUpFrequency?: NullableIntFieldUpdateOperationsInput | number | null
    followUpOn?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    branch?: BranchUpdateOneWithoutContactsNestedInput
    assignedTo?: UserUpdateOneWithoutContactFollowUpsNestedInput
    pocBranch?: BranchUpdateOneWithoutPointOfContactNestedInput
    activities?: ActivityUpdateManyWithoutContactNestedInput
    notes?: NoteUpdateManyWithoutContactNestedInput
    contactOrg?: OrganisationUpdateOneRequiredWithoutContactsNestedInput
  }

  export type ContactUncheckedUpdateWithoutTagsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: StringFieldUpdateOperationsInput | string
    alternateNumber?: NullableStringFieldUpdateOperationsInput | string | null
    branchId?: NullableStringFieldUpdateOperationsInput | string | null
    contactType?: EnumContactTypeFieldUpdateOperationsInput | $Enums.ContactType
    leadSegment?: NullableEnumLeadSegmentFieldUpdateOperationsInput | $Enums.LeadSegment | null
    leadScore?: NullableIntFieldUpdateOperationsInput | number | null
    followUpFrequency?: NullableIntFieldUpdateOperationsInput | number | null
    followUpOn?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    assignedToId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    contactOrgId?: StringFieldUpdateOperationsInput | string
    pocBranch?: BranchUncheckedUpdateOneWithoutPointOfContactNestedInput
    activities?: ActivityUncheckedUpdateManyWithoutContactNestedInput
    notes?: NoteUncheckedUpdateManyWithoutContactNestedInput
  }

  export type ContactUncheckedUpdateManyWithoutTagsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: StringFieldUpdateOperationsInput | string
    alternateNumber?: NullableStringFieldUpdateOperationsInput | string | null
    branchId?: NullableStringFieldUpdateOperationsInput | string | null
    contactType?: EnumContactTypeFieldUpdateOperationsInput | $Enums.ContactType
    leadSegment?: NullableEnumLeadSegmentFieldUpdateOperationsInput | $Enums.LeadSegment | null
    leadScore?: NullableIntFieldUpdateOperationsInput | number | null
    followUpFrequency?: NullableIntFieldUpdateOperationsInput | number | null
    followUpOn?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    assignedToId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    contactOrgId?: StringFieldUpdateOperationsInput | string
  }

  export type ActivityCreateManyFollowUpActivityInput = {
    id?: string
    title: string
    description: string
    addedById: string
    needFollowUp?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    type?: $Enums.ActivityType
    contactId: string
    followUpDate?: Date | string | null
    assignedToId?: string | null
  }

  export type TagUpdateWithoutActivitiesInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    tagType?: EnumTagTypeFieldUpdateOperationsInput | $Enums.TagType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdOrganisation?: OrganisationUpdateOneRequiredWithoutCreatedTagsNestedInput
    organisations?: OrganisationUpdateManyWithoutTagsNestedInput
    contacts?: ContactUpdateManyWithoutTagsNestedInput
  }

  export type TagUncheckedUpdateWithoutActivitiesInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    tagType?: EnumTagTypeFieldUpdateOperationsInput | $Enums.TagType
    createdOrganisationId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    organisations?: OrganisationUncheckedUpdateManyWithoutTagsNestedInput
    contacts?: ContactUncheckedUpdateManyWithoutTagsNestedInput
  }

  export type TagUncheckedUpdateManyWithoutActivitiesInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    tagType?: EnumTagTypeFieldUpdateOperationsInput | $Enums.TagType
    createdOrganisationId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ActivityUpdateWithoutFollowUpActivityInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    needFollowUp?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: EnumActivityTypeFieldUpdateOperationsInput | $Enums.ActivityType
    followUpDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    addedBy?: UserUpdateOneRequiredWithoutAddedActivitiesNestedInput
    tags?: TagUpdateManyWithoutActivitiesNestedInput
    contact?: ContactUpdateOneRequiredWithoutActivitiesNestedInput
    assignedTo?: UserUpdateOneWithoutActivityFollowUpsNestedInput
    followUpActivities?: ActivityUpdateManyWithoutFollowUpActivityNestedInput
  }

  export type ActivityUncheckedUpdateWithoutFollowUpActivityInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    addedById?: StringFieldUpdateOperationsInput | string
    needFollowUp?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: EnumActivityTypeFieldUpdateOperationsInput | $Enums.ActivityType
    contactId?: StringFieldUpdateOperationsInput | string
    followUpDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    assignedToId?: NullableStringFieldUpdateOperationsInput | string | null
    tags?: TagUncheckedUpdateManyWithoutActivitiesNestedInput
    followUpActivities?: ActivityUncheckedUpdateManyWithoutFollowUpActivityNestedInput
  }

  export type ActivityUncheckedUpdateManyWithoutFollowUpActivityInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    addedById?: StringFieldUpdateOperationsInput | string
    needFollowUp?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: EnumActivityTypeFieldUpdateOperationsInput | $Enums.ActivityType
    contactId?: StringFieldUpdateOperationsInput | string
    followUpDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    assignedToId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ActivityCreateManyContactInput = {
    id?: string
    title: string
    description: string
    addedById: string
    needFollowUp?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    type?: $Enums.ActivityType
    followUpDate?: Date | string | null
    assignedToId?: string | null
    followUpActivityId?: string | null
  }

  export type NoteCreateManyContactInput = {
    id?: string
    title: string
    description: string
    category: $Enums.NoteCategory
    createdAt?: Date | string
    updatedAt?: Date | string
    createdById: string
  }

  export type ActivityUpdateWithoutContactInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    needFollowUp?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: EnumActivityTypeFieldUpdateOperationsInput | $Enums.ActivityType
    followUpDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    addedBy?: UserUpdateOneRequiredWithoutAddedActivitiesNestedInput
    tags?: TagUpdateManyWithoutActivitiesNestedInput
    assignedTo?: UserUpdateOneWithoutActivityFollowUpsNestedInput
    followUpActivity?: ActivityUpdateOneWithoutFollowUpActivitiesNestedInput
    followUpActivities?: ActivityUpdateManyWithoutFollowUpActivityNestedInput
  }

  export type ActivityUncheckedUpdateWithoutContactInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    addedById?: StringFieldUpdateOperationsInput | string
    needFollowUp?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: EnumActivityTypeFieldUpdateOperationsInput | $Enums.ActivityType
    followUpDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    assignedToId?: NullableStringFieldUpdateOperationsInput | string | null
    followUpActivityId?: NullableStringFieldUpdateOperationsInput | string | null
    tags?: TagUncheckedUpdateManyWithoutActivitiesNestedInput
    followUpActivities?: ActivityUncheckedUpdateManyWithoutFollowUpActivityNestedInput
  }

  export type ActivityUncheckedUpdateManyWithoutContactInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    addedById?: StringFieldUpdateOperationsInput | string
    needFollowUp?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: EnumActivityTypeFieldUpdateOperationsInput | $Enums.ActivityType
    followUpDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    assignedToId?: NullableStringFieldUpdateOperationsInput | string | null
    followUpActivityId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type NoteUpdateWithoutContactInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    category?: EnumNoteCategoryFieldUpdateOperationsInput | $Enums.NoteCategory
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: UserUpdateOneRequiredWithoutCreatedNotesNestedInput
  }

  export type NoteUncheckedUpdateWithoutContactInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    category?: EnumNoteCategoryFieldUpdateOperationsInput | $Enums.NoteCategory
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdById?: StringFieldUpdateOperationsInput | string
  }

  export type NoteUncheckedUpdateManyWithoutContactInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    category?: EnumNoteCategoryFieldUpdateOperationsInput | $Enums.NoteCategory
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdById?: StringFieldUpdateOperationsInput | string
  }

  export type TagUpdateWithoutContactsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    tagType?: EnumTagTypeFieldUpdateOperationsInput | $Enums.TagType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdOrganisation?: OrganisationUpdateOneRequiredWithoutCreatedTagsNestedInput
    organisations?: OrganisationUpdateManyWithoutTagsNestedInput
    activities?: ActivityUpdateManyWithoutTagsNestedInput
  }

  export type TagUncheckedUpdateWithoutContactsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    tagType?: EnumTagTypeFieldUpdateOperationsInput | $Enums.TagType
    createdOrganisationId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    organisations?: OrganisationUncheckedUpdateManyWithoutTagsNestedInput
    activities?: ActivityUncheckedUpdateManyWithoutTagsNestedInput
  }

  export type TagUncheckedUpdateManyWithoutContactsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    tagType?: EnumTagTypeFieldUpdateOperationsInput | $Enums.TagType
    createdOrganisationId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
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