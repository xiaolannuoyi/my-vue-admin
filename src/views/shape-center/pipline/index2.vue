<template>
  <div id="container">
    <div class="title">Vue G6</div>
     <div id="mountNode"></div>
  </div>
</template>
<script>
  import G6 from '@antv/g6'
  import dagre from 'dagre'
  export default {
    name: 'minimap',
    data () {
      return {
        graph: null,
        graphData: {
          nodes: [{
            id: 'node1',
            x: 100,
            y: 200
          },
          {
            id: 'node2',
            x: 300,
            y: 200
          }],
          edges: [{
            target: 'node2',
            source: 'node1'
          }]
        }
      }
    },
    mounted () {
      // this.graph = new G6.Graph({
      //   container: 'mountNode',
      //   width: 500,
      //   height: 500
      // })
      // this.graph.read(this.graphData)

        var _extends = Object.assign || function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };

  /**
   * 本案例演示如何使用G6自定义流程图：
   * 1、如何使用G6绘制流程图；
   * 2、如何在贝塞尔曲线上面自定义icon；
   * 3、如何响应贝塞尔曲线上icon的点击事件。
   * 
   * by 一之
   * 
   */

  /**
   * node 特殊属性
   */
  var nodeExtraAttrs = {
    begin: {
      fill: "#9FD4FB"
    },
    end: {
      fill: "#C2E999"
    }
  };

  var data = {
    nodes: [{
      id: "0",
      label: "start",
      type: "begin"
  }, {
      id: "6",
      label: "6",
      result:"red"
  }, {
      id: "10",
      label: "10",
       result:"red"
  }, 
  {
      id: "11",
      label: "11"
  }, {
      id: "12",
      label: "12"
  }, {
      id: "35",
      label: "35"
  }, 
  {
      id: "40",
      label: "40"
  },
  {
      id: "end",
      label: "end",
      type: "end"
  }
  ],

    edges: [{
      source: "0",
      target: "6"
  },
  {
      source: "0",
      target: "10"
  },
  {
      source: "0",
      target: "11"
  },
  {
      source: "0",
      target: "12"
  },
  {
      source: "6",
      target: "35"
  },
  {
      source: "10",
      target: "35"
  },
  {
      source: "11",
      target: "35"
  },
  {
      source: "12",
      target: "35"
  },
  {
      source: "35",
      target: "40"
  },
  {
      source: "40",
      target: "end"
  },
  ]
  };

  /**
   * 自定义节点
   */
  G6.registerNode("node", {
     drawShape: function  drawShape(cfg, group) {
      var rect = group.addShape("rect", {
        attrs: _extends({
          // x: -25,
          // y: -25,
          x: -25,
          y: 12,
          width: 50,
          height: 50,
          radius: 25,
          fill: "#FFD591",
          fillOpacity: 1
        }, nodeExtraAttrs[cfg.type])
      });
      return rect;
    },
    // // 设置状态
    setState: function setState(name, value, item) {
      var group = item.getContainer();
      var shape = group.get("children")[0]; // 顺序根据 draw 时确定

      if (name === "selected") {
        if (value) {
          shape.attr("fill", "#F6C277");
        } else {
          shape.attr("fill", "#FFD591");
        }
      }
    },

    getAnchorPoints: function getAnchorPoints() {
      return [[0, 0.5], [1, 0.5]];
    }
  }, "single-shape");

  /**
   * 自定义 edge 中心关系节点
   */
  // G6.registerNode("statusNode", {
  //   drawShape: function drawShape(cfg, group) {
  //     var circle = group.addShape("circle", {
  //       attrs: {
  //         x: 0,
  //         y: 0,
  //         r: 25,
  //         fill: cfg.active ? "#AB83E4" : "#ccc"
  //       }
  //     });
  //     return circle;
  //   }
  // }, "single-shape");

  /**
   * 自定义带箭头的贝塞尔曲线 edge
   */
  G6.registerEdge("line-with-arrow", {
    itemType: "edge",
    draw: function draw(cfg, group) {
      var startPoint = cfg.startPoint;
      var endPoint = cfg.endPoint;
      var centerPoint = {
        x: (startPoint.x + endPoint.x) / 2,
        y: (startPoint.y + endPoint.y) / 2
      };
      // 控制点坐标
      var controlPoint = {
        x: (startPoint.x + centerPoint.x) / 2,
        y: startPoint.y
      };

      console.log(cfg, startPoint, endPoint);

      // 为了更好的展示效果, 对称贝塞尔曲线需要连到箭头根部
      var path = group.addShape("path", {
        attrs: {
          path: [["M", startPoint.x, startPoint.y], ["Q", controlPoint.x + 8, controlPoint.y, centerPoint.x, centerPoint.y], ["T", endPoint.x - 8, endPoint.y], ["L", endPoint.x, endPoint.y]],
          stroke: "#ccc",
          lineWidth: 1.6,
          // endArrow: {
          //   path: "M 4,0 L -4,-4 L -4,4 Z",
          //   d: 4
          // }
        }
      });

      // 如果是不对称的贝塞尔曲线，需要计算贝塞尔曲线上的中心点
      // 参考资料 https://stackoverflow.com/questions/54216448/how-to-find-a-middle-point-of-a-beizer-curve
      // 具体Util方法可以参考G：https://github.com/antvis/g/blob/4.x/packages/g-math/src/quadratic.ts

      // 在贝塞尔曲线中心点上添加圆形
      // var source = cfg.source,
      //   target = cfg.target;

      // group.addShape("circle", {
      //   attrs: {
      //     id: "statusNode" + source + "-" + target,
      //     r: 6,
      //     x: centerPoint.x,
      //     y: centerPoint.y,
      //     fill: cfg.active ? "#AB83E4" : "#ccc"
      //   }
      // });

      return path;
    }
  });

  // var g = new dagre.graphlib.Graph();
  // g.setDefaultEdgeLabel(function() {
  //   return {};
  // });
  // g.setGraph({
  //   rankdir: 'LR'
  // });

  // data.nodes.forEach(function(node) {
  //   g.setNode(node.id + '', {
  //     width: 150,
  //     height: 50
  //   });
  // });

  // data.edges.forEach(function(edge) {
  //   edge.source = edge.source + '';
  //   edge.target = edge.target + '';
  //   g.setEdge(edge.source, edge.target);
  // });
  // dagre.layout(g);

  // var coord = void 0;
  // g.nodes().forEach(function(node, i) {
  //   coord = g.node(node);
  //   data.nodes[i].x = coord.x;
  //   data.nodes[i].y = coord.y;
  // });
  // g.edges().forEach(function(edge, i) {
  //   coord = g.edge(edge);
  //   var startPoint = coord.points[0];
  //   var endPoint = coord.points[coord.points.length - 1];
  //   data.edges[i].startPoint = startPoint;
  //   data.edges[i].endPoint = endPoint;
  //   data.edges[i].controlPoints = coord.points.slice(1, coord.points.length - 1);
  // });

  this.graph = new G6.Graph({
    container: "mountNode",
    width: 1000,
    height: 800,
  //   modes: {
  //     default: ['drag-canvas']
  //   },
  layout: {
    type: 'dagre',
    rankdir: 'LR',           // 可选，默认为图的中心
    // align: 'DL',             // 可选
    nodesep: 20,             // 可选
    // ranksep: 50,             // 可选
    // controlPoints: true      // 可选
  },
    defaultNode: {
      shape: "node",
      labelCfg: {
        style: {
          fill: "#000",
          fontSize: 14
        }
      }
    },
    defaultEdge: {
      shape: "line-with-arrow"
    },
    edgeStyle: {
      default: {
        endArrow: true,
        lineWidth: 2,
        stroke: "#ccc"
      }
    }
  });

  this.graph.data(data);
  this.graph.render();

  this.graph.on('node:click', function(evt) {
    console.log('click',evt.target)
    var target = evt.target;

    var type = target.get('type');
    if (type === 'circle') {
      // 点击边上的circle
      alert('你点击的是边上的圆点');
    }
  });
    }
  }
</script>