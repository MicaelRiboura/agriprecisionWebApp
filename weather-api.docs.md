# Open Weather API - Documentação

[Voltar ao README](./README.md)

## Rota utilizada
Rota utilizada da API **OpenWeather** para obter os dados essenciais do clima atual no estado do Rio de Janeiro:
```
    /current.json?q=Rio%20de%20Janeiro&key=
```
## Estrutura de Dados Retornada
- `current` Resposta atual da API de dados meteorológicos
    - `current.dt` Hora atual, Unix, UTC
    - `current.sunrise` Hora do nascer do sol, Unix, UTC. Para áreas polares em períodos de sol da meia-noite e noites polares este parâmetro não é retornado na resposta
    - `current.sunset` Hora do pôr do sol, Unix, UTC. Para áreas polares em períodos de sol da meia-noite e noites polares este parâmetro não é retornado na resposta
    - `current.temp` Temperatura. Unidades - padrão: Kelvin, métrica: Celsius, imperial: Fahrenheit. Como alterar as unidades usadas
    - `current.feels_like` Temperatura. Este parâmetro de temperatura é responsável pela percepção humana do clima. Unidades – padrão: Kelvin, métrica: Celsius, imperial: Fahrenheit.
    - `current.pressure` Pressão atmosférica ao nível do mar, hPa
    - `current.humidity` Umidade, %
    - `current.dew_point ` Temperatura atmosférica (variando de acordo com a pressão e a umidade) abaixo da qual as gotas de água começam a condensar e o orvalho pode se formar. Unidades – padrão: Kelvin, métrica: Celsius, imperial: Fahrenhei
    - `current.clouds` Nebulosidade, %
    - `current.uvi` Índice UV atual.
    - `current.visibility` Visibilidade média, metros. O valor máximo da visibilidade é de 10 km
    - `current.wind_speed` Velocidade do vento. Velocidade do vento. Unidades – padrão: metro/seg, métrica: metros/seg, imperial: milhas/hora. Como alterar as unidades usadas
    - `current.wind_gust` (quando disponível) Rajada de vento. Unidades – padrão: metro/seg, métrica: metros/seg, imperial: milhas/hora. Como alterar as unidades usadas
    - `current.wind_deg` Direção do vento, graus (meteorológico)
    - `current.rain`
        - `current.rain.1h` (quando disponível) Precipitação, mm/h. Observe que apenas mm/h como unidades de medida estão disponíveis para este parâmetro
    - `current.snow`
        - `current.snow.1h` (quando disponível) Precipitação, mm/h. Observe que apenas mm/h como unidades de medida estão disponíveis para este parâmetro
    - `current.weather`
        - `current.weather.id` ID da condição climática
        - `current.weather.main` Grupo de parâmetros meteorológicos (chuva, neve etc.)
        - `current.weather.description` Condições meteorológicas dentro do grupo (lista completa de condições meteorológicas). Obtenha o resultado em seu idioma
        - `current.weather.icon` ID do ícone do tempo.

Mais detalhes podem ser obtidos na documentação oficial: https://openweathermap.org/api/one-call-3#current