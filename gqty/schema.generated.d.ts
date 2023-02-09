/**
 * GQTY AUTO-GENERATED CODE: PLEASE DO NOT MODIFY MANUALLY
 */

export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
/** All built-in and custom scalars, mapped to their actual values */
export interface Scalars {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
}

export interface Condition {
  sql: Scalars["String"];
  val: Array<Scalars["String"]>;
}

export interface InputCategories {
  id?: InputMaybe<Scalars["Int"]>;
  title?: InputMaybe<Scalars["String"]>;
}

export interface InputPosts {
  categories_id?: InputMaybe<Scalars["Int"]>;
  id?: InputMaybe<Scalars["Int"]>;
  publish?: InputMaybe<Scalars["Boolean"]>;
  title?: InputMaybe<Scalars["String"]>;
  users_id?: InputMaybe<Scalars["Int"]>;
}

export interface InputUsers {
  firstname?: InputMaybe<Scalars["String"]>;
  id?: InputMaybe<Scalars["Int"]>;
  lastname?: InputMaybe<Scalars["String"]>;
  password?: InputMaybe<Scalars["String"]>;
  username?: InputMaybe<Scalars["String"]>;
}

export declare const scalarsEnumsHash: import("gqty").ScalarsEnumsHash;
export declare const generatedSchema: {
  Categories: {
    __typename: { __type: "String!" };
    id: { __type: "Int" };
    posts: {
      __type: "PagePosts";
      __args: {
        _cache: "Boolean";
        _debug: "Boolean";
        filter: "String";
        pagination: "String";
        where: "Condition";
      };
    };
    title: { __type: "String" };
  };
  Condition: { sql: { __type: "String!" }; val: { __type: "[String!]!" } };
  InputCategories: { id: { __type: "Int" }; title: { __type: "String" } };
  InputPosts: {
    categories_id: { __type: "Int" };
    id: { __type: "Int" };
    publish: { __type: "Boolean" };
    title: { __type: "String" };
    users_id: { __type: "Int" };
  };
  InputUsers: {
    firstname: { __type: "String" };
    id: { __type: "Int" };
    lastname: { __type: "String" };
    password: { __type: "String" };
    username: { __type: "String" };
  };
  PageCategories: {
    __typename: { __type: "String!" };
    items: { __type: "[Categories]" };
    total: { __type: "Int" };
  };
  PagePosts: {
    __typename: { __type: "String!" };
    items: { __type: "[Posts]" };
    total: { __type: "Int" };
  };
  PageUsers: {
    __typename: { __type: "String!" };
    items: { __type: "[Users]" };
    total: { __type: "Int" };
  };
  Posts: {
    __typename: { __type: "String!" };
    categories_id: { __type: "Int" };
    categories_id_categories: { __type: "Categories" };
    id: { __type: "Int" };
    publish: { __type: "Boolean" };
    title: { __type: "String" };
    users_id: { __type: "Int" };
    users_id_users: { __type: "Users" };
  };
  Users: {
    __typename: { __type: "String!" };
    firstname: { __type: "String" };
    fullname: { __type: "String"; __args: { foo: "String" } };
    id: { __type: "Int" };
    lastname: { __type: "String" };
    password: { __type: "String" };
    posts: {
      __type: "PagePosts";
      __args: {
        _cache: "Boolean";
        _debug: "Boolean";
        filter: "String";
        pagination: "String";
        where: "Condition";
      };
    };
    username: { __type: "String" };
  };
  mutation: {
    __typename: { __type: "String!" };
    putItemCategories: {
      __type: "Categories";
      __args: { _debug: "Boolean"; input: "InputCategories!" };
    };
    putItemPosts: {
      __type: "Posts";
      __args: { _debug: "Boolean"; input: "InputPosts!" };
    };
    putItemUsers: {
      __type: "Users";
      __args: { _debug: "Boolean"; input: "InputUsers!" };
    };
  };
  query: {
    __typename: { __type: "String!" };
    getAPIName: { __type: "String" };
    getFirstCategories: {
      __type: "Categories";
      __args: {
        _cache: "Boolean";
        _debug: "Boolean";
        filter: "String";
        pagination: "String";
        where: "Condition";
      };
    };
    getFirstPosts: {
      __type: "Posts";
      __args: {
        _cache: "Boolean";
        _debug: "Boolean";
        filter: "String";
        pagination: "String";
        where: "Condition";
      };
    };
    getFirstUsers: {
      __type: "Users";
      __args: {
        _cache: "Boolean";
        _debug: "Boolean";
        filter: "String";
        pagination: "String";
        where: "Condition";
      };
    };
    getPageCategories: {
      __type: "PageCategories";
      __args: {
        _cache: "Boolean";
        _debug: "Boolean";
        filter: "String";
        pagination: "String";
        where: "Condition";
      };
    };
    getPagePosts: {
      __type: "PagePosts";
      __args: {
        _cache: "Boolean";
        _debug: "Boolean";
        filter: "String";
        pagination: "String";
        where: "Condition";
      };
    };
    getPageUsers: {
      __type: "PageUsers";
      __args: {
        _cache: "Boolean";
        _debug: "Boolean";
        filter: "String";
        pagination: "String";
        where: "Condition";
      };
    };
  };
  subscription: {};
};

export interface Categories {
  __typename?: "Categories";
  id?: Maybe<ScalarsEnums["Int"]>;
  posts: (args?: {
    _cache?: Maybe<Scalars["Boolean"]>;
    _debug?: Maybe<Scalars["Boolean"]>;
    filter?: Maybe<Scalars["String"]>;
    pagination?: Maybe<Scalars["String"]>;
    where?: Maybe<Condition>;
  }) => Maybe<PagePosts>;
  title?: Maybe<ScalarsEnums["String"]>;
}

