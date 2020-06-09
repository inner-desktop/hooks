/**
 * title: Persist objects
 * desc: useSessionStorageState will do the serialization and deserialization work automatically.
 *
 * title.zh-CN: 存储对象
 * desc.zh-CN: useSessionStorageState 会自动处理序列化和反序列化的操作。
 */
import { __read } from "tslib";
import React from 'react';
import { Cascader } from 'antd';
import { useSessionStorageState } from '@umijs/hooks';
var options = [
    {
        value: 'zhejiang',
        label: 'Zhejiang',
        children: [
            {
                value: 'hangzhou',
                label: 'Hangzhou',
                children: [
                    {
                        value: 'xihu',
                        label: 'West Lake',
                    },
                ],
            },
        ],
    },
    {
        value: 'jiangsu',
        label: 'Jiangsu',
        children: [
            {
                value: 'nanjing',
                label: 'Nanjing',
                children: [
                    {
                        value: 'zhonghuamen',
                        label: 'Zhong Hua Men',
                    },
                ],
            },
        ],
    },
];
export default function () {
    var _a = __read(useSessionStorageState('cascader'), 2), value = _a[0], setValue = _a[1];
    return (React.createElement(React.Fragment, null,
        React.createElement(Cascader, { options: options, value: value, onChange: setValue, placeholder: "Please select" })));
}
//# sourceMappingURL=demo2.js.map