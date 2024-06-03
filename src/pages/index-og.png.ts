import { readFileSync } from 'node:fs'
import process from 'node:process'

import { ImageResponse } from '@vercel/og'
import type { APIRoute } from 'astro'

export const GET: APIRoute = () => {
  const Iosevka = readFileSync(`${process.cwd()}/public/fonts/Iosevka-Bold.ttf`)

  const html = {
    type: 'div',
    props: {
      children: [
        {
          type: 'div',
          props: {
            style: {
              fontSize: '48px',
              fontFamily: 'Iosevka',
            },
            children: 'Index Page',
          },
        },
        {
          type: 'div',
          props: {
            tw: 'absolute right-[40px] bottom-[40px] flex items-center',
            children: [
              {
                type: 'div',
                props: {
                  tw: 'text-blue-500 text-3xl',
                  style: {
                    fontFamily: 'Iosevka',
                  },
                  children: 'Roman Ospanov',
                },
              },
              {
                type: 'div',
                props: {
                  tw: 'px-2 text-3xl',
                  style: {
                    fontSize: '30px',
                  },
                  children: '|',
                },
              },
              {
                type: 'div',
                props: {
                  tw: 'text-3xl',
                  children: 'Me',
                },
              },
            ],
          },
        },
      ],
      tw: 'w-full h-full flex items-center justify-center relative px-22',
      style: {
        backgroundColor: '#E2E8F0',
        color: '#1F2937',
        fontFamily: 'Iosevka',
      },
    },
  }

  return new ImageResponse(html, {
    width: 1200,
    height: 600,
    fonts: [
      {
        name: 'Iosevka',
        data: Iosevka.buffer,
        style: 'normal',
      },
    ],
  })
}
