/** @jsx React.DOM */

'use strict';

var React = require('react');
var ReactCanvas = require('react-canvas');
var Page = require('./components/Page');
var articles = require('../common/data');


var Surface = ReactCanvas.Surface;
var ListView = ReactCanvas.ListView;
var Group = ReactCanvas.Group;

var App = React.createClass({

  render: function () {
    var size = this.getSize();
    var stylex= {width:100,height: 100, borderWidth: 2,borderColor: 'red'};
    return (
      <Surface top={0} left={0} width={size.width} height={size.height}>
      <Group style={stylex} onMouseMove={this.onMouseMove} onMouseLeave={this.leave} onMouseEnter={this.enter}></Group>
      </Surface>
    );
  },

  onMouseMove: function (e) {
    // console.log('xxx', e);
  },

  enter: function (e) {
    console.log('enter')
  },

  leave: function (e) {
    console.log('leave')
  },

  renderPage: function (pageIndex, scrollTop) {
    var size = this.getSize();
    var article = articles[pageIndex % articles.length];
    var pageScrollTop = pageIndex * this.getPageHeight() - scrollTop;
    return (
      <Page
        width={size.width}
        height={size.height}
        article={article}
        pageIndex={pageIndex}
        scrollTop={pageScrollTop} />
    );
  },

  getSize: function () {
    return document.getElementById('main').getBoundingClientRect();
  },

  // ListView
  // ========

  getListViewStyle: function () {
    var size = this.getSize();
    return {
      top: 0,
      left: 0,
      width: size.width,
      height: size.height
    };
  },

  getNumberOfPages: function () {
    return 1000;
  },

  getPageHeight: function () {
    return this.getSize().height;
  }

});

React.render(<App />, document.getElementById('main'));
