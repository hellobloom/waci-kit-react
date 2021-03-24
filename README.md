# WACI Kit React

Render a QR Code or button to [initiate a WACI interaction](https://specs.bloom.co/wallet-credential-interactions/#qr-code-or-link)

- [WACI Kit React](#waci-kit-react)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Props](#props)
    - [QR Props](#qr-props)
    - [Button Props](#button-props)

## Installation

```
npm install --save @bloomprotocol/waci-kit-react
```

## Usage

`WACIElement` will render a QR code or button based on the client's platform. By default it will render a button on mobile clients.

```tsx
import { FC } from 'react';
import { WACIElement } from '@bloomprotocol/waci-kit-react';

const MyComp: FC = () => {
  return (
    <WACIElement
      data={{
        challengeTokenUrl:
          'https://example.com/api/v1/waci-challenge/9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d',
        version: '1',
      }}
      buttonProps={{
        size: 'lg',
        type: 'bloom',
      }}
    />
  );
};
```

![QR Example](https://github.com/hellobloom/waci-kit-react/raw/main/assets/qr.png)
![Button Example](https://github.com/hellobloom/waci-kit-react/raw/main/assets/button.png)

## Props

| Name        | Description                                      | Type                                                                              |
| ----------- | ------------------------------------------------ | --------------------------------------------------------------------------------- |
| data        | The data to be rendered in the QR code or button | [See below](#data)                                                                |
| mode        | Whether to render a QR code or button            | `"qr" | "button" | (parsedResult: Bowser.Parser.ParsedResult) => "qr" | "button"` |
| qrProps     | Props for the rendered QR code                   | [See below](#qr-props)                                                            |
| buttonProps | Props for the rendered button                    | [See below](#button-props)                                                        |

### Data

This is the [WACI payload](https://specs.bloom.co/wallet-credential-interactions/#payload).

| Name              | Description                                    | Type     | Required |
| ----------------- | ---------------------------------------------- | -------- | -------- |
| challengeTokenUrl | `GET` endpoint that returns a `challengeToken` | `string` | Yes      |
| version           | The version of the payload                     | `"1"`    | Yes      |

### QR Props

In addition to the custom props outlined below you can provide any extra `<svg>` props.

| Name    | Description                                                            | Type                      | Default                   |
| ------- | ---------------------------------------------------------------------- | ------------------------- | ------------------------- |
| bgColor | Background color of the QR code                                        | `string`                  | `"#ffffff00"`             |
| fgColor | Color of the QR code dots and eyes                                     | `string`                  | `"#6067f1"`               |
| logo    | Configuration of the logo to be displayed in the center of the QR code | [See below](#logo-config) | [See below](#logo-config) |

```tsx
import { FC } from 'react';
import { WACIElement } from '@bloomprotocol/waci-kit-react';

const MyComp: FC = () => {
  return (
    <WACIElement
      mode="qr"
      data={{
        challengeTokenUrl:
          'https://example.com/api/v1/waci-challenge/9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d',
        version: '1',
      }}
      qrProps={{
        fgColor: 'red',
        onClick: () => {
          alert('Clicked!');
        },
      }}
    />
  );
};
```

#### Logo Config

| Name    | Description                                     | Type     | Default               |
| ------- | ----------------------------------------------- | -------- | --------------------- |
| image   | URL of the image to display (can be a data URL) | `string` | SVG of the Bloom logo |
| width   | Width of the image                              | `number` | 20% of the QR code    |
| height  | Height of the image                             | `number` | `width`               |
| opacity | Opacity of the image                            | `number` | `1`                   |

```tsx
import { FC } from 'react';
import { WACIElement } from '@bloomprotocol/waci-kit-react';

const MyComp: FC = () => {
  return (
    <WACIElement
      data={{
        challengeTokenUrl:
          'https://example.com/api/v1/waci-challenge/9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d',
        version: '1',
      }}
      qrProps={{
        logo: {
          image: 'https://placekitten.com/200/200',
        },
      }}
    />
  );
};
```

### Button Props

In addition to the custom props outlined below you can provide any extra `<a>` props.

| Name   | Description                                                                                      | Type                                           | Required |
| ------ | ------------------------------------------------------------------------------------------------ | ---------------------------------------------- | -------- |
| size   | The size of button to render                                                                     | `"lg" | "md" | "sm"`                           | Yes      |
| type   | The type of button to render                                                                     | Dependent on `size`, [see below](#button-type) | Yes      |
| invert | Whether the text and background colors should be switched (only applicable when `size === "sm"`) | `boolean`                                      | No       |

```tsx
import { FC } from 'react';
import { WACIElement } from '@bloomprotocol/waci-kit-react';

const MyComp: FC = () => {
  return (
    <WACIElement
      mode="button"
      data={{
        challengeTokenUrl:
          'https://example.com/api/v1/waci-challenge/9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d',
        version: '1',
      }}
      buttonProps={{
        size: 'md',
        type: 'connect',
      }}
    />
  );
};
```

#### Button Type

| Size   | Type                                                    |
| ------ | ------------------------------------------------------- |
| `"lg"` | `"log-in" | "sign-up" | "connect" | "bloom" | "verify"` |
| `"md"` | `"log-in" | "sign-up" | "connect" | "bloom" | "verify"` |
| `"sm"` | `"square" | "rounded-square" | "circle" | "squircle"`   |