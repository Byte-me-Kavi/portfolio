"use client";

import dynamic from "next/dynamic";
import { ReactNode } from "react";

interface ClientWrapperProps {
  children: ReactNode;
}

const ClientWrapper = ({ children }: ClientWrapperProps) => {
  return <>{children}</>;
};

export default dynamic(() => Promise.resolve(ClientWrapper), {
  ssr: false,
});
