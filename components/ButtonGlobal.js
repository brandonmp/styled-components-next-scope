// @flow
import Button from 'antd/lib/button';
import { injectGlobal } from 'styled-components';
import Styles from 'antd/lib/button/style/index.css';

injectGlobal`${Styles}`;
export default Button;
