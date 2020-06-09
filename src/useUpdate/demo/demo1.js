import React from 'react';
import { Button } from 'antd';
import { useUpdate } from '@umijs/hooks';
export default (function () {
    var update = useUpdate();
    return (React.createElement(React.Fragment, null,
        React.createElement("div", null,
            "Time: ",
            Date.now()),
        React.createElement(Button, { onClick: update, style: { marginTop: 16 } }, "update")));
});
//# sourceMappingURL=demo1.js.map