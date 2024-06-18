import { sleep, group, check } from 'k6'
import http from 'k6/http'
import { Rate } from 'k6/metrics';

const errorRate = new Rate('errorRate');

export let options = {

    //============Smoke testing=====================
    vus: 1,
    duration: '3m',
    iterations: 1,
    
    //============Load testing=====================
   /*stages: [
    { duration: '10m', target: 10 },
    { duration: '45m', target: 10 },
    { duration: '5m', target: 0 },
  ],*/

  thresholds :{
    errorRate: ['rate < 0.1'] //10% errors allowed
  }

//===========Stress testing====================
/*  stages: [
    { duration: '2m', target: 100 }, // below normal load
    { duration: '5m', target: 100 },
    { duration: '2m', target: 200 }, // normal load
    { duration: '5m', target: 200 },
    { duration: '2m', target: 300 }, // around the breaking point
    { duration: '5m', target: 300 },
    { duration: '2m', target: 400 }, // beyond the breaking point
    { duration: '5m', target: 400 },
    { duration: '10m', target: 0 }, // scale down. Recovery stage.
  ],
*/
}

export default function main() {
  let response

  group('page_1 - https://m1.boris-software.com/Login.aspx?ReturnUrl=Auth/App.aspx', function () {
    response = http.get('https://m1.boris-software.com/Login.aspx?ReturnUrl=Auth/App.aspx', {
      headers: {
        'sec-ch-ua': '"Google Chrome";v="125", "Chromium";v="125", "Not.A/Brand";v="24"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
        'upgrade-insecure-requests': '1',
        accept:
          'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7',
        'sec-fetch-site': 'none',
        'sec-fetch-mode': 'navigate',
        'sec-fetch-user': '?1',
        'sec-fetch-dest': 'document',
        'accept-encoding': 'gzip, deflate, br, zstd',
        'accept-language': 'en-US,en;q=0.9',
      },
    })
    sleep(53)
  })

  group('page_2 - https://m1.boris-software.com/Login.aspx?ReturnUrl=Auth%2fApp.aspx', function () {
    response = http.get(
      'https://m1.boris-software.com/Auth/App.aspx?list=GeneralWork&mitId=1013&',
      {
        headers: {
          'upgrade-insecure-requests': '1',
          accept:
            'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7',
          'sec-fetch-site': 'same-origin',
          'sec-fetch-mode': 'navigate',
          'sec-fetch-user': '?1',
          'sec-fetch-dest': 'document',
          'sec-ch-ua': '"Google Chrome";v="125", "Chromium";v="125", "Not.A/Brand";v="24"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
          'accept-encoding': 'gzip, deflate, br, zstd',
          'accept-language': 'en-US,en;q=0.9',
        },
      }
    )
    response = http.get(
      'https://m1.boris-software.com/Auth/App.aspx?list=GeneralWork&mitId=1013&',
      {
        headers: {
          'upgrade-insecure-requests': '1',
          accept:
            'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7',
          'sec-fetch-site': 'same-origin',
          'sec-fetch-mode': 'navigate',
          'sec-fetch-user': '?1',
          'sec-fetch-dest': 'document',
          'sec-ch-ua': '"Google Chrome";v="125", "Chromium";v="125", "Not.A/Brand";v="24"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
          'accept-encoding': 'gzip, deflate, br, zstd',
          'accept-language': 'en-US,en;q=0.9',
        },
      }
    )
    sleep(293)
    response = http.get(
      'https://m1.boris-software.com/Auth/App.aspx?list=GeneralWork&mitId=1013&',
      {
        headers: {
          'sec-ch-ua': '"Google Chrome";v="125", "Chromium";v="125", "Not.A/Brand";v="24"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
          'upgrade-insecure-requests': '1',
          accept:
            'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7',
          'sec-fetch-site': 'none',
          'sec-fetch-mode': 'navigate',
          'sec-fetch-user': '?1',
          'sec-fetch-dest': 'document',
          'accept-encoding': 'gzip, deflate, br, zstd',
          'accept-language': 'en-US,en;q=0.9',
        },
      }
    )
    sleep(136.9)
  })

  group(
    'page_3 - https://m1.boris-software.com/Auth/App.aspx?list=Template&mitId=1025&',
    function () {
      response = http.get('https://m1.boris-software.com/Auth/App.aspx?list=Template&mitId=1025&', {
        headers: {
          'sec-ch-ua': '"Google Chrome";v="125", "Chromium";v="125", "Not.A/Brand";v="24"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
          'upgrade-insecure-requests': '1',
          accept:
            'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7',
          'sec-fetch-site': 'same-origin',
          'sec-fetch-mode': 'navigate',
          'sec-fetch-user': '?1',
          'sec-fetch-dest': 'document',
          'accept-encoding': 'gzip, deflate, br, zstd',
          'accept-language': 'en-US,en;q=0.9',
        },
      })
      sleep(7)
    }
  )

  group(
    'page_4 - https://m1.boris-software.com/Auth/App.aspx?list=Template&id=14421&mitId=1025',
    function () {
      response = http.get(
        'https://m1.boris-software.com/Auth/App.aspx?list=Template&id=14421&mitId=1025',
        {
          headers: {
            'sec-ch-ua': '"Google Chrome";v="125", "Chromium";v="125", "Not.A/Brand";v="24"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"Windows"',
            'upgrade-insecure-requests': '1',
            accept:
              'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7',
            'sec-fetch-site': 'same-origin',
            'sec-fetch-mode': 'navigate',
            'sec-fetch-user': '?1',
            'sec-fetch-dest': 'document',
            'accept-encoding': 'gzip, deflate, br, zstd',
            'accept-language': 'en-US,en;q=0.9',
          },
        }
      )
      sleep(9.1)

      response = http.post(
        'https://m1.boris-software.com/ajaxpro/magic5.WebApp.Pages.ajaxPage,magic5.WebApp.Pages.ashx',
        '{"editElement":{"m_newType":"","m_generations":[0,0,1,5],"url":"/ajaxpro/magic5.WebApp.Ajax.ElementSpec,magic5.WebApp.Ajax.ashx"},"parentElementSpec":null,"relatedId":-1}',
        {
          headers: {
            'sec-ch-ua': '"Google Chrome";v="125", "Chromium";v="125", "Not.A/Brand";v="24"',
            'x-ajaxpro-method': 'GetEditMarkupForElement',
            'content-type': 'text/plain; charset=UTF-8',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"Windows"',
            accept: '*/*',
            origin: 'https://m1.boris-software.com',
            'sec-fetch-site': 'same-origin',
            'sec-fetch-mode': 'cors',
            'sec-fetch-dest': 'empty',
            'accept-encoding': 'gzip, deflate, br, zstd',
            'accept-language': 'en-US,en;q=0.9',
          },
        }
      )
    }
  )
}