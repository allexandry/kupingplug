"use client";
// package
import Link from "next/link";
import Image from "next/image";

// ui
import Text from "@/ui/text";
import Button from "@/ui/button";

// form
import Input from "@/form/input";

import { Select, SelectContent, SelectIcon, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/ui/select";

// lib
import { cn } from "@/lib/utils";

import { getCountryList } from "@/lib/countriesList";

import { getDialCode } from "@/lib/getcountrycode";

import { getCountryFlag } from "@/lib/countryflag";
import { ChevronDown } from "lucide-react";
import { FormEvent } from "react";



export default function Page(this: any) {

  var countries: string[] = getCountryList();

  var getflag: string = getCountryFlag(null);

  let scountry: string = "Burkina Faso";

  var selectedDialCode: string = getDialCode(scountry);


  function handelCountryChange(selectedCountry: string): void {

    selectedDialCode = getDialCode(selectedCountry);
    getflag = getCountryFlag(selectedCountry);
    scountry = selectedCountry;
    document.getElementById("selected_dial_code")!.innerHTML = selectedDialCode;
    document.getElementById("selected_dial_code")!.setAttribute("value", selectedDialCode);

    document.getElementById("selected_flag")!.setAttribute("src", getflag);
  }

  function handleSignUp(event: FormEvent<HTMLFormElement>): void {
    console.log("Form submitted");
  }

  return (
    <div className="relative bg-[#F3F5F7] lg:min-h-screen">
      <div
        className={cn([
          "grid lg:grid-cols-2",
          "max-w-[1440px]",
          "lg:rounded-lg lg:shadow-2xl",
          "lg:max-h-[720px]",
          "lg:absolute lg:inset-0 lg:m-auto",
        ])}
      >
        <div className="relative flex items-center justify-center bg-[#F3F5F7] p-8 pt-20 lg:h-full lg:rounded-l-lg">
          <Text
            family="poppins"
            size="3xl"
            color="black/900"
            weight={700}
            className="absolute left-0 top-8 w-full text-center"
          >
            <span>Arch&apos;</span> <span className="text-[#0c4cc3]">Afrik</span> <span className="text-[#38CB89]"> &trade;</span>
          </Text>

          <Image
            src="/images/lgpre.jpg"
            width={2000}
            height={2000}
            alt="auth"
            className="w-full max-w-[420px] lg:h-[430px] lg:w-auto lg:max-w-none"
          />
        </div>

        <div className="flex justify-center bg-white lg:rounded-r-lg">
          <div
            className={cn([
              "w-full",
              "flex flex-col gap-8 lg:justify-center",
              "px-8 py-10 lg:px-[88px]",
              "sm:max-w-[480px] md:max-w-[520px] lg:max-w-[560px] lg:max-w-[560px]",
            ])}
          >
            <div className="space-y-6">
              <h1 className="font-poppins text-[40px] font-medium text-[#121212]">
                <center>
                  Rejoindre
                </center>
              </h1>
              <Text weight={400} color="gray">
                Already have an account?{" "}
                <span className="font-semibold text-[#0c4cc3] hover:underline">
                  <Link href="/sign-in">Sign In</Link>
                </span>
              </Text>
            </div>
            <div className="space-y-8">
              <form onSubmit={handleSignUp}>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="h-9 w-9 overflow-hidden rounded-full border border-[#E8ECEF] flex items-center justify-center">
                      <Image
                        src="https://flagcdn.com/h80/bf.png"
                        id="selected_flag"
                        alt="Country Flag"
                        width={36}
                        height={36}
                        className="object-cover w-full h-full"
                      />
                    </div>
                    <Select defaultValue={countries[0]} onValueChange={handelCountryChange} required>
                      <SelectTrigger
                        className={cn(
                          "group",
                          "h-9",
                          "rounded-lg",
                          "border border-[#6C7275]",
                          "pl-4 pr-2",
                          "flex items-center justify-between",
                          "font-inter font-semibold",
                          "text-sm text-[#141718]",
                          "focus:ring-0 focus:ring-offset-0",
                        )}
                      >
                        <SelectValue />
                        <SelectIcon asChild>
                          <ChevronDown
                            color="#6C7275"
                            className="h-5 w-5 transition-transform duration-200 group-data-[state=open]:rotate-180"
                          />
                        </SelectIcon>
                      </SelectTrigger>

                      <SelectContent className="rounded-xl">
                        {countries.map((scountry) => (
                          <SelectItem
                            key={scountry}
                            value={scountry}
                            className={cn(
                              "cursor-pointer",
                              "rounded-lg",
                              "p-2",
                              "font-inter font-normal",
                              "text-sm text-[#6C7275]",
                              "focus:bg-[#F3F5F7] focus:text-[#141718]",
                              "data-[state=checked]:font-semibold data-[state=checked]:text-[#141718]",
                            )}
                          >
                            {scountry}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="border-b border-[#E8ECEF] pb-2 focus-within:border-[#141718]">
                    <span id="selected_dial_code" className="m-2">+226</span>
                    <Input intent="secondary" type="number" placeholder="Phone number" id="pNumber" onBlur={() => console.log(selectedDialCode + (document.getElementById('pNumber')! as HTMLInputElement).value)} />
                  </div>
                </div>
                <div className="space-y-8">


                  <div className="flex items-center gap-3">
                    <input
                      type="checkbox"
                      id="uer-agree-checkbox"
                      className="h-6 w-6 rounded-md border border-[#6C7275] accent-[#0c4cc3]"
                    />
                    <Text
                      size="xs"
                      weight={400}
                      color="gray"
                      className="md:text-sm"
                    >
                      I agree with{" "}
                      <span className="font-semibold text-[#141718]">
                        Privacy Policy
                      </span>{" "}
                      and{" "}
                      <span className="font-semibold text-[#141718]">
                        Terms of Use
                      </span>
                    </Text>
                    <br />
                    <br />
                  </div>
                </div>
                <br />
                <br />
                <Button width="full" className="py-2.5" variant={"secondary"} type="submit">
                  Sign Up
                </Button>
              </form>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
