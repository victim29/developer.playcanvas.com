---
title: Light
sidebar_position: 10
---

The Light component attaches a dynamic light source to the Entity. The 'Type' property determines what kind of light is attached and what other properties are available.

The Light component can be enabled or disabled using the toggle in the top right of the component panel. If enabled, the light will light the scene.

#### Directional

![Light component (Directional)][1]

#### Omni

![Light component (Omni)][2]

#### Spot

![Light component (Spot)][3]

## Properties

| Property           | Description |
|--------------------|-------------|
| Type               | Can be: <ul><li>Directional: a light casting in a uniform direction</li><li>Omni: a light casting in all directional around an omni</li><li>Spot: a light casting from the apex of a cone</li></ul> |
| Color              | The color of the emitted light. |
| Intensity          | The intensity of the light, this acts as a scalar value for the light's color. This value can exceed 1. |
| Range              | Omni and Spot only. The distance from the spotlight source at which its contribution falls to zero. |
| Falloff Mode       | Omni and spot only. Controls the rate at which a light attenuates from its position. |
| Cone Angle         | Spot only. The inner and outer cone angles, measured from the spotlight's direction, at which light falls from its maximum to zero. |
| Bake Lightmap      | Enable lightmap baking from this light. |
| Affect             | Determines which types of objects are lit by this light. Can be any combination of dynamically lit or lightmapped objects. |
| Cast Shadows       | If checked, the light will cause shadow casting models to cast shadows. |
| Shadow Update Mode | Determines when the shadowmap for this light is updated. Can be: <ul><li>Once: generated once and never again. Useful if casters, receivers and light are static.</li><li>Realtime: updated every frame.</li></ul> |
| Resolution         | The resolution of the shadowmap generated by this light source. This property is only used when Cast Shadows is checked. A high value will result in a more accurate shadow but will be at the cost of performance. |
| Distance           | Directional lights only. The shadow distance is the maximum distance from the camera beyond which shadows that come from Directional Lights are no longer visible. Smaller values produce more detailed shadows. The closer the limit the less shadow data has to be mapped to, and represented by, any shadow map; shadow map pixels are mapped spatially and so the less distance the shadow map has to cover, the smaller the pixels and so the more resolution any shadow has. |
| Shadow Type        | The shadow mapping algorithm to use. The selection will affect the appearance and performance of the shadows. Can be: <ul><li>Shadow Map: PCF (Percentage Closer Filtering) shadowmaps.</li><li>Variance Shadow Map (8bit): Low precision shadowmaps. VSM is generally softer than PCF shadows.</li><li>Variance Shadow Map (16bit): Medium precision shadowmaps. Uses twice as much VRAM as 8 bit VSM.</li><li>Variance Shadow Map (32bit): High precision shadowmaps. Uses twice as much VRAM as 16 bit VSM.</li></ul> |
| Shadow Bias        | Bias values enable the tuning of shadows in order to eliminate rendering artifacts, namely 'shadow acne' and 'peter-panning'. The two values are a shadow bias and a normal offset bias. |
| Cookie             | Omni and spot only. A texture asset to be projected from the light. |
| Cookie Intensity   | Omni and spot only. Defines the strength of the cookie texture. |
| Cookie Falloff     | Spot only. Disable the spotlight falloff. |

## Scripting Interface

You can control a Light component's properties using a [script component][4]. The Light component's scripting interface is [here][5].

[1]: /images/user-manual/scenes/components/component-light-directional.png
[2]: /images/user-manual/scenes/components/component-light-point.png
[3]: /images/user-manual/scenes/components/component-light-spot.png
[4]: /user-manual/scenes/components/script
[5]: /api/pc.LightComponent.html