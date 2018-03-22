[На главную](README.md)

# Vue.js Style Guide

<!-- MarkdownTOC autolink=true autoanchor=true bracket=round depth=2 -->

- [Официальный Vue Style Guide](#%D0%9E%D1%84%D0%B8%D1%86%D0%B8%D0%B0%D0%BB%D1%8C%D0%BD%D1%8B%D0%B9-vue-style-guide)
- [Официально курируемый список компонентов и библиотек](#%D0%9E%D1%84%D0%B8%D1%86%D0%B8%D0%B0%D0%BB%D1%8C%D0%BD%D0%BE-%D0%BA%D1%83%D1%80%D0%B8%D1%80%D1%83%D0%B5%D0%BC%D1%8B%D0%B9-%D1%81%D0%BF%D0%B8%D1%81%D0%BE%D0%BA-%D0%BA%D0%BE%D0%BC%D0%BF%D0%BE%D0%BD%D0%B5%D0%BD%D1%82%D0%BE%D0%B2-%D0%B8-%D0%B1%D0%B8%D0%B1%D0%BB%D0%B8%D0%BE%D1%82%D0%B5%D0%BA)
- [eslint-plugin-vue](#eslint-plugin-vue)
- [Модульная разработка](#%D0%9C%D0%BE%D0%B4%D1%83%D0%BB%D1%8C%D0%BD%D0%B0%D1%8F-%D1%80%D0%B0%D0%B7%D1%80%D0%B0%D0%B1%D0%BE%D1%82%D0%BA%D0%B0)
- [Именование и хранение компонентов Vue](#%D0%98%D0%BC%D0%B5%D0%BD%D0%BE%D0%B2%D0%B0%D0%BD%D0%B8%D0%B5-%D0%B8-%D1%85%D1%80%D0%B0%D0%BD%D0%B5%D0%BD%D0%B8%D0%B5-%D0%BA%D0%BE%D0%BC%D0%BF%D0%BE%D0%BD%D0%B5%D0%BD%D1%82%D0%BE%D0%B2-vue)
  - [Общие компоненты](#%D0%9E%D0%B1%D1%89%D0%B8%D0%B5-%D0%BA%D0%BE%D0%BC%D0%BF%D0%BE%D0%BD%D0%B5%D0%BD%D1%82%D1%8B)
  - [Компоненты приложения](#%D0%9A%D0%BE%D0%BC%D0%BF%D0%BE%D0%BD%D0%B5%D0%BD%D1%82%D1%8B-%D0%BF%D1%80%D0%B8%D0%BB%D0%BE%D0%B6%D0%B5%D0%BD%D0%B8%D1%8F)
  - [Сопутствующие технологии в файловой структуре](#%D0%A1%D0%BE%D0%BF%D1%83%D1%82%D1%81%D1%82%D0%B2%D1%83%D1%8E%D1%89%D0%B8%D0%B5-%D1%82%D0%B5%D1%85%D0%BD%D0%BE%D0%BB%D0%BE%D0%B3%D0%B8%D0%B8-%D0%B2-%D1%84%D0%B0%D0%B9%D0%BB%D0%BE%D0%B2%D0%BE%D0%B9-%D1%81%D1%82%D1%80%D1%83%D0%BA%D1%82%D1%83%D1%80%D0%B5)
- [Выражения в компонентах должны быть простыми](#%D0%92%D1%8B%D1%80%D0%B0%D0%B6%D0%B5%D0%BD%D0%B8%D1%8F-%D0%B2-%D0%BA%D0%BE%D0%BC%D0%BF%D0%BE%D0%BD%D0%B5%D0%BD%D1%82%D0%B0%D1%85-%D0%B4%D0%BE%D0%BB%D0%B6%D0%BD%D1%8B-%D0%B1%D1%8B%D1%82%D1%8C-%D0%BF%D1%80%D0%BE%D1%81%D1%82%D1%8B%D0%BC%D0%B8)
- [Оставляйте свойства простыми](#%D0%9E%D1%81%D1%82%D0%B0%D0%B2%D0%BB%D1%8F%D0%B9%D1%82%D0%B5-%D1%81%D0%B2%D0%BE%D0%B9%D1%81%D1%82%D0%B2%D0%B0-%D0%BF%D1%80%D0%BE%D1%81%D1%82%D1%8B%D0%BC%D0%B8)
- [Ограничивайте использование свойств компонента](#%D0%9E%D0%B3%D1%80%D0%B0%D0%BD%D0%B8%D1%87%D0%B8%D0%B2%D0%B0%D0%B9%D1%82%D0%B5-%D0%B8%D1%81%D0%BF%D0%BE%D0%BB%D1%8C%D0%B7%D0%BE%D0%B2%D0%B0%D0%BD%D0%B8%D0%B5-%D1%81%D0%B2%D0%BE%D0%B9%D1%81%D1%82%D0%B2-%D0%BA%D0%BE%D0%BC%D0%BF%D0%BE%D0%BD%D0%B5%D0%BD%D1%82%D0%B0)
- [Используйте computed properties](#%D0%98%D1%81%D0%BF%D0%BE%D0%BB%D1%8C%D0%B7%D1%83%D0%B9%D1%82%D0%B5-computed-properties)
- [Определяйте `this` как `component`](#%D0%9E%D0%BF%D1%80%D0%B5%D0%B4%D0%B5%D0%BB%D1%8F%D0%B9%D1%82%D0%B5-this-%D0%BA%D0%B0%D0%BA-component)
- [Внутренняя структура компонента](#%D0%92%D0%BD%D1%83%D1%82%D1%80%D0%B5%D0%BD%D0%BD%D1%8F%D1%8F-%D1%81%D1%82%D1%80%D1%83%D0%BA%D1%82%D1%83%D1%80%D0%B0-%D0%BA%D0%BE%D0%BC%D0%BF%D0%BE%D0%BD%D0%B5%D0%BD%D1%82%D0%B0)
- [Именование событий](#%D0%98%D0%BC%D0%B5%D0%BD%D0%BE%D0%B2%D0%B0%D0%BD%D0%B8%D0%B5-%D1%81%D0%BE%D0%B1%D1%8B%D1%82%D0%B8%D0%B9)
- [Избегайте использования `this.$parent`](#%D0%98%D0%B7%D0%B1%D0%B5%D0%B3%D0%B0%D0%B9%D1%82%D0%B5-%D0%B8%D1%81%D0%BF%D0%BE%D0%BB%D1%8C%D0%B7%D0%BE%D0%B2%D0%B0%D0%BD%D0%B8%D1%8F-thisparent)
- [Используйте `this.$refs` осторожно](#%D0%98%D1%81%D0%BF%D0%BE%D0%BB%D1%8C%D0%B7%D1%83%D0%B9%D1%82%D0%B5-thisrefs-%D0%BE%D1%81%D1%82%D0%BE%D1%80%D0%BE%D0%B6%D0%BD%D0%BE)
- [Использование не-vue компонентов, DOM, jQuery и jQuery-компонентов](#%D0%98%D1%81%D0%BF%D0%BE%D0%BB%D1%8C%D0%B7%D0%BE%D0%B2%D0%B0%D0%BD%D0%B8%D0%B5-%D0%BD%D0%B5-vue-%D0%BA%D0%BE%D0%BC%D0%BF%D0%BE%D0%BD%D0%B5%D0%BD%D1%82%D0%BE%D0%B2-dom-jquery-%D0%B8-jquery-%D0%BA%D0%BE%D0%BC%D0%BF%D0%BE%D0%BD%D0%B5%D0%BD%D1%82%D0%BE%D0%B2)
- [Используйте БЭМ в CSS](#%D0%98%D1%81%D0%BF%D0%BE%D0%BB%D1%8C%D0%B7%D1%83%D0%B9%D1%82%D0%B5-%D0%91%D0%AD%D0%9C-%D0%B2-css)
- [Документация и самодокументация компонента](#%D0%94%D0%BE%D0%BA%D1%83%D0%BC%D0%B5%D0%BD%D1%82%D0%B0%D1%86%D0%B8%D1%8F-%D0%B8-%D1%81%D0%B0%D0%BC%D0%BE%D0%B4%D0%BE%D0%BA%D1%83%D0%BC%D0%B5%D0%BD%D1%82%D0%B0%D1%86%D0%B8%D1%8F-%D0%BA%D0%BE%D0%BC%D0%BF%D0%BE%D0%BD%D0%B5%D0%BD%D1%82%D0%B0)
- [State-management: Vuex](#state-management-vuex)
- [Не расширяйте прототип Vue](#%D0%9D%D0%B5-%D1%80%D0%B0%D1%81%D1%88%D0%B8%D1%80%D1%8F%D0%B9%D1%82%D0%B5-%D0%BF%D1%80%D0%BE%D1%82%D0%BE%D1%82%D0%B8%D0%BF-vue)
- [Дедуплицируйте код: слоты, функциональные компоненты, миксины.](#%D0%94%D0%B5%D0%B4%D1%83%D0%BF%D0%BB%D0%B8%D1%86%D0%B8%D1%80%D1%83%D0%B9%D1%82%D0%B5-%D0%BA%D0%BE%D0%B4-%D1%81%D0%BB%D0%BE%D1%82%D1%8B-%D1%84%D1%83%D0%BD%D0%BA%D1%86%D0%B8%D0%BE%D0%BD%D0%B0%D0%BB%D1%8C%D0%BD%D1%8B%D0%B5-%D0%BA%D0%BE%D0%BC%D0%BF%D0%BE%D0%BD%D0%B5%D0%BD%D1%82%D1%8B-%D0%BC%D0%B8%D0%BA%D1%81%D0%B8%D0%BD%D1%8B)
- [`v-html` ведёт к XSS](#v-html-%D0%B2%D0%B5%D0%B4%D1%91%D1%82-%D0%BA-xss)
- [Разделяйте бандлы на async-компоненты](#%D0%A0%D0%B0%D0%B7%D0%B4%D0%B5%D0%BB%D1%8F%D0%B9%D1%82%D0%B5-%D0%B1%D0%B0%D0%BD%D0%B4%D0%BB%D1%8B-%D0%BD%D0%B0-async-%D0%BA%D0%BE%D0%BC%D0%BF%D0%BE%D0%BD%D0%B5%D0%BD%D1%82%D1%8B)
- [Помните про подводные камни реактивности](#%D0%9F%D0%BE%D0%BC%D0%BD%D0%B8%D1%82%D0%B5-%D0%BF%D1%80%D0%BE-%D0%BF%D0%BE%D0%B4%D0%B2%D0%BE%D0%B4%D0%BD%D1%8B%D0%B5-%D0%BA%D0%B0%D0%BC%D0%BD%D0%B8-%D1%80%D0%B5%D0%B0%D0%BA%D1%82%D0%B8%D0%B2%D0%BD%D0%BE%D1%81%D1%82%D0%B8)
- [Файловая структура с учётом vuex, vue-router, apollo](#%D0%A4%D0%B0%D0%B9%D0%BB%D0%BE%D0%B2%D0%B0%D1%8F-%D1%81%D1%82%D1%80%D1%83%D0%BA%D1%82%D1%83%D1%80%D0%B0-%D1%81-%D1%83%D1%87%D1%91%D1%82%D0%BE%D0%BC-vuex-vue-router-apollo)
- [Источники](#%D0%98%D1%81%D1%82%D0%BE%D1%87%D0%BD%D0%B8%D0%BA%D0%B8)

<!-- /MarkdownTOC -->

<a name="%D0%9E%D1%84%D0%B8%D1%86%D0%B8%D0%B0%D0%BB%D1%8C%D0%BD%D1%8B%D0%B9-vue-style-guide"></a>
# Официальный Vue Style Guide

Всегда стоит придерживаться официального [Vue Style Guide](https://vuejs.org/v2/style-guide/), ряд моментов дополнительно описан в этом документе с учётом нашей специфики и обсуждений.

<a name="%D0%9F%D0%BE%D1%87%D0%B5%D0%BC%D1%83"></a>
### Почему?

Единый стиль и следование официальным рекомендациям облегчает понимание кода и позволяет минимизировать ошибки.

---

<a name="%D0%9E%D1%84%D0%B8%D1%86%D0%B8%D0%B0%D0%BB%D1%8C%D0%BD%D0%BE-%D0%BA%D1%83%D1%80%D0%B8%D1%80%D1%83%D0%B5%D0%BC%D1%8B%D0%B9-%D1%81%D0%BF%D0%B8%D1%81%D0%BE%D0%BA-%D0%BA%D0%BE%D0%BC%D0%BF%D0%BE%D0%BD%D0%B5%D0%BD%D1%82%D0%BE%D0%B2-%D0%B8-%D0%B1%D0%B8%D0%B1%D0%BB%D0%B8%D0%BE%D1%82%D0%B5%D0%BA"></a>
# Официально курируемый список компонентов и библиотек

Начинать поиск решений/библиотек следует с [официально курируемого списка](http://curated.vuejs.org/).  

<a name="%D0%9F%D0%BE%D1%87%D0%B5%D0%BC%D1%83-1"></a>
### Почему?

Качество сторонних решений весьма неоднородно.

---

<a name="eslint-plugin-vue"></a>
# eslint-plugin-vue

В проекте следует использовать [официальный линтер](https://github.com/vuejs/eslint-plugin-vue#eslint-plugin-vue) с рекомендуемыми настройками, `"extends": [ "eslint:recommended", "plugin:vue/recommended" ]`

### Почему?

* Использование линтера гарантирует, что все разработчики читают и пишут код с одинаковыми правилами форматирования.
* Использование линтера помогает обнаружить и избежать ошибок до того как код файла сохранен.

---

<a name="%D0%9C%D0%BE%D0%B4%D1%83%D0%BB%D1%8C%D0%BD%D0%B0%D1%8F-%D1%80%D0%B0%D0%B7%D1%80%D0%B0%D0%B1%D0%BE%D1%82%D0%BA%D0%B0"></a>
# Модульная разработка

Всегда старайтесь чтобы ваше приложение состояло из небольших модулей, каждый из которых умеет выполнять только одну функцию, но делает это хорошо.

Модуль по определению это небольшая ограниченная часть приложения. "Строительный блок", самодостаточный функционально. Организация Vue позволяет создавать подобные модули ориентируясь на визуальные компоненты.

<a name="%D0%9F%D0%BE%D1%87%D0%B5%D0%BC%D1%83"></a>
### Почему?

Модули небольших размеров легче взять для использования - понять что они делают, дорабатывать или переиспользовать. И вам и всей вашей команде.

<a name="%D0%9A%D0%B0%D0%BA"></a>
### Как?

Старайтесь чтобы каждый Vue компонент соответствовал принципам [FIRST](https://addyosmani.com/first/):
 - решающий одну задачу,
 - независимый,
 - переиспользуемый,
 - небольшой,
 - простой в тестировании.

---

<a name="%D0%98%D0%BC%D0%B5%D0%BD%D0%BE%D0%B2%D0%B0%D0%BD%D0%B8%D0%B5-%D0%B8-%D1%85%D1%80%D0%B0%D0%BD%D0%B5%D0%BD%D0%B8%D0%B5-%D0%BA%D0%BE%D0%BC%D0%BF%D0%BE%D0%BD%D0%B5%D0%BD%D1%82%D0%BE%D0%B2-vue"></a>
# Именование и хранение компонентов Vue

- [Multi-word component names](https://vuejs.org/v2/style-guide/#Multi-word-component-names-essential) _Essential_
- [Component files](https://vuejs.org/v2/style-guide/#Component-files-strongly-recommended) _Strongly recommended_
- [Single-file component filename casing](https://vuejs.org/v2/style-guide/#Single-file-component-filename-casing-strongly-recommended) _Strongly recommended_
- [Base component names](https://vuejs.org/v2/style-guide/#Base-component-names-strongly-recommended) _Strongly recommended_
- [Single-instance component names](https://vuejs.org/v2/style-guide/#Single-instance-component-names-strongly-recommended) _Strongly recommended_
- [Tightly coupled component names](https://vuejs.org/v2/style-guide/#Tightly-coupled-component-names-strongly-recommended) _Strongly recommended_
- [Order of words in component names](https://vuejs.org/v2/style-guide/#Order-of-words-in-component-names-strongly-recommended) _Strongly recommended_
- [Component name casing in templates](https://vuejs.org/v2/style-guide/#Component-name-casing-in-templates-strongly-recommended) _Strongly recommended_
- [Component name casing in JS/JSX](https://vuejs.org/v2/style-guide/#Component-name-casing-in-JS-JSX-strongly-recommended) _Strongly recommended_
- [Full-word component names](https://vuejs.org/v2/style-guide/#Full-word-component-names-strongly-recommended) _Strongly recommended_

Имя каждого компонента должно соответствовать следующим критериям:

* **Понятное**: в меру детальным, в меру абстрактным
* **Короткое**: 2-3 слова
* **Произносимое**: чтобы его можно было упомянуть в обсуждении
* **Валидное с т.зр. HTML**: тег должен содержать дефис, т.е. либо 2+ слова, либо 1+ слово с префиксом

<a name="%D0%9E%D0%B1%D1%89%D0%B8%D0%B5-%D0%BA%D0%BE%D0%BC%D0%BF%D0%BE%D0%BD%D0%B5%D0%BD%D1%82%D1%8B"></a>
## Общие компоненты

Общие компоненты, используемые в нескольких проектах, такие как `b-button`, следует именовать в bem-стиле и хранить в общем репозитории [frontend-components](https://git.reg.ru/regru/frontend-components/). Используемые префиксы общих блоков:

- `b-` основной префикс, например, `blocks/b-button/b-button.vue`;
- `i-` префикс для js-only блоков, без отображения;
- `l-` префикс блоков-хэлперов.
- `g-` префикс для vue-only компонентов (префикс `v-` уже занят vuetify)

<a name="%D0%9F%D0%BE%D1%87%D0%B5%D0%BC%D1%83-1"></a>
### Почему?

- Меньше вероятность конфликта имён при использовании в проекте вместе с другими наборами компонентов;
- Общие компоненты используются не только vue.js приложениями.

### Как?

```html
<template>
    <b-button></b-button>
</template>

<script>
import BButton from 'b-button/b-button.vue';
</script>
```

<a name="%D0%9A%D0%BE%D0%BC%D0%BF%D0%BE%D0%BD%D0%B5%D0%BD%D1%82%D1%8B-%D0%BF%D1%80%D0%B8%D0%BB%D0%BE%D0%B6%D0%B5%D0%BD%D0%B8%D1%8F"></a>
## Компоненты приложения
 
Компоненты приложения именуются в vue-стиле (PascalCase), хранятся плоско либо древовидно в appname/components, например `components/AppHeader.vue`. Стили и шаблоны содержатся либо в самом компоненте, либо в одном каталоге с ним, и в этом случае предпочтительно создавать по каталогу на компонент:

```
components
    AppName.vue
```

```
components
    AppName
        AppName.vue
        AppName.less
```

```
components
    User
        UserList
            UserList.vue
            UserList.less
```
    
В приложениях, где использование нескольких слов для именования компонентов избыточно, рекомендуется использовать единый префикс на всё приложение, например `cv-` для приложения cloud-vps или `acc-` для приложения аккаунт.

Несмотря на не-bem-нейминг, использование bem в стилях и шаблонах крайне желательно. Префиксы bem-классам в компонентах приложения не нужны.

<a name="%D0%9F%D0%BE%D1%87%D0%B5%D0%BC%D1%83-2"></a>
### Почему?

* Имя компонента используется людьми и должно облегчать коммуникацию;
* Стоит использовать сложившиеся практики именования vue.js компонентов.

<a name="%D0%9A%D0%B0%D0%BA-1"></a>
### Как?

```html
<!-- правильно -->
<template>
    <app-header></app-header>
    <user-list></user-list>
    <range-slider></range-slider>
</template>

<script>
import AppHeader from './components/AppHeader.vue';
import UserList from './components/User/UserList/UserList.vue';
</script>

<!-- неправильно -->
<btn-group></btn-group> <!-- короткое, но произносить - язык сломаешь -->
<ui-slider></ui-slider> <!-- все компоненты - так или иначе UI элементы, приставка не нужна -->
<slider></slider> <!--не соответствует спецификации HTML5 -->
```

<a name="%D0%A1%D0%BE%D0%BF%D1%83%D1%82%D1%81%D1%82%D0%B2%D1%83%D1%8E%D1%89%D0%B8%D0%B5-%D1%82%D0%B5%D1%85%D0%BD%D0%BE%D0%BB%D0%BE%D0%B3%D0%B8%D0%B8-%D0%B2-%D1%84%D0%B0%D0%B9%D0%BB%D0%BE%D0%B2%D0%BE%D0%B9-%D1%81%D1%82%D1%80%D1%83%D0%BA%D1%82%D1%83%D1%80%D0%B5"></a>
## Сопутствующие технологии в файловой структуре

Вынесенные из компонентов файлы стилей/скриптов/шаблонов должны именоваться так же, как компонент, и лежать на одном уровне с ним. То же справедливо и для тестов (кроме e2e), документации и прочего:

```
UserList.vue
UserList.less
UserList.spec.js
UserList.md
```

E2e тесты не следует хранить рядом с компонентом, поскольку они используются для тестирования приложения целиком. Хорошее место для них - папка `t` или `test` в корне проекта.

Импортировать библиотеки, включая less-миксины, следует непосредственно в коде:

```html
<!-- неправильно -->
<style lang="less">
@import (reference) "~i-less/i-less.less"; /* импорт в отрыве от кода */
@import "MyComponent.less";
</style>

<!-- правильно -->
<style lang="less">
@import (reference) "~i-less/i-less.less";

.my-component {
    .i-text__hidden();
}
</style>
```

---


<a name="%D0%92%D1%8B%D1%80%D0%B0%D0%B6%D0%B5%D0%BD%D0%B8%D1%8F-%D0%B2-%D0%BA%D0%BE%D0%BC%D0%BF%D0%BE%D0%BD%D0%B5%D0%BD%D1%82%D0%B0%D1%85-%D0%B4%D0%BE%D0%BB%D0%B6%D0%BD%D1%8B-%D0%B1%D1%8B%D1%82%D1%8C-%D0%BF%D1%80%D0%BE%D1%81%D1%82%D1%8B%D0%BC%D0%B8"></a>
# Выражения в компонентах должны быть простыми

- [Simple expressions in templates](https://vuejs.org/v2/style-guide/#Simple-expressions-in-templates-strongly-recommended) _Strongly recommended_
- [Simple computed properties](https://vuejs.org/v2/style-guide/#Simple-computed-properties-strongly-recommended) _Strongly recommended_

Вы можете использовать инлайн-выражения в шаблонах Vue - это самые обычные Javascript выражения. Они дают максимальную свободу и мощность, однако из-за этого они могут стать слишком сложными. Не злоупотребляйте этим - **оставляйте инлайн-выражения простыми**.

### Почему?

 * Сложные выражения сложнее прочесть и понять.
 * Инлайн-выражения нельзя переиспользовать, это, очевидно, ведёт к дублированию кода и ухудшению его качества.
 * Редакторы и IDE обычно не могут парсить такие выражения, а значит у вас не будет автодополнения и валидации.

### Как?

Простое правило - если код Javascript инлайн-выражения становится слишком сложным - **выносите его как отдельный метод в блок methods или computed-свойство, соответственно в блок computed**.

Стоит задуматься о выносе, если у вас 2 и больше элементов выражения. Если 3 и больше - нужно задуматься обязательно.

Если выражение должно переиспользоваться разными компонентами, его стоит вынести в миксин/хэлпер, либо подумать о возможности получения готовых данных с сервера.

```html
<!-- правильно -->
<template>
  <h1>
    {{ `${year}-${month}` }}
  </h1>
</template>
<script type="text/javascript">
  export default {
    computed: {
      month() {
        return this.twoDigits((new Date()).getUTCMonth() + 1);
      },
      year() {
        return (new Date()).getUTCFullYear();
      }
    },
    methods: {
      twoDigits(num) {
        return ('0' + num).slice(-2);
      }
    },
  };
</script>

<!-- неправильно -->
<template>
  <h1>
    {{ `${(new Date()).getUTCFullYear()}-${('0' + ((new Date()).getUTCMonth()+1)).slice(-2)}` }}
  </h1>
</template>
```

---


<a name="%D0%9E%D1%81%D1%82%D0%B0%D0%B2%D0%BB%D1%8F%D0%B9%D1%82%D0%B5-%D1%81%D0%B2%D0%BE%D0%B9%D1%81%D1%82%D0%B2%D0%B0-%D0%BF%D1%80%D0%BE%D1%81%D1%82%D1%8B%D0%BC%D0%B8"></a>
# Оставляйте свойства простыми

Хотя Vue и поддерживает передачу атрибутов в виде сложных объектов, по возможности избегайте этого. Старайтесь ограничиться [простыми типами JavaScript](https://developer.mozilla.org/en-US/docs/Glossary/Primitive) и функциями для этого. Не передавайте сложные объекты в компоненты-наследники.

### Почему?

* Используя для каждого свойства отдельный атрибут - API вашего компонента будет более наглядным.
* Такой подход совместим с API к которому мы все привыкли у нативных HTML(5) элементов.
* Созданые вами атрибуты будет легче понять другим членам команды.
* При передаче сложных объектов сразу не видно, какие из его свойств далее используются, - это затруднит рефакторинг.

### Как?

Используйте отдельные атрибуты для каждой опции и передавайте в нее примитив (флаг, строку, число) или функцию.

```html
<!-- правильно -->
<range-slider
  :values="[10, 20]"
  min="0"
  max="100"
  step="5"
  :on-slide="updateInputs"
  :on-end="updateResults">
</range-slider>

<!-- неправильно -->
<range-slider :config="complexConfigObject"></range-slider>
```

---

<a name="%D0%9E%D0%B3%D1%80%D0%B0%D0%BD%D0%B8%D1%87%D0%B8%D0%B2%D0%B0%D0%B9%D1%82%D0%B5-%D0%B8%D1%81%D0%BF%D0%BE%D0%BB%D1%8C%D0%B7%D0%BE%D0%B2%D0%B0%D0%BD%D0%B8%D0%B5-%D1%81%D0%B2%D0%BE%D0%B9%D1%81%D1%82%D0%B2-%D0%BA%D0%BE%D0%BC%D0%BF%D0%BE%D0%BD%D0%B5%D0%BD%D1%82%D0%B0"></a>
# Ограничивайте использование свойств компонента

- [Prop definitions](https://vuejs.org/v2/style-guide/#Prop-definitions-essential) _Essential_

Во Vue свойства компонента (`props`) это его API. Ясное и понятное API делает ваши компоненты более простыми для использования другими разработчиками.

Свойства передаются с использованием специальных атрибутов тега. Эти атрибуты могут быть либо указаны как пустые значения (`:attr`), либо присвоены строкам (`:attr="value"` или `v-bind:attr="value"`). Обратите внимание на подобные возможности при описании свойств.

### Почему?

Грамотное использование свойств гарантирует, что компонент всегда будет отрабатывать без ошибок. Даже если в последствии ваши компоненты будут использоваться не так как вы предполагали изначально.

### Как?

* Используйте свойства по умолчанию для указания значений свойств.
* Используйте свойство `type` для [валидации](http://vuejs.org/v2/guide/components.html#Prop-Validation) значений свойства.
* Всегда проверяйте что свойство определено прежде чем его использовать.

```html
<template>
  <input type="range" v-model="value" :max="max" :min="min">
</template>
<script type="text/javascript">
  export default {
    props: {
      max: {
        type: Number, // это обеспечивает проверку, что свойство max будет типа Number
        default() { return 10; },
      },
      min: {
        type: Number,
        default() { return 0; },
      },
      value: {
        type: Number,
        default() { return 4; },
      },
    },
  };
</script>
```

---

<a name="%D0%98%D1%81%D0%BF%D0%BE%D0%BB%D1%8C%D0%B7%D1%83%D0%B9%D1%82%D0%B5-computed-properties"></a>
# Используйте computed properties

- [Simple expressions in templates](https://vuejs.org/v2/style-guide/#Simple-expressions-in-templates-strongly-recommended) _Strongly recommended_
- [Simple computed properties](https://vuejs.org/v2/style-guide/#Simple-computed-properties-strongly-recommended) _Strongly recommended_

По-максимуму используйте computed вместо сложных выражений. Делайте computed максимально лаконичными, лучше разбить одно свойство на несколько:

```js
// плохо
computed: {
  price: function () {
    var basePrice = this.manufactureCost / (1 - this.profitMargin)
    return (
      basePrice -
      basePrice * (this.discountPercent || 0)
    )
  }
}

// хорошо
computed: {
  basePrice: function () {
    return this.manufactureCost / (1 - this.profitMargin)
  },
  discount: function () {
    return this.basePrice * (this.discountPercent || 0)
  },
  finalPrice: function () {
    return this.basePrice - this.discount
  }
}
```

Не используйте сеттеры computed, кроме случаев, когда это действительно оправдано, например при испольвазонии computed с v-model или в связке с vuex.

---

<a name="%D0%9E%D0%BF%D1%80%D0%B5%D0%B4%D0%B5%D0%BB%D1%8F%D0%B9%D1%82%D0%B5-this-%D0%BA%D0%B0%D0%BA-component"></a>
# Определяйте `this` как `component`

В контексте кода компонента Vue `this` всегда означает экземпляр самого компонента. Таким образом если вам понадобится обратиться к ней в другом контексте сделайте так, чтобы `this` означало  `component`.

То есть, **не используйте** устаревшие конструкции присваивания вроде `const self = this;`. Можно и нужно использовать `component` в Vue компонентах для этого.

### Почему?

* Присваивая `this` к переменной названной `component` напрямую укажет тем кто это будет использовать, что это означает сам компонент.

### Как?


```html
<script type="text/javascript">
export default {
  methods: {
    hello() {
      return 'hello';
    },
    printHello() {
      console.log(this.hello());
    }
  }
};
</script>

<!-- неправильно -->
<script type="text/javascript">
export default {
  methods: {
    hello() {
      return 'hello';
    },
    printHello() {
      const self = this; // не нужно
      console.log(self.hello());
    },
  },
};
</script>
```

---


<a name="%D0%92%D0%BD%D1%83%D1%82%D1%80%D0%B5%D0%BD%D0%BD%D1%8F%D1%8F-%D1%81%D1%82%D1%80%D1%83%D0%BA%D1%82%D1%83%D1%80%D0%B0-%D0%BA%D0%BE%D0%BC%D0%BF%D0%BE%D0%BD%D0%B5%D0%BD%D1%82%D0%B0"></a>
# Внутренняя структура компонента

- [Single-file component top-level element order](https://vuejs.org/v2/style-guide/#Single-file-component-top-level-element-order-recommended) _Recommended_
- [Component/instance options order](https://vuejs.org/v2/style-guide/#Component-instance-options-order-recommended) _Recommended_
- [Element attribute order](https://vuejs.org/v2/style-guide/#Element-attribute-order-recommended) _Recommended_

Добейтесь, чтобы описание компонента было понятным и логичным.

### Почему?

* Экспортируемый объект (речь о `.js` файле или блоке `<script>` в `.vue` файле) компонента, построенный в каждом случае по одинаковым принципам, ускорит работу с ним других разработчиков и будет служить внутренним стандартом.
* Если свойства будут расположены по алфавиту их будет легче просмотреть и найти нужное. Этот пункт глубоко опционален.
* Группировка сходных свойств также облегчает чтение и ориентирование в коде, например props, data, computed; далее watch, и methods; далее lifecycle methods, и тд.
* Используйте имя компонента `[name](https://vuejs.org/v2/api/#name)`. Далее разработка с использованием [vue devtools](https://chrome.google.com/webstore/detail/vuejs-devtools/nhdogjmejiglipccpnnnanhbledajbpd?hl=en) будет более удобной с именованными компонентами.
* Используйте одну из отраслевых технологий для именования CSS элементов, например [BEM](https://medium.com/tldr-tech/bem-blocks-elements-and-modifiers-6b3b0af9e3ea#.bhnomd7gw). Префиксы вида `b-` не нужны, можно использовать префикс приложения, например `acc-`.
* Предпочтительный порядок расположения блоков в `.vue` файле: template, потом script и далее style. Потому что большую часть времени любой разработчик проводит в написании HTML и далее JavaScript.

### Как?

Структура компонента, описание свойств в логичном порядке:

```html
<template lang="html">
  <div class="Ranger__Wrapper">
    <!-- ... -->
  </div>
</template>

<script type="text/javascript">
  export default {
    // обязательно не забываем имя к.
    name: 'RangeSlider',
    // можем использовать композицию уже существующих к.
    extends: {},
    // перечисление свойств и переменных
    props: {
  bar: {}, // еще лучше если по-алфавиту
  foo: {},
  fooBar: {},
  },
    data() {},
    computed: {},
    // когда внутри используются другие к.
    components: {},
    // методы
    watch: {},
    methods: {},
    // методы жизненного цикла к.
    beforeCreate() {},
    mounted() {},
};
</script>

<style scoped>
  .Ranger__Wrapper { /* ... */ }
</style>
```

---


<a name="%D0%98%D0%BC%D0%B5%D0%BD%D0%BE%D0%B2%D0%B0%D0%BD%D0%B8%D0%B5-%D1%81%D0%BE%D0%B1%D1%8B%D1%82%D0%B8%D0%B9"></a>
# Именование событий

В Vue все инлайн-выражения и методы компонента напрямую относятся к VM (ViewModel) и меняют ее состояние. При декларации собственных событий важно их грамотно называть, чтобы избежать сложности при дальнейшей разработке и использовании компонента.

### Почему?

* Разработчики могут использовать совпадающие имена, что может вызвать проблемы.
* Полная свобода в выборе имён событий может также привести к проблемам с обработкой шаблонов.

### Как?

* В названиях событий стоит использовать кебаб нотацию `kebab-cased`.
* Название компонента должно быть уникальным и отражать что в нем происходит, например: `upload-success`, `upload-error` или `dropzone-upload-success`, `dropzone-upload-error`
* Если нет подходящего по семантике имени события, либо семантика может быть разной - можно использовать имена событий, совпадающие с нативными. Например, если самое подходящее имя - `click`, - стоит использовать `click`, а не `clicked` и подобные.
* В именах компонентов лучше использовать только существительные и глаголы, например: `client-api-load`, `drive-upload-success` ([источник](https://github.com/GoogleWebComponents/style-guide#events))

---


<a name="%D0%98%D0%B7%D0%B1%D0%B5%D0%B3%D0%B0%D0%B9%D1%82%D0%B5-%D0%B8%D1%81%D0%BF%D0%BE%D0%BB%D1%8C%D0%B7%D0%BE%D0%B2%D0%B0%D0%BD%D0%B8%D1%8F-thisparent"></a>
# Избегайте использования `this.$parent`

- [Implicit parent-child communication](https://vuejs.org/v2/style-guide/#Implicit-parent-child-communication-use-with-caution) _Use with caution_

Vue поддерживает вложенности компонентов, поэтому дочерние компоненты могут обращаться к данным родителя.
Обращение к внутреннему состоянию компонента снаружи нарушает принцип [FIRST](https://addyosmani.com/first/). Старайтесь избегать конструкции `this.$parent`. Возможны случаи, когда это разумный выход, но это слишком плохая практика, чтобы использовать его всегда.

### Почему?

* Компонент Vue, как и любой другой, должен работать изолированно. Если для работы требуется взаимодействия с соседними скоупами, то нарушается принцип компонентной разработки.
* Если компоненту требуется обращение к соседям - такой компонент не может быть полноценно переиспользован.


### Как?

* Передавайте данные из родителя в дочерний компонент используя атрибуты и свойства.
* Передавайте методы используя коллбеки и выражениях в атрибутах.
* В обратную сторону: дочерние компоненты должны генерировать события, которые будет перехватывать родитель.

---


<a name="%D0%98%D1%81%D0%BF%D0%BE%D0%BB%D1%8C%D0%B7%D1%83%D0%B9%D1%82%D0%B5-thisrefs-%D0%BE%D1%81%D1%82%D0%BE%D1%80%D0%BE%D0%B6%D0%BD%D0%BE"></a>
# Используйте `this.$refs` осторожно

Vue как и React поддерживает обращение к другим компонентам и html-элементам с использованием атрибута `ref`.
Через обращение к `this.$refs` разработчик может получить доступ к контексту других компонентов или тегов. В большинстве случаев можно не использовать `this.$refs` для обращения к другим компонентам.

Обёртки над jQuery компонентами предпочтительно делать через директивы, без использования `$refs`:

```js
vueInstance.directive('calendar', {
    bind( el ) {
        new Flatpicker( el );
    },
})
```

### Почему?

* Если компонент не работает в изоляции это признак плохого дизайна.
* Для подавляющего большинства случаев, достаточно использовать свойства компонента и его события.

### Как?

* Серьезно относитесь к дизайну API ваших компонентов.
* Старайтесь избегать умножений и ветвлений пути исполнения кода в компонентах. Наличие таких фрагментов является признаком того, что API не достаточно общее, либо вам нужно создать и использовать другие компоненты для других юзкейсов.
* Используя компонент, обратите внимание на свойства: если какого-то из них не хватает, то добавьте их сами и/или создайте тикет, если это osc библиотека.
* То же самое с событиями - если чего-то не хватает, значит другой разработчик (или вы сами, в прошлом) не добавил их. Для исправления добавьте отсутствующее или проверьте бизнес-логику компонента, возможно, это событие уже не используется, тогда его можно просто удалить.
* Используйте `this.$refs`, только если других путей нет и вам никак не обойтись событиями и свойствами.
* Если по-другому никак, то отдавайте предпочтение `refs`, а не jQuery или `document.queryElement`. Так вы останетесь на одном уровне абстракции (который даёт Vue) и не будете мешать их в трудно понимаемую кучу.

```html
<!-- отлично, можно обойтись без ref -->
<range :max="max"
  :min="min"
  @current-value="currentValue"
  :step="1"></range>
```

```html
<!-- тут придется использовать this.$refs -->
<modal ref="basicModal">
  <h4>Basic Modal</h4>
  <button class="primary" @click="$refs.basicModal.close()">Close</button>
</modal>
<button @click="$refs.basicModal.open()">Open modal</button>

<!-- Modal component -->
<template>
  <div v-show="active">
    <!-- ... -->
  </div>
</template>

<script>
  export default {
    // ...
    data() {
        return {
            active: false,
        };
    },
    methods: {
      open() {
        this.active = true;
      },
      hide() {
        this.active = false;
      },
    },
    // ...
  };
</script>

```

```html
<!-- тут можно было обойтись событиями -->
<template>
  <range :max="max"
    :min="min"
    ref="range"
    :step="1"></range>
</template>

<script>
  export default {
    // ...
    methods: {
      getRangeCurrentValue() {
        return this.$refs.range.currentValue;
      },
    },
    // ...
  };
</script>
```

```js
// ok
this.$refs.newEmail.focus();
```

---


<a name="%D0%98%D1%81%D0%BF%D0%BE%D0%BB%D1%8C%D0%B7%D0%BE%D0%B2%D0%B0%D0%BD%D0%B8%D0%B5-%D0%BD%D0%B5-vue-%D0%BA%D0%BE%D0%BC%D0%BF%D0%BE%D0%BD%D0%B5%D0%BD%D1%82%D0%BE%D0%B2-dom-jquery-%D0%B8-jquery-%D0%BA%D0%BE%D0%BC%D0%BF%D0%BE%D0%BD%D0%B5%D0%BD%D1%82%D0%BE%D0%B2"></a>
# Использование не-vue компонентов, DOM, jQuery и jQuery-компонентов

Не используйте jQuery в vue-приложениях напрямую, не обращайтесь к DOM напрямую.

Старайтесь также не использовать jQuery-компоненты. При необходимости - следует обернуть их в vue-директиву, в крайнем случае использовать `this.$refs`:

```js
vueInstance.directive('calendar', {
    bind( el ) {
        new Flatpicker( el );
    },
})
```

---


<a name="%D0%98%D1%81%D0%BF%D0%BE%D0%BB%D1%8C%D0%B7%D1%83%D0%B9%D1%82%D0%B5-%D0%91%D0%AD%D0%9C-%D0%B2-css"></a>
# Используйте БЭМ в CSS

- [Component style scoping](https://vuejs.org/v2/style-guide/#Component-style-scoping-essential) _Essential_
- [Element selectors with scoped](https://vuejs.org/v2/style-guide/#Element-selectors-with-scoped-use-with-caution) _Use with caution_

БЭМ-именование даёт достаточный уровень изоляции стилей компонента, использование scoped в большинстве случаев избыточно.

В общих/библиотечных компонентах scoped стили использовать нельзя, это приведёт к проблемам при переопределении стилей.

--- 


<a name="%D0%94%D0%BE%D0%BA%D1%83%D0%BC%D0%B5%D0%BD%D1%82%D0%B0%D1%86%D0%B8%D1%8F-%D0%B8-%D1%81%D0%B0%D0%BC%D0%BE%D0%B4%D0%BE%D0%BA%D1%83%D0%BC%D0%B5%D0%BD%D1%82%D0%B0%D1%86%D0%B8%D1%8F-%D0%BA%D0%BE%D0%BC%D0%BF%D0%BE%D0%BD%D0%B5%D0%BD%D1%82%D0%B0"></a>
# Документация и самодокументация компонента

- [Prop definitions](https://vuejs.org/v2/style-guide/#Prop-definitions-essential) _Essential_ 

Экземпляр Vue компонента создается при размещении элемента компонента в коде приложения. Дополнительная конфигурация экземпляра осуществляется при использовании атрибутов. Для того, чтобы компонент мог быть успешно переиспользован другими разработчиками, эти атрибуты и есть API вашего компонента.

Самодокументация: детализируйте [prop types](https://vuejs.org/v2/style-guide/#Prop-definitions-essential).

Используйте jsdoc там, где это облегчит понимание кода.

Описание сложной логики при необходимости можно поместить в формате маркдаун в `ComponentName.md` рядом с файлом компонента или в корневом `README.md` приложения.

### Почему?

* Документация предлагает разработчику высокоуровневое описание компонента без необходимости вникать в его код. Это делает использование компонента более быстрым и простым.
* API компонента в Vue это набор его атрибутов. Именно с их помощью он может быть дополнительно настроен. То есть именно атрибуты компонента являются важными для тех разработчиков, которые будут его в дальнейшем использовать.
* Документация формализует API, показывает разработчикам какая часть функционала сохраняется для обратной совместимости при модификации кода компонента.
* Название `README.md` это по факту отраслевой стандарт названия для документации, которую разработчику стоит прочесть прежде чем использовать проект. Многие платформы управления кодом (Github, Bitbucket, Gitlab) по умолчанию показывают содержание README-файла при просмотре контента любой директории.

---


<a name="state-management-vuex"></a>
# State-management: Vuex

- [Non-flux state management](https://vuejs.org/v2/style-guide/#Non-flux-state-management-use-with-caution) _Use with caution_

Для глобального управления состоянием предпочтительно использовать Vuex, а не `this.$root` или глобальную шину событий, которые применимы только в наипростейших приложениях.

В отсутствие Vuex не передавайте обработчики событий в нижние компоненты (вместо этого делайте emit события в дочернем компоненте).

Внутри компонента стоит держать только тот код, который связан с изменением внешнего вида компонента, прослушиванием и диспетчеризацией событий. Бизнес-логику, взаимодействие с внешним миром (вызовы удаленных ресурсов) следует описывать в actions менеджера состояний.

Используйте [модули](https://vuex.vuejs.org/ru/modules.html) Vuex.

Не допускайте изменения состояния Vuex вне директивы mutations.

В dev-среде включайте Vuex [strict mode](https://vuex.vuejs.org/ru/strict.html):

```js
export default new Vuex.Store( {
    modules : {
        services,
    },
    strict : process.env.NODE_ENV !== 'production',
} );
```
Используйте хэлперы: [mapState](https://vuex.vuejs.org/ru/state.html#вспомогательная-функция-mapstate), [mapGetters](https://vuex.vuejs.org/ru/getters.html#вспомогательная-функция-mapgetters), [mapMutations](https://vuex.vuejs.org/ru/mutations.html#вызов-мутаций-в-компонентах), [mapActions](https://vuex.vuejs.org/ru/actions.html#диспетчеризация-действий-в-компонентах), [createNamespacedHelpers](https://vuex.vuejs.org/ru/modules.html#подключение-с-помощью-вспомогательных-функций-к-пространству-имён). Заметно сократят написание шаблонного кода для взаимодействия с vuex.

---


<a name="%D0%9D%D0%B5-%D1%80%D0%B0%D1%81%D1%88%D0%B8%D1%80%D1%8F%D0%B9%D1%82%D0%B5-%D0%BF%D1%80%D0%BE%D1%82%D0%BE%D1%82%D0%B8%D0%BF-vue"></a>
# Не расширяйте прототип Vue

Старайтесь не расширять прототип Vue. Это приводит к тому, что становится сложно рассуждать откуда появились те или иные методы у компонента  - вместо этого лучше использовать обычные es6 модули и помнить, что они синглтоны.

Прототип Vue - не свалка для глобальных данных.

---


<a name="%D0%94%D0%B5%D0%B4%D1%83%D0%BF%D0%BB%D0%B8%D1%86%D0%B8%D1%80%D1%83%D0%B9%D1%82%D0%B5-%D0%BA%D0%BE%D0%B4-%D1%81%D0%BB%D0%BE%D1%82%D1%8B-%D1%84%D1%83%D0%BD%D0%BA%D1%86%D0%B8%D0%BE%D0%BD%D0%B0%D0%BB%D1%8C%D0%BD%D1%8B%D0%B5-%D0%BA%D0%BE%D0%BC%D0%BF%D0%BE%D0%BD%D0%B5%D0%BD%D1%82%D1%8B-%D0%BC%D0%B8%D0%BA%D1%81%D0%B8%D0%BD%D1%8B"></a>
# Дедуплицируйте код: слоты, функциональные компоненты, миксины.

Разделяйте "умные" компоненты, в которых хранится логика приложения, и "глупые", отвечающие только за представления. Для глупых может быть оправдано использование `functional: true`.

Не передавайте в нижние компоненты "рендерилки" каких-то кусков - вместо это в Vue положено использовать слоты.

---


<a name="v-html-%D0%B2%D0%B5%D0%B4%D1%91%D1%82-%D0%BA-xss"></a>
# `v-html` ведёт к XSS

[Помните об XSS](https://blog.sqreen.io/xss-in-vue-js/), неоправданное использование `v-html` в ваших или библиотечных компонентах приведёт к уязвимостям.

---


<a name="%D0%A0%D0%B0%D0%B7%D0%B4%D0%B5%D0%BB%D1%8F%D0%B9%D1%82%D0%B5-%D0%B1%D0%B0%D0%BD%D0%B4%D0%BB%D1%8B-%D0%BD%D0%B0-async-%D0%BA%D0%BE%D0%BC%D0%BF%D0%BE%D0%BD%D0%B5%D0%BD%D1%82%D1%8B"></a>
# Разделяйте бандлы на async-компоненты

В больших интерфейсах всегда [используйте асинхронные компоненты](http://vuejsdevelopers.com/2017/07/03/vue-js-code-splitting-webpack/):

```js
new Vue({ 
  el: '#app',
  components: {
    AsyncComponent: () => import('./AsyncComponent.vue')
  }
});
```

C версии 2.3 также [есть возможность](https://vuejs.org/v2/guide/components.html#Async-Components) использовать компонент, отображаемый во время загрузки основного асинхронного компонента:

```js
const AsyncComp = () => ({
  // The component to load. Should be a Promise
  component: import('./MyComp.vue'),
  // A component to use while the async component is loading
  loading: LoadingComp,
  // A component to use if the load fails
  error: ErrorComp,
  // Delay before showing the loading component. Default: 200ms.
  delay: 200,
  // The error component will be displayed if a timeout is
  // provided and exceeded. Default: Infinity.
  timeout: 3000,
});
```

---


<a name="%D0%9F%D0%BE%D0%BC%D0%BD%D0%B8%D1%82%D0%B5-%D0%BF%D1%80%D0%BE-%D0%BF%D0%BE%D0%B4%D0%B2%D0%BE%D0%B4%D0%BD%D1%8B%D0%B5-%D0%BA%D0%B0%D0%BC%D0%BD%D0%B8-%D1%80%D0%B5%D0%B0%D0%BA%D1%82%D0%B8%D0%B2%D0%BD%D0%BE%D1%81%D1%82%D0%B8"></a>
# Помните про подводные камни реактивности

Аккуратно обращайтесь с реактивностью - не забывайте использовать `Vue.$set` когда надо, пишите ваши компоненты устойчивыми к ошибкам:

- [Array Change Detection](https://vuejs.org/v2/guide/list.html#Array-Change-Detection)
- [Object Change Detection Caveats](https://vuejs.org/v2/guide/list.html#Object-Change-Detection-Caveats)

---


<a name="%D0%A4%D0%B0%D0%B9%D0%BB%D0%BE%D0%B2%D0%B0%D1%8F-%D1%81%D1%82%D1%80%D1%83%D0%BA%D1%82%D1%83%D1%80%D0%B0-%D1%81-%D1%83%D1%87%D1%91%D1%82%D0%BE%D0%BC-vuex-vue-router-apollo"></a>
# Файловая структура с учётом vuex, vue-router, apollo

Стоит выносить в отдельные каталоги проекта, чтобы не засорять корневой каталог кучей разнородных файлов:
- `mixins`,
- `store` - модули vuex лучше держать в отдельном каталоге, а не в каталогах компонентов,
- `utils` - хелперы,
- `router` - если больше 1 файла, например основной файл, файл тестов, файл с обвязкой,
- `gql` - для запросов, общих для нескольких компонентов.

---

<a name="%D0%98%D1%81%D1%82%D0%BE%D1%87%D0%BD%D0%B8%D0%BA%D0%B8"></a>
# Источники

- https://vuejs.org/v2/style-guide/
- https://pablohpsilva.github.io/vuejs-component-style-guide/#/russian
- https://www.udemy.com/vuejs-2-the-complete-guide/
- http://vuejsdevelopers.com/2017/07/03/vue-js-code-splitting-webpack/
- https://blog.sqreen.io/xss-in-vue-js/
- https://vuejs.org/v2/guide/
