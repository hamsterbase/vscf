# VS Framework

Treat the VS Code code repository as a framework.

## Background

VS Code uses very few third-party dependencies and implements various functionalities commonly used in desktop software, such as:

- Theme switching
- i18n support
- Shortcuts and commands
- logger
- IPC
- Events

Therefore, we can treat it as a framework. This library is mainly used for batch copying of the VS Code source code. It also utilizes `patch.ts` to make some modifications to the original code by removing unnecessary code.

## Usage

1. Add a .env file to configure some settings:

```bash
VSCODE_DIR=vscode # VS Code source code directory
TARGET_DIR=project/vscf # Target directory after copying
```

2. Run the `npm run eject` command to copy the entire framework to the target directory.

## How to Debug

1. Add a .env file to configure some settings:

```bash
VSCODE_DIR=vscode # VS Code source code directory
TARGET_DIR=project/vscf # Target directory after copying
```

2. Run the `npm run restore` command to load the patches of the entire framework into the VS Code source code.

3. Modify or add patches according to your needs.

4. Run the npm run build command to generate a new framework based on the patches.

## 一些说明

If you have any requirements, please fork the project on your own. This project is for reference only and does not accept PRs. Compatibility is not guaranteed.

## License

```
MIT License

Copyright (c) 2023 - present HamsterBase

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

```

The code in the "src/framework" folder has the same license as VS Code.

```
MIT License

Copyright (c) 2015 - present Microsoft Corporation

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```
