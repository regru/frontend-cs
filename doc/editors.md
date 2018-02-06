[На главную](README.md)

# Настройки редакторов

<!-- MarkdownTOC autolink=true autoanchor=true bracket=round depth=0 -->

- [Sublime Text 3](#sublime-text-3)
  - [Рекомендуемые плагины](#%D0%A0%D0%B5%D0%BA%D0%BE%D0%BC%D0%B5%D0%BD%D0%B4%D1%83%D0%B5%D0%BC%D1%8B%D0%B5-%D0%BF%D0%BB%D0%B0%D0%B3%D0%B8%D0%BD%D1%8B)
  - [Подсветка TT](#%D0%9F%D0%BE%D0%B4%D1%81%D0%B2%D0%B5%D1%82%D0%BA%D0%B0-tt)
  - [.editorconfig](#editorconfig)
  - [Markdown](#markdown)
  - [JavaScript](#javascript)
    - [Линтеры](#%D0%9B%D0%B8%D0%BD%D1%82%D0%B5%D1%80%D1%8B)
    - [Форматтеры](#%D0%A4%D0%BE%D1%80%D0%BC%D0%B0%D1%82%D1%82%D0%B5%D1%80%D1%8B)
    - [Language Servers](#language-servers)
    - [Отладчики](#%D0%9E%D1%82%D0%BB%D0%B0%D0%B4%D1%87%D0%B8%D0%BA%D0%B8)
  - [Less](#less)
    - [Линтеры](#%D0%9B%D0%B8%D0%BD%D1%82%D0%B5%D1%80%D1%8B-1)
    - [TODO Форматтеры](#todo-%D0%A4%D0%BE%D1%80%D0%BC%D0%B0%D1%82%D1%82%D0%B5%D1%80%D1%8B)
  - [TODO TT](#todo-tt)
  - [Jade](#jade)

<!-- /MarkdownTOC -->

<a name="sublime-text-3"></a>
# Sublime Text 3

Выбор жёстко не регламентируется, но рекомендуется Sublime Text 3.

Предлагаемый вариант Settings - User (пропущены настройки темы, подсветки и шрифтов):

```json
{
    "default_encoding": "UTF-8",
    "default_line_ending": "unix",
    "ensure_newline_at_eof_on_save": true,
    "fallback_encoding": "Cyrillic (Windows 1251)",
    "tab_size": 4,
    "translate_tabs_to_spaces": true,
    "trim_trailing_white_space_on_save": true,
    "word_wrap": true
}
```

Полезные сочетания клавиш (Key Bindings - User):

```json
[
    { "keys": ["super+shift+r"], "command": "reveal_in_side_bar" }
]
```


<a name="%D0%A0%D0%B5%D0%BA%D0%BE%D0%BC%D0%B5%D0%BD%D0%B4%D1%83%D0%B5%D0%BC%D1%8B%D0%B5-%D0%BF%D0%BB%D0%B0%D0%B3%D0%B8%D0%BD%D1%8B"></a>
## Рекомендуемые плагины

Обязательные плагины:

- Подсветка:
    - JavaScriptNext
    - TemplateToolkit
    - LESS
    - Jade    
- Линтеры:
    - SublimeLinter
    - SublimeLinter-contrib-eslint
    - SublimeLinter-contrib-stylelint
- Форматтеры:
    - EditorConfig - раздельная настройка отступов и кодировок на основе файла .editorconfig в проекте, используется [наш форк](https://github.com/regru/editorconfig-sublime-1251)
    - ESLint-Formatter
    - _Stylefmt_ - пока не работает с less
    - _CSScomb_ - пока не работает с less

Рекомендуемые плагины:

- Alignment - выравнивание хэшей по разделителю. Работает с ТТ, JS, Perl etc.
- DocBlockr - удобные блоки документации `/**`
- Emmet - набор html аббревиатурами, например `ul.b-list>li.b-list__item*5>a.b-link`
- EncodingHelper - показывает текущую кодировку + автодетект
- Focus File On Sidebar - открытие сайдбара и прокручивание проекта к текущему открытому файлу
- GitGutter - подсветка изменений относительно HEAD на полях. Альтернатива - Modific
- LineEndings - удобная конвертация окончаний строк
- ModernPerl - подсветка
- Better CoffeeScript - подсветка
- Project Specific Syntax Settings - настройки синтаксиса в файле проекта
- SidebarEnhancements


Специфичные для MacOS плагины:

- DashDoc - поиск в документации [DashDoc](https://kapeli.com/dash) по <kbd>ctrl</kbd>+<kbd>h</kbd>
- [Fix Mac Path](https://github.com/lime/SublimeFixMacPath) - для корректной поддержки переменной окружения $PATH - по умолчанию в SublimeText недоступны изменения из .bash_profile и .bashrc

<a name="%D0%9F%D0%BE%D0%B4%D1%81%D0%B2%D0%B5%D1%82%D0%BA%D0%B0-tt"></a>
## Подсветка TT

При установленном плагине Project Specific Syntax Settings настройка синтаксиса TT2 для html и inc файлов возможна в файле проекта .sublime-project:

```json
{
  "syntax_override": {
          "\\.(html|inc|erb|tt)$": ["Template Toolkit.tmbundle", "Syntaxes", "HTML+TT2"]
  }
}
```


<a name="editorconfig"></a>
## .editorconfig

Настройки отступов и кодировок задаются в файле .editorconfig в корне проекта. Использование в редакторе плагина для поддержки .editorconfig - обязательно. Для SublimeText это EditorConfig, для поддержки кодировки windows-1251 поддерживается [наш форк](https://github.com/regru/editorconfig-sublime-1251).

Установка форка:

1. <kbd>cmd</kbd>+<kbd>shift</kbd>+<kbd>p</kbd> Package Control: Add Repository
2. [https://github.com/regru/editorconfig-sublime-1251](https://github.com/regru/editorconfig-sublime-1251)
3. <kbd>cmd</kbd>+<kbd>shift</kbd>+<kbd>p</kbd> Package Control: Install Package
4. editorconfig-sublime-1251

Несмотря на автоматизацию выбора кодировок/отступов итп -  внимательность требуется, возможны проблемы:

- [Rules for files in subdirectory doesn't apply](https://github.com/sindresorhus/editorconfig-sublime/issues/38)
- [Defaults for files without an .editorconfig file](https://github.com/sindresorhus/editorconfig-sublime/issues/32)


<a name="markdown"></a>
## Markdown

Для редактирования markdown рекомендуется плагин __MarkdownEditing__ (требуется перезапуск редактора). Для автоматических оглавлений в длинных файлах документации рекомендуется __MarkdownTOC__, при использовании которого в документ надо вставить следующий код:

```md
<!-- MarkdownTOC autolink=true autoanchor=true bracket=round depth=0 -->
<!-- /MarkdownTOC -->
```

<a name="javascript"></a>
## JavaScript

<a name="%D0%9B%D0%B8%D0%BD%D1%82%D0%B5%D1%80%D1%8B"></a>
### Линтеры

В качестве линтера используется [ESLint](http://eslint.org)
Файлы конфигурации линтеров .eslintrc.json лежит в корне проекта.

```bash
# опционально: eslint и плагины есть в package.json 
npm install -g eslint eslint-plugin-regru
```

Плагины:

- [SublimeLinter-eslint](https://github.com/roadhump/SublimeLinter-eslint)

Также возможно потребуется [конфигурация PATH](http://sublimelinter.readthedocs.org/en/latest/troubleshooting.html#debugging-path-problems).


<a name="%D0%A4%D0%BE%D1%80%D0%BC%D0%B0%D1%82%D1%82%D0%B5%D1%80%D1%8B"></a>
### Форматтеры

[ESLint-Formatter](https://github.com/TheSavior/ESLint-Formatter) на базе `ESLint --fix`, потребуется настроить пути до node.js как для любого другого линтера, пример:
```json
//ESLint-Formatter.sublime-settings
  ...
  "node_path": {
    "windows": "node.exe",
    "linux": "/usr/bin/nodejs",
    
    // или просто node, если с PATH всё хорошо
    "osx": "/Users/USERNAME/.nvm/versions/v5.0.0/bin/node" 
  },
  ...
  "format_on_save": true,
  ...
```


<a name="language-servers"></a>
### Language Servers

[LSP](https://github.com/tomv564/LSP) - плагин в Sublime с поддержкой [Language Server Protocol](https://lsp.readthedocs.io/en/latest/).

[javascript-typescript-langserver](https://github.com/sourcegraph/javascript-typescript-langserver
) поддерживает и JavaScript и TypeScript. [vue-language-server](https://www.npmjs.com/package/vue-language-server) - тот же сервер, что используется в расширении VSCode Vetur.

Установка:
```bash
npm install -g javascript-typescript-langserver
npm install -g vue-language-server
```

Настройки Preferences - User:
```json
"auto_complete_triggers":
    [
        {
            "characters": ".",
            "selector": "source.js"
        }
    ],
```

Настройки Preferences - Package Settings - LSP - User:
```json
{
    "clients": {
        "jsts": {
          "command": ["javascript-typescript-stdio"],
          "scopes": ["source.ts", "source.tsx", "source.js", "source.jsx"],
          "syntaxes": ["Packages/TypeScript-TmLanguage/TypeScript.tmLanguage", "Packages/TypeScript-TmLanguage/TypeScriptReact.tmLanguage", "Packages/Babel/JavaScript (Babel).sublime-syntax", "Packages/JavaScript/JavaScript.sublime-syntax", "Packages/JavaScriptNext - ES6 Syntax/JavaScriptNext.tmLanguage"],
          "languageId": "typescript"
        },
        "vue": {
          "command": ["vls"],
          "scopes": ["text.html.vue"],
          "syntaxes": ["Packages/Vue Syntax Highlight/vue.tmLanguage"],
          "languageId": "vue"
        }
    }
}
```

Есть и другие серверы, которые можно подключить:
- [php](https://github.com/felixfbecker/php-language-server)
- [html](https://www.npmjs.com/package/vscode-html-languageservice)
- [css](https://www.npmjs.com/package/vscode-css-languageservice)


<a name="%D0%9E%D1%82%D0%BB%D0%B0%D0%B4%D1%87%D0%B8%D0%BA%D0%B8"></a>
### Отладчики

[SublimeWebInspector](http://sokolovstas.github.io/SublimeWebInspector/) для клиентсайт кода

[node-inspector](https://github.com/node-inspector/node-inspector) для серверсайд кода

[iron-node](http://s-a.github.io/iron-node/) альтернатива node-inspector, работает значительно быстрее, перехватывает stdout (но не stderr)


<a name="less"></a>
## Less

<a name="%D0%9B%D0%B8%D0%BD%D1%82%D0%B5%D1%80%D1%8B-1"></a>
### Линтеры

- [stylelint](http://stylelint.io/)
- [SublimeLinter-contrib-stylelint](https://github.com/kungfusheep/SublimeLinter-contrib-stylelint)
- ? [https://github.com/davidtheclark/stylelint-selector-bem-pattern](https://github.com/davidtheclark/stylelint-selector-bem-pattern)

```bash
# оба пакета есть в package.json
npm i stylelint stylelint-plugin-regru 
```

<a name="todo-%D0%A4%D0%BE%D1%80%D0%BC%D0%B0%D1%82%D1%82%D0%B5%D1%80%D1%8B"></a>
### TODO Форматтеры

[Stylefmt](https://github.com/dmnsgn/sublime-stylefmt) - в настоящее время [не поддерживает less](https://github.com/morishitter/stylefmt/issues/75)

[CSScomb](https://github.com/csscomb/sublime-csscomb) - также валится на less. [issues](https://github.com/csscomb/csscomb.js/issues?utf8=%E2%9C%93&q=is%3Aissue%20is%3Aopen%20less). При этом используемый парсер [Gonzales-pe](https://github.com/csscomb/csscomb.js/issues?utf8=%E2%9C%93&q=is%3Aissue%20is%3Aopen%20less) less поддерживает. Возможно, стоит обновить зависимости саблайм плагина.

<a name="todo-tt"></a>
## TODO TT 

__нужен линтер для SublimeLinter__

<a name="jade"></a>
## Jade

[SublimeLinter-contrib-jade-lint](https://github.com/benedfit/SublimeLinter-contrib-jade-lint)

`npm install -g jade-lint`

[https://github.com/benedfit/jade-lint#configuration-file](https://github.com/benedfit/jade-lint#configuration-file)
