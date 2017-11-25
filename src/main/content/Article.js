import React from 'react';
import './article.scss';

import {Numbers} from '../../numbers';

export const Article = () => (
    <article className="main__content">
        <Numbers from={7} to={14} odd />
    </article>
);