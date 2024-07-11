# Weather API - Documentação

[Voltar ao README](./README.md)

## Rota utilizada - Dados de Clima Atual
Rota utilizada da API **WeatherAPI** para obter os dados essenciais do clima atual no estado do Rio de Janeiro:
```
    /current.json?q=Rio%20de%20Janeiro&key=
```

Mais detalhes da rota podem ser obtidos na documentação oficial em Swagger: https://app.swaggerhub.com/apis-docs/WeatherAPI.com/WeatherAPI/1.0.2#/APIs/realtime-weather

## Estrutura de Dados Retornada
```
"location": {
    "name": "New York",
    "region": "New York",
    "country": "United States of America",
    "lat": 40.71,
    "lon": -74.01,
    "tz_id": "America/New_York",
    "localtime_epoch": 1658522976,
    "localtime": "2022-07-22 16:49"
  },
  "current": {
    "last_updated_epoch": 1658522700,
    "last_updated": "2022-07-22 16:45",
    "temp_c": 34.4,
    "temp_f": 93.9,
    "is_day": 1,
    "condition": {
      "text": "Partly cloudy",
      "icon": "//cdn.weatherapi.com/weather/64x64/day/116.png",
      "code": 1003
    },
    "wind_mph": 16.1,
    "wind_kph": 25.9,
    "wind_degree": 180,
    "wind_dir": "S",
    "pressure_mb": 1011,
    "pressure_in": 29.85,
    "precip_mm": 0,
    "precip_in": 0,
    "humidity": 31,
    "cloud": 75,
    "feelslike_c": 37,
    "feelslike_f": 98.6,
    "vis_km": 16,
    "vis_miles": 9,
    "uv": 8,
    "gust_mph": 11.6,
    "gust_kph": 18.7,
    "air_quality": {
      "co": 293.70001220703125,
      "no2": 18.5,
      "o3": 234.60000610351562,
      "so2": 12,
      "pm2_5": 13.600000381469727,
      "pm10": 15,
      "us-epa-index": 1,
      "gb-defra-index": 2
    }
  }
```

## Dados e Descrição

| Campo                   | Tipo de Dados | Descrição                                              |
|-------------------------|---------------|--------------------------------------------------------|
| last_updated            | string        | Hora local quando os dados em tempo real foram atualizados. |
| last_updated_epoch      | int           | Hora local quando os dados em tempo real foram atualizados em tempo unix. |
| temp_c                  | decimal       | Temperatura em Celsius                                 |
| temp_f                  | decimal       | Temperatura em Fahrenheit                              |
| feelslike_c             | decimal       | Sensação térmica em Celsius                            |
| feelslike_f             | decimal       | Sensação térmica em Fahrenheit                         |
| windchill_c             | decimal       | Sensação térmica pelo vento em Celsius                 |
| windchill_f             | decimal       | Sensação térmica pelo vento em Fahrenheit              |
| heatindex_c             | decimal       | Índice de calor em Celsius                             |
| heatindex_f             | decimal       | Índice de calor em Fahrenheit                          |
| dewpoint_c              | decimal       | Ponto de orvalho em Celsius                            |
| dewpoint_f              | decimal       | Ponto de orvalho em Fahrenheit                         |
| condition:text          | string        | Texto da condição meteorológica                        |
| condition:icon          | string        | URL do ícone da condição meteorológica                 |
| condition:code          | int           | Código único da condição meteorológica                 |
| wind_mph                | decimal       | Velocidade do vento em milhas por hora                 |
| wind_kph                | decimal       | Velocidade do vento em quilômetros por hora            |
| wind_degree             | int           | Direção do vento em graus                              |
| wind_dir                | string        | Direção do vento conforme a bússola de 16 pontos. Ex: NSW |
| pressure_mb             | decimal       | Pressão em milibares                                   |
| pressure_in             | decimal       | Pressão em polegadas                                   |
| precip_mm               | decimal       | Quantidade de precipitação em milímetros               |
| precip_in               | decimal       | Quantidade de precipitação em polegadas                |
| humidity                | int           | Umidade como porcentagem                               |
| cloud                   | int           | Cobertura de nuvens como porcentagem                   |
| is_day                  | int           | 1 = Sim, 0 = Não. Indica se deve mostrar ícone de dia ou de noite |
| uv                      | decimal       | Índice UV                                              |
| gust_mph                | decimal       | Rajada de vento em milhas por hora                     |
| gust_kph                | decimal       | Rajada de vento em quilômetros por hora                |


Mais detalhes na documentação oficial: https://www.weatherapi.com/docs/