[![Deploy to now](https://deploy.now.sh/static/button.svg)](https://deploy.now.sh/?repo=https://github.com/brandonmp/styled-components-next-scope)

1. clone repo
2. cd, yarn, etc.
3. yarn dev

You'll see two links.

One leads to a Button from antd-react with styles applied like so
```
import Button from 'antd/lib/button';
import styled from 'styled-components';
import Styles from 'antd/lib/button/style/index.css';

export default styled(Button)`
    ${Styles};
`;
```


The other injects styles globally:

```
import Button from 'antd/lib/button';
import { injectGlobal } from 'styled-components';
import Styles from 'antd/lib/button/style/index.css';

injectGlobal`${Styles}`;
export default Button;
```


Global works. The first example (the scoped) does not, despite the fact that the styles are ostensibly injected into the head of the document. 