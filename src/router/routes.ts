import React from "react";
import Contacts from "../pages/Contacts";
import Login from "../pages/Login";

export interface IRoute {
  path: string;
  element: React.ComponentType;
}

export enum RouteNames {
  LOGIN = "/login",
  CONTACTS = "/",
  NOT_FOUND = "*",
}

export const publicRoutes: IRoute[] = [
  { path: RouteNames.LOGIN, element: Login },
  { path: RouteNames.NOT_FOUND, element: Login},
]

export const privateRoutes: IRoute[] = [
  { path: RouteNames.CONTACTS, element: Contacts },
  { path: RouteNames.NOT_FOUND, element: Contacts},
]
