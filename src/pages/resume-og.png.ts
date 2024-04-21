import { ImageResponse } from "@vercel/og";
import type { APIRoute } from "astro";
import { readFileSync } from "fs";

export const GET: APIRoute = () => {
  const NotoSansMono = readFileSync(`${process.cwd()}/public/fonts/NotoSansMono-Bold.ttf`);

  const html = {
    type: "div",
    props: {
      children: [
        {
          type: "div",
          props: {
            style: {
              fontSize: "48px",
              fontFamily: "Noto Sans Mono",
            },
            children: "Resume Page",
          },
        },
        {
          type: "div",
          props: {
            tw: "absolute right-[40px] bottom-[40px] flex items-center",
            children: [
              {
                type: "div",
                props: {
                  tw: "text-blue-500 text-3xl",
                  style: {
                    fontFamily: "Noto Sans Mono",
                  },
                  children: "Roman Ospanov",
                },
              },
              {
                type: "div",
                props: {
                  tw: "px-2 text-3xl",
                  style: {
                    fontSize: "30px",
                  },
                  children: "|",
                },
              },
              {
                type: "div",
                props: {
                  tw: "text-3xl",
                  children: "Me",
                },
              },
            ],
          },
        },
      ],
      tw: "w-full h-full flex items-center justify-center relative px-22",
      style: {
        backgroundColor: "#E2E8F0",
        color: "#1F2937",
        fontFamily: "Noto Sans Mono",
      },
    },
  };

  return new ImageResponse(html, {
    width: 1200,
    height: 600,
    fonts: [
      {
        name: "Noto Sans Mono",
        data: NotoSansMono.buffer,
        style: "normal",
      },
    ],
  });
};
