import React from "react";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

const SkeletonBox = ({ className = "" }: { className?: string }) => (
  <div className={`bg-gray-300 rounded animate-pulse ${className}`} />
);

const Loading = () => {
  return (
    <section className="animate-pulse">
      <header className="flex justify-between items-center px-4 w-11/12 max-w-7xl mx-auto py-4">
        <SkeletonBox className="w-32 h-6" />
        <div className="flex-1 flex items-center justify-end gap-4">
          <SkeletonBox className="w-48 h-10" />
          <SkeletonBox className="w-20 h-10" />
        </div>
      </header>

      <div className="max-w-6xl w-11/12 mx-auto px-8">
        <div className="flex items-start gap-8 justify-between mt-8">
          <section className="grid grid-cols-3 grid-rows-[200px_150px] gap-2 w-1/2">
            <Card className="col-span-2 h-[200px] p-4 flex flex-col gap-4">
              <SkeletonBox className="h-6 w-32" />
              <div className="flex items-center justify-between gap-4 mt-auto">
                <div className="flex gap-3 items-center">
                  <SkeletonBox className="w-[60px] h-[60px] rounded-full" />
                  <div className="flex flex-col gap-2">
                    <SkeletonBox className="h-6 w-24" />
                    <SkeletonBox className="h-3 w-32" />
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <SkeletonBox className="h-4 w-12" />
                  <SkeletonBox className="h-4 w-12" />
                </div>
              </div>
            </Card>

            {[...Array(4)].map((_, i) => (
              <Card key={i} className="h-[150px] p-4 flex flex-col ">
                <SkeletonBox className="h-4 w-24" />
                <SkeletonBox className="h-8 w-1/2" />
                <div className="mt-auto">
                  <SkeletonBox className="h-6 w-10 rounded-full" />
                </div>
              </Card>
            ))}
          </section>

          <div className="w-1/2 h-[350px] bg-gray-300 rounded-2xl animate-pulse" />
        </div>

        <section className="mt-20 mb-16 w-full">
          <SkeletonBox className="h-12 w-64 mb-5 rounded-lg" />
          {[...Array(4)].map((_, i) => (
            <div key={i} className="mb-4">
              <div className="flex items-center justify-between py-5 gap-4">
                {[...Array(6)].map((_, j) => (
                  <SkeletonBox key={j} className="h-6 w-20" />
                ))}
              </div>
              <Separator />
            </div>
          ))}
        </section>
      </div>
    </section>
  );
};

export default Loading;
