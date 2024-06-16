import { sleep, group } from 'k6'
import http from 'k6/http'

export const options = {
  ext: {
    loadimpact: {
      distribution: { 'amazon:us:ashburn': { loadZone: 'amazon:us:ashburn', percent: 100 } },
      apm: [],
    },
  },
  thresholds: {},
  scenarios: {
    Scenario_1: {
      executor: 'ramping-vus',
      gracefulStop: '30s',
      stages: [
        { target: 20, duration: '1m' },
        { target: 20, duration: '3m30s' },
        { target: 0, duration: '1m' },
      ],
      gracefulRampDown: '30s',
      exec: 'scenario_1',
    },
  },
}

export function scenario_1() {
  let response

  group('page_1 - https://checkmate.firetronic.com/', function () {
    response = http.get(
      'https://checkmate.firetronic.com/Auth/App.aspx?list=GeneralWork&mitId=1013&',
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
      'https://checkmate.firetronic.com/Auth/App.aspx?list=GeneralWork&mitId=1013&',
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
    sleep(19.6)
  })

  group(
    'page_2 - https://checkmate.firetronic.com/Auth/App.aspx?list=Template&mitId=1025&',
    function () {
      response = http.get(
        'https://checkmate.firetronic.com/Auth/App.aspx?list=Template&mitId=1025&',
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
      sleep(7.8)
    }
  )

  group(
    'page_3 - https://checkmate.firetronic.com/Auth/App.aspx?list=Template&id=14421&mitId=1025',
    function () {
      response = http.get(
        'https://checkmate.firetronic.com/Auth/App.aspx?list=Template&id=14421&mitId=1025',
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
      sleep(9.7)

      response = http.post(
        'https://checkmate.firetronic.com/ajaxpro/magic5.WebApp.Pages.ajaxPage,magic5.WebApp.Pages.ashx',
        '{"editElement":{"m_newType":"","m_generations":[0,0,1,5],"m_editingIdOrGuid":"14421","m_editingEntityCode":"TE","url":"/ajaxpro/magic5.WebApp.Ajax.ElementSpec,magic5.WebApp.Ajax.ashx"},"parentElementSpec":null,"relatedId":-1}',
        {
          headers: {
            'sec-ch-ua': '"Google Chrome";v="125", "Chromium";v="125", "Not.A/Brand";v="24"',
            'x-ajaxpro-method': 'GetEditMarkupForElement',
            'content-type': 'text/plain; charset=UTF-8',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"Windows"',
            accept: '*/*',
            origin: 'https://checkmate.firetronic.com',
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
