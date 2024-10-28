import * as React from "react";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import toofan from "@/images/toofan.jpeg";
import unishBish from "@/images/unish20.webp";
import morichika from "@/images/morichika.webp";
import Image from "next/image";
export function CarouselSize() {
  const banners = [{ movie: toofan }, { ser: unishBish }, { web: morichika }];
  return (
    <Carousel
      opts={{
        align: "start",
      }}
      className="w-full max-w-sm"
    >
      <CarouselContent>
        {Array.from({ length: 9 }).map((_, index) => (
          <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3 ">
            <div className="p-1">
              <Card>
                <CardContent className="">
                  {banners.map((banner) => (
                    <>
                      <Image key={index} src={banner.movie} alt=""></Image>
                      <Image key={index} src={banner.ser} alt=""></Image>
                    </>
                  ))}
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
