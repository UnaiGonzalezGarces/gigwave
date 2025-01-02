export default function LayoutAuth({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className='flex flex-col justify-center h-[100vh] items-center'>
      {children}
    </div>
  );
}
