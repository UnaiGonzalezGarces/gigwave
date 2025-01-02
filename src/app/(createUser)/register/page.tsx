import { PrismaClient } from '@prisma/client';
import { getUserId } from '@/utils/GetUserId';
import { redirect } from 'next/navigation';

const prisma = new PrismaClient();

export async function createUser() {
  const userId = await getUserId();

  if (!userId) {
    return null;
  }

  const user = await prisma.user.create({
    data: {
      id: userId,
    },
  });

  return user;
}

const Register = () => {
  createUser();
  //   redirect('/feed');
  return <h1>Register</h1>;
};

export default Register;
