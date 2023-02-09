/**
 * GQTY AUTO-GENERATED CODE: PLEASE DO NOT MODIFY MANUALLY
 */

/**
 * @type {import("gqty").ScalarsEnumsHash}
 */
export const scalarsEnumsHash = { Boolean: true, Int: true, String: true };

export const generatedSchema = {
  Categories: {
    __typename: { __type: "String!" },
    id: { __type: "Int" },
    posts: {
      __type: "PagePosts",
      __args: {
        _cache: "Boolean",
        _debug: "Boolean",
        filter: "String",
        pagination: "String",
        where: "Condition",
      },
    },
    title: { __type: "String" },
  },
  Condition: { sql: { __type: "String!" }, val: { __type: "[String!]!" } },
  InputCategories: { id: { __type: "Int" }, title: { __type: "String" } },
  InputPosts: {
    categories_id: { __type: "Int" },
    id: { __type: "Int" },
    publish: { __type: "Boolean" },
    title: { __type: "String" },
    users_id: { __type: "Int" },
  },
  InputUsers: {
    firstname: { __type: "String" },
    id: { __type: "Int" },
    lastname: { __type: "String" },
    password: { __type: "String" },
    username: { __type: "String" },
  },
  PageCategories: {
    __typename: { __type: "String!" },
    items: { __type: "[Categories]" },
    total: { __type: "Int" },
  },
  PagePosts: {
    __typename: { __type: "String!" },
    items: { __type: "[Posts]" },
    total: { __type: "Int" },
  },
  PageUsers: {
    __typename: { __type: "String!" },
    items: { __type: "[Users]" },
    total: { __type: "Int" },
  },
  Posts: {
    __typename: { __type: "String!" },
    categories_id: { __type: "Int" },
    categories_id_categories: { __type: "Categories" },
    id: { __type: "Int" },
    publish: { __type: "Boolean" },
    title: { __type: "String" },
    users_id: { __type: "Int" },
    users_id_users: { __type: "Users" },
  },
  Users: {
    __typename: { __type: "String!" },
    firstname: { __type: "String" },
    fullname: { __type: "String", __args: { foo: "String" } },
    id: { __type: "Int" },
    lastname: { __type: "String" },
    password: { __type: "String" },
    posts: {
      __type: "PagePosts",
      __args: {
        _cache: "Boolean",
        _debug: "Boolean",
        filter: "String",
        pagination: "String",
        where: "Condition",
      },
    },
    username: { __type: "String" },
  },
  mutation: {
    __typename: { __type: "String!" },
    putItemCategories: {
      __type: "Categories",
      __args: { _debug: "Boolean", input: "InputCategories!" },
    },
    putItemPosts: {
      __type: "Posts",
      __args: { _debug: "Boolean", input: "InputPosts!" },
    },
    putItemUsers: {
      __type: "Users",
      __args: { _debug: "Boolean", input: "InputUsers!" },
    },
  },
  query: {
    __typename: { __type: "String!" },
    getAPIName: { __type: "String" },
    getFirstCategories: {
      __type: "Categories",
      __args: {
        _cache: "Boolean",
        _debug: "Boolean",
        filter: "String",
        pagination: "String",
        where: "Condition",
      },
    },
    getFirstPosts: {
      __type: "Posts",
      __args: {
        _cache: "Boolean",
        _debug: "Boolean",
        filter: "String",
        pagination: "String",
        where: "Condition",
      },
    },
    getFirstUsers: {
      __type: "Users",
      __args: {
        _cache: "Boolean",
        _debug: "Boolean",
        filter: "String",
        pagination: "String",
        where: "Condition",
      },
    },
    getPageCategories: {
      __type: "PageCategories",
      __args: {
        _cache: "Boolean",
        _debug: "Boolean",
        filter: "String",
        pagination: "String",
        where: "Condition",
      },
    },
    getPagePosts: {
      __type: "PagePosts",
      __args: {
        _cache: "Boolean",
        _debug: "Boolean",
        filter: "String",
        pagination: "String",
        where: "Condition",
      },
    },
    getPageUsers: {
      __type: "PageUsers",
      __args: {
        _cache: "Boolean",
        _debug: "Boolean",
        filter: "String",
        pagination: "String",
        where: "Condition",
      },
    },
  },
  subscription: {},
};
