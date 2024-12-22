import { IAspect, IJoinPoint } from '@umajs/core';

import IndexController from '../controller/index.controller';

export default class implements IAspect {
    before(point: IJoinPoint<IndexController>) {
        console.log('index: this is before:', point.target);
    }
}
