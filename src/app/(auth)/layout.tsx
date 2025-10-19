import { Layout } from "@/features/auth/components/auth-layout";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const LayoutAuth = ({ children }: { children: React.ReactNode }) => {
  return <Layout>{children}</Layout>;
};

export default LayoutAuth;
