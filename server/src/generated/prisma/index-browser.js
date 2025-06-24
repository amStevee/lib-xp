
Object.defineProperty(exports, "__esModule", { value: true });

const {
  Decimal,
  objectEnumValues,
  makeStrictEnum,
  Public,
} = require('./runtime/index-browser')


const Prisma = {}

exports.Prisma = Prisma

/**
 * Prisma Client JS version: 4.16.2
 * Query Engine version: 4bc8b6e1b66cb932731fb1bdbbc550d1e010de81
 */
Prisma.prismaVersion = {
  client: "4.16.2",
  engine: "4bc8b6e1b66cb932731fb1bdbbc550d1e010de81"
}

Prisma.PrismaClientKnownRequestError = () => {
  throw new Error(`PrismaClientKnownRequestError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)};
Prisma.PrismaClientUnknownRequestError = () => {
  throw new Error(`PrismaClientUnknownRequestError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.PrismaClientRustPanicError = () => {
  throw new Error(`PrismaClientRustPanicError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.PrismaClientInitializationError = () => {
  throw new Error(`PrismaClientInitializationError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.PrismaClientValidationError = () => {
  throw new Error(`PrismaClientValidationError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.NotFoundError = () => {
  throw new Error(`NotFoundError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = () => {
  throw new Error(`sqltag is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.empty = () => {
  throw new Error(`empty is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.join = () => {
  throw new Error(`join is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.raw = () => {
  throw new Error(`raw is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.validator = Public.validator

/**
* Extensions
*/
Prisma.getExtensionContext = () => {
  throw new Error(`Extensions.getExtensionContext is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.defineExtension = () => {
  throw new Error(`Extensions.defineExtension is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}

/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull
Prisma.JsonNull = objectEnumValues.instances.JsonNull
Prisma.AnyNull = objectEnumValues.instances.AnyNull

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull
}

/**
 * Enums
 */

exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
  ReadUncommitted: 'ReadUncommitted',
  ReadCommitted: 'ReadCommitted',
  RepeatableRead: 'RepeatableRead',
  Serializable: 'Serializable'
});

exports.Prisma.SessionScalarFieldEnum = {
  id: 'id',
  sid: 'sid',
  data: 'data',
  expiresAt: 'expiresAt'
};

exports.Prisma.LibrarianScalarFieldEnum = {
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

exports.Prisma.BookScalarFieldEnum = {
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

exports.Prisma.EmailVerificationTokenScalarFieldEnum = {
  id: 'id',
  email: 'email',
  token: 'token',
  expiresAt: 'expiresAt',
  createdAt: 'createdAt'
};

exports.Prisma.PatronScalarFieldEnum = {
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

exports.Prisma.Book_likesScalarFieldEnum = {
  book_id: 'book_id',
  patron_id: 'patron_id',
  liked_at: 'liked_at'
};

exports.Prisma.Book_consultedScalarFieldEnum = {
  book_id: 'book_id',
  patron_id: 'patron_id',
  consulted_at: 'consulted_at'
};

exports.Prisma.CirculationScalarFieldEnum = {
  book_id: 'book_id',
  patron_id: 'patron_id',
  checkout: 'checkout',
  date_due: 'date_due'
};

exports.Prisma.SortOrder = {
  asc: 'asc',
  desc: 'desc'
};

exports.Prisma.QueryMode = {
  default: 'default',
  insensitive: 'insensitive'
};

exports.Prisma.NullsOrder = {
  first: 'first',
  last: 'last'
};
exports.GMD = {
  Monograph: 'Monograph',
  Serial: 'Serial',
  Palmphlet: 'Palmphlet',
  Dictionary: 'Dictionary'
};

exports.Prisma.ModelName = {
  Session: 'Session',
  Librarian: 'Librarian',
  Book: 'Book',
  EmailVerificationToken: 'EmailVerificationToken',
  Patron: 'Patron',
  Book_likes: 'Book_likes',
  Book_consulted: 'Book_consulted',
  Circulation: 'Circulation'
};

/**
 * Create the Client
 */
class PrismaClient {
  constructor() {
    throw new Error(
      `PrismaClient is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
    )
  }
}
exports.PrismaClient = PrismaClient

Object.assign(exports, Prisma)
