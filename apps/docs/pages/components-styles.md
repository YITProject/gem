## 组件

### godown

Gem中大量使用了 `godown` 中的 `FlexFlow` , `BaseButton` , `AvatarAnchor` , `BaseForm` 等

由于 `apps/web` 项目是一个 React 项目, 所以需要将 `godown` 注册的标准 HTML 元素转换为 React 组件, 这将在 React 中正常工作, 并在文档中渲染为标准 HTML 元素. 只需要从 `godown/react` 引入默认转换后的 React 组件

下面的示例将会渲染出一个用户头像, 当用户头像不存在或获取出错时, 将应用 `name` 属性或备用地址

```jsx
import { AvatarAnchor } from "godown/react";

<AvatarAnchor src="..." name="xx" />;
```

## 样式

Gem大量使用 `powerstyl` , 一种快速生成可复用元素级组件和内联css样式的工具包, 由参与者STARTRACEX创建

Gem大量使用 `godown` , 一个基于Lit的Web components组件库, 由参与者STARTRACEX创建

### powerstyl

可以通过引入css来使用 `powerstyl` 构造内联样式, 这将会转换为 `React.CSSProperties`

```jsx
import { css } from "powerstyl";

<div
  style={css`
    display: flex;
    align-items: center;
  `}
>
  ...
</div>;
```

通过模板嵌入变量来使用共同样式

```jsx
const displayFlex = `display: flex;`

<div
  style={css`
    ${diplayFlex}
    align-items: center;
  `}
>
  ...
</div>
```

通过 `tagged`, `styled` 和 `inlined` 来创建通用元素组件

下面创建三个具有 `display: flex;` 属性的 `div` 元素, 它们的最终效果完全一致

```jsx
import styled, { tagged, inlined } from "powerstyl";

const DivFlex1 = styled`display: flex;`;
const DivFlex2 = tagged`div``display: flex;`;
const DivFlex3 = inlined`display: flex;`

<DivFlex1>
  flex
</DivFlex1>

<DivFlex2>
  flex
</DivFlex2>

<DivFlex3>
  <div>flex</div>
</DivFlex3>
```

#### css预处理器

你可以在 `powerstyl` 里处理基本 less 和 sass 规则, 所有解析均为同步, 返回值为 `string` 或 `(TemplateStringsArray, ...values: any[])=> string`

```js
import less from "powerstyl/less";
import sass from "powerstyl/sass";

const raw = `
p{
  b{
    ...
  }
}
`;
const lessToCss = less`${raw}`;
const sassToCss = sass`${raw}`;
const lessToCssO = less({
  /* less options */
})`${raw}`;
const sassToCssO = sass({
  /* sass options */
})`${raw}`;
```
