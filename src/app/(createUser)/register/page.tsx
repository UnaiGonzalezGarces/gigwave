import { getUserId } from '@/utils/GetUserId';
import { db } from '@/lib/db';
import { NextResponse } from 'next/server';
import { redirect } from 'next/navigation';

export async function createUser() {
  try {
    const userId = await getUserId();

    if (!userId) {
      return new NextResponse('Unauthorized', { status: 401 });
    }

    const user = await db.user.create({
      data: {
        id: userId,
      },
    });

    return NextResponse.json(user);
  } catch (error) {
    console.error(error.stack);
    return new NextResponse('Internal Error', { status: 500 });
  }
}

const Register = () => {
  createUser();
  redirect('/feed');
};

export default Register;
