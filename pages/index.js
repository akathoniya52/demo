import { Inter } from "next/font/google";
import { useSession, signIn } from "next-auth/react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const session = useSession();
  // if (session.data === null) {
  //   return (
  //     <>
  //       <button onClick={signIn}>Login</button>
  //     </>
  //   );
  // }

  console.log(session);
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
      <h1>Hello, Users Amit</h1>
    </main>
  );
}
