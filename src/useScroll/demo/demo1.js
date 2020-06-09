/**
 * title: Basic Usage
 * desc: Try to scroll the box below.
 *
 * title.zh-CN: 基本用法
 * desc.zh-CN: 尝试滚动一下文字内容。
 */
import { __read } from "tslib";
import React from 'react';
import { useScroll } from '@umijs/hooks';
export default (function () {
    var _a = __read(useScroll(), 2), scroll = _a[0], ref = _a[1];
    return (React.createElement(React.Fragment, null,
        React.createElement("div", null, JSON.stringify(scroll)),
        React.createElement("div", { style: {
                height: '160px',
                width: '160px',
                border: 'solid 1px #000',
                overflow: 'scroll',
                whiteSpace: 'nowrap',
                fontSize: '32px',
            }, ref: ref },
            React.createElement("div", null, "Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aspernatur atque, debitis ex excepturi explicabo iste iure labore molestiae neque optio perspiciatis"),
            React.createElement("div", null, "Aspernatur cupiditate, deleniti id incidunt mollitia omnis! A aspernatur assumenda consequuntur culpa cumque dignissimos enim eos, et fugit natus nemo nesciunt"),
            React.createElement("div", null, "Alias aut deserunt expedita, inventore maiores minima officia porro rem. Accusamus ducimus magni modi mollitia nihil nisi provident"),
            React.createElement("div", null, "Alias aut autem consequuntur doloremque esse facilis id molestiae neque officia placeat, quia quisquam repellendus reprehenderit."),
            React.createElement("div", null, "Adipisci blanditiis facere nam perspiciatis sit soluta ullam! Architecto aut blanditiis, consectetur corporis cum deserunt distinctio dolore eius est exercitationem"),
            React.createElement("div", null, "Ab aliquid asperiores assumenda corporis cumque dolorum expedita"),
            React.createElement("div", null, "Culpa cumque eveniet natus totam! Adipisci, animi at commodi delectus distinctio dolore earum, eum expedita facilis"),
            React.createElement("div", null, "Quod sit, temporibus! Amet animi fugit officiis perspiciatis, quis unde. Cumque dignissimos distinctio, dolor eaque est fugit nisi non pariatur porro possimus, quas quasi"))));
});
//# sourceMappingURL=demo1.js.map