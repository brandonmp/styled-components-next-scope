import React from 'react';
import styled from 'styled-components';

const Title = styled.h1`
    color: red;
    font-size: 50px;
`;

export default () => (
    <div>
        <a href="/inject-global">Globally injected</a>
        <br/>
        <br/>
        <br/>
        <a href="/scoped">Scoped styles</a>
    </div>
);
