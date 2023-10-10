"use client";
import { BaseForm } from "godown/react";
import type { BaseForm as BaseFromType } from "godown";
import { forwardRef, useRef, useImperativeHandle } from "react";

interface PropsType {
  children?: React.ReactNode;
}

export interface RefType {
  value: () => {
    account?: string;
    namespace?: string;
    email?: string;
    password?: string;
    passwordVerify?: string;
  };
}

export default forwardRef<RefType, PropsType>((props, ref) => {
  const cRef = useRef<BaseFromType | null>(null);
  useImperativeHandle(ref, () => {
    return {
      value: () => {
        if (cRef.current?.namevalue) {
          return cRef.current.namevalue()[1];
        }
        return {};
      },
    };
  });
  return <BaseForm ref={cRef}>{props.children}</BaseForm>;
});
