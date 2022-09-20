## Native Action Scheduler

![marketplace](/assets/MarketPlaceIcon.png)

Schedule Actions in your Native app, just like the [Action Scheduler](https://marketplace.mendix.com/link/component/202363)

## Features

- Switch Scheduler on/off with a Boolean expression
- Set Scheduler interval with a Long expression
- Set the action (Open page, Nanoflow, Microflow, etc...)
- Set the scheduler to run once (the interval will act as a delay)

## Example

![](/assets/page.png)
![](/assets/widget.png)

- I have configured a Dataview with a `Counter` (Number) and `Enabled` (Boolean)
- I let the Native Action Scheduler execute a Nanoflow every seccond (1000ms), while `Enabled` is true

## Issues, suggestions and feature requests

Feedback can be provided on [Github](https://github.com/j3lte/mendix-native-action-scheduler)

## License

The MIT License (MIT)

Copyright © CaffCode 2022. All Rights Reserved.

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
