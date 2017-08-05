
# React Conditional

Render React components conditionally.

## Install

### NPM:

    npm install react-conditional

### Bower:

    bower install react-conditional


## Example

```javascript
import React from 'react';
import { Conditional, If, Else } from 'react-conditional';

class Beer extends React.Component {

    render() {
        return (
            <div>
                <Conditional>
                    <If condition={ this.props.age >= 16 }>
                        Have a beer, {this.props.name}!
                    </If>
                    <Else>
                    {() => // will only be evaluated if the condition fails.
                       <span>Sorry, {this.props.name}, you are not old enough.</span>
                    }
                    </Else>
                </If>
            </div>
        );
    }

});
```


## API

### &lt;If /&gt;

| Property        | Type  |
| ------------- | ------- |
| `condition`   | Boolean |

If `condition` evaluates to `true`, the `<If />` block will be rendered, otherwise the `<Else />` block will be rendered.

This component can contain multiple number of `<If />` blocks, the first block that evaluates to `true` will be rendered. If no `<If />` block evaluates to `true`, the `<Else />` block will be rendered.

### &lt;If /&gt;
Must contain only a single child, which it renders as-is. Should not be used outside of a `<Conditional />` block.

### &lt;Else /&gt;
Must only contain a single child, which it renders as-is. Should not be used outside of a `<Conditional />` block.

## License

**React Conditional** is released under the [MIT license](http://romac.mit-license.org).

