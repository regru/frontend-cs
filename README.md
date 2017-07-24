# Репозиторий для хранения настроек Code Style

`make cs target=path_to_your_folder`


Всё, что он делает:
 - обновляет репозиторий
 - устанавливает npm модули для cs
 - копирует файлы cs-технологий в указанную папку.

## Использование

1. Склонировать репозиторий в соседнюю с целовой папку ../frontend-cs
2. Добавить скрипт `cd ../frontend-cs && make cs target=my_folder` к себе куда-нибудь в:
- package.json
- Makefile
- своё...

- `make init target=my_folder` - обновляет репо, ставит npm-модули, копирует файлы
- `make cs target=my_folder` - обновляет репо, копирует файлы