export interface PageCategories {
  __typename?: "PageCategories";
  items?: Maybe<Array<Maybe<Categories>>>;
  total?: Maybe<ScalarsEnums["Int"]>;
}

export interface PagePosts {
  __typename?: "PagePosts";
  items?: Maybe<Array<Maybe<Posts>>>;
  total?: Maybe<ScalarsEnums["Int"]>;
}

export interface PageUsers {
  __typename?: "PageUsers";
  items?: Maybe<Array<Maybe<Users>>>;
  total?: Maybe<ScalarsEnums["Int"]>;
}

export interface Posts {
  __typename?: "Posts";
  categories_id?: Maybe<ScalarsEnums["Int"]>;
  categories_id_categories?: Maybe<Categories>;
  id?: Maybe<ScalarsEnums["Int"]>;
  publish?: Maybe<ScalarsEnums["Boolean"]>;
  title?: Maybe<ScalarsEnums["String"]>;
  users_id?: Maybe<ScalarsEnums["Int"]>;
  users_id_users?: Maybe<Users>;
}

export interface Users {
  __typename?: "Users";
  firstname?: Maybe<ScalarsEnums["String"]>;
  fullname: (args?: {
    foo?: Maybe<Scalars["String"]>;
  }) => Maybe<ScalarsEnums["String"]>;
  id?: Maybe<ScalarsEnums["Int"]>;
  lastname?: Maybe<ScalarsEnums["String"]>;
  password?: Maybe<ScalarsEnums["String"]>;
  posts: (args?: {
    _cache?: Maybe<Scalars["Boolean"]>;
    _debug?: Maybe<Scalars["Boolean"]>;
    filter?: Maybe<Scalars["String"]>;
    pagination?: Maybe<Scalars["String"]>;
    where?: Maybe<Condition>;
  }) => Maybe<PagePosts>;
  username?: Maybe<ScalarsEnums["String"]>;
}

export interface Mutation {
  __typename?: "Mutation";
  putItemCategories: (args: {
    _debug?: Maybe<Scalars["Boolean"]>;
    input: InputCategories;
  }) => Maybe<Categories>;
  putItemPosts: (args: {
    _debug?: Maybe<Scalars["Boolean"]>;
    input: InputPosts;
  }) => Maybe<Posts>;
  putItemUsers: (args: {
    _debug?: Maybe<Scalars["Boolean"]>;
    input: InputUsers;
  }) => Maybe<Users>;
}

export interface Query {
  __typename?: "Query";
  getAPIName?: Maybe<ScalarsEnums["String"]>;
  getFirstCategories: (args?: {
    _cache?: Maybe<Scalars["Boolean"]>;
    _debug?: Maybe<Scalars["Boolean"]>;
    filter?: Maybe<Scalars["String"]>;
    pagination?: Maybe<Scalars["String"]>;
    where?: Maybe<Condition>;
  }) => Maybe<Categories>;
  getFirstPosts: (args?: {
    _cache?: Maybe<Scalars["Boolean"]>;
    _debug?: Maybe<Scalars["Boolean"]>;
    filter?: Maybe<Scalars["String"]>;
    pagination?: Maybe<Scalars["String"]>;
    where?: Maybe<Condition>;
  }) => Maybe<Posts>;
  getFirstUsers: (args?: {
    _cache?: Maybe<Scalars["Boolean"]>;
    _debug?: Maybe<Scalars["Boolean"]>;
    filter?: Maybe<Scalars["String"]>;
    pagination?: Maybe<Scalars["String"]>;
    where?: Maybe<Condition>;
  }) => Maybe<Users>;
  getPageCategories: (args?: {
    _cache?: Maybe<Scalars["Boolean"]>;
    _debug?: Maybe<Scalars["Boolean"]>;
    filter?: Maybe<Scalars["String"]>;
    pagination?: Maybe<Scalars["String"]>;
    where?: Maybe<Condition>;
  }) => Maybe<PageCategories>;
  getPagePosts: (args?: {
    _cache?: Maybe<Scalars["Boolean"]>;
    _debug?: Maybe<Scalars["Boolean"]>;
    filter?: Maybe<Scalars["String"]>;
    pagination?: Maybe<Scalars["String"]>;
    where?: Maybe<Condition>;
  }) => Maybe<PagePosts>;
  getPageUsers: (args?: {
    _cache?: Maybe<Scalars["Boolean"]>;
    _debug?: Maybe<Scalars["Boolean"]>;
    filter?: Maybe<Scalars["String"]>;
    pagination?: Maybe<Scalars["String"]>;
    where?: Maybe<Condition>;
  }) => Maybe<PageUsers>;
}

export interface Subscription {
  __typename?: "Subscription";
}

export interface SchemaObjectTypes {
  Categories: Categories;
  Mutation: Mutation;
  PageCategories: PageCategories;
  PagePosts: PagePosts;
  PageUsers: PageUsers;
  Posts: Posts;
  Query: Query;
  Subscription: Subscription;
  Users: Users;
}
export type SchemaObjectTypesNames =
  | "Categories"
  | "Mutation"
  | "PageCategories"
  | "PagePosts"
  | "PageUsers"
  | "Posts"
  | "Query"
  | "Subscription"
  | "Users";

export interface GeneratedSchema {
  query: Query;
  mutation: Mutation;
  subscription: Subscription;
}

export type MakeNullable<T> = {
  [K in keyof T]: T[K] | undefined;
};

export interface ScalarsEnums extends MakeNullable<Scalars> {}
