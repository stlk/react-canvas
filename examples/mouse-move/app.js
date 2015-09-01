'use strict';

var React = require('react');
var ReactCanvas = require('react-canvas');

var Surface = ReactCanvas.Surface;
var Group = ReactCanvas.Group;

var App = React.createClass({

  render: function () {
    var groupStyle = {
      width: 100,
      height: 100,
      backgroundColor: '#f90'
    };
    var group1Style = {
      width: 50,
      height: 50,
      backgroundColor: '#f9f'
    };

    var size = this.getSize();
    return (
      <Surface top={0} left={0} width={size.width} height={size.height} onMouseMove={this.onMouseMove}>
        <Group style={groupStyle} onClick={this.onClick}>
        <Group style={group1Style} onClick={this.onClick1}>
        </Group>
</Group>
      </Surface>
    );
  },

    onClick: function () {
      console.log('click');
    },

    onClick1: function () {
      console.log('click1');
    },

    onMouseMove: function(e) {
      console.log(e);
    },

  getSize: function () {
    return document.getElementById('main').getBoundingClientRect();
  }

});

React.render(<App />, document.getElementById('main'));
