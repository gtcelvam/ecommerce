import {css} from 'styled-components';

export function Mobile(props) {
    return  css`@media all and (max-width : 520px){${props}}`;
}
