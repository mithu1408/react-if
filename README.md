
# Conditional React Component

Render react components conditionally.

## Install

### NPM:

    npm install conditional-react-component

### Bower:

    bower install conditional-react-component


## Example

```javascript
import React from 'react'
import { Conditional, If, Else } from 'conditional-react-component'

class NumberText extends React.Component {
    render() {
        return (
            <div>
                <Conditional>
                    <If condition={ this.props.value < 0 }>
                        <span>Negative</span>
                    </If>
                    <If condition={ this.props.value > 0 }>
                        <span>Positive</span>
                    </If>
                    <Else>
                       <span>Zero</span>
                    </Else>
                </If>
            </div>
        );
    }
})
```


## API

### &lt;Conditional /&gt;

The parent container element

### &lt;If /&gt;

| Property        | Type  |
| ------------- | ------- |
| `condition`   | Boolean |

If `condition` evaluates to `true`, then `<If />` block will be rendered, otherwise the `<Else />` block will be rendered.

This component can contain multiple number of `<If />` blocks, the first block that evaluates to `true` will be rendered. If no `<If />` block evaluates to `true`, then `<Else />` block will be rendered.

Must contain only a single child, which it renders as-is. Should not be used outside of a `<Conditional />` block.

### &lt;Else /&gt;
Must only contain a single child, which it renders as-is. Should not be used outside of a `<Conditional />` block.

## License

**Conditional React Component** is released under the [MIT license](http://romac.mit-license.org).

