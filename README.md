# react-custom-progress-bar

[![npm version](https://img.shields.io/npm/v/react-custom-progress-bar.svg)](https://www.npmjs.com/package/react-custom-progress-bar) [![license](https://img.shields.io/npm/l/react-custom-progress-bar.svg)](https://www.npmjs.com/package/react-custom-progress-bar)

**react-custom-progress-bar** is a highly customizable progress bar component for React applications. It allows you to easily display loading progress with flexible styles, colors, and animations.

## Features

- **Customizable**: Set your own colors, height, and animations.
- **Responsive**: Adapts to different container widths.
- **Lightweight**: Minimal dependencies, easy to integrate.
- **Animation**: Includes animated loading effects.

## Installation

You can install the package via npm or yarn:

```bash
npm install react-custom-progress-bar

```

```bash
yarn add react-custom-progress-bar

```

## ProgressBar Component

The `ProgressBar` component displays a visual representation of progress.

## Props

| Prop              | Type   | Default   | Description                                         |
| ----------------- | ------ | --------- | --------------------------------------------------- |
| `progress`        | number | `0`       | The progress value (from 0 to 100).                 |
| `barColor`        | string | `#00b7ff` | The color of the progress bar.                      |
| `backgroundColor` | string | `#e9e9e9` | The background color of the progress bar container. |
| `height`          | string | `0.75rem` | The height of the progress bar.                     |

## Example Usage

```
# Here's a basic example of how to use the react-custom-progress-bar in your project:
```

```jsx
import React from "react";
import ProgressBar from "react-custom-progress-bar";

const App = () => {
  return (
    <div>
      <h1>Progress Bar Example</h1>
      <ProgressBar
        progress={75}
        barColor="#4caf50"
        backgroundColor="#f0f0f0"
        height="1rem"
      />
    </div>
  );
};

export default App;
```

## Styling and Animation

The component comes with default animations for loading and completion states:

- **Loading**: An animation that simulates progress from 0% to 100%.
- **Completion**: An animation that runs when the progress reaches 100%.

You can customize these animations or extend them using styled-components if needed

## Building and Developing

To develop or make changes to the library:

#### Clone the repository:

```bash
git clone https://github.com/bijayrauniyar0/react-custom-progress-bar.git
cd react-custom-progress-bar

```

#### Install dependencies:

npm install

#### Start the development server:

```bash
npm run dev
Build the library:

```

#### Build the library:

```bash

npm run build

```

## License

This project is licensed under the Apache-2.0 License. See the LICENSE file for more details.

## Contributing

Contributions are welcome! Feel free to submit a pull request or open an issue to discuss potential changes.

## Author

Bijay Rauniyar
[GitHub Profile](https://github.com/bijayrauniyar0)

## Repository

[react-custom-progress-bar](https://github.com/bijayrauniyar0/react-custom-progress-bar)
