import GlobalStyles from "@/styles/global";
import { PropsWithChildren } from "react";

const Providers = ({ children }: PropsWithChildren) => {
  return (
    <>
      <GlobalStyles />
      {children}
    </>
  );
};

export default Providers;
