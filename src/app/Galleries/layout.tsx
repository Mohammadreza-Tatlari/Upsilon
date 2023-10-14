import { Suspense } from "react";
import Loading from "../components/loading";
export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div></div>
      <Suspense fallback={<Loading />}>
      {children}
      </Suspense>
    </>
  );
}
