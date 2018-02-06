[На главную](README.md)

# Vue CookBook

<!-- MarkdownTOC autolink=true autoanchor=true bracket=round depth=2 -->

- [Динамическое подключение компонентов с lazy-loading](#%D0%94%D0%B8%D0%BD%D0%B0%D0%BC%D0%B8%D1%87%D0%B5%D1%81%D0%BA%D0%BE%D0%B5-%D0%BF%D0%BE%D0%B4%D0%BA%D0%BB%D1%8E%D1%87%D0%B5%D0%BD%D0%B8%D0%B5-%D0%BA%D0%BE%D0%BC%D0%BF%D0%BE%D0%BD%D0%B5%D0%BD%D1%82%D0%BE%D0%B2-%D1%81-lazy-loading)

<!-- /MarkdownTOC -->

<a name="%D0%94%D0%B8%D0%BD%D0%B0%D0%BC%D0%B8%D1%87%D0%B5%D1%81%D0%BA%D0%BE%D0%B5-%D0%BF%D0%BE%D0%B4%D0%BA%D0%BB%D1%8E%D1%87%D0%B5%D0%BD%D0%B8%D0%B5-%D0%BA%D0%BE%D0%BC%D0%BF%D0%BE%D0%BD%D0%B5%D0%BD%D1%82%D0%BE%D0%B2-%D1%81-lazy-loading"></a>
## Динамическое подключение компонентов с lazy-loading

```html
<template>
    <component :is="myComponent"></component>
</template>

<script>
...
props: ['nameComponent'],
computed : {
        myComponent() {
            return () => import( `components/page_${ this.nameComponent }.vue` );
    },
},
...
</script>
```

Способ не сработает, если `nameComponent` не в props, а в data. Тогда нужен хак:

```js
data() {
    return {
        nameComponent : 'edit',
    };
},
computed : {
    myComponent() {
        //хак, нужен для реактивного перерасчета свойства
        //при изменении this.nameComponent
        let nameComponent = this.nameComponent;

        return () => import(`components/page_${ nameComponent }.vue` );
    },
},
```

