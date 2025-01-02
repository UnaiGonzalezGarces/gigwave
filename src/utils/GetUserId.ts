'use server';

import { currentUser } from '@clerk/nextjs/server';

export async function getUserId() {
  const user = await currentUser();

  if (!user) {
    return null;
  }

  return user.id;
}

export async function getUser() {
  const user = await currentUser();

  if (!user) {
    return null;
  }
}
