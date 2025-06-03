"use client";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CarouselTruck } from "./CarouselTruck";
import { CarouselAutomobiles } from "./CarouselAutomobiles";
import { CarouselMotorcycle } from "./CarouselMotorcycle";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function TabsBluemoon() {
  return (
    <section className="relative overflow-x-clip">
      <Tabs defaultValue="truck" className="w-screen">
        <TabsList>
          {/* Fullscreen selector */}
          <div className="hidden sm:block">
            <TabsTrigger value="truck" className="mx-5">
              <h3 className="text-xl leading-loose font-semibold transition-colors duration-10 sm:text-2xl">
                Truck
              </h3>
            </TabsTrigger>
            <TabsTrigger value="automobiles" className="mx-5">
              <h3 className="text-xl leading-loose font-semibold transition-colors duration-10 sm:text-2xl">
                Automobiles
              </h3>
            </TabsTrigger>
            <TabsTrigger value="motorcycle" className="mx-5">
              <h3 className="text-xl leading-loose font-semibold transition-colors duration-10 sm:text-2xl">
                Motorcycle
              </h3>
            </TabsTrigger>
          </div>
          {/* Fullscreen selector */}

          {/* Mobile selector */}
          <div className="block sm:hidden">
            <Select>
              <SelectTrigger className="w-auto">
                <SelectValue placeholder="Choose Category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="truck">
                  {" "}
                  <TabsTrigger value="truck">
                    <h3 className="text-xl font-semibold">Truck</h3>
                  </TabsTrigger>
                </SelectItem>
                <SelectItem value="automobiles">
                  {" "}
                  <TabsTrigger value="automobiles">
                    <h3 className="text-xl font-semibold">Automobiles</h3>
                  </TabsTrigger>
                </SelectItem>
                <SelectItem value="motorcycle">
                  {" "}
                  <TabsTrigger value="motorcycle">
                    <h3 className="text-xl font-semibold">Motorcycle</h3>
                  </TabsTrigger>
                </SelectItem>
              </SelectContent>
            </Select>
          </div>
          {/* Mobile selector */}
        </TabsList>
        <TabsContent value="truck">
          <CarouselTruck></CarouselTruck>
        </TabsContent>
        <TabsContent value="automobiles">
          <CarouselAutomobiles></CarouselAutomobiles>
        </TabsContent>
        <TabsContent value="motorcycle">
          <CarouselMotorcycle></CarouselMotorcycle>
        </TabsContent>
      </Tabs>
    </section>
  );
}
