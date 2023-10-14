import { Suspense } from "react";
import Loading from "../components/loading";

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <>
    {/* Loading Page needs to be customized later */}
      <Suspense fallback={<Loading />}>
        <div></div>
        {children}
      </Suspense>
    </>
  );
}
