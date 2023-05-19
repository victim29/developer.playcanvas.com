---
title: Слой глубины
layout: usermanual-page.hbs
position: 2
---

Некоторые методы рендеринга требуют доступа к буферу глубины или цветовому буферу сцены для определенной камеры. Слой глубины - это специальный слой, который может быть добавлен в свойство `layers` камеры. [`order`][4] слоев определяет, на каком этапе рендеринга захватывается буфер глубины или цветовой буфер. Захваченные буферы затем могут быть использованы в следующих слоях камеры.

Обычно эти буферы захватываются после того, как отрисованы все непрозрачные слои, и могут быть использованы в следующих прозрачных слоях или постобработке.

Кроме того, для захвата этих буферов, захват должен быть включен на CameraComponent из скрипта:

- [```requestSceneColorMap```][0] для запроса цветовой карты
- [```requestSceneDepthMap```][1] для запроса карты глубины

## Доступ к буферу

Для доступа к одному из этих буферов в шейдере в качестве текстуры используйте следующие имена униформ:

- для карты цвета: `uSceneColorMap`
- для карты глубины: `uSceneDepthMap`

## Примеры

Эти примеры движка демонстрируют отображение как карты глубины, так и карты цвета, а также пользовательские шейдеры, позволяющие их использовать:

- GrabPass демонстрирует использование цветового буфера: [`GrabPass`][2]
- GroundFog демонстрирует использование буфера глубины: [`GroundFog`][3]

[0]: /api/pc.CameraComponent.html#requestSceneColorMap
[1]: /api/pc.CameraComponent.html#requestSceneDepthMap
[2]: https://playcanvas.github.io/#/graphics/grab-pass
[3]: https://playcanvas.github.io/#/graphics/ground-fog
[4]: /user-manual/graphics/layers/#choosing-the-layer-order