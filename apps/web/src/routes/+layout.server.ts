/*

  @website/web/src/routes/+layout.server.ts

  This file contains the redirect function.

  Copyright (C) 2023, Anokidev. All right reserved.
  This webiste is open source and is Licensed in MIT License.

*/

import { redirect } from '@sveltejs/kit';

// Redirect to /home.
export function load({url}: any) {
  if (url.pathname == "/") {
    throw redirect(307, '/home');
  };
};